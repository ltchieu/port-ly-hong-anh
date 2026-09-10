import type { CarouselItemData } from '../models/carousel';
import type { MarqueeItem } from '../models/infiniteMarquee';
import type { DepthCarouselItem } from '../models/depthCarousel';
import { getVLotusImage } from './vLotusData';
import { getDNImage } from './dnGroupData';

// Dynamically load all images under assets/image/event_selected_work
export const eventImagesGlob = import.meta.glob<string>(
  '../../assets/image/event_selected_work/*.{webp,png,jpg,jpeg,svg,Webp,PNG,JPG,JPEG}',
  { eager: true, import: 'default' }
);

export const getEventSelectedWorkImage = (filename: string): string => {
  if (!filename) return '';
  const lowerFilename = filename.toLowerCase();

  let matchKey = Object.keys(eventImagesGlob).find(key => {
    const lKey = key.toLowerCase();
    return lKey.endsWith(`/${lowerFilename}`) || lKey.endsWith(lowerFilename);
  });
  if (matchKey) return eventImagesGlob[matchKey];

  const cleanTarget = lowerFilename.replace(/[_-]/g, '');
  matchKey = Object.keys(eventImagesGlob).find(key => {
    const baseName = (key.split('/').pop() || '').toLowerCase().replace(/[_-]/g, '');
    return baseName === cleanTarget;
  });
  if (matchKey) return eventImagesGlob[matchKey];

  return '';
};

// 8 Highlight Facebook posts for Diem Nhan Group / Shark Dental
export const sharkDentalFacebookPosts: CarouselItemData[] = [
  {
    id: 1,
    postNumber: "Facebook Post #1",
    tag: "Kiến Thức & Trị Liệu",
    title: "Sự Thật: Nhổ Răng Khôn Có Giúp Mặt Thon Gọn?",
    description: "Phân tích y khoa giải đáp thắc mắc về nhổ răng khôn, định hình góc mặt và bảo vệ sức khỏe răng miệng an toàn.",
    link: "https://www.facebook.com/share/p/1CYrUZrPU2/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    image: getDNImage("post.png"),
    metrics: [
      { value: "596K", label: "VIEWS", highlight: true },
      { value: "2,684h", label: "WATCH TIME" },
      { value: "98.4%", label: "FYP RATIO" },
    ],
  },
  {
    id: 2,
    postNumber: "Facebook Post #2",
    tag: "Khách Hàng & Thẩm Mỹ",
    title: "Bọc Sứ Tức Thì — Lấp Đầy Khoảng Trống",
    description: "Phục hình nụ cười cho khách hàng mất 2 răng hàm với dòng sứ Zirconia chịu lực gấp 7 lần răng thật, màu sắc tự nhiên.",
    link: "https://www.facebook.com/share/p/1E6gdETarj/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    image: getDNImage("post_2.png") || getDNImage("post2.png"),
    metrics: [
      { value: "279K", label: "IMPRESSIONS", highlight: true },
      { value: "1,998", label: "LINK CLICKS" },
      { value: "96.8%", label: "ENGAGEMENT" },
    ],
  },
  {
    id: 3,
    postNumber: "Facebook Post #3",
    tag: "Tri Ân Khách Hàng",
    title: "Thư Cảm Ơn Gửi Đến Quý Khách Hàng 2026",
    description: "Tri ân sự đồng hành và tin tưởng của hàng nghìn khách hàng, gửi gắm thông điệp năm mới hạnh phúc ngập tràn.",
    link: "https://www.facebook.com/share/p/19MLnqx7GC/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    image: getDNImage("post_3.png") || getDNImage("post3.png"),
    metrics: [
      { value: "130K", label: "ORGANIC REACH", highlight: true },
      { value: "160+", label: "REACTIONS" },
      { value: "99.2%", label: "SATISFACTION" },
    ],
  },
  {
    id: 4,
    postNumber: "Facebook Post #4",
    tag: "Chuyên Sâu Implant",
    title: "Trồng Răng Implant Có Ảnh Hưởng Răng Kế Bên?",
    description: "Phương pháp cấy ghép Implant độc lập bảo tồn tối đa răng thật, ngăn ngừa tiêu xương hàm và khôi phục sức nhai.",
    link: "https://www.facebook.com/share/p/14nX9Pyeb17/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    image: getEventSelectedWorkImage("post_4.png") || getDNImage("post4.png"),
    metrics: [
      { value: "215K", label: "VIEWS", highlight: true },
      { value: "1,420h", label: "WATCH TIME" },
      { value: "97.5%", label: "FYP RATIO" },
    ],
  },
  {
    id: 5,
    postNumber: "Facebook Post #5",
    tag: "Shark Warranty Card",
    title: "Shark Warranty Card – One Card, All Warranty Info In One Place",
    description: "No more worrying about lost paperwork! Shark Dental provides every patient with a Warranty Card where all treatment stages and materials are securely stored with a unique security code.",
    link: "https://www.facebook.com/share/p/18jvYxbM5M/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    image: getEventSelectedWorkImage("post5.jpg"),
    metrics: [
      { value: "100%", label: "DIGITAL CARD", highlight: true },
      { value: "12 YRS", label: "WARRANTY" },
      { value: "99.8%", label: "SECURITY" },
    ],
  },
  {
    id: 6,
    postNumber: "Facebook Post #6",
    tag: "Customer Story & Implant",
    title: "Mr. Bruce's Smile Restoration Journey with Dentium Implant",
    description: "Restoring missing teeth with Dentium Implant and aesthetic Zirconia crown for tooth #15. Completed in four appointments over four months with up to 12 years warranty coverage.",
    link: "https://www.facebook.com/share/p/1HQaXiChYZ/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    image: getEventSelectedWorkImage("post6.jpg"),
    metrics: [
      { value: "12 YRS", label: "WARRANTY", highlight: true },
      { value: "4 MO", label: "TREATMENT" },
      { value: "100%", label: "CHEWING FUNCTION" },
    ],
  },
  {
    id: 7,
    postNumber: "Facebook Post #7",
    tag: "Porcelain Veneers Makeover",
    title: "Radiant Smile Makeover — Authentic Porcelain Veneers",
    description: "No long description is needed — the transformation of his teeth and that radiant smile say it all. Authentic, high-quality dental veneers crafted with clear warranty coverage.",
    link: "https://www.facebook.com/share/p/1EokeUDWka/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    image: getEventSelectedWorkImage("post7.jpg"),
    metrics: [
      { value: "195K", label: "REACH", highlight: true },
      { value: "1,480", label: "LINK CLICKS" },
      { value: "98.5%", label: "SATISFACTION" },
    ],
  },
  {
    id: 8,
    postNumber: "Facebook Post #8",
    tag: "Confidence & Veneers",
    title: "The Moment Our Client Smiled With Complete Confidence",
    description: "Transforming hesitant smiles into genuine radiance. How customized porcelain veneers at Shark Dental Clinic helped our client unlock joyful, unreserved confidence in every moment.",
    link: "https://www.facebook.com/share/p/18MG7gLSqv/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    image: getEventSelectedWorkImage("post8.jpg"),
    metrics: [
      { value: "312K", label: "IMPRESSIONS", highlight: true },
      { value: "2,450", label: "CLICKS" },
      { value: "98.9%", label: "CONVERSION" },
    ],
  },
];

// 4 Highlight Short-Form Videos for V LOTUS HOLDINGS JSC (Yoshinoya & Conservo)
export const vLotusShortFormVideos: CarouselItemData[] = [
  {
    id: 1,
    postNumber: "Facebook Reel #1",
    tag: "Conservo Bakery",
    platform: "facebook",
    isVideo: true,
    videoUrl: "https://www.facebook.com/reel/2088629484989843/",
    link: "https://www.facebook.com/reel/2088629484989843/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    title: "Conservo Artisan Breads & Pastries Reel",
    subtitle: "Conservo - Japanese Breads & Café",
    description: "Onsite food shoot, visual storytelling & CapCut Pro editing highlighting Japanese artisan baking artistry and warm cafe ambiance.",
    metrics: [
      { value: "425K+", label: "PEAK REACH", highlight: true },
      { value: "108K", label: "VIEWS" },
      { value: "98.7%", label: "COMPLETION" },
    ],
  },
  {
    id: 2,
    postNumber: "Facebook Reel #2",
    tag: "Yoshinoya Dining",
    platform: "facebook",
    isVideo: true,
    videoUrl: "https://www.facebook.com/reel/1448127329537509",
    link: "https://www.facebook.com/reel/1448127329537509",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    title: "Yoshinoya Sizzling Teppan & Beef Bowls Reel",
    subtitle: "Yoshinoya Vietnam",
    description: "Original Tokyo Gyudon heritage & dining experience, mouthwatering sizzle sound design, and appetizing close-up camera work.",
    metrics: [
      { value: "380K+", label: "REACH", highlight: true },
      { value: "95K", label: "VIEWS" },
      { value: "97.9%", label: "ENGAGEMENT" },
    ],
  },
  {
    id: 3,
    postNumber: "TikTok Video #1",
    tag: "Conservo TikTok",
    platform: "tiktok",
    isVideo: true,
    videoId: "7519379432910392584",
    videoUrl: "https://www.tiktok.com/@conservovn/video/7519379432910392584",
    link: "https://vt.tiktok.com/ZSVVXUgju/",
    icon: <i className="fa-brands fa-tiktok text-sm text-[#0C2B31]" />,
    title: "Fresh Baked Japanese Breads Daily TikTok",
    subtitle: "Conservo Việt Nam",
    description: "Viral culinary visuals & trending music sync showcasing freshly baked Japanese artisan pastries, cafe atmosphere, and customer favorites.",
    metrics: [
      { value: "185K", label: "VIEWS", highlight: true },
      { value: "14.2K", label: "LIKES" },
      { value: "99.1%", label: "VIRAL SCORE" },
    ],
  },
  {
    id: 4,
    postNumber: "TikTok Video #2",
    tag: "Yoshinoya TikTok",
    platform: "tiktok",
    isVideo: true,
    videoId: "7517883339034987783",
    videoUrl: "https://www.tiktok.com/@yoshinoyavietnamofficial/video/7517883339034987783",
    link: "https://vt.tiktok.com/ZSVVX9Csc/",
    icon: <i className="fa-brands fa-tiktok text-sm text-[#0C2B31]" />,
    title: "Gyudon Taste Explosion TikTok",
    subtitle: "Yoshinoya Vietnam",
    description: "Fast-paced dining cuts, punchy sound effects & dynamic pacing celebrating Yoshinoya's 120-year Tokyo beef bowl culinary legacy.",
    metrics: [
      { value: "240K", label: "VIEWS", highlight: true },
      { value: "18.6K", label: "LIKES" },
      { value: "98.5%", label: "FYP RATIO" },
    ],
  },
];

export interface EventPlanningDoc {
  id: string;
  docNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  sheetLink: string;
  tags: string[];
  keyHighlights: string[];
}

// 2 Strategic Event Planning & Operational Documents (Spreadsheets 1.webp & 2.webp)
export const beneliftsPlanningDocs: EventPlanningDoc[] = [
  {
    id: "yep-plan-activities",
    docNumber: "KẾ HOẠCH #01",
    title: "Chi Tiết Các Hoạt Động Trong Chương Trình",
    subtitle: "YEP Event Activities & Experience Breakdown",
    description: "Kế hoạch kịch bản chi tiết cho từng hạng mục trong đêm tiệc YEP: quy trình Check-in đón khách & ký tên bảng Welcome, minigame 'Thử thách phá băng' rút thăm trúng thưởng, tiết mục mở màn và phân bổ nhân sự chuẩn bị.",
    image: eventImagesGlob['../../assets/image/event_selected_work/1.webp'] || '',
    sheetLink: "https://docs.google.com/spreadsheets/d/10qXIwqKY7R7dVaucjhWWpAMN5-JGNgFw9sSNRxJUGSM/edit?usp=sharing",
    tags: ["Check-in Flow", "Thử Thách Phá Băng", "Kịch Bản Tiết Mục"],
    keyHighlights: [
      "Khu vực Check-in đón khách & ký tên bảng Welcome theo concept",
      "Cơ chế minigame Thử thách phá băng & 4 vòng bốc thăm Lucky Draw",
      "Chuẩn bị âm thanh, đạo cụ, tiết mục mở màn & kịch bản MC"
    ]
  },
  {
    id: "yep-plan-timeline",
    docNumber: "KẾ HOẠCH #02",
    title: "Bảng Timeline Tiến Độ & Phân Công Nhiệm Vụ",
    subtitle: "Operational Master Timeline & Task Delegation",
    description: "Bảng phân công trách nhiệm trước sự kiện và timeline chi tiết trực tiếp trong đêm tiệc. Hồng Anh đảm nhiệm phụ trách chính các khâu: lên list quà tặng, đặt bàn tiệc, thiết kế thiệp mời, poster truyền thông, in backdrop và hỗ trợ điều phối.",
    image: eventImagesGlob['../../assets/image/event_selected_work/2.webp'] || '',
    sheetLink: "https://docs.google.com/spreadsheets/d/10qXIwqKY7R7dVaucjhWWpAMN5-JGNgFw9sSNRxJUGSM/edit?usp=sharing",
    tags: ["Master Timeline", "Phân Công Trách Nhiệm", "On-site Operations"],
    keyHighlights: [
      "Hồng Anh phụ trách: Lên list quà tặng, đặt món ăn bàn tiệc",
      "Thiết kế thiệp mời, poster group cộng đồng, gửi thư mời khách VIP",
      "Timeline chi tiết từng khung giờ 17:00 - 20:00 trong đêm tiệc"
    ]
  },
];

// Map of live event photo moments for Benelifts Asia Year-End Party (CenterModeCarousel)
export const eventSelectedWorkCarouselItems: CarouselItemData[] = [
  {
    id: "event-photo-03",
    image: eventImagesGlob['../../assets/image/event_selected_work/3.webp'] || '',
    alt: "Benelifts Year-End Party Stage Backdrop",
  },
  {
    id: "event-photo-04",
    image: eventImagesGlob['../../assets/image/event_selected_work/4.webp'] || '',
    alt: "Benelifts Executive Reception",
  },
  {
    id: "event-photo-05",
    image: eventImagesGlob['../../assets/image/event_selected_work/5.webp'] || '',
    alt: "Event Entertainment Performance",
  },
  {
    id: "event-photo-05-1",
    image: eventImagesGlob['../../assets/image/event_selected_work/5_1.webp'] || '',
    alt: "Gala Dinner and Team Celebration",
  },
  {
    id: "event-photo-06",
    image: eventImagesGlob['../../assets/image/event_selected_work/6.webp'] || '',
    alt: "Employee Recognition Ceremony",
  },
  {
    id: "event-photo-07",
    image: eventImagesGlob['../../assets/image/event_selected_work/7.webp'] || '',
    alt: "Backstage Operations Management",
  },
  {
    id: "event-photo-08",
    image: eventImagesGlob['../../assets/image/event_selected_work/8.webp'] || '',
    alt: "Lucky Draw Minigame",
  },
  {
    id: "event-photo-09",
    image: eventImagesGlob['../../assets/image/event_selected_work/9.webp'] || '',
    alt: "Team Bonding Activity",
  },
  {
    id: "event-photo-10",
    image: eventImagesGlob['../../assets/image/event_selected_work/10.webp'] || '',
    alt: "Commemorative Event Gift Packs",
  },
  {
    id: "event-photo-11",
    image: eventImagesGlob['../../assets/image/event_selected_work/11.webp'] || '',
    alt: "Photo Booth Check-in Wall",
  },
  {
    id: "event-photo-13",
    image: eventImagesGlob['../../assets/image/event_selected_work/13.webp'] || '',
    alt: "Leadership Strategic Roadmap Toast",
  },
  {
    id: "event-photo-14",
    image: eventImagesGlob['../../assets/image/event_selected_work/14.webp'] || '',
    alt: "Grand Finale Group Photograph",
  },
];
