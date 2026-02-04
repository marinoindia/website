import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User, Tag, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Choose the Right Wire Rope Sling: Complete Load Capacity Guide',
    excerpt: 'Master wire rope sling selection with WLL calculations (Breaking Strength ÷ 5), construction types (6×19 vs 6×36), grades (1770 vs 1960 MPa), and the critical D/d ratio rule. Eye diameter should be at least 25× rope diameter to prevent 30% capacity loss.',
    image: '/images/slings.jpeg',
    date: 'January 15, 2026',
    readTime: '10 min read',
    author: 'Marino Technical Team',
    category: 'Selection Guide',
    slug: 'choose-right-wire-rope-sling'
  },
  {
    id: 2,
    title: 'Wire Rope Sling Inspection: OSHA & ASME B30.9 Compliance Checklist',
    excerpt: 'Complete inspection guide per OSHA 1910.184 and ASME B30.9. Daily visual checks by operators, yearly qualified inspections. Remove immediately if: 10+ broken wires in one lay, 1/3 diameter wear, kinking, crushing, heat damage, or missing capacity tags.',
    image: '/images/wire_rope.jpg',
    date: 'January 10, 2026',
    readTime: '8 min read',
    author: 'Safety Inspector',
    category: 'Inspection',
    slug: 'wire-rope-sling-inspection-guide'
  },
  {
    id: 3,
    title: '6×19 vs 6×36 vs 6×37 Wire Rope: Construction Comparison',
    excerpt: '6×19: More abrasion resistant, less flexible—best for heavy rigid loads. 6×36/6×37: More flexible, less abrasion resistant—ideal for applications requiring bending around sheaves. Learn which construction suits your lifting application.',
    image: '/images/slings.jpeg',
    date: 'January 5, 2026',
    readTime: '6 min read',
    author: 'Rigging Engineer',
    category: 'Technical',
    slug: 'wire-rope-construction-comparison'
  },
  {
    id: 4,
    title: 'Wire Rope Grades Explained: 1770 MPa vs 1960 MPa vs EIPS',
    excerpt: '1770 MPa is standard strength for general lifting. 1960 MPa offers higher capacity at same diameter. EIPS (Extra Improved Plow Steel) at ~1860 MPa is the most common industrial grade. EEIPS provides maximum strength for heavy-duty applications.',
    image: '/images/wire_rope.jpg',
    date: 'December 28, 2025',
    readTime: '7 min read',
    author: 'Materials Expert',
    category: 'Technical',
    slug: 'wire-rope-grades-explained'
  },
  {
    id: 5,
    title: 'FC vs IWRC: Fiber Core vs Independent Wire Rope Core',
    excerpt: 'Fiber Core (FC) offers more flexibility and easier handling but less heat resistance. IWRC provides 7.5% greater strength, better heat resistance up to 400°F, and more durability—ideal for heavy-duty industrial applications.',
    image: '/images/slings.jpeg',
    date: 'December 20, 2025',
    readTime: '5 min read',
    author: 'Technical Team',
    category: 'Technical',
    slug: 'fiber-core-vs-iwrc'
  },
  {
    id: 6,
    title: 'Sling Angle Effect on Capacity: Critical Calculations',
    excerpt: 'Sling angle dramatically reduces effective capacity. At 60° included angle, capacity drops by 50%. Formula: SWL = (Breaking Strength ÷ 5) × sin(θ ÷ 2). Never use horizontal angles less than 30°. Learn proper rigging calculations for safe lifts.',
    image: '/images/slings.jpeg',
    date: 'December 15, 2025',
    readTime: '8 min read',
    author: 'Rigging Specialist',
    category: 'Calculations',
    slug: 'sling-angle-capacity-calculations'
  },
  {
    id: 7,
    title: 'Wire Rope Clips, Thimbles & Sockets: Installation Guide',
    excerpt: 'Wire rope clips: minimum 3 for ½" rope, spaced 6× rope diameter apart, torque to manufacturer specs. Always use thimbles in eye terminations to prevent crushing. Spelter sockets provide 100% rope strength for permanent installations.',
    image: '/images/wire_rope.jpg',
    date: 'December 10, 2025',
    readTime: '9 min read',
    author: 'Installation Expert',
    category: 'Accessories',
    slug: 'wire-rope-clips-thimbles-sockets'
  },
  {
    id: 8,
    title: 'Single Leg vs Multi-Leg Wire Rope Slings: Selection Guide',
    excerpt: 'Single leg for straight vertical lifts. 2-leg slings for balanced loads up to 60° angle. 3-leg and 4-leg slings for heavy, unstable loads. Understand how leg angles affect total capacity and why unequal leg lengths require careful calculation.',
    image: '/images/slings.jpeg',
    date: 'December 5, 2025',
    readTime: '7 min read',
    author: 'Lifting Engineer',
    category: 'Selection Guide',
    slug: 'single-vs-multi-leg-slings'
  },
  {
    id: 9,
    title: 'Wire Rope Sling Storage & Maintenance Best Practices',
    excerpt: 'Store wire rope slings in dry, clean areas away from mechanical damage and corrosive substances. Maximum 180°F for fiber core slings. Clean regularly, lubricate as needed. Never use degreasing solvents on fiber cores. Proper storage extends service life.',
    image: '/images/wire_rope.jpg',
    date: 'November 28, 2025',
    readTime: '6 min read',
    author: 'Maintenance Team',
    category: 'Maintenance',
    slug: 'wire-rope-sling-storage-maintenance'
  }
];

const categories = [
  'All',
  'Selection Guide',
  'Inspection',
  'Technical',
  'Calculations',
  'Accessories',
  'Maintenance'
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Wire Rope Blog - Sling Guides & Technical Resources | Marino India</title>
        <meta
          name="description"
          content="Complete wire rope resource: sling selection, OSHA inspection standards, 6×19 vs 6×36 construction, 1770 vs 1960 MPa grades, capacity calculations, and maintenance guides from India's leading wire rope supplier."
        />
        <meta name="keywords" content="wire rope sling guide, wire rope inspection OSHA, 6x19 vs 6x36 wire rope, 1770 vs 1960 MPa, wire rope capacity calculation, FC vs IWRC core, wire rope clips installation, sling angle formula, wire rope maintenance, Usha Martin wire rope" />
        <link rel="canonical" href="https://marinoindia.co.in/blog" />
        <meta property="og:title" content="Wire Rope Blog - Technical Guides & Resources | Marino" />
        <meta property="og:description" content="Expert wire rope guides: sling selection, OSHA inspection, construction types, grades, and capacity calculations from India's trusted supplier." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marinoindia.co.in/blog" />
        <meta property="og:image" content="https://marinoindia.co.in/images/slings.jpeg" />
        <meta property="og:site_name" content="Marino Corporation Of India" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wire Rope Blog - Technical Guides | Marino India" />
        <meta name="twitter:description" content="Expert wire rope guides: sling selection, inspection, construction types, and capacity calculations." />
        <meta name="twitter:image" content="https://marinoindia.co.in/images/slings.jpeg" />
        
        {/* Structured Data for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Marino Wire Rope Blog",
            "description": "Technical guides and resources for wire rope slings and lifting equipment",
            "url": "https://marinoindia.co.in/blog",
            "about": {
              "@type": "Thing",
              "name": "Wire Rope Slings"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Marino Corporation Of India",
              "logo": {
                "@type": "ImageObject",
                "url": "https://marinoindia.co.in/logo/logo_marino.jpeg"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                  <BookOpen className="h-4 w-4" />
                  Wire Rope Technical Resources
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Wire Rope <span className="text-emerald-400">Knowledge Hub</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                  Expert guides on wire rope slings: selection, inspection, construction types, 
                  grades, capacity calculations, and maintenance from India's leading wire rope supplier.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-6 border-b border-border bg-background/50 sticky top-0 z-30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                <Tag className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                        : 'bg-muted hover:bg-muted/80 text-foreground hover:text-emerald-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post - First Article */}
          {selectedCategory === 'All' && (
            <section className="py-12 lg:py-16 border-b border-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative bg-card rounded-3xl overflow-hidden border border-border hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:bg-gradient-to-l" />
                      <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-emerald-600 text-white rounded-full">
                        {blogPosts[0].category}
                      </span>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {blogPosts[0].date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {blogPosts[0].readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4 leading-tight">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-3.5 w-3.5" />
                          {blogPosts[0].author}
                        </span>
                        <Link
                          to={`/blog/${blogPosts[0].slug}`}
                          className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
                        >
                          Read Guide
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section className="py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {(selectedCategory === 'All' ? blogPosts.slice(1) : filteredPosts).map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-semibold bg-emerald-600 text-white rounded-full shadow-lg">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>

                        <h2 className="text-lg font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors leading-tight">
                          {post.title}
                        </h2>

                        <p className="text-muted-foreground text-sm line-clamp-3 mb-5 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-3.5 w-3.5" />
                            {post.author}
                          </span>
                          <Link
                            to={`/blog/${post.slug}`}
                            className="flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group/link"
                          >
                            Read
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* No results message */}
              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <p className="text-muted-foreground text-lg">
                    No articles found in this category. Check back soon!
                  </p>
                </motion.div>
              )}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Get Wire Rope Expertise in Your Inbox
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Subscribe for technical guides on wire rope selection, inspection checklists, 
                  capacity calculations, and maintenance best practices.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                  <button 
                    type="submit"
                    className="px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-muted-foreground mt-4">
                  Join 2,000+ rigging professionals. Unsubscribe anytime.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPage;
