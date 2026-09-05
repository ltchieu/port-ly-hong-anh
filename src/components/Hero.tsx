import { motion } from "motion/react";
import ThreeWavyBackground from "./common/ThreeWavyBackground";
import DecryptedText from "./common/DecryptedText";
import StrokeText from "./common/StrokeText";
import { contactInfo } from "../data/about";

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
          MARKETING EXECUTIVE &bull; PORTFOLIO
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
          className="w-fit max-w-full flex flex-col text-left"
        >
          {/* Pre-headline: DecryptedText */}
          <DecryptedText
            text="Lý Hồng Anh"
            animateOn="view"
            speed={75}
            maxIterations={18}
            parentClassName="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-[#0C2B31] font-bold tracking-tight block mb-2 sm:mb-3 ml-1 select-none"
            className="text-[#0C2B31]"
            encryptedClassName="text-[#0B6E7B] font-mono font-bold"
          />

          {/* Headline: StrokeText */}
          <h1 className="w-full max-w-[94vw] sm:w-[580px] md:w-[740px] lg:w-[940px] xl:w-[1120px]">
            <StrokeText
              text="Portfolio."
              strokeColor="#0B6E7B"
              fillColor="#0C2B31"
              strokeWidth={2.8}
              drawDuration={2.2}
              fillDelay={0.3}
              stagger={0.07}
              ease="power2.out"
              trigger="mount"
              fillMode="fade"
              fontSize={180}
              fontWeight={900}
              letterSpacing={-4}
              fontFamily='var(--font-sans, "Inter", ui-sans-serif, system-ui, sans-serif)'
              className="font-sans font-black tracking-tight w-full"
            />
          </h1>
        </motion.div>
      </div>

      {/* Bottom Metadata Info Grid */}
      <div className="relative flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-4 w-full z-10 font-mono text-xs sm:text-sm md:text-[15px] tracking-widest text-[#4E6E75] max-w-[1440px] mx-auto pt-4 border-t border-[#CCE5E3]">
        <div className="flex items-center justify-start gap-2 text-left">
          <i className="fa-solid fa-phone text-xs text-[#0B6E7B] flex-shrink-0"></i>
          <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="hover:text-[#0B6E7B] transition-colors">
            {contactInfo.phone}
          </a>
        </div>
        <div className="flex items-center justify-start md:justify-center gap-2 text-left md:text-center">
          <i className="fa-solid fa-envelope text-xs text-[#0B6E7B] flex-shrink-0"></i>
          <a href={`mailto:${contactInfo.email}`} className="hover:text-[#0B6E7B] transition-colors break-all">
            {contactInfo.email}
          </a>
        </div>
        <div className="flex items-center justify-start md:justify-end gap-1.5 text-left md:text-right">
          <i className="fa-solid fa-location-dot text-xs text-[#0B6E7B] flex-shrink-0"></i>
          <span>{contactInfo.location}</span>
        </div>
      </div>
    </section>
  );
}
