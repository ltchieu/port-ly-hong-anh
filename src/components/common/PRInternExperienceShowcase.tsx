import { useState, useMemo, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ImageLightboxModal from './ImageLightboxModal';
import { prInternData } from '../../data/prInternData';
import type { LightboxImageData } from '../../models/imageLightboxModal';

// Vite eager glob for all assets under /assets/image/PRIntern
const prRawImages = import.meta.glob<string>(
  '/assets/image/PRIntern/**/*.{webp,jpg,jpeg,png,JPG,PNG}',
  { eager: true, import: 'default' }
);

// Helper function to extract images matching subfolder paths
const getImagesForPath = (pathSubstr: string): string[] => {
  const normalizedSearch = pathSubstr.replace(/\\/g, '/').toLowerCase();
  return Object.keys(prRawImages)
    .filter((key) => key.replace(/\\/g, '/').toLowerCase().includes(normalizedSearch))
    .map((key) => prRawImages[key]);
};

interface CustomGalleryModalState {
  isOpen: boolean;
  title: string;
  images: string[];
  currentIndex: number;
}

export default function PRInternExperienceShowcase() {
  // Single Lightbox image state
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);

  // Full gallery popup modal state
  const [galleryModal, setGalleryModal] = useState<CustomGalleryModalState>({
    isOpen: false,
    title: '',
    images: [],
    currentIndex: 0,
  });

  // Extract images for all 4 sections
  const mouImages = useMemo(() => getImagesForPath('2024.03.28 MOU signing'), []);
  const prPracticeLedImages = useMemo(() => getImagesForPath('Creadit-transfer Program/DESIGN'), []);
  const prPracticeHighlightImages = useMemo(() => getImagesForPath('Creadit-transfer Program/Highlight event photos'), []);
  const prPracticeAllImages = useMemo(() => [...prPracticeLedImages, ...prPracticeHighlightImages], [prPracticeLedImages, prPracticeHighlightImages]);
  const admissionImages = useMemo(() => getImagesForPath('Ảnh tuyển sinh chương trình liên kết'), []);
  const flindersImages = useMemo(() => getImagesForPath('2024.09.18 Flinders x OU'), []);

  const openGalleryModal = useCallback((title: string, images: string[], startIndex = 0) => {
    setGalleryModal({
      isOpen: true,
      title,
      images,
      currentIndex: startIndex,
    });
  }, []);

  const closeGalleryModal = useCallback(() => {
    setGalleryModal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const nextGalleryImage = useCallback(() => {
    setGalleryModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  }, []);

  const prevGalleryImage = useCallback(() => {
    setGalleryModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  }, []);

  // Keyboard navigation for full gallery modal
  useEffect(() => {
    if (!galleryModal.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeGalleryModal();
      } else if (e.key === 'ArrowLeft') {
        prevGalleryImage();
      } else if (e.key === 'ArrowRight') {
        nextGalleryImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryModal.isOpen, closeGalleryModal, prevGalleryImage, nextGalleryImage]);

  return (
    <div className="pt-6 space-y-10 border-t border-[#CCE5E3] mt-6" onClick={(e) => e.stopPropagation()}>
      {/* SECTION 1: MOU CEREMONY */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-xl p-5 sm:p-7 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#CCE5E3] pb-4">
          <div>
            <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-widest uppercase block">
              PARTNERSHIP EVENT
            </span>
            <h4 className="font-display text-xl sm:text-2xl uppercase text-[#0C2B31] tracking-tight">
              1. {prInternData.mouSigning.title}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#4E6E75] mt-1">
              {prInternData.mouSigning.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {prInternData.mouSigning.newsLink && (
              <a
                href={prInternData.mouSigning.newsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#0B6E7B] text-white hover:bg-[#08545E] transition-colors rounded-lg text-xs font-narrow font-black tracking-wider uppercase inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>Read Official Press</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            )}
            {prInternData.mouSigning.socialPostLink && (
              <a
                href={prInternData.mouSigning.socialPostLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#08545E] text-white hover:bg-[#07262B] transition-colors rounded-lg text-xs font-narrow font-black tracking-wider uppercase inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>BE x OU Post</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            )}
          </div>
        </div>

        {/* MOU Image Grid */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {mouImages.slice(0, 7).map((src, idx) => (
              <div
                key={idx}
                onClick={() => openGalleryModal("MOU Ceremony Gallery", mouImages, idx)}
                className="aspect-4/3 w-full rounded-xl overflow-hidden bg-white border border-[#CCE5E3] cursor-pointer group relative shadow-xs"
              >
                <img
                  src={src}
                  alt={`MOU Signing ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-[#07262B]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white pointer-events-none">
                  <i className="fa-solid fa-magnifying-glass-plus text-base text-[#2DD4BF] pointer-events-none"></i>
                </div>
              </div>
            ))}

            {/* View Full Gallery Card */}
            {mouImages.length > 7 && (
              <div
                onClick={() => openGalleryModal("MOU Ceremony Gallery", mouImages, 7)}
                className="aspect-4/3 w-full rounded-xl overflow-hidden bg-[#07262B] text-white border border-[#0B6E7B]/40 cursor-pointer group relative flex flex-col items-center justify-center p-3 text-center shadow-xs hover:bg-[#0A3D44] transition-colors"
              >
                <i className="fa-solid fa-images text-xl text-[#2DD4BF] mb-1 group-hover:scale-110 transition-transform pointer-events-none"></i>
                <span className="font-narrow text-xs font-black uppercase tracking-wider pointer-events-none">
                  View All ({mouImages.length})
                </span>
                <span className="font-sans text-[10px] text-white/70 mt-0.5 pointer-events-none">MOU Photos</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 2: PR PRACTICE */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-xl p-5 sm:p-7 space-y-5">
        <div className="border-b border-[#CCE5E3] pb-4">
          <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-widest uppercase block">
            CAMPAIGN DESIGN & OPERATIONS
          </span>
          <h4 className="font-display text-xl sm:text-2xl uppercase text-[#0C2B31] tracking-tight">
            2. {prInternData.prPractice.title}
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#4E6E75] mt-1">
            {prInternData.prPractice.subtitle} — {prInternData.prPractice.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LED Background Key Visual Designs */}
          <div className="space-y-3">
            <h5 className="font-narrow text-xs font-black uppercase tracking-wider text-[#0C2B31] flex items-center gap-1.5">
              <i className="fa-solid fa-palette text-[#0B6E7B]"></i>
              <span>Key Visual LED Designs ({prPracticeLedImages.length})</span>
            </h5>
            <div className="grid grid-cols-2 gap-2">
              {prPracticeLedImages.slice(0, 4).map((src, idx) => (
                <div
                  key={idx}
                  onClick={() => openGalleryModal("Key Visual LED Designs", prPracticeLedImages, idx)}
                  className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#CCE5E3] cursor-pointer group relative shadow-xs"
                >
                  <img
                    src={src}
                    alt={`LED Key Visual ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-[#07262B]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white pointer-events-none">
                    <i className="fa-solid fa-magnifying-glass-plus text-sm text-[#2DD4BF] pointer-events-none"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Operation Highlights */}
          <div className="space-y-3">
            <h5 className="font-narrow text-xs font-black uppercase tracking-wider text-[#0C2B31] flex items-center gap-1.5">
              <i className="fa-solid fa-camera text-[#0B6E7B]"></i>
              <span>Event Operations ({prPracticeHighlightImages.length})</span>
            </h5>
            <div className="grid grid-cols-2 gap-2">
              {prPracticeHighlightImages.slice(0, 3).map((src, idx) => (
                <div
                  key={idx}
                  onClick={() => openGalleryModal("PR Practice Event Highlights", prPracticeAllImages, idx + prPracticeLedImages.length)}
                  className="aspect-video w-full rounded-xl overflow-hidden bg-white border border-[#CCE5E3] cursor-pointer group relative shadow-xs"
                >
                  <img
                    src={src}
                    alt={`PR Event ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-[#07262B]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white pointer-events-none">
                    <i className="fa-solid fa-magnifying-glass-plus text-sm text-[#2DD4BF] pointer-events-none"></i>
                  </div>
                </div>
              ))}

              <div
                onClick={() => openGalleryModal("PR Practice Event Highlights", prPracticeAllImages, 0)}
                className="aspect-video w-full rounded-xl overflow-hidden bg-[#07262B] text-white border border-[#0B6E7B]/40 cursor-pointer group relative flex flex-col items-center justify-center p-2 text-center shadow-xs hover:bg-[#0A3D44] transition-colors"
              >
                <i className="fa-solid fa-images text-lg text-[#2DD4BF] mb-0.5 group-hover:scale-110 transition-transform pointer-events-none"></i>
                <span className="font-narrow text-xs font-black uppercase tracking-wider pointer-events-none">
                  View All ({prPracticeAllImages.length})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: ADMISSION PHOTOGRAPHY */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-xl p-5 sm:p-7 space-y-5">
        <div className="border-b border-[#CCE5E3] pb-4">
          <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-widest uppercase block">
            RECRUITMENT BRANDING
          </span>
          <h4 className="font-display text-xl sm:text-2xl uppercase text-[#0C2B31] tracking-tight">
            3. {prInternData.admissionPhotography.title}
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#4E6E75] mt-1">
            {prInternData.admissionPhotography.subtitle} — {prInternData.admissionPhotography.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {admissionImages.slice(0, 11).map((src, idx) => (
            <div
              key={idx}
              onClick={() => openGalleryModal("Admission Photography Gallery", admissionImages, idx)}
              className="aspect-square w-full rounded-xl overflow-hidden bg-white border border-[#CCE5E3] cursor-pointer group relative shadow-xs"
            >
              <img
                src={src}
                alt={`Admission Shoot ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              />
              <div className="absolute inset-0 bg-[#07262B]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white pointer-events-none">
                <i className="fa-solid fa-magnifying-glass-plus text-sm text-[#2DD4BF] pointer-events-none"></i>
              </div>
            </div>
          ))}

          {/* View Full Gallery Card */}
          {admissionImages.length > 11 && (
            <div
              onClick={() => openGalleryModal("Admission Photography Gallery", admissionImages, 11)}
              className="aspect-square w-full rounded-xl overflow-hidden bg-[#07262B] text-white border border-[#0B6E7B]/40 cursor-pointer group relative flex flex-col items-center justify-center p-2 text-center shadow-xs hover:bg-[#0A3D44] transition-colors"
            >
              <i className="fa-solid fa-camera-retro text-xl text-[#2DD4BF] mb-1 group-hover:scale-110 transition-transform pointer-events-none"></i>
              <span className="font-narrow text-xs font-black uppercase tracking-wider pointer-events-none">
                All ({admissionImages.length})
              </span>
            </div>
          )}
        </div>
      </div>

      {/* SECTION 4: EXTRACURRICULAR ACTIVITY PHOTOGRAPHY */}
      <div className="bg-[#F4FAF9] border border-[#CCE5E3] rounded-xl p-5 sm:p-7 space-y-5">
        <div className="border-b border-[#CCE5E3] pb-4">
          <span className="font-narrow text-xs font-black text-[#0B6E7B] tracking-widest uppercase block">
            INTERNATIONAL EXCHANGE
          </span>
          <h4 className="font-display text-xl sm:text-2xl uppercase text-[#0C2B31] tracking-tight">
            4. {prInternData.extracurricularPhotography.title}
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#4E6E75] mt-1">
            {prInternData.extracurricularPhotography.subtitle} — {prInternData.extracurricularPhotography.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {flindersImages.slice(0, 11).map((src, idx) => (
            <div
              key={idx}
              onClick={() => openGalleryModal("Flinders x OU Event Gallery", flindersImages, idx)}
              className="aspect-4/3 w-full rounded-xl overflow-hidden bg-white border border-[#CCE5E3] cursor-pointer group relative shadow-xs"
            >
              <img
                src={src}
                alt={`Flinders x OU ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              />
              <div className="absolute inset-0 bg-[#07262B]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white pointer-events-none">
                <i className="fa-solid fa-magnifying-glass-plus text-sm text-[#2DD4BF] pointer-events-none"></i>
              </div>
            </div>
          ))}

          {/* View Full Gallery Card */}
          {flindersImages.length > 11 && (
            <div
              onClick={() => openGalleryModal("Flinders x OU Event Gallery", flindersImages, 11)}
              className="aspect-4/3 w-full rounded-xl overflow-hidden bg-[#07262B] text-white border border-[#0B6E7B]/40 cursor-pointer group relative flex flex-col items-center justify-center p-2 text-center shadow-xs hover:bg-[#0A3D44] transition-colors"
            >
              <i className="fa-solid fa-earth-americas text-xl text-[#2DD4BF] mb-1 group-hover:scale-110 transition-transform pointer-events-none"></i>
              <span className="font-narrow text-xs font-black uppercase tracking-wider pointer-events-none">
                All ({flindersImages.length})
              </span>
            </div>
          )}
        </div>
      </div>

      {/* FULL GALLERY POPUP MODAL */}
      {galleryModal.isOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07262B]/90 backdrop-blur-md" onClick={closeGalleryModal}>
            <div className="relative w-full max-w-4xl bg-[#051E22] text-white border border-[#0B6E7B]/40 rounded-2xl p-6 shadow-2xl space-y-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-[#0B6E7B]/30 pb-3">
                <div>
                  <h3 className="font-display text-lg sm:text-xl uppercase text-white tracking-tight">
                    {galleryModal.title}
                  </h3>
                  <span className="font-narrow text-xs text-[#2DD4BF] uppercase tracking-wider">
                    Photo {galleryModal.currentIndex + 1} of {galleryModal.images.length}
                  </span>
                </div>
                <button
                  onClick={closeGalleryModal}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0B6E7B] transition-colors flex items-center justify-center text-white cursor-pointer border border-[#0B6E7B]/40"
                >
                  <i className="fa-solid fa-xmark text-sm pointer-events-none"></i>
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={galleryModal.images[galleryModal.currentIndex]}
                  alt={`Gallery ${galleryModal.currentIndex + 1}`}
                  className="max-h-full max-w-full object-contain pointer-events-none"
                />

                {galleryModal.images.length > 1 && (
                  <>
                    <button
                      onClick={prevGalleryImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#07262B]/80 hover:bg-[#0B6E7B] transition-colors flex items-center justify-center text-white border border-[#0B6E7B]/40 cursor-pointer z-10"
                    >
                      <i className="fa-solid fa-chevron-left text-sm pointer-events-none"></i>
                    </button>
                    <button
                      onClick={nextGalleryImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#07262B]/80 hover:bg-[#0B6E7B] transition-colors flex items-center justify-center text-white border border-[#0B6E7B]/40 cursor-pointer z-10"
                    >
                      <i className="fa-solid fa-chevron-right text-sm pointer-events-none"></i>
                    </button>
                  </>
                )}
              </div>

              {/* Bottom thumbnail strip */}
              <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1">
                {galleryModal.images.map((src, idx) => (
                  <div
                    key={idx}
                    onClick={() => setGalleryModal((prev) => ({ ...prev, currentIndex: idx }))}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 cursor-pointer shrink-0 transition-all ${galleryModal.currentIndex === idx ? 'border-[#2DD4BF] scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={src} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* SINGLE IMAGE LIGHTBOX MODAL */}
      <ImageLightboxModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
