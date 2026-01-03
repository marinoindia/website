import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo/logo_marino.jpeg';
import EnquiryForm from '@/components/EnquiryForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/#why-us', label: 'Why Choose Us' },
    { href: '/our-people', label: 'Our People' },
    { href: '/clients', label: 'Clients' },
    { href: '/media', label: 'Media' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    // If clicking a hash link from a different page, navigate first
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname !== path) {
        e.preventDefault();
        navigate(href);
        // Scroll after navigation
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-1.5 sm:py-2">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-6">
              <a href="tel:9831144669" className="flex items-center gap-1.5 sm:gap-2 hover:underline whitespace-nowrap">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Call Us Today</span>
              </a>
              <a href="mailto:marinocoindia@gmail.com" className="flex items-center gap-1.5 sm:gap-2 hover:underline whitespace-nowrap">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="hidden lg:inline">marinocoindia@gmail.com</span>
                <span className="lg:hidden">Email</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary-foreground/80 text-[10px] sm:text-xs md:text-sm whitespace-nowrap break-all sm:break-normal">GST: 19ADMPR1740H1ZA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
              <img 
                src={logoImage} 
                alt="Marino Corporation of India Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
              />
              <div className="hidden sm:block px-2 sm:px-4 py-1 sm:py-2 bg-[#0d3d1f]/60 backdrop-blur-sm rounded-lg border border-gray-200/40 shadow-sm">
                <span className="text-[#FFEB3B] font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider whitespace-nowrap font-sans">
                  MARINO CORPORATION OF INDIA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-wrap">
              {navLinks.map((link) => {
                // Use Link for routes, anchor for hash links
                if (link.href.startsWith('/') && !link.href.includes('#')) {
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="nav-link text-sm font-normal whitespace-nowrap"
                      style={{ 
                        color: 'hsl(0, 0%, 9%, 0.8)',
                        textDecoration: 'none'
                      } as React.CSSProperties}
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleHashLinkClick(e, link.href)}
                    className="nav-link text-sm font-normal whitespace-nowrap"
                    style={{ 
                      color: 'hsl(0, 0%, 9%, 0.8)',
                      textDecoration: 'none'
                    } as React.CSSProperties}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-shrink-0">
              <Button 
                className="btn-accent text-xs lg:text-sm px-3 lg:px-6 py-2 lg:py-3 whitespace-nowrap"
                onClick={() => setIsEnquiryFormOpen(true)}
              >
                Enquiry Form
                </Button>
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
                {navLinks.map((link) => {
                  if (link.href.startsWith('/') && !link.href.includes('#')) {
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="nav-link text-sm font-normal py-2"
                        style={{ 
                          color: 'hsl(0, 0%, 9%, 0.8)',
                          textDecoration: 'none'
                        } as React.CSSProperties}
                      >
                        {link.label}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleHashLinkClick(e, link.href)}
                      className="nav-link text-sm font-normal py-2"
                      style={{ 
                        color: 'hsl(0, 0%, 9%, 0.8)',
                        textDecoration: 'none'
                      } as React.CSSProperties}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <Button 
                  className="btn-accent w-full mt-4"
                  onClick={() => {
                    setIsEnquiryFormOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Enquiry Form
                  </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <EnquiryForm open={isEnquiryFormOpen} onOpenChange={setIsEnquiryFormOpen} />
    </>
  );
};

export default Navbar;
