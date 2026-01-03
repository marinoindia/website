import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="section-title text-[#0d3d26] mt-2">
            Let's Start a
            <span className="text-[#0d3d26]"> Conversation</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Get in touch with us for inquiries, quotes, or any assistance you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="card-industrial p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  {item.details.map((detail, i) => {
                    if (typeof detail === 'string') {
                      return <p key={i} className="text-muted-foreground text-sm">{detail}</p>;
                    }
                    return (
                      <a
                        key={i}
                        href={`mailto:${detail.email}`}
                        className="text-muted-foreground text-sm hover:text-accent hover:underline block"
                      >
                        {detail.text}
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="card-industrial p-8 bg-success/5 border-success/20">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Chat with us on WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Get instant responses and quick quotes for your requirements.</p>
                  <a
                    href="https://wa.me/919831144669?text=Hello%2C%20I%20am%20interested%20in%20your%20industrial%20products.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-success hover:bg-success/90 text-primary-foreground gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Start WhatsApp Chat
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map / Business Card */}
          <div className="card-industrial overflow-hidden">
            <div className="bg-primary p-8 text-primary-foreground">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary-foreground rounded-xl flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-primary">M</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">MARINO</h3>
                  <p className="text-primary-foreground/80">Corporation of India</p>
                </div>
              </div>
              <div className="space-y-2 text-primary-foreground/80">
                <p><strong>GST:</strong> 19ADMPR1740H1ZA</p>
                <p><strong>Registered:</strong> 22-08-2017</p>
                <p><strong>Type:</strong> Proprietorship</p>
              </div>
            </div>
            <div className="p-8">
              <h4 className="font-display text-lg font-bold text-foreground mb-4">Our Specializations</h4>
              <p className="text-muted-foreground text-sm mb-4">
                <strong>Manufacturers & Dealers in:</strong> Steel Wire Rope, Rope Slings, Chain & Chain Slings, Shackles Hooks, Turn Buckles & All Kinds of Safety and Lifting Tackles etc.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Steel Wire Rope', 'Rope Slings', 'Chain & Chain Slings', 'Shackles Hooks', 'Turn Buckles', 'Safety Tackles', 'Lifting Tackles'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  Looking for bulk orders or custom requirements? We offer competitive pricing and reliable delivery across India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Find Us Section */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Location</span>
            <h2 className="section-title text-[#0d3d26] mt-2">
              Find <span className="text-[#0d3d26]">Us</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Visit us at our location in Kolkata, West Bengal
            </p>
          </div>
          
          <div className="card-industrial overflow-hidden">
            <div className="w-full h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=22.5401909,88.3319733&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
                title="Marino Corporation Of India Location"
              />
            </div>
            <div className="p-6 bg-muted/30">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">28, Orphangunj Road, Kidderpore</p>
                  <p className="text-muted-foreground text-sm">Kolkata - 700 023, West Bengal, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
