import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { vLotusData, getVLotusImage } from "../../data/vLotusData";
import ImageLightboxModal from "./ImageLightboxModal";
import AnimatedCounter from "./AnimatedCounter";
import HighlightText from "./HighlightText";
import type { LightboxImageData } from "../../models/imageLightboxModal";

export default function VLotusExperienceShowcase() {
  const [activeBrandId, setActiveBrandId] = useState<string>("fanpage-conservo");
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);

  const activeBrand = vLotusData.fanpagePillar.brands.find(
    (b) => b.id === activeBrandId
  ) || vLotusData.fanpagePillar.brands[0];

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
    <div className="space-y-10 pt-6 border-t border-[#CCE5E3]" onClick={(e) => e.stopPropagation()}>
      {/* 1. CORPORATE & F&B DIVISION OVERVIEW BANNER */}
      <div className="bg-gradient-to-r from-[#07262B] via-[#0A3D44] to-[#07262B] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#0B6E7B]/40 relative overflow-hidden group">
        <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 w-56 h-56 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0B6E7B]/40 pb-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0B6E7B]/40 backdrop-blur-md rounded-full text-xs sm:text-sm font-narrow font-black tracking-widest text-[#2DD4BF] uppercase border border-[#0B6E7B]/50">
              <i className="fa-solid fa-utensils text-xs"></i>
              <span>Project 02 • F&B Division & Franchise Operations</span>
            </div>
            <span className="font-mono text-xs sm:text-sm text-[#2DD4BF] bg-white/10 px-3.5 py-1 rounded-md border border-[#0B6E7B]/40 font-bold">
              {vLotusData.overview.scale}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                {vLotusData.companyName} — {vLotusData.parentGroup}
              </h4>
              <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed">
                <HighlightText text={vLotusData.overview.description} />
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="font-narrow text-xs sm:text-sm text-[#2DD4BF] font-black uppercase tracking-wider mr-1">
                  Franchise Brands:
                </span>
                {vLotusData.overview.brands.map((brand, bIdx) => (
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
                    getVLotusImage("v_lotus_img_01.webp"),
                    "V Lotus Holdings — Brand Portfolio Showcase"
                  )
                }
                className="w-full sm:w-72 aspect-[4/3] rounded-xl overflow-hidden border border-[#0B6E7B]/40 relative group cursor-pointer shadow-md"
              >
                <img
                  src={getVLotusImage("v_lotus_img_01.webp")}
                  alt="V Lotus Portfolio Showcase"
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

      {/* 3. SECTION 2.1: SEO CONTENT & DIGITAL RESEARCH */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#CCE5E3] pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                SEARCH ENGINE OPTIMIZATION & IN-DEPTH RESEARCH
              </span>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31]">
                {vLotusData.seoPillar.title}
              </h4>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#0B6E7B]/30 rounded-lg text-xs sm:text-sm shadow-2xs">
              <i className="fa-solid fa-ranking-star text-[#0B6E7B]"></i>
              <span className="font-narrow font-black text-[#0C2B31] uppercase">
                35+ In-Depth Articles
              </span>
            </div>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed max-w-5xl">
            <HighlightText text={vLotusData.seoPillar.overview} />
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="font-narrow text-xs sm:text-sm font-bold text-[#0B6E7B] uppercase tracking-wider">
              Top Ranked Keywords:
            </span>
            {vLotusData.seoPillar.topKeywords.map((kw, kIdx) => (
              <span
                key={kIdx}
                className="px-3 py-1 bg-white border border-[#0B6E7B]/20 text-[#0C2B31] rounded-md text-xs sm:text-sm font-narrow font-bold shadow-2xs"
              >
                &ldquo;{kw}&rdquo;
              </span>
            ))}
          </div>
        </div>

        {/* SEO Articles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vLotusData.seoPillar.articles.map((art) => (
            <div
              key={art.id}
              onClick={() =>
                handleOpenLightbox(art.image, art.title, `${art.rankingKeyword} • ${art.excerpt}`)
              }
              className="bg-white rounded-xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-[#E7F3F2] overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#07262B]/85 backdrop-blur-md text-white font-narrow text-xs font-bold uppercase rounded tracking-wider border border-white/20">
                    {art.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="px-3 py-1.5 bg-[#0B6E7B] text-white font-narrow text-xs sm:text-sm font-black uppercase rounded-lg shadow-md block text-center">
                    <i className="fa-solid fa-trophy mr-1 text-[#2DD4BF] text-xs"></i>
                    {art.rankingKeyword}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h5 className="font-sans font-bold text-base sm:text-lg text-[#0C2B31] leading-snug">
                    {art.title}
                  </h5>
                  <p className="font-sans text-sm sm:text-base text-[#4E6E75] leading-relaxed line-clamp-3">
                    <HighlightText text={art.excerpt} />
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#CCE5E3]">
                  {art.tags.map((tag, tIdx) => (
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
      </div>

      {/* 4. SECTION 2.2: MULTI-BRAND SOCIAL MEDIA CONTENT STRATEGY */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#CCE5E3] pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                MULTI-BRAND CONTENT PLANNING
              </span>
              <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31]">
                {vLotusData.fanpagePillar.title}
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-4 py-2 bg-white border border-[#0B6E7B]/30 rounded-lg text-xs sm:text-sm font-narrow font-black text-[#0C2B31] uppercase shadow-2xs">
                Peak Reach: 425,000+
              </span>
            </div>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed max-w-5xl">
            <HighlightText text={vLotusData.fanpagePillar.overview} />
          </p>
        </div>

        {/* Brand Switcher Tabs */}
        <div className="flex flex-wrap gap-3">
          {vLotusData.fanpagePillar.brands.map((brand) => {
            const isSelected = activeBrandId === brand.id;
            return (
              <button
                key={brand.id}
                onClick={() => setActiveBrandId(brand.id)}
                className={`px-5 py-3 rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer border ${isSelected
                  ? "bg-[#0B6E7B] text-white border-[#0B6E7B] shadow-sm"
                  : "bg-white text-[#0C2B31] border-[#CCE5E3] hover:border-[#0B6E7B] hover:bg-[#F0F8F7]"
                  }`}
              >
                <i
                  className={`fa-solid ${brand.id === "fanpage-conservo"
                    ? "fa-bread-slice"
                    : brand.id === "fanpage-yoshinoya"
                      ? "fa-bowl-rice"
                      : "fa-fire"
                    } text-sm ${isSelected ? "text-[#2DD4BF]" : "text-[#0B6E7B]"}`}
                ></i>
                <span>{brand.brandName}</span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-[#F0F8F7] text-[#4E6E75]"
                    }`}
                >
                  {brand.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Brand Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBrand.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            <div className="bg-white p-5 rounded-xl border border-[#CCE5E3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="font-narrow text-xs sm:text-sm font-bold text-[#0B6E7B] uppercase tracking-wider block">
                  Concept: {activeBrand.cuisineType}
                </span>
                <p className="font-sans text-sm sm:text-base text-[#2C4A51]">
                  <HighlightText text={activeBrand.description} />
                </p>
              </div>
              <span className="font-mono text-xs sm:text-sm font-bold text-[#0B6E7B] bg-[#F0F8F7] px-3.5 py-1.5 rounded-md shrink-0 border border-[#CCE5E3]">
                {activeBrand.posts.length} Curated Posts
              </span>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activeBrand.posts.map((post) => (
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
                      <h5 className="font-sans font-bold text-base sm:text-lg text-[#0C2B31] leading-snug">
                        {post.title}
                      </h5>
                      <p className="font-sans text-sm sm:text-base text-[#4E6E75] line-clamp-2 leading-relaxed">
                        <HighlightText text={post.description} />
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#CCE5E3]">
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

      {/* 5. SECTION 2.3: VIDEO EDITOR & RESTAURANT MEDIA PRODUCTION */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#CCE5E3] pb-4 space-y-2">
          <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
            RESTAURANT PRODUCTION & VIRAL REELS
          </span>
          <h4 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31]">
            {vLotusData.videoPillar.title}
          </h4>
          <p className="font-sans text-base sm:text-lg text-[#2C4A51] leading-relaxed">
            <HighlightText text={vLotusData.videoPillar.overview} />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vLotusData.videoPillar.videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl border border-[#CCE5E3] overflow-hidden hover:border-[#0B6E7B] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div
                onClick={() =>
                  handleOpenLightbox(video.image, video.title, video.description)
                }
                className="relative aspect-[16/10] bg-[#07262B] overflow-hidden cursor-pointer"
              >
                <img
                  src={video.image}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07262B]/90 via-transparent to-transparent flex items-end justify-between p-4 sm:p-5">
                  <div>
                    <span className="px-3 py-1 bg-[#0B6E7B] text-white font-narrow text-xs font-black uppercase rounded tracking-wider">
                      {video.brandName}
                    </span>
                    <h5 className="font-display text-base sm:text-lg text-white uppercase tracking-tight mt-1.5">
                      {video.highlight}
                    </h5>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#0B6E7B] transition-colors shadow-lg">
                    <i className="fa-solid fa-play text-base"></i>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-narrow text-xs sm:text-sm font-bold text-[#0B6E7B] uppercase tracking-wider flex items-center gap-2">
                      <i className="fa-solid fa-camera text-xs"></i>
                      {video.role}
                    </span>
                  </div>
                  <h6 className="font-sans font-bold text-lg sm:text-xl text-[#0C2B31]">
                    {video.title}
                  </h6>
                  <p className="font-sans text-base sm:text-lg text-[#4E6E75] leading-relaxed">
                    <HighlightText text={video.description} />
                  </p>
                </div>

                {/* Metrics Box with Animated Count Up & generous divider margins */}
                <div className="grid grid-cols-[1.5fr_1fr_1fr] divide-x divide-[#CCE5E3] bg-[#F0F8F7] py-3.5 px-3 rounded-xl border border-[#CCE5E3]">
                  <div className="text-center px-3">
                    <span className="block font-display text-xl sm:text-2xl text-[#0C2B31] tracking-tight leading-none">
                      <AnimatedCounter value={video.stats.views} />
                    </span>
                    <span className="font-narrow text-xs uppercase font-bold text-[#4E6E75] block mt-1.5">
                      Views
                    </span>
                  </div>
                  <div className="text-center px-3">
                    <span className="block font-display text-xl sm:text-2xl text-[#0C2B31] tracking-tight leading-none">
                      <AnimatedCounter value={video.stats.likes} />
                    </span>
                    <span className="font-narrow text-xs uppercase font-bold text-[#4E6E75] block mt-1.5">
                      Likes
                    </span>
                  </div>
                  <div className="text-center px-3">
                    <span className="block font-display text-xl sm:text-2xl text-[#0C2B31] tracking-tight leading-none">
                      <AnimatedCounter value={video.stats.shares} />
                    </span>
                    <span className="font-narrow text-xs uppercase font-bold text-[#4E6E75] block mt-1.5">
                      Shares
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {video.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-[#F4FAF9] border border-[#CCE5E3] rounded-md text-xs sm:text-sm font-narrow font-bold text-[#0C2B31]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal selectedImage={selectedImage} onClose={handleCloseLightbox} />
    </div>
  );
}
