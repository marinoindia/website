import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Marino Corporation Of India | Get in Touch | Kolkata</title>
        <meta
          name="description"
          content="Contact Marino Corporation Of India for inquiries, quotes, and assistance. Located in Kolkata, West Bengal. Call, email, or chat on WhatsApp."
        />
        <meta name="keywords" content="contact marino corporation, Kolkata industrial chains contact, marine equipment supplier contact, WhatsApp quote" />
        <link rel="canonical" href="https://marinoindia.co.in/contact" />
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
