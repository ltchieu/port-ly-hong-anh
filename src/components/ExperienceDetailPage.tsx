import { useEffect, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { experiences } from "../data/experiences";
import { dnGroupData } from "../data/dnGroupData";
import { beneliftsData } from "../data/beneliftsData";
import { PANASONIC_WEBINAR_REPORT_URL, PANASONIC_WEBINAR_VIDEO_URL } from "../data/panasonicWebinarData";
import { AEON_BRIEF_VIDEO_URL, AEON_REELS_REPORT_URL } from "../data/aeonVietnamData";
import HeaderNav from "./common/HeaderNav";
import HighlightText from "./common/HighlightText";
import DNGroupExperienceShowcase from "./common/DNGroupExperienceShowcase";
import VLotusExperienceShowcase from "./common/VLotusExperienceShowcase";
import BeneliftsAsiaExperienceShowcase from "./common/BeneliftsAsiaExperienceShowcase";
import FreelanceExperienceShowcase from "./common/FreelanceExperienceShowcase";
import AeonExperienceShowcase from "./common/AeonExperienceShowcase";

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

interface ActionLink {
  label: string;
  url: string;
  icon: string;
  highlight?: boolean;
}

export default function ExperienceDetailPage() {
  const { experienceId } = useParams<{ experienceId: string }>();
  const navigate = useNavigate();

  const currentExp = useMemo(() => {
    return experiences.find((e) => e.id === experienceId) || experiences[0];
  }, [experienceId]);

  // Scroll to top whenever route param changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [experienceId]);

  const handleNavigateHome = useCallback(() => {
    sessionStorage.setItem("portfolio_from_detail", "true");
    navigate("/");
  }, [navigate]);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Compute top left action links for the active experience
  const topActionLinks: ActionLink[] = useMemo(() => {
    if (!currentExp) return [];

    switch (currentExp.id) {
      case "dn-group":
        return [
          {
            label: "Content Plan",
            url: dnGroupData.overview.contentPlanUrl,
            icon: "fa-solid fa-file-lines text-[#2DD4BF]",
            highlight: true,
          },
          {
            label: "Nha khoa Shark x DUCM (Details)",
            url: dnGroupData.overview.ducmDetailsUrl,
            icon: "fa-solid fa-table text-[#2DD4BF]",
          },
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
  }, [currentExp]);

  return (
    <div className="bg-[#FAFCFC] text-[#0C2B31] font-sans antialiased min-h-screen selection:bg-[#0B6E7B] selection:text-white pb-24">
      {/* 1. STICKY HEADER NAVIGATION BAR */}
      <HeaderNav
        onNavigateHome={handleNavigateHome}
        caseStudyText={currentExp.company}
        badgeText={currentExp.location}
      />

      {/* 2. MAIN EXPERIENCE CONTENT CONTAINER */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 space-y-10">
        
        {/* Top Header Row: Company Title & Top-Left Action Documents */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#CCE5E3]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B6E7B] text-white flex items-center justify-center shrink-0 shadow-md">
                <i className={`${experienceIcons[currentExp.id] || "fa-solid fa-briefcase"} text-base`}></i>
              </div>
              <div>
                <span className="font-narrow text-xs font-black hologram-metal-text tracking-widest uppercase block">
                  EXPERIENCE SHOWCASE
                </span>
                <p className="font-narrow text-xs font-bold text-[#4E6E75] uppercase">
                  {currentExp.location}
                </p>
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-[#0C2B31] leading-tight">
              {currentExp.company}
            </h1>

            {/* TOP LEFT ACTION DOCUMENT LINKS */}
            {topActionLinks.length > 0 && (
              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-wider uppercase mr-1 hidden sm:inline-block">
                    Documents &amp; Reports:
                  </span>
                  {topActionLinks.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3.5 py-2 rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs hover:scale-105 cursor-pointer ${
                        link.highlight
                          ? "bg-[#0B6E7B] hover:bg-[#08545E] text-white border border-[#2DD4BF]/40"
                          : "bg-white hover:bg-[#F0F8F7] text-[#0C2B31] border border-[#CCE5E3] hover:border-[#0B6E7B]"
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
          </div>

          {/* Quick experience switch dropdown on mobile/tablet */}
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <span className="font-mono text-xs text-[#4E6E75] bg-[#F0F8F7] px-3.5 py-1.5 rounded-full border border-[#CCE5E3] font-bold">
              {currentExp.role}
            </span>
          </div>
        </div>

        {/* Executive Role & Core Competencies Overview (Container Card Removed) */}
        <section className="space-y-8 pt-2">
          {/* Top Bar: Role & Skills */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#CCE5E3] pb-5">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0B6E7B] animate-pulse" />
                <span className="font-mono text-[11px] font-black text-[#0B6E7B] uppercase tracking-[0.18em]">
                  EXECUTIVE ROLE SPECIFICATION
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#0C2B31] tracking-tight">
                {currentExp.role}
              </h2>
            </div>

            {currentExp.tech && (
              <div className="flex flex-wrap gap-2 items-center">
                {currentExp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-white border border-[#CCE5E3] text-[#0C2B31] font-mono text-[11px] uppercase rounded-full shadow-2xs font-bold hover:border-[#0B6E7B] transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Structured Sections without container cards */}
          {currentExp.sections ? (
            <div className="space-y-8">
              {currentExp.sections.map((sec, sIdx) => {
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
                        <h3 className="font-narrow text-base sm:text-lg font-black text-[#0C2B31] uppercase tracking-wide">
                          {sec.title}
                        </h3>
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
                                      className="bg-white border border-[#CCE5E3] rounded-xl p-4 sm:p-5 shadow-2xs hover:shadow-md hover:border-[#0B6E7B] hover:-translate-y-0.5 transition-all duration-300 group/stat flex flex-col justify-between"
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
        </section>

        {/* 3. SHOWCASE CONTENT SECTION */}
        <section className="space-y-6">
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
        </section>

        {/* 4. EXPERIENCE QUICK-SWITCH TABS & BOTTOM RETURN BAR */}
        <section className="pt-12 border-t border-[#CCE5E3] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-widest uppercase block mb-1">
                SWITCH EXPERIENCE
              </span>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31]">
                Explore Other Career Milestones
              </h4>
            </div>

            <button
              onClick={handleNavigateHome}
              className="px-5 py-2.5 bg-[#0B6E7B] text-white font-narrow text-xs font-black tracking-widest uppercase rounded-xl hover:bg-[#08545E] transition-all cursor-pointer shadow-xs flex items-center gap-2"
            >
              <i className="fa-solid fa-arrow-left text-xs"></i>
              <span>RETURN TO PORTFOLIO</span>
            </button>
          </div>

          {/* Quick-switch buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {experiences.map((exp) => {
              const isSelected = exp.id === currentExp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => navigate(`/experience/${exp.id}`)}
                  className={`p-4 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between gap-3 ${
                    isSelected
                      ? "bg-[#0B6E7B] text-white border-[#0B6E7B] shadow-md"
                      : "bg-white hover:bg-[#F0F8F7] text-[#0C2B31] border-[#CCE5E3] hover:border-[#0B6E7B] shadow-2xs"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs ${
                      isSelected ? "bg-white/20 text-white" : "bg-[#F0F8F7] text-[#0B6E7B]"
                    }`}>
                      <i className={experienceIcons[exp.id] || "fa-solid fa-briefcase"}></i>
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse"></span>
                    )}
                  </div>
                  <div>
                    <span className={`font-narrow text-[11px] font-bold uppercase tracking-wider block ${
                      isSelected ? "text-white/80" : "text-[#4E6E75]"
                    }`}>
                      {exp.role}
                    </span>
                    <h5 className="font-display text-sm uppercase tracking-tight line-clamp-1 leading-snug">
                      {exp.company}
                    </h5>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      {/* Floating back-to-top button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={handleScrollTop}
          className="w-12 h-12 rounded-full bg-[#0B6E7B] text-white shadow-xl flex items-center justify-center hover:bg-[#08545E] transition-all hover:scale-110 active:scale-95 cursor-pointer"
          title="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up text-sm"></i>
        </button>
      </div>
    </div>
  );
}
