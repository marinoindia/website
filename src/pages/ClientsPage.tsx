import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const ClientsPage = () => {

  return (
    <>
      <Helmet>
        <title>Our Clients - India Best Wire Rope, Sling and Chain Supplier | Kolkata/Calcutta</title>
        <meta
          name="description"
          content="Marino Corporation Of India - India's best wire rope, sling and chain supplier in Kolkata/Calcutta, proudly serves prestigious clients across various sectors. Trusted by India's leading organizations."
        />
        <meta name="keywords" content="India best wire rope sling and chain supplier clients, wire rope supplier Kolkata clients, wire rope supplier Calcutta clients, marino clients, industrial clients, marine equipment clients" />
        <link rel="canonical" href="https://marinoindia.co.in/clients" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Clients</span>
                <h1 className="section-title text-[#0d3d26] mt-2">
                  Trusted by
                  <span className="text-[#0d3d26]"> Leading Organizations</span>
                </h1>
                <p className="text-muted-foreground text-lg mt-4">
                  We are proud to serve some of India's most prestigious organizations across various sectors including defense, space research, steel, and port operations.
                </p>
              </div>
            </div>
          </section>

          {/* Clients Display Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Client Image */}
                <div className="card-industrial p-8 md:p-12 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-pink-950/20">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Our Valued Clients
                    </h2>
                    <p className="text-muted-foreground">
                      We are honored to work with these prestigious organizations
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center py-8">
                    <img 
                      src="/clients.png" 
                      alt="Our Valued Clients"
                      className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-title text-[#0d3d26] mb-4">
                  Join Our <span className="text-[#0d3d26]">Prestigious Client List</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Experience the quality and reliability that has made us a trusted partner to India's leading organizations.
                </p>
                <a
                  href="https://wa.me/919831144669?text=Hello%2C%20I%20am%20interested%20in%20your%20products%20and%20would%20like%20to%20know%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-accent text-lg px-8 py-4">
                    Get in Touch
                  </button>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ClientsPage;
