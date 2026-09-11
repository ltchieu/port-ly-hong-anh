import { memo, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import type { ImageLightboxModalProps } from '../../models/imageLightboxModal';

export const ImageLightboxModal = memo(function ImageLightboxModal({
  selectedImage,
  onClose,
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true,
  currentIndex,
  totalImages,
}: ImageLightboxModalProps) {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Reset zoom whenever image changes
  useEffect(() => {
    setIsZoomed(false);
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev && hasPrev !== false) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext && hasNext !== false) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, onClose, onPrev, onNext, hasPrev, hasNext]);

  const toggleZoom = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed((prev) => !prev);
  }, []);

  return createPortal(
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          key="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999] bg-[#07262B]/95 backdrop-blur-lg flex items-center justify-center p-2 sm:p-6 select-none"
          onClick={onClose}
        >
          <motion.div
            key="lightbox-dialog"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative max-w-7xl w-full bg-[#051E22]/95 border border-[#0B6E7B]/50 text-white rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between max-h-[95vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="flex items-center justify-between border-b border-[#0B6E7B]/30 pb-3 gap-4">
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-narrow text-[11px] font-black text-[#2DD4BF] tracking-[0.2em] uppercase block truncate">
                    {selectedImage.category}
                  </span>
                  {totalImages !== undefined && currentIndex !== undefined && (
                    <span className="font-mono text-[10px] font-bold text-white/80 px-2 py-0.5 rounded-full bg-white/10 border border-white/15">
                      {currentIndex + 1} / {totalImages}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-base sm:text-xl md:text-2xl uppercase tracking-wide text-white truncate">
                  {selectedImage.title}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={toggleZoom}
                  className={`px-3 py-1.5 rounded-lg text-xs font-narrow font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
                    isZoomed
                      ? 'bg-[#0B6E7B] text-white border-[#2DD4BF] shadow-md'
                      : 'bg-white/10 hover:bg-[#0B6E7B] text-white/90 border-[#0B6E7B]/40'
                  }`}
                  title={isZoomed ? 'Reset Zoom (100%)' : 'Zoom In (200%)'}
                >
                  <i className={`fa-solid ${isZoomed ? 'fa-magnifying-glass-minus' : 'fa-magnifying-glass-plus'} text-xs`}></i>
                  <span className="hidden sm:inline">{isZoomed ? '100%' : 'Zoom'}</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0B6E7B] text-white transition-all flex items-center justify-center cursor-pointer border border-[#0B6E7B]/40 shadow-xs"
                  aria-label="Close image preview"
                >
                  <i className="fa-solid fa-xmark text-sm"></i>
                </button>
              </div>
            </div>

            {/* Main Centered Large Image Viewport */}
            <div className="flex-1 flex items-center justify-center my-3 min-h-[300px] max-h-[74vh] overflow-hidden rounded-xl bg-black/40 border border-[#0B6E7B]/20 p-2 relative">
              {/* Previous Image Arrow Button */}
              {onPrev && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  disabled={hasPrev === false}
                  className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#051E22]/85 hover:bg-[#0B6E7B] text-white border border-[#0B6E7B]/60 hover:border-[#2DD4BF] flex items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95 ${
                    hasPrev === false ? 'opacity-25 cursor-not-allowed pointer-events-none' : ''
                  }`}
                  aria-label="Previous image"
                  title="Previous image (Left Arrow key)"
                >
                  <i className="fa-solid fa-chevron-left text-sm sm:text-base"></i>
                </button>
              )}

              {/* Image with key to animate smoothly on image switch */}
              <div className="w-full h-full flex items-center justify-center overflow-auto custom-scrollbar p-2">
                <motion.img
                  key={selectedImage.src}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1, scale: isZoomed ? 1.85 : 1 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  onClick={toggleZoom}
                  className={`max-h-[70vh] max-w-full w-auto object-contain rounded shadow-2xl transition-all cursor-${
                    isZoomed ? 'zoom-out' : 'zoom-in'
                  }`}
                />
              </div>

              {/* Next Image Arrow Button */}
              {onNext && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  disabled={hasNext === false}
                  className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#051E22]/85 hover:bg-[#0B6E7B] text-white border border-[#0B6E7B]/60 hover:border-[#2DD4BF] flex items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95 ${
                    hasNext === false ? 'opacity-25 cursor-not-allowed pointer-events-none' : ''
                  }`}
                  aria-label="Next image"
                  title="Next image (Right Arrow key)"
                >
                  <i className="fa-solid fa-chevron-right text-sm sm:text-base"></i>
                </button>
              )}
            </div>

            {/* Modal Description Footer */}
            {selectedImage.description && (
              <div className="pt-3 border-t border-[#0B6E7B]/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                <p className="font-sans text-xs sm:text-sm text-white/80 max-w-3xl leading-relaxed">
                  {selectedImage.description}
                </p>
                <span className="text-[11px] font-narrow text-[#2DD4BF] font-semibold tracking-wider shrink-0 flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-info text-[10px]"></i>
                  <span>Click photo to toggle 2x zoom • Use ← → keys to browse</span>
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
});

export default ImageLightboxModal;
