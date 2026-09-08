import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import FacebookEmbed from "./FacebookEmbed";
import TikTokEmbed from "./TikTokEmbed";
import YouTubeEmbed from "./YouTubeEmbed";

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
  const [isPlayingModalOpen, setIsPlayingModalOpen] = useState(false);

  const isTikTok = platform.toLowerCase() === "tiktok";
  const isFacebook = platform.toLowerCase() === "facebook";
  const isYouTube = platform.toLowerCase() === "youtube";

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

  const handleOpenPlayer = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingModalOpen(true);
  }, []);

  const handleClosePlayer = useCallback(() => {
    setIsPlayingModalOpen(false);
  }, []);

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
        onClick={handleOpenPlayer}
        className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-[#07181C] my-3 select-none cursor-pointer group/screen border border-[#CCE5E3]/40 shadow-inner flex flex-col justify-between"
      >
        {/* Background Thumbnail Image */}
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out group-hover/screen:scale-105"
          />
        ) : (
          <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-[#0A262C] via-[#041518] to-black flex items-center justify-center">
            <i className="fa-solid fa-film text-4xl text-white/10" />
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

      {/* 4. INTERACTIVE EMBED MODAL FOR DIRECT PLAYBACK */}
      {createPortal(
        <AnimatePresence>
          {isPlayingModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClosePlayer}
              className="fixed inset-0 z-[9999] bg-[#07262B]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-[420px] w-full max-h-[96vh] flex flex-col bg-[#061B1F] border border-[#0B6E7B]/40 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Modal Header */}
                <div className="p-3.5 sm:p-4 border-b border-white/15 bg-black/40 flex items-center justify-between gap-3 shrink-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-5 h-5 rounded-full bg-white text-[#0C2B31] text-[10px] font-black flex items-center justify-center shrink-0">
                      {index}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-display text-sm font-bold text-white uppercase tracking-tight truncate">
                        {displayChannel}
                      </h4>
                      <p className="font-mono text-[10px] text-[#2DD4BF] truncate">
                        {displayHandle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleClosePlayer}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0B6E7B] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shrink-0"
                    aria-label="Close video player"
                  >
                    <i className="fa-solid fa-xmark text-sm" />
                  </button>
                </div>

                {/* Player Container */}
                <div className="w-full flex-1 min-h-[460px] sm:min-h-[520px] max-h-[70vh] bg-black flex items-center justify-center relative p-2 overflow-hidden">
                  {isFacebook && (
                    <div className="w-full h-full max-w-[340px] flex items-center justify-center">
                      <FacebookEmbed url={videoUrl} className="w-full h-full" />
                    </div>
                  )}
                  {isTikTok && (
                    <TikTokEmbed
                      url={videoUrl}
                      videoId={videoId}
                      title={title}
                      author={displayHandle}
                    />
                  )}
                  {isYouTube && (
                    <div className="w-full h-full max-w-[340px] flex items-center justify-center">
                      <YouTubeEmbed url={videoUrl} title={title} className="w-full h-full" />
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-3 sm:p-4 border-t border-white/15 bg-black/50 flex items-center justify-between gap-2 shrink-0">
                  <span className="font-narrow text-xs text-white/70">
                    Watching {isTikTok ? "TikTok" : isFacebook ? "Facebook Reel" : "YouTube Short"}
                  </span>
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#0B6E7B] hover:bg-[#08545E] text-white rounded-lg font-narrow text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>{getPlatformLabel()}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
