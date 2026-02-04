import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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
        <meta name="keywords" content="wire rope supplier India, sling supplier India, chain supplier India, industrial chains supplier, wire rope slings manufacturer, lifting chains supplier, marine equipment India, pulley blocks supplier, container hooks India, wire rope Delhi, wire rope Mumbai, wire rope Bangalore, industrial lifting equipment" />
        <link rel="canonical" href="https://marinoindia.co.in/products" />
        
        {/* Product Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Marino Corporation Products",
            "description": "Industrial chains, wire rope slings, and lifting equipment",
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
        <meta property="og:description" content="Browse India's best range of wire rope, slings, chains, and industrial lifting equipment. Pan India delivery." />
        <meta property="og:type" content="product.group" />
        <meta property="og:url" content="https://marinoindia.co.in/products" />
        <meta property="og:image" content="https://marinoindia.co.in/images/slings.jpeg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Products - India's Best Wire Rope & Sling Supplier" />
        <meta name="twitter:description" content="Browse wire rope, slings, chains, and industrial lifting equipment. Pan India delivery." />
        <meta name="twitter:image" content="https://marinoindia.co.in/images/slings.jpeg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Products />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ProductsPage;
