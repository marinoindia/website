import { MapPin, Navigation } from 'lucide-react';

const MapSection = () => {
  const companyName = "Marino Corporation Of India";
  const officeAddress = "28, Orphangunj Road, Kidderpore, Kolkata - 700 023";
  const warehouseAddress = "30A, Orphangunge Road, Orpan Gang Market, Alipore, Kolkata - 700 023";
  const officeDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=28+Orphangunj+Road,+Kidderpore,+Kolkata+700023";
  const warehouseDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=30A+Orphangunge+Rd,+Orpan+Gang+Market,+Alipore,+Kolkata+700023";

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
            {/* Office Location */}
            <div className="flex items-start gap-2 mb-3">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1">Head Office</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {companyName}
                </p>
                <p className="text-muted-foreground/80 text-xs sm:text-sm mt-0.5">
                  {officeAddress}
                </p>
                <a
                  href={officeDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors mt-3 text-xs sm:text-sm"
                >
                  <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 my-3"></div>

            {/* Warehouse Location */}
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1">Warehouse / Godown</h3>
                <p className="text-muted-foreground/80 text-xs sm:text-sm mt-0.5">
                  {warehouseAddress}
                </p>
                <a
                  href={warehouseDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors mt-3 text-xs sm:text-sm"
                >
                  <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
                  Get Directions to Warehouse
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="card-industrial overflow-hidden p-0 relative">
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(companyName)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Marino Corporation Of India Location"
              />
              <div className="absolute inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
