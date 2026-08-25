import ScrollReveal from "./common/ScrollReveal";
import SpecularButton from "./common/SpecularButton";
import { contactInfo } from "../data/about";

export default function Footer() {
  return (
    <>
      <section id="contact" className="py-24 bg-[#07262B] text-white scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase leading-[0.8] text-white tracking-tight">
                  LET&apos;S WORK TOGETHER<br />
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="font-narrow text-xl text-white/70 max-w-md">
                  Always open to new opportunities, creative collaborations, and projects that drive impactful marketing and business growth.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <a
                    id="cta-say-hello"
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-3 hologram-metal-bg text-white px-8 py-4 font-narrow text-xs font-black tracking-[0.2em] uppercase rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg group cursor-pointer"
                  >
                    SAY HELLO
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1.5 transition-transform"></i>
                  </a>
                  <a
                    id="cta-call-me"
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 font-narrow text-xs font-black tracking-[0.15em] uppercase rounded-lg transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
                  >
                    <i className="fa-solid fa-phone text-[#2DD4BF]"></i>
                    {contactInfo.phone}
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-end items-start lg:items-end space-y-12">
              <ScrollReveal direction="up" delay={0.35}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 w-full lg:w-auto items-start">
                  <div className="space-y-4">
                    <p className="font-narrow text-xs font-black text-[#2DD4BF] uppercase tracking-widest">
                      CONTACT DIRECT
                    </p>
                    <ul className="space-y-2.5 font-narrow text-xs font-bold tracking-wider text-white/80">
                      <li>
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-[#2DD4BF] transition-colors flex items-center gap-2">
                          <i className="fa-solid fa-envelope hologram-metal-text"></i> {contactInfo.email}
                        </a>
                      </li>
                      <li>
                        <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="hover:text-[#2DD4BF] transition-colors flex items-center gap-2">
                          <i className="fa-solid fa-phone hologram-metal-text"></i> {contactInfo.phone}
                        </a>
                      </li>
                      <li className="flex items-center gap-2 text-white/60">
                        <i className="fa-solid fa-location-dot hologram-metal-text"></i> {contactInfo.location}
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="font-narrow text-xs font-black text-[#2DD4BF] uppercase tracking-widest">
                      DIRECT CHAT
                    </p>
                    <SpecularButton
                      id="cta-zalo-me"
                      href={`https://zalo.me/${contactInfo.phone.replace(/\s+/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="md"
                      radius={8}
                      tint="#0E4249"
                      tintOpacity={0.96}
                      textColor="#FFFFFF"
                      lineColor="#2DD4BF"
                      baseColor="#07262B"
                      intensity={1.2}
                      shineSize={18}
                      shineFade={35}
                      thickness={1.5}
                      autoAnimate={true}
                      speed={0.4}
                      className="font-narrow text-xs font-black tracking-[0.15em] uppercase shadow-md hover:shadow-xl transition-shadow"
                    >
                      <i className="fa-solid fa-comment-dots text-sm text-[#2DD4BF]"></i>
                      ZALO ME
                    </SpecularButton>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Footer copyright and final brand anchor */}
      <footer className="bg-[#051E22] border-t border-[#0B6E7B]/20 w-full py-12 px-6 text-white">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-xl tracking-[0.2em] font-black uppercase text-white hover:text-[#2DD4BF] transition-colors">
            LY HONG ANH &bull; PORTFOLIO
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="font-narrow text-xs font-bold tracking-wider text-white/60 hover:text-[#2DD4BF] transition-colors">INTRODUCE</a>
            <a href="#experience" className="font-narrow text-xs font-bold tracking-wider text-white/60 hover:text-[#2DD4BF] transition-colors">EXPERIENCE</a>
            <a href="#work" className="font-narrow text-xs font-bold tracking-wider text-white/60 hover:text-[#2DD4BF] transition-colors">PROJECTS</a>
            <a href="#awards" className="font-narrow text-xs font-bold tracking-wider text-white/60 hover:text-[#2DD4BF] transition-colors">AWARDS</a>
          </div>

          <div className="font-mono text-[10px] text-white/40 tracking-wider">
            © {new Date().getFullYear()} LY HONG ANH. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </>
  );
}
