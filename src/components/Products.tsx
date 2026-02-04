import { ArrowRight, Download, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const products = [
    {
      title: 'Chains',
      slug: 'industrial-chains',
      description: 'High-strength alloy steel chains for heavy lifting, anchoring, and load securing. Available in various grades including G80 and G100 for industrial and marine applications. Hot-dip galvanized for corrosion resistance.',
      items: ['Anchor Chain', 'Quad Master Link with Flats', 'Chain Sling Rigging', 'Lashing Chain', 'Long Link Chain', 'Stud Link Chain'],
      image: '/images/chains.jpeg',
      category: 'essential',
      specs: ['10mm - 50mm diameter', '0.5T - 50T Working Load'],
    },
    {
      title: 'Slings',
      slug: 'wire-rope-slings',
      description: 'Premium wire rope and chain slings manufactured using Usha Martin specialized wire rope with mechanical hand-made splicing. Superior strength, flexibility, and durability for critical lifting operations. Test certified.',
      items: ['Wire Rope Slings with Thimble', 'Wire Rope Slings with Eye Hooks', 'Chain Slings', 'Quad Master Link Chain Slings'],
      image: '/images/premade_slings_hero.png',
      category: 'essential',
      cataloguePdf: '/catalogue/Marino_Wire_Rope_Sling_Catalog.pdf',
      specs: ['6mm - 32mm diameter', '0.5T - 30T Working Load'],
    },
    {
      title: 'Hooks',
      description: 'Forged alloy steel hooks for lifting and material handling. Features include safety latches, swivel mechanisms, and various eye configurations. Heat-treated for maximum strength. Compliant with ASME B30.10 standards.',
      items: ['Grab Hooks', 'Heavy Duty D Hooks', 'Eye Hoist Hooks', 'Container Hooks', 'C-Hooks'],
      image: '/images/hooks.jpeg',
      specs: ['10mm - 80mm opening', '0.5T - 20T Working Load'],
    },
    {
      title: 'Shackles',
      description: 'High-tensile steel shackles for connecting lifting equipment, chains, and ropes. Available in screw pin and bolt type configurations. Load rated and batch tested. Suitable for overhead lifting and marine applications.',
      items: ['D Shackles', 'Anchor Shackles', 'Kenter Shackles (G3 K3)', '90mm G3 K3 Kenter Shackle'],
      image: '/images/shackles.jpeg',
      specs: ['6mm - 90mm Pin', '0.5T - 25T Working Load'],
    },
    {
      title: 'Lifting Lugs & Pins',
      description: 'Precision-engineered lifting points including weld-on lugs, swivel hoist rings, and towing eyes. Designed for permanent and temporary attachment to structures and equipment. Proof tested and certified.',
      items: ['Lifting Pins', 'Lifting Lugs', 'Eye and Eye Lifting Swivels', 'Lifting Swivels'],
      image: '/images/lifting_pins.jpeg',
      specs: ['10mm - 50mm diameter', '0.5T - 15T Working Load'],
    },
    {
      title: 'Pulleys & Blocks',
      description: 'Heavy-duty snatch blocks and wire rope pulleys for crane operations, marine trawling, and industrial rigging. Features hardened steel sheaves, bronze bushings, and grease fittings for smooth operation under load.',
      items: ['Manila Rope Pulleys', 'Crosby Wire Rope Pulley Bearings', 'Marine Trawl Blocks', 'Industrial Pulley Blocks', 'Crane Pulley Chains'],
      image: '/images/pulley.jpeg',
      specs: ['100mm - 800mm Sheave', '0.5T - 30T Working Load'],
    },
    {
      title: 'Ropes & Mooring',
      description: 'High-performance synthetic ropes including polypropylene, polyester, and nylon varieties. UV stabilized, abrasion resistant, and available in 3-strand, 8-strand, and 12-strand configurations for marine and industrial use.',
      items: ['Mooring Ropes', 'PP P8 Strand Mooring Ropes', 'Yellow Polypropylene Rope', 'Seafoam Lobster Rope Mats', 'Rope Ladders'],
      image: '/images/ropes.jpeg',
      specs: ['6mm - 80mm diameter', '0.5T - 150T Breaking Load'],
    },
    {
      title: 'Anchors & Marine',
      description: 'Complete range of stockless anchors, anchor bolts, and marine fender systems. Includes stockless Hall anchors, delta flipper anchors, and custom anchor chains. Certified for commercial shipping and offshore platforms.',
      items: ['Ship Anchors', 'D-Shaped Steel Anchors', 'Anchor Bolts', 'Fender Tyre Nets', 'Anti-Collision Marine Rubber Nets'],
      image: '/images/anchors.jpeg',
      specs: ['5kg - 5000kg Weight', 'M12 - M64 Anchor Bolts'],
    },
    {
      title: 'Lashing Equipment',
      description: 'Container securing and cargo lashing systems including ratchet tensioners, twist locks, and bridge fittings. Conforms to ISO and CSC standards for safe container transportation by road, rail, and sea.',
      items: ['Turnbuckles', 'Forged One-Way Lashing Buckles', 'Orange Polyester Ratchet Lashing Belts', 'Lashing Buckles'],
      image: '/images/lashing.jpeg',
      specs: ['M8 - M30 thread', '0.5T - 10T Working Load'],
    },
    {
      title: 'Container Hardware',
      description: 'Specialized fittings for shipping containers including bridge clamps, stacking cones, and door gear. Manufactured from high-strength steel with corrosion-resistant coatings for extended service life in marine environments.',
      items: ['Shipping Container Bridge Fitting Clamps', 'Bridge Fitting Clamps', 'Container Fittings'],
      image: '/images/container_hardware.jpeg',
      specs: ['40mm - 150mm width', 'Galvanized steel'],
    },
    {
      title: 'Jacks & Lifting',
      description: 'Mechanical screw jacks and hydraulic lifting equipment for machinery maintenance, construction, and heavy equipment positioning. Available in single and multi-screw configurations with synchronized lifting capability.',
      items: ['Steel Screw Jacks', 'Mild Steel Jack Screws', 'Wooden Timber Jacks', 'Mini Lifting Beams', 'Lifting Beams'],
      image: '/images/jacks_lifting.jpeg',
      specs: ['0.5T - 50T Capacity', '100mm - 1500mm Height'],
    },
    {
      title: 'Wire Rope Hardware',
      description: 'Complete range of wire rope fittings including wire rope clips, thimbles, sockets, and ferrules. Compatible with 6x19, 6x36, and 8x19 construction wire ropes. Galvanized finish for outdoor applications.',
      items: ['Galvanized Steel Wire Rope Clips', 'Wire Rope Clips', 'Crosby Wire Rope Pulley Bearings'],
      image: '/images/wire_rope_hardware.jpeg',
      cataloguePdf: '/catalogue/Marino_Wire_Rope_Sling_Catalog.pdf',
      specs: ['6mm - 32mm diameter', '1T - 20T Working Load'],
    },
    {
      title: 'Safety Equipment',
      description: 'Industrial safety gear including fall protection nets, life jackets, and personal protective equipment. Safety nets manufactured to EN 1263 standards. Life jackets with 150N and 275N buoyancy ratings available.',
      items: ['Polyester Machine-Made Safety Nets', 'Life Jackets', 'Safety Shoes', 'Rope Ladders', 'Safety Nets'],
      image: '/images/safety_equipment_ppe.jpeg',
      specs: ['2m x 2m - 10m x 10m Nets', 'XS - XXL Life Jackets'],
    },
    {
      title: 'Timber Equipment',
      description: 'Traditional wooden timber jacks and cribbing blocks for construction, mining, and heavy equipment support. Hardwood construction with steel reinforced bases. Environmentally friendly alternative for temporary support.',
      items: ['Wooden Timber Jacks', 'Timber Handling Equipment'],
      image: '/images/timber.jpeg',
      specs: ['0.5T - 10T Capacity', '100mm - 1000mm Height'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="products" className="section-padding bg-slate-50/50">
      <div className="container-modern">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-emerald-200 text-emerald-700 bg-emerald-50/50">
            Our Products
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Industrial Solutions{' '}
            <span className="text-gradient">You Can Trust</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Comprehensive range of industrial chains, slings, marine equipment, and lifting hardware to meet your business needs.
          </p>
        </motion.div>

        {/* Quality highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Premium Quality & Manufacturing Excellence</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All wire rope products manufactured using <span className="font-medium text-slate-900">Usha Martin specialized wire rope</span> with 
                  <span className="font-medium text-slate-900"> mechanical hand-made construction</span> (not pressed) for superior strength and durability.
                  Rigorous quality testing meets international safety standards.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card-modern h-full flex flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  {product.category === 'essential' && (
                    <Badge className="absolute top-3 left-3 bg-emerald-500 text-white border-0 shadow-lg text-xs">
                      Essential
                    </Badge>
                  )}
                  
                  {/* Quick specs overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex flex-wrap gap-1.5">
                      {product.specs?.map((spec, i) => (
                        <span key={i} className="text-[10px] text-white bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3 flex-grow line-clamp-3">
                    {product.description}
                  </p>

                  {/* Items list */}
                  <ul className="space-y-1 mb-3">
                    {product.items.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <ChevronRight className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                    {product.items.length > 2 && (
                      <li className="text-[10px] text-slate-400 pl-4">
                        +{product.items.length - 2} more items
                      </li>
                    )}
                  </ul>

                  {/* Actions */}
                  <div className="flex flex-col gap-1.5 pt-3 border-t border-slate-100">
                    {product.slug && (
                      <Link
                        to={`/product/${product.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
                      >
                        View Details
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    <a
                      href={`https://wa.me/919831144669?text=Hello%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(product.title)}%20products`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      Get Quote
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                    {product.cataloguePdf && (
                      <a
                        href={product.cataloguePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-[10px] text-slate-500 hover:text-slate-700 transition-colors border border-slate-200 rounded-lg py-1.5 hover:bg-slate-50"
                      >
                        <Download className="w-3 h-3" />
                        Download Catalogue
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/919831144669?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="btn-primary">
              Request Full Product Catalog
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
