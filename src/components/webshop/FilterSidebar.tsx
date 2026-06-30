import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import type { Category } from '@/lib/catalogue';

interface Props {
  categories: Category[];
  activeTop?: string;
  activeSub?: string;
  onNavigate: (topSlug?: string, subSlug?: string) => void;
  // facets (only shown when a sub-category is active)
  facets: Record<string, string[]>;
  activeFacets: Record<string, Set<string>>;
  onToggleFacet: (key: string, value: string) => void;
  onClearFacets: () => void;
  // in-list search
  search: string;
  onSearch: (value: string) => void;
}

export const FilterSidebar = ({
  categories,
  activeTop,
  activeSub,
  onNavigate,
  facets,
  activeFacets,
  onToggleFacet,
  onClearFacets,
  search,
  onSearch,
}: Props) => {
  const hasActiveFacets = Object.values(activeFacets).some((s) => s.size > 0);
  const facetKeys = Object.keys(facets);

  return (
    <aside className="w-full lg:w-64 lg:flex-shrink-0 border-r border-border/60 lg:pr-4">
      {/* Browse / categories */}
      <div className="mb-6">
        <h2 className="text-base font-bold mb-2">Browse</h2>
        <ul className="space-y-0.5 text-sm">
          {categories.map((cat) => {
            const open = cat.slug === activeTop;
            return (
              <li key={cat.slug}>
                <button
                  type="button"
                  onClick={() => onNavigate(cat.slug)}
                  className={cn(
                    'w-full text-left py-1 hover:text-primary transition-colors',
                    open ? 'font-semibold text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {cat.name}{' '}
                  <span className="text-xs text-muted-foreground">({cat.count})</span>
                </button>
                {open && (
                  <ul className="ml-3 mt-0.5 mb-1 space-y-0.5 border-l border-border/60 pl-3">
                    {cat.subs.map((sub) => (
                      <li key={sub.slug}>
                        <button
                          type="button"
                          onClick={() => onNavigate(cat.slug, sub.slug)}
                          className={cn(
                            'w-full text-left py-0.5 hover:underline',
                            sub.slug === activeSub
                              ? 'font-medium text-primary'
                              : 'text-primary/80',
                          )}
                        >
                          {sub.name}{' '}
                          <span className="text-xs text-muted-foreground">({sub.count})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Facets — only when a sub-category is selected */}
      {activeSub && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-bold">Filter by</h2>
            {hasActiveFacets && (
              <button
                type="button"
                onClick={onClearFacets}
                className="text-xs text-primary hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="mb-4">
            <Input
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search this category…"
              className="h-8 text-sm"
            />
          </div>

          {facetKeys.length === 0 && (
            <p className="text-xs text-muted-foreground">No filters for this category.</p>
          )}

          {facetKeys.map((key) => (
            <div key={key} className="mb-4">
              <h3 className="text-sm font-semibold mb-1.5">{key}</h3>
              <ul className="space-y-1">
                {facets[key].map((val) => {
                  const id = `${key}__${val}`;
                  const checked = activeFacets[key]?.has(val) ?? false;
                  return (
                    <li key={id} className="flex items-center gap-2">
                      <Checkbox
                        id={id}
                        checked={checked}
                        onCheckedChange={() => onToggleFacet(key, val)}
                      />
                      <label htmlFor={id} className="text-sm text-muted-foreground cursor-pointer">
                        {val}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};
