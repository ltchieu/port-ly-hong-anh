export interface LightboxImageData {
  src: string;
  title: string;
  category: string;
  description?: string;
}

export interface ImageLightboxModalProps {
  selectedImage: LightboxImageData | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  currentIndex?: number;
  totalImages?: number;
}
