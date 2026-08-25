import avatarImg from "../../assets/image/avatar.JPG";
import aboutImg from "../../assets/image/about.jpg";
import ScrollReveal from "./common/ScrollReveal";
import PixelSwap from "./common/PixelSwap";
import {
  skillGroups,
  careerObjectives,
  educationInfo,
  contactInfo,
  introBio
} from "../data/about";

interface AboutProps {
  setShowManifesto?: (show: boolean) => void;
}

export default function About({ setShowManifesto: _setShowManifesto }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white border-b border-[#CCE5E3] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Avatar Photo & Reveal Quote + Contact Card */}
        <div className="lg:col-span-5 space-y-8 lg:ml-4">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center gap-3">
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl leading-none uppercase text-[#0C2B31] tracking-tighter">
                INTRODUCE
              </h3>
            </div>
          </ScrollReveal>

          {/* Interactive PixelSwap Card with avatar.JPG and hover quote */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="w-full sm:w-4/5 lg:w-full overflow-hidden rounded-2xl border border-[#CCE5E3] shadow-md group bg-[#F0F8F7]">
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
                      alt="Ly Hong Anh - Creative Enthusiast"
                      className="w-full h-full object-cover select-none"
                    />
                    <div className="absolute inset-0 bg-[#0B6E7B]/5 pointer-events-none"></div>
                    <div className="absolute bottom-3 right-3 bg-[#07262B]/90 border border-[#0B6E7B]/40 px-3 py-1.5 rounded-full text-white text-[10px] font-narrow font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md backdrop-blur-xs">
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
                          &ldquo;I am prepared for new challenges and eagerly anticipate engaging in creative projects.&rdquo;
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed italic">
                          &ldquo;Every project I participate in is an opportunity to learn, experiment, and deliver meaningful results for the business.&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-[#0B6E7B]/40 flex items-end justify-between">
                      <div className="space-y-0.5">
                        <span className="font-sans text-[12px] font-bold text-white block">
                          Lý Hồng Anh
                        </span>
                        <span className="font-narrow text-[10px] text-[#2DD4BF] uppercase tracking-wider block font-semibold">
                          Marketing Executive
                        </span>
                      </div>
                      <div className="font-cursive text-3xl text-[#2DD4BF] tracking-wide">
                        Hong Anh
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Statement, Summary, Objectives, Education, and Skills */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-8">

            {/* Introduction & Greeting */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-4">
                <h4 className="font-display text-2xl sm:text-3xl text-[#0C2B31] uppercase tracking-tight">
                  {introBio.greeting}
                </h4>
                <div className="font-sans text-sm sm:text-base text-[#4E6E75] leading-relaxed space-y-3 max-w-2xl">
                  {introBio.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Career Objective */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-[#FAFCFC] border border-[#CCE5E3] rounded-xl p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#CCE5E3] pb-3">
                  <span className="font-narrow text-xs font-black text-[#0B6E7B] uppercase tracking-[0.25em] flex items-center gap-2">
                    <i className="fa-solid fa-bullseye text-[#0B6E7B]"></i>
                    CAREER OBJECTIVE
                  </span>
                  <span className="font-narrow text-[11px] font-bold text-[#4E6E75] uppercase tracking-wider">
                    Marketing Executive
                  </span>
                </div>
                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#0C2B31] leading-relaxed">
                  <p>
                    <strong className="text-[#0B6E7B] font-bold">Short-term:</strong>{" "}
                    <span className="text-[#4E6E75]">{careerObjectives.shortTerm}</span>
                  </p>
                  <p>
                    <strong className="text-[#0B6E7B] font-bold">Long-term:</strong>{" "}
                    <span className="text-[#4E6E75]">{careerObjectives.longTerm}</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Education & Skills Grid */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">

                {/* Education Card with Bachelor Degree photo */}
                <div className="md:col-span-5 bg-[#FAFCFC] border border-[#CCE5E3] rounded-xl p-5 space-y-4 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-[#CCE5E3] pb-2.5">
                      <i className="fa-solid fa-graduation-cap text-[#0B6E7B] text-sm"></i>
                      <span className="font-narrow text-xs font-black text-[#0B6E7B] uppercase tracking-[0.25em]">
                        EDUCATION
                      </span>
                    </div>
                    <div className="flex items-start gap-3 pt-1">
                      <img
                        src={aboutImg}
                        alt="Ly Hong Anh - Degree of Bachelor Graduation"
                        className="w-16 h-20 object-cover rounded-lg border border-[#CCE5E3] shadow-xs flex-shrink-0"
                      />
                      <div className="space-y-1">
                        <p className="font-bold text-[#0C2B31] text-xs sm:text-sm leading-snug">
                          {educationInfo.institution}
                        </p>
                        <p className="text-[#0B6E7B] text-[11px] font-mono font-medium">
                          {educationInfo.period}
                        </p>
                        <p className="text-[#4E6E75] text-xs">
                          Major: <span className="font-semibold text-[#0C2B31]">{educationInfo.major}</span>
                        </p>
                        <p className="text-[#4E6E75] text-xs">
                          GPA: <span className="font-semibold text-[#0B6E7B]">{educationInfo.gpa}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Card */}
                <div className="md:col-span-7 bg-[#FAFCFC] border border-[#CCE5E3] rounded-xl p-6 space-y-4 shadow-xs">
                  <div className="flex items-center gap-2 border-b border-[#CCE5E3] pb-2.5">
                    <i className="fa-solid fa-wand-magic-sparkles text-[#0B6E7B] text-sm"></i>
                    <span className="font-narrow text-xs font-black text-[#0B6E7B] uppercase tracking-[0.25em]">
                      SKILLS
                    </span>
                  </div>
                  <ul className="font-sans text-xs sm:text-sm text-[#0C2B31] space-y-3">
                    {skillGroups.map((group, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E7B] flex-shrink-0 mt-1.5"></span>
                        <div>
                          <strong className="text-[#0C2B31] font-bold">{group.name}:</strong>{" "}
                          <span className="text-[#4E6E75]">{group.details}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
