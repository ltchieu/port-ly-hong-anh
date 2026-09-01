import { useMemo, useState, memo } from 'react';
import './InfiniteMarquee.css';
import type { MarqueeItem, InfiniteMarqueeProps } from '../../models/infiniteMarquee';

function PhoneVideoItem({
  item,
  onItemClick,
}: {
  item: MarqueeItem;
  onItemClick?: (item: MarqueeItem) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const isFacebook = item.platform?.toLowerCase() === 'facebook';
  const isTikTok = item.platform?.toLowerCase() === 'tiktok';

  const handleCardClick = () => {
    if (onItemClick) {
      onItemClick(item);
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="relative w-[270px] sm:w-[300px] h-[500px] sm:h-[550px] bg-[#071F24] rounded-[40px] p-2.5 shadow-[0_20px_50px_rgba(7,38,43,0.45)] border-4 border-[#12383F] flex flex-col transition-all duration-300 hover:scale-[1.03] hover:border-[#2DD4BF] hover:shadow-[0_25px_60px_rgba(45,212,191,0.25)] select-none cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Side phone button accents */}
      <div className="absolute -left-1.5 top-24 w-1 h-8 bg-[#12383F] rounded-l" />
      <div className="absolute -left-1.5 top-36 w-1 h-8 bg-[#12383F] rounded-l" />
      <div className="absolute -right-1.5 top-28 w-1 h-12 bg-[#12383F] rounded-r" />

      {/* Screen Frame with Inner Radius */}
      <div className="relative w-full h-full bg-black rounded-[32px] overflow-hidden flex flex-col justify-between border border-white/15">
        {/* Dynamic Island Notch */}
        <div className="absolute top-2.5 inset-x-0 z-30 flex justify-center pointer-events-none">
          <div className="w-24 h-4 bg-black/90 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-between px-2.5 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[#111] border border-white/20" />
          </div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-2 inset-x-0 px-6 z-20 flex justify-between items-center text-[10px] font-mono font-bold text-white/80 pointer-events-none">
          <span>09:41</span>
          <div className="flex items-center gap-1.5 text-[9px]">
            <i className="fa-solid fa-signal text-[8px]" />
            <i className="fa-solid fa-wifi text-[9px]" />
            <i className="fa-solid fa-battery-full text-[11px] text-[#2DD4BF]" />
          </div>
        </div>

        {/* Top Quick Direct Button (Appears prominently when hovered) */}
        {isHovered && item.url && (
          <div className="absolute top-8 inset-x-3 z-30 flex items-center justify-between pointer-events-none animate-fadeIn">
            <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md rounded-full text-[9px] font-mono text-[#2DD4BF] border border-white/15 flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
              Live
            </span>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`px-3 py-1 rounded-full font-narrow text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xl transition-all duration-200 pointer-events-auto hover:scale-105 active:scale-95 ${
                isTikTok
                  ? 'bg-gradient-to-r from-[#FE2C55] to-[#25F4EE] text-black shadow-[#25F4EE]/30'
                  : 'bg-[#1877F2] text-white hover:bg-[#166fe5] shadow-[#1877F2]/40'
              }`}
            >
              <i className={isTikTok ? 'fa-brands fa-tiktok text-[11px]' : 'fa-brands fa-facebook-f text-[11px]'} />
              <span>Open {isTikTok ? 'TikTok' : 'Facebook'}</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[8px]" />
            </a>
          </div>
        )}

        {/* Main Screen Content: Hover to Auto-Play Live Video or Cover Poster */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
          {isHovered ? (
            <div className="w-full h-full relative flex items-center justify-center bg-black">
              {isFacebook ? (
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.url || '')}&show_text=false&autoplay=true&t=0`}
                  title={item.title || 'Facebook Video Reel'}
                  className="w-full h-full border-0 pointer-events-auto"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <iframe
                  src={`https://www.tiktok.com/player/v1/${item.videoId || '7519379432910392584'}?autoplay=1`}
                  title={item.title || 'TikTok Video'}
                  className="w-full h-full border-0 pointer-events-auto"
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              )}
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={item.img}
                alt={item.title || 'Video Cover'}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />

              {/* Social Action Overlay on the Right (Heart, Comment, Share, Volume) */}
              <div className="absolute right-3 bottom-28 flex flex-col items-center gap-3 z-10 text-white pointer-events-none">
                <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex flex-col items-center justify-center border border-white/10 shadow-md">
                  <i className="fa-solid fa-heart text-red-500 text-xs" />
                </div>
                <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex flex-col items-center justify-center border border-white/10 shadow-md">
                  <i className="fa-solid fa-comment-dots text-white text-xs" />
                </div>
                <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex flex-col items-center justify-center border border-white/10 shadow-md">
                  <i className="fa-solid fa-share text-white text-xs" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#0B6E7B]/70 backdrop-blur-md flex flex-col items-center justify-center border border-[#2DD4BF]/30 shadow-md animate-pulse">
                  <i className="fa-solid fa-volume-high text-[#2DD4BF] text-xs" />
                </div>
              </div>

              {/* Center Play Button with Pulsing Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-[#2DD4BF]/20 animate-ping" />
                  <div className="w-14 h-14 rounded-full bg-[#0B6E7B]/85 text-white flex items-center justify-center backdrop-blur-md border border-[#2DD4BF]/60 shadow-2xl transform group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-play text-base text-[#2DD4BF] ml-1" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Floating Info & Direct Button (Glassmorphic) */}
          <div className="absolute inset-x-0 bottom-0 p-3.5 pt-8 bg-gradient-to-t from-black via-black/85 to-transparent z-20 flex flex-col space-y-2 pointer-events-none">
            <div className="flex items-center gap-1.5">
              {isTikTok ? (
                <span className="px-2 py-0.5 bg-black/80 text-[#2DD4BF] border border-[#2DD4BF]/40 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <i className="fa-brands fa-tiktok text-[10px]" /> TikTok
                </span>
              ) : (
                <span className="px-2 py-0.5 bg-[#1877F2] text-white rounded-full font-mono text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <i className="fa-brands fa-facebook-f text-[9px]" /> Facebook
                </span>
              )}
              <span className="font-narrow text-[10px] font-bold text-white/80 uppercase tracking-wide truncate">
                {item.brand}
              </span>
            </div>

            <h5 className="font-sans text-xs font-bold text-white leading-tight line-clamp-2 drop-shadow-md">
              {item.title}
            </h5>

            {/* Direct Social Button */}
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`w-full py-1.5 px-3 rounded-xl font-narrow text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all duration-200 pointer-events-auto hover:scale-[1.02] active:scale-95 cursor-pointer ${
                  isTikTok
                    ? 'bg-black text-white border border-[#2DD4BF]/50 hover:bg-[#2DD4BF] hover:text-black hover:border-transparent'
                    : 'bg-[#1877F2] text-white hover:bg-[#166fe5]'
                }`}
              >
                <i className={isTikTok ? 'fa-brands fa-tiktok text-xs text-[#2DD4BF] group-hover:text-black' : 'fa-brands fa-facebook-f text-xs text-white'} />
                <span>Watch on {isTikTok ? 'TikTok' : 'Facebook'}</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
              </a>
            )}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1 inset-x-0 flex justify-center z-30 pointer-events-none">
            <div className="w-24 h-1 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfiniteMarquee({
  items,
  speed = 35,
  onItemClick,
  className = ''
}: InfiniteMarqueeProps) {
  const duplicatedItems = useMemo(() => {
    if (items.length <= 4) {
      return [...items, ...items, ...items, ...items];
    }
    return [...items, ...items];
  }, [items]);

  return (
    <div className={`infinite-marquee-container ${className}`}>
      <div
        className="infinite-marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedItems.map((item, index) => {
          const isVideo = Boolean(item.platform || item.url);

          return (
            <div
              key={`${item.id}-${index}`}
              className="infinite-marquee-item"
            >
              {isVideo ? (
                /* Phone Video Mockup Card */
                <PhoneVideoItem item={item} onItemClick={onItemClick} />
              ) : (
                /* Standard Image Marquee Card */
                <div
                  className="relative overflow-hidden rounded-xl bg-white border border-[#CCE5E3] shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:border-[#0B6E7B] cursor-pointer group"
                  onClick={() => onItemClick?.(item)}
                >
                  <img
                    src={item.img}
                    alt={item.title || 'Campaign Visual'}
                    className="h-56 md:h-64 object-cover w-auto max-w-[380px]"
                    loading="lazy"
                    decoding="async"
                  />
                  {item.title && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07262B]/90 via-[#07262B]/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                      <span className="font-narrow text-xs font-black uppercase text-[#2DD4BF] tracking-widest">
                        {item.title}
                      </span>
                      {item.subtitle && (
                        <span className="font-mono text-[10px] text-white/80 tracking-wider">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(InfiniteMarquee);
