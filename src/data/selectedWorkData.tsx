import type { CarouselItemData } from '../models/carousel';
import type { MarqueeItem } from '../models/infiniteMarquee';
import type { DepthCarouselItem } from '../models/depthCarousel';
import { getVLotusImage } from './vLotusData';

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
    metrics: [
      { value: "215K", label: "VIEWS", highlight: true },
      { value: "1,420h", label: "WATCH TIME" },
      { value: "97.5%", label: "FYP RATIO" },
    ],
  },
  {
    id: 5,
    postNumber: "Facebook Post #5",
    tag: "Chăm Sóc Nụ Cười",
    title: "Bí Quyết Giữ Nụ Cười Luôn Trắng Sáng & Tự Tin",
    description: "Chiến lược nội dung chăm sóc răng miệng khoa học, bảo vệ men răng và duy trì vẻ rạng rỡ cho nụ cười khỏe đẹp.",
    link: "https://www.facebook.com/share/p/18jvYxbM5M/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    metrics: [
      { value: "320K", label: "VIEWS", highlight: true },
      { value: "1,890h", label: "WATCH TIME" },
      { value: "96.2%", label: "FYP RATIO" },
    ],
  },
  {
    id: 6,
    postNumber: "Facebook Post #6",
    tag: "Quy Trình Chuẩn Y Khoa",
    title: "Trải Nghiệm Dịch Vụ Nha Khoa Chuẩn Y Khoa",
    description: "Thăm khám 1:1 cùng bác sĩ chuyên khoa với hệ thống công nghệ vô trùng khép kín và trang thiết bị hiện đại.",
    link: "https://www.facebook.com/share/p/1HQaXiChYZ/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    metrics: [
      { value: "185K", label: "REACH", highlight: true },
      { value: "1,120", label: "LINK CLICKS" },
      { value: "98.0%", label: "TRUST INDEX" },
    ],
  },
  {
    id: 7,
    postNumber: "Facebook Post #7",
    tag: "Thiết Kế Nụ Cười",
    title: "Kiến Tạo Dáng Răng Cá Nhân Hóa Chuẩn Tỷ Lệ Vàng",
    description: "Tư vấn và thiết kế nụ cười hài hòa phong thủy, tôn lên đường nét thanh tú và phong thái tự tin cho từng khách hàng.",
    link: "https://www.facebook.com/share/p/1EokeUDWka/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    metrics: [
      { value: "410K", label: "VIEWS", highlight: true },
      { value: "2,150h", label: "WATCH TIME" },
      { value: "98.1%", label: "FYP RATIO" },
    ],
  },
  {
    id: 8,
    postNumber: "Facebook Post #8",
    tag: "Chiến Dịch Truyền Thông",
    title: "Ưu Đãi Đặc Quyền — Tỏa Sáng Nụ Cười Xinh",
    description: "Nội dung kích hoạt tương tác fanpage, minigame tri ấn và thúc đẩy khách hàng đặt lịch trải nghiệm dịch vụ nha khoa.",
    link: "https://www.facebook.com/share/p/18MG7gLSqv/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
    metrics: [
      { value: "312K", label: "IMPRESSIONS", highlight: true },
      { value: "2,450", label: "CLICKS" },
      { value: "98.9%", label: "CONVERSION" },
    ],
  },
];

// 4 Highlight Short-Form Videos for V LOTUS HOLDINGS JSC (Yoshinoya & Conservo)
export const vLotusShortFormVideos: MarqueeItem[] = [
  {
    id: "vlotus-fb-conservo",
    platform: "facebook",
    brand: "Conservo - Japanese Breads & Café",
    title: "Conservo Artisan Breads & Pastries Reel",
    subtitle: "Onsite shoot, visual storytelling & CapCut Pro editing",
    url: "https://www.facebook.com/reel/2088629484989843/",
    img: getVLotusImage("v_lotus_img_06.webp") || getVLotusImage("v_lotus_img_01.webp"),
  },
  {
    id: "vlotus-fb-yoshinoya",
    platform: "facebook",
    brand: "Yoshinoya Vietnam",
    title: "Yoshinoya Sizzling Teppan & Beef Bowls Reel",
    subtitle: "Original Tokyo Gyudon heritage & dining experience",
    url: "https://www.facebook.com/reel/1243129067306742/",
    img: getVLotusImage("v_lotus_img_05.webp") || getVLotusImage("v_lotus_img_02.webp"),
  },
  {
    id: "vlotus-tiktok-conservo",
    platform: "tiktok",
    brand: "Conservo Việt Nam",
    title: "Fresh Baked Japanese Breads Daily TikTok",
    subtitle: "Viral culinary visuals & trending music sync",
    url: "https://vt.tiktok.com/ZSVVXUgju/",
    img: getVLotusImage("v_lotus_img_24.webp") || getVLotusImage("v_lotus_img_03.webp"),
  },
  {
    id: "vlotus-tiktok-yoshinoya",
    platform: "tiktok",
    brand: "Yoshinoya Vietnam",
    title: "Gyudon Taste Explosion TikTok",
    subtitle: "Fast-paced dining cuts, sound effects & dynamic pacing",
    url: "https://vt.tiktok.com/ZSVVX9Csc/",
    img: getVLotusImage("v_lotus_img_22.webp") || getVLotusImage("v_lotus_img_04.webp"),
  },
];

// Dynamically load all 14 images under assets/image/event_selected_work
const eventImagesGlob = import.meta.glob<string>(
  '../../assets/image/event_selected_work/*.webp',
  { eager: true, import: 'default' }
);

// Map of event work items for Benelifts Asia Year-End Party
export const eventSelectedWorkCarouselItems: DepthCarouselItem[] = [
  {
    id: "event-photo-01",
    image: eventImagesGlob['../../assets/image/event_selected_work/1.webp'] || '',
    title: "YEP Stage Backdrop & Lighting Setup",
    alt: "Benelifts Year-End Party Stage Backdrop",
  },
  {
    id: "event-photo-02",
    image: eventImagesGlob['../../assets/image/event_selected_work/2.webp'] || '',
    title: "VIP Guests & Executive Reception",
    alt: "Benelifts Executive Reception",
  },
  {
    id: "event-photo-03",
    image: eventImagesGlob['../../assets/image/event_selected_work/3.webp'] || '',
    title: "MC Coordination & Opening Speech",
    alt: "Opening Speech and MC Coordination",
  },
  {
    id: "event-photo-04",
    image: eventImagesGlob['../../assets/image/event_selected_work/4.webp'] || '',
    title: "Gala Dinner & Corporate Toast",
    alt: "Corporate Gala Dinner Toast",
  },
  {
    id: "event-photo-05",
    image: eventImagesGlob['../../assets/image/event_selected_work/5.webp'] || '',
    title: "Musical Performances & Entertainment",
    alt: "Event Entertainment Performance",
  },
  {
    id: "event-photo-06",
    image: eventImagesGlob['../../assets/image/event_selected_work/6.webp'] || '',
    title: "Employee Recognition & Awards Ceremony",
    alt: "Employee Recognition Ceremony",
  },
  {
    id: "event-photo-07",
    image: eventImagesGlob['../../assets/image/event_selected_work/7.webp'] || '',
    title: "Backstage Operations & Run-of-Show",
    alt: "Backstage Operations Management",
  },
  {
    id: "event-photo-08",
    image: eventImagesGlob['../../assets/image/event_selected_work/8.webp'] || '',
    title: "Lucky Draw & Interactive Audience Minigame",
    alt: "Lucky Draw Minigame",
  },
  {
    id: "event-photo-09",
    image: eventImagesGlob['../../assets/image/event_selected_work/9.webp'] || '',
    title: "Interactive Team Bonding Activities",
    alt: "Team Bonding Activity",
  },
  {
    id: "event-photo-10",
    image: eventImagesGlob['../../assets/image/event_selected_work/10.webp'] || '',
    title: "Exclusive Commemorative Gift Packs",
    alt: "Commemorative Event Gift Packs",
  },
  {
    id: "event-photo-11",
    image: eventImagesGlob['../../assets/image/event_selected_work/11.webp'] || '',
    title: "Photo Booth Check-in & Media Wall",
    alt: "Photo Booth Check-in Wall",
  },
  {
    id: "event-photo-12",
    image: eventImagesGlob['../../assets/image/event_selected_work/12.webp'] || '',
    title: "Keynote Presentation & Year in Review",
    alt: "Year in Review Keynote Presentation",
  },
  {
    id: "event-photo-13",
    image: eventImagesGlob['../../assets/image/event_selected_work/13.webp'] || '',
    title: "Leadership Toast & Strategic Roadmap",
    alt: "Leadership Strategic Roadmap Toast",
  },
  {
    id: "event-photo-14",
    image: eventImagesGlob['../../assets/image/event_selected_work/14.webp'] || '',
    title: "All-Hands Grand Finale Group Photograph",
    alt: "Grand Finale Group Photograph",
  },
];
