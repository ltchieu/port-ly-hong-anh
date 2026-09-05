import { useState, useCallback } from "react";
import { vLotusData } from "../../data/vLotusData";
import ImageLightboxModal from "./ImageLightboxModal";
import AnimatedCounter from "./AnimatedCounter";
import HighlightText from "./HighlightText";
import FacebookEmbed from "./FacebookEmbed";
import TikTokEmbed from "./TikTokEmbed";
import type { LightboxImageData } from "../../models/imageLightboxModal";

export default function VLotusExperienceShowcase() {
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);

  const handleOpenLightbox = useCallback((src: string, title: string, description?: string) => {
    setSelectedImage({
      src,
      title,
      category: "V LOTUS • LOTUS GROUP F&B",
      description: description || "V Lotus Holdings culinary marketing and brand communication asset.",
    });
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="space-y-10 pt-2" onClick={(e) => e.stopPropagation()}>
      {/* 1. KEY METRIC COUNTERS / ACHIEVEMENTS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {vLotusData.keyMetrics.map((metric, mIdx) => (
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

      {/* 2. HIGHLIGHT VIDEO: VIDEO EDITOR & RESTAURANT MEDIA PRODUCTION */}
      <div className="space-y-6 pt-6 border-t border-[#CCE5E3]">
        <div className="border-b border-[#CCE5E3] pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                RESTAURANT PRODUCTION & VIRAL SHORT-FORM VIDEOS
              </span>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2.5">
                <i className="fa-solid fa-clapperboard text-[#0B6E7B]"></i>
                <span>{vLotusData.videoPillar.title}</span>
              </h4>
            </div>

            {/* Brief Video Presentation Button */}
            {vLotusData.videoPillar.briefVideoUrl && (
              <a
                href={vLotusData.videoPillar.briefVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0B6E7B] hover:bg-[#08545E] text-white border border-[#2DD4BF]/40 rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-md hover:scale-105 cursor-pointer"
              >
                <i className="fa-solid fa-presentation-screen text-[#2DD4BF]"></i>
                <span>Brief Video (Presentation)</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-80"></i>
              </a>
            )}
          </div>

          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed max-w-5xl">
            <HighlightText text={vLotusData.videoPillar.overview} />
          </p>
        </div>

        {/* Highlight Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {vLotusData.videoPillar.videos.map((video) => {
            const isFacebook = video.platform === "facebook";

            return (
              <div
                key={video.id}
                className="bg-white rounded-2xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
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
                        author={video.brandName}
                      />
                    )}
                  </div>

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

                  {video.briefUrl && (
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-[#07262B]/95 via-[#07262B]/75 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex flex-wrap items-center justify-center gap-2.5 z-10">
                      <a
                        href={video.briefUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/95 backdrop-blur-md hover:bg-white text-[#0C2B31] border border-white/20 rounded-xl font-narrow text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:scale-105 pointer-events-auto cursor-pointer"
                      >
                        <i className="fa-solid fa-presentation-screen text-emerald-600"></i>
                        <span>Brief Video</span>
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-[#4E6E75]"></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. HIGHLIGHT POST: HIGHLIGHT FACEBOOK POSTS & COPYWRITING SHOWCASE */}
      <div className="space-y-6 pt-8 border-t border-[#CCE5E3]">
        <div className="border-b border-[#CCE5E3] pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                {vLotusData.highlightPostsSection.title}
              </span>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2.5">
                <i className="fa-brands fa-facebook text-[#1877F2]"></i>
                <span>{vLotusData.highlightPostsSection.sectionTitle}</span>
              </h4>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#0B6E7B]/30 rounded-lg text-xs sm:text-sm shadow-2xs">
              <i className="fa-solid fa-fire text-[#0B6E7B]"></i>
              <span className="font-narrow font-black text-[#0C2B31] uppercase">
                Conservo &bull; Yoshinoya &bull; Ussina Sky 77
              </span>
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm font-bold text-[#0B6E7B]">
            {vLotusData.highlightPostsSection.instruction}
          </p>

          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed max-w-5xl">
            <HighlightText text={vLotusData.highlightPostsSection.description} />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {vLotusData.highlightPostsSection.posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-2xs group"
            >
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

              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h5 className="font-sans font-bold text-base sm:text-lg text-[#0C2B31] leading-snug">
                    {post.title}
                  </h5>

                  <div className="font-sans text-sm sm:text-base text-[#2C4A51] leading-relaxed whitespace-pre-line bg-[#F8FCFB] p-4 rounded-xl border border-[#CCE5E3]/60 max-h-[380px] overflow-y-auto custom-scrollbar">
                    {post.content}
                  </div>
                </div>

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
                      V Lotus Holdings Official Campaign
                    </span>
                  </div>

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

      {/* 4. SOME SELECTED WEBSITE CONTENTS */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-xl p-5 sm:p-6 space-y-5">
        <div className="border-b border-[#CCE5E3] pb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h4 className="font-display text-lg sm:text-xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2">
              <i className="fa-solid fa-newspaper text-base text-[#0B6E7B]"></i>
              <span>{vLotusData.websiteArticlesSection.title}</span>
            </h4>
            <p className="font-sans text-xs text-[#4E6E75]">
              {vLotusData.websiteArticlesSection.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={vLotusData.websiteArticlesSection.seoArticlesDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white border border-[#CCE5E3] hover:border-[#0B6E7B] hover:bg-[#0B6E7B] hover:text-white transition-all rounded-lg font-narrow text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-[#0C2B31] shadow-xs"
            >
              <i className="fa-solid fa-file-lines text-blue-600"></i>
              <span>SEO Articles</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
            </a>

            <a
              href={vLotusData.websiteArticlesSection.contentPlanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white border border-[#CCE5E3] hover:border-[#0B6E7B] hover:bg-[#0B6E7B] hover:text-white transition-all rounded-lg font-narrow text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-[#0C2B31] shadow-xs"
            >
              <i className="fa-solid fa-table text-emerald-600"></i>
              <span>Content Plan (SEO)</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {vLotusData.websiteArticlesSection.articles.map((article) => (
            <div
              key={article.id}
              className="p-4 bg-white rounded-xl border border-[#CCE5E3] hover:border-[#0B6E7B] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group shadow-xs"
            >
              <div className="space-y-1 flex-1">
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

      {/* Lightbox Modal */}
      <ImageLightboxModal selectedImage={selectedImage} onClose={handleCloseLightbox} />
    </div>
  );
}
