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
    <div className="space-y-10 pt-2" onClick={(e) => e.stopPropagation()}>
      {/* KEY METRIC COUNTERS WITH ANIMATED COUNT-UP */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {webinarMetrics.map((metric, mIdx) => (
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
      {/* SECTION 2: HIGHLIGHT SHORT-FORM VIDEO & BEHIND-THE-SCENES */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-6 border-t border-[#CCE5E3]">
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
      <div className="space-y-6 pt-8 border-t border-[#CCE5E3]">
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

