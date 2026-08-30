import { useEffect, type CSSProperties } from 'react';

export interface TikTokEmbedProps {
  url: string;
  videoId?: string;
  title?: string;
  author?: string;
  style?: CSSProperties;
}

const SHORTLINK_VIDEO_MAP: Record<string, { videoId: string; author: string }> = {
  ZSVVXUgju: {
    videoId: '7519379432910392584',
    author: '@conservovn',
  },
  ZSVVX9Csc: {
    videoId: '7517883339034987783',
    author: '@yoshinoyavietnamofficial',
  },
};

function parseTikTokUrl(url: string) {
  // Check known shortlinks e.g. /ZSVVXUgju/
  for (const [slug, data] of Object.entries(SHORTLINK_VIDEO_MAP)) {
    if (url.includes(slug)) {
      return { videoId: data.videoId, authorHandle: data.author.replace('@', '') };
    }
  }

  // Extract video ID e.g. /video/7478692074703932679
  const videoIdMatch = url.match(/\/video\/(\d+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : '';

  // Extract author handle e.g. @conservovn
  const authorMatch = url.match(/@([^/?#]+)/);
  const authorHandle = authorMatch ? authorMatch[1] : 'tiktok';

  return { videoId, authorHandle };
}

export default function TikTokEmbed({
  url,
  videoId: propVideoId,
  title = '',
  author: propAuthor,
}: TikTokEmbedProps) {
  const { videoId: extractedId, authorHandle } = parseTikTokUrl(url);
  const videoId = propVideoId || extractedId;
  const author = propAuthor || `@${authorHandle}`;
  const displayAuthor = author.startsWith('@') ? author : `@${author}`;

  useEffect(() => {
    if (!videoId) {
      const scriptId = 'tiktok-embed-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [videoId]);

  return (
    <div className="flex flex-col items-center justify-center w-full my-2 overflow-hidden">
      {videoId ? (
        <div className="w-full max-w-[340px] sm:max-w-[380px] h-[520px] sm:h-[580px] rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10 relative">
          <iframe
            src={`https://www.tiktok.com/player/v1/${videoId}?autoplay=0`}
            title={title || `TikTok ${displayAuthor}`}
            className="w-full h-full border-0 pointer-events-auto"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="w-full max-w-[340px] sm:max-w-[380px] min-h-[480px] sm:h-[580px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#0A262B] via-[#041518] to-black border border-white/15 p-6 flex flex-col justify-between items-center text-center relative group">
          <div className="space-y-4 w-full flex flex-col items-center pt-8">
            <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-tiktok text-2xl text-[#25F4EE]"></i>
            </div>
            <div className="space-y-1">
              <span className="font-narrow text-xs font-black text-[#2DD4BF] uppercase tracking-widest block">
                TikTok Short-Form Video
              </span>
              <h5 className="font-display text-lg sm:text-xl text-white uppercase tracking-tight">
                {title || displayAuthor}
              </h5>
            </div>
            <p className="font-sans text-xs text-white/70 max-w-xs leading-relaxed">
              Official short-form video release produced for {displayAuthor}. Click below to watch the live reel on TikTok.
            </p>
          </div>

          <div className="w-full space-y-3 pb-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-gradient-to-r from-[#FE2C55] to-[#25F4EE] text-black font-narrow text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 hover:opacity-95 hover:scale-105 transition-all cursor-pointer"
            >
              <i className="fa-brands fa-tiktok text-sm"></i>
              <span>Watch on TikTok</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
