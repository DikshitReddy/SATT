const JourneyBegins = () => {
  return (
    <section id="journey" className="py-20 bg-[#F6F5F4] overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            style={{
              display: "inline-flex",
              padding: "10px 20px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              background: "rgba(230, 57, 31, 0.05)",
            }}
          >
            <div
              className="text-sm tracking-widest"
              style={{
                color: "#E6391F",
                textAlign: "center",
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.84px",
                textTransform: "uppercase",
              }}
            >
              THE BEGINNING
            </div>
          </div>

          <h2
            className="text-4xl py-5 font-semibold"
            style={{
              color: "#0D0503",
              textAlign: "center",
              fontFamily: "Marcellus, serif",
              fontSize: "52px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "62.4px",
              letterSpacing: "-1.04px",
            }}
          >
            How Your Journey Begins
          </h2>

          <p
            className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto"
            style={{
              color: "#595857",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "27px",
            }}
          >
            You don’t need to prepare anything. Just show up as you are.
          </p>

          <p
            className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto"
            style={{
              color: "#595857",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "27px",
            }}
          >
            In your first circle, you won’t be asked to perform, impress, or explain.
          </p>

          <p
            className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto"
            style={{
              color: "#595857",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "27px",
            }}
          >
            You’ll simply listen, speak if you wish, and begin to see yourself more clearly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-10 hover:shadow-xl transition">
            <div className="mb-6">
              <img
                src="/Leaf_Icon_2.svg"
                alt="Leaf icon"
                className="h-[49px] w-[49px]"
              />
            </div>
            <h3
              className="font-semibold text-2xl mb-4"
              style={{
                color: "#0D0503",
                fontFamily: "Marcellus, serif",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "39.2px",
                letterSpacing: "-0.56px",
              }}
            >
              Growth Circles
            </h3>
            <p
              className="text-gray-600"
              style={{
                color: "#66625E",
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "21px",
              }}
            >
              Structured peer interactions that help you reflect, share, and grow through meaningful conversations.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 hover:shadow-xl transition">
            <div className="mb-6">
              <img
                src="/Begin_2.svg"
                alt="Begin icon"
                className="h-[49px] w-[49px]"
              />
            </div>
            <h3
              className="font-semibold text-2xl mb-4"
              style={{
                color: "#0D0503",
                fontFamily: "Marcellus, serif",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "39.2px",
                letterSpacing: "-0.56px",
              }}
            >
              Tiny Tables
            </h3>
            <p
              className="text-gray-600"
              style={{
                color: "#66625E",
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "21px",
              }}
            >
              Small group conversations designed for openness, comfort, and honest human connection.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 hover:shadow-xl transition">
            <div className="mb-6">
              <img
                src="/Begin_3.svg"
                alt="Begin icon"
                className="h-[49px] w-[49px]"
              />
            </div>
            <h3
              className="font-semibold text-2xl mb-4"
              style={{
                color: "#0D0503",
                fontFamily: "Marcellus, serif",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "39.2px",
                letterSpacing: "-0.56px",
              }}
            >
              Life Map
            </h3>
            <p
              className="text-gray-600"
              style={{
                color: "#66625E",
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "21px",
              }}
            >
              A private reflection tool to help you understand where you are and what truly matters.
            </p>
          </div>
        </div>
      </div>

      <div className="my-17 py-20 flex justify-center">
        <img
          src="/Frame.svg"
          alt="Frame icon"
          className="h-[11.422px] w-[80px]"
        />
      </div>

      <h2
        className="text-4xl font-semibold px-4"
        style={{
          color: "#0D0503",
          textAlign: "center",
          fontFamily: "Marcellus, serif",
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "43.2px",
          letterSpacing: "-0.1px",
        }}
      >
        You May Be Here If
      </h2>

      <div className="mt-10 flex flex-col items-center gap-4 px-4">
        {/* Desktop exact layout */}
        <div className="hidden md:flex gap-4 justify-center">
          {[
            "You are single and tired of being questioned.",
            "You are separated and rebuilding your identity.",
            "You are married but feel emotionally alone.",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-full border border-[#E6E6E6] text-[#E94D27] text-sm text-center bg-white"
              style={{ padding: "16px 24px" }}
            >
              {text}
            </div>
          ))}
        </div>

        <div className="hidden md:flex gap-4 justify-center">
          {[
            "You feel pressured to decide faster than you feel ready.",
            "You want clarity before commitment.",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-full border border-[#E6E6E6] text-[#E94D27] text-sm text-center bg-white"
              style={{ padding: "16px 24px" }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Mobile only adaptive layout */}
        <div className="flex md:hidden flex-wrap justify-center gap-4 max-w-full">
          {[
            "You are single and tired of being questioned.",
            "You are separated and rebuilding your identity.",
            "You are married but feel emotionally alone.",
            "You feel pressured to decide faster than you feel ready.",
            "You want clarity before commitment.",
          ].map((text, i) => (
            <div
              key={i}
              className="rounded-full border border-[#E6E6E6] text-[#E94D27] text-sm text-center bg-white w-full max-w-[320px]"
              style={{ padding: "16px 24px" }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyBegins;