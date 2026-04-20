const Reflections = () => {
  const testimonials = [
    { name: "Sushma", text: "I thought something was wrong with me. SATT helped me see I was simply going through a different timeline." },
    { name: "Digvijay", text: "Everyone around me was settling down. This space reminded me that alignment matters more than timing." },
    { name: "Olivia", text: "I felt uncertain about my direction. I left feeling safe and clear about who I am." },
    { name: "David R.", text: "I came feeling alone. I left knowing I’m not the only one walking this path." }
  ];

  return (
    <section id="reflections" className="bg-[#F6F5F4] pb-40">
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
              Testimonials
            </div>
          </div>
          <h2 style={{
            color: "#0D0503",
            textAlign: "center",
            fontFamily: "Marcellus, serif",
            fontSize: "52px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "62.4px", /* 120% */
            letterSpacing: "-1.04px",
            marginTop: "20px"
          }}>Reflections From The Circle</h2>
          <p style={{
          color: "#66625E",
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "27px", /* 150% */
           marginTop: "20px"
        }}> Real experiences from individuals who chose  </p>
        <p style={{
          color: "#66625E",
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "27px",
        }}> clarity over urgency. </p>
        </div>

        

        
      </div>
      <div className="mt-16 overflow-hidden w-full">
  <div className="flex w-max gap-8 animate-testimonial-marquee">
    {[...testimonials, ...testimonials].map((t, i) => (
      <div
        key={i}
        className=" rounded-[32px] border border-[#E7E0DA] bg-white px-10 py-9 flex flex-col"
        style={{
          width: "440px",
          height: "200px",
          borderRadius: "32px",
          border: "1px solid #EDE8E1",
        }}
      >
        <p
          style={{
            color: "#6B6763",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "34px",
          }}
        >
          “{t.text}”
        </p>

        <p
          className="mt-auto text-[#1C160F] text-[18px] font-medium pt-6"
          style={{
            color: "#1C160F",
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "28px",
          }}
        >
          {t.name}
        </p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default Reflections;