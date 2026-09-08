import { useRef, useEffect } from "react";
import type { ReactNode } from "react";

interface ScrollablePostContentProps {
  content: ReactNode;
  className?: string;
}

export default function ScrollablePostContent({
  content,
  className = "",
}: ScrollablePostContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // Stop propagation so Lenis and any window scroll listeners do not capture the event
      e.stopPropagation();

      const isScrollable = el.scrollHeight > el.clientHeight;
      if (!isScrollable) return;

      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      // Prevent outer page scrolling when hitting boundary
      if ((e.deltaY > 0 && atBottom) || (e.deltaY < 0 && atTop)) {
        e.preventDefault();
        return;
      }

      // Perform controlled scroll on the post content container
      el.scrollTop += e.deltaY;
      e.preventDefault();
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      data-lenis-prevent-touch="true"
      className={`font-sans text-sm sm:text-base text-[#2C4A51] leading-relaxed whitespace-pre-line bg-white p-4 rounded-xl border border-[#CCE5E3]/60 max-h-[380px] overflow-y-auto overscroll-contain custom-scrollbar select-text ${className}`.trim()}
    >
      {content}
    </div>
  );
}
