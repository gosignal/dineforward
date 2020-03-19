/* eslint-disable no-console */
const View = require('@keystonejs-contrib/view');
const bodyParser = require('body-parser');
const stripe = require('stripe')(config.stripe.secretKey);
const extend = bodyParser.urlencoded({ extended: true });
stripe.setApiVersion(config.stripe.apiVersion);

const calculatePaymentAmount = async items => {
  //   const productList = await products.list();
  const productList = [];
  // Look up sku for the item so we can get the current price.
  const skus = productList.data.reduce((a, product) => [...a, ...product.skus.data], []);
  const total = items.reduce((a, item) => {
    const sku = skus.filter(sku => sku.id === item.parent)[0];
    return a + sku.price * item.quantity;
  }, 0);
  return total;
};

const usePaymentIntents = async (req, res) => {
  let { currency, items } = req.body;
  const amount = await calculatePaymentAmount(items);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: config.paymentMethods,
    });
    return res.status(200).json({ paymentIntent });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const useConfig = async (req, res, next) => {
  res.json({
    stripePublishableKey: config.stripe.publishableKey,
    stripeCountry: config.stripe.country,
    country: config.country,
    currency: config.currency,
    paymentMethods: config.paymentMethods,
    shippingOptions: config.shippingOptions,
  });
};

const useWebhook = async (req, res, next) => {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  if (config.stripe.webhookSecret) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(req.rawBody, signature, config.stripe.webhookSecret);
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }
  const object = data.object;

  // Monitor payment_intent.succeeded & payment_intent.payment_failed events.
  if (object.object === 'payment_intent') {
    const paymentIntent = object;
    if (eventType === 'payment_intent.succeeded') {
      console.log(`🔔  Webhook received! Payment for PaymentIntent ${paymentIntent.id} succeeded.`);
    } else if (eventType === 'payment_intent.payment_failed') {
      const paymentSourceOrMethod = paymentIntent.last_payment_error.payment_method
        ? paymentIntent.last_payment_error.payment_method
        : paymentIntent.last_payment_error.source;
      console.log(
        `🔔  Webhook received! Payment on ${paymentSourceOrMethod.object} ${
          paymentSourceOrMethod.id
        } of type ${paymentSourceOrMethod.type} for PaymentIntent ${paymentIntent.id} failed.`,
      );
      // Note: you can use the existing PaymentIntent to prompt your customer to try again by attaching a newly created source:
      // https://stripe.com/docs/payments/payment-intents/usage#lifecycle
    }
  }

  // Monitor `source.chargeable` events.
  if (
    object.object === 'source' &&
    object.status === 'chargeable' &&
    object.metadata.paymentIntent
  ) {
    const source = object;
    console.log(`🔔  Webhook received! The source ${source.id} is chargeable.`);
    // Find the corresponding PaymentIntent this source is for by looking in its metadata.
    const paymentIntent = await stripe.paymentIntents.retrieve(source.metadata.paymentIntent);
    // Check whether this PaymentIntent requires a source.
    if (paymentIntent.status != 'requires_payment_method') {
      return res.sendStatus(403);
    }
    // Confirm the PaymentIntent with the chargeable source.
    await stripe.paymentIntents.confirm(paymentIntent.id, { source: source.id });
  }

  // Monitor `source.failed` and `source.canceled` events.
  if (
    object.object === 'source' &&
    ['failed', 'canceled'].includes(object.status) &&
    object.metadata.paymentIntent
  ) {
    const source = object;
    console.log(`🔔  The source ${source.id} failed or timed out.`);
    // Cancel the PaymentIntent.
    await stripe.paymentIntents.cancel(source.metadata.paymentIntent);
  }

  // Return a 200 success code to Stripe.
  res.sendStatus(200);
};
const getOfferingsByBusiness = async (req, res) => {
  res.json({ products: [] });
};

const getOfferingById = async (req, res) => {
  res.json({ product: { name: 'test' } });
};

const getPaymentIntentStatus = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.retrieve(req.params.id);
  res.json({ paymentIntent: { status: paymentIntent.status } });
};

const testReturn = async (req, res) => {
  return res.json(200).json({ test: 'success' });
};

module.exports = (keystone, app) => {
  app.use('/config', useConfig);
  app.use('/payment_intents', usePaymentIntents);
  app.use('/payment_intents/:id/shipping_change', extend, testReturn);
  app.use('/payment_intents/:id/status', extend, getPaymentIntentStatus);
  app.use('/offering/:businessId', extend, getOfferingsByBusiness);
  app.use('/offering/:id', extend, getOfferingById);
};
