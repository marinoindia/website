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
        <title>India Best Wire Rope, Sling and Chain Supplier | Kolkata/Calcutta | Marino Corporation</title>
        <meta
          name="description"
          content="Marino Corporation Of India - India's best wire rope, sling and chain supplier in Kolkata/Calcutta, West Bengal. Leading manufacturer of industrial chains, marine equipment, wire rope slings. 40 years experience. Get quotes on WhatsApp."
        />
        <meta name="keywords" content="India best wire rope sling and chain supplier, best wire rope supplier India, best sling supplier Kolkata, best chain supplier Calcutta, wire rope supplier Kolkata, wire rope supplier Calcutta, sling supplier India, chain supplier India, industrial chains, pulley blocks, marine equipment, wire rope slings, lifting chains, ship anchors, Kolkata, Calcutta, West Bengal, India" />
        <link rel="canonical" href="https://marinoindia.co.in" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Marino Corporation Of India",
            "description": "India's best wire rope, sling and chain supplier in Kolkata/Calcutta, West Bengal",
            "url": "https://marinoindia.co.in",
            "telephone": "+919831144669",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kolkata",
              "addressRegion": "West Bengal",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "22.5726",
              "longitude": "88.3639"
            },
            "priceRange": "$$",
            "image": "https://marinoindia.co.in/logo/logo_marino.jpeg",
            "sameAs": [
              "https://marinoindia.co.in"
            ],
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Industrial Chains, Wire Rope, Slings, and Marine Equipment",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Wire Rope"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Slings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Chains"
                  }
                }
              ]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is the best wire rope, sling and chain supplier in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Marino Corporation Of India is India's best wire rope, sling and chain supplier, based in Kolkata/Calcutta, West Bengal. With over 40 years of experience, we provide high-quality industrial chains, marine equipment, wire rope slings, and lifting solutions across India."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I find the best wire rope supplier in Kolkata or Calcutta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Marino Corporation Of India is the best wire rope supplier in Kolkata/Calcutta, West Bengal. We offer a comprehensive range of wire rope products, slings, and chains for industrial and marine applications. Contact us at +919831144669 or visit our website for quotes."
                }
              },
              {
                "@type": "Question",
                "name": "What products does Marino Corporation offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer wire rope, rope slings, chain & chain slings, shackles, hooks, turn buckles, pulley blocks, marine equipment, lifting hardware, and all kinds of safety and lifting tackles. We are India's best supplier for these industrial products."
                }
              },
              {
                "@type": "Question",
                "name": "How long has Marino Corporation been in business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Marino Corporation Of India has been serving customers for over 40 years, establishing ourselves as India's best wire rope, sling and chain supplier with a proven track record of quality and reliability."
                }
              },
              {
                "@type": "Question",
                "name": "Do you deliver wire rope, slings, and chains across India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, as India's best wire rope, sling and chain supplier, we deliver our products across India with reliable logistics and timely dispatch. We serve customers from Kolkata/Calcutta to all major cities in India."
                }
              }
            ]
          })}
        </script>
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
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <MediaPreview />
          <WhyChooseUs />
          <MapSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
