import { Fragment } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { formatInr } from '@/lib/currency';
import type { CatalogueProduct, Variant } from '@/lib/catalogue';

interface Props {
  product: CatalogueProduct;
  columnKeys: string[];
  onAdd: (product: CatalogueProduct, variant?: Variant) => void;
}

const AddCell = ({ priceInr, onClick }: { priceInr: number | null; onClick: () => void }) =>
  priceInr == null ? (
    <span className="text-xs text-muted-foreground italic">Price on request</span>
  ) : (
    <Button size="sm" variant="outline" className="h-7 px-2" onClick={onClick}>
      <ShoppingCart className="h-3.5 w-3.5 sm:mr-1" />
      <span className="hidden sm:inline">Add</span>
    </Button>
  );

/** One product = a group header row + one row per variant (McMaster material-group style). */
export const ProductRow = ({ product, columnKeys, onAdd }: Props) => {
  const span = columnKeys.length + 2; // option columns + price + add
  const variants = product.variants.length > 0 ? product.variants : [null];

  return (
    <Fragment>
      {/* group header */}
      <TableRow className="bg-muted/60 hover:bg-muted/60">
        <TableCell colSpan={span} className="py-2">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <span className="font-semibold text-foreground">{product.name}</span>
            {product.sku && (
              <span className="text-xs text-muted-foreground">Part {product.sku}</span>
            )}
            {product.priceFrom && product.priceInr != null && (
              <span className="text-xs text-muted-foreground">from {formatInr(product.priceInr)}</span>
            )}
          </div>
        </TableCell>
      </TableRow>

      {/* variant rows */}
      {variants.map((v, i) => {
        const priceInr = v ? v.priceInr : product.priceInr;
        return (
          <TableRow key={v ? v.label + i : `simple-${i}`}>
            {columnKeys.map((k) => (
              <TableCell key={k} className="py-1.5 text-sm">
                {v?.options[k] ?? '—'}
              </TableCell>
            ))}
            <TableCell className="py-1.5 text-right font-medium tabular-nums whitespace-nowrap">
              {priceInr == null ? '—' : formatInr(priceInr)}
            </TableCell>
            <TableCell className="py-1.5 text-right">
              <AddCell priceInr={priceInr} onClick={() => onAdd(product, v ?? undefined)} />
            </TableCell>
          </TableRow>
        );
      })}
    </Fragment>
  );
};
