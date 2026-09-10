import React, { useState } from "react";
import FacebookEmbed from "./FacebookEmbed";
import TikTokEmbed from "./TikTokEmbed";
import { parseYouTubeUrl } from "./YouTubeEmbed";

export interface HighlightVideoStats {
  likes?: string | number;
  comments?: string | number;
  shares?: string | number;
  views?: string | number;
}

export interface HighlightVideoCardProps {
  index: number;
  title: string;
  channelName?: string;
  channelHandle?: string;
  platform?: "tiktok" | "facebook" | "youtube" | string;
  videoUrl: string;
  videoId?: string;
  image?: string;
  avatarUrl?: string;
  stats?: HighlightVideoStats;
  duration?: string;
  briefUrl?: string;
  scriptUrl?: string;
  description?: string;
  tags?: string[];
  role?: string;
  className?: string;
}

const SHORTLINK_VIDEO_MAP: Record<string, string> = {
  ZSVVXUgju: "7519379432910392584",
  ZSVVX9Csc: "7517883339034987783",
};

function extractTikTokId(url: string): string {
  if (!url) return "";
  for (const [slug, id] of Object.entries(SHORTLINK_VIDEO_MAP)) {
    if (url.includes(slug)) return id;
  }
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : "";
}

export default function HighlightVideoCard({
  index,
  title,
  channelName,
  channelHandle,
  platform = "tiktok",
  videoUrl,
  videoId,
  image,
  avatarUrl,
  stats,
  duration = "00:00/00:45",
  briefUrl,
  scriptUrl,
  className = "",
}: HighlightVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isTikTok = platform.toLowerCase() === "tiktok";
  const isFacebook = platform.toLowerCase() === "facebook";
  const isYouTube = platform.toLowerCase() === "youtube";

  const resolvedTikTokId = videoId || extractTikTokId(videoUrl);
  const resolvedYouTubeId = videoId || parseYouTubeUrl(videoUrl);

  const shouldPlay = isPlaying || isHovered;

  const displayChannel = channelName || title;
  const displayHandle = channelHandle
    ? channelHandle.startsWith("@")
      ? channelHandle
      : `@${channelHandle}`
    : isTikTok
    ? `@${displayChannel.toLowerCase().replace(/[^a-z0-9_]/g, "") || "tiktok"}`
    : `@${displayChannel.toLowerCase().replace(/[^a-z0-9_]/g, "") || "social"}`;

  // Default formatted numbers if not provided
  const likesCount = stats?.likes ?? (isTikTok ? "14.2K" : "6,666");
  const commentsCount = stats?.comments ?? (isTikTok ? "154" : "128");
  const sharesCount = stats?.shares ?? (isTikTok ? "3,341" : "890");

  const getPlatformLabel = () => {
    if (isTikTok) return "OPEN ON TIKTOK";
    if (isFacebook) return "OPEN ON FACEBOOK";
    if (isYouTube) return "OPEN ON YOUTUBE";
    return "WATCH VIDEO";
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-[#CCE5E3] p-3 sm:p-3.5 shadow-xs hover:border-[#0B6E7B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${className}`}
    >
      {/* 1. TOP HEADER INSIDE CARD */}
      <div className="flex items-center justify-between gap-2 pb-2.5 px-0.5 border-b border-[#CCE5E3]/60">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white text-[11px] sm:text-xs font-black flex items-center justify-center shrink-0 shadow-2xs select-none">
            {index}
          </span>
          <h4
            className="font-display font-bold text-xs sm:text-sm text-[#0C2B31] tracking-tight truncate leading-tight"
            title={displayChannel}
          >
            {displayChannel}
          </h4>
        </div>

        <div className="shrink-0 flex items-center text-black">
          {isTikTok && (
            <i className="fa-brands fa-tiktok text-sm" title="TikTok" />
          )}
          {isFacebook && (
            <i
              className="fa-brands fa-facebook-f text-sm text-[#1877F2]"
              title="Facebook"
            />
          )}
          {isYouTube && (
            <i
              className="fa-brands fa-youtube text-sm text-[#FF0000]"
              title="YouTube"
            />
          )}
        </div>
      </div>

      {/* 2. VIDEO MOCKUP SCREEN (9:16 PHONE FRAME) */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          setIsPlaying(true);
        }}
        className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-[#07181C] my-3 select-none cursor-pointer group/screen border border-[#CCE5E3]/40 shadow-inner flex flex-col justify-between"
      >
        {shouldPlay ? (
          <div className="w-full h-full relative bg-black flex items-center justify-center overflow-hidden">
            {/* Close / Stop Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(false);
                setIsHovered(false);
              }}
              className="absolute top-2.5 right-2.5 z-30 w-7 h-7 rounded-full bg-black/75 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md border border-white/20"
              title="Stop video"
              aria-label="Stop video"
            >
              <i className="fa-solid fa-xmark text-xs" />
            </button>

            {isFacebook && (
              <div className="w-full h-full flex items-center justify-center">
                <FacebookEmbed url={videoUrl} className="w-full h-full" />
              </div>
            )}

            {isTikTok &&
              (resolvedTikTokId ? (
                <iframe
                  src={`https://www.tiktok.com/player/v1/${resolvedTikTokId}?autoplay=1`}
                  title={title || displayChannel}
                  className="w-full h-full border-0 pointer-events-auto"
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <TikTokEmbed
                  url={videoUrl}
                  videoId={videoId}
                  title={title}
                  author={displayHandle}
                />
              ))}

            {isYouTube && (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${resolvedYouTubeId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`}
                title={title || displayChannel}
                className="w-full h-full border-0 pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        ) : (
          <>
            {/* Background Thumbnail Image or Native Video Player Embed */}
            {image ? (
              <img
                src={image}
                alt={title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out group-hover/screen:scale-105"
              />
            ) : (
              <div className="w-full h-full absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
                {isFacebook && (
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                      videoUrl
                    )}&show_text=false&autoplay=0&t=0`}
                    title={title || displayChannel}
                    className="w-full h-full border-0 pointer-events-none"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                )}
                {isTikTok && (
                  <iframe
                    src={`https://www.tiktok.com/player/v1/${
                      resolvedTikTokId || "7519379432910392584"
                    }?autoplay=0`}
                    title={title || displayChannel}
                    className="w-full h-full border-0 pointer-events-none"
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  />
                )}
                {isYouTube && (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${resolvedYouTubeId}?autoplay=0&mute=1&playsinline=1&rel=0&modestbranding=1`}
                    title={title || displayChannel}
                    className="w-full h-full border-0 pointer-events-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                )}
              </div>
            )}

            {/* Ambient Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />

            {/* --- Top Overlay: Creator Identity & Watermark --- */}
            <div className="relative z-10 p-2.5 sm:p-3 flex items-start justify-between gap-2 pointer-events-none">
              {/* Creator Profile */}
              <div className="flex items-center gap-2 min-w-0">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={displayChannel}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-white/60 shadow-md shrink-0"
                  />
                ) : (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/25 backdrop-blur-md border border-white/60 text-white font-bold text-[11px] sm:text-xs flex items-center justify-center uppercase shadow-md shrink-0">
                    {displayChannel.charAt(0)}
                  </div>
                )}
                <div className="min-w-0 leading-tight">
                  <span className="font-sans font-bold text-xs sm:text-[13px] text-white drop-shadow-md truncate block">
                    {displayChannel}
                  </span>
                  <span className="font-sans text-[10px] sm:text-[11px] text-white/80 drop-shadow-sm truncate block">
                    {displayHandle}
                  </span>
                </div>
              </div>

              {/* Platform Watermark Badge */}
              <div className="shrink-0 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-sm">
                {isTikTok && <i className="fa-brands fa-tiktok text-[11px]" />}
                {isFacebook && (
                  <i className="fa-brands fa-facebook-f text-[10px] text-[#25F4EE]" />
                )}
                {isYouTube && (
                  <i className="fa-brands fa-youtube text-[10px] text-[#FF4D4D]" />
                )}
                <span className="font-narrow text-[9px] font-bold tracking-wider uppercase">
                  {isTikTok ? "TikTok" : isFacebook ? "Reels" : "Shorts"}
                </span>
              </div>
            </div>

            {/* --- Center Play Button Overlay --- */}
            <div className="relative z-10 flex items-center justify-center my-auto pointer-events-none">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/45 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl group-hover/screen:scale-110 group-hover/screen:bg-[#0B6E7B]/90 transition-all duration-300">
                <i className="fa-solid fa-play text-base sm:text-lg translate-x-0.5" />
              </div>
            </div>

            {/* --- Right-Side Vertical Engagement Action Stack --- */}
            <div className="absolute right-2.5 bottom-12 z-10 flex flex-col items-center space-y-3 pointer-events-none">
              {/* Like */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/35 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                  <i className="fa-solid fa-heart text-xs sm:text-sm text-white drop-shadow" />
                </div>
                <span className="font-narrow font-bold text-[10px] sm:text-[11px] text-white drop-shadow mt-0.5">
                  {likesCount}
                </span>
              </div>

              {/* Comment */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/35 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                  <i className="fa-solid fa-comment-dots text-xs sm:text-sm text-white drop-shadow" />
                </div>
                <span className="font-narrow font-bold text-[10px] sm:text-[11px] text-white drop-shadow mt-0.5">
                  {commentsCount}
                </span>
              </div>

              {/* Bookmark / Share */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/35 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                  <i className="fa-solid fa-bookmark text-xs sm:text-sm text-white drop-shadow" />
                </div>
                <span className="font-narrow font-bold text-[10px] sm:text-[11px] text-white drop-shadow mt-0.5">
                  {sharesCount}
                </span>
              </div>
            </div>

            {/* --- Bottom Controls Bar Overlay --- */}
            <div className="relative z-10 p-2 sm:p-2.5 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-center justify-between text-white text-xs pointer-events-none">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-play text-[10px] sm:text-[11px]" />
                <i className="fa-solid fa-volume-high text-[10px] sm:text-[11px]" />
                <span className="font-mono text-[9px] sm:text-[10px] font-medium text-white/90 tracking-tight">
                  {duration}
                </span>
              </div>
              <i className="fa-solid fa-expand text-[10px] sm:text-[11px]" />
            </div>
          </>
        )}
      </div>

      {/* 3. CARD BOTTOM ACTION BUTTONS */}
      <div className="pt-1">
        {/* Main "OPEN ON TIKTOK / FACEBOOK / YOUTUBE" Button */}
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 sm:py-2.5 px-3 bg-[#111827] hover:bg-black text-white rounded-xl font-narrow font-black text-xs sm:text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-xs hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>{getPlatformLabel()}</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-[9px] opacity-80" />
        </a>
      </div>
    </div>
  );
}
