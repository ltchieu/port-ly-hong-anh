import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { experiences } from "../data/experiences";
import HighlightText from "./common/HighlightText";
import DNGroupExperienceShowcase from "./common/DNGroupExperienceShowcase";
import VLotusExperienceShowcase from "./common/VLotusExperienceShowcase";
import BeneliftsAsiaExperienceShowcase from "./common/BeneliftsAsiaExperienceShowcase";
import FreelanceExperienceShowcase from "./common/FreelanceExperienceShowcase";
import AeonExperienceShowcase from "./common/AeonExperienceShowcase";

interface ExperienceDetailModalProps {
  experienceId: string | null;
  onClose: () => void;
  onSelectExperience: (id: string) => void;
}

const experienceIcons: Record<string, string> = {
  "dn-group": "fa-solid fa-tooth",
  "v-lotus": "fa-solid fa-utensils",
  "benelifts-asia": "fa-solid fa-building",
  "freelance-event-coordinator": "fa-solid fa-headset",
  "aeon-vietnam": "fa-solid fa-bullhorn",
};

export default function ExperienceDetailModal({
  experienceId,
  onClose,
  onSelectExperience,
}: ExperienceDetailModalProps) {
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentIndex = experiences.findIndex((e) => e.id === experienceId);
  const currentExp = currentIndex !== -1 ? experiences[currentIndex] : null;

  // Handle keyboard navigation (Escape to close) and capture wheel events
  useEffect(() => {
    if (!experienceId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Stop wheel events from bubbling to window / Lenis
    const overlayEl = modalOverlayRef.current;
    const handleWheelCapture = (e: WheelEvent) => {
      e.stopPropagation();
      // If wheel happens over header/footer/backdrop, scroll the main content container
      if (scrollContainerRef.current && e.target !== scrollContainerRef.current && !scrollContainerRef.current.contains(e.target as Node)) {
        scrollContainerRef.current.scrollTop += e.deltaY;
      }
    };

    if (overlayEl) {
      overlayEl.addEventListener("wheel", handleWheelCapture, { capture: true, passive: true });
    }

    // Lock background page scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (overlayEl) {
        overlayEl.removeEventListener("wheel", handleWheelCapture, { capture: true });
      }
      document.body.style.overflow = originalOverflow;
    };
  }, [experienceId, onClose]);

  // Reset scroll position to top when switching experiences
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [experienceId]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {currentExp && (
        <motion.div
          key="experience-detail-modal"
          ref={modalOverlayRef}
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#07262B]/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
        >
          <motion.div
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAFCFC] text-[#0C2B31] border border-[#CCE5E3] max-w-6xl w-full h-[94vh] rounded-2xl sm:rounded-3xl shadow-2xl relative flex flex-col overflow-hidden"
          >
            {/* 1. STICKY MODAL HEADER */}
            <div className="bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#CCE5E3] flex items-center justify-between gap-4 z-20 shrink-0 select-none">
              <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#0B6E7B] text-white flex items-center justify-center shrink-0 shadow-md">
                  <i className={`${experienceIcons[currentExp.id] || "fa-solid fa-briefcase"} text-base`}></i>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-narrow text-xs font-black hologram-metal-text tracking-widest uppercase">
                      CASE STUDY {currentExp.index}
                    </span>
                    <span className="text-[#CCE5E3]">•</span>
                    <span className="font-narrow text-xs font-bold text-[#4E6E75] uppercase truncate">
                      {currentExp.location}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] truncate leading-tight">
                    {currentExp.company}
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-[#CCE5E3] bg-[#F0F8F7] hover:border-[#0B6E7B] hover:bg-[#0B6E7B] hover:text-white text-[#0C2B31] transition-all flex items-center justify-center cursor-pointer shadow-xs shrink-0"
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark text-base"></i>
              </button>
            </div>

            {/* 2. SCROLLABLE SHOWCASE CONTENT */}
            <div
              ref={scrollContainerRef}
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              tabIndex={0}
              className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-8 md:px-10 py-6 space-y-8 custom-scrollbar focus:outline-none"
            >
              {/* Role Title & Summary Banner */}
              <div className="bg-white border border-[#CCE5E3] p-6 sm:p-8 rounded-2xl shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-block px-3 py-1 bg-[#0B6E7B]/10 text-[#0B6E7B] rounded-md font-narrow text-xs font-black tracking-widest uppercase">
                    ROLE: {currentExp.role}
                  </span>
                  {currentExp.tech && (
                    <div className="flex flex-wrap gap-1.5">
                      {currentExp.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 bg-[#F0F8F7] border border-[#CCE5E3] text-[#4E6E75] font-mono text-[10px] uppercase rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {currentExp.sections ? (
                  <div className="space-y-6 pt-2">
                    {currentExp.sections.map((sec, sIdx) => (
                      <div key={sIdx} className="space-y-3">
                        <h6 className="font-narrow text-sm sm:text-base font-black text-[#0B6E7B] uppercase tracking-wider flex items-center gap-2">
                          <i className="fa-solid fa-chevron-right text-xs text-[#0B6E7B]"></i>
                          {sec.title}
                        </h6>
                        <ul className="space-y-2 pl-2 font-sans text-sm sm:text-base text-[#2C4A51] leading-relaxed">
                          {sec.items.map((item, iIdx) => {
                            if (typeof item === "string") {
                              return (
                                <li key={iIdx} className="flex items-start gap-2.5">
                                  <span className="text-[#0B6E7B] font-bold text-base mt-0.5">•</span>
                                  <span className="flex-1">
                                    <HighlightText text={item} />
                                  </span>
                                </li>
                              );
                            } else {
                              return (
                                <li key={iIdx} className="space-y-2.5 pt-1.5">
                                  <div className="flex items-start gap-2.5">
                                    <span className="text-[#0B6E7B] font-bold text-base mt-0.5">•</span>
                                    <span className="font-bold text-sm sm:text-base text-[#0C2B31]">
                                      {item.subtitle}
                                    </span>
                                  </div>
                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pl-4 pt-1">
                                    {item.subitems.map((sub, subIdx) => (
                                      <div
                                        key={subIdx}
                                        className="px-3 py-2 bg-[#F4FAF9] border border-[#0B6E7B]/30 rounded-lg flex items-center gap-2 font-narrow font-black text-xs sm:text-sm text-[#0C2B31] shadow-2xs hover:bg-[#0B6E7B] hover:text-white transition-all group/sub"
                                      >
                                        <i className="fa-solid fa-chart-line text-[#0B6E7B] group-hover/sub:text-[#2DD4BF] text-xs transition-colors"></i>
                                        <span>{sub}</span>
                                      </div>
                                    ))}
                                  </div>
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-sans text-base text-[#2C4A51] leading-relaxed">
                    <HighlightText text={currentExp.description} />
                  </p>
                )}
              </div>

              {/* Render Rich Interactive Deep-Dive Showcase based on Experience ID */}
              <div>
                {currentExp.id === "dn-group" ? (
                  <DNGroupExperienceShowcase />
                ) : currentExp.id === "v-lotus" ? (
                  <VLotusExperienceShowcase />
                ) : currentExp.id === "benelifts-asia" ? (
                  <BeneliftsAsiaExperienceShowcase />
                ) : currentExp.id === "freelance-event-coordinator" ? (
                  <FreelanceExperienceShowcase />
                ) : currentExp.id === "aeon-vietnam" ? (
                  <AeonExperienceShowcase />
                ) : (
                  <div className="aspect-video w-full overflow-hidden rounded-2xl bg-[#E7F3F2] relative group border border-[#CCE5E3]">
                    <img
                      src={currentExp.image}
                      alt={`${currentExp.company} campaign`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* 3. STICKY MODAL FOOTER WITH EXPERIENCE QUICK-SWITCH TABS */}
            <div className="bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3 border-t border-[#CCE5E3] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 z-20">
              {/* Quick tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 custom-scrollbar">
                {experiences.map((exp) => {
                  const isSelected = exp.id === currentExp.id;
                  return (
                    <button
                      key={exp.id}
                      onClick={() => onSelectExperience(exp.id)}
                      className={`px-3 py-1.5 rounded-lg font-narrow text-xs font-black uppercase transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? "bg-[#0B6E7B] text-white shadow-xs"
                          : "bg-[#F0F8F7] text-[#4E6E75] hover:text-[#0C2B31] hover:bg-[#CCE5E3]/60 border border-[#CCE5E3]"
                      }`}
                    >
                      <i className={`${experienceIcons[exp.id] || "fa-solid fa-briefcase"} text-[10px]`}></i>
                      <span>
                        {exp.index} • {exp.company.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Close action button */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto bg-[#0B6E7B] text-white font-narrow text-xs font-black tracking-widest uppercase px-5 py-2.5 rounded-xl hover:bg-[#08545E] transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <span>CLOSE CASE STUDY</span>
                  <i className="fa-solid fa-check text-xs"></i>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
