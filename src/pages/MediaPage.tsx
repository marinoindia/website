import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Media from '@/components/Media';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const MediaPage = () => {
  return (
    <>
      <Helmet>
        <title>Media Gallery - Marino Corporation Of India | Product Photos & Facilities</title>
        <meta
          name="description"
          content="Explore our product gallery showcasing industrial chains, marine equipment, pulley blocks, and our manufacturing facilities in Kolkata."
        />
        <meta name="keywords" content="marino corporation gallery, industrial chains photos, marine equipment images, Kolkata manufacturer photos" />
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
