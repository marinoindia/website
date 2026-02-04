import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { User, Sparkles, Phone, Building2, Calendar, Users, FileText, Globe } from 'lucide-react';

const OurPeoplePage = () => {
  return (
    <>
      <Helmet>
        <title>Our People - Marino Corporation Of India</title>
        <meta
          name="description"
          content="Meet the team of Marino Corporation Of India - Pradeep Kumar Rout (Binny), Vikram Keshari Rout (Bikku), and Govardhan Rout. India's best wire rope, sling and chain supplier in Kolkata/Calcutta."
        />
        <meta name="keywords" content="Marino Corporation team, Pradeep Kumar Rout, Vikram Keshari Rout, Govardhan Rout, India best wire rope supplier team, Kolkata industrial supplier" />
        <link rel="canonical" href="https://marinoindia.co.in/our-people" />
        <meta property="og:title" content="Our People - Marino Corporation Of India" />
        <meta property="og:description" content="Meet the team behind India's best wire rope, sling and chain supplier. 40+ years of combined experience in Kolkata." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marinoindia.co.in/our-people" />
        <meta property="og:image" content="https://marinoindia.co.in/logo/logo_marino.jpeg" />
        <meta property="og:site_name" content="Marino Corporation Of India" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our People - Marino Corporation Of India" />
        <meta name="twitter:description" content="Meet the dedicated team behind Marino Corporation Of India, serving customers across India since 1985." />
        <meta name="twitter:image" content="https://marinoindia.co.in/logo/logo_marino.jpeg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our People</span>
                <h1 className="section-title text-[#0d3d26] mt-2">
                  Meet Our
                  <span className="text-[#0d3d26]"> People</span>
                </h1>
                <p className="text-muted-foreground text-lg mt-4">
                  The dedicated team behind India's best wire rope, sling and chain supplier in Kolkata/Calcutta.
                </p>
              </div>
            </div>
          </section>

          {/* People Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                  {/* Blessing from Mr. Govardhan Rout */}
                  <div className="card-industrial p-6 sm:p-8 text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent/30">
                      {/* Placeholder for image - will be replaced when image is provided */}
                      <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-accent" />
                      {/* Uncomment and update src when image is available */}
                      {/* <img 
                        src="/path/to/govardhan-rout.jpg" 
                        alt="Mr. Govardhan Rout" 
                        className="w-full h-full object-cover rounded-full"
                      /> */}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Mr. Govardhan Rout
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base font-medium italic">
                      With Blessings From
                    </p>
                  </div>

                  {/* Pradeep Kumar Rout (Binny) - Founder/Proprietor */}
                  <div className="card-industrial p-6 sm:p-8 text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent/30 overflow-hidden">
                      <img
                        src="/media/pradeep-kumar-rout.png"
                        alt="Pradeep Kumar Rout (Binny)"
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Pradeep Kumar Rout
                    </h3>
                    <p className="text-accent font-semibold text-sm sm:text-base mb-3">(Binny)</p>
                    <p className="text-muted-foreground text-sm sm:text-base font-medium mb-4">
                      Founder & Proprietor
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-accent" />
                      <a href="tel:9831144669" className="hover:text-accent hover:underline">9831144669</a>
                      <span className="text-muted-foreground/50">,</span>
                      <a href="tel:8100052948" className="hover:text-accent hover:underline">81000 52948</a>
                    </div>
                  </div>

                  {/* Vikram Keshari Rout (Bikku) */}
                  <div className="card-industrial p-6 sm:p-8 text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent/30">
                      {/* Placeholder for image - will be replaced when image is provided */}
                      <User className="w-12 h-12 sm:w-16 sm:h-16 text-accent" />
                      {/* Uncomment and update src when image is available */}
                      {/* <img 
                        src="/path/to/vikram-keshari-rout.jpg" 
                        alt="Vikram Keshari Rout (Bikku)" 
                        className="w-full h-full object-cover rounded-full"
                      /> */}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Vikram Keshari Rout
                    </h3>
                    <p className="text-accent font-semibold text-sm sm:text-base mb-4">(Bikku)</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-accent" />
                      <a href="tel:9831327279" className="hover:text-accent hover:underline">9831327279</a>
                    </div>
                  </div>
                </div>

                {/* Business Information Section */}
                <div className="mt-12 sm:mt-16">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      Business Information
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                    {/* Business Type */}
                    <div className="card-industrial p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">Business Type</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        Manufacturer, Trader, Supplier, Distributor
                      </p>
                    </div>

                    {/* Year of Establishment */}
                    <div className="card-industrial p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">Year of Establishment</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm font-semibold text-lg sm:text-xl">1985</p>
                    </div>

                    {/* No. of Employees */}
                    <div className="card-industrial p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Users className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">No. of Employees</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm font-semibold text-lg sm:text-xl">15</p>
                    </div>

                    {/* GST No. */}
                    <div className="card-industrial p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">GST No.</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm font-semibold">GST: 19ADMPR1740H1ZA</p>
                    </div>

                    {/* Importer-Exporter Code (IEC) */}
                    <div className="card-industrial p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">Importer-Exporter Code (IEC)</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm font-semibold">XXXXXXXXXX <span className="text-muted-foreground/70 italic">(coming soon)</span></p>
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="mt-12 sm:mt-16">
                  <div className="card-industrial p-6 sm:p-8 md:p-12 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-pink-950/20">
                    <div className="text-center max-w-3xl mx-auto">
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                        Our Commitment
                      </h2>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        With our dedicated team, Marino Corporation Of India has grown to become 
                        India's best wire rope, sling and chain supplier. With over 40 years of combined experience, 
                        we are committed to delivering excellence in every product and service we provide to our 
                        customers across Kolkata, Calcutta, and throughout India.
                      </p>
                    </div>
                  </div>
                </div>
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

export default OurPeoplePage;
