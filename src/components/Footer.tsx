import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import logoImage from '@/assets/logo/logo_marino.jpeg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10">
          {/* Brand & Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Address</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    28, Orphangunj Road, Kidderpore,<br />
                    Kolkata - 700 023
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Email</h4>
                  <div className="space-y-1">
                    <a href="mailto:marinocoindia@gmail.com" className="block text-slate-300 text-sm hover:text-emerald-400 transition-colors break-all">
                      marinocoindia@gmail.com
                    </a>
                    <a href="mailto:marinocorporationofindia@gmail.com" className="block text-slate-300 text-sm hover:text-emerald-400 transition-colors break-all">
                      marinocorporationofindia@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Contact</h4>
                  <div className="space-y-1.5 text-slate-300 text-sm">
                    <p>
                      <span className="font-medium text-slate-200">P. K. Rout (Binny):</span>{' '}
                      <a href="tel:9831144669" className="hover:text-emerald-400 transition-colors">9831144669</a>
                      {', '}
                      <a href="tel:8100052948" className="hover:text-emerald-400 transition-colors">81000 52948</a>
                    </p>
                    <p>
                      <span className="font-medium text-slate-200">V. K. Rout (Bikku):</span>{' '}
                      <a href="tel:9831327279" className="hover:text-emerald-400 transition-colors">9831327279</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/#about', label: 'About Us' },
                { to: '/#certifications', label: 'Certifications' },
                { to: '/products', label: 'Products' },
                { to: '/premade-slings', label: 'Premade Slings' },
                { to: '/#why-us', label: 'Why Choose Us' },
                { to: '/our-people', label: 'Our People' },
                { to: '/clients', label: 'Clients' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Products</h4>
            <ul className="space-y-2">
              {['Chains', 'Slings', 'Hooks', 'Shackles', 'Lifting Lugs & Pins', 'Pulleys & Blocks', 'Ropes & Mooring', 'Anchors & Marine', 'Lashing Equipment', 'Safety Equipment'].map((product) => (
                <li key={product}>
                  <Link to="/products" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Service Areas</h4>
            <p className="text-slate-400 text-xs mb-3 leading-relaxed">
              We deliver wire rope, slings, chains and industrial equipment across India:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Kolkata'].map((city) => (
                <span key={city} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded hover:bg-emerald-600 hover:text-white transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <img
                  src={logoImage}
                  alt="Marino Corporation of India Logo"
                  className="w-10 h-10 object-contain rounded-lg"
                  loading="lazy"
                />
                <div>
                  <div className="text-white font-bold text-sm uppercase tracking-wide">
                    MARINO
                  </div>
                  <div className="text-slate-400 text-xs">
                    Corporation of India
                  </div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-700" />
              <div className="text-slate-400 text-xs space-y-0.5">
                <p>GST: 19ADMPR1740H1ZA</p>
                <p>Registered: 22-08-2017 • Proprietorship</p>
              </div>
            </div>

            {/* Social & Scroll */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/marino-corporation-of-india"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-slate-300" />
              </a>
              <a
                href="https://www.instagram.com/marino_corporation_of_india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-slate-300" />
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Marino Corporation Of India. All rights reserved.
            </p>
            <p className="text-slate-600 text-[10px] mt-1">
              This website and its content are protected by copyright law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
