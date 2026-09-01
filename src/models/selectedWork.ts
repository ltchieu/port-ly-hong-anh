import type { CarouselItemData } from './carousel';

export interface SelectedWorkBrandItem {
  id: string;
  category: string;
  brand: string;
  description: string;
  badgeText: string;
  posts: CarouselItemData[];
}
