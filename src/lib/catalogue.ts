// Catalogue data layer for the webshop.
//
// Loads the generated Express catalogue (public/shop-data/express-catalogue.json,
// prices already converted to INR by scripts/build-catalogue.py) and merges the
// existing Marino wire-rope slings (from slingPriceList.ts, real INR prices) in as
// the first category — so the webshop shows both in one McMaster-Carr-style table.
import { useQuery } from '@tanstack/react-query';
import { slingPriceList } from '@/data/slingPriceList';

export interface Variant {
  options: Record<string, string>;
  label: string;
  priceInr: number | null;
  original?: number | string | null;
}

export interface CatalogueProduct {
  id: string;
  name: string;
  sku: string | null;
  topSlug: string;
  subSlug: string;
  topName: string;
  subName: string;
  description: string;
  optionKeys: string[];
  variants: Variant[];
  priceInr: number | null;
  priceFrom: boolean;
  currency: string;
  image?: string | null;
  sourceUrl?: string;
}

export interface SubCategory {
  slug: string;
  name: string;
  count: number;
}

export interface Category {
  slug: string;
  name: string;
  count: number;
  subs: SubCategory[];
}

export interface Catalogue {
  generatedAt: string;
  source: string;
  currency: string;
  productCount: number;
  categories: Category[];
  products: CatalogueProduct[];
}

// --- Marino slings as a catalogue category (real INR prices, slingPriceList untouched) ---
export const SLING_TOP_SLUG = 'wire-rope-slings';
export const SLING_SUB_SLUG = 'steel-wire-rope-slings';

function buildSlingProducts(): CatalogueProduct[] {
  return slingPriceList
    .map((group) => {
      const priced = group.rows.filter((r) => r.rate != null);
      if (priced.length === 0) return null;
      const variants: Variant[] = priced.map((r) => ({
        options: { Length: r.length },
        label: r.length,
        priceInr: r.rate as number,
        original: r.rate,
      }));
      const prices = variants.map((v) => v.priceInr as number);
      return {
        id: `sling-${group.size.replace(/\s+/g, '').toLowerCase()}`,
        name: `Wire Rope Sling ${group.size}`,
        sku: null,
        topSlug: SLING_TOP_SLUG,
        subSlug: SLING_SUB_SLUG,
        topName: 'Wire Rope Slings',
        subName: 'Steel Wire Rope Slings',
        description:
          'Steel Wire Rope Sling, hand-spliced (H/S), 6×36 construction (GWRC), right-hand ordinary lay (RHOL). Rate per piece.',
        optionKeys: ['Length'],
        variants,
        priceInr: Math.min(...prices),
        priceFrom: variants.length > 1,
        currency: 'INR',
        image: 'images/slings.jpeg',
      } as CatalogueProduct;
    })
    .filter((p): p is CatalogueProduct => p !== null);
}

function slingCategory(products: CatalogueProduct[]): Category {
  return {
    slug: SLING_TOP_SLUG,
    name: 'Wire Rope Slings',
    count: products.length,
    subs: [{ slug: SLING_SUB_SLUG, name: 'Steel Wire Rope Slings', count: products.length }],
  };
}

async function loadCatalogue(): Promise<Catalogue> {
  const url = `${import.meta.env.BASE_URL}shop-data/express-catalogue.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load catalogue (${res.status})`);
  const express = (await res.json()) as Catalogue;

  // Prepend Marino slings (own real prices) as the first category.
  const slings = buildSlingProducts();
  return {
    ...express,
    productCount: express.productCount + slings.length,
    categories: [slingCategory(slings), ...express.categories],
    products: [...slings, ...express.products],
  };
}

/** React Query hook — the catalogue is static per build, so cache it forever. */
export function useCatalogue() {
  return useQuery({
    queryKey: ['catalogue'],
    queryFn: loadCatalogue,
    staleTime: Infinity,
    gcTime: Infinity,
  });
}

// ---------- selectors (pure helpers over an in-memory catalogue) ----------

export function findTop(cat: Catalogue, topSlug?: string): Category | undefined {
  return cat.categories.find((c) => c.slug === topSlug);
}

export function findSub(top: Category | undefined, subSlug?: string): SubCategory | undefined {
  return top?.subs.find((s) => s.slug === subSlug);
}

export function productsInSub(cat: Catalogue, topSlug: string, subSlug: string): CatalogueProduct[] {
  return cat.products.filter((p) => p.topSlug === topSlug && p.subSlug === subSlug);
}

/** Distinct option-key -> sorted distinct values, across a set of products (for facets). */
export function facetValues(products: CatalogueProduct[]): Record<string, string[]> {
  const acc: Record<string, Set<string>> = {};
  for (const p of products) {
    for (const v of p.variants) {
      for (const [k, val] of Object.entries(v.options)) {
        (acc[k] ??= new Set()).add(val);
      }
    }
  }
  const out: Record<string, string[]> = {};
  for (const [k, set] of Object.entries(acc)) {
    out[k] = Array.from(set).sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
    );
  }
  return out;
}

/** Keep products that have at least one variant matching every active facet value. */
export function applyFacets(
  products: CatalogueProduct[],
  active: Record<string, Set<string>>,
): CatalogueProduct[] {
  const activeKeys = Object.entries(active).filter(([, set]) => set.size > 0);
  if (activeKeys.length === 0) return products;
  return products.filter((p) =>
    p.variants.some((v) =>
      activeKeys.every(([k, set]) => set.has(v.options[k])),
    ),
  );
}

/** Simple case-insensitive name/sku search within a product list. */
export function searchProducts(products: CatalogueProduct[], q: string): CatalogueProduct[] {
  const term = q.trim().toLowerCase();
  if (!term) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(term) ||
      (p.sku ?? '').toLowerCase().includes(term),
  );
}
