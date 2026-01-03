import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductsCarousel = () => {
  const products = [
    {
      name: 'Brand Stock',
      image: '/images/Brand_stock.png',
    },
    {
      name: 'Chain Link',
      image: '/images/Chain_link.png',
    },
    {
      name: 'Chain Sling',
      image: '/images/Chain_sling.png',
    },
    {
      name: 'Hooks',
      image: '/images/Hookes.png',
    },
    {
      name: 'Safety and PPE',
      image: '/images/Safety and PPE.png',
    },
    {
      name: 'Shackles',
      image: '/images/Shackles.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="products-preview" className="py-2 sm:py-3 md:py-4 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-2 sm:mb-3">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="section-title text-[#0d3d26] mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Our <span className="text-[#0d3d26]">Product Range</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-1 sm:mt-1.5">
            Explore our comprehensive range of industrial chains, marine equipment, and lifting hardware.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                  style={{ width: '100%' }}
                >
                  <div className="card-industrial overflow-hidden group relative w-full">
                    <div className="relative w-full overflow-hidden bg-muted flex items-center justify-center py-4 sm:py-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-[85%] sm:w-[75%] md:w-[65%] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center p-4 sm:p-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={goToPrevious}
            aria-label="Previous product"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={goToNext}
            aria-label="Next product"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-1.5 sm:mt-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 sm:w-10 bg-accent'
                    : 'w-2 sm:w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
