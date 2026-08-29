import avatarImg from "../../assets/image/avatar.JPG";
import aboutImg from "../../assets/image/about.jpg";
import ScrollReveal from "./common/ScrollReveal";
import PixelSwap from "./common/PixelSwap";
import {
  coreCompetencies,
  toolsAndPlatforms,
  executiveStatement,
  educationInfo,
  introBio
} from "../data/about";

interface AboutProps {
  setShowManifesto?: (show: boolean) => void;
}

export default function About({ setShowManifesto: _setShowManifesto }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white border-b border-[#CCE5E3] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column: Avatar Photo & Interactive Reveal Executive Statement */}
        <div className="lg:col-span-5 space-y-6 lg:ml-2">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#0B6E7B] font-bold tracking-widest uppercase">01 /</span>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl leading-none uppercase text-[#0C2B31] tracking-tighter">
                INTRODUCE
              </h3>
            </div>
          </ScrollReveal>

          {/* Interactive PixelSwap Card with avatar.JPG and hover quote */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="w-full sm:w-4/5 lg:w-full overflow-hidden rounded-2xl border border-[#CCE5E3] shadow-lg group bg-[#F0F8F7]">
              <PixelSwap
                pixelSize={56}
                gap={0}
                pixelRadius={0}
                pixelSpin={0}
                pixelScale={0.35}
                duration={1300}
                pixelDuration={400}
                pattern="random"
                randomness={0}
                fade
                trigger="hover"
                aspectRatio="4 / 5"
                firstContent={
                  <div className="w-full h-full overflow-hidden bg-[#F0F8F7] relative">
                    <img
                      src={avatarImg}
                      alt="Ly Hong Anh - Marketing & Content Strategist"
                      className="w-full h-full object-cover select-none scale-[1.01] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07262B]/85 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="text-white space-y-0.5">
                        <span className="font-display text-base uppercase tracking-tight block drop-shadow-sm">
                          Lý Hồng Anh
                        </span>
                        <span className="font-narrow text-[11px] text-[#2DD4BF] uppercase tracking-wider block font-semibold drop-shadow-sm">
                          Content Marketing &amp; Strategy
                        </span>
                      </div>
                      
                      <div className="bg-[#07262B]/90 border border-[#0B6E7B]/50 px-3 py-1.5 rounded-full text-white text-[10px] font-narrow font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md backdrop-blur-xs">
                        <i className="fa-solid fa-arrow-pointer text-[#2DD4BF] text-xs"></i>
                        <span>Hover to Reveal</span>
                      </div>
                    </div>
                  </div>
                }
                secondContent={
                  <div className="w-full h-full bg-gradient-to-br from-[#062024] via-[#09353B] to-[#04171A] text-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-[#0B6E7B]/40 shadow-2xl select-none">
                    {/* Ambient subtle glow */}
                    <div className="absolute -top-12 -right-12 w-52 h-52 bg-[#14B8A6]/15 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#0B6E7B]/20 rounded-full blur-2xl pointer-events-none"></div>

                    {/* Top Header & Statement */}
                    <div className="relative z-10 space-y-3.5">
                      <div className="flex items-center justify-between border-b border-[#0B6E7B]/40 pb-2.5">
                        <span className="font-narrow text-[11px] font-black text-[#2DD4BF] tracking-[0.2em] uppercase bg-[#0B6E7B]/30 border border-[#2DD4BF]/30 px-2.5 py-0.5 rounded">
                          {executiveStatement.badge}
                        </span>
                        <i className="fa-solid fa-quote-right text-lg text-[#2DD4BF]"></i>
                      </div>

                      {/* Tagline / Subtitle */}
                      <p className="font-narrow text-xs sm:text-[13px] text-[#80E8DD] font-bold uppercase tracking-wider leading-snug">
                        {executiveStatement.tagline}
                      </p>

                      {/* Highlighted Quote */}
                      <blockquote className="border-l-2 border-[#2DD4BF] pl-3.5 py-1 bg-white/5 rounded-r-lg">
                        <p className="font-serif italic text-xs sm:text-sm md:text-[14px] leading-snug text-white font-medium">
                          &ldquo;{executiveStatement.quote}&rdquo;
                        </p>
                      </blockquote>

                      {/* Narrative Paragraphs */}
                      <div className="space-y-2.5 pt-1 text-[11px] sm:text-xs leading-relaxed text-white/90">
                        <p>
                          {executiveStatement.paragraphs[0]}
                        </p>
                        <p className="text-white/80">
                          {executiveStatement.paragraphs[1]}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Motto & Author Signature */}
                    <div className="relative z-10 pt-3 border-t border-[#0B6E7B]/40 space-y-2">
                      <p className="text-[11px] sm:text-xs text-[#2DD4BF] font-medium italic leading-tight">
                        {executiveStatement.motto}
                      </p>
                      <div className="flex items-end justify-between pt-1">
                        <div className="space-y-0.5">
                          <span className="font-sans text-xs sm:text-sm font-bold text-white block">
                            {executiveStatement.author}
                          </span>
                          <span className="font-narrow text-[9px] sm:text-[10px] text-[#2DD4BF] uppercase tracking-wider block font-semibold">
                            {executiveStatement.role}
                          </span>
                        </div>
                        <div className="font-cursive text-2xl sm:text-3xl text-[#2DD4BF] tracking-wide">
                          Hong Anh
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Experience Summary, Divider, and 3-Column List (Competencies, Tools, Education) */}
        <div className="lg:col-span-7 space-y-8">

          {/* Experience Summary */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-4">
              <span className="font-narrow text-xs font-black text-[#4E6E75] uppercase tracking-[0.25em] block">
                EXPERIENCE SUMMARY
              </span>

              {/* Main Bio Paragraphs */}
              <div className="font-sans text-sm sm:text-[15px] text-[#4E6E75] leading-relaxed space-y-4">
                <p>
                  {introBio.paragraphs[0]}
                </p>
                <p>
                  {introBio.paragraphs[1]}
                </p>
                <p>
                  {introBio.paragraphs[2]}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Horizontal Divider Line */}
          <div className="border-t border-[#CCE5E3] pt-6">
            <ScrollReveal direction="up" delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

                {/* Column 1: Core Competencies (List with colored dots) */}
                <div className="space-y-4">
                  <span className="font-narrow text-xs font-black text-[#0C2B31] uppercase tracking-[0.2em] block">
                    CORE COMPETENCIES
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-[#0C2B31]">
                    {coreCompetencies.map((comp, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 group">
                        <span className="w-2 h-2 rounded-full bg-[#14B8A6] flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                        <span className="font-medium group-hover:text-[#0B6E7B] transition-colors">{comp.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Tools & Platforms (List with tool icons preserved) */}
                <div className="space-y-4">
                  <span className="font-narrow text-xs font-black text-[#0C2B31] uppercase tracking-[0.2em] block">
                    TOOLS &amp; PLATFORMS
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-[#0C2B31]">
                    {toolsAndPlatforms.map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 group">
                        <span className="w-5 flex items-center justify-center text-[#0B6E7B] group-hover:scale-110 flex-shrink-0 text-sm transition-transform">
                          <i className={tool.icon}></i>
                        </span>
                        <span className="font-medium group-hover:text-[#0B6E7B] transition-colors">{tool.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Education */}
                <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                  <span className="font-narrow text-xs font-black text-[#0C2B31] uppercase tracking-[0.2em] block">
                    EDUCATION
                  </span>
                  <div className="space-y-3.5 text-xs sm:text-[13.5px]">
                    <div className="space-y-1">
                      <p className="font-bold text-[#0C2B31] text-sm sm:text-[15px] leading-snug">
                        {educationInfo.institution}
                      </p>
                      <p className="text-[#4E6E75] font-medium">
                        Bachelor of {educationInfo.major}
                      </p>
                      <p className="text-[#4E6E75]">
                        GPA: <span className="font-bold text-[#0B6E7B]">{educationInfo.gpa}</span>
                      </p>
                      <p className="text-[#0B6E7B] font-mono text-[11px] font-medium pt-0.5">
                        {educationInfo.period}
                      </p>
                    </div>

                    {/* Degree Photo Thumbnail */}
                    <div className="pt-1">
                      <img
                        src={aboutImg}
                        alt="Ly Hong Anh - Degree of Bachelor Graduation"
                        className="w-20 h-24 object-cover rounded-lg border border-[#CCE5E3] shadow-xs"
                      />
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


