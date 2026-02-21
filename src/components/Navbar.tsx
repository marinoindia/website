import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import logoImage from '@/assets/logo/logo_updated.png';
import EnquiryForm from '@/components/EnquiryForm';
import SaleBanner from '@/components/SaleBanner';

const Navbar = () => {
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Product menu structure with submenus
  const productMenu = [
    {
      label: 'Slings',
      path: '/product/wire-rope-slings',
      children: [
        { label: 'Wire Rope Slings', path: '/product/wire-rope-slings' },
        { label: 'Single Leg Sling', path: '/variant/single-leg-wire-rope-sling' },
        { label: '2-Leg Sling', path: '/variant/2-leg-wire-rope-sling' },
        { label: '3-Leg Sling', path: '/variant/3-leg-wire-rope-sling' },
        { label: '4-Leg Sling', path: '/variant/4-leg-wire-rope-sling' },
        { label: 'Chain Slings', path: '/product/chain-slings' },
        { label: 'Single Leg Chain', path: '/variant/single-leg-chain-sling' },
        { label: '2-Leg Chain', path: '/variant/2-leg-chain-sling' },
      ]
    },
    {
      label: 'Chains',
      path: '/product/industrial-chains',
      children: [
        { label: 'Industrial Chains', path: '/product/industrial-chains' },
        { label: 'G80 Chain', path: '/product/chain-slings' },
        { label: 'G100 Chain', path: '/product/chain-slings' },
        { label: 'Anchor Chain', path: '/product/industrial-chains' },
        { label: 'Lashing Chain', path: '/product/industrial-chains' },
      ]
    },
    {
      label: 'Shackles',
      path: '/product/shackles',
      children: [
        { label: 'All Shackles', path: '/product/shackles' },
        { label: 'D-Shackles', path: '/variant/d-shackle' },
        { label: 'Bow Shackles', path: '/variant/bow-shackle' },
        { label: 'Screw Pin Type', path: '/variant/d-shackle' },
        { label: 'Nut-Bolt Type', path: '/variant/bow-shackle' },
      ]
    },
    {
      label: 'Hooks',
      path: '/product/hooks',
      children: [
        { label: 'All Hooks', path: '/product/hooks' },
        { label: 'Eye Hooks', path: '/product/hooks' },
        { label: 'Clevis Hooks', path: '/product/hooks' },
        { label: 'Swivel Hooks', path: '/product/hooks' },
        { label: 'Container Hooks', path: '/product/hooks' },
      ]
    },
    {
      label: 'Pulleys & Blocks',
      path: '/product/pulleys-blocks',
      children: [
        { label: 'All Pulleys', path: '/product/pulleys-blocks' },
        { label: 'Wire Rope Pulleys', path: '/product/pulleys-blocks' },
        { label: 'Manila Rope Pulleys', path: '/product/pulleys-blocks' },
        { label: 'Snatch Blocks', path: '/product/pulleys-blocks' },
      ]
    },
    {
      label: 'Lifting Lugs & Pins',
      path: '/products',
      children: [
        { label: 'All Lifting Lugs', path: '/products' },
        { label: 'Lifting Pins', path: '/products' },
        { label: 'Swivel Hoist Rings', path: '/products' },
      ]
    },
    {
      label: 'Ropes & Mooring',
      path: '/products',
      children: [
        { label: 'All Ropes', path: '/products' },
        { label: 'Mooring Ropes', path: '/products' },
        { label: 'Polypropylene Rope', path: '/products' },
        { label: 'Polyester Rope', path: '/products' },
      ]
    },
    {
      label: 'Anchors & Marine',
      path: '/products',
      children: [
        { label: 'All Marine Equipment', path: '/products' },
        { label: 'Ship Anchors', path: '/products' },
        { label: 'Anchor Chains', path: '/products' },
        { label: 'Fender Nets', path: '/products' },
      ]
    },
    {
      label: 'Lashing Equipment',
      path: '/products',
      children: [
        { label: 'All Lashing', path: '/products' },
        { label: 'Ratchet Lashing', path: '/products' },
        { label: 'Turnbuckles', path: '/products' },
        { label: 'Lashing Buckles', path: '/products' },
      ]
    },
    {
      label: 'Container Hardware',
      path: '/products',
      children: [
        { label: 'All Container Fittings', path: '/products' },
        { label: 'Bridge Fittings', path: '/products' },
        { label: 'Twist Locks', path: '/products' },
      ]
    },
    {
      label: 'Jacks & Lifting',
      path: '/products',
      children: [
        { label: 'All Jacks', path: '/products' },
        { label: 'Screw Jacks', path: '/products' },
        { label: 'Hydraulic Jacks', path: '/products' },
        { label: 'Lifting Beams', path: '/products' },
      ]
    },
    {
      label: 'Wire Rope Accessories',
      path: '/product/wire-rope-accessories',
      children: [
        { label: 'All Accessories', path: '/product/wire-rope-accessories' },
        { label: 'Wire Rope Clips', path: '/product/wire-rope-accessories' },
        { label: 'Thimbles', path: '/product/thimbles' },
        { label: 'Sockets', path: '/product/wire-rope-accessories' },
      ]
    },
    {
      label: 'Turnbuckles',
      path: '/product/turnbuckles',
      children: [
        { label: 'All Turnbuckles', path: '/product/turnbuckles' },
        { label: 'Eye & Eye', path: '/product/turnbuckles' },
        { label: 'Jaw & Jaw', path: '/product/turnbuckles' },
        { label: 'Hook & Eye', path: '/product/turnbuckles' },
      ]
    },
    {
      label: 'Safety Equipment & PPE',
      path: '/products',
      children: [
        { label: 'All Safety Gear', path: '/products' },
        { label: 'Safety Nets', path: '/products' },
        { label: 'Life Jackets', path: '/products' },
        { label: 'Safety Shoes', path: '/products' },
      ]
    },
    {
      label: 'Timber Equipment',
      path: '/products',
      children: [
        { label: 'All Timber Jacks', path: '/products' },
        { label: 'Wooden Timber Jacks', path: '/products' },
      ]
    },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Us' },
    { href: '/products', label: 'All Products', isProducts: true },
    { href: '/premade-slings', label: 'Premade Slings' },
    { href: '/#why-us', label: 'Why Choose Us' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/our-people', label: 'Our People' },
    { href: '/clients', label: 'Clients' },
    { href: '/media', label: 'Media' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleHashLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname !== path) {
        navigate(href);
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <>
      {/* Sale Banner - Fixed at top */}
      <SaleBanner />
      
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
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className="nav-link text-sm font-medium text-foreground/80 hover:text-accent transition-colors px-3 py-2">
                Home
              </Link>

              {/* Products Mega Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link text-sm font-medium text-foreground/80 hover:text-accent transition-colors px-3 py-2 flex items-center gap-1">
                  Products <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  {/* All Products Link */}
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer font-semibold">
                      All Products
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/premade-slings" className="cursor-pointer font-semibold text-emerald-600">
                      Premade Slings (Ready Stock)
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2" />
                  
                  {/* Simple list of categories without submenus */}
                  <DropdownMenuItem asChild>
                    <Link to="/product/wire-rope-slings" className="cursor-pointer">Slings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/product/industrial-chains" className="cursor-pointer">Chains</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/product/shackles" className="cursor-pointer">Shackles</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/product/hooks" className="cursor-pointer">Hooks</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/product/pulleys-blocks" className="cursor-pointer">Pulleys & Blocks</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/product/wire-rope-accessories" className="cursor-pointer">Wire Rope Accessories</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">Lifting Lugs & Pins</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">Ropes & Mooring</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">Anchors & Marine</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">Lashing Equipment</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">Container Hardware</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">Jacks & Lifting</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">Safety Equipment & PPE</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer">Timber Equipment</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/our-people" className="nav-link text-sm font-medium text-foreground/80 hover:text-accent transition-colors px-3 py-2">
                Our People
              </Link>

              <Link to="/clients" className="nav-link text-sm font-medium text-foreground/80 hover:text-accent transition-colors px-3 py-2">
                Clients
              </Link>

              <Link to="/media" className="nav-link text-sm font-medium text-foreground/80 hover:text-accent transition-colors px-3 py-2">
                Media
              </Link>

              <Link to="/blog" className="nav-link text-sm font-medium text-foreground/80 hover:text-accent transition-colors px-3 py-2">
                Blog
              </Link>

              <Link to="/contact" className="nav-link text-sm font-medium text-foreground/80 hover:text-accent transition-colors px-3 py-2">
                Contact
              </Link>

              {/* Sidebar Menu Button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-10 w-10 border border-border hover:bg-accent/10 ml-2"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[350px] sm:w-[400px] p-0 overflow-y-auto">
                  <SheetHeader className="p-6 border-b border-border bg-primary/5">
                    <SheetTitle className="flex items-center gap-3">
                      <img 
                        src={logoImage} 
                        alt="Marino" 
                        className="w-10 h-10 object-contain rounded"
                      />
                      <div className="text-left">
                        <span className="block text-sm font-bold text-[#0d3d26]">MARINO</span>
                        <span className="block text-xs text-muted-foreground">Corporation of India</span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="py-4">
                    {/* Main Nav Links */}
                    <div className="px-4 mb-4">
                      <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-accent/10 rounded-lg"
                      >
                        Home
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    </div>

                    {/* Products Section with Submenu */}
                    <div className="border-t border-border pt-4">
                      <p className="px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Product Categories
                      </p>
                      
                      {productMenu.map((category) => (
                        <div key={category.label} className="mb-1">
                          <Link
                            to={category.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground hover:bg-accent/10 rounded-lg mx-2"
                          >
                            <span>{category.label}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </Link>
                        </div>
                      ))}
                    </div>

                    {/* Other Pages */}
                    <div className="border-t border-border mt-4 pt-4">
                      {[
                        { to: '/premade-slings', label: 'Premade Slings' },
                        { to: '/our-people', label: 'Our People' },
                        { to: '/clients', label: 'Clients' },
                        { to: '/media', label: 'Media' },
                        { to: '/contact', label: 'Contact' },
                      ].map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-6 py-3 text-sm font-medium hover:bg-accent/10"
                        >
                          {link.label}
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-background">
                    <Button 
                      className="w-full btn-accent gap-2"
                      onClick={() => {
                        setIsOpen(false);
                        setIsEnquiryFormOpen(true);
                      }}
                    >
                      Enquiry Form
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2 lg:gap-4 flex-shrink-0">
              <Button 
                className="btn-accent text-xs lg:text-sm px-3 lg:px-6 py-2 lg:py-3 whitespace-nowrap"
                onClick={() => setIsEnquiryFormOpen(true)}
              >
                Enquiry Form
              </Button>
            </div>

            {/* Mobile: Simple hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-10 w-10"
                  >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[350px] sm:w-[400px] p-0 overflow-y-auto">
                  <SheetHeader className="p-6 border-b border-border bg-primary/5">
                    <SheetTitle className="flex items-center gap-3">
                      <img 
                        src={logoImage} 
                        alt="Marino" 
                        className="w-10 h-10 object-contain rounded"
                      />
                      <div className="text-left">
                        <span className="block text-sm font-bold text-[#0d3d26]">MARINO</span>
                        <span className="block text-xs text-muted-foreground">Corporation of India</span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <div className="py-4 pb-24">
                    {/* Main Navigation */}
                    <Link
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-6 py-3 text-sm font-medium hover:bg-accent/10"
                    >
                      Home
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>

                    {/* Products Section - Top Level Only */}
                    <div className="border-t border-border mt-2 pt-2">
                      <p className="px-6 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Products
                      </p>
                      
                      {productMenu.map((category) => (
                        <Link
                          key={category.label}
                          to={category.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground hover:bg-accent/10 border-b border-border/50 last:border-0"
                        >
                          <span>{category.label}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>

                    {/* Other Pages */}
                    <div className="border-t border-border mt-2 pt-2">
                      {[
                        { to: '/premade-slings', label: 'Premade Slings' },
                        { to: '/our-people', label: 'Our People' },
                        { to: '/clients', label: 'Clients' },
                        { to: '/media', label: 'Media' },
                        { to: '/blog', label: 'Blog' },
                        { to: '/contact', label: 'Contact' },
                      ].map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-6 py-3 text-sm font-medium hover:bg-accent/10"
                        >
                          {link.label}
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-background">
                    <Button 
                      className="w-full btn-accent gap-2"
                      onClick={() => {
                        setIsOpen(false);
                        setIsEnquiryFormOpen(true);
                      }}
                    >
                      Enquiry Form
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      <EnquiryForm open={isEnquiryFormOpen} onOpenChange={setIsEnquiryFormOpen} />
    </>
  );
};

export default Navbar;
