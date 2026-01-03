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
