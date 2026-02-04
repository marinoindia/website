import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['28, Orphangunj Road, Kidderpore', 'Kolkata - 700 023', 'West Bengal, India'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['P. K. Rout (Binny): 9831144669, 8100052948', 'V. K. Rout (Bikku): 9831327279, 8240686828'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        { text: 'marinocoindia@gmail.com', email: 'marinocoindia@gmail.com' },
        { text: 'marinocorporationofindia@gmail.com', email: 'marinocorporationofindia@gmail.com' }
      ],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: 9:00 AM - 5:00 PM'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-modern">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">
            Let's Start a{' '}
            <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Get in touch with us for inquiries, quotes, or any assistance you need.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  {item.details.map((detail, i) => {
                    if (typeof detail === 'string') {
                      return <p key={i} className="text-slate-600 text-sm">{detail}</p>;
                    }
                    return (
                      <a
                        key={i}
                        href={`mailto:${detail.email}`}
                        className="text-slate-600 text-sm hover:text-emerald-600 hover:underline block"
                      >
                        {detail.text}
                      </a>
                    );
                  })}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Chat with us on WhatsApp</h3>
                  <p className="text-slate-600 mb-4">Get instant responses and quick quotes for your requirements.</p>
                  <a
                    href="https://wa.me/919831144669?text=Hello%2C%20I%20am%20interested%20in%20your%20industrial%20products.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Start WhatsApp Chat
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map / Business Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
          >
            <div className="bg-slate-900 p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-slate-900">M</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">MARINO</h3>
                  <p className="text-slate-300">Corporation of India</p>
                </div>
              </div>
              <div className="space-y-2 text-slate-300">
                <p><strong className="text-white">GST:</strong> 19ADMPR1740H1ZA</p>
                <p><strong className="text-white">Registered:</strong> 22-08-2017</p>
                <p><strong className="text-white">Type:</strong> Proprietorship</p>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">We Specialize In</h4>
              <ul className="space-y-2 text-slate-600 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Wire Rope Slings & Chain Slings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Industrial Chains & Shackles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Marine Equipment & Anchors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Lifting Hardware & Pulleys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Safety Equipment & PPE</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Steel Wire Rope', 'Rope Slings', 'Chain & Chain Slings', 'Shackles Hooks', 'Turn Buckles', 'Safety Tackles', 'Lifting Tackles'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-slate-600 text-sm">
                  Looking for bulk orders or custom requirements? We offer competitive pricing and reliable delivery across India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Find Us Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Location</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">
              Find <span className="text-gradient">Us</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Visit us at our location in Kolkata, West Bengal
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
          >
            <div className="w-full h-[400px] sm:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=22.5401909,88.3319733&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Marino Corporation Of India Location"
              />
            </div>
            <div className="p-6 bg-slate-50">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">28, Orphangunj Road, Kidderpore</p>
                  <p className="text-slate-500 text-sm">Kolkata - 700 023, West Bengal, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
