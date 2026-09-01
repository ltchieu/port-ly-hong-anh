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
  },
  {
    id: 2,
    postNumber: "Facebook Post #2",
    tag: "Khách Hàng & Thẩm Mỹ",
    title: "Bọc Sứ Tức Thì — Lấp Đầy Khoảng Trống",
    description: "Phục hình nụ cười cho khách hàng mất 2 răng hàm với dòng sứ Zirconia chịu lực gấp 7 lần răng thật, màu sắc tự nhiên.",
    link: "https://www.facebook.com/share/p/1E6gdETarj/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
  },
  {
    id: 3,
    postNumber: "Facebook Post #3",
    tag: "Tri Ân Khách Hàng",
    title: "Thư Cảm Ơn Gửi Đến Quý Khách Hàng 2026",
    description: "Tri ân sự đồng hành và tin tưởng của hàng nghìn khách hàng, gửi gắm thông điệp năm mới hạnh phúc ngập tràn.",
    link: "https://www.facebook.com/share/p/19MLnqx7GC/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
  },
  {
    id: 4,
    postNumber: "Facebook Post #4",
    tag: "Chuyên Sâu Implant",
    title: "Trồng Răng Implant Có Ảnh Hưởng Răng Kế Bên?",
    description: "Phương pháp cấy ghép Implant độc lập bảo tồn tối đa răng thật, ngăn ngừa tiêu xương hàm và khôi phục sức nhai.",
    link: "https://www.facebook.com/share/p/14nX9Pyeb17/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
  },
  {
    id: 5,
    postNumber: "Facebook Post #5",
    tag: "Chăm Sóc Nụ Cười",
    title: "Bí Quyết Giữ Nụ Cười Luôn Trắng Sáng & Tự Tin",
    description: "Chiến lược nội dung chăm sóc răng miệng khoa học, bảo vệ men răng và duy trì vẻ rạng rỡ cho nụ cười khỏe đẹp.",
    link: "https://www.facebook.com/share/p/18jvYxbM5M/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
  },
  {
    id: 6,
    postNumber: "Facebook Post #6",
    tag: "Quy Trình Chuẩn Y Khoa",
    title: "Trải Nghiệm Dịch Vụ Nha Khoa Chuẩn Y Khoa",
    description: "Thăm khám 1:1 cùng bác sĩ chuyên khoa với hệ thống công nghệ vô trùng khép kín và trang thiết bị hiện đại.",
    link: "https://www.facebook.com/share/p/1HQaXiChYZ/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
  },
  {
    id: 7,
    postNumber: "Facebook Post #7",
    tag: "Thiết Kế Nụ Cười",
    title: "Kiến Tạo Dáng Răng Cá Nhân Hóa Chuẩn Tỷ Lệ Vàng",
    description: "Tư vấn và thiết kế nụ cười hài hòa phong thủy, tôn lên đường nét thanh tú và phong thái tự tin cho từng khách hàng.",
    link: "https://www.facebook.com/share/p/1EokeUDWka/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
  },
  {
    id: 8,
    postNumber: "Facebook Post #8",
    tag: "Chiến Dịch Truyền Thông",
    title: "Ưu Đãi Đặc Quyền — Tỏa Sáng Nụ Cười Xinh",
    description: "Nội dung kích hoạt tương tác fanpage, minigame tri ấn và thúc đẩy khách hàng đặt lịch trải nghiệm dịch vụ nha khoa.",
    link: "https://www.facebook.com/share/p/18MG7gLSqv/",
    icon: <i className="fa-brands fa-facebook-f text-sm text-[#1877F2]" />,
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
    title: "Conservo Japanese Pastries & Bakery Showcase",
    subtitle: "Short-form TikTok video with trending audio & creative visual angles",
    url: "https://vt.tiktok.com/ZSVVXUgju/",
    videoId: "7519379432910392584",
    img: getVLotusImage("v_lotus_img_31.webp") || getVLotusImage("v_lotus_img_06.webp"),
  },
  {
    id: "vlotus-tiktok-yoshinoya",
    platform: "tiktok",
    brand: "Yoshinoya Vietnam",
    title: "Yoshinoya Tokyo Gyudon Beef Bowl Heritage",
    subtitle: "Viral culinary food storytelling & kitchen craftsmanship",
    url: "https://vt.tiktok.com/ZSVVX9Csc/",
    videoId: "7517883339034987783",
    img: getVLotusImage("v_lotus_img_24.webp") || getVLotusImage("v_lotus_img_05.webp"),
  },
];

// Event Selected Work Images for BENELIFTS ASIA (Year-End Party)
const eventImagesGlob = import.meta.glob<string>(
  '../../assets/image/event_selected_work/**/*.{webp,jpg,jpeg,png,WEBP,PNG,JPG}',
  { eager: true, import: 'default' }
);

export const getEventSelectedWorkImage = (filename: string): string => {
  const matchKey = Object.keys(eventImagesGlob).find(key => key.endsWith(filename));
  return matchKey ? eventImagesGlob[matchKey] : '';
};

export const eventSelectedWorkCarouselItems: DepthCarouselItem[] = Object.keys(eventImagesGlob)
  .sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)(?:_\d+)?\.(webp|jpg|png)/i)?.[1] || '0', 10);
    const numB = parseInt(b.match(/(\d+)(?:_\d+)?\.(webp|jpg|png)/i)?.[1] || '0', 10);
    return numA - numB;
  })
  .map((key, idx) => ({
    image: eventImagesGlob[key],
    alt: `Benelifts Asia Year-End Party Event Photo ${idx + 1}`,
  }));
