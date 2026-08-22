import { memo } from 'react';
import ScrollReveal from './ScrollReveal';
import type { JobHeroSectionProps } from '../../models/jobHeroSection';

export const JobHeroSection = memo(function JobHeroSection({
  japaneseBackgroundText,
  categoryText,
  timeframe,
  title,
  description,
  tags,
  metrics,
}: JobHeroSectionProps) {
  return (
    <section className="relative pt-16 pb-20 border-b border-[#CCE5E3] overflow-hidden bg-gradient-to-b from-[#FAFCFC] via-[#EDF7F6] to-[#FAFCFC]">
      {japaneseBackgroundText && (
        <div className="absolute right-8 top-12 select-none pointer-events-none opacity-5 font-display text-8xl md:text-9xl text-[#0B6E7B] writing-vertical hidden lg:block tracking-widest">
          {japaneseBackgroundText}
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-6">
        <ScrollReveal direction="up" distance={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-[0.25em] uppercase block">
                  {categoryText}
                </span>
                <span className="text-[#CCE5E3]">•</span>
                <span className="font-narrow text-xs font-bold text-[#0C2B31] tracking-widest uppercase">
                  {timeframe}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-[#0C2B31] leading-[1.05]">
                {title}
              </h1>

              <div className="font-sans text-lg sm:text-xl text-[#4E6E75] max-w-3xl leading-relaxed">
                {description}
              </div>

              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs bg-white border border-[#CCE5E3] px-3 py-1.5 rounded-lg text-[#0C2B31] font-medium shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl shadow-xs transition-all ${
                    metric.darkBg
                      ? 'bg-[#07262B] text-white border border-[#0B6E7B]/40 shadow-sm'
                      : 'bg-white border border-[#CCE5E3] hover:border-[#0B6E7B]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-narrow text-xs font-bold uppercase tracking-wider ${
                        metric.darkBg ? 'text-[#2DD4BF]' : 'text-[#0B6E7B]'
                      }`}
                    >
                      {metric.label}
                    </span>
                    {metric.icon && (
                      <i
                        className={`${metric.icon} text-xs ${
                          metric.darkBg ? 'text-[#2DD4BF]' : 'text-[#0B6E7B]'
                        }`}
                      ></i>
                    )}
                  </div>
                  <span
                    className={`font-display text-2xl sm:text-3xl ${
                      metric.darkBg ? 'text-white' : 'text-[#0C2B31]'
                    }`}
                  >
                    {metric.value}
                  </span>
                  {metric.note && (
                    <p
                      className={`font-sans text-xs mt-1 ${
                        metric.darkBg ? 'text-white/70' : 'text-[#4E6E75]'
                      }`}
                    >
                      {metric.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});

export default JobHeroSection;
