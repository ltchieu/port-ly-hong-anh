import { useRef, useState, useEffect } from "react";

export interface FacebookEmbedProps {
  url: string;
  width?: number | string;
  height?: number | string;
  autoplay?: boolean;
  className?: string;
  aspectRatio?: "16:9" | "9:16" | "landscape" | "vertical" | string;
}

// Facebook's embedded video and Reel player internally renders at a fixed 500px width
// (e.g. <div class="_mso" style="width: 500px"> for Reels V2 and <video width="500" height="889"> for V1).
const BASE_WIDTH = 500;
const BASE_HEIGHT_VERTICAL = 889; // 500 * (16 / 9) = 888.89px
const BASE_HEIGHT_LANDSCAPE = 281; // 500 * (9 / 16) = 281.25px

export default function FacebookEmbed({
  url,
  autoplay = true,
  className = "",
  aspectRatio,
}: FacebookEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const isLandscape =
    aspectRatio === "16:9" ||
    aspectRatio === "landscape" ||
    url.includes("9029206577131919");

  const baseWidth = BASE_WIDTH;
  const baseHeight = isLandscape ? BASE_HEIGHT_LANDSCAPE : BASE_HEIGHT_VERTICAL;

  useEffect(() => {
    if (!containerRef.current) return;

    const updateScale = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      if (clientWidth > 0 && clientHeight > 0) {
        const scaleX = clientWidth / baseWidth;
        const scaleY = clientHeight / baseHeight;
        setScale(Math.min(scaleX, scaleY) || scaleX || 1);
      }
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [baseWidth, baseHeight]);

  const encodedUrl = encodeURIComponent(url);
  const iframeSrc = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&t=0&width=${baseWidth}&autoplay=${autoplay ? 1 : 0}`;

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center w-full h-full overflow-hidden bg-black ${className}`}
    >
      <div
        style={{
          width: `${baseWidth}px`,
          height: `${baseHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          flexShrink: 0,
        }}
        className="flex items-center justify-center overflow-hidden"
      >
        <iframe
          src={iframeSrc}
          width={baseWidth}
          height={baseHeight}
          style={{ border: "none", overflow: "hidden", width: "100%", height: "100%" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
