import type { CSSProperties } from 'react';

export interface YouTubeEmbedProps {
  url: string;
  videoId?: string;
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export function parseYouTubeUrl(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:shorts\/|youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*)/);
  return match && match[1] && match[1].length >= 10 ? match[1] : '';
}

export default function YouTubeEmbed({
  url,
  videoId: propVideoId,
  title = 'YouTube video player',
  className = '',
  style,
}: YouTubeEmbedProps) {
  const extractedId = parseYouTubeUrl(url);
  const videoId = propVideoId || extractedId;

  if (!videoId) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 bg-black/40 text-white rounded-xl ${className}`}
        style={style}
      >
        <i className="fa-brands fa-youtube text-3xl text-red-500 mb-2"></i>
        <p className="font-sans text-xs text-white/80">Video unavailable</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
        >
          <span>Watch on YouTube</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-black ${className}`}
      style={style}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
        title={title}
        className="w-full h-full border-0 rounded-xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
