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
        <link rel="canonical" href="https://marinoindia.co.in/contact" />
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
