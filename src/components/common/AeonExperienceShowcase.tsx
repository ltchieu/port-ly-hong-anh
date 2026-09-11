import { useState, useMemo, useCallback, lazy, Suspense } from 'react';
import FacebookEmbed from './FacebookEmbed';
import AnimatedCounter from './AnimatedCounter';
import HighlightText from './HighlightText';
import HighlightVideoCard from './HighlightVideoCard';
import ImageLightboxModal from './ImageLightboxModal';
import GallerySkeleton from './GallerySkeleton';
import type { LightboxImageData } from '../../models/imageLightboxModal';
import type { MasonryItem } from '../../models/masonry';
import {
  aeonHighlightVideos,
  aeonReportLinks,
  aeonMetrics,
  aeonMallImages,
} from '../../data/aeonVietnamData';

// Lazy import Masonry
const Masonry = lazy(() => import('./Masonry'));

export default function AeonExperienceShowcase() {
  const [selectedImage, setSelectedImage] = useState<LightboxImageData | null>(null);

  const handleOpenLightbox = useCallback((src: string, title: string, description?: string) => {
    setSelectedImage({
      src,
      title,
      category: 'AEON VIET NAM • EVENT OPERATIONS',
      description: description || 'Event support, on-site photography, video footage collection & communication materials.',
    });
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Memoized Masonry items for all 9 AEON Mall event images
  const aeonMasonryItems: MasonryItem[] = useMemo(() => {
    const captions = [
      {
        title: 'Job Fair & Candidate Reception Desk',
        subtitle: 'AEON Vietnam • Talent Acquisition Event',
        height: 380,
      },
      {
        title: 'Candidate Interview & Consultation Booth',
        subtitle: 'AEON Vietnam • Mass Recruitment Drive',
        height: 480,
      },
      {
        title: 'Event Operations Team & Onsite Briefing',
        subtitle: 'AEON Vietnam • Recruitment Support',
        height: 340,
      },
      {
        title: 'Campus Career Day & University Talent Engagement',
        subtitle: 'AEON Vietnam • University Job Fair',
        height: 520,
      },
      {
        title: 'Applicant Registration & Guidance Area',
        subtitle: 'AEON Vietnam • Mass Recruitment Campaign',
        height: 360,
      },
      {
        title: 'Corporate Culture & Employer Branding Display',
        subtitle: 'AEON Vietnam • Talent Branding',
        height: 440,
      },
      {
        title: 'On-site Media Documentation & Event Photography',
        subtitle: 'AEON Vietnam • Event Multimedia Coverage',
        height: 350,
      },
      {
        title: 'Candidate Group Briefing & Screening Session',
        subtitle: 'AEON Vietnam • Talent Acquisition Operations',
        height: 460,
      },
      {
        title: 'Event Communication Signage & Booth Coordination',
        subtitle: 'AEON Vietnam • Job Fair Support',
        height: 390,
      },
    ];

    return aeonMallImages.map((src, idx) => ({
      id: `aeon-masonry-${idx + 1}`,
      img: src,
      height: captions[idx]?.height || 380,
      title: captions[idx]?.title || `AEON Event Media Shot 0${idx + 1}`,
      subtitle: captions[idx]?.subtitle || 'AEON Vietnam • Event Operations',
    }));
  }, []);

  return (
    <div className="space-y-10 pt-2" onClick={(e) => e.stopPropagation()}>
      {/* KEY METRIC COUNTERS WITH ANIMATED COUNT-UP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {aeonMetrics.map((metric, mIdx) => (
          <div
            key={mIdx}
            className="p-4 sm:p-5 bg-white border border-[#CCE5E3] rounded-xl flex flex-col justify-between space-y-3 shadow-2xs hover:border-[#0B6E7B] hover:shadow-md transition-all group min-w-0"
          >
            <div className="flex items-start justify-between gap-2 text-[#0B6E7B]">
              <span className="font-narrow text-xs sm:text-sm font-black uppercase tracking-wider text-[#4E6E75] group-hover:text-[#0B6E7B] transition-colors leading-snug flex-1 min-w-0">
                {metric.label}
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#F0F8F7] flex items-center justify-center border border-[#CCE5E3] group-hover:bg-[#0B6E7B] group-hover:text-white transition-all shrink-0">
                <i className={`${metric.icon} text-sm`}></i>
              </div>
            </div>
            <div>
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0C2B31] leading-none block tracking-tight">
                <AnimatedCounter value={metric.value} />
              </span>
              {metric.subtext && (
                <p className="font-sans text-xs sm:text-sm text-[#4E6E75] mt-1.5 font-medium leading-normal">
                  {metric.subtext}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* VIDEO EDITOR & SHORT-FORM CONTENT PRODUCTION */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#CCE5E3] p-5 sm:p-7 lg:p-8 space-y-6 shadow-xs hover:border-[#0B6E7B]/40 transition-all">
        <div className="border-b border-[#CCE5E3]/80 pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                HIGHLIGHT VIDEOS & FACEBOOK REELS
              </span>
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2.5">
                <i className="fa-solid fa-video text-[#0B6E7B]"></i>
                <span>Video Editor & Short-Form Content Production</span>
              </h3>
            </div>

            {/* Simple Button Links placed in Header (Flex Column) */}
            <div className="flex flex-col gap-2 shrink-0 pr-9">
              <a
                href={aeonReportLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#0B6E7B] hover:bg-[#08545E] text-white rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-between gap-2.5 transition-all shadow-xs hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-file-lines text-[#2DD4BF]"></i>
                  <span>Brief video AEON</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-80"></i>
              </a>

              <a
                href={aeonReportLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white hover:bg-[#F0F8F7] text-[#0C2B31] border border-[#CCE5E3] hover:border-[#0B6E7B] rounded-xl font-narrow text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-between gap-2.5 transition-all shadow-xs hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-chart-pie text-[#0B6E7B]"></i>
                  <span>Reels Report 2023</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-80"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Highlight Video Section */}
        <div className="space-y-4">
          {/* Section Header for Reels */}
          <div className="flex items-center justify-between pt-1">
          </div>

          {/* 4 Highlight Facebook Reels 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {aeonHighlightVideos.map((video, vIdx) => (
              <HighlightVideoCard
                key={video.id}
                index={vIdx + 1}
                title={video.title}
                channelName="Growth with AEON"
                channelHandle="@growthwithaeon"
                platform={video.platform}
                videoUrl={video.videoUrl}
                image={video.image}
                stats={{
                  likes: vIdx === 0 ? "4,520" : vIdx === 1 ? "6,180" : vIdx === 2 ? "5,340" : "7,890",
                  comments: vIdx === 0 ? "68" : vIdx === 1 ? "94" : vIdx === 2 ? "76" : "128",
                  shares: vIdx === 0 ? "890" : vIdx === 1 ? "1,240" : vIdx === 2 ? "980" : "1,670",
                }}
                duration={
                  vIdx === 0
                    ? "00:00/00:35"
                    : vIdx === 1
                      ? "00:00/00:42"
                      : vIdx === 2
                        ? "00:00/00:39"
                        : "00:00/00:46"
                }
                description={video.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION 2: EVENT OPERATION & COMMUNICATIONS */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#CCE5E3] p-5 sm:p-7 lg:p-8 space-y-6 shadow-xs hover:border-[#0B6E7B]/40 transition-all">
        <div className="border-b border-[#CCE5E3]/80 pb-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-narrow text-xs sm:text-sm font-black text-[#0B6E7B] tracking-[0.2em] uppercase block">
                ONSITE MEDIA & FIELD OPERATIONS
              </span>
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0C2B31] flex items-center gap-2.5">
                <i className="fa-solid fa-calendar-check text-[#0B6E7B]"></i>
                <span>Event Operation & Communications ({aeonMallImages.length} Shots)</span>
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1.5 bg-[#F0F8F7] border border-[#CCE5E3] font-narrow text-xs font-bold uppercase tracking-wider rounded-xl text-[#0B6E7B] flex items-center gap-1.5 shadow-2xs">
                <i className="fa-solid fa-camera-retro text-[#0B6E7B] text-xs"></i>
                On-site Media & Photography
              </span>
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#2C4A51] leading-relaxed">
            <HighlightText text="Event support, on-site photography, video footage collection & communication materials" />
          </p>

          <ul className="space-y-2 pt-1 font-sans text-xs sm:text-sm text-[#4E6E75] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0B6E7B] mt-1.5 flex-shrink-0"></span>
              <span>
                Supported internal and recruitment events, including Job Fairs and Mass Recruitment campaigns.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0B6E7B] mt-1.5 flex-shrink-0"></span>
              <span>
                Produced event content through photography, videography, video editing and social media posts to support event communications.
              </span>
            </li>
          </ul>
        </div>

        {/* Masonry Image Gallery for AEON Mall Event Operations (9 Shots) */}
        <div className="bg-[#F8FCFB] p-5 sm:p-7 rounded-2xl border border-[#CCE5E3] space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#CCE5E3]/60 pb-3">
            <div>
              <h4 className="font-narrow text-xs sm:text-sm font-black text-[#0C2B31] uppercase tracking-wider flex items-center gap-1.5">
                <i className="fa-solid fa-layer-group text-[#0B6E7B]"></i>
                On-site Event Operations & Photography Gallery ({aeonMallImages.length} Shots)
              </h4>
              <p className="font-sans text-xs text-[#4E6E75]">
                Click any photo to expand in high-resolution full screen.
              </p>
            </div>
            <span className="font-mono text-[9px] text-[#0B6E7B] hidden sm:inline-block font-bold">
              MASONRY GRID &bull; CLICK TO ZOOM
            </span>
          </div>

          <div className="w-full">
            <Suspense fallback={<GallerySkeleton height="450px" title="Loading AEON Event Photography..." />}>
              <div className="min-h-[420px]">
                <Masonry
                  items={aeonMasonryItems}
                  ease="power3.out"
                  duration={0.6}
                  stagger={0.04}
                  animateFrom="bottom"
                  scaleOnHover={true}
                  hoverScale={0.97}
                  onItemClick={(item) =>
                    handleOpenLightbox(item.img, item.title || 'AEON Event Media Shot', item.subtitle)
                  }
                />
              </div>
            </Suspense>
          </div>
        </div>

        {/* Feature Execution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#F8FCFB] p-5 rounded-2xl border border-[#CCE5E3] space-y-3 shadow-2xs hover:border-[#0B6E7B] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#0B6E7B]/10 text-[#0B6E7B] flex items-center justify-center">
              <i className="fa-solid fa-bullhorn text-base"></i>
            </div>
            <h4 className="font-display text-base sm:text-lg uppercase tracking-tight text-[#0C2B31]">
              Job Fairs & Mass Recruitment Support
            </h4>
            <p className="font-sans text-sm text-[#4E6E75] leading-relaxed">
              Coordinated candidate touchpoints, on-site event logistics, and brand booth presence for university job fairs and large-scale recruitment drives.
            </p>
          </div>

          <div className="bg-[#F8FCFB] p-5 rounded-2xl border border-[#CCE5E3] space-y-3 shadow-2xs hover:border-[#0B6E7B] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#0B6E7B]/10 text-[#0B6E7B] flex items-center justify-center">
              <i className="fa-solid fa-camera-retro text-base"></i>
            </div>
            <h4 className="font-display text-base sm:text-lg uppercase tracking-tight text-[#0C2B31]">
              Onsite Photography & Multimedia Content
            </h4>
            <p className="font-sans text-sm text-[#4E6E75] leading-relaxed">
              Captured documentary photos and videos during live recruitment sessions, collecting footage and editing post-event communication materials.
            </p>
          </div>
        </div>
      </div>

      {/* Single Image Lightbox Modal */}
      <ImageLightboxModal selectedImage={selectedImage} onClose={handleCloseLightbox} />
    </div>
  );
}
