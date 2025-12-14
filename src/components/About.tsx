import { Link } from 'react-router-dom';
import { Building2, Users, MapPin, ArrowRight, Shield, Award, Clock, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { icon: Building2, label: 'Business Type', value: 'Proprietorship' },
    { icon: Users, label: 'Nature of Business', value: 'Manufacturer & Retailer' },
    { icon: MapPin, label: 'Location', value: 'Kolkata, West Bengal' },
  ];

  return (
    <>
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* Content */}
            <div>
              <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">About Us</span>
              <h2 className="section-title text-foreground mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Trusted Industrial
                <span className="text-gradient"> Partner</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                <strong>Marino Corporation Of India</strong> is a leading manufacturer and supplier of industrial hardware, specializing in Steel Wire Rope, Rope Slings, Chain & Chain Slings, Shackles Hooks, Turn Buckles & All Kinds of Safety and Lifting Tackles. Based in Kolkata, West Bengal.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                With over 40 years of industry experience, we have established ourselves as a reliable partner for businesses requiring high-quality industrial chains, marine equipment, wire rope slings, and lifting solutions. Our commitment to quality and customer satisfaction has made us a preferred choice for industries across India.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="card-industrial p-3 sm:p-4 flex items-center gap-2 sm:gap-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                      <p className="font-semibold text-foreground text-xs sm:text-sm md:text-base">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-4">
                  <div className="card-industrial p-6">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">GST Registered</h3>
                    <p className="text-sm text-muted-foreground">19ADMPR1740H1ZA</p>
                    <p className="text-xs text-muted-foreground mt-1">Since 22-08-2017</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="card-industrial p-6">
                    <div className="w-12 h-12 bg-marine-blue/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-marine-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Quality Assured</h3>
                    <p className="text-sm text-muted-foreground">Premium industrial grade products</p>
                  </div>
                  <div className="card-industrial p-8 bg-accent text-accent-foreground">
                    <span className="font-display text-4xl font-bold">100+</span>
                    <p className="text-accent-foreground/80 mt-2">Products Available</p>
                  </div>
                </div>
              </div>
              {/* 40 Years Experience - Moved Down */}
              <div className="card-industrial p-8 bg-primary text-primary-foreground">
                <span className="font-display text-5xl font-bold">40+</span>
                <p className="text-primary-foreground/80 mt-2">Years in Business</p>
              </div>

              {/* Hero Content - Moved Below Image Grid */}
              <div className="mt-6 space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-accent/10 border-2 border-accent/30 rounded-full px-4 py-2 shadow-lg">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-accent text-sm font-bold">40 Years of Industry Experience</span>
                </div>

                {/* Main heading */}
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Marino Corporation <span className="text-accent">Of India</span>
                </h1>

                {/* Subtitle */}
                <p className="text-muted-foreground text-base sm:text-lg font-semibold leading-relaxed">
                  Leading manufacturer and supplier of industrial chains, marine equipment, pulley blocks, and lifting hardware in Kolkata, West Bengal.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="https://wa.me/919831144669?text=Hello%2C%20I%20am%20interested%20in%20your%20products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button size="lg" className="btn-accent text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 gap-2 w-full sm:w-auto">
                      Contact on WhatsApp
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </a>
                  <Link to="/products" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 bg-[hsl(25_95%_53%)] hover:bg-[hsl(25_90%_45%)] text-white border-0 w-full sm:w-auto"
                    >
                      View Products
                    </Button>
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-accent/30">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-foreground">GST Verified</p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Registered Business</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-accent/30">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-foreground">Quality Assured</p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Premium Products</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-accent/30">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-foreground">40 Years</p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Industry Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founders/Proprietors Section */}
          <div className="mt-16 sm:mt-20 md:mt-24">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Our People
              </h2>
            </div>

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
                  />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Pradeep Kumar Rout
                </h3>
                <p className="text-accent font-semibold text-sm sm:text-base mb-3">(Binny)</p>
                <p className="text-muted-foreground text-sm sm:text-base font-medium">
                  Founder & Proprietor
                </p>
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
                <p className="text-accent font-semibold text-sm sm:text-base">(Bikku)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
