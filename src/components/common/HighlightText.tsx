import { memo } from 'react';

interface HighlightTextProps {
  text: string;
  className?: string;
}

// Regex to capture numeric metrics and achievements across all projects
const METRIC_REGEX = /(\b\+?\d{1,3}(?:,\d{3})*(?:\.\d+)?[KkMm]?(?:\+|%|\s*(?:–|-)\s*\d+)?(?:\s*(?:Facebook followers|Instagram followers|TikTok followers|FB followers|IG followers|organic industry followers|new followers|followers|likes|viral views|views|reach|comments|shares|SEO-optimized articles|news articles|articles|customer inquiries\/month|inquiries\/month|qualified customer leads|customer leads|leads|VIP guests|guests|people|participants|restaurants|offices|employees))?(?=[^\w]|$))/gi;

export const HighlightText = memo(function HighlightText({ text, className = '' }: HighlightTextProps) {
  if (!text) return null;

  const parts = text.split(METRIC_REGEX);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null;

        const trimmed = part.trim();
        // Check if this token matches a metric pattern:
        // Must start with digits/+, and contain '+', 'K', 'M', or an attached metric unit
        const hasSpecialChar = /[+km–-]/i.test(trimmed);
        const hasKeyword = /(?:followers|likes|views|reach|comments|shares|articles|inquiries|leads|guests|people|participants|restaurants|offices|employees)/i.test(trimmed);
        const isMetric = /^\+?\d/.test(trimmed) && (hasSpecialChar || hasKeyword);

        if (isMetric) {
          // Separate numeric part from attached text (e.g. "1,700+ Facebook followers" -> "1,700+" and "Facebook followers")
          const match = trimmed.match(/^(\+?\d{1,3}(?:,\d{3})*(?:\.\d+)?[KkMm]?(?:\+|%|\s*(?:–|-)\s*\d+)?)(.*)$/);
          const numPart = match ? match[1].trim() : trimmed;
          const labelPart = match ? match[2].trim() : '';

          return (
            <span
              key={index}
              className="inline-flex items-center gap-1 font-narrow font-black text-[#0B6E7B] bg-[#E7F3F2] px-2 py-0.5 rounded-md border border-[#0B6E7B]/30 shadow-2xs mx-0.5 align-baseline hover:bg-[#0B6E7B] hover:text-white transition-all group/hl"
            >
              <span className="group-hover/hl:text-white">{numPart}</span>
              {labelPart && (
                <span className="text-[#0C2B31] font-bold group-hover/hl:text-white/90">
                  {labelPart}
                </span>
              )}
            </span>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </span>
  );
});

export default HighlightText;
