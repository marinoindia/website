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
    <section id="why-us" className="py-2 sm:py-3 md:py-4 bg-steel-gradient text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-2 sm:mb-3 md:mb-4">
          <span className="text-accent font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Why Choose Us</span>
          <p className="text-primary-foreground/70 text-xs sm:text-sm mt-2 sm:mt-3 px-2">
            We are committed to delivering excellence in every product and service we provide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-1 sm:p-1.5 md:p-2 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-0.5 sm:mb-1 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-primary-foreground mb-0.5">{feature.title}</h3>
              <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
