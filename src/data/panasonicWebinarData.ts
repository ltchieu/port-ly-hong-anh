import type { MasonryItem } from '../models/masonry';
import type {
  WebinarMetric,
  WebinarPhotoCaption,
  WebinarVideo,
} from '../models/panasonicWebinar';

// Dynamically import all converted webp images under WebinarEventPhotography using Vite import.meta.glob
const webinarImagesGlob = import.meta.glob<string>(
  '/assets/image/Freelance Project/WebinarEventPhotography/*.{webp,WEBP}',
  { eager: true, import: 'default' }
);

export const getPanasonicWebinarImage = (filename: string): string => {
  const matchKey = Object.keys(webinarImagesGlob).find((key) => key.endsWith(filename));
  return matchKey ? webinarImagesGlob[matchKey] : '';
};

export const PANASONIC_WEBINAR_REPORT_URL =
  'https://docs.google.com/spreadsheets/d/1PKYgGGvR4OQUu1W_yZ4qp8rZuvJTqNNC/edit?usp=sharing&ouid=115935600825419567163&rtpof=true&sd=true';

export const PANASONIC_WEBINAR_VIDEO_URL =
  'https://youtube.com/shorts/CYFBXjQF8iA?si=Zh-kKmEKS6sRetPJ';

export const panasonicWebinarVideo: WebinarVideo = {
  url: 'https://youtube.com/shorts/CYFBXjQF8iA?si=Zh-kKmEKS6sRetPJ',
  videoId: 'CYFBXjQF8iA',
  title: 'Panasonic CFAN Webinar Event & Behind-The-Scenes Highlights',
  description: 'On-site live operations, technical audio-visual control, speaker moderation, and attendee engagement recap.',
  channel: 'Movement Marketing Agency • Panasonic CFAN',
  category: 'EVENT RECAP • YOUTUBE SHORTS',
};

export const webinarMetrics: WebinarMetric[] = [
  {
    label: 'Training Webinars',
    value: '2',
    subtext: 'Product Training Sessions Supported',
    icon: 'fa-solid fa-chalkboard-user',
  },
  {
    label: 'Total Participants',
    value: '200+',
    subtext: 'Attracted Across Both Events',
    icon: 'fa-solid fa-users',
  },
  {
    label: 'Direct Orders',
    value: '30+',
    subtext: 'Generated Directly During Events',
    icon: 'fa-solid fa-cart-shopping',
  },
  {
    label: 'Positive Feedback',
    value: '>93%',
    subtext: 'Attendee Satisfaction Rating',
    icon: 'fa-solid fa-star',
  },
];

export const webinarPhotoCaptions: WebinarPhotoCaption[] = [
  {
    filename: '1.webp',
    title: 'On-site Technical Setup & Equipment Check',
    subtitle: 'Movement Marketing Agency • Panasonic CFAN',
    height: 520,
  },
  {
    filename: '2.webp',
    title: 'Speaker Coordination & Session Briefing',
    subtitle: 'Movement Marketing Agency • Panasonic CFAN',
    height: 520,
  },
  {
    filename: '3.webp',
    title: 'Master Control & Audio-Visual Monitoring',
    subtitle: 'Movement Marketing Agency • Panasonic CFAN',
    height: 320,
  },
  {
    filename: '4.webp',
    title: 'Online Room Administration & Attendee Filtering',
    subtitle: 'Movement Marketing Agency • Panasonic CFAN',
    height: 520,
  },
  {
    filename: '5.webp',
    title: 'Live Q&A Curation & Speaker Moderation',
    subtitle: 'Movement Marketing Agency • Panasonic CFAN',
    height: 520,
  },
  {
    filename: '6.webp',
    title: 'Webinar Broadcast & Presentation Control',
    subtitle: 'Movement Marketing Agency • Panasonic CFAN',
    height: 520,
  },
  {
    filename: '7.webp',
    title: 'Participant Engagement & Feedback Monitoring',
    subtitle: 'Movement Marketing Agency • Panasonic CFAN',
    height: 520,
  },
  {
    filename: '8.webp',
    title: 'Panasonic CFAN Product Training Presentation',
    subtitle: 'Movement Marketing Agency • Panasonic CFAN',
    height: 280,
  },
];

export const getWebinarMasonryItems = (): MasonryItem[] => {
  return webinarPhotoCaptions.map((item, idx) => {
    const src = getPanasonicWebinarImage(item.filename);
    return {
      id: `webinar-masonry-${idx + 1}`,
      img: src,
      height: item.height,
      title: item.title,
      subtitle: item.subtitle,
    };
  });
};
