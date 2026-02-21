import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowRight, ShoppingCart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SlingProduct {
  id: number;
  name: string;
  diameter: number;
  length: number;
  construction: string;
  grade: number;
  core: string;
  endFittings: string;
  workingLoadLimit: number;
  galvanization: string;
  layDirection: string;
  layType: string;
  condition: string;
  price: string;
  image: string;
  description: string;
  inStock: boolean;
}

const premadeSlings: SlingProduct[] = [
  {
    id: 1,
    name: 'Wire Rope Sling 6mm x 2m - Light Duty',
    diameter: 6,
    length: 2,
    construction: '6×19',
    grade: 1770,
    core: 'FC',
    endFittings: 'Thimble & Thimble',
    workingLoadLimit: 0.5,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '450',
    image: '/images/slings.jpeg',
    description: 'Light duty single leg wire rope sling. Ideal for small workshops, maintenance work, and light material handling. Usha Martin wire rope with mechanical splicing.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Wire Rope Sling 8mm x 3m - General Purpose',
    diameter: 8,
    length: 3,
    construction: '6×19',
    grade: 1770,
    core: 'FC',
    endFittings: 'Thimble & Eye Hook',
    workingLoadLimit: 1.0,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '850',
    image: '/images/slings.jpeg',
    description: 'General purpose wire rope sling suitable for workshops and light industrial applications. Complete with safety hook and thimble.',
    inStock: true,
  },
  {
    id: 3,
    name: 'Wire Rope Sling 10mm x 4m - Medium Duty',
    diameter: 10,
    length: 4,
    construction: '6×19',
    grade: 1770,
    core: 'FC',
    endFittings: 'Thimble & Eye Hook',
    workingLoadLimit: 1.5,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '1,450',
    image: '/images/slings.jpeg',
    description: 'Medium duty single leg sling for general lifting operations. Popular choice for construction and manufacturing industries.',
    inStock: true,
  },
  {
    id: 4,
    name: 'Wire Rope Sling 12mm x 3m - Standard Duty',
    diameter: 12,
    length: 3,
    construction: '6×36',
    grade: 1770,
    core: 'IWRC',
    endFittings: 'Thimble & Eye Hook',
    workingLoadLimit: 2.3,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '2,200',
    image: '/images/slings.jpeg',
    description: 'Standard duty sling with IWRC core for better strength and crush resistance. Most popular size for industrial applications.',
    inStock: true,
  },
  {
    id: 5,
    name: 'Wire Rope Sling 12mm x 5m - Extended Length',
    diameter: 12,
    length: 5,
    construction: '6×36',
    grade: 1770,
    core: 'IWRC',
    endFittings: 'Thimble & Eye Hook',
    workingLoadLimit: 2.3,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '2,850',
    image: '/images/slings.jpeg',
    description: 'Extended length 12mm sling for applications requiring longer reach. Same WLL as standard 12mm with added flexibility.',
    inStock: true,
  },
  {
    id: 6,
    name: 'Wire Rope Sling 16mm x 4m - Heavy Duty',
    diameter: 16,
    length: 4,
    construction: '6×36',
    grade: 1960,
    core: 'IWRC',
    endFittings: 'Thimble & Eye Hook',
    workingLoadLimit: 4.0,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '4,500',
    image: '/images/slings.jpeg',
    description: 'Heavy duty sling with 1960 grade wire for higher strength. Suitable for heavy machinery lifting and industrial applications.',
    inStock: true,
  },
  {
    id: 7,
    name: 'Wire Rope Sling 20mm x 5m - Extra Heavy Duty',
    diameter: 20,
    length: 5,
    construction: '6×36',
    grade: 1960,
    core: 'IWRC',
    endFittings: 'Master Link & Eye Hook',
    workingLoadLimit: 6.3,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '7,800',
    image: '/images/slings.jpeg',
    description: 'Extra heavy duty sling for demanding lifting operations. Features master link for better load distribution and handling.',
    inStock: true,
  },
  {
    id: 8,
    name: '2-Leg Wire Rope Sling 10mm x 2m - Basket',
    diameter: 10,
    length: 2,
    construction: '6×19',
    grade: 1770,
    core: 'FC',
    endFittings: 'Master Link & Two Hooks',
    workingLoadLimit: 2.5,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '2,950',
    image: '/images/slings.jpeg',
    description: 'Two-leg basket sling for balanced lifting of loads. Includes master link at top and two safety hooks at leg ends.',
    inStock: true,
  },
  {
    id: 9,
    name: '2-Leg Wire Rope Sling 12mm x 3m - Basket',
    diameter: 12,
    length: 3,
    construction: '6×36',
    grade: 1770,
    core: 'IWRC',
    endFittings: 'Master Link & Two Hooks',
    workingLoadLimit: 4.0,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '4,800',
    image: '/images/slings.jpeg',
    description: 'Popular two-leg sling configuration for construction and manufacturing. IWRC core provides excellent durability.',
    inStock: true,
  },
  {
    id: 10,
    name: '4-Leg Wire Rope Sling 10mm x 2.5m - Multi-Leg',
    diameter: 10,
    length: 2.5,
    construction: '6×19',
    grade: 1770,
    core: 'FC',
    endFittings: 'Master Link & Four Hooks',
    workingLoadLimit: 4.5,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '5,500',
    image: '/images/slings.jpeg',
    description: 'Four-leg multi-leg sling for lifting irregular loads. Provides excellent stability for loads with multiple attachment points.',
    inStock: true,
  },
  {
    id: 11,
    name: 'Wire Rope Sling 14mm x 4m - High Flexibility',
    diameter: 14,
    length: 4,
    construction: '6×36',
    grade: 1960,
    core: 'IWRC',
    endFittings: 'Thimble & Eye Hook',
    workingLoadLimit: 3.2,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Lang Lay',
    condition: 'New',
    price: '3,950',
    image: '/images/slings.jpeg',
    description: 'High flexibility sling with Lang lay construction for applications requiring frequent bending. Ideal for crane operations.',
    inStock: true,
  },
  {
    id: 12,
    name: 'Wire Rope Sling 24mm x 6m - Super Heavy Duty',
    diameter: 24,
    length: 6,
    construction: '6×36',
    grade: 1960,
    core: 'IWRC',
    endFittings: 'Master Link & Shackle',
    workingLoadLimit: 9.0,
    galvanization: 'Hot Dip Galvanized',
    layDirection: 'Right Hand',
    layType: 'Regular Lay',
    condition: 'New',
    price: '14,500',
    image: '/images/slings.jpeg',
    description: 'Super heavy duty sling for the most demanding industrial lifting operations. Features heavy-duty shackle connection.',
    inStock: false,
  },
];

const PremadeSlingsPage = () => {
  const handleOrderClick = (sling: SlingProduct) => {
    const message = `Hello, I am interested in ordering the following sling:%0A%0A` +
      `*Product:* ${sling.name}%0A` +
      `*Diameter:* ${sling.diameter}mm%0A` +
      `*Length:* ${sling.length}m%0A` +
      `*Construction:* ${sling.construction}%0A` +
      `*Grade:* ${sling.grade}%0A` +
      `*Core:* ${sling.core}%0A` +
      `*End Fittings:* ${sling.endFittings}%0A` +
      `*Working Load Limit:* ${sling.workingLoadLimit} ton%0A` +
      `*Price:* ${sling.price}%0A%0A` +
      `Please provide more details.`;
    
    window.open(`https://wa.me/919831144669?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>Wire Rope Slings Price List India | Premade Slings ₹450 Onwards | Marino</title>
        <meta
          name="description"
          content="Buy wire rope slings online at best prices. 6mm to 24mm diameter, single leg & multi-leg slings from ₹450. IS 2266 compliant, Usha Martin wire, test certified. All India delivery from Kolkata."
        />
        <meta name="keywords" content="wire rope sling price list India, wire rope slings price, 6mm wire rope sling price, 10mm wire rope sling price, 12mm wire rope sling price, buy wire rope slings online, wire rope sling manufacturers India, wire rope sling supplier Kolkata, wire rope slings Delhi Mumbai Bangalore Chennai, IS 2266 wire rope sling" />
        <link rel="canonical" href="https://marinoindia.co.in/premade-slings" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Premade Wire Rope Slings - Price List India",
            "itemListElement": premadeSlings.map((sling, index) => ({
              "@type": "Product",
              "position": index + 1,
              "name": `${sling.diameter}mm Wire Rope Sling ${sling.length}m - ${sling.workingLoadLimit} Ton WLL`,
              "description": `${sling.description} Construction: ${sling.construction}, Grade: ${sling.grade} MPa, Core: ${sling.core}. Working Load Limit: ${sling.workingLoadLimit} tonnes.`,
              "brand": {
                "@type": "Brand",
                "name": "Marino Corporation"
              },
              "offers": {
                "@type": "Offer",
                "availability": sling.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                "price": sling.price.replace(',', ''),
                "priceCurrency": "INR",
                "url": "https://marinoindia.co.in/premade-slings",
                "seller": {
                  "@type": "Organization",
                  "name": "Marino Corporation Of India"
                }
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Diameter",
                  "value": `${sling.diameter} mm`
                },
                {
                  "@type": "PropertyValue",
                  "name": "Length",
                  "value": `${sling.length} m`
                },
                {
                  "@type": "PropertyValue",
                  "name": "Working Load Limit",
                  "value": `${sling.workingLoadLimit} tonnes`
                },
                {
                  "@type": "PropertyValue",
                  "name": "Construction",
                  "value": sling.construction
                },
                {
                  "@type": "PropertyValue",
                  "name": "Grade",
                  "value": `${sling.grade} MPa`
                },
                {
                  "@type": "PropertyValue",
                  "name": "Core Type",
                  "value": sling.core
                }
              ]
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Hero Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-accent/10 to-background">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center max-w-3xl mx-auto">
                <Badge className="mb-4 bg-accent/20 text-accent hover:bg-accent/30">Ready Stock</Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d3d26] mb-4 sm:mb-6">
                  Wire Rope Slings Price List
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
                  Browse our ready stock of IS 2266 compliant wire rope slings. 
                  Prices starting from ₹450. Diameters 6mm to 24mm, single leg & multi-leg configurations. 
                  Usha Martin wire rope with test certificates. All India delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="https://wa.me/919831144669?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20premade%20slings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="btn-accent gap-2 text-base sm:text-lg px-6 sm:px-8">
                      <ShoppingCart className="w-5 h-5" />
                      Enquire Now
                    </Button>
                  </a>
                  <a href="#slings-catalog">
                    <Button size="lg" variant="outline" className="gap-2 text-base sm:text-lg px-6 sm:px-8">
                      View Catalog
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-8 sm:py-12 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Premium Quality</h3>
                    <p className="text-sm text-muted-foreground">Made with Usha Martin wire rope</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Ready Stock</h3>
                    <p className="text-sm text-muted-foreground">Immediate delivery available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Tested & Certified</h3>
                    <p className="text-sm text-muted-foreground">All slings load tested</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Custom Orders</h3>
                    <p className="text-sm text-muted-foreground">Specific requirements accepted</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slings Catalog */}
          <section id="slings-catalog" className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d3d26] mb-3 sm:mb-4">
                  Wire Rope Slings with Prices
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Ready stock slings with prices. Click on any product to order via WhatsApp. 
                  Custom sizes available on request.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {premadeSlings.map((sling) => (
                  <Card key={sling.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                      <img
                        src={sling.image}
                        alt={sling.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className={sling.inStock ? "bg-green-500/90 text-white" : "bg-amber-500/90 text-white"}>
                          {sling.inStock ? "In Stock" : "Made to Order"}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg sm:text-xl text-[#0d3d26]">{sling.name}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2">{sling.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4 flex-grow">
                      <div className="space-y-2 text-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">Diameter:</span>
                          <span className="font-medium">{sling.diameter} mm</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">Length:</span>
                          <span className="font-medium">{sling.length} m</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">Construction:</span>
                          <span className="font-medium">{sling.construction}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">Grade:</span>
                          <span className="font-medium">{sling.grade}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">Core:</span>
                          <span className="font-medium">{sling.core}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">End Fittings:</span>
                          <span className="font-medium">{sling.endFittings}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">WLL:</span>
                          <span className="font-medium">{sling.workingLoadLimit} ton</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">Galvanization:</span>
                          <span className="font-medium">{sling.galvanization}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">Lay Direction:</span>
                          <span className="font-medium">{sling.layDirection}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-muted-foreground">Lay Type:</span>
                          <span className="font-medium">{sling.layType}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Condition:</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {sling.condition}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-muted-foreground">Price:</span>
                          <span className="text-xl font-bold text-accent">₹ {sling.price}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        className="w-full btn-accent gap-2"
                        onClick={() => handleOrderClick(sling)}
                        disabled={!sling.inStock}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {sling.inStock ? 'Order on WhatsApp' : 'Enquire for Availability'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 bg-gradient-to-r from-[#0d3d26] to-[#1a5c3f]">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Custom Slings?
                </h2>
                <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
                  We manufacture custom wire rope slings to your exact specifications. 
                  Contact us for bulk orders and special requirements.
                </p>
                <a
                  href="https://wa.me/919831144669?text=Hello%2C%20I%20need%20custom%20wire%20rope%20slings."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-[#0d3d26] hover:bg-white/90 gap-2 text-base sm:text-lg px-6 sm:px-8">
                    Request Custom Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Photo Gallery */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d3d26] mb-3 sm:mb-4">
                  Our Wire Rope Slings
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Browse through our actual product photos - from raw wire rope to finished slings ready for delivery.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { src: '/images/slings_new/sling_bundle_coiled.jpeg', alt: 'Wire rope slings bundle coiled' },
                  { src: '/images/slings_new/sling_4leg_masterlink.jpeg', alt: '4-leg wire rope sling with master link' },
                  { src: '/images/slings_new/sling_multiple_fittings.jpeg', alt: 'Multiple wire rope slings with end fittings' },
                  { src: '/images/slings_new/wire_rope_reel.jpeg', alt: 'Large wire rope reel' },
                  { src: '/images/slings_new/sling_2leg_red_masterlink.jpeg', alt: '2-leg wire rope sling with red master link' },
                  { src: '/images/slings_new/sling_heavy_duty_fittings.jpeg', alt: 'Heavy duty wire rope slings with large fittings' },
                  { src: '/images/slings_new/sling_workshop_assembly.jpg', alt: 'Workers assembling large multi-leg sling' },
                  { src: '/images/slings_new/wire_rope_closeup.jpeg', alt: 'Close-up of wire rope construction' },
                ].map((img, i) => (
                  <div key={i} className="relative group overflow-hidden rounded-xl aspect-square bg-muted">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Specifications Guide */}
          <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3d26] mb-6 sm:mb-8 text-center">
                  Understanding Sling Specifications
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Construction (6×19, 6×36)</h3>
                    <p className="text-sm text-muted-foreground">
                      The number of strands × wires per strand. 6×19 offers better abrasion resistance, 
                      while 6×36 provides greater flexibility.
                    </p>
                  </div>
                  <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Grade (1570, 1770, 1960)</h3>
                    <p className="text-sm text-muted-foreground">
                      Tensile strength in MPa. Higher grades offer greater strength for the same diameter, 
                      allowing higher working load limits.
                    </p>
                  </div>
                  <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Core (FC vs IWRC)</h3>
                    <p className="text-sm text-muted-foreground">
                      Fiber Core (FC) provides flexibility and is lighter. Independent Wire Rope Core (IWRC) 
                      offers better crush resistance and strength.
                    </p>
                  </div>
                  <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Working Load Limit (WLL)</h3>
                    <p className="text-sm text-muted-foreground">
                      Maximum safe working load in tons. Never exceed the WLL. 
                      Always consider the angle factor for multi-leg slings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default PremadeSlingsPage;
