import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Image - Static */}
      <div className="relative w-full overflow-hidden">
        <img
          src="/media/Gemini_Generated_Image_x7tnu4x7tnu4x7tn.png"
          alt="India best wire rope, sling and chain supplier in Kolkata/Calcutta - Industrial chains and marine hardware"
          className="w-full h-auto object-contain opacity-85"
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/25 pointer-events-none" />
        {/* Catalogue CTA */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto flex flex-wrap gap-3">
          <a
            href="/catalogue/Marino_Wire_Rope_Sling_Catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold text-sm sm:text-base px-4 py-2.5 rounded-md shadow-lg hover:opacity-90 transition-opacity border border-accent-foreground/20"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            Download Wire Rope & Sling Catalogue
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
