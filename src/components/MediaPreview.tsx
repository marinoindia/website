import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MediaPreview = () => {
  // Select a diverse sample of images from different categories
  const previewImages = [
    { path: 'media/slings/PHOTO-2025-12-12-23-01-16.jpg', name: 'Slings' },
    { path: 'media/shackle/PHOTO-2025-12-12-22-51-24.jpg', name: 'Shackles' },
    { path: 'media/lashing-equipment/PHOTO-2025-12-03-22-46-57.jpg', name: 'Lashing Equipment' },
    { path: 'media/timber/PHOTO-2025-12-12-23-03-15.jpg', name: 'Timber Equipment' },
    { path: 'media/safety-ppe/85109356-4F73-4539-889B-6762D7A0E40D_1_105_c.jpeg', name: 'Safety & PPE' },
    { path: 'media/096A487E-B56A-464A-9123-391D252DA309_1_105_c.jpeg', name: 'Product Image' },
  ];

  return (
    <section id="media-preview" className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="section-title text-foreground mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Product Gallery</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-3 sm:mt-4">
            Explore our comprehensive collection of industrial chains, marine equipment, and lifting hardware.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="card-industrial overflow-hidden group relative aspect-square"
            >
              <div className="relative w-full h-full overflow-hidden bg-muted">
                <img
                  src={`${import.meta.env.BASE_URL}${image.path}`}
                  alt={image.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/media">
            <Button size="lg" className="btn-accent gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              View Full Gallery
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaPreview;



