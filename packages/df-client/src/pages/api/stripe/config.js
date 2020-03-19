/* eslint-disable no-console */
// import { buffer } from 'micro';
import Cors from 'micro-cors';

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: true,
  },
};

const cors = Cors({
  allowMethods: ['GET', 'POST', 'HEAD'],
});

const configStripe = async (req, res) => {
  // Return a response to acknowledge receipt of the event.
  res.json({ received: true });
};

export default cors(configStripe);
