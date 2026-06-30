// Currency conversion + formatting for the webshop catalogue.
//
// IMPORTANT: these FX factors MUST stay in sync with website/scripts/build-catalogue.py,
// which bakes converted whole-rupee prices into public/shop-data/express-catalogue.json.
// The UI only *formats* prices; it never multiplies by FX at runtime (avoids drift).
export const FX = {
  GBP_INR: 110, // Express (expresswirerope.com) prices: price_inc_vat × 110
  // USD_INR: 86, // reserved for the later US Cargo phase
} as const;

/** Format an integer rupee amount, e.g. 5777 -> "₹5,777". */
export const formatInr = (n: number): string => `₹${Math.round(n).toLocaleString('en-IN')}`;
