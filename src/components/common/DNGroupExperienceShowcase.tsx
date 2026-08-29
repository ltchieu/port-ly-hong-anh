import { useState, useCallback } from "react";
import { dnGroupData, getDNImage } from "../../data/dnGroupData";
import ImageLightboxModal from "./ImageLightboxModal";
import AnimatedCounter from "./AnimatedCounter";
import HighlightText from "./HighlightText";
import FacebookEmbed from "./FacebookEmbed";
import TikTokEmbed from "./TikTokEmbed";
import type { LightboxImageData } from "../../models/imageLightboxModal";

export default function DNGroupExperienceShowcase() {
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);

  const handleOpenLightbox = useCallback((src: string, title: string, description?: string) => {
    setSelectedImage({
      src,
      title,
      category: "DN GROUP • SHARK DENTAL",
      description: description || "Shark Dental marketing and social media campaign asset.",
    });
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="space-y-10 pt-6 border-t border-[#CCE5E3]" onClick={(e) => e.stopPropagation()}>
      {/* 1. CORPORATE ECOSYSTEM & MISSION BANNER */}
      <div className="bg-gradient-to-r from-[#07262B] via-[#0A3D44] to-[#07262B] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#0B6E7B]/40 relative overflow-hidden group">
        <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 w-56 h-56 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0B6E7B]/40 pb-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0B6E7B]/40 backdrop-blur-md rounded-full text-xs sm:text-sm font-narrow font-black tracking-widest text-[#2DD4BF] uppercase border border-[#0B6E7B]/50">
              <i className="fa-solid fa-tooth text-xs"></i>
              <span>Project 01 • Corporate & Brand Overview</span>
            </div>
            <span className="font-mono text-xs sm:text-sm text-[#2DD4BF] bg-white/10 px-3.5 py-1 rounded-md border border-[#0B6E7B]/40 font-bold">
              {dnGroupData.overview.scale} • {dnGroupData.overview.offices}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                {dnGroupData.companyName} — {dnGroupData.brandName}
              </h4>
              <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed">
                <HighlightText text={dnGroupData.overview.description} />
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="font-narrow text-xs sm:text-sm text-[#2DD4BF] font-black uppercase tracking-wider">
                  Group Brands:
                </span>
                {dnGroupData.overview.ecosystemBrands.map((brand, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-3 py-1.5 bg-white/10 text-white rounded-md text-xs sm:text-sm font-narrow font-bold border border-white/20 hover:border-[#2DD4BF] transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div
                onClick={() =>
                  handleOpenLightbox(
                    getDNImage("dn_group_img_01.webp"),
                    "DN Group — Shark Dental Brand Highlight"
                  )
                }
                className="w-full sm:w-72 aspect-[4/3] rounded-xl overflow-hidden border border-[#0B6E7B]/40 relative group cursor-pointer shadow-md"
              >
                <img
                  src={getDNImage("dn_group_img_01.webp")}
                  alt="DN Group Portfolio Overview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07262B]/80 via-transparent to-transparent flex items-end p-3.5">
                  <span className="text-xs font-narrow font-bold text-[#2DD4BF] flex items-center gap-1.5">
                    <i className="fa-solid fa-magnifying-glass-plus text-xs"></i>
                    Click to Zoom
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. KEY METRIC COUNTERS WITH ANIMATED COUNT-UP */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {dnGroupData.keyMetrics.map((metric, mIdx) => (
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

      {/* 3. SECTION 1.1: SOCIAL MEDIA PERFORMANCE & ANALYTICS GRID */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#CCE5E3] pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                {dnGroupData.socialMediaPillar.title}
              </span>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2.5">
                <i className="fa-solid fa-chart-pie text-[#0B6E7B]"></i>
                <span>
                  {dnGroupData.socialMediaPillar.sectionTitle} ({dnGroupData.socialMediaPillar.assets.length} Assets)
                </span>
              </h4>
            </div>

            {/* Post High Performance Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#0B6E7B]/30 rounded-lg text-xs sm:text-sm shadow-2xs">
              <i className="fa-solid fa-trophy text-[#0B6E7B]"></i>
              <span className="font-narrow font-black text-[#0C2B31] uppercase">
                Best Post: 130,000+ Reach &bull; 160+ Likes &bull; 52 Comments
              </span>
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm font-bold text-[#0B6E7B]">
            {dnGroupData.socialMediaPillar.instruction}
          </p>

          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed max-w-5xl">
            <HighlightText text={dnGroupData.socialMediaPillar.description} />
          </p>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dnGroupData.socialMediaPillar.assets.map((post) => (
            <div
              key={post.id}
              onClick={() =>
                handleOpenLightbox(post.image, post.title, post.description)
              }
              className="bg-[#07262B] rounded-2xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-xl transition-all duration-300 group cursor-pointer relative aspect-[4/3] flex flex-col justify-between shadow-xs"
            >
              {/* Main Image */}
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-40"
              />

              {/* Category Tag Header */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
                <span className="px-2.5 py-1 bg-[#07262B]/85 backdrop-blur-md text-white font-narrow text-xs font-bold uppercase rounded-md tracking-wider border border-white/20">
                  {post.category}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </span>
              </div>

              {/* Rich Hover Overlay with Metrics */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07262B]/95 via-[#07262B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 z-20 pointer-events-none">
                <div className="space-y-3">
                  <div>
                    {post.channel && (
                      <span className="font-narrow text-[11px] font-bold text-[#2DD4BF] tracking-widest uppercase block mb-1">
                        {post.channel}
                      </span>
                    )}
                    <h5 className="font-sans font-bold text-base text-white leading-snug drop-shadow-sm">
                      {post.title}
                    </h5>
                  </div>

                  {/* Engagement Metrics Box */}
                  {post.stats && (
                    <div className="grid grid-cols-3 gap-1.5 p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 text-center text-white">
                      {post.stats.reach && (
                        <div className="px-1">
                          <span className="block font-display text-sm font-bold text-[#2DD4BF] leading-tight">
                            {post.stats.reach}
                          </span>
                          <span className="font-narrow text-[10px] uppercase text-white/70 tracking-wider">Reach</span>
                        </div>
                      )}
                      {post.stats.likes && (
                        <div className="px-1">
                          <span className="block font-display text-sm font-bold text-white leading-tight">
                            {post.stats.likes}
                          </span>
                          <span className="font-narrow text-[10px] uppercase text-white/70 tracking-wider">Likes</span>
                        </div>
                      )}
                      {post.stats.comments && (
                        <div className="px-1">
                          <span className="block font-display text-sm font-bold text-white leading-tight">
                            {post.stats.comments}
                          </span>
                          <span className="font-narrow text-[10px] uppercase text-white/70 tracking-wider">Comments</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {post.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-white/15 text-white/90 text-[11px] font-narrow font-semibold rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SECTION 1.2: VIDEO EDITOR & SHORT-FORM PRODUCTION */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#CCE5E3] pb-5 space-y-3">
          <div>
            <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
              VIDEO EDITING & VIRAL TIKTOK CHANNELS
            </span>
            <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31]">
              {dnGroupData.videoEditorPillars.title}
            </h4>
          </div>
          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed max-w-5xl">
            <HighlightText text={dnGroupData.videoEditorPillars.overview} />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dnGroupData.videoEditorPillars.projects.map((video) => {
            const isFacebook = video.platform === "facebook";

            return (
              <div
                key={video.id}
                className="bg-white rounded-2xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                {/* Live Video Embed Player directly rendered with title on hover inside video */}
                <div className="relative w-full bg-[#07262B] p-4 flex flex-col items-center justify-center overflow-hidden">
                  <div className="w-full flex justify-center items-center">
                    {isFacebook ? (
                      <div className="w-full max-w-[340px] sm:max-w-[380px] h-[520px] sm:h-[580px] rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10 relative flex items-center justify-center">
                        <FacebookEmbed url={video.videoUrl} className="w-full h-full" />
                      </div>
                    ) : (
                      <TikTokEmbed
                        url={video.videoUrl}
                        videoId={video.videoId}
                        title={video.title}
                        author="@sharkdentalxdieuuoccuame"
                      />
                    )}
                  </div>

                  {/* Title in the video: appears when hover */}
                  <div className="absolute inset-x-0 top-0 p-4 sm:p-5 bg-gradient-to-b from-[#07262B]/95 via-[#07262B]/75 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center justify-between gap-3 z-10">
                    <div className="flex items-center gap-3">
                      <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={isFacebook ? "Open on Facebook" : "Open on TikTok"}
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 active:scale-95 transition-all shrink-0 pointer-events-auto ${
                          isFacebook
                            ? "bg-[#1877F2] hover:bg-[#1565C0]"
                            : "bg-black hover:bg-neutral-800 border border-white/20"
                        }`}
                      >
                        <i className={`${isFacebook ? "fa-brands fa-facebook-f" : "fa-brands fa-tiktok"} text-sm`}></i>
                      </a>
                      <h5 className="font-display text-base sm:text-lg text-white uppercase tracking-tight font-bold drop-shadow-md">
                        {video.title}
                      </h5>
                    </div>

                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#0B6E7B] hover:bg-[#08545E] text-white text-xs font-narrow font-bold uppercase rounded-lg shadow-sm transition-all pointer-events-auto shrink-0 flex items-center gap-1.5"
                    >
                      <span>{isFacebook ? "Facebook" : "TikTok"}</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                  {/* Bottom Action buttons on hover: Brief Video & Kịch bản đi quay */}
                  {(video.briefUrl || video.scriptUrl) && (
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-[#07262B]/95 via-[#07262B]/75 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex flex-wrap items-center justify-center gap-2.5 z-10">
                      {video.briefUrl && (
                        <a
                          href={video.briefUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 bg-white/95 backdrop-blur-md hover:bg-white text-[#0C2B31] border border-white/20 rounded-xl font-narrow text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:scale-105 pointer-events-auto cursor-pointer"
                        >
                          <i className="fa-solid fa-table text-emerald-600"></i>
                          <span>Brief Video</span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-[#4E6E75]"></i>
                        </a>
                      )}

                      {video.scriptUrl && (
                        <a
                          href={video.scriptUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 bg-[#0B6E7B]/90 backdrop-blur-md hover:bg-[#0B6E7B] text-white border border-[#2DD4BF]/40 rounded-xl font-narrow text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:scale-105 pointer-events-auto cursor-pointer"
                        >
                          <i className="fa-solid fa-clapperboard text-[#2DD4BF]"></i>
                          <span>Kịch bản đi quay</span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-80"></i>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal selectedImage={selectedImage} onClose={handleCloseLightbox} />
    </div>
  );
}
