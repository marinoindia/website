import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import logoImage from '@/assets/logo/logo_marino.jpeg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="space-y-4 sm:space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground text-sm sm:text-base mb-1">Address</h4>
                  <p className="text-primary-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed">
                    28, Orphangunj Road, Kidderpore,<br />
                    Kolkata - 700 023
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground text-sm sm:text-base mb-1">Email</h4>
                  <div className="space-y-1">
                    <a href="mailto:marinocoindia@gmail.com" className="block text-primary-foreground/90 text-sm sm:text-base md:text-lg hover:text-accent hover:underline transition-colors break-all">
                      marinocoindia@gmail.com
                    </a>
                    <a href="mailto:marinocorporationofindia@gmail.com" className="block text-primary-foreground/90 text-sm sm:text-base md:text-lg hover:text-accent hover:underline transition-colors break-all">
                      marinocorporationofindia@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground text-sm sm:text-base mb-1">Contact</h4>
                  <div className="space-y-1.5 text-primary-foreground/90 text-sm sm:text-base md:text-lg">
                    <p>
                      <span className="font-medium">P. K. Rout (Binny):</span>{' '}
                      <a href="tel:9831144669" className="hover:text-accent hover:underline">9831144669</a>
                      {', '}
                      <a href="tel:8100052948" className="hover:text-accent hover:underline">81000 52948</a>
                    </p>
                    <p>
                      <span className="font-medium">V. K. Rout (Bikku):</span>{' '}
                      <a href="tel:9831327279" className="hover:text-accent hover:underline">9831327279</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/#why-us" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-bold mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {['Chains', 'Slings', 'Hooks', 'Shackles', 'Lifting Lugs & Pins', 'Pulleys & Blocks', 'Ropes & Mooring', 'Anchors & Marine', 'Lashing Equipment', 'Container Hardware', 'Jacks & Lifting', 'Wire Rope Hardware', 'Safety Equipment', 'Timber Equipment'].map((product) => (
                <li key={product}>
                  <Link to="/products" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src={logoImage} 
                alt="Marino Corporation of India Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <div>
                <div className="text-[#FFEB3B] font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider font-sans">
                  MARINO
                </div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">
                  Corporation of India
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 text-primary-foreground/70 text-xs sm:text-sm">
              <span>GST: 19ADMPR1740H1ZA</span>
              <span>Registered: 22-08-2017</span>
              <span>Type: Proprietorship</span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/90 transition-colors touch-manipulation"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/marino-corporation-of-india"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </a>
              <a
                href="https://www.instagram.com/marino_corporation_of_india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </a>
            </div>
            <p className="text-primary-foreground/60 text-xs sm:text-sm text-center px-2">
              © {new Date().getFullYear()} Marino Corporation Of India. All rights reserved.
              <br />
              <span className="text-primary-foreground/50 text-[10px] sm:text-xs">
                This website and its content are protected by copyright law. Unauthorized copying, reproduction, or distribution is strictly prohibited.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
