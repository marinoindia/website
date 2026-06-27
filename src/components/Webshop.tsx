import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { CartSheet } from './CartSheet';
import { slingPriceList } from '@/data/slingPriceList';

const SLING_IMAGE = '/images/slings.jpeg';

// Shared specification for every sling, taken from the price sheet header:
// "Steel Wire Rope Slings (H/S), 6×36 Constn (GWRC), RHOL Lay".
const SLING_DESCRIPTION =
  'Steel Wire Rope Sling, hand-spliced (H/S), 6×36 construction with galvanised wire rope core (GWRC), right-hand ordinary lay (RHOL). Rate is per piece.';

const SLING_SPECS = [
  { label: 'Type', value: 'Hand-Spliced (H/S)' },
  { label: 'Construction', value: '6×36 (GWRC)' },
  { label: 'Lay', value: 'Right-Hand Ordinary (RHOL)' },
  { label: 'Basis', value: 'Per Piece (P/P)' },
];

// Webshop products are built from the real Steel Wire Rope Sling price list
// (item_priceList/sling_price_list.md). Each diameter is a product; the
// selectable lengths each carry their exact listed rate (₹ per piece).
// Lengths with no listed price (e.g. 32mm, crossed out on the sheet) are omitted.
const products = slingPriceList
  .map((group) => {
    const pricedRows = group.rows.filter((row) => row.rate != null);
    return {
      id: `wire-rope-sling-${group.size.replace(/\s+/g, '').toLowerCase()}`,
      name: `Wire Rope Sling ${group.size}`,
      image: SLING_IMAGE,
      description: SLING_DESCRIPTION,
      sizes: pricedRows.map((row) => row.length),
      prices: Object.fromEntries(
        pricedRows.map((row) => [row.length, row.rate as number]),
      ) as Record<string, number>,
    };
  })
  .filter((product) => product.sizes.length > 0);

export const Webshop = () => {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  const handleAddToCart = (product: typeof products[0]) => {
    const selectedSize = selectedSizes[product.id] || product.sizes[0];
    const price = product.prices[selectedSize];

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price,
      size: selectedSize,
    });
  };

  const getPrice = (product: typeof products[0]) => {
    const selectedSize = selectedSizes[product.id] || product.sizes[0];
    return product.prices[selectedSize];
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Wire Rope Sling Webshop</h1>
        <p className="text-muted-foreground text-lg">
          Steel Wire Rope Slings (H/S), 6×36 construction (GWRC), RHOL lay — listed rates per piece,
          with fast delivery across India
        </p>
      </div>

      <div className="mb-6 flex justify-end">
        <CartSheet />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => {
          const currentPrice = getPrice(product);
          const selectedSize = selectedSizes[product.id] || product.sizes[0];

          return (
            <Card key={product.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 pb-2">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                </div>
                <CardTitle className="text-lg sm:text-xl">{product.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-1">
                  {product.description}
                </CardDescription>
                <p className="text-xl font-bold text-primary mt-2">
                  ₹{currentPrice.toLocaleString('en-IN')}
                </p>
              </CardHeader>
              <CardContent className="flex-1 p-4 pt-0 space-y-4">
                {/* Specification */}
                <dl className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
                  {SLING_SPECS.map((spec) => (
                    <div key={spec.label} className="contents">
                      <dt className="text-muted-foreground">{spec.label}</dt>
                      <dd className="font-medium text-right">{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Length</label>
                  <Select
                    value={selectedSize}
                    onValueChange={(value) => {
                      setSelectedSizes((prev) => ({ ...prev, [product.id]: value }));
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full"
                  size="lg"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>✓ Minimum order of ₹5,000 required for delivery</li>
          <li>✓ Orders below ₹5,000 are available for pick-up at store only</li>
          <li>✓ Standard delivery within 7 days of payment - All over India</li>
          <li>✓ Express delivery within 3 days available (extra charges apply)</li>
          <li>✓ Rates are indicative — please confirm the current rate before ordering</li>
        </ul>
      </div>
    </div>
  );
};
