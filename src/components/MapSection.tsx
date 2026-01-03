import { MapPin } from 'lucide-react';

const MapSection = () => {
  const companyName = "Marino Corporation Of India";
  const fullAddress = "28, Orphangunj Road, Kidderpore, Kolkata - 700 023";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyName)}`;

  return (
    <section id="location" className="py-2 sm:py-3 md:py-4 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-1.5 sm:mb-2">
          <span className="text-accent font-semibold text-xs uppercase tracking-wider">Location</span>
          <h2 className="section-title text-[#0d3d26] mt-1 text-lg sm:text-xl md:text-2xl">
            Find <span className="text-[#0d3d26]">Us</span>
          </h2>
        </div>

        {/* Map and Address */}
        <div className="grid lg:grid-cols-2 gap-1.5 sm:gap-2 items-start max-w-5xl mx-auto">
          {/* Address Card */}
          <div className="card-industrial p-1.5 sm:p-2">
            <div className="flex items-start gap-2 mb-1.5">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1">Our Location</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {companyName}
                </p>
                <p className="text-muted-foreground/80 text-xs sm:text-sm mt-0.5">
                  {fullAddress}
                </p>
              </div>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-semibold text-xs sm:text-sm hover:gap-3 transition-all"
            >
              Open in Google Maps
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Map Embed */}
          <div className="card-industrial overflow-hidden p-0 relative group">
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(companyName)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300"
                aria-label="Open location in Google Maps"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/95 backdrop-blur-sm px-3 py-2 rounded-lg border-2 border-accent/50 shadow-xl">
                  <span className="text-accent font-semibold text-xs sm:text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Click to open in Google Maps
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;




