import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MediaPreview = () => {
  // Select a diverse sample of images from different categories
  const previewImages = [
    { path: 'media/35DE2B33-D361-4E17-84FE-D9AFC906F9F5.jpeg', name: 'Wire rope and chain products from India best supplier in Kolkata/Calcutta' },
    { path: 'media/EA08206C-6AC5-4E7D-9942-8142568CEA32_1_105_c.jpeg', name: 'Industrial slings and wire rope from best supplier in India' },
    { path: 'media/139EBBA2-1D8A-4F3B-A22A-5F37EDFF16D1_1_105_c.jpeg', name: 'Chain slings and lifting equipment from Kolkata supplier' },
    { path: 'media/0FF0242F-70EB-48ED-BF18-39FE4D23ACFC_1_105_c.jpeg', name: 'Marine equipment and wire rope from best supplier in Calcutta' },
    { path: 'media/32EBB05F-02BB-4BA8-85EC-3E6520E81860_1_105_c.jpeg', name: 'Industrial chains and wire rope slings from India supplier' },
    { path: 'media/C466C83C-1155-497D-AE94-D994CF7F6428_1_105_c.jpeg', name: 'Best wire rope, sling and chain products from Kolkata supplier' },
  ];

  return (
    <section id="media-preview" className="py-2 sm:py-3 md:py-4 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-2 sm:mb-3">
          <h2 className="section-title text-[#0d3d26] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Our <span className="text-[#0d3d26]">Product Gallery</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-1 sm:mt-1.5">
            Explore our comprehensive collection of industrial chains, marine equipment, and lifting hardware.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-1.5 mb-2 sm:mb-3">
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




