import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - India Best Wire Rope, Sling and Chain Supplier | Kolkata/Calcutta</title>
        <meta
          name="description"
          content="Contact India's best wire rope, sling and chain supplier - Marino Corporation Of India. Located in Kolkata/Calcutta, West Bengal. Call, email, or chat on WhatsApp for quotes."
        />
        <meta name="keywords" content="contact India best wire rope sling and chain supplier, contact wire rope supplier Kolkata, contact wire rope supplier Calcutta, contact sling supplier India, contact chain supplier India, contact marino corporation, Kolkata industrial chains contact, marine equipment supplier contact, WhatsApp quote" />
        <link rel="canonical" href="https://marinoindia.co.in/contact/" />
        <meta property="og:title" content="Contact Us - Marino Corporation Of India" />
        <meta property="og:description" content="Contact India's best wire rope, sling and chain supplier. Located in Kolkata, West Bengal. Call, email, or chat on WhatsApp for quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marinoindia.co.in/contact" />
        <meta property="og:image" content="https://marinoindia.co.in/logo/logo_marino.jpeg" />
        <meta property="og:site_name" content="Marino Corporation Of India" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Marino Corporation Of India" />
        <meta name="twitter:description" content="Contact Marino Corporation for wire rope, slings, and chains. Call, email, or WhatsApp for quotes." />
        <meta name="twitter:image" content="https://marinoindia.co.in/logo/logo_marino.jpeg" />

        {/* LocalBusiness schema with opening hours + geo */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Marino Corporation Of India",
            "image": "https://marinoindia.co.in/logo/logo_marino.jpeg",
            "url": "https://marinoindia.co.in",
            "telephone": "+91-9831144669",
            "email": "marinocoindia@gmail.com",
            "priceRange": "$$",
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
              "latitude": "22.5350",
              "longitude": "88.3137"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "21:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "08:00",
                "closes": "17:00"
              }
            ],
            "sameAs": [
              "https://www.google.com/maps?cid=13184844193591808410",
              "https://www.linkedin.com/company/marino-corporation-of-india",
              "https://www.instagram.com/marino_corporation_of_india/"
            ]
          })}
        </script>

        {/* Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://marinoindia.co.in" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://marinoindia.co.in/contact" }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ContactPage;
