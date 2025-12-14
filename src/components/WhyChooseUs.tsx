import { Shield, Truck, Clock, ThumbsUp, Wrench, HeartHandshake } from 'lucide-react';

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

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 bg-steel-gradient text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="section-title text-primary-foreground mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Your Trusted
            <span className="text-accent"> Industrial Partner</span>
          </h2>
          <p className="text-primary-foreground/70 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 px-2">
            We are committed to delivering excellence in every product and service we provide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 md:p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-primary-foreground mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/70 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
