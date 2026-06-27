// OPTIONAL serverless stub — for PRODUCTION-grade Razorpay verification.
//
// The current static (GitHub Pages) site opens Razorpay Checkout client-side
// with only the public Key ID. That works, but it cannot create a server-side
// order or verify the payment signature. For a fully verified flow, deploy this
// file as a serverless function (Vercel / Netlify / Cloudflare Workers) and:
//   1. Call this endpoint from the frontend to create an order, then pass the
//      returned order_id into the Razorpay Checkout options.
//   2. Add a second endpoint to verify razorpay_signature using HMAC-SHA256
//      with your KEY SECRET before treating an order as paid.
//
// SECURITY: RAZORPAY_KEY_SECRET must ONLY ever live in server env vars —
// never in frontend code or this repo.
//
// import Razorpay from 'razorpay';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // const razorpay = new Razorpay({
  //   key_id: process.env.RAZORPAY_KEY_ID!,
  //   key_secret: process.env.RAZORPAY_KEY_SECRET!, // server-only secret
  // });
  // const { amount } = req.body as { amount: number }; // amount in paise
  // const order = await razorpay.orders.create({ amount, currency: 'INR', receipt: `rcpt_${Date.now()}` });
  // return res.status(200).json(order);

  return res.status(501).json({
    error: 'Not implemented. Install the "razorpay" package, set server env vars, and uncomment the code above.',
  });
}
