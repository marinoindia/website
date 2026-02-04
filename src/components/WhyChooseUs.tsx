import { Shield, Truck, Clock, ThumbsUp, Wrench, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All products undergo strict quality checks to ensure durability and performance.',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      description: 'We deliver across India with reliable logistics and timely dispatch.',
    },
    {
      icon: Clock,
      title: '40 Years Experience',
      description: 'Trusted by businesses for over four decades with proven track record.',
    },
    {
      icon: ThumbsUp,
      title: 'Competitive Pricing',
      description: 'Best market prices without compromising on quality standards.',
    },
    {
      icon: Wrench,
      title: 'Custom Solutions',
      description: 'Tailored industrial solutions to meet your specific requirements.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Support',
      description: 'Expert guidance and after-sales support for all your queries.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-24 bg-slate-900 text-white">
      <div className="container-modern">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Excellence in Every Product
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            We are committed to delivering excellence in every product and service we provide.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-emerald-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
