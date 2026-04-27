import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const results = [
  {
    title: "The Explorer",
    desc: "You are still discovering what truly matters to you.",
  },
  {
    title: "The Rebuilder",
    desc: "You are moving forward after a difficult chapter.",
  },
  {
    title: "The Reflective Thinker",
    desc: "You seek meaning more than societal approval.",
  },
  {
    title: "The Quiet Observer",
    desc: "You prefer understanding before speaking.",
  },
  {
    title: "The Grounded Individual",
    desc: "You have stability and seek deeper connection.",
  },
];

const reflectionSteps = [
  {
    step: "STEP 1",
    label: "Life Stage Awareness",
    question: "Where do you feel you are right now in life?",
    options: [
      "Still exploring what I want in life",
      "Clear about my direction but not about relationships",
      "Emotionally tired from past experiences",
      "Rebuilding after separation or divorce",
      "Married but emotionally disconnected",
      "Stable but seeking deeper meaning",
      "Unsure where I stand",
    ],
  },
  {
    step: "STEP 2",
    label: "Relationship History",
    question: "Which of these best reflects your experience?",
    options: [
      "Never married",
      "Long relationship but never married",
      "Divorced or separated",
      "Widowed",
      "Married but emotionally distant",
      "Prefer not to say",
    ],
  },
  {
    step: "STEP 3",
    label: "Current Emotional State",
    question: "What do you feel most often these days?",
    options: [
      "Peaceful but reflective",
      "Confused about the future",
      "Lonely at times",
      "Emotionally exhausted",
      "Hopeful but cautious",
      "Stable and content",
      "Searching for clarity",
    ],
  },
  {
    step: "STEP 4",
    label: "Social Pressure",
    question:
      "How often do you feel pressured about marriage or life decisions?",
    options: [
      "Very often",
      "Sometimes",
      "Rarely",
      "Not anymore",
      "I have learned to ignore it",
    ],
  },
  {
    step: "STEP 5",
    label: "What Are You Seeking?",
    question: "What brought you here today?",
    options: [
      "Emotional clarity",
      "Meaningful conversations",
      "A supportive community",
      "Understanding my life direction",
      "Healing from past experiences",
      "Curiosity about SATT",
    ],
  },
  {
    step: "STEP 6",
    label: "Comfort With Sharing",
    question: "How comfortable are you sharing your thoughts with others?",
    options: [
      "Very comfortable",
      "Comfortable in small groups",
      "Only with one trusted person",
      "Still unsure",
      "Prefer listening first",
    ],
  },
  {
    step: "STEP 7",
    label: "Life Priorities",
    question: "What matters most to you right now?",
    options: [
      "Inner peace",
      "Meaningful relationships",
      "Personal growth",
      "Career or purpose",
      "Healing and stability",
      "Exploration",
    ],
  },
];

const fadeSlide = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.45, ease: "easeInOut" },
};
const LifeMapReflection = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finalResult, setFinalResult] = useState(null);

  const totalSteps = reflectionSteps.length;
  const activeStep = reflectionSteps[currentStep];
  const isFinished = currentStep >= totalSteps;

  const currentAnswer = answers[currentStep];

  const progressSegments = useMemo(
    () => Array.from({ length: totalSteps }),
    [totalSteps]
  );

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: option,
    }));
  };

  const handleContinue = () => {
    if (!currentAnswer) return;
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }else {
  const randomResult =
    results[Math.floor(Math.random() * results.length)];
  setFinalResult(randomResult);
  setCurrentStep(totalSteps);
}
  };

  const handleBack = () => {
    if (isFinished) {
      setCurrentStep(totalSteps - 1);
      return;
    }
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setHasStarted(false);
    }
  };
  return (
    <section
      className="w-full py-24 px-6 bg-[#F6F5F4]" 
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Top Tag */}
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
          <span
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
            SATT LIFE MAP
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl py-5 font-semibold" style={{ 
            color: "#0D0503",
            textAlign: "center",
            fontFamily: "Marcellus, serif",
            fontSize: "52px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "62.4px",
            letterSpacing: "-1.04px"
            }}>
          Your Life Map
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto" style={{
            color: "#595857",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "27px",
            marginBottom: "30px",
          }}
        >
          To help you understand where you stand emotionally — not where society
          says you should stand.
        </p>

        {/* Card */}
        <div className="w-full flex justify-center">
          <AnimatePresence mode="wait">
            {!hasStarted ? (
              <motion.div
                key="intro-card"
                {...fadeSlide}
                style={{
            width: "100%",
            maxWidth: "787px",
            minHeight: "360px",
            borderRadius: "20px",
            backgroundImage: "url('/About.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
            marginTop: "40px",
          }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.18,
                    backgroundSize: "160px 160px",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    width: "721px",
                    padding: "48px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "24px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <h3
                    style={{
                      color: "#F6EEE8",
                      textAlign: "center",
                      fontFamily: "Georgia, serif",
                      fontSize: "30px",
                      fontWeight: 400,
                      lineHeight: "120%",
                      margin: 0,
                    }}
                  >
                    Begin Your Reflection
                  </h3>

                  <div className="flex flex-col items-center gap-2">
                    <p
                      style={{
                  color: "#F5F0EB",
                  textAlign: "center",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%",
                  margin: 0,
                }}
                    >
                      This is a private reflection.
                    </p>
                    <p
                      style={{
                  color: "#F5F0EB",
                  textAlign: "center",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%",
                  margin: 0,
                }}
                    >
                      There are no right answers.
                    </p>
                    <p
                      style={{
                  color: "#F5F0EB",
                  textAlign: "center",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%",
                  margin: 0,
                }}
                    >
                      There is no judgment.
                    </p>
                    <p
                      style={{
                  color: "#F5F0EB",
                  textAlign: "center",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%",
                  margin: 0,
                }}
                    >
                      You will only see patterns about yourself.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleStart}
                    style={{
                      display: "flex",
                      height: "44px",
                      padding: "12px 32px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      borderRadius: "20px",
                      background: "#F04B23",
                      border: "none",
                      color: "#FFF",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    Begin Reflection
                  </button>
                </div>
              </motion.div>
            ) : !isFinished ? (
              <motion.div
                key={`step-${currentStep}`}
                {...fadeSlide}
                className="w-full"
                style={{ maxWidth: "760px" }}
              >
                <div className="flex gap-2 mb-8">
                  {progressSegments.map((_, index) => (
                    <div
                      key={index}
                      className="h-[7px] flex-1 rounded-full"
                      style={{
                        background:
                          index <= currentStep ? "#F04B23" : "#DED4CC",
                      }}
                    />
                  ))}
                </div>

                <div className="text-center mb-10">
                  <div
                    style={{
                      color: "#F04B23",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      letterSpacing: "1.68px",
                      textTransform: "uppercase",
                      marginBottom: "18px",
                    }}
                  >
                    {activeStep.step} — {activeStep.label}
                  </div>

                  <h3
                    style={{
                      color: "#2A1A14",
                      textAlign: "center",
                      fontFamily: "Georgia, serif",
                      fontSize: "30px",
                      fontWeight: 400,
                      lineHeight: "130%",
                      margin: 0,
                    }}
                  >
                    {activeStep.question}
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  {activeStep.options.map((option) => {
                    const selected = currentAnswer === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelect(option)}
                        className="w-full text-left transition-all duration-200"
                        style={{
                          borderRadius: "12px",
                          border: selected
                            ? "1.5px solid #F04B23"
                            : "1.5px solid #D7C8BD",
                          background: "#F6F3F0",
                          minHeight: "62px",
                          padding: "18px 14px",
                          color: selected ? "#A23C23" : "#2A1A14",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between mt-11">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2"
                    style={{
                      color: "#5D5551",
                      background: "transparent",
                      border: "none",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    <span>←</span>
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={!currentAnswer}
                    style={{
                      display: "inline-flex",
                      height: "40px",
                      padding: "10px 22px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      borderRadius: "999px",
                      background: currentAnswer ? "#F04B23" : "#E6B7A6",
                      border: "none",
                      color: "#FFF",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: 500,
                      cursor: currentAnswer ? "pointer" : "not-allowed",
                    }}
                  >
                    Continue →
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="final-screen"
                {...fadeSlide}
                className="w-full flex flex-col items-center"
                style={{ maxWidth: "820px" }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "787px",
                    minHeight: "360px",
                    borderRadius: "20px",
                    backgroundImage: "url('/About.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    position: "relative",
                    marginTop: "40px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.18,
                      
                      backgroundSize: "160px 160px",
                      pointerEvents: "none",
                    }}
                  />

                  <div className="relative z-10 text-center">
                    <div
                      style={{
                        color: "#F04B23",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "1.68px",
                        textTransform: "uppercase",
                        marginBottom: "18px",
                      }}
                    >
                      Your Reflection Pattern
                    </div>

                    <h3
                      style={{
                        color: "#F8F3EE",
                        fontFamily: "Georgia, serif",
                        fontSize: "40px",
                        fontWeight: 400,
                        lineHeight: "120%",
                        margin: 0,
                        marginBottom: "24px",
                      }}
                    >
                      {finalResult?.title}
                    </h3>

                    <p
                      style={{
                        color: "#F5ECE6",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        lineHeight: "170%",
                        margin: 0,
                        maxWidth: "620px",
                        marginInline: "auto",
                      }}
                    >
                      {finalResult?.desc}
                    </p>
                  </div>
                </div>

                <div
                  className="text-center mt-12"
                  style={{
                    color: "#34211A",
                    fontFamily: "Georgia, serif",
                    fontSize: "24px",
                    fontStyle: "italic",
                    lineHeight: "160%",
                  }}
                >
                  <div>You are not late.</div>
                  <div>You are not behind.</div>
                  <div>You are becoming.</div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setHasStarted(false);
                    setCurrentStep(0);
                    setAnswers({});
                  }}
                  className="mt-10"
                  style={{
                    display: "inline-flex",
                    height: "42px",
                    padding: "10px 24px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "999px",
                    background: "#F04B23",
                    border: "none",
                    color: "#FFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Start Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LifeMapReflection;