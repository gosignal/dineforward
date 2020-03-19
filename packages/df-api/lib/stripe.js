// const stripe = require('stripe')(config.stripe.secretKey);
// stripe.setApiVersion(config.stripe.apiVersion);

// // Calculate total payment amount based on items in basket.
// const calculatePaymentAmount = async items => {
//   //   const productList = await products.list();
//   const productList = [];

//   // Look up sku for the item so we can get the current price.
//   const skus = productList.data.reduce((a, product) => [...a, ...product.skus.data], []);
//   const total = items.reduce((a, item) => {
//     const sku = skus.filter(sku => sku.id === item.parent)[0];
//     return a + sku.price * item.quantity;
//   }, 0);
//   return total;
// };
// const calcualtePaymnet
// const paymentIntent = await stripe.paymentIntents.create({
//   amount,
//   currency,
//   payment_method_types: config.paymentMethods,
// });

// // async (req, res, next) => {
// //   let { currency, items } = req.body;
// //   const amount = await calculatePaymentAmount(items);

// //   try {

// //     return res.status(200).json({ paymentIntent });
// //   } catch (err) {
// //     return res.status(500).json({ error: err.message });
// //   }
// // };

// module.exports = { calculatePaymentAmount };
