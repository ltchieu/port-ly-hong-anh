export interface MarqueeItem {
  id: string;
  img: string;
  title?: string;
  subtitle?: string;
  url?: string;
  platform?: 'facebook' | 'tiktok' | string;
  brand?: string;
  category?: string;
  description?: string;
  videoId?: string;
}

export interface InfiniteMarqueeProps {
  items: MarqueeItem[];
  speed?: number;
  onItemClick?: (item: MarqueeItem) => void;
  className?: string;
}
