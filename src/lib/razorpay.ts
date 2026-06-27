// Razorpay Checkout helper for a static (no-backend) site.
//
// The public Key ID is safe to expose in the browser — that is by design.
// The SECRET key must NEVER appear in frontend code.
//
// NOTE: Because this site is hosted statically (GitHub Pages) with no backend,
// this opens Razorpay Checkout client-side with just the Key ID + amount.
// For production-grade verification you should add a small serverless endpoint
// that (1) creates an order via the Razorpay Orders API and (2) verifies the
// payment signature server-side. See api/razorpay-create-order.ts for a stub.

export interface RazorpaySuccess {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

export interface RazorpayOptions {
  key: string;
  amount: number; // in paise (INR * 100)
  currency: string;
  name: string;
  description?: string;
  image?: string;
  order_id?: string;
  prefill?: { name?: string; email?: string; contact?: string };
  notes?: Record<string, string>;
  theme?: { color?: string };
  handler: (response: RazorpaySuccess) => void;
  modal?: { ondismiss?: () => void };
}

const SCRIPT_SRC = 'https://checkout.razorpay.com/v1/checkout.js';

export function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if ((window as unknown as { Razorpay?: unknown }).Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function openRazorpay(options: RazorpayOptions): Promise<boolean> {
  const ok = await loadRazorpay();
  if (!ok) return false;
  const RazorpayCtor = (window as unknown as { Razorpay: new (o: RazorpayOptions) => { open: () => void } }).Razorpay;
  const rzp = new RazorpayCtor(options);
  rzp.open();
  return true;
}

// Configure your key via a .env file: VITE_RAZORPAY_KEY_ID=rzp_live_xxx (or rzp_test_xxx)
export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID as string | undefined;
