import { useRef, useState, useEffect } from "react";

export interface FacebookEmbedProps {
  url: string;
  width?: number | string;
  height?: number | string;
  autoplay?: boolean;
  className?: string;
  aspectRatio?: "16:9" | "9:16" | "landscape" | "vertical" | string;
}

export default function FacebookEmbed({
  url,
  autoplay = true,
  className = "",
  aspectRatio,
  width: propWidth,
}: FacebookEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute sensible initial width based on standard responsive card sizes
  const [containerWidth, setContainerWidth] = useState<number>(() => {
    if (typeof propWidth === "number") return propWidth;
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 280;
      if (window.innerWidth >= 1024) return 260;
      if (window.innerWidth >= 640) return 320;
      return Math.min(340, Math.max(260, window.innerWidth - 48));
    }
    return 280;
  });

  useEffect(() => {
    if (!containerRef.current || typeof propWidth === "number") return;

    const updateWidth = () => {
      if (!containerRef.current) return;
      const w = Math.round(containerRef.current.clientWidth);
      if (w > 0 && Math.abs(w - containerWidth) > 15) {
        setContainerWidth(w);
      }
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [containerWidth, propWidth]);

  const isLandscape =
    aspectRatio === "16:9" ||
    aspectRatio === "landscape" ||
    url.includes("9029206577131919");

  const effectiveWidth = typeof propWidth === "number" ? propWidth : containerWidth;
  const encodedUrl = encodeURIComponent(url);
  const iframeSrc = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&t=0&width=${effectiveWidth}&autoplay=${autoplay ? "true" : "false"}`;

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center w-full h-full overflow-hidden bg-black ${className}`}
    >
      <iframe
        src={iframeSrc}
        title="Facebook Reel"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        className={
          isLandscape
            ? "w-full aspect-[16/9] rounded-lg border-0 shadow-lg"
            : "w-full h-full rounded-lg border-0"
        }
      />
    </div>
  );
}
