export interface DepthCarouselItem {
  id?: string | number;
  image: string;
  alt?: string;
  title?: string;
  caption?: string;
}

export interface DepthCarouselProps {
  items?: (string | DepthCarouselItem)[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tint?: string;
  depth?: number;
  spread?: number;
  tilt?: number;
  tiltDirection?: 'left' | 'right';
  perspective?: number;
  visibleCards?: number;
  falloff?: number;
  blur?: number;
  duration?: number;
  ease?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  onChange?: (index: number, item: DepthCarouselItem) => void;
  onItemClick?: (index: number, item: DepthCarouselItem) => void;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  cardBg?: string;
  className?: string;
}
