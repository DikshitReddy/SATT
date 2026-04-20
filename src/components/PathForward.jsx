const PathForward = () => {
  const steps = [
    { num: "1", title: "Pause", desc: "Step back from pressure, comparison, and outside expectations. Create space to hear your own truth clearly." },
    { num: "2", title: "Reflect", desc: "Notice your patterns, your fears, and your desires without judgment. Let reflection become self-understanding." },
    { num: "3", title: "Connect", desc: "Enter honest conversations with others who understand the weight of timelines, pressure, and becoming." },
    { num: "4", title: "Align", desc: "Move forward with greater clarity, inner peace, and emotional steadiness. Choose what feels true, not what feels forced." }
  ];

  return (
    <section className="py-24 bg-[#F6F5F4]" style={{marginTop: '-50px'}}>
      <div className="w-full px-6">
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
              How we'll work together
            </div>
          </div>
          <h2 className="text-4xl mt-8font-semibold text-[#1C160F] mt-3"
          style={{
            color: "#0D0503",
            textAlign: "center",
            fontFamily: "Marcellus, serif",
            fontSize: "52px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "62.4px",
            letterSpacing: "-1.04px"
          }}>Your path forward</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl min-h-[30px] hover:shadow-lg transition group"
              style={{
                borderRadius: "48px",
                background: "#FFF"
              }}
            >
              <div className="text-7xl font-bold text-[#FF6B00]/20 group-hover:text-[#FF6B00]/40 transition mb-10">
                {step.num}
              </div>
              <h3 className="font-semibold text-2xl mb-4 text-[#1C160F]"
              style={{
                color: "#0D0503",
                fontFamily: "Marcellus, serif",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "39.2px", /* 140% */
                letterSpacing: "-0.56px"
              }}>{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathForward;