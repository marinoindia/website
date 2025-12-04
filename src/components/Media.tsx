import { useState, useMemo } from 'react';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

type MediaItem = {
  path: string;
  name: string;
};

// List of all media items (images only)
const allMedia: MediaItem[] = [
  { path: 'media/image_007.jpg', name: 'Product Image 7' },
  { path: 'media/image_008.jpg', name: 'Product Image 8' },
  { path: 'media/image_009.jpg', name: 'Product Image 9' },
  { path: 'media/image_010.jpg', name: 'Product Image 10' },
  { path: 'media/image_011.jpg', name: 'Product Image 11' },
  { path: 'media/image_012.jpg', name: 'Product Image 12' },
  { path: 'media/image_013.jpg', name: 'Product Image 13' },
  { path: 'media/image_014.jpg', name: 'Product Image 14' },
  { path: 'media/image_015.jpg', name: 'Product Image 15' },
  { path: 'media/image_016.jpg', name: 'Product Image 16' },
  { path: 'media/image_017.jpg', name: 'Product Image 17' },
  { path: 'media/image_018.jpg', name: 'Product Image 18' },
  { path: 'media/image_019.jpg', name: 'Product Image 19' },
  { path: 'media/image_020.jpg', name: 'Product Image 20' },
  { path: 'media/image_021.jpg', name: 'Product Image 21' },
  { path: 'media/image_022.jpg', name: 'Product Image 22' },
  { path: 'media/image_024.jpg', name: 'Product Image 24' },
  { path: 'media/image_025.jpg', name: 'Product Image 25' },
  { path: 'media/pulley.jpg', name: 'Pulley' },
  { path: 'media/wire_rope.jpg', name: 'Wire Rope' },
  { path: 'media/Dshackle.jpg', name: 'D Shackle' },
  { path: 'media/D shackles.jpg', name: 'D Shackles' },
  { path: 'media/hooks.jpg', name: 'Hooks' },
  { path: 'media/slings.jpg', name: 'Slings' },
];

const Media = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredMedia = useMemo(() => allMedia, []);

  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="media" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="section-title text-foreground mt-2">
            Our <span className="text-gradient">Media</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Explore our products, facilities, and operations through our photo gallery.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <div className="px-6 py-2 rounded-full font-medium bg-accent text-accent-foreground flex items-center gap-2 shadow-lg">
            <ImageIcon className="w-4 h-4" />
            Photos
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredMedia.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMedia.map((media, index) => (
              <div
                key={`${media.path}-${index}`}
                className="card-industrial overflow-hidden group cursor-pointer relative aspect-square"
                onClick={() => openModal(media)}
              >
                <div className="relative w-full h-full overflow-hidden bg-muted">
                  <img
                    src={`${import.meta.env.BASE_URL}${media.path}`}
                    alt={media.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No media found for the selected filter.</p>
          </div>
        )}
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors z-10 shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-accent-foreground" />
          </button>
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}${selectedMedia.path}`}
                alt={selectedMedia.name}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Media;

