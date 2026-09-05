import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./common/ScrollReveal";
import FacebookEmbed from "./common/FacebookEmbed";
import CenterModeCarousel from "./common/CenterModeCarousel";
import DepthCarousel from "./common/DepthCarousel";
import {
  sharkDentalFacebookPosts,
  vLotusShortFormVideos,
  eventSelectedWorkCarouselItems,
  beneliftsPlanningDocs,
  type EventPlanningDoc,
} from "../data/selectedWorkData";

interface VideoModalItem {
  stt: number;
  title: string;
  url: string;
  platform: string;
}

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState<VideoModalItem | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<EventPlanningDoc | null>(null);

  const handleCloseVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="work" className="py-24 bg-white scroll-mt-20 border-b border-[#CCE5E3]">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4 border-b border-[#CCE5E3] pb-8">
            <div>
              <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-[0.2em] block uppercase mb-1">
                CURATED CREATIVE
              </span>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#0C2B31]">
                SELECTED WORKS
              </h2>
            </div>
            <p className="font-narrow text-xs font-bold text-[#4E6E75] tracking-widest max-w-xs md:text-right">
              A precise collision of volunteer leadership, brand identity, and creative event production
            </p>
          </div>
        </ScrollReveal>

        {/* Selected Work Brand Collections */}
        <div className="space-y-16">
          {/* 1. DIEM NHAN GROUP JSC | SHARK DENTAL (CAROUSEL) */}
          <div className="space-y-6">
            {/* Brand Header */}
            <ScrollReveal direction="up">
              <div className="bg-white border border-[#CCE5E3] p-6 rounded-xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <span className="font-narrow text-[13px] font-black hologram-metal-text tracking-[0.2em] uppercase block">
                    Fanpage Content & Social Media Strategy
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#0C2B31] uppercase tracking-wide">
                    DIEM NHAN GROUP JSC I SHARK DENTAL
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed pt-1">
                    Managed and planned content for the Shark Dental fanpage, creating engagement-driven copy, promotional content and dental care educational posts.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-mono text-xs bg-[#0B6E7B] text-white px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-xs">
                    {sharkDentalFacebookPosts.length} FACEBOOK POSTS
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Center Mode Carousel for Shark Dental Posts */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-full py-4 sm:py-6 overflow-hidden bg-[#F4FAF9] rounded-2xl border border-[#CCE5E3]">
                <CenterModeCarousel
                  items={sharkDentalFacebookPosts}
                  autoplay={true}
                  autoplayDelay={4000}
                  pauseOnHover={true}
                  variant="default"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 2. V LOTUS HOLDINGS JSC (SHORT-FORM VIDEOS) */}
          <div className="space-y-6">
            {/* Brand Header */}
            <ScrollReveal direction="up">
              <div className="bg-white border border-[#CCE5E3] p-6 rounded-xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <span className="font-narrow text-[13px] font-black hologram-metal-text tracking-[0.2em] uppercase block">
                    Short-Form Video Production & Storytelling
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#0C2B31] uppercase tracking-wide">
                    V LOTUS HOLDINGS JSC
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed pt-1">
                    Produced short-form videos for Yoshinoya and Conservo through onsite restaurant shoots, visual storytelling, scripting and end-to-end editing using CapCut Pro and AI tools.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-mono text-xs bg-[#0B6E7B] text-white px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-xs">
                    {vLotusShortFormVideos.length} SHORT-FORM VIDEOS
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Center Mode Carousel for Yoshinoya & Conservo Videos */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-full py-4 sm:py-6 overflow-hidden bg-[#F4FAF9] rounded-2xl border border-[#CCE5E3]">
                <CenterModeCarousel
                  items={vLotusShortFormVideos}
                  autoplay={true}
                  autoplayDelay={4500}
                  pauseOnHover={true}
                  variant="video"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 3. BENELIFTS ASIA COMPANY LIMITED */}
          <div className="space-y-10">
            {/* Brand Header */}
            <ScrollReveal direction="up">
              <div className="bg-white border border-[#CCE5E3] p-6 rounded-xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <span className="font-narrow text-[13px] font-black hologram-metal-text tracking-[0.2em] uppercase block">
                    Event Operations & Communications
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#0C2B31] uppercase tracking-wide">
                    BENELIFTS ASIA COMPANY LIMITED
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed pt-1">
                    Planned and supported events, covering event highlights, backstage operations, photography and social media communications for the Year-End Party.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
                  <span className="font-mono text-xs bg-[#E8F5F4] text-[#0B6E7B] border border-[#CCE5E3] px-3 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-2xs">
                    {beneliftsPlanningDocs.length} PLANNING DOCS
                  </span>
                  <span className="font-mono text-xs bg-[#0B6E7B] text-white px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-xs">
                    {eventSelectedWorkCarouselItems.length} LIVE PHOTOS
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Subsection A: Operational Planning & Timeline Blueprints (1.webp & 2.webp) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
                <div>
                  <span className="font-narrow text-[11px] font-black text-[#0B6E7B] uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <i className="fa-solid fa-file-lines text-xs" />
                    <span>Operational Blueprints & Planning Documents</span>
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl text-[#0C2B31] uppercase tracking-wide mt-0.5">
                    Kế Hoạch & Tiến Độ Tổ Chức Sự Kiện
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#4E6E75] max-w-md sm:text-right">
                  Tài liệu kế hoạch chi tiết từng hoạt động và bảng phân công tiến độ thực hiện Year-End Party.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {beneliftsPlanningDocs.map((doc, idx) => (
                  <ScrollReveal key={doc.id} direction="up" delay={idx * 0.1}>
                    <div className="bg-white rounded-2xl border border-[#CCE5E3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
                      {/* Document Header */}
                      <div className="p-5 sm:p-6 pb-4 border-b border-[#E8F0EF] bg-[#F9FCFB] flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <span className="font-mono text-[10px] font-bold text-[#0B6E7B] bg-[#E0F2F1] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                            {doc.docNumber}
                          </span>
                          <h5 className="font-display text-lg sm:text-xl font-bold text-[#0C2B31] uppercase tracking-tight mt-1">
                            {doc.title}
                          </h5>
                          <p className="font-narrow text-xs font-semibold text-[#4E6E75] uppercase tracking-wider">
                            {doc.subtitle}
                          </p>
                        </div>

                        {/* Quick Action: Magnify button */}
                        <button
                          onClick={() => setSelectedDoc(doc)}
                          className="px-3 py-1.5 bg-white hover:bg-[#0B6E7B] text-[#0C2B31] hover:text-white border border-[#CCE5E3] hover:border-[#0B6E7B] rounded-lg font-narrow text-xs font-bold uppercase tracking-wider transition-all shadow-2xs flex items-center gap-1.5 shrink-0 cursor-pointer"
                          title="Phóng to tài liệu để đọc rõ từng dòng"
                        >
                          <i className="fa-solid fa-magnifying-glass-plus text-xs" />
                          <span className="hidden sm:inline">Phóng to</span>
                        </button>
                      </div>

                      {/* High-Clarity Image Preview with Interactive Hover Effect */}
                      <div
                        onClick={() => setSelectedDoc(doc)}
                        className="relative w-full aspect-[16/10] bg-[#07262B] overflow-hidden cursor-pointer group/img border-b border-[#E8F0EF]"
                      >
                        <img
                          src={doc.image}
                          alt={doc.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]"
                          loading="lazy"
                        />
                        {/* Glass Overlay on Hover */}
                        <div className="absolute inset-0 bg-[#07262B]/55 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2.5 p-4 text-center backdrop-blur-[2px]">
                          <div className="w-12 h-12 rounded-full bg-white/95 text-[#0B6E7B] flex items-center justify-center shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                            <i className="fa-solid fa-magnifying-glass-plus text-lg" />
                          </div>
                          <span className="font-narrow text-xs font-black uppercase tracking-wider text-white bg-black/70 px-3.5 py-1 rounded-full border border-white/20 shadow-md">
                            Click để xem toàn màn hình độ phân giải cao
                          </span>
                        </div>

                        {/* Corner Badge */}
                        <div className="absolute bottom-3 right-3 pointer-events-none">
                          <span className="px-2.5 py-1 bg-[#0C2B31]/90 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg border border-white/20 shadow-md flex items-center gap-1.5">
                            <i className="fa-solid fa-table text-[10px] text-[#2DD4BF]" />
                            <span>Spreadsheet Blueprint</span>
                          </span>
                        </div>
                      </div>

                      {/* Document Content Details */}
                      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                        <div className="space-y-3">
                          <p className="font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed">
                            {doc.description}
                          </p>

                          {/* Key Highlights */}
                          <div className="space-y-1.5 bg-[#F0F8F7] p-3.5 rounded-xl border border-[#CCE5E3]/70">
                            <span className="font-narrow text-[10px] font-black text-[#0B6E7B] uppercase tracking-wider block">
                              Nội dung trọng tâm:
                            </span>
                            <ul className="space-y-1">
                              {doc.keyHighlights.map((highlight, hIdx) => (
                                <li key={hIdx} className="font-sans text-xs text-[#0C2B31] flex items-start gap-2">
                                  <i className="fa-solid fa-check text-[10px] text-[#0B6E7B] mt-1 shrink-0" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {doc.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="font-narrow text-[11px] font-bold text-[#0B6E7B] bg-[#E8F5F4] px-2.5 py-0.5 rounded-md border border-[#CCE5E3]"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 pt-3 border-t border-[#E8F0EF]">
                          <button
                            onClick={() => setSelectedDoc(doc)}
                            className="flex-1 py-2.5 px-3 bg-[#0B6E7B] hover:bg-[#08545E] text-white rounded-xl font-narrow text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md"
                          >
                            <i className="fa-solid fa-expand text-xs" />
                            <span>Xem Chi Tiết Tài Liệu</span>
                          </button>

                          <a
                            href={doc.sheetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2.5 px-3 bg-[#F0F8F7] hover:bg-[#E0F2F1] text-[#0B6E7B] border border-[#CCE5E3] rounded-xl font-narrow text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-2xs hover:scale-[1.02]"
                            title="Mở Google Sheets trực tiếp"
                          >
                            <i className="fa-solid fa-file-spreadsheet text-emerald-600 text-sm" />
                            <span className="hidden sm:inline">Google Sheets</span>
                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Subsection B: Live Event Photo Moments (DepthCarousel) */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
                <div>
                  <span className="font-narrow text-[11px] font-black text-[#0B6E7B] uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <i className="fa-solid fa-images text-xs" />
                    <span>Live Event Photography Gallery</span>
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl text-[#0C2B31] uppercase tracking-wide mt-0.5">
                    Khoảnh Khắc Đêm Tiệc Year-End Party
                  </h4>
                </div>
                <span className="font-mono text-xs text-[#0B6E7B] bg-[#E8F5F4] border border-[#CCE5E3] px-3 py-1 rounded-full font-bold self-start sm:self-auto">
                  {eventSelectedWorkCarouselItems.length} LIVE PHOTOS
                </span>
              </div>

              <ScrollReveal direction="up" delay={0.1}>
                <div className="w-full relative h-[520px] sm:h-[580px] md:h-[620px] flex items-center justify-center overflow-hidden bg-[#F4FAF9] rounded-2xl border border-[#CCE5E3] py-4">
                  <DepthCarousel
                    items={eventSelectedWorkCarouselItems}
                    cardWidth={620}
                    cardHeight={380}
                    radius={20}
                    depth={240}
                    spread={120}
                    tilt={20}
                    tiltDirection="right"
                    perspective={1400}
                    visibleCards={4}
                    falloff={0.18}
                    blur={5}
                    autoplay={true}
                    autoplayDelay={3500}
                    loop={true}
                    showControls={true}
                    showIndicators={true}
                    objectFit="cover"
                    cardBg="#07262B"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Planning Document Lightbox Modal Portal */}
      {createPortal(
        <AnimatePresence>
          {selectedDoc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoc(null)}
              className="fixed inset-0 z-[999] bg-[#07262B]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl w-full max-h-[96vh] flex flex-col bg-[#0B252B] border border-[#0B6E7B]/40 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Modal Header */}
                <div className="w-full flex items-center justify-between p-4 sm:p-5 border-b border-white/15 bg-black/30">
                  <div className="space-y-0.5 max-w-3xl pr-4">
                    <span className="font-mono text-[10px] font-bold text-[#2DD4BF] uppercase tracking-wider block">
                      {selectedDoc.docNumber} • {selectedDoc.subtitle}
                    </span>
                    <h3 className="font-display text-lg sm:text-2xl text-white uppercase tracking-wide line-clamp-1">
                      {selectedDoc.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={selectedDoc.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-narrow text-xs font-bold uppercase tracking-wider transition-all"
                      title="Mở ảnh gốc trong tab mới"
                    >
                      <i className="fa-solid fa-up-right-from-square text-xs" />
                      <span>Ảnh gốc</span>
                    </a>

                    <button
                      onClick={() => setSelectedDoc(null)}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0B6E7B] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                      aria-label="Close document modal"
                    >
                      <i className="fa-solid fa-xmark text-base" />
                    </button>
                  </div>
                </div>

                {/* High-Resolution Scrollable / Zoomable Document Container */}
                <div className="w-full flex-1 overflow-auto bg-[#05181C] p-2 sm:p-4 flex items-center justify-center min-h-[300px] max-h-[70vh]">
                  <img
                    src={selectedDoc.image}
                    alt={selectedDoc.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10 select-text"
                  />
                </div>

                {/* Modal Footer */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-5 border-t border-white/15 bg-black/40">
                  <p className="font-sans text-xs text-white/70 max-w-2xl line-clamp-2">
                    {selectedDoc.description}
                  </p>
                  <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                    <a
                      href={selectedDoc.sheetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2 bg-[#0B6E7B] hover:bg-[#0d8594] text-white transition-all font-narrow text-xs uppercase tracking-wider font-bold rounded-xl flex items-center justify-center gap-2 shadow-md"
                    >
                      <i className="fa-solid fa-file-spreadsheet text-emerald-300 text-sm" />
                      <span>Mở Google Sheets Trực Tiếp</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Video Lightbox Modal Portal */}
      {createPortal(
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseVideoModal}
              className="fixed inset-0 z-[999] bg-[#07262B]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full max-h-[92vh] flex flex-col bg-[#0B252B] border border-[#0B6E7B]/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-4 overflow-hidden"
              >
                {/* Modal Header */}
                <div className="w-full flex items-center justify-between border-b border-white/15 pb-3">
                  <div className="space-y-0.5">
                    <span className="font-narrow text-[10px] font-black hologram-metal-text tracking-[0.2em] uppercase block">
                      #{selectedVideo.stt} • {selectedVideo.platform} REEL
                    </span>
                    <h3 className="font-display text-base sm:text-lg text-white uppercase tracking-wide line-clamp-1">
                      {selectedVideo.title}
                    </h3>
                  </div>

                  <button
                    onClick={handleCloseVideoModal}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0B6E7B] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                    aria-label="Close video modal"
                  >
                    <i className="fa-solid fa-xmark text-sm"></i>
                  </button>
                </div>

                {/* Facebook Video Player Box */}
                <div className="w-full flex-1 min-h-[320px] max-h-[60vh] rounded-xl overflow-hidden bg-black border border-white/10 relative flex items-center justify-center p-2">
                  <FacebookEmbed url={selectedVideo.url} />
                </div>

                {/* Modal Footer */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/15">
                  <span className="font-sans text-xs text-white/70">
                    Watching interactive Facebook video Reel embed
                  </span>
                  <a
                    href={selectedVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1877F2] text-white hover:bg-[#166fe5] transition-all font-narrow text-xs uppercase tracking-wider font-bold rounded-lg flex items-center gap-2 shadow-sm"
                  >
                    <span>Watch on Facebook</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
