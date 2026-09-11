import { useState, useCallback } from "react";
import { vLotusData } from "../../data/vLotusData";
import ImageLightboxModal from "./ImageLightboxModal";
import AnimatedCounter from "./AnimatedCounter";
import HighlightText from "./HighlightText";
import HighlightVideoCard from "./HighlightVideoCard";
import ScrollablePostContent from "./ScrollablePostContent";
import type { LightboxImageData } from "../../models/imageLightboxModal";

export default function VLotusExperienceShowcase() {
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="space-y-10 pt-2" onClick={(e) => e.stopPropagation()}>
      {/* 1. KEY METRIC COUNTERS / ACHIEVEMENTS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#CCE5E3] p-5 sm:p-7 lg:p-8 space-y-6 shadow-xs hover:border-[#0B6E7B]/40 transition-all">
        <div className="border-b border-[#CCE5E3]/80 pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                HIGHLIGHT VIDEOS & RESTAURANT PRODUCTION
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
        </div>

        {/* Highlight Videos 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {vLotusData.videoPillar.videos.map((video, vIdx) => {
            const isTikTok = video.platform === "tiktok";
            const isConservo = video.brandName.toLowerCase().includes("conservo");

            return (
              <HighlightVideoCard
                key={video.id}
                index={vIdx + 1}
                title={video.title}
                channelName={video.brandName}
                channelHandle={
                  isConservo
                    ? "@conservovn"
                    : isTikTok
                      ? "@yoshinoyavietnamofficial"
                      : "@yoshinoyavn"
                }
                platform={video.platform}
                videoUrl={video.videoUrl}
                videoId={video.videoId}
                image={video.image}
                stats={{
                  likes: isConservo
                    ? isTikTok
                      ? "15.8K"
                      : "14.2K"
                    : isTikTok
                      ? "21.4K"
                      : "18.6K",
                  comments: isConservo ? "186" : "240",
                  shares: isConservo ? "2,350" : "3,120",
                }}
                duration={
                  isConservo
                    ? isTikTok
                      ? "00:00/00:38"
                      : "00:00/00:45"
                    : isTikTok
                      ? "00:00/00:48"
                      : "00:00/00:52"
                }
                briefUrl={video.briefUrl}
                description={video.description}
                tags={video.tags}
              />
            );
          })}
        </div>
      </div>

      {/* 3. HIGHLIGHT POST: HIGHLIGHT FACEBOOK POSTS & COPYWRITING SHOWCASE */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#CCE5E3] p-5 sm:p-7 lg:p-8 space-y-6 shadow-xs hover:border-[#0B6E7B]/40 transition-all">
        <div className="border-b border-[#CCE5E3]/80 pb-5 space-y-3">
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

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F0F8F7] border border-[#CCE5E3] rounded-xl text-xs sm:text-sm shadow-2xs">
              <i className="fa-solid fa-fire text-[#0B6E7B]"></i>
              <span className="font-narrow font-black text-[#0C2B31] uppercase">
                Conservo &bull; Yoshinoya &bull; Ussina Sky 77
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {vLotusData.highlightPostsSection.posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#F8FCFB] rounded-2xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-2xs group"
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

                  <ScrollablePostContent content={post.content} />
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
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#CCE5E3] p-5 sm:p-7 lg:p-8 space-y-6 shadow-xs hover:border-[#0B6E7B]/40 transition-all">
        <div className="border-b border-[#CCE5E3]/80 pb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
              SEO & WEBSITE COPYWRITING
            </span>
            <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2">
              <i className="fa-solid fa-newspaper text-[#0B6E7B]"></i>
              <span>{vLotusData.websiteArticlesSection.title}</span>
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#4E6E75] mt-1">
              {vLotusData.websiteArticlesSection.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={vLotusData.websiteArticlesSection.seoArticlesDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-white hover:bg-[#F0F8F7] text-[#0C2B31] border border-[#CCE5E3] hover:border-[#0B6E7B] rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs hover:scale-105 cursor-pointer"
            >
              <i className="fa-solid fa-file-lines text-[#0B6E7B]"></i>
              <span>SEO Articles</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-80"></i>
            </a>

            <a
              href={vLotusData.websiteArticlesSection.contentPlanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-[#0B6E7B] hover:bg-[#08545E] text-white border border-[#0B6E7B] rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs hover:scale-105 cursor-pointer"
            >
              <i className="fa-solid fa-table text-[#2DD4BF]"></i>
              <span>Content Plan (SEO)</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-80"></i>
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {vLotusData.websiteArticlesSection.articles.map((article) => (
            <div
              key={article.id}
              className="p-4 sm:p-5 bg-[#F8FCFB] rounded-xl border border-[#CCE5E3] hover:border-[#0B6E7B] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group shadow-2xs"
            >
              <div className="space-y-1 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-white border border-[#CCE5E3] text-[#0C2B31] rounded">
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
                className="px-4 py-2 bg-white border border-[#CCE5E3] hover:bg-[#0B6E7B] hover:text-white transition-all rounded-lg font-narrow text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 text-[#0C2B31] flex-shrink-0 shadow-2xs"
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
