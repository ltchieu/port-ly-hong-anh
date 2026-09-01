import type {
  AeonVideoItem,
  AeonReportLink,
  AeonMetric,
} from '../models/aeonVietnam';

export const AEON_BRIEF_VIDEO_URL =
  'https://docs.google.com/spreadsheets/d/1M2ym2hW61PyCzL7FcR25thOk2ocSbpuK4iZVmtYPR2M/edit?usp=sharing';

export const AEON_REELS_REPORT_URL =
  'https://docs.google.com/spreadsheets/d/1M2ym2hW61PyCzL7FcR25thOk2ocSbpuK4iZVmtYPR2M/edit?usp=sharing';

export const aeonReportLinks: AeonReportLink[] = [
  {
    title: 'Brief video AEON',
    url: AEON_BRIEF_VIDEO_URL,
    badge: 'Video Production Brief',
    description: 'Detailed video production brief, content angles, scripting requirements and creative guidelines.',
    icon: 'fa-solid fa-file-lines',
  },
  {
    title: 'Reels Report 2023',
    url: AEON_REELS_REPORT_URL,
    badge: 'Performance Report',
    description: 'Comprehensive performance evaluation, engagement metrics, and distribution insights for 2023 Reels.',
    icon: 'fa-solid fa-chart-simple',
  },
];

export const aeonHighlightVideos: AeonVideoItem[] = [
  {
    id: 'aeon-reel-01',
    title: 'Growth with AEON — Reel #01',
    channel: 'Growth with AEON',
    platform: 'facebook',
    videoUrl: 'https://www.facebook.com/reel/250697900959082/',
    reelId: '250697900959082',
    category: 'Employer Branding',
    description: 'Short-form recruitment and corporate culture story highlighting career journeys at AEON Vietnam.',
  },
  {
    id: 'aeon-reel-02',
    title: 'Growth with AEON — Reel #02',
    channel: 'Growth with AEON',
    platform: 'facebook',
    videoUrl: 'https://www.facebook.com/reel/1794471087668283/',
    reelId: '1794471087668283',
    category: 'Workplace Culture',
    description: 'Dynamic short-form video capturing everyday vibrant work environment and employee empowerment.',
  },
  {
    id: 'aeon-reel-03',
    title: 'Growth with AEON — Reel #03',
    channel: 'Growth with AEON',
    platform: 'facebook',
    videoUrl: 'https://www.facebook.com/reel/899706545007777/',
    reelId: '899706545007777',
    category: 'Internal Communications',
    description: 'Engaging social video spotlighting talent development initiatives and operational excellence.',
  },
  {
    id: 'aeon-reel-04',
    title: 'Growth with AEON — Reel #04',
    channel: 'Growth with AEON',
    platform: 'facebook',
    videoUrl: 'https://www.facebook.com/reel/657038453174266/',
    reelId: '657038453174266',
    category: 'Mass Recruitment',
    description: 'High-energy recruitment teaser for mass hiring campaigns and university job fair outreach.',
  },
];

export const aeonMetrics: AeonMetric[] = [
  {
    label: 'Featured Reels',
    value: '4',
    subtext: 'High-Performing Short Videos',
    icon: 'fa-brands fa-facebook',
  },
  {
    label: 'Video Production',
    value: '100%',
    subtext: 'Scripting to Final Delivery',
    icon: 'fa-solid fa-clapperboard',
  },
  {
    label: 'Creative Tools',
    value: '2',
    subtext: 'CapCut Pro & Canva',
    icon: 'fa-solid fa-wand-magic-sparkles',
  },
  {
    label: 'Event Operations',
    value: 'Job Fairs',
    subtext: '& Mass Recruitment Campaigns',
    icon: 'fa-solid fa-users',
  },
];

// Dynamically import all aeon-mall images
const aeonMallImagesGlob = import.meta.glob<string>(
  '/assets/image/aeon-mall/*.{webp,WEBP,png,PNG,jpg,JPG,jpeg,JPEG}',
  { eager: true, import: 'default' }
);

export const aeonMallImages: string[] = Object.values(aeonMallImagesGlob);

export const getAeonMallImage = (filename: string): string => {
  const matchKey = Object.keys(aeonMallImagesGlob).find((key) => key.endsWith(filename));
  return matchKey ? aeonMallImagesGlob[matchKey] : '';
};

