const WhereAwareness = () => {
  const tags = [
    "Open Sharing",
    "Deep Presence",
    "No pressure",
    "Honest Conversations",
  ];

  return (
    <section
      className="py-20 pb-32 text-white"
      style={{
        backgroundImage: "url('/About.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full px-5 md:px-8 xl:px-10">
        <div className="text-center mb-12 md:mb-16">
          <div
            className="inline-flex items-center justify-center px-5 py-2 rounded-[12px] bg-[#E94D27] text-white text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            THE SPACE
          </div>

          <h2
            className="mt-2"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Marcellus, serif",
              fontSize: "52px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "62.4px",
              letterSpacing: "-1.04px",
            }}
          >
            Where Awareness Finds Its Circle
          </h2>
        </div>

        <div className="space-y-4 md:space-y-5">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-[0.95fr_1.25fr] gap-4 md:gap-5">
            {/* Text card */}
            <div className="rounded-[32px] overflow-hidden bg-[#361F1F] flex flex-col">
              <div className="px-8 md:px-10 pt-10 md:pt-12 pb-8">
                <h3
                  className="mb-7"
                  style={{
                    fontFamily: "Marcellus, serif",
                    fontSize: "34px",
                    lineHeight: "44px",
                    fontWeight: 400,
                    color: "#F8F3EE",
                  }}
                >
                  In Quiet, Honest Spaces
                </h3>

                <p
                  style={{
                    color: "#EDE8E1",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px", /* 150% */
                  }}
                >
                  In quiet spaces, both online and in person, SATT creates an
                  environment for genuine conversations. There is no spotlight
                  here, no judgment - only grounded presence and shared honesty.
                  Whether it is a small circle, a tranquil evening, or a virtual
                  reflection room, every gathering is rooted in safety, respect,
                  and emotional awareness. Every voice matters. Every story is
                  welcomed, creating a tapestry of connection that enriches all.
                </p>
              </div>

              <div className="px-4 md:px-5 pb-5">
                <div className="flex flex-wrap gap-3 overflow-hidden">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full px-5 py-3 mb-0 bg-[#190F0F] text-[15px] text-white/85 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Top right image */}
            <div className="rounded-[32px] overflow-hidden h-full">
            <img
                src="/Aware_1.png"
                alt="People in conversation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4 md:gap-5 items-stretch">
            {/* Bottom left image */}
            <div className="rounded-[32px] overflow-hidden h-full">
              <img
                src="/Aware_2.png"
                alt="Group listening outdoors"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="rounded-[32px] overflow-hidden h-full">
              <img
                src="/Aware_3.png"
                alt="Group planting together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereAwareness;