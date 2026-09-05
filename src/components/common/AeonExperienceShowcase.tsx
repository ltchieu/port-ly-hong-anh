import { useState, useMemo, useCallback, lazy, Suspense } from 'react';
import FacebookEmbed from './FacebookEmbed';
import AnimatedCounter from './AnimatedCounter';
import HighlightText from './HighlightText';
import ImageLightboxModal from './ImageLightboxModal';
import GallerySkeleton from './GallerySkeleton';
import type { LightboxImageData } from '../../models/imageLightboxModal';
import {
  aeonHighlightVideos,
  aeonReportLinks,
  aeonMetrics,
  aeonMallImages,
} from '../../data/aeonVietnamData';

// Lazy import interactive sub-components
const BounceCards = lazy(() => import('./BounceCards'));
const Stack = lazy(() => import('./Stack'));

const bounceTransformStyles = [
  'rotate(10deg) translate(-170px)',
  'rotate(5deg) translate(-85px)',
  'rotate(-3deg)',
  'rotate(-10deg) translate(85px)',
  'rotate(2deg) translate(170px)',
];

export default function AeonExperienceShowcase() {
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);

  const handleOpenLightbox = useCallback((src: string, title: string) => {
    setSelectedImage({
      src,
      title,
      category: 'AEON VIET NAM • EVENT OPERATIONS',
      description: 'Event support, on-site photography, video footage collection & communication materials.',
    });
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Memoized cards for mobile Stack view
  const stackCards = useMemo(
    () =>
      aeonMallImages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`AEON Event Photo ${idx + 1}`}
          className="w-full h-full object-cover rounded-xl border border-[#CCE5E3] shadow-md select-none"
        />
      )),
    []
  );

  return (
    <div className="space-y-10 pt-2" onClick={(e) => e.stopPropagation()}>
      {/* KEY METRIC COUNTERS WITH ANIMATED COUNT-UP */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {aeonMetrics.map((metric, mIdx) => (
          <div
            key={mIdx}
            className="p-5 bg-white border border-[#CCE5E3] rounded-xl flex flex-col justify-between space-y-3 shadow-2xs hover:border-[#0B6E7B] hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between text-[#0B6E7B]">
              <span className="font-narrow text-xs sm:text-sm font-black uppercase tracking-wider text-[#4E6E75] group-hover:text-[#0B6E7B] transition-colors">
                {metric.label}
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#F0F8F7] flex items-center justify-center border border-[#CCE5E3] group-hover:bg-[#0B6E7B] group-hover:text-white transition-all">
                <i className={`${metric.icon} text-sm`}></i>
              </div>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl text-[#0C2B31] leading-none block">
                <AnimatedCounter value={metric.value} />
              </span>
              {metric.subtext && (
                <p className="font-sans text-xs sm:text-sm text-[#4E6E75] mt-1.5 font-medium">
                  {metric.subtext}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* VIDEO EDITOR & SHORT-FORM CONTENT PRODUCTION */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-6 border-t border-[#CCE5E3]">
        <div className="border-b border-[#CCE5E3] pb-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2.5">
              <i className="fa-solid fa-video text-lg text-[#0B6E7B]"></i>
              Video Editor & Short-Form Content Production
            </h3>
            <span className="px-3 py-1 bg-white border border-[#CCE5E3] font-narrow text-xs font-bold uppercase tracking-wider rounded-lg text-[#0B6E7B] flex items-center gap-1.5 shadow-2xs">
              <i className="fa-solid fa-film text-[#0B6E7B] text-xs"></i>
              CapCut Pro & Canva
            </span>
          </div>

          <ul className="space-y-2 pt-1 font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0B6E7B] mt-2.5 flex-shrink-0"></span>
              <span>
                <HighlightText text="Managed end-to-end video production from script development and content planning to editing and final delivery." />
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0B6E7B] mt-2.5 flex-shrink-0"></span>
              <span>
                <HighlightText text="Produced short-form video content using CapCut Pro and Canva." />
              </span>
            </li>
          </ul>

          {/* Simple Button Links placed at top left of Video Editor section */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <a
              href={aeonReportLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-[#0B6E7B] hover:bg-[#08545E] text-white rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs hover:scale-105 cursor-pointer"
            >
              <i className="fa-solid fa-file-lines text-[#2DD4BF]"></i>
              <span>Brief video AEON</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-80"></i>
            </a>

            <a
              href={aeonReportLinks[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-[#0B6E7B] hover:bg-[#08545E] text-white rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs hover:scale-105 cursor-pointer"
            >
              <i className="fa-solid fa-chart-pie text-[#2DD4BF]"></i>
              <span>Reels Report 2023</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-80"></i>
            </a>
          </div>
        </div>

        {/* Highlight Video Section */}
        <div className="space-y-4">
          {/* Section Header for Reels */}
          <div className="flex items-center justify-between pt-1">
            <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-wider uppercase flex items-center gap-1.5">
              <i className="fa-brands fa-facebook text-[#1877F2]"></i>
              HIGHLIGHT FACEBOOK REELS • GROWTH WITH AEON ({aeonHighlightVideos.length} VIDEOS)
            </span>
            <span className="font-mono text-[10px] text-[#4E6E75] bg-white px-2.5 py-1 rounded border border-[#CCE5E3]">
              LIVE EMBED PLAYER
            </span>
          </div>

          {/* 4 Highlight Facebook Reels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aeonHighlightVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                {/* Header info bar */}
                <div className="px-4 py-3 bg-[#F0F8F7] border-b border-[#CCE5E3] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <i className="fa-brands fa-facebook-f text-xs"></i>
                    </div>
                    <div className="min-w-0">
                      <h5 className="font-narrow text-xs font-black text-[#0C2B31] uppercase tracking-wider truncate">
                        {video.channel} • {video.category}
                      </h5>
                      <p className="font-mono text-[10px] text-[#4E6E75]">
                        Reel ID: {video.reelId}
                      </p>
                    </div>
                  </div>

                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-[#1877F2] hover:bg-[#1565C0] text-white font-narrow text-xs font-bold uppercase rounded-lg transition-all flex items-center gap-1.5 shrink-0 shadow-2xs"
                  >
                    <span>Watch Reel</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                  </a>
                </div>

                {/* Facebook Reel Embed Player Container */}
                <div className="relative w-full bg-[#07262B] p-3 sm:p-4 flex flex-col items-center justify-center overflow-hidden">
                  <div className="w-full max-w-[320px] sm:max-w-[340px] h-[480px] sm:h-[520px] rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10 relative flex items-center justify-center">
                    <FacebookEmbed url={video.videoUrl} className="w-full h-full" />
                  </div>
                </div>

                {/* Footer description & category badge */}
                <div className="p-4 bg-white border-t border-[#CCE5E3] space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 bg-[#0B6E7B]/10 text-[#0B6E7B] rounded font-narrow text-xs font-bold uppercase">
                      {video.category}
                    </span>
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-sans text-[#1877F2] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>Direct Link</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                    </a>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#2C4A51] leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION 2: EVENT OPERATION & COMMUNICATIONS */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-8 border-t border-[#CCE5E3]">
        <div className="border-b border-[#CCE5E3] pb-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2.5">
              <i className="fa-solid fa-calendar-check text-lg text-[#0B6E7B]"></i>
              Event Operation & Communications ({aeonMallImages.length} Shots)
            </h3>
            <span className="px-3 py-1 bg-white border border-[#CCE5E3] font-narrow text-xs font-bold uppercase tracking-wider rounded-lg text-[#0B6E7B] flex items-center gap-1.5 shadow-2xs">
              <i className="fa-solid fa-camera-retro text-[#0B6E7B] text-xs"></i>
              On-site Media & Photography
            </span>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed">
            <HighlightText text="Event support, on-site photography, video footage collection & communication materials" />
          </p>

          <ul className="space-y-2 pt-1 font-sans text-sm sm:text-base text-[#4E6E75] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0B6E7B] mt-2.5 flex-shrink-0"></span>
              <span>
                Supported internal and recruitment events, including Job Fairs and Mass Recruitment campaigns.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0B6E7B] mt-2.5 flex-shrink-0"></span>
              <span>
                Produced event content through photography, videography, video editing and social media posts to support event communications.
              </span>
            </li>
          </ul>
        </div>

        {/* Bounce Cards Display for 5 AEON Mall Images (Desktop: BounceCards, Mobile: Stack) */}
        <div className="bg-white p-5 sm:p-7 rounded-xl border border-[#CCE5E3] space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CCE5E3]/60 pb-3">
            <div>
              <h4 className="font-narrow text-xs font-black text-[#0C2B31] uppercase tracking-wider flex items-center gap-1.5">
                <i className="fa-solid fa-layer-group text-[#0B6E7B]"></i>
                On-site Event Operations & Photography Gallery ({aeonMallImages.length} Shots)
              </h4>
              <p className="font-sans text-[11px] text-[#4E6E75]">
                Hover over cards to trigger bounce animation; click photo to expand in high resolution.
              </p>
            </div>
            <span className="font-mono text-[9px] text-[#0B6E7B] hidden sm:inline-block">HOVER / CLICK</span>
          </div>

          <div className="w-full flex justify-center items-center py-6 overflow-hidden min-h-[300px] bg-[#F8FCFB] rounded-xl border border-[#CCE5E3]/60">
            <Suspense fallback={<GallerySkeleton height="280px" />}>
              {/* Desktop & Tablet view: BounceCards */}
              <div className="hidden sm:flex justify-center items-center">
                <BounceCards
                  images={aeonMallImages}
                  containerWidth={520}
                  containerHeight={290}
                  animationDelay={0.15}
                  animationStagger={0.06}
                  transformStyles={bounceTransformStyles}
                  onCardClick={(idx) =>
                    handleOpenLightbox(aeonMallImages[idx], `AEON Event Media Shot 0${idx + 1}`)
                  }
                />
              </div>

              {/* Mobile view: Stack component */}
              <div className="flex sm:hidden justify-center items-center h-[230px] w-[200px] relative my-2">
                <Stack
                  cards={stackCards}
                  randomRotation={true}
                  sendToBackOnClick={true}
                  sensitivity={120}
                />
              </div>
            </Suspense>
          </div>
        </div>

        {/* Feature Execution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-[#CCE5E3] space-y-3 shadow-xs hover:border-[#0B6E7B] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#0B6E7B]/10 text-[#0B6E7B] flex items-center justify-center">
              <i className="fa-solid fa-bullhorn text-base"></i>
            </div>
            <h4 className="font-display text-base sm:text-lg uppercase tracking-tight text-[#0C2B31]">
              Job Fairs & Mass Recruitment Support
            </h4>
            <p className="font-sans text-sm text-[#4E6E75] leading-relaxed">
              Coordinated candidate touchpoints, on-site event logistics, and brand booth presence for university job fairs and large-scale recruitment drives.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#CCE5E3] space-y-3 shadow-xs hover:border-[#0B6E7B] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#0B6E7B]/10 text-[#0B6E7B] flex items-center justify-center">
              <i className="fa-solid fa-camera-retro text-base"></i>
            </div>
            <h4 className="font-display text-base sm:text-lg uppercase tracking-tight text-[#0C2B31]">
              Onsite Photography & Multimedia Content
            </h4>
            <p className="font-sans text-sm text-[#4E6E75] leading-relaxed">
              Captured documentary photos and videos during live recruitment sessions, collecting footage and editing post-event communication materials.
            </p>
          </div>
        </div>
      </div>

      {/* Single Image Lightbox Modal */}
      <ImageLightboxModal selectedImage={selectedImage} onClose={handleCloseLightbox} />
    </div>
  );
}
