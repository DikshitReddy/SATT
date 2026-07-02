import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WhatIsSATT = () => {
  const sectionRef = useRef(null);

  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1440,
    height: typeof window !== "undefined" ? window.innerHeight : 900,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = size.width < 768;

  const initialCardWidth = isMobile
    ? size.width * 0.94
    : Math.min(size.width * 0.72, 1180);

  const initialCardHeight = isMobile
    ? Math.min(size.height * 0.72, 620)
    : 430;

  const initialRadius = isMobile ? 70 : 170;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "start 5%"],
  });

  const cardWidth = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [initialCardWidth, initialCardWidth, size.width]
  );

  const cardHeight = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [initialCardHeight, initialCardHeight, size.height]
  );

  const cardRadius = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [initialRadius, initialRadius, 0]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [1.08, 1.08, 1]
  );

  const contentOpacity = useTransform(scrollYProgress, [0.86, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F6F5F4] min-h-[100svh] pt-[44px] md:pt-[72px] pb-16 md:pb-24 overflow-hidden"
    >
      <div className="min-h-[100svh] flex items-start justify-center overflow-hidden">
        <motion.div
          className="relative overflow-hidden"
          style={{
            width: cardWidth,
            height: cardHeight,
            borderRadius: cardRadius,
          }}
        >
          <motion.img
            src="/Small.png"
            alt="SATT"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ scale: imageScale }}
          />

          <motion.div
            className="
              absolute
              z-10

              left-5
              right-5
              top-[50%]
              w-auto
              max-w-none
              -translate-y-1/2

              md:left-[8%]
              md:right-auto
              md:w-[calc(100%-64px)]
              md:max-w-[540px]

              p-5
              sm:p-6
              md:p-8
              text-white
              overflow-y-auto
            "
            style={{
              opacity: contentOpacity,
              maxHeight: isMobile ? "calc(100svh - 150px)" : "none",
              borderRadius: isMobile ? "24px" : "32px",
              background: "rgba(0, 0, 0, 0.42)",
              backdropFilter: "blur(2.5px)",
              WebkitBackdropFilter: "blur(2.5px)",
            }}
          >
            <div className="space-y-3 md:space-y-5">
              <img
                src="/Leaf_Icon.svg"
                alt="Leaf icon"
                className="h-[36px] w-[36px] md:h-[49px] md:w-[49px]"
              />

              <h2
                style={{
                  color: "#FFF",
                  fontFamily: "Marcellus, serif",
                  fontSize: isMobile ? "30px" : "36px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.18",
                  letterSpacing: "-0.1px",
                }}
              >
                What is SATT?
              </h2>

              <div
                className="space-y-3 md:space-y-4"
                style={{
                  color: "#F6F5F4",
                  fontFamily: "Inter, sans-serif",
                  fontSize: isMobile ? "14px" : "19px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: isMobile ? "20px" : "26.6px",
                  letterSpacing: "-0.19px",
                }}
              >
                <p>
                  A community for adults navigating life after thirty. SATT
                  stands for Singles After Thirty Tribe.
                </p>

                <p>
                  This is not built for a status. It is built for reflection,
                  clarity, and emotional dignity.
                </p>

                <div>
                  <p className="mb-2">Here,</p>
                  <ul className="space-y-1">
                    <li>• Nobody judges.</li>
                    <li>• Nobody rushes.</li>
                    <li>• Nobody defines you.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSATT;