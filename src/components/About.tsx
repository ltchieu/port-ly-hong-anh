import avatarImg from "../../assets/image/avatar.JPG";
import ScrollReveal from "./common/ScrollReveal";
import PixelSwap from "./common/PixelSwap";
import { coreCompetencies } from "../data/about";

interface AboutProps {
  setShowManifesto?: (show: boolean) => void;
}

export default function About({ setShowManifesto: _setShowManifesto }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white border-b border-[#CCE5E3] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Image and Huge Title */}
        <div className="lg:col-span-5 space-y-8 lg:ml-4">
          <ScrollReveal direction="up" delay={0.1}>
            <h3 className="font-display text-4xl sm:text-6xl md:text-7xl leading-none uppercase text-[#0C2B31] tracking-tighter">
              INTRODUCE
            </h3>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.25}>
            <div className="w-full sm:w-4/5 lg:w-full overflow-hidden rounded-xl border border-[#CCE5E3] shadow-sm group">
              <PixelSwap
                pixelSize={64}
                gap={0}
                pixelRadius={0}
                pixelSpin={0}
                pixelScale={0.35}
                duration={1400}
                pixelDuration={450}
                pattern="random"
                randomness={0}
                fade
                trigger="hover"
                aspectRatio="4 / 5"
                firstContent={
                  <div className="w-full h-full overflow-hidden bg-[#F0F8F7] relative">
                    <img
                      src={avatarImg}
                      alt="Portrait of Nguyen Ha Minh Khanh"
                      className="w-full h-full object-cover select-none"
                    />
                    <div className="absolute inset-0 bg-[#0B6E7B]/5 pointer-events-none"></div>
                    <div className="absolute bottom-3 right-3 bg-[#07262B]/90 border border-[#0B6E7B]/40 px-3 py-1.5 rounded-full text-white text-[10px] font-narrow font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                      <i className="fa-solid fa-arrow-pointer text-[#2DD4BF] text-xs"></i>
                      <span>Hover to Reveal</span>
                    </div>
                  </div>
                }
                secondContent={
                  <div className="w-full h-full bg-gradient-to-br from-[#07262B] via-[#0A3D44] to-[#051E22] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-[#0B6E7B]/40 shadow-xl select-none">
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center justify-between border-b border-[#0B6E7B]/40 pb-3">
                        <span className="font-narrow text-[11px] font-black text-[#2DD4BF] tracking-[0.2em] uppercase">
                          WORDS OF INTENT
                        </span>
                        <i className="fa-solid fa-quote-right text-lg text-[#2DD4BF]"></i>
                      </div>

                      <div className="space-y-3 pt-2">
                        <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white leading-snug">
                          &ldquo;See deeper. Grow wiser. Live brighter.&rdquo;
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed italic">
                          &ldquo;I believe meaningful brands begin with understanding. Creating compassionate value, always moving forward.&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-[#0B6E7B]/40 flex items-end justify-between">
                      <div className="space-y-0.5">
                        <span className="font-sans text-[12px] font-bold text-white block">
                          Nguyễn Hà Minh Khánh
                        </span>
                        <span className="font-narrow text-[10px] text-[#2DD4BF] uppercase tracking-wider block font-semibold">
                          Brand & Marketing Communications
                        </span>
                      </div>
                      <div className="font-cursive text-3xl text-[#2DD4BF] tracking-wide">
                        Minh Khanh
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Statement, Summary, Skills, and manifesto button */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-10">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-4 mt-[20px]">
                <p className="font-narrow text-xs font-black text-[#0B6E7B] uppercase tracking-[0.25em]">
                  Experience Summary
                </p>
                <div className="font-sans text-sm text-[#4E6E75] leading-relaxed max-w-xl space-y-3">
                  <p>
                    Working in Brand & Marketing Communications, with experience in delivering integrated communication, public relations, event marketing and multimedia productions across higher education and service industries.
                  </p>
                  <p>
                    Skilled in translating business objectives into communication strategies, aligning cross-functional stakeholders, and executing campaigns that enhance brand reputation, engagement and long-term value.
                  </p>
                  <p>
                    Currently pursuing an MBA to strengthen business acumen and deepen expertise in brand strategy, marketing management and customer experience.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Skills and Education Grid */}
            <ScrollReveal direction="up" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#CCE5E3]">
                <div className="space-y-4">
                  <p className="font-narrow text-xs font-black text-[#0B6E7B] uppercase tracking-[0.25em]">
                    CORE COMPETENCIES
                  </p>
                  <ul className="font-sans text-sm text-[#0C2B31] space-y-2">
                    {coreCompetencies.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full hologram-metal-bg flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="font-narrow text-xs font-black text-[#0B6E7B] uppercase tracking-[0.25em]">
                    Education
                  </p>
                  <div className="font-sans text-sm text-[#0C2B31] space-y-3">
                    <div>
                      <p className="font-bold">Western Sydney University</p>
                      <p className="text-[#4E6E75] text-xs">Master of Business Administration</p>
                      <p className="text-[#0B6E7B] text-[10px] mt-0.5 font-mono">2025 - Present</p>
                    </div>
                    <div className="h-px bg-[#CCE5E3]"></div>
                    <div>
                      <p className="font-bold">Ho Chi Minh City Open University</p>
                      <p className="text-[#4E6E75] text-xs">Bachelor of Business English</p>
                      <p className="text-[#4E6E75] text-xs">GPA: 3.16 / 4.0</p>
                      <p className="text-[#0B6E7B] text-[10px] mt-0.5 font-mono">2020 - 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
