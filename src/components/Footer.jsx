const Footer = () => {
  return (
    <footer className="relative bg-[#F6F5F4] overflow-hidden">
      <div className="relative max-w-[1240px] mx-auto px-6 md:px-8 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Mobile faded SATT text - top */}
          <div className="block md:hidden pointer-events-none select-none">
            <h2
              className="leading-none text-[64px] sm:text-[82px] whitespace-nowrap"
              style={{
                color: "#EDE8E1",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                letterSpacing: "-0.06em",
              }}
            >
              SATT
            </h2>
          </div>

          {/* Left content */}
          <div className="relative z-10 w-full max-w-[520px]">
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
              className="mb-2 max-w-[420px]"
              style={{
                color: "#6B6763",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "28px",
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
                lineHeight: "28px",
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

          {/* Desktop faded SATT text - right */}
          <div className="hidden md:flex pointer-events-none select-none relative z-0 justify-end items-start flex-1">
            <h2
              className="leading-none whitespace-nowrap md:text-[150px] lg:text-[170px] xl:text-[180px]"
              style={{
                color: "#EDE8E1",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                letterSpacing: "-0.06em",
              }}
            >
              SATT
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;