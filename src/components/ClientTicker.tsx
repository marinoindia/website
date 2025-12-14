import clientsImage from '@/assets/logo/Logo_clients.png';

const ClientTicker = () => {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white py-4 overflow-hidden relative shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Label */}
          <div className="flex-shrink-0 px-4 md:px-5 bg-gradient-to-r from-pink-500 to-rose-500 py-2 shadow-md rounded-lg">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              Our Clients Include:
            </span>
          </div>
          
          {/* Static Client Image */}
          <div className="flex-1 flex items-center justify-center min-h-[60px] md:min-h-[80px]">
            <img 
              src={clientsImage} 
              alt="Our Clients: SAIL, ISRO, DRDO, Indian Ordnance, TATA, Kolkata Port Trust"
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-full object-contain opacity-95"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTicker;
