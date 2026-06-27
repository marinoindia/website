import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, ArrowRight, X } from 'lucide-react';
import { catalogItems, type CatalogItem } from '@/data/items';

const WA_NUMBER = '919831144669';

function whatsappLink(item: CatalogItem) {
  const text = `Hello, I am interested in *${item.name}*. Please share details and price.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Matches the query against the item name and all keyword aliases.
function matches(item: CatalogItem, q: string) {
  const haystack = (item.name + ' ' + item.keywords.join(' ')).toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

const ItemSearch = () => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return catalogItems;
    return catalogItems.filter((item) => matches(item, q));
  }, [query]);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products — e.g. shackle, wire rope, turnbuckle, gotka…"
          aria-label="Search products"
          className="w-full pl-12 pr-12 py-4 rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <p className="mt-2 text-sm text-slate-500 text-center">
        {query.trim()
          ? `${results.length} ${results.length === 1 ? 'match' : 'matches'} for “${query.trim()}”`
          : `Search our full range of ${catalogItems.length} products`}
      </p>

      {/* Results */}
      <div className="mt-5 space-y-2">
        {results.length === 0 && (
          <div className="text-center py-10 px-4 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-600 mb-3">No products matched “{query.trim()}”.</p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                `Hello, I am looking for "${query.trim()}". Do you supply this?`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Ask us on WhatsApp
            </a>
          </div>
        )}

        {results.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3 hover:border-emerald-300 hover:shadow-sm transition"
          >
            <div className="min-w-0">
              <span className="font-medium text-slate-900 block truncate">{item.name}</span>
              {item.productPath && (
                <Link
                  to={item.productPath}
                  className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700"
                >
                  View details
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
            <a
              href={whatsappLink(item)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Enquire</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSearch;
