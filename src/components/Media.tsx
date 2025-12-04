import { useState, useMemo } from 'react';
import { X, ZoomIn, Play, Image as ImageIcon } from 'lucide-react';

type MediaItem = {
  path: string;
  type: 'image' | 'gif';
  name: string;
};

// List of all media items (images and GIFs)
const allMedia: MediaItem[] = [
  // Images
  { path: 'media/image_003.jpg', type: 'image', name: 'Product Image 3' },
  { path: 'media/image_004.jpg', type: 'image', name: 'Product Image 4' },
  { path: 'media/image_005.jpg', type: 'image', name: 'Product Image 5' },
  { path: 'media/image_006.jpg', type: 'image', name: 'Product Image 6' },
  { path: 'media/image_007.jpg', type: 'image', name: 'Product Image 7' },
  { path: 'media/image_008.jpg', type: 'image', name: 'Product Image 8' },
  { path: 'media/image_009.jpg', type: 'image', name: 'Product Image 9' },
  { path: 'media/image_010.jpg', type: 'image', name: 'Product Image 10' },
  { path: 'media/image_011.jpg', type: 'image', name: 'Product Image 11' },
  { path: 'media/image_012.jpg', type: 'image', name: 'Product Image 12' },
  { path: 'media/image_013.jpg', type: 'image', name: 'Product Image 13' },
  { path: 'media/image_014.jpg', type: 'image', name: 'Product Image 14' },
  { path: 'media/image_015.jpg', type: 'image', name: 'Product Image 15' },
  { path: 'media/image_016.jpg', type: 'image', name: 'Product Image 16' },
  { path: 'media/image_017.jpg', type: 'image', name: 'Product Image 17' },
  { path: 'media/image_018.jpg', type: 'image', name: 'Product Image 18' },
  { path: 'media/image_019.jpg', type: 'image', name: 'Product Image 19' },
  { path: 'media/image_020.jpg', type: 'image', name: 'Product Image 20' },
  { path: 'media/image_021.jpg', type: 'image', name: 'Product Image 21' },
  { path: 'media/image_022.jpg', type: 'image', name: 'Product Image 22' },
  { path: 'media/image_024.jpg', type: 'image', name: 'Product Image 24' },
  { path: 'media/image_025.jpg', type: 'image', name: 'Product Image 25' },
  { path: 'media/pulley.jpg', type: 'image', name: 'Pulley' },
  { path: 'media/wire_rope.jpg', type: 'image', name: 'Wire Rope' },
  { path: 'media/Dshackle.jpg', type: 'image', name: 'D Shackle' },
  { path: 'media/D shackles.jpg', type: 'image', name: 'D Shackles' },
  { path: 'media/hooks.jpg', type: 'image', name: 'Hooks' },
  { path: 'media/slings.jpg', type: 'image', name: 'Slings' },
  // GIFs
  { path: 'media/WhatsApp Video 2025-12-03 at 22.53.34.gif', type: 'gif', name: 'Product Demo 1' },
  { path: 'media/WhatsApp Video 2025-12-03 at 22.53.38.gif', type: 'gif', name: 'Product Demo 2' },
  { path: 'media/WhatsApp Video 2025-12-03 at 23.04.53.gif', type: 'gif', name: 'Product Demo 3' },
  { path: 'media/WhatsApp Video 2025-12-03 at 23.04.55.gif', type: 'gif', name: 'Product Demo 4' },
  { path: 'media/WhatsApp Video 2025-12-03 at 23.04.57.gif', type: 'gif', name: 'Product Demo 5' },
  { path: 'media/WhatsApp Video 2025-12-03 at 23.06.22.gif', type: 'gif', name: 'Product Demo 6' },
  { path: 'media/WhatsApp Video 2025-12-03 at 23.06.51.gif', type: 'gif', name: 'Product Demo 7' },
  { path: 'media/WhatsApp Video 2025-12-03 at 23.39.14.gif', type: 'gif', name: 'Product Demo 8' },
];

const Media = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'image' | 'gif'>('all');

  const filteredMedia = useMemo(() => {
    // Filter out GIFs since they're not uploaded (too large for GitHub)
    const availableMedia = allMedia.filter(item => item.type === 'image');
    
    if (filter === 'all') return availableMedia;
    if (filter === 'image') return availableMedia;
    // If filter is 'gif', return empty array since GIFs aren't available
    return [];
  }, [filter]);

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
            Explore our products, facilities, and operations through our photo and video gallery.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-accent text-accent-foreground shadow-lg scale-105'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            All Media
          </button>
          <button
            onClick={() => setFilter('image')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              filter === 'image'
                ? 'bg-accent text-accent-foreground shadow-lg scale-105'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Photos
          </button>
          <button
            onClick={() => setFilter('gif')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              filter === 'gif'
                ? 'bg-accent text-accent-foreground shadow-lg scale-105'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <Play className="w-4 h-4" />
            Videos
          </button>
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
                  
                  {/* Media Type Badge */}
                  {media.type === 'gif' && (
                    <div className="absolute top-2 right-2 bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      GIF
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      {media.type === 'gif' ? (
                        <Play className="w-6 h-6 text-accent-foreground ml-1" />
                      ) : (
                        <ZoomIn className="w-6 h-6 text-accent-foreground" />
                      )}
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
              {selectedMedia.type === 'gif' && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-accent/90 backdrop-blur-sm text-accent-foreground text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Animated GIF
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Media;

