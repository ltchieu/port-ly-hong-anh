import { motion, AnimatePresence } from "motion/react";
import { contactInfo } from "../data/about";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavbarProps) {
  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 w-full z-40 bg-[#FAFCFC]/85 backdrop-blur-md border-b border-[#CCE5E3] py-4 px-6 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 font-display text-sm tracking-[0.2em] font-black uppercase text-[#0C2B31] hover:text-[#0B6E7B] transition-all duration-300">
            <span>HONG ANH</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center text-[#0C2B31]">
            <a href="#about" className="font-narrow text-xs font-bold tracking-[0.15em] hover:text-[#0B6E7B] hover:scale-105 transition-all duration-300 uppercase">
              INTRODUCE
            </a>
            <a href="#experience" className="font-narrow text-xs font-bold tracking-[0.15em] hover:text-[#0B6E7B] hover:scale-105 transition-all duration-300 uppercase">
              EXPERIENCE
            </a>
            <a href="#work" className="font-narrow text-xs font-bold tracking-[0.15em] hover:text-[#0B6E7B] hover:scale-105 transition-all duration-300 uppercase">
              PROJECTS
            </a>
            <a href="#awards" className="font-narrow text-xs font-bold tracking-[0.15em] hover:text-[#0B6E7B] hover:scale-105 transition-all duration-300 uppercase">
              AWARDS
            </a>
            <a
              href="#contact"
              className="font-narrow text-xs font-black tracking-[0.2em] hologram-metal-bg text-white px-4 py-1.5 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 uppercase flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              CONTACT <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-1 text-[#0C2B31] hover:text-[#0B6E7B] transition-all"
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars text-lg"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="fixed inset-0 z-50 bg-[#FAFCFC] flex flex-col justify-between p-8 text-[#0C2B31]"
          >
            <div className="flex justify-between items-center border-b border-[#CCE5E3] pb-6">
              <span className="font-display text-sm tracking-[0.2em] font-black uppercase text-[#0B6E7B]">
                MENU
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 hover:text-[#0B6E7B] transition-all text-[#0C2B31] flex items-center justify-center"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 my-auto">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-narrow text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.05em] hover:text-[#0B6E7B] transition-colors"
              >
                01 / INTRODUCE
              </a>
              <a
                href="#experience"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-narrow text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.05em] hover:text-[#0B6E7B] transition-colors"
              >
                02 / EXPERIENCE
              </a>
              <a
                href="#work"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-narrow text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.05em] hover:text-[#0B6E7B] transition-colors"
              >
                03 / SELECTED WORKS
              </a>
              <a
                href="#awards"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-narrow text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.05em] hover:text-[#0B6E7B] transition-colors"
              >
                04 / AWARDS
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-narrow text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.05em] text-left hologram-metal-text hover:opacity-80 transition-opacity cursor-pointer"
              >
                05 / SAY HELLO →
              </a>
            </div>

            <div className="border-t border-[#CCE5E3] pt-6 flex justify-between items-center text-xs font-mono text-[#4E6E75]">
              <span>{contactInfo.email}</span>
              <span>{contactInfo.location}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
