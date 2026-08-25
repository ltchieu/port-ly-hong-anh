import { useState, useCallback } from 'react';
import { awards } from '../data/awards';
import { Award } from '../models/Award';
import ScrollReveal from './common/ScrollReveal';
import ImageLightboxModal from './common/ImageLightboxModal';
import ScrollStack, { ScrollStackItem } from './common/ScrollStack';
import type { LightboxImageData } from '../models/imageLightboxModal';

export default function Awards() {
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);

  const handleAwardClick = useCallback((award: Award) => {
    if (award.pdfUrl && !award.image) {
      window.open(award.pdfUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    if (award.image) {
      setSelectedImage({
        src: award.image,
        title: award.title,
        category: `${award.year} — ${award.category}`,
        description: `${award.description} (Issued by: ${award.issuer})`
      });
    } else if (award.pdfUrl) {
      window.open(award.pdfUrl, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <section id="awards" className="py-24 bg-[#FAFCFC] scroll-mt-20 border-b border-[#CCE5E3]">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Title Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-10 border-b border-[#CCE5E3] pb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#0B6E7B]"></span>
                <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-[0.25em] uppercase">
                  HONORS & RECOGNITION
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#0C2B31]">
                AWARDS & CERTIFICATIONS
              </h2>
            </div>
            <div className="space-y-2 md:text-right">
              <p className="font-narrow text-xs font-bold text-[#4E6E75] tracking-widest uppercase max-w-xs text-balance">
                Curated record of professional certifications and language proficiency honors.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F3F2] border border-[#CCE5E3] text-[#0B6E7B] font-mono text-[11px]">
                <i className="fa-solid fa-layer-group text-xs animate-pulse"></i>
                <span>Scroll to stack cards</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* SCROLL STACK INTERACTIVE CARDS DISPLAY                                    */}
        {/* ========================================================================= */}
        <div className="w-full relative">
          <ScrollStack
            itemDistance={100}
            itemScale={0.035}
            itemStackDistance={36}
            stackPosition="18%"
            scaleEndPosition="8%"
            baseScale={0.86}
            rotationAmount={0}
            blurAmount={0}
            useWindowScroll={true}
          >
            {awards.map((award, idx) => (
              <ScrollStackItem
                key={award.id}
                onClick={() => handleAwardClick(award)}
                itemClassName="h-auto min-h-[300px] sm:min-h-[280px] my-6 p-0 rounded-2xl bg-white border-2 border-[#CCE5E3] shadow-xl hover:border-[#0B6E7B] cursor-pointer overflow-hidden flex flex-col justify-between group"
              >
                <div className="w-full h-full flex flex-col justify-between">
                  {/* Top Category & Year Header */}
                  <div className="p-5 sm:p-6 pb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#CCE5E3] bg-[#F7FBFA]">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-black text-[#0B6E7B] bg-[#E7F3F2] border border-[#CCE5E3] w-6 h-6 rounded-full flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <span className="font-narrow text-xs sm:text-sm font-black hologram-metal-text tracking-[0.2em] uppercase">
                        {award.category}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold bg-[#0B6E7B] text-white px-3 py-1 rounded-full shadow-xs">
                      {award.year}
                    </span>
                  </div>

                  {/* Body Content & Image/PDF Thumbnail Preview */}
                  <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between flex-grow">
                    <div className="space-y-3 flex-grow max-w-2xl">
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight text-[#0C2B31] group-hover:text-[#0B6E7B] transition-colors">
                        {award.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 font-narrow text-xs font-bold text-[#4E6E75] uppercase tracking-wider">
                        <span className="flex items-center gap-1.5 text-[#0B6E7B]">
                          <i className="fa-solid fa-building-columns text-xs"></i>
                          <span>{award.issuer}</span>
                        </span>
                        <span>•</span>
                        <span>{award.project}</span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed line-clamp-3">
                        {award.description}
                      </p>
                    </div>

                    {/* Image / PDF Thumbnail Preview */}
                    {award.image ? (
                      <div className="w-full sm:w-44 md:w-52 h-44 sm:h-36 rounded-xl overflow-hidden bg-[#E7F3F2] border border-[#CCE5E3] flex-shrink-0 relative group-hover:scale-105 transition-transform duration-500 shadow-xs">
                        <img
                          src={award.image}
                          alt={award.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0B6E7B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-narrow text-xs font-bold uppercase tracking-wider">
                          <i className="fa-solid fa-magnifying-glass-plus text-sm"></i>
                          <span>Inspect</span>
                        </div>
                      </div>
                    ) : award.pdfUrl ? (
                      <div className="w-full sm:w-44 md:w-52 h-44 sm:h-36 rounded-xl overflow-hidden bg-[#07262B] text-white border border-[#CCE5E3] flex-shrink-0 flex flex-col items-center justify-center p-4 text-center group-hover:scale-105 transition-transform duration-500 shadow-inner">
                        <i className="fa-solid fa-file-pdf text-3xl text-red-400 mb-2"></i>
                        <span className="font-narrow text-[11px] font-black uppercase tracking-widest text-white/90">
                          OFFICIAL ETRF PDF
                        </span>
                        <span className="font-sans text-[10px] text-white/70 mt-1">Click to View PDF</span>
                      </div>
                    ) : null}
                  </div>

                  {/* Card Footer Action */}
                  <div className="px-6 py-4 bg-[#F7FBFA] border-t border-[#CCE5E3] flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0C2B31] uppercase tracking-wider">
                      {award.role}
                    </span>
                    <span className="font-narrow text-xs font-black tracking-wider text-[#0B6E7B] group-hover:translate-x-1 transition-transform flex items-center gap-2 uppercase">
                      <span>{award.pdfUrl && !award.image ? 'Open PDF Document' : 'Inspect Certificate'}</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal selectedImage={selectedImage} onClose={handleCloseLightbox} />
    </section>
  );
}
