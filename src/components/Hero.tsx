import { motion } from "motion/react";
import ThreeWavyBackground from "./common/ThreeWavyBackground";

interface HeroProps {
  currentDateString: string;
  currentTime: string;
}


export default function Hero({ currentDateString, currentTime }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] md:h-screen w-full flex flex-col justify-between py-12 px-6 pt-[120px] overflow-hidden select-none bg-gradient-to-b from-[#E6F4F2] via-[#F2FAF9] to-[#FAFCFC]">
      {/* Three.js Luminous Mint Wavy Background */}
      <ThreeWavyBackground />

      {/* Radiant ambient glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[320px] sm:h-[420px] bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Top Header Row */}
      <div className="relative flex justify-between items-start w-full z-10 max-w-[1440px] mx-auto">
        <div className="font-narrow text-xs font-black tracking-[0.2em] text-[#0C2B31] uppercase max-w-xs md:max-w-none">
          BRAND &amp; MARKETING COMMUNICATIONS
        </div>

        <div className="flex items-center gap-3 font-narrow text-xs font-bold tracking-[0.1em] text-[#4E6E75]">
          <span className="hidden sm:inline">{currentDateString}</span>
          <div className="flex items-center gap-1.5 bg-[#0B6E7B] text-white py-1 px-2.5 rounded font-mono text-[11px] shadow-xs">
            <i className="fa-regular fa-clock text-xs text-white/80 animate-pulse"></i>
            <span>{currentTime || "00:00:00"} GMT+7</span>
          </div>
          <i className="fa-solid fa-arrow-right text-xs text-[#0B6E7B] animate-bounce-horizontal"></i>
        </div>
      </div>

      {/* Center content */}
      <div className="relative flex flex-col items-center justify-center w-full flex-grow py-8 z-10 select-none">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-fit flex flex-col text-left"
        >
          {/* Pre-headline */}
          <span className="font-sans text-base sm:text-lg md:text-xl text-[#4E6E75] font-medium tracking-wide block mb-1 ml-2">
            Nguyễn Hà Minh Khánh (Mia Nguyen)
          </span>

          {/* Headline */}
          <h1 className="font-sans font-black text-[#0C2B31] leading-none tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem]">
            Portfolio.
          </h1>

        </motion.div>
      </div>

      {/* Bottom Metadata Info Grid */}
      <div className="relative flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-4 w-full z-10 font-mono text-xs sm:text-sm md:text-[15px] tracking-widest text-[#4E6E75] max-w-[1440px] mx-auto pt-4 border-t border-[#CCE5E3]">
        <div className="flex items-center justify-start gap-2 text-left">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E7B] flex-shrink-0"></span>
          <a href="https://www.linkedin.com/in/mknh13/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0B6E7B] transition-colors">
            @mknh13
          </a>
        </div>
        <div className="flex items-center justify-start md:justify-center gap-2 text-left md:text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E7B] flex-shrink-0 md:hidden"></span>
          <a href="mailto:n.khanhwork@gmail.com" className="hover:text-[#0B6E7B] transition-colors break-all">
            n.khanhwork@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-start md:justify-end gap-1.5 text-left md:text-right">
          <i className="fa-solid fa-location-dot text-xs text-[#0B6E7B] flex-shrink-0"></i>
          <span>Ho Chi Minh, Viet Nam — Global Remote</span>
        </div>
      </div>
    </section>
  );
}
