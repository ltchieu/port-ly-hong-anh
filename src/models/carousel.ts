import type { ReactNode, CSSProperties } from 'react';

export interface CarouselMetricItem {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface CarouselItemData {
  id: string | number;
  title: string;
  subtitle?: string;
  description: string;
  icon?: ReactNode;
  link?: string;
  postNumber?: string;
  tag?: string;
  image?: string;
  metrics?: CarouselMetricItem[];
  // Video properties
  isVideo?: boolean;
  videoUrl?: string;
  videoId?: string;
  platform?: 'facebook' | 'tiktok' | string;
}

export interface CarouselProps {
  items?: CarouselItemData[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  className?: string;
  style?: CSSProperties;
  variant?: 'default' | 'video';
}
