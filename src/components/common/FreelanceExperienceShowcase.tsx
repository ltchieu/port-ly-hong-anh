import { useState, useCallback, useMemo, lazy, Suspense } from 'react';
import ImageLightboxModal from './ImageLightboxModal';
import GallerySkeleton from './GallerySkeleton';
import AnimatedCounter from './AnimatedCounter';
import HighlightText from './HighlightText';
import YouTubeEmbed from './YouTubeEmbed';
import type { LightboxImageData } from '../../models/imageLightboxModal';
import type { MasonryItem } from '../../models/masonry';
import {
  PANASONIC_WEBINAR_REPORT_URL,
  PANASONIC_WEBINAR_VIDEO_URL,
  panasonicWebinarVideo,
  webinarMetrics,
  getWebinarMasonryItems,
} from '../../data/panasonicWebinarData';

// Lazy import Masonry to keep initial bundle light
const Masonry = lazy(() => import('./Masonry'));

export default function FreelanceExperienceShowcase() {
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);

  // Memoize masonry items
  const masonryItems = useMemo(() => getWebinarMasonryItems(), []);

  const handleItemClick = useCallback((item: MasonryItem) => {
    setSelectedImage({
      src: item.img,
      title: item.title || 'Panasonic Webinar Event Photography',
      category: 'PANASONIC CFAN WEBINAR',
      description: item.subtitle || 'Webinar operations, technical setup, and speaker coordination photography.',
    });
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="pt-6 space-y-8 border-t border-[#CCE5E3] mt-6" onClick={(e) => e.stopPropagation()}>
      {/* ========================================================================= */}
      {/* SECTION 1: PROJECT OVERVIEW, METRICS & PANASONIC REPORT / VIDEO LINKS */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-[#07262B] via-[#0A3D44] to-[#07262B] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#0B6E7B]/40 relative overflow-hidden group">
        <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 w-56 h-56 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          {/* Header Tag & Timeframe */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0B6E7B]/40 pb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0B6E7B]/40 backdrop-blur-md rounded-full text-xs sm:text-sm font-narrow font-black tracking-widest text-[#2DD4BF] uppercase border border-[#0B6E7B]/50">
              <i className="fa-solid fa-headset text-xs"></i>
              <span>Movement Marketing Agency • PANASONIC CFAN</span>
            </div>
            <span className="font-mono text-xs sm:text-sm text-[#2DD4BF] bg-white/10 px-3.5 py-1 rounded-md border border-[#0B6E7B]/40 font-bold">
              March 2024 • Freelance
            </span>
          </div>

          {/* Project Title & Key Summary */}
          <div className="space-y-3">
            <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
              Panasonic CFAN Webinar Operations & Technical Administration
            </h4>
            <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed max-w-4xl">
              <HighlightText text="Coordinated live stakeholder communications, AV technical readiness, attendee admission workflows, and speaker moderation across two flagship product training webinars for Panasonic CFAN." />
            </p>
          </div>

          {/* Quick Action Links: Live Spreadsheet Report & YouTube Shorts Video */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* PANASONIC Webinar Report Link Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#2DD4BF] transition-all flex flex-col justify-between gap-4 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#0B6E7B] border border-[#2DD4BF]/50 text-white flex items-center justify-center shrink-0 shadow-md">
                  <i className="fa-solid fa-file-excel text-lg text-[#2DD4BF]"></i>
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-narrow text-xs font-black text-[#2DD4BF] tracking-wider uppercase">
                      Official Spreadsheet
                    </span>
                    <span className="px-2 py-0.2 bg-[#2DD4BF]/20 text-[#2DD4BF] font-mono text-[10px] rounded uppercase font-bold">
                      Live Report
                    </span>
                  </div>
                  <h5 className="font-display text-lg sm:text-xl uppercase tracking-tight text-white">
                    PANASONIC webinar report
                  </h5>
                  <p className="font-sans text-xs text-white/75 leading-relaxed">
                    Detailed participant tracking, live order conversions, attendee engagement metrics & survey ratings.
                  </p>
                </div>
              </div>

              <a
                href={PANASONIC_WEBINAR_REPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-2.5 bg-[#0B6E7B] hover:bg-[#08545E] text-white border border-[#2DD4BF]/50 rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <i className="fa-solid fa-table text-[#2DD4BF]"></i>
                <span>Open Webinar Report</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs opacity-80"></i>
              </a>
            </div>

            {/* YouTube Shorts Video Recap Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#FF4D4D] transition-all flex flex-col justify-between gap-4 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#FF0000]/30 border border-[#FF4D4D]/50 text-white flex items-center justify-center shrink-0 shadow-md">
                  <i className="fa-brands fa-youtube text-lg text-[#FF4D4D]"></i>
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-narrow text-xs font-black text-[#FF4D4D] tracking-wider uppercase">
                      YouTube Shorts
                    </span>
                    <span className="px-2 py-0.2 bg-[#FF0000]/20 text-[#FF4D4D] font-mono text-[10px] rounded uppercase font-bold">
                      Video Recap
                    </span>
                  </div>
                  <h5 className="font-display text-lg sm:text-xl uppercase tracking-tight text-white">
                    Webinar Highlight Video
                  </h5>
                  <p className="font-sans text-xs text-white/75 leading-relaxed">
                    Behind-the-scenes short video covering on-site setup, speaker coordination, and live stream control.
                  </p>
                </div>
              </div>

              <a
                href={PANASONIC_WEBINAR_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-2.5 bg-[#FF0000]/80 hover:bg-[#CC0000] text-white border border-[#FF4D4D]/50 rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <i className="fa-brands fa-youtube text-white"></i>
                <span>Watch YouTube Short</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs opacity-80"></i>
              </a>
            </div>
          </div>

          {/* Metric Stat Cards with AnimatedCounter */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {webinarMetrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="p-4 bg-white/5 border border-[#0B6E7B]/40 rounded-xl space-y-1 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-narrow text-[11px] font-bold text-[#2DD4BF] uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <i className={`${metric.icon} text-xs text-[#2DD4BF]/80`}></i>
                </div>
                <div className="font-display text-2xl sm:text-3xl text-white tracking-tight">
                  <AnimatedCounter value={metric.value} />
                </div>
                <p className="font-sans text-[11px] text-white/70 leading-snug">
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: HIGHLIGHT SHORT-FORM VIDEO & BEHIND-THE-SCENES */}
      {/* ========================================================================= */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-2xl p-5 sm:p-7 space-y-6">
        <div className="border-b border-[#CCE5E3] pb-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-[0.2em] uppercase">
                VIDEO HIGHLIGHT
              </span>
              <span className="text-[#CCE5E3]">•</span>
              <span className="font-mono text-xs font-bold text-[#4E6E75] uppercase">
                YOUTUBE SHORTS
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2.5">
              <i className="fa-brands fa-youtube text-[#FF0000]"></i>
              Webinar Video Recap & Behind-The-Scenes
            </h3>
            <p className="font-sans text-sm text-[#4E6E75] max-w-2xl leading-relaxed">
              On-site operations, speaker coordination, AV technical control, and attendee interaction during the Panasonic CFAN product training webinar.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PANASONIC_WEBINAR_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-[#FF0000] hover:bg-[#CC0000] text-white font-narrow text-xs font-black uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 shadow-2xs hover:scale-105 cursor-pointer"
            >
              <i className="fa-brands fa-youtube text-sm"></i>
              <span>Watch on YouTube</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>

        {/* Highlight Video Embed Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs">
          {/* Header info bar */}
          <div className="px-4 py-3 bg-[#F0F8F7] border-b border-[#CCE5E3] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <i className="fa-brands fa-youtube text-sm"></i>
              </div>
              <div className="min-w-0">
                <h5 className="font-narrow text-xs font-black text-[#0C2B31] uppercase tracking-wider truncate">
                  {panasonicWebinarVideo.channel}
                </h5>
                <p className="font-mono text-[10px] text-[#4E6E75]">
                  Short ID: {panasonicWebinarVideo.videoId}
                </p>
              </div>
            </div>

            <span className="px-2.5 py-1 bg-[#FF0000]/10 text-[#FF0000] font-mono text-[10px] rounded uppercase font-bold">
              HD Shorts
            </span>
          </div>

          {/* YouTube Short Embed Player Container */}
          <div className="relative w-full bg-[#07262B] p-4 sm:p-6 flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full max-w-[320px] sm:max-w-[340px] h-[500px] sm:h-[560px] rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10 relative flex items-center justify-center">
              <YouTubeEmbed
                url={PANASONIC_WEBINAR_VIDEO_URL}
                title={panasonicWebinarVideo.title}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Footer description & category badge */}
          <div className="p-4 sm:p-5 bg-white border-t border-[#CCE5E3] space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 bg-[#0B6E7B]/10 text-[#0B6E7B] rounded font-narrow text-xs font-bold uppercase">
                {panasonicWebinarVideo.category}
              </span>
              <a
                href={PANASONIC_WEBINAR_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-[#FF0000] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Direct Link</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
              </a>
            </div>
            <h4 className="font-display text-base sm:text-lg uppercase tracking-tight text-[#0C2B31]">
              {panasonicWebinarVideo.title}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#2C4A51] leading-relaxed">
              {panasonicWebinarVideo.description}
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 3: WEBINAR EVENT PHOTOGRAPHY GALLERY (MASONRY) */}
      {/* ========================================================================= */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-2xl p-5 sm:p-7 space-y-6">
        {/* Section Title Bar */}
        <div className="border-b border-[#CCE5E3] pb-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-[0.2em] uppercase">
                SHOWCASE GALLERY
              </span>
              <span className="text-[#CCE5E3]">•</span>
              <span className="font-mono text-xs font-bold text-[#4E6E75] uppercase">
                {masonryItems.length} ASSETS (WEBP)
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-[#0C2B31]">
              Webinar Event Photography
            </h3>
            <p className="font-sans text-sm text-[#4E6E75] max-w-2xl leading-relaxed">
              On-site operations, speaker coordination, AV technical control, and attendee interaction during the Panasonic CFAN product training webinar.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 bg-white border border-[#CCE5E3] font-narrow text-xs font-bold uppercase tracking-wider rounded-lg text-[#0B6E7B] flex items-center gap-1.5 shadow-2xs">
              <i className="fa-solid fa-camera text-[#0B6E7B] text-xs"></i>
              Masonry Layout
            </span>
          </div>
        </div>

        {/* Masonry Image Gallery */}
        <Suspense fallback={<GallerySkeleton height="500px" title="Loading Webinar Event Photography..." />}>
          <div className="min-h-[450px]">
            <Masonry
              items={masonryItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.04}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.97}
              onItemClick={handleItemClick}
            />
          </div>
        </Suspense>
      </div>

      {/* ========================================================================= */}
      {/* SINGLE IMAGE LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      <ImageLightboxModal selectedImage={selectedImage} onClose={handleCloseLightbox} />
    </div>
  );
}

