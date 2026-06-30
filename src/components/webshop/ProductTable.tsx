import { useMemo, useState, useEffect } from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/use-toast';
import { ProductRow } from './ProductRow';
import { formatInr } from '@/lib/currency';
import type { CatalogueProduct, Variant } from '@/lib/catalogue';

const PAGE_SIZE = 50; // product groups per page

interface Props {
  products: CatalogueProduct[];
}

export const ProductTable = ({ products }: Props) => {
  const { addToCart } = useCart();
  const [page, setPage] = useState(0);

  // Reset to first page whenever the product set changes (category/filter switch).
  useEffect(() => {
    setPage(0);
  }, [products]);

  // Stable columns = ordered union of option keys across all products in view.
  const columnKeys = useMemo(() => {
    const keys: string[] = [];
    for (const p of products) {
      for (const k of p.optionKeys) if (!keys.includes(k)) keys.push(k);
    }
    return keys;
  }, [products]);

  const pageCount = Math.ceil(products.length / PAGE_SIZE);
  const pageProducts = products.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handleAdd = (product: CatalogueProduct, variant?: Variant) => {
    const priceInr = variant ? variant.priceInr : product.priceInr;
    if (priceInr == null) return;
    const size = variant ? variant.label : 'Standard';
    const id = variant ? `${product.id}::${variant.label}` : product.id;
    const name = variant ? `${product.name} (${variant.label})` : product.name;
    const image = product.image ? `${import.meta.env.BASE_URL}${product.image}` : '';
    addToCart({ id, name, image, price: priceInr, size });
    toast({ title: 'Added to cart', description: `${name} — ${formatInr(priceInr)}` });
  };

  if (products.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No products match the selected filters.
      </p>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columnKeys.map((k) => (
                <TableHead key={k} className="text-xs uppercase tracking-wide">
                  {k}
                </TableHead>
              ))}
              <TableHead className="text-right text-xs uppercase tracking-wide">Price</TableHead>
              <TableHead className="text-right text-xs uppercase tracking-wide w-20">Cart</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageProducts.map((p) => (
              <ProductRow key={p.id} product={p} columnKeys={columnKeys} onAdd={handleAdd} />
            ))}
          </TableBody>
        </Table>
      </div>

      {pageCount > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page + 1} of {pageCount}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page >= pageCount - 1}
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};
