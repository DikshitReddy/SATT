import { useEffect, useState } from "react";

const ContactCallModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
      <div
        className="relative w-full max-w-[720px] rounded-[28px] border border-[#DDD4CB] bg-[#F6F3EE] px-8 py-8 md:px-10 md:py-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-[#E94D27] text-[24px] leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <div className="text-center">
          <p
            className="mb-3"
            style={{
              color: "#E94D27",
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.84px",
              textTransform: "uppercase",
            }}
          >
            CONTACT US
          </p>

          <h2
            className="mb-4"
            style={{
              color: "#0D0503",
              fontFamily: "Marcellus, serif",
              fontSize: "52px",
              fontWeight: 400,
              lineHeight: "62.4px",
              letterSpacing: "-1.04px",
            }}
          >
            Book a 15-Minute Call
          </h2>

          <p
            className="mb-10"
            style={{
              color: "#6B6763",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "30px",
            }}
          >
            If you're unsure where to begin, start with a gentle conversation.
            <br />
            This is not advice or pressure, just space to understand where you
            are.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label
                className="mb-2 block"
                style={{
                  color: "#181411",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "18px",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleChange}
                className="h-[48px] w-full rounded-[12px] border border-[#E2DBD3] bg-[#FBFAF8] px-4 outline-none"
              />
            </div>

            <div>
              <label
                className="mb-2 block"
                style={{
                  color: "#181411",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "18px",
                }}
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="+91"
                value={formData.phone}
                onChange={handleChange}
                className="h-[48px] w-full rounded-[12px] border border-[#E2DBD3] bg-[#FBFAF8] px-4 outline-none"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              className="mb-2 block"
              style={{
                color: "#181411",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "18px",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="h-[48px] w-full rounded-[12px] border border-[#E2DBD3] bg-[#FBFAF8] px-4 outline-none"
            />
          </div>

          <div className="mt-5">
            <label
              className="mb-2 block"
              style={{
                color: "#181411",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "18px",
              }}
            >
              What would you like to talk about?
            </label>
            <textarea
              name="message"
              placeholder="I've been feeling..."
              value={formData.message}
              onChange={handleChange}
              className="h-[110px] w-full resize-none rounded-[12px] border border-[#E2DBD3] bg-[#FBFAF8] px-4 py-3 outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-5 h-[48px] w-full rounded-full bg-[#E94D27] text-white transition hover:opacity-90"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            Contact Us
          </button>
        </form>
      </div>

      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default ContactCallModal;