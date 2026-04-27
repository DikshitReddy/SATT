const Footer = () => {
  return (
    <footer className="bg-[#F6F5F4] pt-16 pb-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Left side */}
          <div
            className="relative z-10"
            style={{
              marginLeft: window.innerWidth >= 768 ? "-150px" : "0px",
            }}
          >
            <img
              src="/Satt_logo.svg"
              alt="SATT logo"
              className="w-[60px] h-[60px] mb-8"
            />

            <p
              className="mb-3"
              style={{
                color: "#5E5A57",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              SATT – Find Yourself
            </p>

            <p
              className="mb-2"
              style={{
                color: "#6B6763",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "30px",
              }}
            >
              A tribe for the aware, the waiting, the wild, the whole.
            </p>

            <p
              className="mb-8"
              style={{
                color: "#6B6763",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "30px",
              }}
            >
              © 2025 SATT. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <img src="/IG.svg" alt="Instagram" className="w-5 h-5" />
              <img src="/FB.svg" alt="Facebook" className="w-5 h-5" />
              <img src="/YT.svg" alt="YouTube" className="w-5 h-5" />
            </div>
          </div>

          {/* Right side faded text */}
          <div className="relative flex-1 flex justify-start md:justify-end items-start">
            <h2
              className="text-[90px] leading-none md:text-[160px]"
              style={{
                color: "#EDE8E1",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                letterSpacing: "-7px",
              }}
            >
              SA
            </h2>
            <h2
              className="text-[90px] leading-none md:text-[160px]"
              style={{
                color: "#EDE8E1",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                letterSpacing: "-7px",
              }}
            >
              TT
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;