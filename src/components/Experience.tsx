import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { experiences } from "../data/experiences";
import ScrollReveal from "./common/ScrollReveal";

interface ExperienceSectionProps {
  activeExperience?: string | null;
  setActiveExperience: (id: string | null) => void;
  onSelectExperience?: (id: string) => void;
}

export default function ExperienceSection({
  setActiveExperience,
  onSelectExperience,
}: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleOpenExperience = (id: string) => {
    if (onSelectExperience) {
      onSelectExperience(id);
    } else {
      setActiveExperience(id);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 bg-[#F0F8F7] scroll-mt-20 border-b border-[#CCE5E3] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 relative">
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

        <div className="space-y-8 lg:space-y-0 relative z-10">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <ScrollReveal
                key={exp.id}
                direction={isEven ? "left" : "right"}
                delay={idx * 0.1}
                className="py-4"
              >
                <div
                  className={`flex flex-col lg:flex-row ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  } relative w-full`}
                >
                  {/* Point node on timeline axis */}
                  <div className="hidden lg:block absolute left-1/2 top-8 w-3.5 h-3.5 rounded-full bg-[#0B6E7B] border-2 border-white -translate-x-1/2 z-20 transition-all duration-300 shadow-sm group-hover:scale-125"></div>

                  <div
                    data-experience-id={exp.id}
                    className="w-full lg:w-[46%] bg-white/90 backdrop-blur-sm border border-[#CCE5E3] p-6 md:p-8 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg scroll-mt-24 cursor-pointer group"
                    onClick={() => handleOpenExperience(exp.id)}
                  >
                    {/* Header trigger */}
                    <div
                      data-experience-header={exp.id}
                      className="cursor-pointer flex items-center justify-between gap-4 select-none"
                    >
                      <div className="space-y-1">
                        <span className="font-narrow text-sm sm:text-base font-black hologram-metal-text tracking-widest block">
                          {exp.index} / {exp.role}
                        </span>
                        <h5 className="font-display text-xl sm:text-2xl uppercase leading-none text-[#0C2B31] group-hover:text-[#0B6E7B] transition-colors">
                          {exp.company}
                        </h5>
                        <p className="font-narrow text-xs sm:text-sm font-bold text-[#4E6E75] tracking-wider uppercase">
                          {exp.location}
                        </p>
                      </div>

                      {/* Plus icon button */}
                      <button
                        className="p-2 rounded-full border border-[#CCE5E3] group-hover:border-[#0B6E7B] group-hover:bg-[#0B6E7B] group-hover:text-white transition-all duration-300 text-[#0C2B31] cursor-pointer"
                        aria-label={`Open ${exp.company} details`}
                      >
                        <i className="fa-solid fa-plus text-sm"></i>
                      </button>
                    </div>
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
