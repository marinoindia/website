import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import MediaPreview from '@/components/MediaPreview';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const location = useLocation();

  // Handle smooth scrolling for hash links
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Marino Corporation Of India - Industrial Chains & Marine Equipment Manufacturer | Kolkata</title>
        <meta
          name="description"
          content="Marino Corporation Of India is a leading manufacturer of pulley blocks, industrial chains, marine equipment, wire rope slings in Kolkata, West Bengal. 40 years of industry experience. Get quotes on WhatsApp."
        />
        <meta name="keywords" content="industrial chains, pulley blocks, marine equipment, wire rope slings, lifting chains, ship anchors, Kolkata, West Bengal, India" />
        <link rel="canonical" href="https://marinoindia.co.in" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhyChooseUs />
          <MediaPreview />
          <MapSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
