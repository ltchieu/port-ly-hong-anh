import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { CarouselItemData } from "../../models/carousel";
import { ImageLightboxModal } from "./ImageLightboxModal";

interface CenterModeCarouselProps {
  items: CarouselItemData[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  variant?: "default" | "video" | "image";
}

function extractTikTokId(url: string): string {
  const shortlinkMap: Record<string, string> = {
    ZSVVXUgju: "7519379432910392584",
    ZSVVX9Csc: "7517883339034987783",
  };
  for (const [slug, id] of Object.entries(shortlinkMap)) {
    if (url.includes(slug)) return id;
  }
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : "7519379432910392584";
}

export default function CenterModeCarousel({
  items,
  autoplay = true,
  autoplayDelay = 4500,
  pauseOnHover = true,
  variant = "default",
}: CenterModeCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    src: string;
    title: string;
    category: string;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = items.length;
  const isVideoCarousel =
    variant === "video" || items.some((i) => i.isVideo || !!i.videoUrl);
  const isImageCarousel = variant === "image";

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Autoplay with pause on hover & manual pause support
  useEffect(() => {
    if (!autoplay || isManuallyPaused || totalItems <= 1) return;
    if (pauseOnHover && isHovered) return;

    const timer = setInterval(goNext, autoplayDelay);
    return () => clearInterval(timer);
  }, [
    autoplay,
    autoplayDelay,
    pauseOnHover,
    isHovered,
    isManuallyPaused,
    goNext,
    totalItems,
  ]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Image click handler: opens high-resolution lightbox
  const handleOpenImage = useCallback((item: CarouselItemData) => {
    if (item.image) {
      setActiveLightboxImage({
        src: item.image,
        title: item.alt || "Khoảnh Khắc Sự Kiện",
        category: "BENELIFTS ASIA • YEAR-END PARTY",
      });
    }
  }, []);

  /**
   * Get 3 visible items: [prev, active, next]
   * with wrap-around for infinite loop illusion.
   */
  const getVisibleIndices = () => {
    if (totalItems === 0) return [0, 0, 0];
    const prev = (activeIndex - 1 + totalItems) % totalItems;
    const next = (activeIndex + 1) % totalItems;
    return [prev, activeIndex, next];
  };

  const [prevIdx, currentIdx, nextIdx] = getVisibleIndices();

  if (totalItems === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Track */}
      <div className="relative flex items-center justify-center gap-4 sm:gap-8 px-2 sm:px-6 md:px-10 py-4">
        {/* Previous (left) card — partially visible */}
        <div
          onClick={goPrev}
          className={`hidden sm:block ${isVideoCarousel
            ? "w-[240px] md:w-[270px] lg:w-[300px]"
            : isImageCarousel
              ? "w-[260px] sm:w-[300px] md:w-[360px] lg:w-[400px]"
              : "w-[22%] md:w-[24%]"
            } flex-shrink-0 opacity-40 hover:opacity-80 scale-[0.90] hover:scale-[0.93] transition-all duration-500 cursor-pointer`}
          title="Xem video trước"
        >
          <CenterModeCard
            item={items[prevIdx]}
            position="side"
            isVideoMode={isVideoCarousel}
            isImageMode={isImageCarousel}
            onImageClick={handleOpenImage}
          />
        </div>

        {/* Active (center) card — full size */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`center-${currentIdx}`}
            className={`${isVideoCarousel
              ? "w-full max-w-[340px] sm:max-w-[360px] md:max-w-[380px]"
              : isImageCarousel
                ? "w-full max-w-[640px] sm:max-w-[740px] md:max-w-[820px]"
                : "w-full sm:w-[52%] md:w-[48%]"
              } flex-shrink-0 z-10`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <CenterModeCard
              item={items[currentIdx]}
              position="center"
              isVideoMode={isVideoCarousel}
              isImageMode={isImageCarousel}
              onImageClick={handleOpenImage}
            />
          </motion.div>
        </AnimatePresence>

        {/* Next (right) card — partially visible */}
        <div
          onClick={goNext}
          className={`hidden sm:block ${isVideoCarousel
            ? "w-[240px] md:w-[270px] lg:w-[300px]"
            : isImageCarousel
              ? "w-[260px] sm:w-[300px] md:w-[360px] lg:w-[400px]"
              : "w-[22%] md:w-[24%]"
            } flex-shrink-0 opacity-40 hover:opacity-80 scale-[0.90] hover:scale-[0.93] transition-all duration-500 cursor-pointer`}
          title="Xem video tiếp theo"
        >
          <CenterModeCard
            item={items[nextIdx]}
            position="side"
            isVideoMode={isVideoCarousel}
            isImageMode={isImageCarousel}
            onImageClick={handleOpenImage}
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-sm border border-[#CCE5E3] shadow-lg flex items-center justify-center text-[#0C2B31] hover:bg-[#0B6E7B] hover:text-white hover:border-[#0B6E7B] transition-all cursor-pointer hover:scale-105 active:scale-95"
        aria-label="Previous slide"
      >
        <i className="fa-solid fa-chevron-left text-sm" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-sm border border-[#CCE5E3] shadow-lg flex items-center justify-center text-[#0C2B31] hover:bg-[#0B6E7B] hover:text-white hover:border-[#0B6E7B] transition-all cursor-pointer hover:scale-105 active:scale-95"
        aria-label="Next slide"
      >
        <i className="fa-solid fa-chevron-right text-sm" />
      </button>

      {/* Controls: Indicators + Pause/Play auto-run toggle */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
                ? "w-8 h-2.5 bg-[#0B6E7B] shadow-sm"
                : "w-2.5 h-2.5 bg-[#CCE5E3] hover:bg-[#0B6E7B]/40"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Auto-run status / Pause-Play button */}
        {autoplay && (
          <button
            onClick={() => setIsManuallyPaused((prev) => !prev)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/85 hover:bg-[#0B6E7B] text-[#4E6E75] hover:text-white border border-[#CCE5E3] transition-all cursor-pointer ml-2 shadow-2xs"
            title={
              isManuallyPaused
                ? "Resume automatic carousel rotation"
                : "Pause automatic carousel rotation"
            }
          >
            <i
              className={`fa-solid ${isManuallyPaused || isHovered ? "fa-play" : "fa-pause"
                } text-[9px]`}
            />
            <span>
              {isManuallyPaused
                ? "Paused"
                : isHovered
                  ? "Hovered"
                  : "Auto"}
            </span>
          </button>
        )}
      </div>

      {/* Image Lightbox Modal for Photo Gallery (Khoảnh Khắc Đêm Tiệc) */}
      <ImageLightboxModal
        selectedImage={activeLightboxImage}
        onClose={() => setActiveLightboxImage(null)}
      />
    </div>
  );
}

/**
 * Individual Card supporting three modes:
 * 1. Image Mode (variant="image"): Pure photo gallery without titles
 * 2. Full Video Mode (variant="video"): Video player, click to watch directly on website, watch on... button for external site
 * 3. Standard Post Mode (default): Social post screenshot + body
 */
function CenterModeCard({
  item,
  position,
  isVideoMode = false,
  isImageMode = false,
  onImageClick,
}: {
  item: CarouselItemData;
  position: "center" | "side";
  isVideoMode?: boolean;
  isImageMode?: boolean;
  onImageClick?: (item: CarouselItemData) => void;
}) {
  const isCenter = position === "center";
  const [isCardHovered, setIsCardHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* =========================================================
   * 1. IMAGE MODE: Pure event photography without any title
   * ========================================================= */
  if (isImageMode) {
    return (
      <div
        className={`relative w-full aspect-[16/10] md:h-[460px] rounded-2xl overflow-hidden bg-[#07262B] transition-all duration-300 border group ${isCenter
          ? "border-[#CCE5E3] shadow-xl hover:shadow-2xl cursor-pointer"
          : "border-white/10 shadow-md pointer-events-none"
          }`}
        onClick={() => {
          if (isCenter && onImageClick) {
            onImageClick(item);
          }
        }}
      >
        {item.image && (
          <img
            src={item.image}
            alt={item.alt || "Khoảnh Khắc Đêm Tiệc Year-End Party"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        )}

        {/* Center Hover Magnifying Glass Overlay */}
        {isCenter && (
          <div className="absolute inset-0 bg-[#07262B]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-center backdrop-blur-[2px]">
            <div className="w-12 h-12 rounded-full bg-white/95 text-[#0B6E7B] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <i className="fa-solid fa-magnifying-glass-plus text-base" />
            </div>
            <span className="font-narrow text-xs font-black uppercase tracking-wider text-white bg-black/70 px-3.5 py-1 rounded-full border border-white/20 shadow-md">
              Click để phóng to ảnh
            </span>
          </div>
        )}
      </div>
    );
  }

  const isVideo = item.isVideo || !!item.videoUrl || isVideoMode;
  const isFacebook =
    item.platform?.toLowerCase() === "facebook" ||
    (item.videoUrl || item.link || "").includes("facebook.com");
  const isTikTok =
    item.platform?.toLowerCase() === "tiktok" ||
    (item.videoUrl || item.link || "").includes("tiktok.com");

  const videoTargetUrl = item.videoUrl || item.link || "";

  // Handle native HTML5 video element play/pause
  useEffect(() => {
    if (!videoRef.current) return;
    if (isCenter && isCardHovered) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isCenter, isCardHovered]);

  /* =========================================================
   * 2A. SIDE CARDS IN VIDEO MODE:
   * Displays the real video player showing its native thumbnail.
   * Clicks advance carousel to center.
   * ========================================================= */
  if (isVideo && !isCenter) {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-white/15 shadow-md pointer-events-none group">
        <div className="relative w-full h-[500px] sm:h-[560px] md:h-[600px] bg-black overflow-hidden flex items-center justify-center">
          {isFacebook ? (
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                videoTargetUrl
              )}&show_text=false&autoplay=0&t=0`}
              title={item.title || "Facebook Video Reel"}
              className="w-full h-full border-0 pointer-events-none"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : isTikTok ? (
            <iframe
              src={`https://www.tiktok.com/player/v1/${
                item.videoId || extractTikTokId(videoTargetUrl)
              }?autoplay=0`}
              title={item.title || "TikTok Video"}
              className="w-full h-full border-0 pointer-events-none"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <video
              src={videoTargetUrl}
              preload="metadata"
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          {/* Platform Tag Badge */}
          {item.tag && (
            <div className="absolute top-3.5 inset-x-3.5 z-20 flex items-center justify-between pointer-events-none">
              <span className="px-2.5 py-1 bg-[#0C2B31]/90 backdrop-blur-md text-white font-narrow text-[10px] font-black uppercase tracking-wider rounded-lg border border-white/15 flex items-center gap-1.5 shadow-md">
                {isFacebook && <i className="fa-brands fa-facebook-f text-[#1877F2]" />}
                {isTikTok && <i className="fa-brands fa-tiktok text-white" />}
                <span>{item.tag}</span>
              </span>
            </div>
          )}

          {/* Bottom Title & Subtitle */}
          <div className="absolute inset-x-0 bottom-0 p-4 pt-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent space-y-0.5 pointer-events-none z-10">
            {item.subtitle && (
              <span className="font-narrow text-[10px] font-bold text-[#2DD4BF] uppercase tracking-wider block truncate">
                {item.subtitle}
              </span>
            )}
            <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-tight truncate">
              {item.title}
            </h4>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
   * 2B. ACTIVE CENTER CARD IN VIDEO MODE:
   * Full interactive native video player with native thumbnail.
   * ========================================================= */
  if (isVideo && isCenter) {
    return (
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-black transition-all duration-300 border border-[#CCE5E3] shadow-xl hover:shadow-2xl group"
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
      >
        {/* Full Video Container */}
        <div className="relative w-full h-[500px] sm:h-[560px] md:h-[600px] bg-black overflow-hidden flex items-center justify-center">
          {/* Live Player showing native thumbnail */}
          {isFacebook ? (
            <iframe
              key={`fb-${item.id}`}
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                videoTargetUrl
              )}&show_text=false&autoplay=0&t=0`}
              title={item.title || "Facebook Video Reel"}
              className="w-full h-full border-0 pointer-events-auto"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : isTikTok ? (
            <iframe
              key={`tiktok-${item.id}`}
              src={`https://www.tiktok.com/player/v1/${
                item.videoId || extractTikTokId(videoTargetUrl)
              }?autoplay=0`}
              title={item.title || "TikTok Video"}
              className="w-full h-full border-0 pointer-events-auto"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <video
              ref={videoRef}
              src={videoTargetUrl}
              preload="metadata"
              muted
              playsInline
              controls
              className="w-full h-full object-cover"
            />
          )}

          {/* Top Tag Badge */}
          <div className="absolute top-3.5 inset-x-3.5 z-30 pointer-events-none flex items-center justify-between gap-2">
            {item.tag && (
              <span className="px-2.5 py-1 bg-[#0C2B31]/85 backdrop-blur-md text-white font-narrow text-[10px] sm:text-[11px] font-black uppercase tracking-wider rounded-lg border border-white/15 flex items-center gap-1.5 shadow-md">
                {isFacebook && (
                  <i className="fa-brands fa-facebook-f text-[#1877F2]" />
                )}
                {isTikTok && <i className="fa-brands fa-tiktok text-white" />}
                <span>{item.tag}</span>
              </span>
            )}
          </div>

          {/* Hover Overlay: Title + Action button */}
          <div
            className={`absolute inset-x-0 bottom-0 z-30 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/85 to-transparent transition-all duration-300 flex flex-col justify-end gap-2.5 pointer-events-none ${
              isCardHovered
                ? "opacity-100 translate-y-0"
                : "group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-3"
            }`}
          >
            {/* Title and Subtitle */}
            <div className="space-y-0.5 pointer-events-auto">
              {item.subtitle && (
                <span className="font-narrow text-[11px] font-black text-[#2DD4BF] uppercase tracking-wider block">
                  {item.subtitle}
                </span>
              )}
              <h4 className="font-display text-sm sm:text-base font-bold text-white uppercase tracking-tight leading-snug drop-shadow-md line-clamp-1">
                {item.title}
              </h4>
            </div>

            {/* Action Button: Watch on TikTok/Facebook (External) */}
            <div className="w-full flex items-center pointer-events-auto pt-1">
              {videoTargetUrl && (
                <a
                  href={videoTargetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-narrow text-xs font-black uppercase tracking-wider text-white shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                    isTikTok
                      ? "bg-gradient-to-r from-[#FE2C55] to-[#25F4EE] text-black shadow-[#25F4EE]/30"
                      : "bg-[#1877F2] hover:bg-[#166fe5] shadow-[#1877F2]/40"
                  }`}
                  title={`Mở video trên ${isTikTok ? "TikTok" : isFacebook ? "Facebook" : "website ngoài"}`}
                >
                  {isFacebook && <i className="fa-brands fa-facebook-f text-xs" />}
                  {isTikTok && <i className="fa-brands fa-tiktok text-xs" />}
                  <span>
                    Watch on {isTikTok ? "TikTok" : isFacebook ? "Facebook" : "Video"}
                  </span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[9px] ml-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
   * 3. STANDARD POST MODE: Static post screenshot + body
   * ========================================================= */
  return (
    <div
      className={`bg-white rounded-2xl border overflow-hidden flex flex-col h-full transition-all duration-300 ${isCenter
        ? "border-[#CCE5E3] shadow-lg hover:shadow-xl"
        : "border-[#E8F0EF] shadow-sm"
        }`}
    >
      {/* Post Screenshot Image */}
      {item.image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F0F8F7]">
          <img
            src={item.image}
            alt={item.title || "Post Preview"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {item.tag && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1.5 bg-[#0C2B31]/80 backdrop-blur-sm text-white font-narrow text-[10px] sm:text-[11px] font-black uppercase tracking-wider rounded-lg border border-white/10">
                {item.tag}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {item.subtitle && (
          <span className="font-narrow text-[11px] font-bold text-[#0B6E7B] uppercase tracking-wider block mb-1">
            {item.subtitle}
          </span>
        )}

        {/* Title */}
        {item.title && (
          <h4 className="font-display text-base sm:text-lg font-bold text-[#0C2B31] leading-snug tracking-tight line-clamp-2">
            {item.title}
          </h4>
        )}

        {/* Description */}
        {item.description && (
          <p className="font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed mt-2 line-clamp-2 flex-1">
            {item.description}
          </p>
        )}

        {/* Metrics Row */}
        {item.metrics && item.metrics.length > 0 && (
          <div className="flex items-stretch gap-0 mt-4 rounded-xl overflow-hidden border border-[#CCE5E3]">
            {item.metrics.map((m, mIdx) => (
              <div
                key={mIdx}
                className={`flex-1 py-2 px-1.5 text-center ${m.highlight
                  ? "bg-[#0B6E7B] text-white"
                  : "bg-[#F0F8F7] text-[#0C2B31]"
                  } ${mIdx > 0 ? "border-l border-[#CCE5E3]" : ""}`}
              >
                <div
                  className={`font-mono text-xs sm:text-sm font-black leading-none ${m.highlight ? "text-white" : "text-[#0B6E7B]"
                    }`}
                >
                  {m.value}
                </div>
                <div
                  className={`font-narrow text-[7px] sm:text-[8px] font-bold uppercase tracking-widest mt-1 ${m.highlight ? "text-white/80" : "text-[#4E6E75]"
                    }`}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Button Footer */}
        {item.link && (
          <div className="mt-4 pt-3 border-t border-[#E8F0EF]">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0F8F7] hover:bg-[#0B6E7B] text-[#0C2B31] hover:text-white font-narrow text-xs font-bold uppercase tracking-wider rounded-lg transition-all border border-[#CCE5E3] hover:border-[#0B6E7B] shadow-xs hover:shadow-md cursor-pointer w-full justify-center"
            >
              {item.icon ? (
                item.icon
              ) : (
                <i className="fa-brands fa-facebook-f text-[11px] text-[#1877F2]" />
              )}
              <span>View Post</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px] opacity-70 ml-auto" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
