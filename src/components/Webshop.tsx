import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { CartSheet } from './CartSheet';
import { FilterSidebar } from './webshop/FilterSidebar';
import { CatalogueBreadcrumb } from './webshop/CatalogueBreadcrumb';
import { ProductTable } from './webshop/ProductTable';
import {
  useCatalogue,
  findTop,
  findSub,
  productsInSub,
  facetValues,
  applyFacets,
  searchProducts,
} from '@/lib/catalogue';

export const Webshop = () => {
  const { data: catalogue, isLoading, isError, refetch } = useCatalogue();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFacets, setActiveFacets] = useState<Record<string, Set<string>>>({});
  const [search, setSearch] = useState('');

  const activeTop = searchParams.get('cat') ?? undefined;
  const activeSub = searchParams.get('sub') ?? undefined;

  const navigate = (topSlug?: string, subSlug?: string) => {
    const next = new URLSearchParams();
    if (topSlug) next.set('cat', topSlug);
    if (topSlug && subSlug) next.set('sub', subSlug);
    setSearchParams(next);
    setActiveFacets({});
    setSearch('');
  };

  const toggleFacet = (key: string, value: string) => {
    setActiveFacets((prev) => {
      const set = new Set(prev[key] ?? []);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [key]: set };
    });
  };

  const top = catalogue ? findTop(catalogue, activeTop) : undefined;
  const sub = findSub(top, activeSub);

  // Products for the selected sub-category, with facets + search applied.
  const subProducts = useMemo(
    () => (catalogue && activeTop && activeSub ? productsInSub(catalogue, activeTop, activeSub) : []),
    [catalogue, activeTop, activeSub],
  );
  const facets = useMemo(() => facetValues(subProducts), [subProducts]);
  const visibleProducts = useMemo(
    () => searchProducts(applyFacets(subProducts, activeFacets), search),
    [subProducts, activeFacets, search],
  );

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Webshop Catalogue</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Wire rope, fittings &amp; lifting hardware — listed prices in ₹, delivery across India.
          </p>
        </div>
        <CartSheet />
      </div>

      {isLoading && <CatalogueSkeleton />}

      {isError && (
        <div className="py-16 text-center">
          <p className="text-muted-foreground mb-4">Sorry — the catalogue failed to load.</p>
          <Button variant="outline" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      )}

      {catalogue && (
        <div className="flex flex-col lg:flex-row gap-6">
          <FilterSidebar
            categories={catalogue.categories}
            activeTop={activeTop}
            activeSub={activeSub}
            onNavigate={navigate}
            facets={facets}
            activeFacets={activeFacets}
            onToggleFacet={toggleFacet}
            onClearFacets={() => setActiveFacets({})}
            search={search}
            onSearch={setSearch}
          />

          <div className="flex-1 min-w-0">
            {sub ? (
              <>
                <div className="mb-4 border-b pb-3">
                  <CatalogueBreadcrumb
                    topName={top?.name}
                    topSlug={top?.slug}
                    subName={sub.name}
                    count={visibleProducts.length}
                    onNavigate={navigate}
                  />
                </div>
                <ProductTable products={visibleProducts} />
              </>
            ) : (
              <CategoryLanding catalogue={catalogue} onNavigate={navigate} activeTop={activeTop} />
            )}
          </div>
        </div>
      )}

      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li>✓ Minimum order of ₹5,000 required for delivery</li>
          <li>✓ Orders below ₹5,000 are available for pick-up at store only</li>
          <li>✓ Standard delivery within 7 days of payment — all over India</li>
          <li>✓ Prices are indicative — please confirm the current rate before ordering</li>
        </ul>
      </div>
    </div>
  );
};

const CategoryLanding = ({
  catalogue,
  activeTop,
  onNavigate,
}: {
  catalogue: ReturnType<typeof useCatalogue>['data'];
  activeTop?: string;
  onNavigate: (topSlug?: string, subSlug?: string) => void;
}) => {
  // Representative image per sub-category = first product in that sub that has one.
  const subImages = useMemo(() => {
    const m: Record<string, string> = {};
    for (const p of catalogue?.products ?? []) {
      const key = `${p.topSlug}/${p.subSlug}`;
      if (p.image && !m[key]) m[key] = p.image;
    }
    return m;
  }, [catalogue]);

  if (!catalogue) return null;
  const tops = activeTop
    ? catalogue.categories.filter((c) => c.slug === activeTop)
    : catalogue.categories;

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-5">
        {activeTop ? 'Select a sub-category:' : 'Browse a category to view products and prices.'}
      </p>
      <div className="space-y-8">
        {tops.map((cat) => (
          <div key={cat.slug}>
            <button
              type="button"
              onClick={() => onNavigate(cat.slug)}
              className="text-lg font-semibold hover:text-primary"
            >
              {cat.name}{' '}
              <span className="text-sm font-normal text-muted-foreground">({cat.count})</span>
            </button>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.subs.map((sub) => {
                const img = subImages[`${cat.slug}/${sub.slug}`];
                return (
                  <button
                    key={sub.slug}
                    type="button"
                    onClick={() => onNavigate(cat.slug, sub.slug)}
                    className="group flex flex-col rounded-lg border bg-card p-2 text-left transition hover:border-primary hover:shadow-md"
                  >
                    <div className="aspect-square w-full overflow-hidden rounded bg-white mb-2">
                      <img
                        src={img ? `${import.meta.env.BASE_URL}${img}` : '/placeholder.svg'}
                        alt={sub.name}
                        loading="lazy"
                        className="h-full w-full object-contain p-2"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium leading-snug group-hover:text-primary">
                      {sub.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{sub.count} products</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CatalogueSkeleton = () => (
  <div className="flex flex-col lg:flex-row gap-6">
    <div className="w-full lg:w-64 space-y-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-5 w-full" />
      ))}
    </div>
    <div className="flex-1 space-y-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton key={i} className="h-8 w-full" />
      ))}
    </div>
  </div>
);
