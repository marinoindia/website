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

    </>
  );
};

export default About;
