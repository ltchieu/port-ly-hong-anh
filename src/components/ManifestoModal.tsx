import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { introBio, careerObjectives, educationInfo } from "../data/about";

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ManifestoModal({ isOpen, onClose }: ManifestoModalProps) {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="manifesto-modal"
          id="manifesto-modal"
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#07262B]/90 backdrop-blur-md flex items-center justify-center p-6"
        >
          <motion.div
            data-lenis-prevent="true"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAFCFC] text-[#0C2B31] border border-[#CCE5E3] max-w-2xl w-full p-8 md:p-12 rounded-2xl shadow-2xl relative max-h-[85vh] overflow-y-auto"
          >
            <button
              id="manifesto-close"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-[#CCE5E3] hover:border-[#0B6E7B] hover:text-[#0B6E7B] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>

            <div className="space-y-6">
              <span className="font-narrow text-xs font-black hologram-metal-text tracking-[0.25em] block uppercase">
                EXECUTIVE STATEMENT &bull; LY HONG ANH
              </span>

              <h3 className="font-display text-3xl sm:text-4xl uppercase leading-none tracking-tight text-[#0C2B31]">
                Craft The Message. Drive The Impact. Shape The Narrative.
              </h3>

              <div className="h-0.5 bg-[#0B6E7B] w-20"></div>

              <div className="font-sans text-sm text-[#4E6E75] space-y-4 leading-relaxed">
                <blockquote className="border-l-2 border-[#0B6E7B] pl-4 py-1 text-base text-[#0C2B31] font-semibold italic bg-[#F0F8F7] rounded-r-lg">
                  &ldquo;Great marketing doesn't just speak to the audience, it resonates and inspires action.&rdquo;
                </blockquote>
                {introBio.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <div className="bg-[#F0F8F7] border border-[#CCE5E3] p-4 rounded-xl space-y-2">
                  <p className="text-xs text-[#0C2B31] font-bold uppercase tracking-wider">
                    Career Direction
                  </p>
                  <p className="text-xs text-[#4E6E75]">
                    <strong className="text-[#0B6E7B]">Goal:</strong> {careerObjectives.longTerm}
                  </p>
                  <p className="text-xs text-[#4E6E75]">
                    <strong className="text-[#0B6E7B]">Education:</strong> {educationInfo.major} ({educationInfo.institution})
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#CCE5E3] flex justify-between items-center">
                <div className="font-cursive hologram-metal-text text-3xl">
                  Ly Hong Anh
                </div>
                <button
                  onClick={onClose}
                  className="bg-[#0B6E7B] text-white font-narrow text-xs font-black tracking-widest uppercase px-5 py-2.5 rounded-lg hover:bg-[#08545E] transition-colors cursor-pointer shadow-xs"
                >
                  CLOSE READ
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
