// Dynamically import all images under assets/image/V_Lotus using Vite import.meta.glob
const vLotusImagesGlob = import.meta.glob<string>(
  '../../assets/image/V_Lotus/*.webp',
  { eager: true, import: 'default' }
);

export const getVLotusImage = (filename: string): string => {
  const matchKey = Object.keys(vLotusImagesGlob).find(key => key.endsWith(filename));
  return matchKey ? vLotusImagesGlob[matchKey] : '';
};

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
  icon: string;
}

export interface SEOArticle {
  id: string;
  title: string;
  category: string;
  rankingKeyword: string;
  image: string;
  excerpt: string;
  tags: string[];
}

export interface BrandFanpage {
  id: string;
  brandName: string;
  cuisineType: string;
  badge: string;
  description: string;
  coverImage: string;
  posts: {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
    tags: string[];
  }[];
}

export interface VideoProductionItem {
  id: string;
  brandName: string;
  title: string;
  role: string;
  stats: {
    views: string;
    likes: string;
    shares: string;
  };
  highlight: string;
  description: string;
  image: string;
  tags: string[];
}

export interface VLotusData {
  companyName: string;
  parentGroup: string;
  roleTitle: string;
  period: string;
  overview: {
    description: string;
    scale: string;
    brands: string[];
    focus: string;
  };
  keyMetrics: MetricItem[];
  seoPillar: {
    title: string;
    overview: string;
    articleCount: string;
    topKeywords: string[];
    articles: SEOArticle[];
  };
  fanpagePillar: {
    title: string;
    overview: string;
    growthStats: {
      reach: string;
      facebook: string;
      instagram: string;
      tiktok: string;
    };
    brands: BrandFanpage[];
  };
  videoPillar: {
    title: string;
    overview: string;
    videos: VideoProductionItem[];
  };
}

export const vLotusData: VLotusData = {
  companyName: "V Lotus Holdings JSC",
  parentGroup: "Lotus Group (F&B Division)",
  roleTitle: "Content Marketing Executive",
  period: "February 2025 - August 2025",
  overview: {
    description: "V Lotus Holdings JSC (F&B Division) is a member of Lotus Group, specializing in the food and beverage sector. To date, the company operates over 35 restaurants across Vietnam, featuring leading Japanese franchise brands such as Marukame Udon, Coco Ichibanya, Yoshinoya, Ussina Snow Aging Beef, Ushi Mania, Conservo, Tenku – Japanese Modern Kaiseki & Bar.",
    scale: "35+ Restaurants Across Vietnam",
    brands: [
      "Conservo Japanese Breads & Café",
      "Yoshinoya Vietnam",
      "Ussina Snow Aging Beef & Bar",
      "Tenku Modern Kaiseki & Bar",
      "Marukame Udon",
      "Coco Ichibanya",
      "Ushi Mania",
    ],
    focus: "Japanese Franchise F&B Marketing & Content Strategy",
  },
  keyMetrics: [
    {
      label: "SEO Articles Published",
      value: "35+",
      subtext: "Top Google Rankings on 'bò Wagyu ủ tuyết', 'nhà hàng bò Wagyu'",
      icon: "fa-solid fa-magnifying-glass",
    },
    {
      label: "Top Campaign Organic Reach",
      value: "425,000+",
      subtext: "1,500+ Likes • 52 Shares • 35 Comments on Peak Post",
      icon: "fa-solid fa-fire",
    },
    {
      label: "Short-Form Video Views",
      value: "225,000+",
      subtext: "120K+ (Conservo) + 105K+ (Yoshinoya TikTok)",
      icon: "fa-solid fa-play",
    },
    {
      label: "6-Month Social Growth",
      value: "+2,050",
      subtext: "1,300+ FB, 250+ IG, 500+ TikTok across multi-brands",
      icon: "fa-solid fa-arrow-trend-up",
    },
  ],
  seoPillar: {
    title: "2.1. SEO Content & Culinary Insights",
    overview: "Established over 35 SEO-optimized Vietnamese website articles covering products, industry news, and culinary insights. Specialized in in-depth research on images and information to ensure accuracy and quality in every topic. Several articles achieved top search rankings for keywords such as “nhà hàng bò Wagyu”, “bò Wagyu ủ tuyết”,...",
    articleCount: "35+ In-Depth Articles",
    topKeywords: ["bò Wagyu ủ tuyết", "nhà hàng bò Wagyu", "văn hoá bàn ăn Nhật Bản", "ẩm thực Tohoku"],
    articles: [
      {
        id: "seo-art-1",
        title: "Bò Wagyu Ủ Tuyết – Tinh Hoa Ẩm Thực Nhật Bản Tại Ussina",
        category: "Culinary Heritage & Science",
        rankingKeyword: "Top 1: Bò Wagyu ủ tuyết",
        image: getVLotusImage("v_lotus_img_17.webp"),
        excerpt: "Nổi tiếng với hương vị thơm béo, mềm mịn và mức giá đắt đỏ, bò Wagyu ủ tuyết là món ăn bạn nhất định phải thử một lần trong đời. Khám phá bí quyết ủ tuyết Yukimuro 200 năm độc quyền tại Ussina.",
        tags: ["SEO Top 1", "Wagyu Research", "Ussina Sky 77", "Yukimuro"],
      },
      {
        id: "seo-art-2",
        title: "Chuyên Mục Tản Mạn: Văn Hoá Ẩm Thực & Bàn Ăn Nhật Bản",
        category: "Culinary Culture & Lifestyle",
        rankingKeyword: "Top Search: Văn hoá bàn ăn Nhật",
        image: getVLotusImage("v_lotus_img_13.webp"),
        excerpt: "Chuỗi bài viết chuyên sâu về nét tinh tế trong phong cách dùng bữa của người Nhật, nghệ thuật kết hợp rượu Sake cùng 7 món ngon khó cưỡng và thức uống mùa hè.",
        tags: ["Văn Hoá Ẩm Thực", "Sake Pairing", "Ussina Tản Mạn", "SEO Content"],
      },
      {
        id: "seo-art-3",
        title: "Khám Phá Vùng Đất Tohoku & Nghệ Thuật Ủ Tuyết Yukimuro",
        category: "Regional Gastronomy",
        rankingKeyword: "Top Ranking: Ẩm thực Tohoku",
        image: getVLotusImage("v_lotus_img_15.webp"),
        excerpt: "Hành trình khám phá kho báu ẩm thực nguyên bản giữa vùng tuyết trắng miền Bắc Nhật Bản (Tohoku) và cách thiên nhiên nuôi dưỡng hương vị thịt bò thượng hạng.",
        tags: ["Tohoku Japan", "Yukimuro Snow", "Niku Baru", "Digital Research"],
      },
      {
        id: "seo-art-4",
        title: "Tổng Thể Hệ Thống Bài Viết Chuẩn SEO & Giao Diện Website Ussina",
        category: "Website Content Architecture",
        rankingKeyword: "35+ Bài Viết Xuất Bản",
        image: getVLotusImage("v_lotus_img_16.webp"),
        excerpt: "Quản trị và tối ưu hoá giao diện bài viết chuẩn SEO trên website Ussina Vietnam, tích hợp điều hướng đặt bàn tại Landmark 81 và xem thực đơn trực tuyến.",
        tags: ["CMS Management", "SEO Optimization", "Landmark 81", "Content Architecture"],
      },
    ],
  },
  fanpagePillar: {
    title: "2.2. Multi-Brand Social Media Content Strategy",
    overview: "Monthly content planning and execution on social media platforms (Facebook, TikTok, Website, etc.) for brands Conservo, Ussina, and Yoshinoya. Achieved over 1,300+ Facebook followers, 250+ Instagram followers, and 500+ TikTok followers within 6 months. Highest-performing post reached 425,000+ reach, 1,500+ likes, 52 shares, and 35 comments.",
    growthStats: {
      reach: "425,000+ Peak Reach",
      facebook: "+1,300 Followers",
      instagram: "+250 Followers",
      tiktok: "+500 Followers",
    },
    brands: [
      {
        id: "fanpage-conservo",
        brandName: "Conservo Japanese Breads & Café",
        cuisineType: "Japanese Artisan Bakery (Kobe Heritage Since 1968)",
        badge: "Artisan Bakery & Cafe",
        description: "Monthly content planning, product photography staging, and creative social storytelling. Produced engaging content series on daily fresh breakfast, seasonal pastry releases, and customer feedback.",
        coverImage: getVLotusImage("v_lotus_img_06.webp"),
        posts: [
          {
            id: "con-1",
            title: "Bữa Sáng Chuẩn Nhật Tại Conservo",
            image: getVLotusImage("v_lotus_img_06.webp"),
            category: "Signature Morning Menu",
            description: "Khởi đầu ngày mới tràn đầy năng lượng với set bánh mì nướng giòn kèm trứng, thịt xông khói và salad tươi mát chuẩn phong cách Nhật Bản.",
            tags: ["Bữa Sáng Chuẩn Nhật", "Conservo", "Healthy Breakfast"],
          },
          {
            id: "con-2",
            title: "Nama Donut – Ít Ngọt, Tròn Đầy",
            image: getVLotusImage("v_lotus_img_31.webp"),
            category: "Pastry Spotlight",
            description: "Giới thiệu dòng bánh Nama Donut tươi mềm mịn, nhân kem trái cây tự nhiên (dâu tây, kiwi, chuối) với độ ngọt thanh tinh tế.",
            tags: ["Nama Donut", "Japanese Donut", "Fresh Pastry"],
          },
          {
            id: "con-3",
            title: "Basque Burnt Cheesecake – Hương Vị Của Sự Tinh Tế",
            image: getVLotusImage("v_lotus_img_32.webp"),
            category: "Signature Cake",
            description: "Tôn vinh kết cấu vỏ cháy xém đặc trưng kết hợp lớp nhân phô mai béo ngậy mềm mịn, mang lại trải nghiệm vị giác khó quên.",
            tags: ["Basque Cheesecake", "Matcha & Chocolate", "Cheese Lovers"],
          },
          {
            id: "con-4",
            title: "Hoa Trên Tuyết – Yukibana Summer Drinks",
            image: getVLotusImage("v_lotus_img_33.webp"),
            category: "Seasonal Beverage",
            description: "Bộ sưu tập thức uống tuyết mát lạnh sảng khoái với 3 hương vị: Yuki No Hana (dâu tây), Mizu No Hana (dưa lưới), và Taiyou No Hana (xoài cát).",
            tags: ["Yukibana", "Hoa Trên Tuyết", "Summer Drink"],
          },
          {
            id: "con-5",
            title: "Niềm Vui Mỗi Ngày Tại Conservo – Khách Hàng Đánh Giá",
            image: getVLotusImage("v_lotus_img_20.webp"),
            category: "Social Proof & UGC",
            description: "Tổng hợp đánh giá 5 sao từ thực khách về không gian tiệm bánh ấm cúng, thái độ nhân viên nhiệt tình và chất lượng bánh tươi mỗi ngày.",
            tags: ["Customer Reviews", "UGC", "Conservo Experience"],
          },
          {
            id: "con-6",
            title: "Conservo Content Calendar & Copywriting Plan (Tháng 07/2025)",
            image: getVLotusImage("v_lotus_img_34.webp"),
            category: "Content Planning & Strategy",
            description: "Bảng kế hoạch nội dung chi tiết theo tuần kết hợp định hướng bài đăng Branding, CRM, và CTKM cho chuỗi tiệm bánh Conservo.",
            tags: ["Content Calendar", "Copywriting Plan", "Monthly Strategy"],
          },
        ],
      },
      {
        id: "fanpage-yoshinoya",
        brandName: "Yoshinoya Vietnam",
        cuisineType: "Original Japanese Beef Bowl (Gyudon Since 1899)",
        badge: "Fast Casual Dining",
        description: "Managed dynamic promotional campaigns, seasonal menu launches, and cultural storytelling celebrating traditional Japanese fast-casual cuisine.",
        coverImage: getVLotusImage("v_lotus_img_05.webp"),
        posts: [
          {
            id: "yosh-1",
            title: "Chảo Gang Teppan – Linh Hồn Bữa Cơm Nhật Truyền Thống",
            image: getVLotusImage("v_lotus_img_05.webp"),
            category: "Signature Teppan",
            description: "Món chảo gang Teppan gà sốt phô mai béo ngậy xèo xèo nóng hổi kết hợp cơm trắng và canh rong biển chuẩn vị Nhật Bản.",
            tags: ["Chảo Gang Teppan", "Yoshinoya", "Japanese Comfort Food"],
          },
          {
            id: "yosh-2",
            title: "Doyo No Ushi No Hi – Truyền Thống Ăn Lươn Nhật Bản (Una Jyu)",
            image: getVLotusImage("v_lotus_img_22.webp"),
            category: "Seasonal Cultural Campaign",
            description: "Lan toả nét văn hoá ăn cơm lươn nướng Una Jyu tiếp thêm sinh lực và vượt qua ngày hè oi bức theo phong tục lâu đời của người Nhật.",
            tags: ["Doyo No Ushi No Hi", "Cơm Lươn Una Jyu", "Tokyo Heritage"],
          },
          {
            id: "yosh-3",
            title: "Ăn Sao Cho Đúng? – Miễn Đúng Với Bạn Là Được",
            image: getVLotusImage("v_lotus_img_24.webp"),
            category: "Lifestyle & Mega Dining Sets",
            description: "Khuyến khích thực khách tận hưởng bữa ăn theo cách riêng với combo cơm bò trứng onsen, cơm gà chiên giòn, lẩu mini và nước trái cây.",
            tags: ["Yoshinoya Vietnam", "Dining Combos", "Student & Family Deals"],
          },
          {
            id: "yosh-4",
            title: "Yoshinoya Monthly Content Calendar (Tháng 07/2025)",
            image: getVLotusImage("v_lotus_img_27.webp"),
            category: "Content Planning & Media Booking",
            description: "Lịch lên bài tổng thể bao gồm Teppan Day, Yoshi Day, chiến dịch clip KOLs và chương trình khuyến mãi trên các kênh số.",
            tags: ["Content Calendar", "LSM Campaign", "KOLs Coordination"],
          },
        ],
      },
      {
        id: "fanpage-ussina",
        brandName: "Ussina Snow Aging Beef & Bar",
        cuisineType: "Sky Dining & Snow-Aged Wagyu at Landmark 81 (Floor 77)",
        badge: "Luxury Sky Dining",
        description: "High-end visual communication, luxury anniversary packages, and educational culinary campaigns about the rare 200-year-old Yukimuro snow-aging technique.",
        coverImage: getVLotusImage("v_lotus_img_07.webp"),
        posts: [
          {
            id: "uss-1",
            title: "Snow-Aged Wagyu – A Story Of Snow, Grassland & Fuji Hot Stone",
            image: getVLotusImage("v_lotus_img_07.webp"),
            category: "6th Birthday Anniversary Flagship",
            description: "Chiến dịch kỷ niệm sinh nhật 6 năm Ussina Sky 77, tôn vinh nghệ thuật nướng thịt bò Wagyu ủ tuyết trên đá núi lửa Phú Sĩ ngút ngàn.",
            tags: ["Snow-Aged Wagyu", "Ussina Sky 77", "Fuji Hot Stone", "6th Birthday"],
          },
          {
            id: "uss-2",
            title: "Snow-Aged Wagyu Experience Day (Thứ 3 & Thứ 4 Hàng Tuần)",
            image: getVLotusImage("v_lotus_img_23.webp"),
            category: "Special Offer & Event",
            description: "Chương trình ưu đãi định kỳ dành cho tín đồ ẩm thực: thưởng thức bò Wagyu ủ tuyết thượng hạng tặng kèm 02 món tráng miệng đặc biệt.",
            tags: ["Experience Day", "Landmark 81", "Wagyu Tasting", "Sky Dining"],
          },
          {
            id: "uss-3",
            title: "Snow Aging Wagyu – Cực Phẩm Bò Wagyu Nhật Bản",
            image: getVLotusImage("v_lotus_img_04.webp"),
            category: "Brand Story & Culinary Authority",
            description: "Quảng bá công nghệ bảo quản trong hầm tuyết tự nhiên Niigata giúp tăng cường 3 lần lượng axit amin và tạo nên độ mềm ngọt tuyệt đối.",
            tags: ["Snow Aging Beef", "Niigata Heritage", "Japanese Gastronomy"],
          },
          {
            id: "uss-4",
            title: "Bò Wagyu Ủ Tuyết – Bài Viết Nghiên Cứu Chuyên Sâu Độc Quyền",
            image: getVLotusImage("v_lotus_img_17.webp"),
            category: "Culinary Deep-Dive & Knowledge",
            description: "Ấn phẩm nghiên cứu chi tiết phân biệt bò Wagyu và bò Kobe, thang đo chất lượng vân mỡ marbling và giá trị ẩm thực tại Ussina.",
            tags: ["Wagyu Guide", "Culinary Knowledge", "Ussina Vietnam"],
          },
        ],
      },
    ],
  },
  videoPillar: {
    title: "2.3. Video Editor & Restaurant Media Production",
    overview: "Ideated, organized, and participated in photoshoots and video recordings at restaurants to create creative and engaging content. Filmed and edited short-form TikTok videos based on content requirements.",
    videos: [
      {
        id: "vid-conservo",
        brandName: "Conservo Japanese Breads & Café",
        title: "2.3. VIDEO EDITOR — CONSERVO",
        role: "Ideation, Photoshoot Staging & Video Editor",
        stats: {
          views: "120,000+",
          likes: "68",
          shares: "3",
        },
        highlight: "120,000+ Views • 68 Likes • 3 Shares",
        description: "Ideated, organized, and participated in photoshoots and video recordings at restaurants to create creative and engaging content. Filmed and edited short-form TikTok videos based on content requirements. Best-performing video received 120,000+ views, 68 likes, 3 shares.",
        image: getVLotusImage("v_lotus_img_06.webp"),
        tags: ["Conservo TikTok", "120K Views", "Food Production", "TikTok Reel"],
      },
      {
        id: "vid-yoshinoya",
        brandName: "Yoshinoya Vietnam",
        title: "2.3. VIDEO EDITOR — YOSHINOYA",
        role: "Shooting Coordinator, Content Host & Video Editor",
        stats: {
          views: "105,000+",
          likes: "205",
          shares: "11",
        },
        highlight: "105,000+ Views • 205 Likes • 11 Shares",
        description: "Ideated, organized, and participated in photoshoots and video recordings at restaurants to create creative and engaging content. Filmed and edited short-form TikTok videos based on content requirements. Best-performing video received 105,000+ views, 205 likes, 11 shares.",
        image: getVLotusImage("v_lotus_img_05.webp"),
        tags: ["Yoshinoya TikTok", "105K Views", "Dining Experience", "TikTok Reel"],
      },
    ],
  },
};
