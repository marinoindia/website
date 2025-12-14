import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import clientsImage from '@/assets/logo/Logo_clients.png';

const ClientsPage = () => {
  const clients = [
    'SAIL',
    'ISRO',
    'DRDO',
    'Indian Ordnance',
    'TATA',
    'Kolkata Port Trust',
  ];

  return (
    <>
      <Helmet>
        <title>Our Clients - Marino Corporation Of India | Trusted by Leading Organizations</title>
        <meta
          name="description"
          content="Marino Corporation Of India proudly serves prestigious clients including SAIL, ISRO, DRDO, Indian Ordnance, TATA, and Kolkata Port Trust. Trusted by India's leading organizations."
        />
        <meta name="keywords" content="marino clients, SAIL, ISRO, DRDO, Indian Ordnance, TATA, Kolkata Port Trust, industrial clients, marine equipment clients" />
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
                <h1 className="section-title text-foreground mt-2">
                  Trusted by
                  <span className="text-gradient"> Leading Organizations</span>
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
                      src={clientsImage} 
                      alt="Our Clients: SAIL, ISRO, DRDO, Indian Ordnance, TATA, Kolkata Port Trust"
                      className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Client List */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                      Our Client Portfolio Includes:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {clients.map((client, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          <span className="font-semibold text-foreground">{client}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card-industrial p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">40+</div>
                    <div className="text-muted-foreground">Years of Experience</div>
                  </div>
                  <div className="card-industrial p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">100+</div>
                    <div className="text-muted-foreground">Satisfied Clients</div>
                  </div>
                  <div className="card-industrial p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">6+</div>
                    <div className="text-muted-foreground">Major Organizations</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-title text-foreground mb-4">
                  Join Our <span className="text-gradient">Prestigious Client List</span>
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
