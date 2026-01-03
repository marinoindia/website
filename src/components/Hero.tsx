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
      </div>
    </section>
  );
};

export default Hero;
