// Steel Wire Rope Sling price list — 6x36 Constn (GWRC), RHOL Lay, H/S.
// Sourced from item_priceList/sling_price_list.md.
// Rates transcribed from a handwritten price sheet — verify before quoting.
// 32mm was crossed out on the original sheet (price on request).

export interface SlingPriceRow {
  length: string; // e.g. "3 Mtr"
  rate: number | null; // ₹ per piece; null = on request
}

export interface SlingPriceGroup {
  size: string; // e.g. "12 mm"
  rows: SlingPriceRow[];
}

export const slingPriceList: SlingPriceGroup[] = [
  {
    size: '12 mm',
    rows: [
      { length: '3 Mtr', rate: 950 },
      { length: '4 Mtr', rate: 1050 },
      { length: '5 Mtr', rate: 1250 },
      { length: '6 Mtr', rate: 1375 },
    ],
  },
  {
    size: '16 mm',
    rows: [
      { length: '3 Mtr', rate: 880 },
      { length: '4 Mtr', rate: 1080 },
      { length: '5 Mtr', rate: 1350 },
      { length: '6 Mtr', rate: 1680 },
    ],
  },
  {
    size: '18 mm',
    rows: [
      { length: '3 Mtr', rate: 1350 },
      { length: '4 Mtr', rate: 1650 },
      { length: '5 Mtr', rate: 1800 },
      { length: '6 Mtr', rate: 2100 },
    ],
  },
  {
    size: '20 mm',
    rows: [
      { length: '3 Mtr', rate: 1475 },
      { length: '4 Mtr', rate: 1800 },
      { length: '5 Mtr', rate: 2100 },
      { length: '6 Mtr', rate: 2450 },
    ],
  },
  {
    size: '22 mm',
    rows: [
      { length: '3 Mtr', rate: 1800 },
      { length: '4 Mtr', rate: 2350 },
      { length: '5 Mtr', rate: 2700 },
      { length: '6 Mtr', rate: 3800 },
    ],
  },
  {
    size: '25 mm',
    rows: [
      { length: '3 Mtr', rate: 2500 },
      { length: '4 Mtr', rate: 2900 },
      { length: '5 Mtr', rate: 3300 },
      { length: '6 Mtr', rate: 3600 },
    ],
  },
  {
    size: '32 mm',
    rows: [
      { length: '3 Mtr', rate: null },
      { length: '4 Mtr', rate: null },
      { length: '5 Mtr', rate: null },
      { length: '6 Mtr', rate: null },
    ],
  },
];

// Build schema.org Product entries (with AggregateOffer + price) from the price
// list, for SEO rich results. Shared by the webshop and premade-slings pages.
export function slingProductSchema() {
  return slingPriceList
    .map((group) => {
      const priced = group.rows.filter((row) => row.rate != null);
      if (priced.length === 0) return null;
      const prices = priced.map((row) => row.rate as number);
      return {
        '@type': 'Product',
        name: `Wire Rope Sling ${group.size}`,
        description: `Steel Wire Rope Sling ${group.size}, hand-spliced (H/S), 6×36 construction (GWRC), right-hand ordinary lay (RHOL). Available lengths: ${priced.map((row) => row.length).join(', ')}.`,
        image: 'https://marinoindia.co.in/images/slings.jpeg',
        category: 'Wire Rope Slings',
        brand: { '@type': 'Brand', name: 'Usha Martin' },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          lowPrice: Math.min(...prices),
          highPrice: Math.max(...prices),
          offerCount: priced.length,
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: 'Marino Corporation Of India' },
        },
      };
    })
    .filter(Boolean);
}
