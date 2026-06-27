import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Webshop } from '@/components/Webshop';
import { slingProductSchema } from '@/data/slingPriceList';

const WebshopPage = () => {
  const slingProducts = slingProductSchema();
  return (
    <>
      <Helmet>
        <title>Buy Wire Rope Slings Online - Price List | Marino Corporation Of India</title>
        <meta
          name="description"
          content="Buy steel wire rope slings online with prices — 12mm to 25mm, 3 to 6 metre lengths. 6×36 GWRC construction. Fast delivery across India, secure Razorpay payment."
        />
        <meta name="keywords" content="wire rope sling price, buy wire rope sling online, 12mm wire rope sling price, steel wire rope sling India, lifting sling price list, wire rope sling supplier" />
        <link rel="canonical" href="https://marinoindia.co.in/webshop" />

        {/* Product / price structured data for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Wire Rope Sling Price List',
            description: 'Steel wire rope slings with prices, available to buy online.',
            url: 'https://marinoindia.co.in/webshop',
            itemListElement: slingProducts.map((product, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: product,
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Webshop />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default WebshopPage;

