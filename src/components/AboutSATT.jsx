const AboutSATT = () => {
  return (
    <section id="about" className="bg-[#F6F5F4] px-4 md:px-8 lg:px-12 py-20 overflow-x-hidden">
      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto
          py-14
          rounded-[40px]
          flex flex-col lg:flex-row items-center justify-between gap-10
          px-6 sm:px-8 md:px-10 lg:px-0
        "
        style={{
          backgroundImage: "url('/About.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="ml-0 lg:ml-20 max-w-xl text-white w-full">
          {/* Tag */}
          <div
            className="inline-flex px-4 py-2 rounded-[12px] bg-[#E94D27] text-white text-xs tracking-widest mb-6"
            style={{
              fontFamily: "Poppins, sans-serif",
            }}
          >
            ABOUT SATT
          </div>

          {/* Heading */}
          <h2
            className="mb-6 text-[42px] sm:text-[52px]"
            style={{
              fontFamily: "Marcellus, serif",
              lineHeight: "1.1",
            }}
          >
            About SATT
          </h2>

          {/* Paragraphs */}
          <div
            className="space-y-6 sm:space-y-7 text-white/80 text-base sm:text-lg leading-relaxed max-w-full"
            style={{
              lineHeight: "27px",
            }}
          >
            <p>SATT is a private community for adults navigating life after thirty.</p>
            <p>SATT stands for Singles After Thirty Tribe.</p>
            <p>
              It is not built for a status. <br />
              It is built for reflection, clarity, and emotional dignity.
            </p>
            <p>You do not need to justify your timeline here.</p>
          </div>

          {/* Divider curve */}
          <div className="my-12 sm:my-17 py-10 sm:py-20">
            <img
              src="/Frame.svg"
              alt="Frame icon"
              className="h-[11.422px] w-[80px]"
            />
          </div>

          {/* Quote */}
          <p
            className="italic text-white/90"
            style={{
              color: "#EDE8E1",
              fontFamily: "Dancing Script",
              fontSize: "29px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "34.8px",
              letterSpacing: "-0.58px",
              marginTop: "-20px",
            }}
          >
            “We are not behind. <br />
            We are becoming.”
          </p>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="flex-shrink-0 translate-x-0 lg:-translate-x-20 xl:-translate-x-24 rotate-[2deg] w-full lg:w-auto flex justify-center">
          <div className="rounded-[28px] overflow-hidden w-full max-w-[360px] h-[380px] sm:h-[460px]">
            <img
              src="/AboutInner.png"
              alt="SATT"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSATT;