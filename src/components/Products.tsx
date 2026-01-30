import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    // MUST-HAVE CATEGORIES
    {
      title: 'Chains',
      description: 'High-strength anchor chains and chain sling rigging for industrial and marine applications.',
      items: ['Anchor Chain', 'Quad Master Link with Flats', 'Chain Sling Rigging', 'Lashing Chain', 'Long Link Chain', 'Stud Link Chain'],
      image: '/images/chains.jpeg',
      category: 'must-have',
      specifications: {
        'Size Range': '10mm - 50mm diameter',
        'Length': '1m - 100m (custom lengths available)',
        'Working Load': '0.5T - 50T',
        'Link Dimensions': '50mm x 50mm - 200mm x 200mm (for master links)',
      },
    },
    {
      title: 'Slings',
      description: 'Premium steel wire rope slings and chain slings with thimbles and eye hooks for heavy lifting operations. Manufactured using Usha Martin specialized wire rope with mechanical hand-made construction (not pressed) for superior strength and durability.',
      items: ['Wire Rope Slings with Thimble', 'Wire Rope Slings with Eye Hooks', 'Chain Slings', 'Quad Master Link Chain Slings'],
      image: '/images/slings.jpeg',
      category: 'must-have',
      cataloguePdf: '/catalogue/Marino_Wire_Rope_Sling_Catalog.pdf',
      specifications: {
        'Wire Rope': 'Usha Martin specialized wire rope',
        'Manufacturing': 'Mechanical hand-made (not pressed)',
        'Size Range': '6mm - 32mm wire rope diameter',
        'Length': '0.5m - 10m (custom lengths available)',
        'Working Load': '0.5T - 30T',
        'Chain Diameter': '8mm - 32mm (for chain slings)',
        'Quality': 'Superior strength and durability',
      },
    },
    // RECOMMENDED CATEGORIES
    {
      title: 'Hooks',
      description: 'Industrial-grade hooks for lifting, hoisting, and material handling applications.',
      items: ['Grab Hooks', 'Heavy Duty D Hooks', 'Eye Hoist Hooks', 'Container Hooks', 'C-Hooks'],
      image: '/images/hooks.jpeg',
      category: 'recommended',
      specifications: {
        'Size Range': '10mm - 80mm opening',
        'Overall Dimensions': '50mm x 30mm - 300mm x 150mm',
        'Working Load': '0.5T - 20T',
      },
    },
    {
      title: 'Shackles',
      description: 'High-strength shackles for connecting chains, ropes, and lifting equipment.',
      items: ['D Shackles', 'Anchor Shackles', 'Kenter Shackles (G3 K3)', '90mm G3 K3 Kenter Shackle'],
      image: '/images/shackles.jpeg',
      category: 'recommended',
      specifications: {
        'Pin Diameter': '6mm - 90mm',
        'Overall Dimensions': '30mm x 20mm - 300mm x 180mm',
        'Working Load': '0.5T - 25T',
      },
    },
    {
      title: 'Lifting Lugs & Pins',
      description: 'Precision-engineered lifting pins, lugs, and swivels for safe and efficient lifting operations.',
      items: ['Lifting Pins', 'Lifting Lugs', 'Eye and Eye Lifting Swivels', 'Lifting Swivels'],
      image: '/images/lifting_pins.jpeg',
      category: 'recommended',
      specifications: {
        'Pin Size Range': '10mm - 50mm diameter',
        'Lug Dimensions': '50mm x 30mm x 20mm - 200mm x 100mm x 50mm',
        'Eye Diameter': '12mm - 40mm (for swivels)',
        'Working Load': '0.5T - 15T',
      },
    },
    {
      title: 'Pulleys & Blocks',
      description: 'Heavy-duty pulleys and blocks for crane operations and material handling systems. Compatible with Usha Martin wire rope for optimal performance.',
      items: ['Manila Rope Pulleys', 'Crosby Wire Rope Pulley Bearings', 'Marine Trawl Blocks', 'Industrial Pulley Blocks', 'Crane Pulley Chains'],
      image: '/images/pulley.jpeg',
      category: 'recommended',
      specifications: {
        'Wire Rope Compatibility': 'Usha Martin specialized wire rope compatible',
        'Sheave Diameter': '100mm - 800mm',
        'Rope Capacity': '6mm - 50mm diameter',
        'Working Load': '0.5T - 30T',
        'Bearing Type': 'Heavy-duty bearings for smooth operation',
      },
    },
    {
      title: 'Ropes & Mooring Equipment',
      description: 'High-quality ropes and mooring equipment for marine and industrial applications. Available with Usha Martin wire rope options for enhanced strength and durability.',
      items: ['Mooring Ropes', 'PP P8 Strand Mooring Ropes', 'Yellow Polypropylene Rope', 'Seafoam Lobster Rope Mats', 'Rope Ladders'],
      image: '/images/ropes.jpeg',
      category: 'recommended',
      specifications: {
        'Wire Rope Option': 'Usha Martin specialized wire rope available',
        'Size Range': '6mm - 80mm diameter',
        'Length': '5m - 500m (custom lengths available)',
        'Breaking Load': '0.5T - 150T',
        'Rope Mat Size': '1m x 1m - 3m x 3m',
        'Material': 'Polypropylene, Polyester, Steel wire rope',
      },
    },
    {
      title: 'Anchors & Marine Equipment',
      description: 'Complete range of ship anchors, anchor bolts, and marine safety equipment.',
      items: ['Ship Anchors', 'D-Shaped Steel Anchors (78mm)', 'Anchor Bolts', 'Fender Tyre Nets', 'Anti-Collision Tugboat Marine Rubber Nets'],
      image: '/images/anchors.jpeg',
      category: 'recommended',
      specifications: {
        'Weight Range': '5kg - 5000kg',
        'Dimensions': '0.5m x 0.3m - 3m x 2m',
        'Anchor Bolt Size': 'M12 - M64 (12mm - 64mm)',
        'Holding Power': '2T - 200T',
      },
    },
    {
      title: 'Lashing Equipment',
      description: 'Turnbuckles, lashing buckles, and ratchet belts for securing cargo and containers.',
      items: ['Turnbuckles', 'Forged One-Way Lashing Buckles', 'Orange Polyester Ratchet Lashing Belts', 'Lashing Buckles'],
      image: '/images/lashing.jpeg',
      category: 'recommended',
      specifications: {
        'Size Range': 'M8 - M30 (8mm - 30mm thread)',
        'Width': '20mm - 75mm (for belts)',
        'Length': '150mm - 500mm (for turnbuckles), 2m - 15m (for belts)',
        'Working Load': '0.5T - 10T',
      },
    },
    {
      title: 'Container Hardware & Fittings',
      description: 'Bridge fitting clamps and hardware for shipping container applications.',
      items: ['Shipping Container Bridge Fitting Clamps', 'Bridge Fitting Clamps', 'Container Fittings'],
      image: '/images/container_hardware.jpeg',
      category: 'recommended',
      specifications: {
        'Size Range': '40mm - 150mm width',
        'Overall Dimensions': '80mm x 40mm x 25mm - 300mm x 150mm x 80mm',
        'Material': 'Galvanized steel or stainless steel',
      },
    },
    {
      title: 'Jacks & Lifting Equipment',
      description: 'Steel screw jacks, timber jacks, and lifting beams for various lifting applications.',
      items: ['Steel Screw Jacks', 'Mild Steel Jack Screws', 'Wooden Timber Jacks', 'Mini Lifting Beams', 'Lifting Beams'],
      image: '/images/jacks_lifting.jpeg',
      category: 'recommended',
      specifications: {
        'Capacity': '0.5T - 50T',
        'Height Range': '100mm - 1500mm (collapsed to extended)',
        'Base Dimensions': '100mm x 100mm - 400mm x 400mm',
        'Beam Length': '500mm - 3000mm',
      },
    },
    {
      title: 'Wire Rope Hardware',
      description: 'Premium galvanized wire rope clips and hardware for securing and connecting wire ropes. Compatible with Usha Martin specialized wire rope for optimal performance.',
      items: ['Galvanized Steel Wire Rope Clips', 'Wire Rope Clips', 'Crosby Wire Rope Pulley Bearings'],
      image: '/images/wire_rope_hardware.jpeg',
      category: 'recommended',
      cataloguePdf: '/catalogue/Marino_Wire_Rope_Sling_Catalog.pdf',
      specifications: {
        'Wire Rope Compatibility': 'Usha Martin specialized wire rope',
        'Size Range': '6mm - 32mm wire rope diameter',
        'Overall Dimensions': '30mm x 20mm - 150mm x 80mm',
        'Sheave Diameter': '150mm - 600mm (for pulleys)',
        'Working Load': '1T - 20T',
        'Material': 'Galvanized steel for corrosion resistance',
      },
    },
    {
      title: 'Safety Equipment & PPE',
      description: 'Safety nets, life jackets, safety shoes, and personal protective equipment.',
      items: ['Polyester Machine-Made Safety Nets', 'Life Jackets', 'Safety Shoes', 'Rope Ladders', 'Safety Nets'],
      image: '/images/safety_equipment_ppe.jpeg',
      category: 'recommended',
      specifications: {
        'Safety Net Size': '2m x 2m - 10m x 10m',
        'Life Jacket Sizes': 'XS, S, M, L, XL, XXL',
        'Buoyancy': '150N - 275N',
        'Shoe Sizes': 'EU 36 - 48, US 5 - 14',
        'Rope Ladder Length': '2m - 20m',
      },
    },
    {
      title: 'Timber Equipment',
      description: 'Specialized wooden timber jacks for timber handling and lifting operations.',
      items: ['Wooden Timber Jacks', 'Timber Handling Equipment'],
      image: '/images/timber.jpeg',
      category: 'recommended',
      specifications: {
        'Capacity': '0.5T - 10T',
        'Height Range': '100mm - 1000mm (collapsed to extended)',
        'Base Dimensions': '100mm x 100mm - 300mm x 300mm',
      },
    },
  ];

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm sm:text-base uppercase tracking-wider">Our Products</span>
          <h2 className="section-title text-[#0d3d26] mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Industrial Solutions
            <span className="text-[#0d3d26]"> You Can Trust</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl mt-3 sm:mt-4 px-2">
            We offer a comprehensive range of industrial chains, slings, marine equipment, lifting hardware, and safety equipment to meet your business needs.
          </p>
        </div>

        {/* Quality Highlight Section */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 bg-accent/5 border border-accent/20 rounded-lg p-4 sm:p-6 md:p-8">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">Premium Quality & Manufacturing Excellence</h3>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span><strong className="text-foreground">Usha Martin Specialized Wire Rope:</strong> All our wire rope slings and wire rope hardware are manufactured using premium Usha Martin specialized wire rope, ensuring superior quality, strength, and reliability for critical lifting operations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span><strong className="text-foreground">Mechanical Hand-Made Construction:</strong> Our slings are manufactured using mechanical hand-made techniques (not pressed), providing enhanced durability, better load distribution, and superior performance compared to pressed alternatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span><strong className="text-foreground">Quality Assurance:</strong> All products undergo rigorous quality testing and meet international safety standards for industrial and marine applications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span><strong className="text-foreground">Custom Solutions:</strong> We provide custom lengths, configurations, and specifications tailored to your specific requirements.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="card-industrial overflow-hidden group hover:border-accent/50 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-2 mb-2 flex-wrap">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">{product.title}</h3>
                  {product.category === 'must-have' && (
                    <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs sm:text-sm font-semibold rounded-full border border-accent/30 whitespace-nowrap">
                      Essential
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{product.description}</p>

                {/* Items */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Specifications */}
                {product.specifications && (
                  <div className="mb-4 sm:mb-6 pt-3 border-t border-border/50">
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Specifications:</h4>
                    <ul className="space-y-1.5">
                      {Object.entries(product.specifications).map(([key, value], i) => (
                        <li key={i} className="text-sm sm:text-base text-muted-foreground">
                          <span className="font-medium text-foreground">{key}:</span> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={`https://wa.me/919831144669?text=Hello%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(product.title.toLowerCase())}%20products`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-accent font-semibold text-sm sm:text-base group-hover:gap-3 transition-all duration-300 touch-manipulation"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  {product.cataloguePdf ? (
                    <a
                      href={product.cataloguePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-accent font-medium text-sm sm:text-base transition-colors duration-300 touch-manipulation border border-border hover:border-accent/50 rounded-md px-3 py-1.5"
                    >
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                      Download Catalogue
                    </a>
                  ) : (
                    <a
                      href={`/brochures/${product.title.toLowerCase().replace(/\s+/g, '-')}-brochure.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-accent font-medium text-sm sm:text-base transition-colors duration-300 touch-manipulation border border-border hover:border-accent/50 rounded-md px-3 py-1.5"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Brochure for ${product.title} will be available soon. Please contact us via WhatsApp for product details.`);
                      }}
                    >
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                      Download Brochure
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://wa.me/919831144669?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="btn-accent gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Request Full Product Catalog
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
