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

  const initialCardWidth = Math.min(size.width * 0.72, 1180);
  const initialCardHeight = 430;

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
    [170, 170, 0]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [1.08, 1.08, 1]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0.9, 1],
    [0, 1]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0.9, 1],
    [28, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F6F5F4] min-h-screen pt-[72px] pb-24 overflow-hidden"
    >
      <div className="min-h-screen flex items-start justify-center overflow-hidden">
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
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              scale: imageScale,
            }}
          />

          <motion.div
            className="
              absolute
              z-10
              left-1/2 md:left-[8%]
              top-[38%] md:top-[40%] lg:top-[42%]
              w-[calc(100%-32px)]
              max-w-[540px]
              -translate-x-1/2 md:translate-x-0
              -translate-y-1/2
              p-6 sm:p-8
              text-white
            "
            style={{
              opacity: contentOpacity,
              y: contentY,
              borderRadius: "32px",
              background: "rgba(0, 0, 0, 0.40)",
              backdropFilter: "blur(2.5px)",
              WebkitBackdropFilter: "blur(2.5px)",
            }}
          >
            <div className="space-y-5">
              <img
                src="/Leaf_Icon.svg"
                alt="Leaf icon"
                className="h-[49px] w-[49px]"
              />

              <h2
                style={{
                  color: "#FFF",
                  fontFamily: "Marcellus, serif",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "43.2px",
                  letterSpacing: "-0.1px",
                }}
              >
                What is SATT?
              </h2>

              <div
                className="space-y-4"
                style={{
                  color: "#F6F5F4",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "19px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "26.6px",
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