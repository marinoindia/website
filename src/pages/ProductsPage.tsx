import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Products - Marino Corporation Of India | Industrial Chains & Marine Equipment</title>
        <meta
          name="description"
          content="Browse our comprehensive range of industrial chains, pulley blocks, marine equipment, wire rope slings, and lifting hardware. Get quotes on WhatsApp."
        />
        <meta name="keywords" content="industrial chains, pulley blocks, marine equipment, wire rope slings, lifting chains, container hooks, Kolkata, manufacturer" />
        <link rel="canonical" href="https://marinoindia.co.in/products" />
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
