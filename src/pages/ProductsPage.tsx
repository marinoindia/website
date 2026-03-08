import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  ArrowRight, 
  ExternalLink, 
  ChevronRight,
  Settings2,
  Link2,
  Anchor,
  Cable,
  Boxes,
  Layers,
  Construction,
  Package,
  Ship,
  Shield,
  TreePine,
  Wrench,
  Circle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Product categories for sidebar
const productCategories = [
  {
    label: 'Slings',
    path: '/product/wire-rope-slings',
    icon: Cable,
    description: 'Wire Rope & Chain Slings',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    label: 'Chains',
    path: '/product/industrial-chains',
    icon: Link2,
    description: 'G80 & G100 Industrial Chains',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    label: 'Turnbuckles',
    path: '/product/turnbuckles',
    icon: Settings2,
    description: 'Eye, Jaw & Hook Types',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    featured: true,
  },
  {
    label: 'Shackles',
    path: '/product/shackles',
    icon: Construction,
    description: 'D & Bow Shackles',
    color: 'bg-slate-50 text-slate-700 border-slate-200',
  },
  {
    label: 'Hooks',
    path: '/product/hooks',
    icon: Anchor,
    description: 'Lifting & Clevis Hooks',
    color: 'bg-red-50 text-red-700 border-red-200',
  },
  {
    label: 'Pulleys & Blocks',
    path: '/product/pulleys-blocks',
    icon: Layers,
    description: 'Wire Rope Pulleys',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    label: 'Wire Rope Grips',
    path: '/product/wire-rope-accessories',
    icon: Wrench,
    description: 'Wire Rope Clips & Grips',
    color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  {
    label: 'Thimbles',
    path: '/product/thimbles',
    icon: Circle,
    description: 'Commercial & Heavy Duty Thimbles',
    color: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    label: 'Ropes & Mooring',
    path: '/products',
    icon: Ship,
    description: 'Synthetic & Mooring Ropes',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    label: 'Anchors & Marine',
    path: '/products',
    icon: Anchor,
    description: 'Ship Anchors & Chains',
    color: 'bg-teal-50 text-teal-700 border-teal-200',
  },
  {
    label: 'Lashing Equipment',
    path: '/products',
    icon: Package,
    description: 'Container Lashing Systems',
    color: 'bg-orange-50 text-orange-700 border-orange-200',
  },
  {
    label: 'Safety Equipment',
    path: '/products',
    icon: Shield,
    description: 'PPE & Safety Nets',
    color: 'bg-green-50 text-green-700 border-green-200',
  },
  {
    label: 'Timber Equipment',
    path: '/products',
    icon: TreePine,
    description: 'Wooden Timber Jacks',
    color: 'bg-amber-50 text-amber-800 border-amber-200',
  },
];

const productsData = [
  {
    "@type": "Product",
    "name": "Wire Rope Slings",
    "description": "Premium steel wire rope slings with thimbles and eye hooks. Usha Martin wire with mechanical hand-made construction.",
    "image": "https://marinoindia.co.in/images/premade_slings_hero.png",
    "brand": {
      "@type": "Brand",
      "name": "Usha Martin"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://marinoindia.co.in/premade-slings",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Marino Corporation Of India"
      }
    }
  },
  {
    "@type": "Product",
    "name": "Industrial Chains",
    "description": "High-strength alloy steel chains for heavy lifting, anchoring, and load securing. G80 and G100 grades available.",
    "image": "https://marinoindia.co.in/images/chains.jpeg",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@type": "Product",
    "name": "Turnbuckles",
    "description": "Complete range of galvanised and stainless steel turnbuckles for tensioning and rigging. Eye & Eye, Jaw & Jaw, Hook & Eye configurations.",
    "image": "https://marinoindia.co.in/images/Turn_buckles.png",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@type": "Product",
    "name": "Lifting Hooks",
    "description": "Forged alloy steel hooks for lifting and material handling. ASME B30.10 compliant with safety latches.",
    "image": "https://marinoindia.co.in/images/hooks.jpeg",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  },
  {
    "@type": "Product",
    "name": "Shackles",
    "description": "High-tensile steel shackles for connecting lifting equipment, chains, and ropes. Load rated and certified.",
    "image": "https://marinoindia.co.in/images/shackles.jpeg",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  }
];

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Products - India's Best Wire Rope, Sling & Chain Supplier | All India Delivery</title>
        <meta
          name="description"
          content="Browse India's best range of wire rope, slings, chains, industrial chains, pulley blocks, marine equipment, and lifting hardware. Pan India delivery from Kolkata. Get quotes on WhatsApp."
        />
        <meta name="keywords" content="wire rope supplier India, sling supplier India, chain supplier India, industrial chains supplier, wire rope slings manufacturer, lifting chains supplier, marine equipment India, pulley blocks supplier, container hooks India, wire rope Delhi, wire rope Mumbai, wire rope Bangalore, industrial lifting equipment, turnbuckles India" />
        <link rel="canonical" href="https://marinoindia.co.in/products" />
        
        {/* Product Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Marino Corporation Products",
            "description": "Industrial chains, wire rope slings, turnbuckles, and lifting equipment",
            "url": "https://marinoindia.co.in/products",
            "itemListElement": productsData.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": product
            }))
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Marino Corporation Of India",
            "url": "https://marinoindia.co.in",
            "logo": "https://marinoindia.co.in/logo/logo_marino.jpeg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919831144669",
              "contactType": "sales",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://www.google.com/maps?cid=13184844193591808410"
            ]
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://marinoindia.co.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://marinoindia.co.in/products"
              }
            ]
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Products - India's Best Wire Rope, Sling & Chain Supplier" />
        <meta property="og:description" content="Browse India's best range of wire rope, slings, chains, turnbuckles, and industrial lifting equipment. Pan India delivery." />
        <meta property="og:type" content="product.group" />
        <meta property="og:url" content="https://marinoindia.co.in/products" />
        <meta property="og:image" content="https://marinoindia.co.in/images/slings.jpeg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Products - India's Best Wire Rope & Sling Supplier" />
        <meta name="twitter:description" content="Browse wire rope, slings, chains, turnbuckles, and industrial lifting equipment. Pan India delivery." />
        <meta name="twitter:image" content="https://marinoindia.co.in/images/slings.jpeg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-8">
          {/* Page Header */}
          <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16">
            <div className="container-modern">
              <div className="max-w-3xl">
                <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  Our Product Range
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Industrial Lifting &{' '}
                  <span className="text-emerald-300">Rigging Solutions</span>
                </h1>
                <p className="text-lg sm:text-xl text-emerald-100 leading-relaxed mb-8">
                  Comprehensive range of wire rope slings, chains, turnbuckles, hooks, shackles, 
                  and marine equipment. All products test certified with pan India delivery.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/919831144669?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                      Get Quote on WhatsApp
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <a href="/catalogue/Marino_Wire_Rope_Sling_Catalog_2.pdf" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Download Catalogue
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content with Sidebar */}
          <section className="py-16 bg-slate-50">
            <div className="container-modern">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Left Sidebar - Product Categories */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-24">
                    <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Boxes className="w-5 h-5 text-emerald-600" />
                      Product Categories
                    </h2>
                    <nav className="space-y-2">
                      {productCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <Link
                            key={category.label}
                            to={category.path}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${
                              category.featured 
                                ? 'bg-amber-50 border-2 border-amber-200 hover:border-amber-300' 
                                : 'hover:bg-slate-50 border border-transparent hover:border-slate-200'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${category.color}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1">
                                <span className="font-medium text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                                  {category.label}
                                </span>
                                {category.featured && (
                                  <Badge className="bg-amber-500 text-white text-[10px] px-1.5 py-0 ml-1">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-slate-500 truncate">
                                {category.description}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                          </Link>
                        );
                      })}
                    </nav>

                    {/* Quick Contact */}
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <p className="text-sm text-slate-600 mb-3">
                        Need help finding the right product?
                      </p>
                      <a
                        href="tel:9831144669"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
                      >
                        Call 9831144669
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Content - Product Grid */}
                <div className="lg:col-span-3">
                  {/* Featured: Turnbuckles */}
                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Settings2 className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="bg-amber-500 text-white">Featured</Badge>
                            <span className="text-sm text-amber-700">New Arrival</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">Turnbuckles</h3>
                          <p className="text-slate-600 text-sm">
                            Complete range of galvanised and stainless steel turnbuckles. 
                            Eye & Eye, Jaw & Jaw, Hook & Eye configurations available.
                          </p>
                        </div>
                        <Link
                          to="/product/turnbuckles"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors whitespace-nowrap"
                        >
                          View Turnbuckles
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productCategories.filter(cat => cat.path.startsWith('/product/')).map((category) => {
                      const Icon = category.icon;
                      return (
                        <Link
                          key={category.label}
                          to={category.path}
                          className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:border-emerald-300 transition-all"
                        >
                          <div className={`h-32 ${category.color} flex items-center justify-center`}>
                            <Icon className="w-16 h-16 opacity-50" />
                          </div>
                          <div className="p-5">
                            <h3 className="font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                              {category.label}
                            </h3>
                            <p className="text-sm text-slate-600 mb-3">
                              {category.description}
                            </p>
                            <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
                              View Products
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Additional Categories */}
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">More Products</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {productCategories.filter(cat => !cat.path.startsWith('/product/')).map((category) => {
                        const Icon = category.icon;
                        return (
                          <Link
                            key={category.label}
                            to={category.path}
                            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group"
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${category.color}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">
                              {category.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
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

export default ProductsPage;
