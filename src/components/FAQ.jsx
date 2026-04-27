import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is SATT?",
      answer:
        "SATT is a conscious space for adults navigating life after thirty. It blends reflection, honest dialogue, and emotional clarity within a calm, supportive community.",
    },
    {
      question: "Is this a dating platform?",
      answer:
        "No. SATT is not a dating platform. It is a reflective community space centered on clarity, connection, and meaningful conversation.",
    },
    {
      question: "Do I need to be single?",
      answer:
        "No. You do not need to be single. SATT welcomes people in different life stages who are looking for grounded reflection and honest dialogue.",
    },
    {
      question: "Is there an age requirement?",
      answer:
        "SATT is designed primarily for adults navigating life after thirty, but the exact circle may vary depending on the experience being offered.",
    },
    {
      question: "How do I join?",
      answer:
        "You can join by choosing a circle that feels right for you or by booking a short call so we can guide you through the available options.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#F6F5F4] overflow-x-hidden"
      style={{
        backgroundImage: "url('/About.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
        <div
          className="flex w-fit mx-auto items-center justify-center px-5 py-2 rounded-[12px] bg-[#E6391F] text-white text-xs tracking-widest uppercase mb-10"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          FAQ
        </div>

        <h2
          className="text-center mb-16"
          style={{
            color: "#FFF",
            fontFamily: "Marcellus, serif",
            fontSize: "52px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "62.4px",
            letterSpacing: "-1.04px",
          }}
        >
          Questions You Might Have
        </h2>

        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleToggle(index)}
                className="w-full rounded-[40px] border cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  minHeight: isOpen ? "182px" : "84px",
                  background: "#F8F7F5",
                  borderColor: "#E7DED6",
                  boxShadow: "0 0 0 1px rgba(231, 222, 214, 0.35) inset",
                }}
              >
                <div className="px-6 sm:px-10 md:px-14 py-6 sm:py-8 h-full flex flex-col justify-start">
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                    <img
                      src={isOpen ? "/Leaf_Down.svg" : "/Leaf_Up.svg"}
                      alt=""
                      className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0"
                    />

                    <p
                      style={{
                        color: "#1A1412",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                      }}
                    >
                      {item.question}
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[220px] opacity-100 mt-6 sm:mt-8" : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p
                      className="pl-0 sm:pl-[60px] pr-0 sm:pr-8"
                      style={{
                        color: "#595857",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "34px",
                        marginLeft: window.innerWidth >= 640 ? "-50px" : "0px",
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;