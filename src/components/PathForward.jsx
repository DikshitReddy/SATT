import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PathForward = () => {
  const sectionRef = useRef(null);
  const progressRef = useRef(0);
  const lockedRef = useRef(false);

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

  const updateProgress = (nextValue) => {
    const clamped = Math.max(0, Math.min(nextValue, 1));
    progressRef.current = clamped;
    setProgress(clamped);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      const sectionVisible = rect.top < vh * 0.75 && rect.bottom > vh * 0.25;
      const sectionCentered = rect.top <= 2 && rect.bottom >= vh * 0.65;
      const approachingSection = scrollingDown && rect.top > 0 && rect.top < vh * 0.85;

      if (!sectionVisible && !lockedRef.current) return;

      if (approachingSection) {
        e.preventDefault();
        e.stopPropagation();

        lockedRef.current = true;

        window.scrollTo({
          top: window.scrollY + rect.top,
          behavior: "auto",
        });

        return;
      }

      if (!sectionCentered && !lockedRef.current) return;

      const currentProgress = progressRef.current;

      if (scrollingDown && currentProgress < 1) {
        e.preventDefault();
        e.stopPropagation();

        lockedRef.current = true;

        const step = Math.min(Math.abs(e.deltaY) / 2200, 0.09);
        updateProgress(currentProgress + step);

        return;
      }

      if (scrollingUp && currentProgress > 0) {
        e.preventDefault();
        e.stopPropagation();

        lockedRef.current = true;

        const step = Math.min(Math.abs(e.deltaY) / 2200, 0.09);
        updateProgress(currentProgress - step);

        return;
      }

      if (scrollingDown && currentProgress >= 1) {
        lockedRef.current = false;
        return;
      }

      if (scrollingUp && currentProgress <= 0) {
        lockedRef.current = false;
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
  }, []);

  const getCardAnimation = (index) => {
    const start = index * 0.22;
    const end = start + 0.18;

    const raw = (progress - start) / (end - start);
    const visible = Math.min(Math.max(raw, 0), 1);

    return {
      opacity: visible,
      y: 70 - visible * 70,
      scale: 0.96 + visible * 0.04,
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] bg-[#F6F5F4] overflow-hidden flex items-center py-10 sm:py-14 md:py-20"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
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
            className="mt-5 sm:mt-6"
            style={{
              color: "#0D0503",
              textAlign: "center",
              fontFamily: "Marcellus, serif",
              fontSize: "clamp(36px, 5vw, 52px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.2",
              letterSpacing: "-1.04px",
            }}
          >
            Your path forward
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-8 max-w-[1500px] mx-auto">
          {steps.map((step, index) => {
            const card = getCardAnimation(index);

            return (
              <motion.div
                key={step.num}
                className="bg-white hover:shadow-lg transition group"
                animate={{
                  opacity: card.opacity,
                  y: card.y,
                  scale: card.scale,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                style={{
                  borderRadius: "clamp(28px, 4vw, 48px)",
                  background: "#FFF",
                  minHeight: "clamp(190px, 25vw, 300px)",
                  padding: "clamp(18px, 3vw, 40px)",
                }}
              >
                <div className="text-[#FF6B00]/20 group-hover:text-[#FF6B00]/40 transition mb-5 sm:mb-7 md:mb-10">
                  <span
                    style={{
                      fontSize: "clamp(48px, 7vw, 72px)",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  className="mb-3 md:mb-4"
                  style={{
                    color: "#0D0503",
                    fontFamily: "Marcellus, serif",
                    fontSize: "clamp(22px, 2.2vw, 28px)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.35",
                    letterSpacing: "-0.56px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#66625E",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(13px, 1.4vw, 16px)",
                    fontWeight: 400,
                    lineHeight: "1.5",
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