import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo/logo_marino.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#products', label: 'Products' },
    { href: '#why-us', label: 'Why Choose Us' },
    { href: '#media', label: 'Media' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call Us Today</span>
            </span>
            <a href="mailto:marinocoindia@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-4 h-4" />
              <span>marinocoindia@gmail.com</span>
            </a>
            <a href="mailto:marinocorporationofindia@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-4 h-4" />
              <span>marinocorporationofindia@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-foreground/80">GST: 19ADMPR1740H1ZA</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="Marino Corporation of India Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="hidden sm:block px-4 py-2 bg-[#0d3d1f]/60 backdrop-blur-sm rounded-lg border border-gray-200/40 shadow-sm">
                <span className="text-[#FFEB3B] font-bold text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap font-sans">
                  MARINO CORPORATION OF INDIA
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/919831144669?text=Hello%2C%20I%20am%20interested%20in%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-accent">
                  Get Quote
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-accent transition-colors py-2 font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/919831144669?text=Hello%2C%20I%20am%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button className="btn-accent w-full">
                    Get Quote on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
