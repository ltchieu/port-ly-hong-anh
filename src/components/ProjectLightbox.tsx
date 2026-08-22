import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../models/Project";

interface ProjectLightboxProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export default function ProjectLightbox({
  project,
  onClose,
  onInquire,
}: ProjectLightboxProps) {
  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-lightbox-modal"
          id="project-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#07262B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div 
            initial={{ scale: 0.92, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 15 }}
            className="bg-white text-[#0C2B31] border border-[#CCE5E3] max-w-4xl w-full rounded-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
          >
            {/* Close Button */}
            <button 
              id="lightbox-close"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/90 text-[#0C2B31] border border-[#CCE5E3] hover:border-[#0B6E7B] hover:text-[#0B6E7B] transition-colors z-30 shadow-md cursor-pointer"
              aria-label="Close project modal"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>

            {/* Left Column: Image */}
            <div className="lg:col-span-6 relative bg-[#E7F3F2] aspect-square lg:aspect-auto lg:h-full min-h-[300px]">
              <img 
                src={project.image} 
                alt={project.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute top-6 left-6 bg-[#0B6E7B] text-white font-mono text-[9px] tracking-[0.2em] px-3 py-1 uppercase rounded shadow-xs">
                {project.year}
              </div>
            </div>

            {/* Right Column: Narrative Info */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="font-narrow text-xs font-black hologram-metal-text tracking-[0.25em] uppercase block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase leading-none text-[#0C2B31]">
                    {project.title}
                  </h3>
                </div>
                
                <div className="h-0.5 hologram-metal-bg w-16"></div>

                <p className="font-sans text-sm text-[#4E6E75] leading-relaxed">
                  {project.narrative}
                </p>

                {/* Deliverables lists */}
                <div className="space-y-2">
                  <p className="font-narrow text-[10px] font-black text-[#0B6E7B] tracking-[0.2em] uppercase">
                    Core Deliverables
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverables.map((d, i) => (
                      <span key={i} className="font-sans text-xs bg-[#E7F3F2] px-2.5 py-1 text-[#0C2B31] rounded font-medium">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools lists */}
                <div className="space-y-2">
                  <p className="font-narrow text-[10px] font-black text-[#0B6E7B] tracking-[0.2em] uppercase">
                    Creator Instruments
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t, i) => (
                      <span key={i} className="font-mono text-[10px] border border-[#CCE5E3] px-2.5 py-1 text-[#4E6E75] rounded bg-[#F4FAF9]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#CCE5E3] flex justify-end gap-3">
                <button 
                  onClick={onClose}
                  className="border border-[#0B6E7B] text-[#0B6E7B] font-narrow text-xs font-black tracking-widest uppercase px-5 py-2.5 rounded-lg hover:bg-[#0B6E7B] hover:text-white transition-colors cursor-pointer shadow-xs"
                >
                  CLOSE VIEW
                </button>
                <button 
                  onClick={() => onInquire(project.title)}
                  className="hologram-metal-bg text-white font-narrow text-xs font-black tracking-widest uppercase px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
                >
                  INQUIRE CONCEPT
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
