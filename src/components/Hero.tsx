import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import heroImage from '@/assets/Gemini_Generated_Image_wjl2i7wjl2i7wjl2.png';

const Hero = () => {
  const products = [
    'Chains',
    'Slings and wire rope',
    'Shackles',
  ];

  const images = [
    heroImage,
    '/media/Gemini_Generated_Image_x7tnu4x7tnu4x7tn.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="h-full flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={image}
                alt={`Industrial chains and marine hardware ${index + 1}`}
                className="w-full h-full object-cover opacity-85"
              />
            </div>
          ))}
        </div>
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-black/15 to-black/30" />
      </div>

      {/* Products List Superimposed on Image */}
      <div className="relative z-10 h-full flex items-end justify-end p-6 sm:p-8 md:p-12">
        <div className="space-y-3">
          {products.map((product, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#FFEB3B] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-black" />
              </div>
              <span className="font-semibold text-white text-base sm:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{product}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
