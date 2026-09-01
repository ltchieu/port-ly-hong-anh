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

interface ParsedMetric {
  value: string;
  label: string;
  icon: string;
  iconBg: string;
}

function parseMetric(text: string): ParsedMetric {
  const match = text.match(/^([\d,.]+[+%kKmMbB]?|\d+[\w+]*)\s+(.*)$/);
  let value = "";
  let label = text;

  if (match) {
    value = match[1];
    label = match[2];
  }

  const lower = text.toLowerCase();
  let icon = "fa-solid fa-chart-line text-[#0B6E7B]";
  let iconBg = "bg-[#0B6E7B]/10";

  if (lower.includes("facebook")) {
    icon = "fa-brands fa-facebook-f text-[#1877F2]";
    iconBg = "bg-[#1877F2]/10";
  } else if (lower.includes("instagram")) {
    icon = "fa-brands fa-instagram text-[#E4405F]";
    iconBg = "bg-[#E4405F]/10";
  } else if (lower.includes("tiktok")) {
    icon = "fa-brands fa-tiktok text-[#0C2B31]";
    iconBg = "bg-[#0C2B31]/10";
  } else if (lower.includes("view") || lower.includes("video")) {
    icon = "fa-solid fa-play text-[#0B6E7B]";
    iconBg = "bg-[#0B6E7B]/10";
  } else if (lower.includes("reach") || lower.includes("impression")) {
    icon = "fa-solid fa-arrow-trend-up text-[#0B6E7B]";
    iconBg = "bg-[#0B6E7B]/10";
  } else if (lower.includes("like") || lower.includes("share")) {
    icon = "fa-solid fa-heart text-[#E11D48]";
    iconBg = "bg-[#E11D48]/10";
  } else if (lower.includes("order") || lower.includes("lead")) {
    icon = "fa-solid fa-receipt text-[#0B6E7B]";
    iconBg = "bg-[#0B6E7B]/10";
  } else if (lower.includes("attendee") || lower.includes("feedback")) {
    icon = "fa-solid fa-star text-[#EAB308]";
    iconBg = "bg-[#EAB308]/10";
  }

  return { value, label, icon, iconBg };
}

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
              {/* Executive Role & Core Competencies Card */}
              <div className="bg-gradient-to-br from-white via-[#FAFCFC] to-[#F2F8F7] border border-[#CCE5E3] p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-[#0B6E7B]/5 rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-12" />

                <div className="relative z-10 space-y-6">
                  {/* Top Bar: Role & Skills */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#E0EFEF] pb-5">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0B6E7B] animate-pulse" />
                        <span className="font-mono text-[11px] font-black text-[#0B6E7B] uppercase tracking-[0.18em]">
                          EXECUTIVE ROLE SPECIFICATION
                        </span>
                      </div>
                      <h4 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#0C2B31] tracking-tight">
                        {currentExp.role}
                      </h4>
                    </div>

                    {currentExp.tech && (
                      <div className="flex flex-wrap gap-2 items-center">
                        {currentExp.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-3.5 py-1.5 bg-white/90 backdrop-blur-sm border border-[#CCE5E3] text-[#0C2B31] font-mono text-[11px] uppercase rounded-full shadow-2xs font-bold hover:border-[#0B6E7B] transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Structured Section Cards */}
                  {currentExp.sections ? (
                    <div className="grid grid-cols-1 gap-5 pt-1">
                      {currentExp.sections.map((sec, sIdx) => {
                        const isAchievementSection = sec.title.toLowerCase().includes("achievement");

                        return (
                          <div
                            key={sIdx}
                            className={`rounded-2xl border transition-all duration-300 p-5 sm:p-7 space-y-4 ${
                              isAchievementSection
                                ? "bg-gradient-to-br from-[#F5FBFA] via-white to-[#EEF8F7] border-[#B2DCD7] shadow-sm"
                                : "bg-white border-[#E0EFEF] hover:border-[#0B6E7B]/30 shadow-xs"
                            }`}
                          >
                            {/* Section Header */}
                            <div className="flex items-center justify-between gap-3 border-b border-[#E7F3F2] pb-3">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-[#0B6E7B]/10 text-[#0B6E7B] font-narrow font-black text-xs sm:text-sm flex items-center justify-center shrink-0 border border-[#0B6E7B]/20">
                                  {String(sIdx + 1).padStart(2, "0")}
                                </div>
                                <h5 className="font-narrow text-base sm:text-lg font-black text-[#0C2B31] uppercase tracking-wide">
                                  {sec.title}
                                </h5>
                              </div>
                              {isAchievementSection && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B6E7B] text-white font-narrow text-[11px] font-black tracking-widest uppercase shadow-xs">
                                  <i className="fa-solid fa-trophy text-[10px]" />
                                  <span>IMPACT</span>
                                </span>
                              )}
                            </div>

                            {/* Section Items List */}
                            <div className="space-y-3.5">
                              {sec.items.map((item, iIdx) => {
                                if (typeof item === "string") {
                                  return (
                                    <div key={iIdx} className="flex items-start gap-3.5 text-sm sm:text-base text-[#2C4A51] leading-relaxed">
                                      <div className="w-5 h-5 rounded-full bg-[#0B6E7B]/10 text-[#0B6E7B] flex items-center justify-center shrink-0 mt-0.5 border border-[#0B6E7B]/20">
                                        <i className="fa-solid fa-check text-[10px]" />
                                      </div>
                                      <div className="flex-1 font-sans">
                                        <HighlightText text={item} />
                                      </div>
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div key={iIdx} className="space-y-3.5 pt-2">
                                      <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#0C2B31]">
                                        <div className="w-6 h-6 rounded-lg bg-[#0B6E7B] text-white flex items-center justify-center shrink-0 text-xs shadow-2xs">
                                          <i className="fa-solid fa-chart-simple" />
                                        </div>
                                        <span>{item.subtitle}</span>
                                      </div>

                                      {/* High-Impact Stat Bento Grid */}
                                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                                        {item.subitems.map((sub, subIdx) => {
                                          const parsed = parseMetric(sub);
                                          return (
                                            <div
                                              key={subIdx}
                                              className="bg-white border border-[#CCE5E3] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-[#0B6E7B] hover:-translate-y-0.5 transition-all duration-300 group/stat flex flex-col justify-between"
                                            >
                                              <div className="flex items-center justify-between gap-2 mb-3">
                                                <div className={`w-8 h-8 rounded-xl ${parsed.iconBg} flex items-center justify-center text-sm group-hover/stat:scale-110 transition-transform`}>
                                                  <i className={parsed.icon} />
                                                </div>
                                                <span className="font-mono text-[9px] uppercase font-black text-[#0B6E7B] tracking-widest px-2.5 py-0.5 bg-[#0B6E7B]/5 rounded-full border border-[#0B6E7B]/10">
                                                  VERIFIED
                                                </span>
                                              </div>
                                              <div>
                                                {parsed.value ? (
                                                  <>
                                                    <div className="font-display text-2xl sm:text-3xl font-black text-[#0C2B31] tracking-tight group-hover/stat:text-[#0B6E7B] transition-colors leading-none">
                                                      {parsed.value}
                                                    </div>
                                                    <div className="font-sans text-xs sm:text-sm font-semibold text-[#4E6E75] mt-1.5 leading-snug">
                                                      {parsed.label}
                                                    </div>
                                                  </>
                                                ) : (
                                                  <div className="font-narrow font-bold text-sm sm:text-base text-[#0C2B31]">
                                                    {sub}
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed">
                      <HighlightText text={currentExp.description} />
                    </p>
                  )}
                </div>
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
