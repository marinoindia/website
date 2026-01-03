import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductsCarousel from '@/components/ProductsCarousel';

const About = () => {

  return (
    <>
      <section id="about" className="pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 md:pb-10 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div className="text-center">
              <h2 className="section-title text-[#0d3d26] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Marino Corporation
                <span className="text-[#0d3d26]"> Of India</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-1 sm:mb-2">
                India's best wire rope, sling and chain supplier. Leading manufacturer and supplier of industrial chains, marine equipment, pulley blocks, and lifting hardware in Kolkata/Calcutta, West Bengal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Carousel Section */}
      <ProductsCarousel />

      {/* Clients Section */}
      <section className="py-2 sm:py-3 md:py-4 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-2 sm:mb-3">
            <h2 className="section-title text-[#0d3d26] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Trusted by
              <span className="text-[#0d3d26]"> Leading Organizations</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-1">
              We are proud to serve some of India's most prestigious organizations across various sectors including defense, space research, steel, and port operations.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="card-industrial p-2 sm:p-3 md:p-3 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-pink-950/20">
              <div className="flex items-center justify-center py-0 sm:py-0.5">
                <img 
                  src="/clients.png" 
                  alt="Our Valued Clients"
                  className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
