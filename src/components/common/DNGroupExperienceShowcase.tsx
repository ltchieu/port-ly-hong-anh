import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { dnGroupData, getDNImage } from "../../data/dnGroupData";
import ImageLightboxModal from "./ImageLightboxModal";
import AnimatedCounter from "./AnimatedCounter";
import HighlightText from "./HighlightText";
import type { LightboxImageData } from "../../models/imageLightboxModal";

export default function DNGroupExperienceShowcase() {
  const [activeChannelId, setActiveChannelId] = useState<string>("shark-dental-vn");
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);

  const activeChannel = dnGroupData.fanpagePillars.channels.find(
    (c) => c.id === activeChannelId
  ) || dnGroupData.fanpagePillars.channels[0];

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

      {/* 3. SECTION 1.1: CONTENT FANPAGE & SOCIAL STRATEGY */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#CCE5E3] pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                SOCIAL MEDIA STRATEGY
              </span>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31]">
                {dnGroupData.fanpagePillars.title}
              </h4>
            </div>

            {/* Post High Performance Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#0B6E7B]/30 rounded-lg text-xs sm:text-sm shadow-2xs">
              <i className="fa-solid fa-trophy text-[#0B6E7B]"></i>
              <span className="font-narrow font-black text-[#0C2B31] uppercase">
                Best Post: <AnimatedCounter value="130,000+" /> Reach • <AnimatedCounter value="160+" /> Likes • <AnimatedCounter value="52" /> Comments
              </span>
            </div>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed max-w-5xl">
            <HighlightText text={dnGroupData.fanpagePillars.overview} />
          </p>
        </div>

        {/* Channel Switcher Tabs */}
        <div className="flex flex-wrap gap-3">
          {dnGroupData.fanpagePillars.channels.map((channel) => {
            const isSelected = activeChannelId === channel.id;
            return (
              <button
                key={channel.id}
                onClick={() => setActiveChannelId(channel.id)}
                className={`px-5 py-3 rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#0B6E7B] text-white border-[#0B6E7B] shadow-sm"
                    : "bg-white text-[#0C2B31] border-[#CCE5E3] hover:border-[#0B6E7B] hover:bg-[#F0F8F7]"
                }`}
              >
                <i
                  className={`fa-solid ${
                    channel.id === "shark-dental-vn" ? "fa-flag" : "fa-globe"
                  } text-sm ${isSelected ? "text-[#2DD4BF]" : "text-[#0B6E7B]"}`}
                ></i>
                <span>{channel.name}</span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-[#F0F8F7] text-[#4E6E75]"
                  }`}
                >
                  {channel.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Channel Details & Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChannel.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            <div className="bg-white p-5 rounded-xl border border-[#CCE5E3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="font-narrow text-xs sm:text-sm font-bold text-[#0B6E7B] uppercase tracking-wider block">
                  Target Audience: {activeChannel.targetAudience}
                </span>
                <p className="font-sans text-sm sm:text-base text-[#2C4A51]">
                  <HighlightText text={activeChannel.description} />
                </p>
              </div>
              <span className="font-mono text-xs sm:text-sm font-bold text-[#0B6E7B] bg-[#F0F8F7] px-3.5 py-1.5 rounded-md shrink-0 border border-[#CCE5E3]">
                {activeChannel.posts.length} Curated Posts
              </span>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activeChannel.posts.map((post) => (
                <div
                  key={post.id}
                  onClick={() =>
                    handleOpenLightbox(post.image, post.title, post.description)
                  }
                  className="bg-white rounded-xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] bg-[#E7F3F2] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#07262B]/85 backdrop-blur-md text-white font-narrow text-xs font-bold uppercase rounded tracking-wider border border-white/20">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-[#07262B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-[#0B6E7B] text-white rounded-full font-narrow text-xs sm:text-sm font-bold uppercase flex items-center gap-2 shadow-md">
                        <i className="fa-solid fa-magnifying-glass-plus text-xs"></i>
                        Zoom Asset
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h5 className="font-sans font-bold text-base sm:text-lg text-[#0C2B31] leading-snug line-clamp-2">
                        {post.title}
                      </h5>
                      {post.description && (
                        <p className="font-sans text-sm sm:text-base text-[#4E6E75] line-clamp-2 leading-relaxed">
                          <HighlightText text={post.description} />
                        </p>
                      )}
                    </div>

                    {post.stats && (
                      <div className="grid grid-cols-3 gap-1.5 pt-3 border-t border-[#CCE5E3] text-xs font-narrow font-bold text-[#0B6E7B]">
                        {post.stats.reach && (
                          <div className="bg-[#F0F8F7] p-2 rounded text-center">
                            <span className="block font-black text-[#0C2B31] text-sm sm:text-base">
                              <AnimatedCounter value={post.stats.reach} />
                            </span>
                            <span className="text-[#4E6E75] uppercase text-[11px]">Reach</span>
                          </div>
                        )}
                        {post.stats.likes && (
                          <div className="bg-[#F0F8F7] p-2 rounded text-center">
                            <span className="block font-black text-[#0C2B31] text-sm sm:text-base">
                              <AnimatedCounter value={post.stats.likes} />
                            </span>
                            <span className="text-[#4E6E75] uppercase text-[11px]">Likes</span>
                          </div>
                        )}
                        {post.stats.comments && (
                          <div className="bg-[#F0F8F7] p-2 rounded text-center">
                            <span className="block font-black text-[#0C2B31] text-sm sm:text-base">
                              <AnimatedCounter value={post.stats.comments} />
                            </span>
                            <span className="text-[#4E6E75] uppercase text-[11px]">Comments</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-[#F0F8F7] text-[#4E6E75] text-xs font-narrow font-semibold rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>



      {/* Lightbox Modal */}
      <ImageLightboxModal selectedImage={selectedImage} onClose={handleCloseLightbox} />
    </div>
  );
}
