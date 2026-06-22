import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PathForward = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      num: "1",
      title: "Pause",
      desc: "Step back from pressure, comparison, and outside expectations. Create space to hear your own truth clearly.",
    },
    {
      num: "2",
      title: "Reflect",
      desc: "Notice your patterns, your fears, and your desires without judgment. Let reflection become self-understanding.",
    },
    {
      num: "3",
      title: "Connect",
      desc: "Enter honest conversations with others who understand the weight of timelines, pressure, and becoming.",
    },
    {
      num: "4",
      title: "Align",
      desc: "Move forward with greater clarity, inner peace, and emotional steadiness. Choose what feels true, not what feels forced.",
    },
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const sectionInFocus =
        rect.top <= vh * 0.12 && rect.bottom >= vh * 0.7;

      if (!sectionInFocus) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (scrollingDown && progress < 1) {
        e.preventDefault();
        e.stopPropagation();

        setProgress((prev) => {
          const next = Math.min(prev + Math.abs(e.deltaY) / 1800, 1);
          return next;
        });

        return;
      }

      if (scrollingUp && progress > 0) {
        e.preventDefault();
        e.stopPropagation();

        setProgress((prev) => {
          const next = Math.max(prev - Math.abs(e.deltaY) / 1800, 0);
          return next;
        });

        return;
      }

      if (scrollingDown && progress >= 1) {
        return;
      }

      if (scrollingUp && progress <= 0) {
        return;
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel, {
        capture: true,
      });
    };
  }, [progress]);

  const getCardAnimation = (index) => {
    const start = index * 0.22;
    const end = start + 0.18;

    const raw = (progress - start) / (end - start);
    const visible = Math.min(Math.max(raw, 0), 1);

    return {
      opacity: visible,
      y: 80 - visible * 80,
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#F6F5F4] overflow-hidden flex items-center"
    >
      <div className="w-full px-6">
        <div className="text-center mb-14">
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

          <h2
            className="text-4xl font-semibold text-[#1C160F] mt-6"
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
            Your path forward
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-[1500px] mx-auto">
          {steps.map((step, index) => {
            const card = getCardAnimation(index);

            return (
              <motion.div
                key={step.num}
                className="bg-white p-8 md:p-10 hover:shadow-lg transition group"
                animate={{
                  opacity: card.opacity,
                  y: card.y,
                }}
                transition={{
                  duration: 0.28,
                  ease: "easeOut",
                }}
                style={{
                  borderRadius: "48px",
                  background: "#FFF",
                  minHeight: "300px",
                }}
              >
                <div className="text-7xl font-bold text-[#FF6B00]/20 group-hover:text-[#FF6B00]/40 transition mb-10">
                  {step.num}
                </div>

                <h3
                  className="font-semibold text-2xl mb-4 text-[#1C160F]"
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
                  {step.title}
                </h3>

                <p
                  className="text-gray-600 leading-relaxed"
                  style={{
                    color: "#66625E",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PathForward;