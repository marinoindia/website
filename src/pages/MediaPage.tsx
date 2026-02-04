import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Media from '@/components/Media';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const MediaPage = () => {
  return (
    <>
      <Helmet>
        <title>Media Gallery - India Best Wire Rope, Sling and Chain Supplier | Kolkata/Calcutta</title>
        <meta
          name="description"
          content="Explore our product gallery showcasing wire rope, slings, chains, industrial chains, marine equipment, pulley blocks, and our manufacturing facilities in Kolkata/Calcutta."
        />
        <meta name="keywords" content="India best wire rope sling and chain supplier gallery, wire rope supplier Kolkata photos, wire rope supplier Calcutta images, marino corporation gallery, industrial chains photos, marine equipment images, Kolkata manufacturer photos" />
        <link rel="canonical" href="https://marinoindia.co.in/media" />
        <meta property="og:title" content="Media Gallery - Marino Corporation Of India" />
        <meta property="og:description" content="Explore our product gallery showcasing wire rope, slings, chains, industrial chains, marine equipment, pulley blocks, and our manufacturing facilities in Kolkata." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marinoindia.co.in/media" />
        <meta property="og:image" content="https://marinoindia.co.in/logo/logo_marino.jpeg" />
        <meta property="og:site_name" content="Marino Corporation Of India" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Media Gallery - Marino Corporation Of India" />
        <meta name="twitter:description" content="Explore our product gallery showcasing wire rope, slings, chains, marine equipment, and manufacturing facilities." />
        <meta name="twitter:image" content="https://marinoindia.co.in/logo/logo_marino.jpeg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Media />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default MediaPage;
