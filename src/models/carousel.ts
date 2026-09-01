import type { ReactNode, CSSProperties } from 'react';

export interface CarouselItemData {
  id: string | number;
  title: string;
  subtitle?: string;
  description: string;
  icon?: ReactNode;
  link?: string;
  postNumber?: string;
  tag?: string;
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
}
