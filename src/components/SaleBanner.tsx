import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

const SaleBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 overflow-hidden">
      {/* Animated shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      
      {/* Sparkle effects */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden sm:block">
        <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
      </div>
      <div className="absolute right-20 top-1/2 -translate-y-1/2 hidden sm:block">
        <Sparkles className="w-3 h-3 text-yellow-200 animate-pulse delay-150" />
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10"
      >
        <X className="w-3 h-3 text-white" />
      </button>

      {/* Content */}
      <Link to="/premade-slings" className="block py-1.5 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {/* Shopping bag icon */}
          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
            <ShoppingBag className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          </div>
          
          {/* Text content */}
          <div className="flex items-center gap-1.5 sm:gap-3 text-white">
            <span className="text-[10px] sm:text-xs font-bold text-yellow-200 uppercase tracking-wide hidden xs:inline">
              🔥 New
            </span>
            <span className="text-xs sm:text-sm font-semibold">
              Premade Slings Available Now!
            </span>
            <span className="hidden sm:inline text-xs text-white/80">
              Ready stock with immediate delivery
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium text-white bg-white/20 px-2 py-0.5 rounded-full">
              Shop Now
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* Live indicator */}
          <div className="flex-shrink-0 flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-[10px] text-white/90 hidden md:inline">Live</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SaleBanner;
