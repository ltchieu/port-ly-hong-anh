import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./common/ScrollReveal";
import FacebookEmbed from "./common/FacebookEmbed";
import Carousel from "./common/Carousel";
import InfiniteMarquee from "./common/InfiniteMarquee";
import DepthCarousel from "./common/DepthCarousel";
import {
  sharkDentalFacebookPosts,
  vLotusShortFormVideos,
  eventSelectedWorkCarouselItems,
} from "../data/selectedWorkData";
import type { MarqueeItem } from "../models/infiniteMarquee";

interface VideoModalItem {
  stt: number;
  title: string;
  url: string;
  platform: string;
}

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState<VideoModalItem | null>(null);

  const handleCloseVideoModal = () => {
    setSelectedVideo(null);
  };

  const handleMarqueeItemClick = (item: MarqueeItem) => {
    if (item.url) {
      if (item.platform?.toLowerCase() === "facebook") {
        setSelectedVideo({
          stt: 1,
          title: item.title || item.brand || "Video Reel",
          url: item.url,
          platform: "Facebook",
        });
      } else {
        window.open(item.url, "_blank", "noopener,noreferrer");
      }
    }
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
                    Developed bilingual social media content and monthly strategies across Facebook, TikTok and Instagram, including content pillars, creative angles and visual briefs for designers.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-mono text-xs bg-[#0B6E7B] text-white px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-xs">
                    {sharkDentalFacebookPosts.length} FACEBOOK POSTS
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* React Bits Carousel Component */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-full flex justify-center items-center py-6 sm:py-8 overflow-hidden min-h-[500px] bg-[#F4FAF9] rounded-2xl border border-[#CCE5E3]">
                <Carousel
                  items={sharkDentalFacebookPosts}
                  baseWidth={410}
                  autoplay={true}
                  autoplayDelay={2800}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 2. V LOTUS HOLDINGS JSC (INFINITE MARQUEE) */}
          <div className="space-y-6">
            {/* Brand Header */}
            <ScrollReveal direction="up">
              <div className="bg-white border border-[#CCE5E3] p-6 rounded-xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <span className="font-narrow text-[13px] font-black hologram-metal-text tracking-[0.2em] uppercase block">
                    Video Editing & Short-Form Content Production
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

            {/* Infinite Marquee Component for Yoshinoya & Conservo Videos */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-full py-6 sm:py-8 overflow-hidden bg-[#F4FAF9] rounded-2xl border border-[#CCE5E3]">
                <InfiniteMarquee
                  items={vLotusShortFormVideos}
                  speed={28}
                  onItemClick={handleMarqueeItemClick}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 3. BENELIFTS ASIA COMPANY LIMITED (DEPTH CAROUSEL) */}
          <div className="space-y-6">
            {/* Brand Header */}
            <ScrollReveal direction="up">
              <div className="bg-white border border-[#CCE5E3] p-6 rounded-xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  {/* Top Left: YEP Event Plan Link & Category */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href="https://docs.google.com/spreadsheets/d/10qXIwqKY7R7dVaucjhWWpAMN5-JGNgFw9sSNRxJUGSM/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0F8F7] hover:bg-[#0B6E7B] text-[#0B6E7B] hover:text-white border border-[#CCE5E3] hover:border-[#0B6E7B] rounded-lg font-narrow text-xs font-black uppercase tracking-wider transition-all shadow-2xs hover:scale-105"
                    >
                      <i className="fa-solid fa-file-spreadsheet text-emerald-600 text-sm"></i>
                      <span>YEP Event Plan</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                    <span className="font-narrow text-[13px] font-black hologram-metal-text tracking-[0.2em] uppercase">
                      Event Operations & Communications
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#0C2B31] uppercase tracking-wide">
                    BENELIFTS ASIA COMPANY LIMITED
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed pt-1">
                    Planned and supported events, covering event highlights, backstage operations, photography and social media communications for the Year-End Party.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="font-mono text-xs bg-[#0B6E7B] text-white px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-xs">
                    {eventSelectedWorkCarouselItems.length} EVENT PHOTOS
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* React Bits DepthCarousel Component */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="w-full relative h-[480px] sm:h-[540px] flex items-center justify-center overflow-hidden bg-[#F4FAF9] rounded-2xl border border-[#CCE5E3] py-4">
                <DepthCarousel
                  items={eventSelectedWorkCarouselItems}
                  cardWidth={300}
                  cardHeight={380}
                  radius={18}
                  depth={220}
                  spread={90}
                  tilt={22}
                  tiltDirection="right"
                  perspective={1400}
                  visibleCards={4}
                  falloff={0.2}
                  blur={6}
                  autoplay={true}
                  autoplayDelay={3000}
                  loop={true}
                  showControls={true}
                  showIndicators={true}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

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
