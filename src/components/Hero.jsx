const Hero = () => {
  return (
    <section className="bg-[#F6F5F4] min-h-[85vh] flex items-center justify-center pt-10 pb-20">
      <div className="w-full max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Main SATT Logo Text */}
        <div className="mb-6">
          <h1 
            className="text-[80px] md:text-[80px] font-bold leading-none tracking-[0.22em] text-[#E6391F]"
            style={{
              color: "#E94D27",
              textAlign: "center",
              fontFamily: "Marcellus",
              fontSize: "80px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "6px",
            }}
          >
            SATT
          </h1>
        </div>

        {/* Subtitle */}
        <p 
          className="text-2xl md:text-3xl font-medium text-[#E6391F] tracking-wide"
          style={{ fontFamily: "'Marcellus', serif" }}
        >
          (Singles After Thirty Tribe)
        </p>

        {/* Big Headline */}
        <h2 className="mt-16 mx-auto w-full max-w-[1040px] text-center text-[52px] leading-[1.05] text-[#1C160F] md:text-[90px] md:leading-[90px]"
            style={{ fontFamily: "'Marcellus', serif", fontWeight: '400', letterSpacing: '-3.6px' }}
        >
          <span className="block md:whitespace-nowrap">If you are tired of explaining</span>
          <span className="block md:whitespace-nowrap">your life, this is your place.</span>
        </h2>

        {/* Subtext */}
        <p className="mt-10 max-w-[760px] mx-auto text-lg text-gray-600 leading-relaxed text-center">
          A private community for adults navigating life after thirty-marriage pressure, separation, emotional isolation, or self-discovery beyond timelines.
        </p>

        {/* Enter the Circle Button */}
        <button 
          onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-12 bg-[#E6391F] hover:bg-[#d12f1a] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-3 mx-auto">
          Enter the Circle
        </button>

      </div>
    </section>
  );
};

export default Hero;