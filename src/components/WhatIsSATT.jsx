import { useState } from "react";
import { motion } from "framer-motion";

const WhatIsSATT = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[#F6F5F4] overflow-hidden -mt-8 pb-16">
      
      <div className="max-w-6xl mx-auto relative px-6">
        
        <motion.div
          onClick={() => setExpanded(!expanded)}
          className="cursor-pointer overflow-hidden relative"
          style={{ originY: 0 }}

          initial={false}
          animate={{
            height: expanded ? "920px" : "440px",
            borderRadius: expanded ? "0px" : "150px",

            // ✅ CENTERED BREAKOUT (THIS FIXES YOUR ISSUE)
            width: expanded ? "100vw" : "100%",
            left: expanded ? "50%" : "0%",
            x: expanded ? "-50%" : "0%",
            position: expanded ? "relative" : "relative",
          }}

          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.img
            src="Small.png"
            alt="SATT"
            className="w-full h-full object-cover"

            animate={{
              scale: expanded ? 1 : 1.15,
            }}

            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          />
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: -320, scaleY: 0.85 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 18,
                mass: 1.2,
                delay: 0.2,
              }}
              style={{
                borderRadius: "32px",
                background: "rgba(0, 0, 0, 0.40)",
                backdropFilter: "blur(2.5px)",
                WebkitBackdropFilter: "blur(2.5px)",
              }}

              className="
                absolute 
                left-10 md:left-20
                top-[25%] -translate-y-1/2 
                max-w-lg 
                p-8 
                rounded-[32px] 
                bg-black/40 
                backdrop-blur-md 
                text-white
              "
            >
              <div className="space-y-5">

                <img
                  src="/Leaf_Icon.svg"
                  alt="Leaf icon"
                  className="h-[49px] w-[49px]"
                />

                <h2 className="text-3xl font-semibold" style={{
                  color: "#FFF",
                  fontFamily: "Marcellus, serif",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "43.2px", /* 120% */
                  letterSpacing: "-0.1px",
                }}>
                  What is SATT?
                </h2>

                <div className="space-y-4 text-white/90 text-lg leading-relaxed" style={{
                  color: "#F6F5F4",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "19px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "26.6px", /* 140% */
                  letterSpacing: "-0.19px",
                }}>
                  <p >
                    A community for adults navigating life after thirty.
                    SATT stands for Singles After Thirty Tribe.
                  </p>

                  <p>
                    This is not built for a status.
                    It is built for reflection, clarity, and emotional dignity.
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
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatIsSATT;