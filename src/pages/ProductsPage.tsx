import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Products - India Best Wire Rope, Sling and Chain Supplier | Kolkata/Calcutta</title>
        <meta
          name="description"
          content="Browse our comprehensive range of wire rope, slings, chains, industrial chains, pulley blocks, marine equipment, and lifting hardware from India's best supplier in Kolkata/Calcutta. Get quotes on WhatsApp."
        />
        <meta name="keywords" content="India best wire rope sling and chain supplier, best wire rope supplier India, best sling supplier Kolkata, best chain supplier Calcutta, wire rope supplier Kolkata, wire rope supplier Calcutta, industrial chains, pulley blocks, marine equipment, wire rope slings, lifting chains, container hooks, Kolkata, Calcutta, manufacturer" />
        <link rel="canonical" href="https://marinoindia.co.in/products" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Products - India Best Wire Rope, Sling and Chain Supplier",
            "description": "Browse our comprehensive range of wire rope, slings, chains, industrial chains, pulley blocks, marine equipment, and lifting hardware from India's best supplier in Kolkata/Calcutta.",
            "url": "https://marinoindia.co.in/products",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Product",
                  "name": "Wire Rope",
                  "description": "High-quality wire rope from India's best supplier in Kolkata/Calcutta"
                },
                {
                  "@type": "Product",
                  "name": "Slings",
                  "description": "Wire rope slings and chain slings from best supplier in India"
                },
                {
                  "@type": "Product",
                  "name": "Chains",
                  "description": "Industrial chains from best chain supplier in Kolkata/Calcutta"
                }
              ]
            },
            "breadcrumb": {
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
            }
          })}
        </script>
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
