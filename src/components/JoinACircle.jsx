import { useState } from "react";
import ContactCallModal from "./ContactCallModal";

const JoinACircle = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <>
      <section id="join" className="py-24 bg-[#F6F5F4]">
        <div className="max-w-6xl mx-auto px-6 text-center relative">
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
              JOIN
            </div>
          </div>

          <h2
            className="mt-8 mb-24"
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
            Join a Circle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-end">
            {/* Reflection Circle */}
            <div
              className="bg-white rounded-[40px] border border-[#E7E0DA] px-7 pt-10 pb-7 min-w-[360px] min-h-[420px] flex flex-col text-left items-start"
              style={{ padding: "32px" }}
            >
              <h3
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
                Reflection Circle
              </h3>

              <p
                className="mt-3 mb-6"
                style={{
                  color: "#595857",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Small group space for emotional clarity.
              </p>

              <div className="rounded-[20px] w-full bg-[#F6F3F1] px-4 py-4 mb-7">
                <p
                  className="mb-3"
                  style={{
                    color: "#181411",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  What's included:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Guided reflection prompts</li>
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> 90 min small-group session</li>
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Safe sharing environment</li>
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Post-circle integration notes</li>
                </ul>
              </div>

              <button className="mt-auto w-full rounded-[20px] bg-[#E6391F] py-3 text-white text-[15px] font-medium hover:opacity-90 transition">
                Join Circle
              </button>

              <img
                src="/Static.svg"
                alt=""
                className="hidden md:block absolute z-20 pointer-events-none select-none"
                style={{
                  width: "280px",
                  left: "391px",
                  top: "160px",
                }}
              />
            </div>

            {/* Community Reflection */}
            <div
              className="bg-white rounded-[40px] border border-[#E7E0DA] px-7 pt-7 pb-7 min-w-[360px] min-h-[460px] flex flex-col relative -mt-5 text-left items-start"
              style={{ padding: "32px" }}
            >
              <div className="flex w-full justify-center mb-5">
                <span className="inline-flex items-center justify-center rounded-[8px] bg-[#EFE6DE] px-4 py-2 text-[14px] font-medium text-[#F03A17]">
                  Popular
                </span>
              </div>

              <h3
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
                Community Reflection
              </h3>

              <p
                className="mt-3 mb-6"
                style={{
                  color: "#595857",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Chat, dialogue, and shared awareness.
              </p>

              <div className="rounded-[20px] w-full bg-[#F6F3F1] px-4 py-4 mb-7">
                <p
                  className="mb-3"
                  style={{
                    color: "#181411",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  What's included:
                </p>

                <ul
                  className="space-y-2"
                  style={{
                    color: "#66625E",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "21px",
                  }}
                >
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Conscious group dialogue</li>
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Tea &amp; open conversations</li>
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Compatibility discussions</li>
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Closing reflection ritual</li>
                </ul>
              </div>

              <button className="mt-auto w-full rounded-[20px] bg-[#E6391F] py-3 text-white text-[15px] font-medium hover:opacity-90 transition">
                Reserve Spot
              </button>
            </div>

            {/* Online Reflection Circle */}
            <div
              className="bg-white rounded-[40px] border border-[#E7E0DA] px-7 pt-10 pb-7 min-w-[360px] min-h-[420px] flex flex-col text-left items-start"
              style={{ padding: "32px" }}
            >
              <h3
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
                Online Reflection Circle
              </h3>

              <p
                className="mt-3 mb-6"
                style={{
                  color: "#595857",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Virtual conscious conversations.
              </p>

              <div className="rounded-[20px] w-full bg-[#F6F3F1] px-4 py-4 mb-7">
                <p
                  className="mb-3"
                  style={{
                    color: "#181411",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  What's included:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Live online reflection circle</li>
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Moderated discussion space</li>
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Real-time Q&amp;A</li>
                  <li className="flex items-center gap-2 text-[#6F6A66] text-[15px] leading-6"><img src="/Leaf_grey.svg" alt="" className="h-[14px] w-[14px] flex-shrink-0" /> Follow-up reflection email</li>
                </ul>
              </div>

              <button className="mt-auto w-full rounded-[20px] bg-[#E6391F] py-3 text-white text-[15px] font-medium hover:opacity-90 transition">
                Register
              </button>
            </div>
          </div>

          <div className="mt-16 max-w-[907px] max-h-[160px] mx-auto">
            <div className="rounded-[32px] border border-[#E7E0DA] bg-white px-8 py-8">
              <div className="rounded-[24px] bg-[#F1EFED] px-10 py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-6 text-left">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full">
                    <img src="/Call.svg" alt="Call" className="h-9 w-9" />
                  </div>

                  <p
                    style={{
                      color: "#5F5B57",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "36px",
                    }}
                  >
                    Not sure which circle is right for you? Book a free 15-minute
                    conversation and we will guide you through the options.
                  </p>
                </div>

                <button
                  onClick={() => setIsCallModalOpen(true)}
                  className="shrink-0 rounded-full px-7 py-3"
                  style={{
                    background: "#E7DED4",
                    color: "#E6391F",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    borderRadius: "20px",
                  }}
                >
                  Book a 15-minute call
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-40">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-[#EAE3DC]"
              style={{
                border: "1px dashed #EDE8E1",
              }}
            ></div>

            <div className="relative z-10 bg-[#F6F5F4] px-6">
              <div className="flex items-center gap-6">
                <img src="/Leaf_Icon_2.svg" alt="" style={{ width: "31px", height: "31px", flexShrink: 0 }} />
                <img src="/Leaf_Icon_2.svg" alt="" style={{ width: "45px", height: "45px", flexShrink: 0 }} />
                <img src="/Leaf_Icon_2.svg" alt="" style={{ width: "23px", height: "23px", flexShrink: 0 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
    </>
  );
};

export default JoinACircle;