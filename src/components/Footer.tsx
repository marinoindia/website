import { ArrowUp } from 'lucide-react';
import logoImage from '@/assets/logo/logo_marino.jpeg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Marino Corporation of India Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-[#FFEB3B] font-bold text-lg sm:text-xl uppercase tracking-wider whitespace-nowrap font-sans">
                  MARINO CORPORATION OF INDIA
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-4">
              Leading manufacturer and supplier of industrial chains, marine equipment, pulley blocks, and lifting hardware in Kolkata, West Bengal.
            </p>
            <div className="space-y-1 text-primary-foreground/70 text-sm">
              <p><strong>Address:</strong> 28, Orphangunj Road, Kidderpore, Kolkata - 700 023</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:marinocoindia@gmail.com" className="hover:text-accent hover:underline">marinocoindia@gmail.com</a>
                {' | '}
                <a href="mailto:marinocorporationofindia@gmail.com" className="hover:text-accent hover:underline">marinocorporationofindia@gmail.com</a>
              </p>
              <p><strong>Contact:</strong> P. K. Rout (Binny): 9831144669 | V. K. Rout (Bikku): 9831327279</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products', 'Why Choose Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              {['Pulley Blocks', 'Lifting Chains', 'Marine Equipment', 'Wire Rope Slings', 'Container Hooks'].map((product) => (
                <li key={product}>
                  <span className="text-primary-foreground/70">{product}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="Marino Corporation of India Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="text-[#FFEB3B] font-bold text-base sm:text-lg uppercase tracking-wider font-sans">
                  MARINO
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  Corporation of India
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-primary-foreground/70 text-sm">
              <span>GST: 19ADMPR1740H1ZA</span>
              <span>Registered: 22-08-2017</span>
              <span>Type: Proprietorship</span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
            >
              <ArrowUp className="w-5 h-5 text-accent-foreground" />
            </button>
          </div>
          <p className="text-primary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} Marino Corporation Of India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
