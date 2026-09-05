import { useState, useMemo, useCallback, useEffect, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import { beneliftsData } from "../../data/beneliftsData";
import GallerySkeleton from "./GallerySkeleton";
import AnimatedCounter from "./AnimatedCounter";
import HighlightText from "./HighlightText";
import FacebookEmbed from "./FacebookEmbed";

// Lazy import interactive sub-components
const BounceCards = lazy(() => import("./BounceCards"));
const Stack = lazy(() => import("./Stack"));

interface CustomGalleryModalState {
  isOpen: boolean;
  title: string;
  category: string;
  images: string[];
  currentIndex: number;
}

const bounceTransformStyles = [
  "rotate(10deg) translate(-160px)",
  "rotate(5deg) translate(-80px)",
  "rotate(-2deg)",
  "rotate(-8deg) translate(80px)",
  "rotate(3deg) translate(160px)",
];

export default function BeneliftsAsiaExperienceShowcase() {
  // Gallery Modal state for Event Photography and Design Collages
  const [galleryModal, setGalleryModal] = useState<CustomGalleryModalState>({
    isOpen: false,
    title: "",
    category: "",
    images: [],
    currentIndex: 0,
  });

  const openGalleryModal = useCallback((title: string, category: string, images: string[], startIndex: number = 0) => {
    setGalleryModal({
      isOpen: true,
      title,
      category,
      images,
      currentIndex: startIndex,
    });
  }, []);

  const closeGalleryModal = useCallback(() => {
    setGalleryModal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const nextGalleryImage = useCallback(() => {
    setGalleryModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  }, []);

  const prevGalleryImage = useCallback(() => {
    setGalleryModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  }, []);

  // Keyboard navigation for Gallery Modal
  useEffect(() => {
    if (!galleryModal.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGalleryModal();
      if (e.key === "ArrowRight") nextGalleryImage();
      if (e.key === "ArrowLeft") prevGalleryImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryModal.isOpen, nextGalleryImage, prevGalleryImage]);

  // Memoized top 5 images for BounceCards and Stack
  const photoImages = beneliftsData.eventPillar.photographyCollage.images;
  const photoImagesTop5 = useMemo(() => photoImages.slice(0, 5), [photoImages]);
  const remainingPhotoImages = useMemo(() => photoImages.slice(5), [photoImages]);
  const photoStackCards = useMemo(
    () =>
      photoImagesTop5.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Event Photo ${idx + 1}`}
          className="w-full h-full object-cover rounded-xl border border-[#CCE5E3] shadow-md select-none"
        />
      )),
    [photoImagesTop5]
  );

  const designImages = beneliftsData.eventPillar.designCollage.images;
  const designImagesTop5 = useMemo(() => designImages.slice(0, 5), [designImages]);
  const remainingDesignImages = useMemo(() => designImages.slice(5), [designImages]);
  const designStackCards = useMemo(
    () =>
      designImagesTop5.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Event Design ${idx + 1}`}
          className="w-full h-full object-cover rounded-xl border border-[#CCE5E3] shadow-md select-none"
        />
      )),
    [designImagesTop5]
  );

  const designAssetsImages = beneliftsData.designAssetsCollage.images;
  const designAssetsTop5 = useMemo(() => designAssetsImages.slice(0, 5), [designAssetsImages]);
  const remainingDesignAssets = useMemo(() => designAssetsImages.slice(5), [designAssetsImages]);
  const designAssetsStackCards = useMemo(
    () =>
      designAssetsTop5.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Design Asset ${idx + 1}`}
          className="w-full h-full object-cover rounded-xl border border-[#CCE5E3] shadow-md select-none"
        />
      )),
    [designAssetsTop5]
  );

  return (
    <div className="space-y-10 pt-2" onClick={(e) => e.stopPropagation()}>
      {/* KEY METRIC COUNTERS WITH ANIMATED COUNT-UP */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {beneliftsData.keyMetrics.map((metric, mIdx) => (
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

      {/* SECTION: DESIGN SOCIAL POST, THUMBNAIL WEBSITE ARTICLES AND POSM */}
      <div className="space-y-6 pt-6 border-t border-[#CCE5E3]">
        <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#CCE5E3] space-y-6 shadow-xs hover:border-[#0B6E7B] transition-all">
          <div className="space-y-1.5 border-b border-[#CCE5E3] pb-4">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-narrow text-sm sm:text-base font-black text-[#0C2B31] uppercase tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-paintbrush text-[#0B6E7B]"></i>
                <span>{beneliftsData.designAssetsCollage.title}</span>
                <span className="text-[#0B6E7B]">({beneliftsData.designAssetsCollage.countLabel})</span>
              </h4>
              <span className="font-mono text-[10px] text-[#0B6E7B] hidden sm:inline-block bg-[#F0F8F7] px-2.5 py-1 rounded-md border border-[#CCE5E3] font-bold">
                HOVER TO EXPAND &bull; CLICK TO ZOOM
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed">
              {beneliftsData.designAssetsCollage.subtitle}
            </p>
          </div>

          {/* Bounce Cards Display (Desktop: BounceCards, Mobile: Stack) */}
          <div className="w-full flex justify-center items-center py-6 overflow-hidden min-h-[300px] bg-[#F8FCFB] rounded-xl border border-[#CCE5E3]/60">
            <Suspense fallback={<GallerySkeleton height="280px" />}>
              {/* Desktop & Tablet view: BounceCards */}
              <div className="hidden sm:flex justify-center items-center">
                <BounceCards
                  images={designAssetsTop5}
                  containerWidth={520}
                  containerHeight={290}
                  animationDelay={0.15}
                  animationStagger={0.06}
                  transformStyles={bounceTransformStyles}
                  onCardClick={(idx) =>
                    openGalleryModal(
                      "Benelifts Asia — Design Social Post, Thumbnails & POSM",
                      "Visual Design & SEO Thumbnails",
                      designAssetsImages,
                      idx
                    )
                  }
                />
              </div>

              {/* Mobile view: Stack component */}
              <div className="flex sm:hidden justify-center items-center h-[230px] w-[200px] relative my-2">
                <Stack
                  cards={designAssetsStackCards}
                  randomRotation={true}
                  sendToBackOnClick={true}
                  sensitivity={120}
                />
              </div>
            </Suspense>
          </div>

          {/* Remaining images & full modal button */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CCE5E3]/60 pb-3">
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] uppercase tracking-wider flex items-center gap-1.5">
                <i className="fa-solid fa-layer-group text-xs"></i>
                <span>Additional Visual Assets ({remainingDesignAssets.length} Designs)</span>
              </span>
              <span className="font-sans text-xs text-[#4E6E75]">
                Click any design below to open full gallery
              </span>
            </div>

            {/* Grid of Remaining Images (excluding the 5 in bounce cards) */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
              {remainingDesignAssets.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    openGalleryModal(
                      "Benelifts Asia — Design Social Post, Thumbnails & POSM",
                      "Visual Design & SEO Thumbnails",
                      designAssetsImages,
                      idx + 5
                    )
                  }
                  className="aspect-square rounded-xl overflow-hidden border border-[#CCE5E3] hover:border-[#0B6E7B] hover:scale-105 transition-all group cursor-pointer shadow-2xs relative"
                >
                  <img
                    src={src}
                    alt={`Design Asset Additional ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-[#07262B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <i className="fa-solid fa-magnifying-glass-plus text-white text-xs"></i>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                openGalleryModal(
                  "Benelifts Asia — Design Social Post, Thumbnails & POSM",
                  "Visual Design & SEO Thumbnails",
                  designAssetsImages,
                  0
                )
              }
              className="w-full py-3 bg-[#F4FAF9] border border-[#CCE5E3] hover:bg-[#0B6E7B] hover:text-white transition-all rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 text-[#0C2B31] cursor-pointer shadow-2xs"
            >
              <i className="fa-solid fa-expand text-xs"></i>
              <span>View Full Design Collection ({designAssetsImages.length} Shots)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 5. SECTION 3.3: VIDEO EDITOR & SHORT-FORM MEDIA PRODUCTION */}
      <div className="space-y-6 pt-8 border-t border-[#CCE5E3]">
        <div className="border-b border-[#CCE5E3] pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                VIDEO PRODUCTION & MULTI-BRAND REELS
              </span>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2.5">
                <i className="fa-solid fa-clapperboard text-[#0B6E7B]"></i>
                <span>{beneliftsData.videoPillar.title}</span>
              </h4>
            </div>

            {/* Metrics Box with Animated Count Up */}
            <div className="grid grid-cols-3 divide-x divide-[#CCE5E3] bg-white py-2 px-3 rounded-xl border border-[#CCE5E3] shadow-xs">
              <div className="text-center px-2.5">
                <span className="block font-display text-base sm:text-lg text-[#0C2B31] tracking-tight leading-none">
                  <AnimatedCounter value={beneliftsData.videoPillar.stats.views} />
                </span>
                <span className="font-narrow text-[10px] uppercase font-bold text-[#4E6E75] block mt-1">
                  Views
                </span>
              </div>
              <div className="text-center px-2.5">
                <span className="block font-display text-base sm:text-lg text-[#0C2B31] tracking-tight leading-none">
                  <AnimatedCounter value={beneliftsData.videoPillar.stats.likes} />
                </span>
                <span className="font-narrow text-[10px] uppercase font-bold text-[#4E6E75] block mt-1">
                  Likes
                </span>
              </div>
              <div className="text-center px-2.5">
                <span className="block font-display text-base sm:text-lg text-[#0C2B31] tracking-tight leading-none">
                  <AnimatedCounter value={beneliftsData.videoPillar.stats.shares} />
                </span>
                <span className="font-narrow text-[10px] uppercase font-bold text-[#4E6E75] block mt-1">
                  Shares
                </span>
              </div>
            </div>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed max-w-5xl">
            <HighlightText text={beneliftsData.videoPillar.overview} />
          </p>
        </div>

        {/* 4 Highlight Facebook Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {beneliftsData.videoPillar.videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs"
            >
              {/* Live Video Embed Player */}
              <div className="relative w-full bg-[#07262B] p-4 flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full flex justify-center items-center">
                  <div className="w-full max-w-[340px] sm:max-w-[380px] h-[520px] sm:h-[580px] rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10 relative flex items-center justify-center">
                    <FacebookEmbed url={video.videoUrl} className="w-full h-full" />
                  </div>
                </div>

                {/* Title in the video: appears on hover */}
                <div className="absolute inset-x-0 top-0 p-4 sm:p-5 bg-gradient-to-b from-[#07262B]/95 via-[#07262B]/75 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center justify-between gap-3 z-10">
                  <div className="flex items-center gap-3">
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open on Facebook"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 active:scale-95 transition-all shrink-0 pointer-events-auto bg-[#1877F2] hover:bg-[#1565C0]"
                    >
                      <i className="fa-brands fa-facebook-f text-sm"></i>
                    </a>
                    <h5 className="font-display text-base sm:text-lg text-white uppercase tracking-tight font-bold drop-shadow-md">
                      {video.brandName}
                    </h5>
                  </div>

                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#0B6E7B] hover:bg-[#08545E] text-white text-xs font-narrow font-bold uppercase rounded-lg shadow-sm transition-all pointer-events-auto shrink-0 flex items-center gap-1.5"
                  >
                    <span>Facebook</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="p-4 sm:p-5 space-y-3 bg-white border-t border-[#CCE5E3]/80">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-narrow text-xs font-bold text-[#0B6E7B] uppercase tracking-wider">
                      {video.brandName}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#4E6E75]">
                      {video.highlight}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#4E6E75]">
                    <HighlightText text={video.description} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. SECTION 3.4: HIGHLIGHT FACEBOOK POSTS & COPYWRITING SHOWCASE */}
      <div className="space-y-6 pt-8 border-t border-[#CCE5E3]">
        <div className="border-b border-[#CCE5E3] pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                {beneliftsData.highlightPostsSection.title}
              </span>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2.5">
                <i className="fa-brands fa-facebook text-[#1877F2]"></i>
                <span>{beneliftsData.highlightPostsSection.sectionTitle}</span>
              </h4>
            </div>

            {/* Top Left / Header Drive Links */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={beneliftsData.highlightPostsSection.beneliftsDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white hover:bg-[#0B6E7B] text-[#0C2B31] hover:text-white border border-[#CCE5E3] hover:border-[#0B6E7B] rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
              >
                <i className="fa-brands fa-google-drive text-[#0B6E7B] group-hover:text-white"></i>
                <span>Post Drive (Benelifts)</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-70"></i>
              </a>

              <a
                href={beneliftsData.highlightPostsSection.casanovaDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white hover:bg-[#0B6E7B] text-[#0C2B31] hover:text-white border border-[#CCE5E3] hover:border-[#0B6E7B] rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
              >
                <i className="fa-brands fa-google-drive text-[#0B6E7B] group-hover:text-white"></i>
                <span>Post Drive (Casanova)</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-70"></i>
              </a>
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm font-bold text-[#0B6E7B]">
            {beneliftsData.highlightPostsSection.instruction}
          </p>

          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed max-w-5xl">
            <HighlightText text={beneliftsData.highlightPostsSection.description} />
          </p>
        </div>

        {/* 4 Highlight Facebook Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {beneliftsData.highlightPostsSection.posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-2xs group"
            >
              {/* Card Header (Facebook Brand Identity) */}
              <div className="p-4 sm:p-5 border-b border-[#CCE5E3]/80 bg-[#FBFDFD] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-xs shrink-0">
                    <i className="fa-brands fa-facebook-f text-base"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-sans font-bold text-sm sm:text-base text-[#0C2B31]">
                        {post.brandName}
                      </span>
                      <i className="fa-solid fa-circle-check text-sky-500 text-xs" title="Official Brand Page"></i>
                    </div>
                    <span className="font-narrow text-xs font-bold text-[#0B6E7B] uppercase tracking-wider block">
                      {post.postNumber} &bull; {post.category}
                    </span>
                  </div>
                </div>

                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#F0F8F7] hover:bg-[#0B6E7B] text-[#0B6E7B] hover:text-white border border-[#CCE5E3] hover:border-[#0B6E7B] rounded-lg font-narrow text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-2xs"
                >
                  <span>View Post</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
              </div>

              {/* Card Content (Formatted Post Copy) */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h5 className="font-sans font-bold text-base sm:text-lg text-[#0C2B31] leading-snug">
                    {post.title}
                  </h5>

                  <div className="font-sans text-sm sm:text-base text-[#2C4A51] leading-relaxed whitespace-pre-line bg-[#F8FCFB] p-4 rounded-xl border border-[#CCE5E3]/60 max-h-[380px] overflow-y-auto custom-scrollbar">
                    {post.content}
                  </div>
                </div>

                {/* Card Footer: Action Links & Tags */}
                <div className="pt-3 border-t border-[#CCE5E3]/80 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <a
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-narrow font-bold text-[#1877F2] hover:text-[#0D5BC6] uppercase tracking-wider transition-colors"
                    >
                      <i className="fa-brands fa-facebook"></i>
                      <span>Open on Facebook</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>

                    <span className="font-narrow text-xs font-semibold text-[#6A8B92]">
                      Benelifts Official Post
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-[#F0F8F7] text-[#0B6E7B] text-xs font-narrow font-semibold rounded-md border border-[#CCE5E3]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. SECTION 3.5: CORPORATE EVENTS, EXHIBITIONS & INTERNAL CELEBRATIONS */}
      <div className="space-y-8 pt-8 border-t border-[#CCE5E3]">
        {/* Section Header */}
        <div className="border-b border-[#CCE5E3] pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                {beneliftsData.eventPillar.sectionHeader}
              </span>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31]">
                {beneliftsData.eventPillar.title}
              </h4>
            </div>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed max-w-5xl">
            <HighlightText text={beneliftsData.eventPillar.overview} />
          </p>
        </div>

        {/* 2 INTERACTIVE VISUAL COLLAGES: STACKED UP-DOWN (SINGLE COLUMN) */}
        <div className="flex flex-col space-y-8">
          {/* COLLAGE 1: EVENT PHOTOGRAPHY & EVENT COVERAGE */}
          <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#CCE5E3] space-y-6 shadow-xs hover:border-[#0B6E7B] transition-all">
            <div className="space-y-1.5 border-b border-[#CCE5E3] pb-4">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-narrow text-sm sm:text-base font-black text-[#0C2B31] uppercase tracking-wider flex items-center gap-2">
                  <i className="fa-solid fa-camera text-[#0B6E7B]"></i>
                  <span>{beneliftsData.eventPillar.photographyCollage.title}</span>
                  <span className="text-[#0B6E7B]">({beneliftsData.eventPillar.photographyCollage.countLabel})</span>
                </h4>
                <span className="font-mono text-[10px] text-[#0B6E7B] hidden sm:inline-block bg-[#F0F8F7] px-2.5 py-1 rounded-md border border-[#CCE5E3] font-bold">
                  HOVER TO EXPAND &bull; CLICK TO ZOOM
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed">
                {beneliftsData.eventPillar.photographyCollage.subtitle}
              </p>
            </div>

            {/* Bounce Cards Display (Desktop: BounceCards, Mobile: Stack) */}
            <div className="w-full flex justify-center items-center py-6 overflow-hidden min-h-[300px] bg-[#F8FCFB] rounded-xl border border-[#CCE5E3]/60">
              <Suspense fallback={<GallerySkeleton height="280px" />}>
                {/* Desktop & Tablet view: BounceCards */}
                <div className="hidden sm:flex justify-center items-center">
                  <BounceCards
                    images={photoImagesTop5}
                    containerWidth={520}
                    containerHeight={290}
                    animationDelay={0.15}
                    animationStagger={0.06}
                    transformStyles={bounceTransformStyles}
                    onCardClick={(idx) =>
                      openGalleryModal(
                        "Benelifts Asia — Event Photography & Coverage",
                        "Event Operations & Photography",
                        photoImages,
                        idx
                      )
                    }
                  />
                </div>

                {/* Mobile view: Stack component */}
                <div className="flex sm:hidden justify-center items-center h-[230px] w-[200px] relative my-2">
                  <Stack
                    cards={photoStackCards}
                    randomRotation={true}
                    sendToBackOnClick={true}
                    sensitivity={120}
                  />
                </div>
              </Suspense>
            </div>

            {/* Remaining images & full modal button */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CCE5E3]/60 pb-3">
                <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] uppercase tracking-wider flex items-center gap-1.5">
                  <i className="fa-solid fa-images text-xs"></i>
                  <span>Additional Event Shots ({remainingPhotoImages.length} Photos)</span>
                </span>
                <span className="font-sans text-xs text-[#4E6E75]">
                  Click any shot below to open full gallery
                </span>
              </div>

              {/* Grid of Remaining Images (excluding the 5 in bounce cards) */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
                {remainingPhotoImages.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      openGalleryModal(
                        "Benelifts Asia — Event Photography & Coverage",
                        "Event Operations & Photography",
                        photoImages,
                        idx + 5
                      )
                    }
                    className="aspect-square rounded-xl overflow-hidden border border-[#CCE5E3] hover:border-[#0B6E7B] hover:scale-105 transition-all group cursor-pointer shadow-2xs relative"
                  >
                    <img
                      src={src}
                      alt={`Event Photography Additional ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-[#07262B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <i className="fa-solid fa-magnifying-glass-plus text-white text-xs"></i>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  openGalleryModal(
                    "Benelifts Asia — Event Photography & Coverage",
                    "Event Operations & Photography",
                    photoImages,
                    0
                  )
                }
                className="w-full py-3 bg-[#F4FAF9] border border-[#CCE5E3] hover:bg-[#0B6E7B] hover:text-white transition-all rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 text-[#0C2B31] cursor-pointer shadow-2xs"
              >
                <i className="fa-solid fa-expand text-xs"></i>
                <span>View Full Photo Set ({photoImages.length} Shots)</span>
              </button>
            </div>
          </div>

          {/* COLLAGE 2: EVENT VISUALS & GRAPHIC DESIGN */}
          <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#CCE5E3] space-y-6 shadow-xs hover:border-[#0B6E7B] transition-all">
            <div className="space-y-1.5 border-b border-[#CCE5E3] pb-4">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-narrow text-sm sm:text-base font-black text-[#0C2B31] uppercase tracking-wider flex items-center gap-2">
                  <i className="fa-solid fa-palette text-[#0B6E7B]"></i>
                  <span>{beneliftsData.eventPillar.designCollage.title}</span>
                  <span className="text-[#0B6E7B]">({beneliftsData.eventPillar.designCollage.countLabel})</span>
                </h4>
                <span className="font-mono text-[10px] text-[#0B6E7B] hidden sm:inline-block bg-[#F0F8F7] px-2.5 py-1 rounded-md border border-[#CCE5E3] font-bold">
                  HOVER TO EXPAND &bull; CLICK TO ZOOM
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed">
                {beneliftsData.eventPillar.designCollage.subtitle}
              </p>
            </div>

            {/* Bounce Cards Display (Desktop: BounceCards, Mobile: Stack) */}
            <div className="w-full flex justify-center items-center py-6 overflow-hidden min-h-[300px] bg-[#F8FCFB] rounded-xl border border-[#CCE5E3]/60">
              <Suspense fallback={<GallerySkeleton height="280px" />}>
                {/* Desktop & Tablet view: BounceCards */}
                <div className="hidden sm:flex justify-center items-center">
                  <BounceCards
                    images={designImagesTop5}
                    containerWidth={520}
                    containerHeight={290}
                    animationDelay={0.15}
                    animationStagger={0.06}
                    transformStyles={bounceTransformStyles}
                    onCardClick={(idx) =>
                      openGalleryModal(
                        "Benelifts Asia — Event Visuals & Graphic Design",
                        "Event Visuals & Branding",
                        designImages,
                        idx
                      )
                    }
                  />
                </div>

                {/* Mobile view: Stack component */}
                <div className="flex sm:hidden justify-center items-center h-[230px] w-[200px] relative my-2">
                  <Stack
                    cards={designStackCards}
                    randomRotation={true}
                    sendToBackOnClick={true}
                    sensitivity={120}
                  />
                </div>
              </Suspense>
            </div>

            {/* Remaining images & full modal button */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CCE5E3]/60 pb-3">
                <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] uppercase tracking-wider flex items-center gap-1.5">
                  <i className="fa-solid fa-layer-group text-xs"></i>
                  <span>Additional Visuals & POSM ({remainingDesignImages.length} Designs)</span>
                </span>
                <span className="font-sans text-xs text-[#4E6E75]">
                  Click any design below to open full gallery
                </span>
              </div>

              {/* Grid of Remaining Images (excluding the 5 in bounce cards) */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
                {remainingDesignImages.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      openGalleryModal(
                        "Benelifts Asia — Event Visuals & Graphic Design",
                        "Event Visuals & Branding",
                        designImages,
                        idx + 5
                      )
                    }
                    className="aspect-square rounded-xl overflow-hidden border border-[#CCE5E3] hover:border-[#0B6E7B] hover:scale-105 transition-all group cursor-pointer shadow-2xs relative"
                  >
                    <img
                      src={src}
                      alt={`Event Design Additional ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-[#07262B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <i className="fa-solid fa-magnifying-glass-plus text-white text-xs"></i>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  openGalleryModal(
                    "Benelifts Asia — Event Visuals & Graphic Design",
                    "Event Visuals & Branding",
                    designImages,
                    0
                  )
                }
                className="w-full py-3 bg-[#F4FAF9] border border-[#CCE5E3] hover:bg-[#0B6E7B] hover:text-white transition-all rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 text-[#0C2B31] cursor-pointer shadow-2xs"
              >
                <i className="fa-solid fa-expand text-xs"></i>
                <span>View Full Design Suite ({designImages.length} Shots)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 8. SECTION 3.6: SOME SELECTED WEBSITE CONTENTS */}
      <div className="space-y-6 pt-8 border-t border-[#CCE5E3]">
        <div className="border-b border-[#CCE5E3] pb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h4 className="font-display text-lg sm:text-xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2">
              <i className="fa-solid fa-newspaper text-base text-[#0B6E7B]"></i>
              <span>{beneliftsData.websiteArticlesSection.title}</span>
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#4E6E75] mt-0.5">
              {beneliftsData.websiteArticlesSection.description}
            </p>
          </div>

          {/* Links to Benelifts & Casanova SEO Plans */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={beneliftsData.websiteArticlesSection.beneliftsSeoPlanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white border border-[#CCE5E3] hover:border-[#0B6E7B] hover:bg-[#0B6E7B] hover:text-white transition-all rounded-lg font-narrow text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-[#0C2B31] shadow-xs"
            >
              <i className="fa-brands fa-google-drive text-[#0B6E7B]"></i>
              <span>Benelifts SEO Articles Plan</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
            </a>

            <a
              href={beneliftsData.websiteArticlesSection.casanovaSeoPlanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white border border-[#CCE5E3] hover:border-[#0B6E7B] hover:bg-[#0B6E7B] hover:text-white transition-all rounded-lg font-narrow text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-[#0C2B31] shadow-xs"
            >
              <i className="fa-brands fa-google-drive text-[#0B6E7B]"></i>
              <span>Casanova SEO Articles Plan</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
            </a>
          </div>
        </div>

        {/* Clean Article List */}
        <div className="space-y-3">
          {beneliftsData.websiteArticlesSection.articles.map((article) => (
            <div
              key={article.id}
              className="p-4 sm:p-5 bg-white rounded-xl border border-[#CCE5E3] hover:border-[#0B6E7B] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group shadow-2xs"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-[#F4FAF9] border border-[#CCE5E3] text-[#0C2B31] rounded">
                    {article.date}
                  </span>
                  <span className="font-narrow text-xs font-bold uppercase tracking-wider text-[#0B6E7B]">
                    {article.type}
                  </span>
                  <span className="text-[#CCE5E3]">•</span>
                  <span className="font-narrow text-xs font-medium text-[#4E6E75]">
                    By {article.author}
                  </span>
                </div>
                <h5 className="font-sans text-sm sm:text-base font-bold text-[#0C2B31] leading-snug group-hover:text-[#0B6E7B] transition-colors">
                  <HighlightText text={article.title} />
                </h5>
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#F4FAF9] border border-[#CCE5E3] hover:bg-[#0B6E7B] hover:text-white transition-all rounded-lg font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 text-[#0C2B31] flex-shrink-0"
              >
                <span>Read Article</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM FULLSCREEN GALLERY LIGHTBOX MODAL */}
      {galleryModal.isOpen &&
        galleryModal.images.length > 0 &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-[#07262B]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
            onClick={closeGalleryModal}
          >
            <div
              className="bg-[#0A3D44] border border-[#0B6E7B] rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col justify-between p-4 sm:p-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#0B6E7B]/40 pb-3 gap-3">
                <div>
                  <span className="font-narrow text-xs font-black uppercase text-[#2DD4BF] tracking-widest block">
                    {galleryModal.category}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl uppercase text-white tracking-wide">
                    {galleryModal.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-white/80 bg-white/10 px-3 py-1 rounded-lg border border-[#0B6E7B]/40">
                    {galleryModal.currentIndex + 1} / {galleryModal.images.length}
                  </span>
                  <button
                    onClick={closeGalleryModal}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0B6E7B] transition-colors flex items-center justify-center text-white cursor-pointer border border-[#0B6E7B]/40"
                    aria-label="Close modal"
                  >
                    <i className="fa-solid fa-xmark text-sm pointer-events-none"></i>
                  </button>
                </div>
              </div>

              {/* Large Centered Image Container */}
              <div className="relative flex-1 flex items-center justify-between my-2 min-h-[300px] max-h-[76vh] overflow-hidden">
                {galleryModal.images.length > 1 && (
                  <button
                    onClick={prevGalleryImage}
                    className="p-3 rounded-full bg-white/10 hover:bg-[#0B6E7B] text-white transition-all z-20 shadow-lg border border-[#0B6E7B]/40 cursor-pointer flex items-center justify-center shrink-0"
                    aria-label="Previous photo"
                  >
                    <i className="fa-solid fa-chevron-left text-base sm:text-lg pointer-events-none"></i>
                  </button>
                )}

                <div className="flex-1 flex items-center justify-center h-full px-2 overflow-hidden">
                  <img
                    src={galleryModal.images[galleryModal.currentIndex]}
                    alt={`Gallery ${galleryModal.currentIndex + 1}`}
                    className="max-h-[74vh] max-w-full w-auto object-contain rounded-lg shadow-xl border border-[#0B6E7B]/20 pointer-events-none"
                  />
                </div>

                {galleryModal.images.length > 1 && (
                  <button
                    onClick={nextGalleryImage}
                    className="p-3 rounded-full bg-white/10 hover:bg-[#0B6E7B] text-white transition-all z-20 shadow-lg border border-[#0B6E7B]/40 cursor-pointer flex items-center justify-center shrink-0"
                    aria-label="Next photo"
                  >
                    <i className="fa-solid fa-chevron-right text-base sm:text-lg pointer-events-none"></i>
                  </button>
                )}
              </div>

              {/* Bottom Thumbnail Strip */}
              {galleryModal.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-[#0B6E7B]/30 custom-scrollbar">
                  {galleryModal.images.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setGalleryModal((prev) => ({ ...prev, currentIndex: idx }))}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                        galleryModal.currentIndex === idx
                          ? "border-[#2DD4BF] scale-105 shadow-lg opacity-100"
                          : "border-white/20 opacity-50 hover:opacity-100 hover:border-[#0B6E7B]"
                      }`}
                    >
                      <img src={src} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover pointer-events-none" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
