import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Certifications from '@/components/Certifications';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ, { faqItems } from '@/components/FAQ';
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
        <title>India's Best Wire Rope, Sling & Chain Supplier | Marino Corporation | All India Delivery</title>
        <meta
          name="description"
          content="Marino Corporation Of India - India's best wire rope, sling and chain supplier. Leading manufacturer of industrial chains, marine equipment, wire rope slings. Pan India delivery. 40+ years experience. ISO certified. Get quotes on WhatsApp."
        />
        <meta name="keywords" content="wire rope supplier India, sling supplier India, chain supplier India, best wire rope manufacturer India, industrial chains supplier, wire rope slings India, lifting chains supplier, marine equipment India, pulley blocks India, wire rope Delhi, wire rope Mumbai, wire rope Bangalore, wire rope Chennai, wire rope Hyderabad, wire rope Pune, wire rope Ahmedabad, wire rope Kolkata, industrial lifting equipment, ISO certified wire rope, Usha Martin wire rope distributor" />
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
              "streetAddress": "28, Orphangunj Road, Kidderpore",
              "addressLocality": "Kolkata",
              "addressRegion": "West Bengal",
              "postalCode": "700023",
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
              "https://marinoindia.co.in",
              "https://www.google.com/maps?cid=13184844193591808410"
            ],
            "areaServed": [
              {
                "@type": "Country",
                "name": "India"
              },
              {
                "@type": "City",
                "name": "Delhi"
              },
              {
                "@type": "City",
                "name": "Mumbai"
              },
              {
                "@type": "City",
                "name": "Bangalore"
              },
              {
                "@type": "City",
                "name": "Chennai"
              },
              {
                "@type": "City",
                "name": "Hyderabad"
              },
              {
                "@type": "City",
                "name": "Pune"
              },
              {
                "@type": "City",
                "name": "Ahmedabad"
              },
              {
                "@type": "City",
                "name": "Kolkata"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Industrial Chains, Wire Rope, Slings, and Marine Equipment",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Wire Rope Slings & Chain Slings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Industrial Chains & Shackles"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Marine Equipment & Anchors"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Lifting Hardware & Pulleys"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Safety Equipment & PPE"
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
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
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
          <Certifications />
          <MediaPreview />
          <WhyChooseUs />
          <FAQ />
          <MapSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
