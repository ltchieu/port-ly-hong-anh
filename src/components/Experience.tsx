import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "motion/react";
import { experiences } from "../data/experiences";
import { dnGroupData } from "../data/dnGroupData";
import { beneliftsData } from "../data/beneliftsData";
import { PANASONIC_WEBINAR_REPORT_URL, PANASONIC_WEBINAR_VIDEO_URL } from "../data/panasonicWebinarData";
import { AEON_BRIEF_VIDEO_URL, AEON_REELS_REPORT_URL } from "../data/aeonVietnamData";
import ScrollReveal from "./common/ScrollReveal";
import HighlightText from "./common/HighlightText";
import DNGroupExperienceShowcase from "./common/DNGroupExperienceShowcase";
import VLotusExperienceShowcase from "./common/VLotusExperienceShowcase";
import BeneliftsAsiaExperienceShowcase from "./common/BeneliftsAsiaExperienceShowcase";
import FreelanceExperienceShowcase from "./common/FreelanceExperienceShowcase";
import AeonExperienceShowcase from "./common/AeonExperienceShowcase";

interface ActionLink {
  label: string;
  url: string;
  icon: string;
  highlight?: boolean;
}

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

function getExperienceActionLinks(expId: string): ActionLink[] {
  switch (expId) {
    case "dn-group":
      return [
        
      ];

    case "v-lotus":
      return [
        {
          label: "Weekly Report (Details)",
          url: "https://docs.google.com/spreadsheets/d/1n-Lj-pgF6jiWC0A_rVl9sSk3Zn3s6hNOsEtsEipJCLk/edit?usp=sharing",
          icon: "fa-solid fa-chart-simple text-[#2DD4BF]",
          highlight: true,
        },
        {
          label: "Conservo Content Plan",
          url: "https://docs.google.com/spreadsheets/d/1NX2T20DUYthFjvFbkQrEXJMWTqgndg1k/edit?usp=sharing&ouid=115935600825419567163&rtpof=true&sd=true",
          icon: "fa-solid fa-bread-slice text-[#2DD4BF]",
        },
        {
          label: "Yoshinoya Content Plan",
          url: "https://docs.google.com/spreadsheets/d/1exNdp-espEwwhrTWQIJ0kUeHSCQVk46_kua6DSsVm2A/edit?usp=sharing",
          icon: "fa-solid fa-bowl-rice text-[#2DD4BF]",
        },
        {
          label: "Ussina Content Plan",
          url: "https://docs.google.com/spreadsheets/d/1W2VrQlxd1YcWlIVlrVDoTljeyrjdt3Wg/edit?usp=sharing&ouid=115935600825419567163&rtpof=true&sd=true",
          icon: "fa-solid fa-drumstick-bite text-[#2DD4BF]",
        },
      ];

    case "benelifts-asia":
      return [
        {
          label: "Post Drive (Benelifts)",
          url: beneliftsData.highlightPostsSection.beneliftsDriveUrl,
          icon: "fa-brands fa-google-drive text-[#2DD4BF]",
          highlight: true,
        },
        {
          label: "Post Drive (Casanova)",
          url: beneliftsData.highlightPostsSection.casanovaDriveUrl,
          icon: "fa-brands fa-google-drive text-[#2DD4BF]",
        },
        {
          label: "Benelifts SEO Plan",
          url: beneliftsData.websiteArticlesSection.beneliftsSeoPlanUrl,
          icon: "fa-solid fa-file-lines text-[#2DD4BF]",
        },
        {
          label: "Casanova SEO Plan",
          url: beneliftsData.websiteArticlesSection.casanovaSeoPlanUrl,
          icon: "fa-solid fa-file-lines text-[#2DD4BF]",
        },
      ];

    case "freelance-event-coordinator":
      return [
        {
          label: "PANASONIC Webinar Report",
          url: PANASONIC_WEBINAR_REPORT_URL,
          icon: "fa-solid fa-file-excel text-[#2DD4BF]",
          highlight: true,
        },
        {
          label: "YouTube Shorts Recap",
          url: PANASONIC_WEBINAR_VIDEO_URL,
          icon: "fa-brands fa-youtube text-[#FF4D4D]",
        },
      ];

    case "aeon-vietnam":
      return [
        {
          label: "Brief video AEON",
          url: AEON_BRIEF_VIDEO_URL,
          icon: "fa-solid fa-file-lines text-[#2DD4BF]",
          highlight: true,
        },
        {
          label: "Reels Report 2023",
          url: AEON_REELS_REPORT_URL,
          icon: "fa-solid fa-chart-pie text-[#2DD4BF]",
        },
      ];

    default:
      return [];
  }
}

interface ExperienceSectionProps {
  activeExperience?: string | null;
  setActiveExperience?: (id: string | null) => void;
  onSelectExperience?: (id: string) => void;
}

export default function ExperienceSection({
  activeExperience: controlledActiveExp,
  setActiveExperience: controlledSetActiveExp,
  onSelectExperience,
}: ExperienceSectionProps) {
  // Enforce single active item rule: only one experience item expanded at a time
  const [internalActiveExp, setInternalActiveExp] = useState<string | null>(null);
  const activeExperience = controlledActiveExp !== undefined ? controlledActiveExp : internalActiveExp;
  const setActiveExperience = controlledSetActiveExp || setInternalActiveExp;

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Track scroll progress inside the Experience section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Calculate position of the glowing runner node
  const lightTopPosition = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Scroll anchoring state — prevents visual jump when collapsing an item above the target
  const scrollAnchorRef = useRef<{
    targetId: string;
    anchorTop: number; // viewport-relative top to maintain
    rafId: number | null;
  } | null>(null);

  // Cleanup any active scroll anchor loop on unmount
  useEffect(() => {
    return () => {
      if (scrollAnchorRef.current?.rafId) {
        cancelAnimationFrame(scrollAnchorRef.current.rafId);
      }
    };
  }, []);

  /**
   * Scroll-Anchor Pattern:
   * When switching accordion items and the collapsing item is ABOVE the new target,
   * the exit animation removes height from above, pulling everything upward frame-by-frame.
   * Instead of pre-computing a fixed offset (which races against the animation),
   * we run a rAF loop that continuously corrects scroll drift to keep the target header
   * visually pinned in the viewport. After the exit animation ends, we stop the loop
   * and smooth-scroll to center the target.
   */
  const handleToggleExperience = useCallback(
    (id: string) => {
      const isCurrentlyOpen = activeExperience === id;

      if (isCurrentlyOpen) {
        // ─── Collapsing the currently open item ───
        // Stop any active scroll anchor
        if (scrollAnchorRef.current?.rafId) {
          cancelAnimationFrame(scrollAnchorRef.current.rafId);
          scrollAnchorRef.current = null;
        }

        const headerEl = headerRefs.current[id];
        if (headerEl) {
          const rect = headerEl.getBoundingClientRect();
          if (rect.top < 80 || rect.top > window.innerHeight - 100) {
            const targetY = window.scrollY + rect.top - 120;
            window.scrollTo({
              top: Math.max(0, Math.round(targetY)),
              behavior: "smooth",
            });
          }
        }
        setActiveExperience(null);
      } else {
        // ─── Expanding a new item ───
        const prevId = activeExperience;
        const targetHeaderEl = headerRefs.current[id];

        if (prevId && targetHeaderEl) {
          const prevIdx = experiences.findIndex((e) => e.id === prevId);
          const newIdx = experiences.findIndex((e) => e.id === id);

          if (prevIdx !== -1 && prevIdx < newIdx) {
            // Previous item is ABOVE the target → its collapse causes upward layout shift.
            // Pin the target header's current viewport position.
            const anchorTop = targetHeaderEl.getBoundingClientRect().top;

            // Stop any previous anchor loop
            if (scrollAnchorRef.current?.rafId) {
              cancelAnimationFrame(scrollAnchorRef.current.rafId);
            }

            scrollAnchorRef.current = { targetId: id, anchorTop, rafId: null };

            // Continuous scroll-anchor loop: on every frame, measure how much the
            // target header drifted and instantly compensate via scrollBy.
            const maintainAnchor = () => {
              const anchor = scrollAnchorRef.current;
              if (!anchor) return;

              const el = headerRefs.current[anchor.targetId];
              if (!el) {
                scrollAnchorRef.current = null;
                return;
              }

              const currentTop = el.getBoundingClientRect().top;
              const drift = currentTop - anchor.anchorTop;
              if (Math.abs(drift) > 0.5) {
                window.scrollBy({ left: 0, top: drift, behavior: "instant" });
              }

              anchor.rafId = requestAnimationFrame(maintainAnchor);
            };

            // Start the loop
            scrollAnchorRef.current.rafId = requestAnimationFrame(maintainAnchor);

            // Stop anchoring after the exit animation completes (350ms + small buffer),
            // then smooth-scroll to center the newly expanded header.
            setTimeout(() => {
              if (scrollAnchorRef.current?.rafId) {
                cancelAnimationFrame(scrollAnchorRef.current.rafId);
              }
              scrollAnchorRef.current = null;

              const el = headerRefs.current[id];
              if (el) {
                const rect = el.getBoundingClientRect();
                const targetY =
                  window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
                window.scrollTo({
                  top: Math.max(0, Math.round(targetY)),
                  behavior: "smooth",
                });
              }
            }, 420);
          } else {
            // Previous item is BELOW or same position → no upward shift concern
            requestAnimationFrame(() => {
              const el = headerRefs.current[id];
              if (el) {
                const rect = el.getBoundingClientRect();
                const targetY =
                  window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
                window.scrollTo({
                  top: Math.max(0, Math.round(targetY)),
                  behavior: "smooth",
                });
              }
            });
          }
        } else if (targetHeaderEl) {
          // No previous item was open — just scroll to center
          requestAnimationFrame(() => {
            const el = headerRefs.current[id];
            if (el) {
              const rect = el.getBoundingClientRect();
              const targetY =
                window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
              window.scrollTo({
                top: Math.max(0, Math.round(targetY)),
                behavior: "smooth",
              });
            }
          });
        }

        setActiveExperience(id);
      }

      if (onSelectExperience) {
        onSelectExperience(id);
      }
    },
    [activeExperience, setActiveExperience, onSelectExperience]
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 bg-[#F0F8F7] scroll-mt-20 border-b border-[#CCE5E3] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-16 gap-4">
            <div>
              <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-[0.2em] block uppercase mb-1">
                CAREER TRACK
              </span>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#0C2B31]">
                EXPERIENCE
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Static background timeline track line */}
        <div className="hidden lg:block absolute left-1/2 top-[180px] bottom-16 w-0.5 bg-[#CCE5E3] -translate-x-1/2 z-0 rounded-full"></div>

        {/* Scroll-driven active glowing timeline line */}
        <motion.div
          className="hidden lg:block absolute left-1/2 top-[180px] bottom-16 w-1 -translate-x-1/2 z-0 origin-top bg-gradient-to-b from-[#0A5C67] via-[#14B8A6] to-[#0A5C67] shadow-[0_0_12px_rgba(20,184,166,0.4)] rounded-full"
          style={{ scaleY: smoothProgress }}
        />

        {/* Shining light runner beam along timeline */}
        <div className="hidden lg:block absolute left-1/2 top-[180px] bottom-16 w-0 -translate-x-1/2 z-10 pointer-events-none">
          <motion.div
            className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center"
            style={{ top: lightTopPosition }}
          >
            {/* Outer radial ambient glow halo */}
            <div className="absolute w-12 h-12 rounded-full bg-white/90 blur-md animate-pulse shadow-[0_0_30px_10px_rgba(20,184,166,0.5)]"></div>
            {/* Horizontal light flare ray */}
            <div className="absolute w-24 h-[2px] bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent blur-[0.5px]"></div>
            {/* Core shining diamond particle */}
            <div className="w-4 h-4 rounded-full bg-white border-2 border-[#0B6E7B] shadow-[0_0_20px_4px_rgba(20,184,166,0.9)] relative z-20"></div>
          </motion.div>
        </div>

        <div className="space-y-8 lg:space-y-6 relative z-10">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 1;
            const isOpen = activeExperience === exp.id;
            const actionLinks = getExperienceActionLinks(exp.id);

            return (
              <ScrollReveal
                key={exp.id}
                direction={isEven ? "left" : "right"}
                delay={idx * 0.08}
                className="py-2"
              >
                <div
                  className={`flex flex-col lg:flex-row ${
                    isOpen ? "justify-center" : isEven ? "lg:justify-end" : "lg:justify-start"
                  } relative w-full transition-all duration-300`}
                >
                  {/* Point node on timeline axis */}
                  {!isOpen && (
                    <div className="hidden lg:block absolute left-1/2 top-8 w-3.5 h-3.5 rounded-full bg-[#0B6E7B] border-2 border-white -translate-x-1/2 z-20 transition-all duration-300 shadow-sm"></div>
                  )}

                  <div
                    data-experience-id={exp.id}
                    className={`w-full ${
                      isOpen ? "lg:w-full z-30 bg-white shadow-xl border-[#0B6E7B]/40" : "lg:w-[46%] bg-white/90 shadow-xs"
                    } backdrop-blur-sm border border-[#CCE5E3] p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg scroll-mt-24`}
                  >
                    {/* Header trigger */}
                    <div
                      ref={(el) => {
                        headerRefs.current[exp.id] = el;
                      }}
                      data-experience-header={exp.id}
                      onClick={() => handleToggleExperience(exp.id)}
                      className="cursor-pointer flex items-center justify-between gap-4 select-none group"
                    >
                      <div className="space-y-1">
                        <span className="font-narrow text-sm sm:text-base font-black hologram-metal-text tracking-widest block">
                          {exp.index} / {exp.role}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase leading-none text-[#0C2B31] group-hover:text-[#0B6E7B] transition-colors">
                          {exp.company}
                        </h3>
                        <p className="font-narrow text-xs sm:text-sm font-bold text-[#4E6E75] tracking-wider uppercase">
                          {exp.location}
                        </p>
                      </div>

                      {/* Expand / Collapse Button */}
                      <button
                        type="button"
                        className={`w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer ${
                          isOpen
                            ? "rotate-45 border-[#0B6E7B] bg-[#0B6E7B] text-white shadow-sm"
                            : "border-[#CCE5E3] text-[#0C2B31] group-hover:border-[#0B6E7B] group-hover:bg-[#0B6E7B] group-hover:text-white"
                        }`}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${exp.company} details`}
                      >
                        <i className="fa-solid fa-plus text-sm"></i>
                      </button>
                    </div>

                    {/* Expandable Content Container */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`content-${exp.id}`}
                          ref={(el) => {
                            contentRefs.current[exp.id] = el;
                          }}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflowAnchor: "none" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-8 space-y-10 border-t border-[#CCE5E3] mt-6">
                            
                            {/* TOP LEFT ACTION DOCUMENT LINKS */}
                            {actionLinks.length > 0 && (
                              <div className="space-y-2">
                                <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-wider uppercase block">
                                  Documents &amp; Reports:
                                </span>
                                <div className="flex flex-wrap items-center gap-2.5">
                                  {actionLinks.map((link, lIdx) => (
                                    <a
                                      key={lIdx}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className={`px-3.5 py-2 rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs hover:scale-105 cursor-pointer ${
                                        link.highlight
                                          ? "bg-[#0B6E7B] hover:bg-[#08545E] text-white border border-[#2DD4BF]/40"
                                          : "bg-[#F0F8F7] hover:bg-white text-[#0C2B31] border border-[#CCE5E3] hover:border-[#0B6E7B]"
                                      }`}
                                    >
                                      <i className={link.icon}></i>
                                      <span>{link.label}</span>
                                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-70"></i>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Executive Role Spec & Tech Badges */}
                            <div className="space-y-4 pt-2">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#CCE5E3] pb-4">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#0B6E7B] animate-pulse" />
                                    <span className="font-mono text-[11px] font-black text-[#0B6E7B] uppercase tracking-[0.18em]">
                                      EXECUTIVE ROLE SPECIFICATION
                                    </span>
                                  </div>
                                  <h4 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#0C2B31] tracking-tight">
                                    {exp.role}
                                  </h4>
                                </div>

                                {exp.tech && (
                                  <div className="flex flex-wrap gap-2 items-center">
                                    {exp.tech.map((t, tIdx) => (
                                      <span
                                        key={tIdx}
                                        className="px-3.5 py-1.5 bg-[#F0F8F7] border border-[#CCE5E3] text-[#0C2B31] font-mono text-[11px] uppercase rounded-full shadow-2xs font-bold hover:border-[#0B6E7B] transition-colors"
                                      >
                                        {t}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Structured Sections (Clean unboxed layout without container cards) */}
                              {exp.sections ? (
                                <div className="space-y-8 pt-2">
                                  {exp.sections.map((sec, sIdx) => {
                                    const isAchievementSection = sec.title.toLowerCase().includes("achievement");

                                    return (
                                      <div
                                        key={sIdx}
                                        className="space-y-4 pt-4 border-t border-[#E0EFEF] first:border-t-0 first:pt-0"
                                      >
                                        {/* Section Header */}
                                        <div className="flex items-center justify-between gap-3 pb-2 border-b border-[#E7F3F2]">
                                          <div className="flex items-center gap-3">
                                            <div className="w-7 h-7 rounded-lg bg-[#0B6E7B]/10 text-[#0B6E7B] flex items-center justify-center shrink-0 border border-[#0B6E7B]/20">
                                              <i className={isAchievementSection ? "fa-solid fa-trophy text-xs" : "fa-solid fa-layer-group text-xs"}></i>
                                            </div>
                                            <h5 className="font-narrow text-base sm:text-lg font-black text-[#0C2B31] uppercase tracking-wide">
                                              {sec.title}
                                            </h5>
                                          </div>
                                          {isAchievementSection && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B6E7B] text-white font-narrow text-[11px] font-black tracking-widest uppercase shadow-xs">
                                              <i className="fa-solid fa-star text-[10px]" />
                                              <span>KEY IMPACT</span>
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

                                                  {/* High-Impact Stat Grid */}
                                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                                                    {item.subitems.map((sub, subIdx) => {
                                                      const parsed = parseMetric(sub);
                                                      return (
                                                        <div
                                                          key={subIdx}
                                                          className="bg-[#FAFCFC] border border-[#CCE5E3] rounded-xl p-4 sm:p-5 shadow-2xs hover:shadow-md hover:border-[#0B6E7B] hover:-translate-y-0.5 transition-all duration-300 group/stat flex flex-col justify-between"
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
                                  <HighlightText text={exp.description} />
                                </p>
                              )}
                            </div>

                            {/* INTERACTIVE SHOWCASE COMPONENT */}
                            <div className="pt-6 border-t border-[#CCE5E3]">
                              {exp.id === "dn-group" ? (
                                <DNGroupExperienceShowcase />
                              ) : exp.id === "v-lotus" ? (
                                <VLotusExperienceShowcase />
                              ) : exp.id === "benelifts-asia" ? (
                                <BeneliftsAsiaExperienceShowcase />
                              ) : exp.id === "freelance-event-coordinator" ? (
                                <FreelanceExperienceShowcase />
                              ) : exp.id === "aeon-vietnam" ? (
                                <AeonExperienceShowcase />
                              ) : (
                                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-[#E7F3F2] relative group border border-[#CCE5E3]">
                                  <img
                                    src={exp.image}
                                    alt={`${exp.company} campaign`}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                                  />
                                </div>
                              )}
                            </div>

                            {/* Bottom Collapse Button */}
                            <div className="pt-6 border-t border-[#CCE5E3] flex justify-end">
                              <button
                                type="button"
                                onClick={() => handleToggleExperience(exp.id)}
                                className="px-5 py-2.5 bg-[#F0F8F7] hover:bg-[#0B6E7B] text-[#0B6E7B] hover:text-white border border-[#CCE5E3] hover:border-[#0B6E7B] rounded-xl font-narrow text-xs font-black tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
                              >
                                <i className="fa-solid fa-chevron-up text-xs"></i>
                                <span>COLLAPSE DETAILS</span>
                              </button>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
