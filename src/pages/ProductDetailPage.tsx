import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Download, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Comprehensive Product Database
const productDatabase: Record<string, {
  name: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  image: string;
  category: string;
  faqs: { q: string; a: string }[];
  relatedProducts: string[];
}> = {
  'wire-rope-slings': {
    name: 'Wire Rope Slings',
    title: 'Wire Rope Slings Manufacturer & Supplier in India | Usha Martin Wire',
    description: 'Buy premium wire rope slings online. Manufactured using Usha Martin specialized wire rope with mechanical hand-made splicing. Available with thimbles, eye hooks, and custom end fittings. Pan India delivery from Kolkata.',
    longDescription: 'Wire rope slings are the most versatile and widely used lifting slings in industrial applications. Our wire rope slings are manufactured using genuine Usha Martin specialized wire rope, ensuring superior strength, flexibility, and durability. Unlike pressed slings, our mechanical hand-made splicing provides better load distribution and longer service life. Available in various configurations including single leg, 2-leg, 3-leg, and 4-leg assemblies.',
    features: [
      'Made with genuine Usha Martin specialized wire rope',
      'Mechanical hand-made splicing (not pressed)',
      'Superior strength and flexibility',
      'Test certified for safety (test certificates provided)',
      'Available with thimbles, hooks, or custom fittings',
      'IS 2266 and BS EN 13414-1 compliant',
      'Hot dip galvanized or ungalvanized finish',
      'Working load limits from 0.5T to 30T'
    ],
    specifications: {
      'Diameter Range': '6mm - 32mm',
      'Working Load Limit': '0.5T - 30T',
      'Construction': '6x19, 6x36, 8x19',
      'Core Type': 'Fiber Core (FC) / IWRC',
      'Grade': '1770, 1960 MPa',
      'End Fittings': 'Thimble, Eye Hook, Master Link, Shackle',
      'Finish': 'Ungalvanized / Hot Dip Galvanized',
      'Standard': 'IS 2266, BS EN 13414-1',
      'Safety Factor': '5:1'
    },
    applications: [
      'Construction and infrastructure projects',
      'Port and shipping cargo handling',
      'Mining and heavy industry operations',
      'Manufacturing plant maintenance',
      'Warehouse material handling',
      'Oil and gas installations',
      'Power plant maintenance',
      'Steel plant operations'
    ],
    image: '/images/premade_slings_hero.png',
    category: 'Lifting Slings',
    faqs: [
      {
        q: 'What is the difference between hand-made and pressed wire rope slings?',
        a: 'Hand-made splicing provides better load distribution, longer service life, and maintains the rope\'s original strength better than pressed fittings. Our mechanical splicing is done by skilled craftsmen for maximum safety.'
      },
      {
        q: 'What is the working load limit of your wire rope slings?',
        a: 'Our wire rope slings have working load limits ranging from 0.5 ton to 30 ton depending on diameter and configuration. All slings come with test certificates and are proof tested to 2x WLL.'
      },
      {
        q: 'Do you deliver wire rope slings across India?',
        a: 'Yes, we provide pan India delivery from our Kolkata facility. Delivery typically takes 3-7 days depending on location. We deliver to Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad, and all major cities.'
      },
      {
        q: 'Are your slings made with Usha Martin wire rope?',
        a: 'Yes, all our wire rope slings are manufactured using genuine Usha Martin specialized wire rope for maximum strength and durability. We are authorized distributors of Usha Martin products.'
      },
      {
        q: 'What configurations are available?',
        a: 'We offer single leg, 2-leg (basket), 3-leg, and 4-leg wire rope sling assemblies. Custom lengths and end fittings can be manufactured to your specifications.'
      }
    ],
    relatedProducts: ['chain-slings', 'shackles', 'hooks', 'wire-rope-accessories']
  },
  
  'industrial-chains': {
    name: 'Industrial Chains',
    title: 'Industrial Chains Supplier India | G80 G100 Alloy Steel | Anchor & Lashing',
    description: 'High-quality industrial chains including G80, G100 alloy steel chains, anchor chains, and lashing chains. Available in various sizes from 6mm to 32mm. Test certified, IS and EN compliant. Pan India delivery.',
    longDescription: 'We supply a comprehensive range of industrial chains for lifting, lashing, and anchoring applications. Our chains are manufactured from high-tensile alloy steel and available in Grade 80 (G80) and Grade 100 (G100) specifications. Each chain is proof tested and certified for safety. Applications include lifting slings, anchor systems, cargo lashing, and industrial machinery.',
    features: [
      'Grade 80 and Grade 100 high-tensile alloy steel',
      'Available in black, galvanized, and powder coated finishes',
      'Calibrated and non-calibrated options',
      'Proof tested and certified (test certificates provided)',
      'High abrasion and impact resistance',
      'Suitable for extreme temperature environments',
      'Compliant with EN 818-2, IS 2760, ASTM A391',
      'Cut to required length service available'
    ],
    specifications: {
      'Chain Grades': 'G80, G100, G63',
      'Size Range': '6mm - 32mm diameter',
      'Working Load Limit': '1.1T - 31.5T (varies by grade)',
      'Material': 'Alloy Steel (Quenched & Tempered)',
      'Finish Options': 'Black Self-Color / Hot Dip Galvanized / Powder Coated',
      'Standards': 'EN 818-2, IS 2760, ASTM A391, ASTM A973',
      'Safety Factor': '4:1 minimum',
      'Temperature Range': '-40°C to +400°C (grade dependent)'
    },
    applications: [
      'Lifting chain slings assembly',
      'Ship anchor and mooring chains',
      'Cargo lashing and securing',
      'Industrial conveyor systems',
      'Mining and quarry equipment',
      'Construction hoisting systems',
      'Overhead crane load chains',
      'Marine and offshore applications'
    ],
    image: '/images/chains.jpeg',
    category: 'Industrial Chains',
    faqs: [
      {
        q: 'What is the difference between G80 and G100 industrial chains?',
        a: 'G100 chain has approximately 25% higher strength than G80 chain of the same size. For example, a 10mm G80 chain has a WLL of 3.15 tonnes, while a 10mm G100 chain has a WLL of 4.0 tonnes. G100 allows for either higher capacity or smaller chain size for the same load.'
      },
      {
        q: 'How do I calculate the working load limit for chain slings?',
        a: 'The WLL depends on chain grade, diameter, and configuration. Single leg uses full WLL. 2-leg at 0-45° angle = 1.4×WLL, at 45-60° = 1.0×WLL. Always consult load tables and consider angle factors for multi-leg assemblies.'
      },
      {
        q: 'What inspection is required for industrial chains?',
        a: 'OSHA requires daily visual inspection before use and periodic thorough inspection every 12 months. Check for stretched links (over 5% elongation), cracks, nicks, gouges, and wear exceeding 10% of original diameter. Remove from service if any defects are found.'
      }
    ],
    relatedProducts: ['chain-slings', 'shackles', 'hooks']
  },

  'chain-slings': {
    name: 'Chain Slings',
    title: 'Chain Slings Manufacturer | G80 & G100 Alloy Chain | All India Delivery',
    description: 'High-strength alloy steel chain slings in G80 and G100 grades. 2-leg, 3-leg, and 4-leg configurations available. Test certified and compliant with international standards. Delivery across India.',
    longDescription: 'Chain slings are ideal for heavy-duty lifting applications where flexibility, durability, and resistance to abrasion are required. Our chain slings are manufactured using high-tensile alloy steel chain (Grade 80 and Grade 100) with various end fittings including hooks, shackles, and master links. Each sling is individually tested and certified for safety.',
    features: [
      'G80 and G100 high-tensile alloy steel chain',
      '2-leg, 3-leg, and 4-leg configurations',
      'Adjustable and non-adjustable options',
      'Self-locking safety hooks available',
      'Individual test certificates provided',
      'High resistance to abrasion and cutting',
      'Suitable for high-temperature applications',
      'Compliant with EN 818-4 and ASME B30.9'
    ],
    specifications: {
      'Chain Grade': 'G80, G100',
      'Diameter Range': '7mm - 32mm',
      'Working Load Limit': '1.1T - 31.5T',
      'Material': 'Alloy Steel (Quenched & Tempered)',
      'Finish': 'Powder Coated / Galvanized',
      'Standard': 'EN 818-4, ASME B30.9, IS 2760',
      'Safety Factor': '4:1',
      'Temperature Range': '-40°C to +200°C'
    },
    applications: [
      'Steel mill operations',
      'Foundry and forging applications',
      'Heavy machinery lifting',
      'Mining equipment handling',
      'Construction steel erection',
      'Shipbuilding and repair',
      'Port cargo handling',
      'Automotive manufacturing'
    ],
    image: '/images/Chain_sling.png',
    category: 'Lifting Slings',
    faqs: [
      {
        q: 'What is the difference between G80 and G100 chain slings?',
        a: 'G100 chains have 25% higher strength than G80 chains of the same size. This allows for either higher working load limits or the use of smaller chain sizes for the same load, reducing weight.'
      },
      {
        q: 'Can chain slings be used in high temperatures?',
        a: 'Yes, chain slings can be used in temperatures ranging from -40°C to +200°C. However, working load limits must be reduced at higher temperatures as per manufacturer guidelines.'
      },
      {
        q: 'How do I inspect chain slings?',
        a: 'Inspect for stretched links, cracks, nicks, gouges, and excessive wear. If any link is worn more than 10% of its original diameter, the sling should be removed from service.'
      }
    ],
    relatedProducts: ['wire-rope-slings', 'hooks', 'shackles']
  },

  'shackles': {
    name: 'Shackles',
    title: 'Shackles Supplier India | D-Shackles, Bow Shackles | G80 Alloy Steel',
    description: 'High-tensile steel shackles for lifting and rigging. D-shackles, bow shackles, screw pin and nut-bolt types. G80 alloy steel, load rated and certified. Bulk orders with India delivery.',
    longDescription: 'Shackles are essential rigging hardware used to connect lifting slings, ropes, and chains to loads. We supply a complete range of shackles including D-type (chain) shackles and bow (anchor) shackles in various pin configurations. Our G80 alloy steel shackles offer superior strength-to-weight ratio and are individually proof tested.',
    features: [
      'G80 high-tensile alloy steel construction',
      'D-Shackles (Chain) and Bow Shackles (Anchor)',
      'Screw pin and nut-bolt pin options',
      'Safety bolt types with split pin available',
      'Hot dip galvanized or self-colored finish',
      'Individually proof tested and marked',
      'Batch test certificates available',
      'Conforming to EN 13889 and US Fed Spec RR-C-271'
    ],
    specifications: {
      'Types': 'D-Shackle, Bow Shackle',
      'Pin Types': 'Screw Pin, Nut-Bolt, Safety Bolt',
      'Size Range': '0.5T to 55T WLL',
      'Material': 'Alloy Steel Grade 80',
      'Finish': 'Hot Dip Galvanized / Self Color',
      'Standard': 'EN 13889, US Fed Spec RR-C-271',
      'Safety Factor': '6:1',
      'Proof Test': '2x WLL'
    },
    applications: [
      'Lifting sling connections',
      'Anchor point rigging',
      'Towing and recovery operations',
      'Marine and offshore applications',
      'Construction rigging',
      'Load securing',
      'Industrial maintenance',
      'Tree rigging and arboriculture'
    ],
    image: '/images/shackles.jpeg',
    category: 'Rigging Hardware',
    faqs: [
      {
        q: 'What is the difference between D-shackle and bow shackle?',
        a: 'D-shackles (chain shackles) are designed for in-line loads. Bow shackles (anchor shackles) have a larger loop that can accommodate multiple sling legs or wider straps.'
      },
      {
        q: 'Which pin type should I use?',
        a: 'Screw pins are quick to connect/disconnect for temporary rigging. Nut-bolt pins are more secure for permanent installations. Safety bolts with cotter pins are best for overhead lifting.'
      }
    ],
    relatedProducts: ['wire-rope-slings', 'chain-slings', 'hooks']
  },

  'hooks': {
    name: 'Lifting Hooks',
    title: 'Lifting Hooks India | Eye Hooks, Clevis Hooks, Swivel Hooks | Industrial Grade',
    description: 'Industrial lifting hooks including eye hoist hooks, clevis hooks, swivel hooks, and foundry hooks. Forged alloy steel with safety latches. ASME B30.10 compliant. All India delivery.',
    longDescription: 'Lifting hooks are the critical connection point between slings and loads. We supply a comprehensive range of forged alloy steel hooks including eye type, clevis type, and swivel configurations. All hooks feature safety latches to prevent accidental disengagement and are individually marked with working load limits.',
    features: [
      'Forged alloy steel construction',
      'Eye, clevis, and swivel configurations',
      'Self-locking safety latches included',
      'Individually marked with WLL',
      'Heat treated for maximum strength',
      'Powder coated or galvanized finish',
      'Batch tested and certified',
      'ASME B30.10 and EN 1677-2 compliant'
    ],
    specifications: {
      'Types': 'Eye, Clevis, Swivel, Foundry',
      'Grade': 'G80, G100',
      'Capacity': '0.5T - 25T',
      'Material': 'Forged Alloy Steel',
      'Safety Feature': 'Spring-loaded safety latch',
      'Finish': 'Powder Coated / Galvanized',
      'Standard': 'ASME B30.10, EN 1677-2',
      'Temperature Rating': '-20°C to +200°C'
    },
    applications: [
      'Overhead crane lifting',
      'Chain sling assemblies',
      'Wire rope sling terminations',
      'Container lifting',
      'Foundry and casting operations',
      'Shipyard rigging',
      'Construction lifting',
      'Manufacturing material handling'
    ],
    image: '/images/hooks.jpeg',
    category: 'Rigging Hardware',
    faqs: [
      {
        q: 'Why is the safety latch important?',
        a: 'The safety latch prevents the sling or load from accidentally slipping out of the hook throat during lifting operations. It\'s a critical safety feature required by most safety regulations.'
      },
      {
        q: 'Can hooks be repaired if damaged?',
        a: 'No, damaged hooks should never be repaired. If a hook shows cracks, deformation, or wear exceeding 10% of original dimensions, it must be removed from service and destroyed.'
      }
    ],
    relatedProducts: ['shackles', 'wire-rope-slings', 'chain-slings']
  },

  'pulleys-blocks': {
    name: 'Pulleys & Blocks',
    title: 'Pulley Blocks & Sheaves | Wire Rope Pulleys | Marine & Industrial',
    description: 'Heavy-duty pulley blocks and sheaves for wire rope and manila rope. Single, double, and triple sheave configurations. Marine grade with bronze bushings. Pan India supply.',
    longDescription: 'Pulley blocks and sheaves are essential components in lifting and rigging systems, providing mechanical advantage and direction change for ropes and cables. Our range includes wire rope pulleys with hardened steel sheaves, bronze bushings, and grease fittings for smooth operation under heavy loads.',
    features: [
      'Hardened steel sheaves for wire rope',
      'Bronze bushings with grease fittings',
      'Single, double, and triple sheave options',
      'Marine-grade construction available',
      'Swivel eye or hook attachments',
      'Side plates open for easy reeving',
      'Load tested and certified',
      'Custom sizes available on request'
    ],
    specifications: {
      'Sheave Diameter': '100mm - 800mm',
      'Rope Capacity': '6mm - 32mm diameter',
      'Working Load': '0.5T - 30T',
      'Bushing Type': 'Bronze with grease fitting',
      'Side Plates': 'Steel, powder coated',
      'Attachment': 'Swivel eye or hook',
      'Standard': 'EN 13157, ASME B30.26'
    },
    applications: [
      'Crane rigging systems',
      'Marine trawling operations',
      'Construction lifting',
      'Mining hoisting',
      'Oil and gas platforms',
      'Theater/stage rigging',
      'Agriculture applications',
      'Forestry and logging'
    ],
    image: '/images/pulley.jpeg',
    category: 'Lifting Equipment',
    faqs: [
      {
        q: 'What is the mechanical advantage of a pulley block?',
        a: 'A single pulley provides direction change only. Double pulleys provide 2:1 mechanical advantage, triple pulleys 3:1, etc. This reduces the force needed to lift a load but increases the rope length required.'
      }
    ],
    relatedProducts: ['wire-rope-slings', 'wire-rope-accessories', 'hooks']
  },

  'wire-rope-accessories': {
    name: 'Wire Rope Accessories',
    title: 'Wire Rope Clips, Thimbles & Fittings | Galvanized | India Supplier',
    description: 'Complete range of wire rope accessories including clips, thimbles, sockets, and ferrules. Galvanized and stainless steel options. For 6mm to 32mm wire ropes. All India delivery.',
    longDescription: 'Wire rope accessories are essential for creating eyes, terminations, and connections in wire rope assemblies. We supply wire rope clips (bulldog grips), thimbles, wedge sockets, and ferrules in various sizes and materials. All accessories are manufactured to international standards for safety and reliability.',
    features: [
      'Drop-forged wire rope clips (bulldog grips)',
      'Heavy-duty thimbles in various sizes',
      'Wedge sockets for permanent terminations',
      'Ferrules for swage fittings',
      'Galvanized and SS 304 options',
      'Match wire rope construction types',
      ' individually marked with size',
      'Compliant with EN 13411-5'
    ],
    specifications: {
      'Wire Rope Size': '6mm - 32mm',
      'Clip Types': 'DIN 741, US Type, JIS Type',
      'Thimble Types': 'Standard, Heavy, G414',
      'Material': 'Malleable Iron, Carbon Steel, SS 304',
      'Finish': 'Galvanized, Self Color, SS',
      'Standard': 'EN 13411-5, ASME B30.26'
    },
    applications: [
      'Wire rope eye terminations',
      'Rope-to-rope connections',
      'Winch line installations',
      'Crane rope rigging',
      'Marine rigging systems',
      'Elevator installations',
      'Guy wire assemblies',
      'Structural cable systems'
    ],
    image: '/images/wire_rope_hardware.jpeg',
    category: 'Rigging Hardware',
    faqs: [
      {
        q: 'How many wire rope clips do I need?',
        a: 'General rule: 3 clips for ropes up to 16mm, 4 clips for 19-22mm, 5 clips for 25-32mm. Always follow manufacturer specifications for your specific application.'
      }
    ],
    relatedProducts: ['wire-rope-slings', 'shackles', 'hooks']
  }
};

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productDatabase[productId] : null;

  if (!product) {
    return (
      <>
        <Helmet>
          <title>Product Not Found | Marino Corporation</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="container-modern py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-slate-600 mb-6">The product you're looking for doesn't exist or has been moved.</p>
            <Link to="/products" className="text-emerald-600 hover:underline inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to All Products
            </Link>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const whatsappMessage = `Hello, I am interested in ${product.name}. Please provide pricing and availability details.`;

  return (
    <>
      <Helmet>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://marinoindia.co.in/product/${productId}`} />
        
        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": `https://marinoindia.co.in${product.image}`,
            "description": product.description,
            "brand": {
              "@type": "Brand",
              "name": "Marino Corporation"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://marinoindia.co.in/product/${productId}`,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Marino Corporation Of India",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "28, Orphangunj Road, Kidderpore",
                  "addressLocality": "Kolkata",
                  "addressRegion": "West Bengal",
                  "postalCode": "700023",
                  "addressCountry": "IN"
                }
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Marino Corporation Of India"
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": product.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>

        {/* Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://marinoindia.co.in" },
              { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://marinoindia.co.in/products" },
              { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://marinoindia.co.in/product/${productId}` }
            ]
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Marino Corporation Of India",
            "url": "https://marinoindia.co.in",
            "logo": "https://marinoindia.co.in/logo/logo_marino.jpeg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919831144669",
              "contactType": "sales",
              "areaServed": ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Kolkata"],
              "availableLanguage": ["English", "Hindi"]
            }
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://marinoindia.co.in/product/${productId}`} />
        <meta property="og:image" content={`https://marinoindia.co.in${product.image}`} />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Breadcrumb */}
          <div className="bg-slate-50 border-b border-slate-100">
            <div className="container-modern py-4">
              <nav className="flex items-center gap-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-emerald-600 transition-colors">Products</Link>
                <span>/</span>
                <span className="text-slate-900 font-medium">{product.name}</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-12 bg-white">
            <div className="container-modern">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Image */}
                <div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center border border-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-80 w-auto object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    {product.category}
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {product.longDescription}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.slice(0, 5).map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a
                      href={`https://wa.me/919831144669?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="btn-primary gap-2">
                        <Phone className="w-5 h-5" />
                        Get Quote on WhatsApp
                      </Button>
                    </a>
                    <Link to="/catalogue/Marino_Wire_Rope_Sling_Catalog.pdf" target="_blank">
                      <Button size="lg" variant="outline" className="btn-secondary gap-2">
                        <Download className="w-5 h-5" />
                        Download Catalogue
                      </Button>
                    </Link>
                  </div>

                  {/* Trust badges */}
                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      ISO Certified
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      All India Delivery
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      Test Certified
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-sm text-slate-500 mb-3">For bulk orders and custom requirements:</p>
                    <div className="space-y-2 text-sm">
                      <a href="tel:9831144669" className="flex items-center gap-2 text-slate-700 hover:text-emerald-600">
                        <Phone className="w-4 h-4" />
                        9831144669 (Binny)
                      </a>
                      <a href="mailto:marinocoindia@gmail.com" className="flex items-center gap-2 text-slate-700 hover:text-emerald-600">
                        <Mail className="w-4 h-4" />
                        marinocoindia@gmail.com
                      </a>
                      <div className="flex items-center gap-2 text-slate-700">
                        <MapPin className="w-4 h-4" />
                        Kolkata - Delivery across India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specifications */}
          <section className="py-16 bg-slate-50">
            <div className="container-modern">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Technical Specifications</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], i) => (
                        <tr key={key} className={i % 2 === 0 ? 'bg-slate-50/50' : ''}>
                          <td className="px-6 py-4 font-medium text-slate-700 w-1/3 border-b border-slate-100">{key}</td>
                          <td className="px-6 py-4 text-slate-600 border-b border-slate-100">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* IS 2266:2024 Loading Capacity Tables - Only for Wire Rope Slings */}
          {productId === 'wire-rope-slings' && (
            <section className="py-16 bg-white">
              <div className="container-modern">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    Wire Rope Loading Capacity Tables
                  </h2>
                  <p className="text-slate-600">
                    Minimum Breaking Force (MBF) and Working Load Limit (WLL) as per <strong>IS 2266:2024</strong> standard. 
                    WLL calculated with 5:1 safety factor. All values in kilonewtons (kN).
                  </p>
                </div>

                {/* 6×19 Construction Table */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                    6×19 Construction (6×19M 12/6-1)
                  </h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b">Diameter (mm)</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1570 Grade</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1770 Grade</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1960 Grade</th>
                          </tr>
                          <tr className="bg-slate-50">
                            <th className="px-4 py-2 text-left text-xs text-slate-500 border-b"></th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { d: 6, fc1570: 17.4, iwrc1570: 18.8, fc1770: 19.6, iwrc1770: 21, fc1960: 22, iwrc1960: 23 },
                            { d: 8, fc1570: 31, iwrc1570: 33, fc1770: 35, iwrc1770: 38, fc1960: 39, iwrc1960: 42 },
                            { d: 10, fc1570: 48, iwrc1570: 52, fc1770: 54, iwrc1770: 59, fc1960: 60, iwrc1960: 65 },
                            { d: 12, fc1570: 69, iwrc1570: 75, fc1770: 78, iwrc1770: 85, fc1960: 87, iwrc1960: 94 },
                            { d: 14, fc1570: 95, iwrc1570: 102, fc1770: 107, iwrc1770: 115, fc1960: 118, iwrc1960: 128 },
                            { d: 16, fc1570: 124, iwrc1570: 133, fc1770: 139, iwrc1770: 150, fc1960: 154, iwrc1960: 167 },
                            { d: 20, fc1570: 193, iwrc1570: 208, fc1770: 218, iwrc1770: 235, fc1960: 241, iwrc1960: 260 },
                            { d: 24, fc1570: 278, iwrc1570: 300, fc1770: 313, iwrc1770: 338, fc1960: 347, iwrc1960: 375 },
                            { d: 32, fc1570: 494, iwrc1570: 534, fc1770: 557, iwrc1770: 602, fc1960: 617, iwrc1960: 666 },
                          ].map((row, i) => (
                            <tr key={row.d} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              <td className="px-4 py-3 font-medium text-slate-900 border-b">{row.d} mm</td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1570} <span className="text-xs text-slate-400">({Math.round(row.fc1570/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1570} <span className="text-xs text-slate-400">({Math.round(row.iwrc1570/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1770} <span className="text-xs text-slate-400">({Math.round(row.fc1770/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1770} <span className="text-xs text-slate-400">({Math.round(row.iwrc1770/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1960} <span className="text-xs text-slate-400">({Math.round(row.fc1960/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1960} <span className="text-xs text-slate-400">({Math.round(row.iwrc1960/5)}T)</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="px-4 py-3 bg-slate-50 text-xs text-slate-500">
                      Values shown: Minimum Breaking Force (MBF) in kN. Values in brackets: Approximate Working Load Limit (WLL) in tonnes at 5:1 safety factor.
                    </div>
                  </div>
                </div>

                {/* 6×36 Construction Table */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    6×36 Construction (6×36SW 14-7+7-7-1)
                  </h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b">Diameter (mm)</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1570 Grade</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1770 Grade</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1960 Grade</th>
                          </tr>
                          <tr className="bg-slate-50">
                            <th className="px-4 py-2 text-left text-xs text-slate-500 border-b"></th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { d: 8, fc1570: 33, iwrc1570: 36, fc1770: 37, iwrc1770: 40, fc1960: 41, iwrc1960: 45 },
                            { d: 10, fc1570: 52, iwrc1570: 56, fc1770: 58, iwrc1770: 63, fc1960: 65, iwrc1960: 70 },
                            { d: 12, fc1570: 75, iwrc1570: 81, fc1770: 84, iwrc1770: 91, fc1960: 93, iwrc1960: 101 },
                            { d: 14, fc1570: 102, iwrc1570: 110, fc1770: 115, iwrc1770: 124, fc1960: 127, iwrc1960: 137 },
                            { d: 16, fc1570: 133, iwrc1570: 143, fc1770: 150, iwrc1770: 162, fc1960: 166, iwrc1960: 179 },
                            { d: 20, fc1570: 207, iwrc1570: 224, fc1770: 234, iwrc1770: 252, fc1960: 259, iwrc1960: 279 },
                            { d: 24, fc1570: 298, iwrc1570: 322, fc1770: 336, iwrc1770: 363, fc1960: 372, iwrc1960: 402 },
                            { d: 32, fc1570: 530, iwrc1570: 573, fc1770: 598, iwrc1770: 646, fc1960: 662, iwrc1960: 715 },
                            { d: 40, fc1570: 829, iwrc1570: 895, fc1770: 934, iwrc1770: 1009, fc1960: 1035, iwrc1960: 1117 },
                          ].map((row, i) => (
                            <tr key={row.d} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              <td className="px-4 py-3 font-medium text-slate-900 border-b">{row.d} mm</td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1570} <span className="text-xs text-slate-400">({Math.round(row.fc1570/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1570} <span className="text-xs text-slate-400">({Math.round(row.iwrc1570/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1770} <span className="text-xs text-slate-400">({Math.round(row.fc1770/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1770} <span className="text-xs text-slate-400">({Math.round(row.iwrc1770/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1960} <span className="text-xs text-slate-400">({Math.round(row.fc1960/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1960} <span className="text-xs text-slate-400">({Math.round(row.iwrc1960/5)}T)</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="px-4 py-3 bg-slate-50 text-xs text-slate-500">
                      6×36 construction offers better flexibility than 6×19 but with slightly less abrasion resistance.
                    </div>
                  </div>
                </div>

                {/* Quick Reference Card */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                    <h4 className="font-bold text-emerald-900 mb-3">Safety Factor</h4>
                    <p className="text-emerald-800 text-sm mb-2">
                      Standard safety factor for wire rope slings is <strong>5:1</strong>
                    </p>
                    <p className="text-emerald-700 text-xs">
                      WLL = Minimum Breaking Force ÷ 5
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-3">Grade Selection</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• <strong>1570 MPa</strong>: Standard duty</li>
                      <li>• <strong>1770 MPa</strong>: Most common (EIPS)</li>
                      <li>• <strong>1960 MPa</strong>: High strength</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                    <h4 className="font-bold text-amber-900 mb-3">Core Types</h4>
                    <ul className="text-amber-800 text-sm space-y-1">
                      <li>• <strong>FC</strong>: Fiber Core - More flexible</li>
                      <li>• <strong>IWRC</strong>: Steel Core - 7.5% stronger</li>
                    </ul>
                  </div>
                </div>

                {/* Sling Angle Warning */}
                <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-amber-900 mb-2">⚠️ Sling Angle Effect on Capacity</h4>
                  <p className="text-amber-800 text-sm">
                    The Working Load Limit decreases as the sling angle from horizontal decreases. 
                    At a 60° included angle between sling legs, the capacity is reduced by 50%. 
                    Never use horizontal angles less than 30°. Formula: Effective WLL = WLL × sin(θ÷2)
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Applications */}
          <section className="py-16 bg-white">
            <div className="container-modern">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Applications</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.applications.map((app, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 flex items-center gap-3 border border-slate-100">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16 bg-slate-50">
            <div className="container-modern">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 max-w-3xl">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="py-16 bg-white">
            <div className="container-modern">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Related Products</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.relatedProducts.map((relatedId) => {
                  const related = productDatabase[relatedId];
                  if (!related) return null;
                  return (
                    <Link 
                      key={relatedId}
                      to={`/product/${relatedId}`}
                      className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all group"
                    >
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                        loading="lazy"
                      />
                      <h3 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {related.name}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-emerald-600">
            <div className="container-modern text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Order {product.name}?
              </h2>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Get competitive pricing and fast delivery across India. Contact us now for a customized quote for your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/919831144669?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 gap-2">
                    <Phone className="w-5 h-5" />
                    Get Quote Now
                  </Button>
                </a>
                <a href="tel:9831144669">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700 gap-2">
                    <Phone className="w-5 h-5" />
                    Call Us
                  </Button>
                </a>
              </div>
              <p className="text-emerald-200 text-sm mt-6">
                Delivering to: Delhi • Mumbai • Bangalore • Chennai • Hyderabad • Pune • Ahmedabad • Kolkata
              </p>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ProductDetailPage;
