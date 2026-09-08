import { useState, useCallback, useMemo, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import ImageLightboxModal from './ImageLightboxModal';
import GallerySkeleton from './GallerySkeleton';
import AnimatedCounter from './AnimatedCounter';
import YouTubeEmbed from './YouTubeEmbed';
import type { LightboxImageData } from '../../models/imageLightboxModal';
import {
  PANASONIC_WEBINAR_VIDEO_URL,
  panasonicWebinarVideo,
  webinarMetrics,
  webinarPhotoCaptions,
  getPanasonicWebinarImage,
} from '../../data/panasonicWebinarData';

// Lazy import interactive sub-components
const BounceCards = lazy(() => import('./BounceCards'));
const Stack = lazy(() => import('./Stack'));

const bounceTransformStyles = [
  'rotate(10deg) translate(-140px)',
  'rotate(5deg) translate(-70px)',
  'rotate(-3deg)',
  'rotate(-10deg) translate(70px)',
  'rotate(2deg) translate(140px)',
];

export default function FreelanceExperienceShowcase() {
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // All 8 webinar event photos
  const allImages = useMemo(
    () => webinarPhotoCaptions.map((item) => getPanasonicWebinarImage(item.filename)),
    []
  );

  // Top 5 photos for BounceCards and Stack
  const bounceImages = useMemo(() => allImages.slice(0, 5), [allImages]);

  const stackCards = useMemo(
    () =>
      bounceImages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Webinar Event Photo ${idx + 1}`}
          className="w-full h-full object-cover rounded-xl border border-[#CCE5E3] shadow-md select-none"
        />
      )),
    [bounceImages]
  );

  const handleOpenLightbox = useCallback(
    (src: string, title?: string, description?: string) => {
      setSelectedImage({
        src,
        title: title || 'Panasonic Webinar Event Photography',
        category: 'PANASONIC CFAN WEBINAR',
        description:
          description || 'Webinar operations, technical setup, and speaker coordination photography.',
      });
    },
    []
  );

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="space-y-10 pt-2" onClick={(e) => e.stopPropagation()}>
      {/* 1. KEY METRIC COUNTERS WITH ANIMATED COUNT-UP */}
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

      {/* 2. TWO-PART SHOWCASE: EVENT PHOTOGRAPHY BOUNCE CARDS (LEFT) & VIDEO RECAP SHORTS (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* LEFT CARD: WEBINAR EVENT PHOTOGRAPHY */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#CCE5E3] p-5 sm:p-7 flex flex-col justify-between space-y-6 shadow-xs hover:border-[#0B6E7B]/40 transition-all">
          {/* Card Header */}
          <div className="border-b border-[#CCE5E3]/80 pb-4 space-y-1">
            <h4 className="font-narrow text-xs sm:text-sm font-black text-[#0C2B31] uppercase tracking-wider flex items-center gap-2">
              <i className="fa-solid fa-layer-group text-[#0B6E7B]"></i>
              <span>WEBINAR EVENT PHOTOGRAPHY</span>
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#4E6E75]">
              Hover over cards to trigger bounce animation; click photo to expand.
            </p>
          </div>

          {/* Interactive Bounce Cards Display */}
          <div className="w-full flex justify-center items-center py-4 sm:py-6 overflow-hidden min-h-[300px] sm:min-h-[320px] bg-white rounded-xl border border-[#CCE5E3]/40 flex-1">
            <Suspense fallback={<GallerySkeleton height="280px" />}>
              {/* Desktop & Tablet: BounceCards */}
              <div className="hidden sm:flex justify-center items-center">
                <BounceCards
                  images={bounceImages}
                  containerWidth={260}
                  containerHeight={170}
                  animationDelay={0.15}
                  animationStagger={0.06}
                  transformStyles={bounceTransformStyles}
                  onCardClick={(idx) =>
                    handleOpenLightbox(
                      bounceImages[idx],
                      webinarPhotoCaptions[idx]?.title,
                      webinarPhotoCaptions[idx]?.subtitle
                    )
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

          {/* Card Bottom: Event Photo Collection Thumbnails */}
          <div className="pt-4 border-t border-[#CCE5E3]/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-black text-[#4E6E75] uppercase tracking-wider">
                EVENT PHOTO COLLECTION ({allImages.length})
              </span>
              <span className="font-sans text-xs text-[#0B6E7B] font-medium hidden sm:inline">
                Click photo to expand
              </span>
            </div>

            {/* 5 Thumbnails Row */}
            <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
              {allImages.slice(0, 5).map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() =>
                    handleOpenLightbox(
                      img,
                      webinarPhotoCaptions[idx]?.title,
                      webinarPhotoCaptions[idx]?.subtitle
                    )
                  }
                  className="aspect-square rounded-xl overflow-hidden border border-[#CCE5E3] hover:border-[#0B6E7B] hover:shadow-md transition-all duration-300 group/thumb cursor-pointer relative bg-[#F0F8F7]"
                  title={webinarPhotoCaptions[idx]?.title || `Photo ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                  />
                  {idx === 4 && allImages.length > 5 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-mono text-xs font-black group-hover/thumb:bg-black/30 transition-colors">
                      +{allImages.length - 5}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CARD: WEBINAR VIDEO RECAP (DARK CARD MATCHING REFERENCE IMAGE) */}
        <div className="bg-[#0B1518] text-white rounded-2xl sm:rounded-3xl border border-[#CCE5E3]/30 p-5 sm:p-7 flex flex-col justify-between space-y-5 shadow-xs hover:border-[#0B6E7B]/50 transition-all relative group">
          {/* Card Top Header */}
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center text-base border border-red-500/30 shrink-0">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className="leading-tight">
                <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-tight">
                  YOUTUBE SHORTS
                </h4>
                <span className="font-sans text-xs text-white/60">
                  @panasonic_cfan
                </span>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-md border border-white/20 bg-white/5 text-[10px] font-mono font-bold text-white/80 uppercase tracking-widest">
              SHORTS
            </span>
          </div>

          {/* Video Preview Frame */}
          <div
            onClick={() => setIsVideoModalOpen(true)}
            className="relative w-full aspect-[9/13] sm:aspect-[9/12] max-w-xs mx-auto rounded-2xl overflow-hidden bg-black my-2 border border-white/15 shadow-2xl cursor-pointer group/screen select-none flex flex-col justify-between"
          >
            {/* Background Thumbnail */}
            <img
              src={allImages[0]}
              alt="Panasonic Webinar Recap Video Preview"
              className="absolute inset-0 w-full h-full object-cover group-hover/screen:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/25 to-black/90 pointer-events-none" />

            {/* Top Creator Identity */}
            <div className="relative z-10 p-3 sm:p-3.5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#004098] border border-white/40 flex items-center justify-center text-white font-black text-xs shrink-0 shadow-md">
                P
              </div>
              <div className="min-w-0 leading-tight">
                <span className="font-sans font-bold text-xs sm:text-sm text-white drop-shadow block truncate">
                  Panasonic Vietnam
                </span>
                <span className="font-sans text-[10px] sm:text-xs text-white/70 drop-shadow-xs block truncate">
                  @panasonic_cfan
                </span>
              </div>
            </div>

            {/* Center Circular Play Button */}
            <div className="relative z-10 flex items-center justify-center my-auto pointer-events-none">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl group-hover/screen:scale-110 group-hover/screen:bg-red-600 transition-all duration-300">
                <i className="fa-solid fa-play text-lg sm:text-xl translate-x-0.5"></i>
              </div>
            </div>

            {/* Right Action Button Column */}
            <div className="absolute right-3 bottom-14 z-10 flex flex-col items-center space-y-3 pointer-events-none">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                  <i className="fa-solid fa-heart text-xs text-white drop-shadow" />
                </div>
                <span className="font-mono text-[10px] font-bold text-white/90 mt-0.5">3,120</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                  <i className="fa-solid fa-comment text-xs text-white drop-shadow" />
                </div>
                <span className="font-mono text-[10px] font-bold text-white/90 mt-0.5">48</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                  <i className="fa-solid fa-share text-xs text-white drop-shadow" />
                </div>
                <span className="font-mono text-[10px] font-bold text-white/90 mt-0.5">760</span>
              </div>
            </div>

            {/* Bottom Scrubber & Media Bar */}
            <div className="relative z-10 px-3.5 pb-3 pt-2 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-white/80 pointer-events-none">
              <div className="flex items-center gap-2 text-xs">
                <i className="fa-solid fa-play text-[11px] text-white"></i>
                <i className="fa-solid fa-volume-high text-[11px] text-white/80"></i>
                <span className="font-mono text-[10px] sm:text-[11px] text-white/90 font-medium">
                  00:00/00:58
                </span>
              </div>
              <i className="fa-solid fa-expand text-[11px] text-white/80"></i>
            </div>
          </div>

          {/* Card Footer Bar */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-white/80 hover:text-white transition-colors truncate">
              <i className="fa-brands fa-youtube text-red-500"></i>
              <span className="truncate">@panasonic_cfan</span>
            </div>

            <a
              href={PANASONIC_WEBINAR_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-narrow font-bold uppercase tracking-wider text-white hover:text-red-400 transition-colors shrink-0"
            >
              <span>Watch on YouTube</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE YOUTUBE SHORTS VIDEO MODAL */}
      {isVideoModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-[#07262B]/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <div
              className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-3 right-3 z-50 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
              <YouTubeEmbed
                url={PANASONIC_WEBINAR_VIDEO_URL}
                videoId={panasonicWebinarVideo.videoId}
                title={panasonicWebinarVideo.title}
              />
            </div>
          </div>,
          document.body
        )}

      {/* 4. SINGLE IMAGE LIGHTBOX MODAL */}
      <ImageLightboxModal selectedImage={selectedImage} onClose={handleCloseLightbox} />
    </div>
  );
}
