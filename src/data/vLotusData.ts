import type {
  MetricItem,
  SEOArticle,
  BrandFanpage,
  FacebookHighlightPost,
  HighlightPostsSection,
  VideoProductionItem,
  VLotusWebsiteArticle,
  WebsiteArticlesSection,
  VLotusData,
} from '../models/vLotus';

export type {
  MetricItem,
  SEOArticle,
  BrandFanpage,
  FacebookHighlightPost,
  HighlightPostsSection,
  VideoProductionItem,
  VLotusWebsiteArticle,
  WebsiteArticlesSection,
  VLotusData,
};

// Dynamically import all images under assets/image/V_Lotus using Vite import.meta.glob
const vLotusImagesGlob = import.meta.glob<string>(
  '../../assets/image/V_Lotus/*.webp',
  { eager: true, import: 'default' }
);

export const getVLotusImage = (filename: string): string => {
  const matchKey = Object.keys(vLotusImagesGlob).find(key => key.endsWith(filename));
  return matchKey ? vLotusImagesGlob[matchKey] : '';
};

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
    title: "SEO Content & Culinary Insights",
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
    title: "Multi-Brand Social Media Content Strategy",
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
  highlightPostsSection: {
    title: "Highlight Facebook Posts & Copywriting Showcase",
    sectionTitle: "High-Impact Multi-Brand Copywriting & Seasonal Campaigns",
    instruction: "Explore viral Japanese culinary copywriting, product launches, brand promotions, and luxury sky dining campaigns.",
    description: "Curated top-performing social posts across Conservo Japanese Breads & Café, Yoshinoya Vietnam, and Ussina Snow Aging Beef.",
    posts: [
      {
        id: "vlotus-fb-post-1",
        postNumber: "Product Launch",
        brandName: "Conservo - Japanese Breads & Café",
        title: "HOA TRÊN TUYẾT - YUKIBANA",
        category: "BST Thức Uống Mùa Hè",
        postUrl: "https://www.facebook.com/share/p/1BzohZ2Cfd/",
        content: `Mát lạnh sảng khoái, vị nào cũng mêêêêê!
🌸 Như hoa anh đào khẽ rơi trên nền tuyết trắng – khoảnh khắc đẹp nhất xứ Phù Tang, BST YUKIBANA – HOA TRÊN TUYẾT đã chính thức có mặt tại Conservo.
Với sự kết hợp cùng thương hiệu sữa chua cao cấp Morinaga, BST YUKIBANA mang hương vị chua nhẹ cùng kết cấu đá xay mát lạnh quyện với topping 100% trái cây tươi. Hãy cảm nhận nốt hương tuyệt diệu của Mùa Hoa Anh Đào với 03 vị trái cây:
🍓 𝒀𝒖𝒌𝒊 𝑵𝒐 𝑯𝒂𝒏𝒂 | Dâu Sữa Chua Đá Xay: dâu tươi kết hợp sữa chua thanh nhẹ, tạo hương vị chua ngọt cuốn hút.
🍈 𝑴𝒊𝒛𝒖 𝑵𝒐 𝑯𝒂𝒏𝒂 | Dưa Lưới Sữa Chua Đá Xay: sự kết hợp mát lành với dưa lưới ngọt thanh trên nền sữa chua beo béo.
🥭 𝑻𝒂𝒊𝒚𝒐𝒖 𝑵𝒐 𝑯𝒂𝒏𝒂 | Xoài Cát Sữa Chua Đá Xay: vị ngọt ngào từ xoài cát được cân bằng hoàn hảo với chút chua nhẹ của sữa chua.
YUKIBANA hiện đã có mặt tại các cửa hàng Conservo.
Đến Conservo và đắm mình trong khung cảnh & hương vị mùa hoa anh đào Nhật Bản nhé!`,
        tags: ["Yukibana", "Hoa Trên Tuyết", "Morinaga", "Conservo", "Summer Drink"],
      },
      {
        id: "vlotus-fb-post-2",
        postNumber: "Brand Promotion",
        brandName: "Yoshinoya Vietnam",
        title: "⚡ YOSHI DAY - DEAL ĐẶC BIỆT CHỈ TỪ 53K",
        category: "Khuyến Mãi & Ngày Hội Thương Hiệu",
        postUrl: "https://www.facebook.com/share/p/1GFxPHVGdH/",
        content: `🔥 Ngày 5 hàng tháng, fan đã sẵn sàng chưa?
Deadline có thể dời, nhưng hẹn Yoshi Day thì nhất định phải tới nha! Chỉ 1 ngày duy nhất trong tháng để ăn ngon, nhẹ ví, cả hội chill hè thật đáng nhớ!
👉 CHỈ TỪ 53K, chọn ngay 1 trong 7 món siêu hot:
🍚Cơm Bò Yoshi
🍚Cơm Bò Trứng
🍚Cơm Thố Bò Nướng
🍚Cơm Thố Bò Nướng & Phô Mai
🍚Cơm Gà Nanban
🍚Cơm Gà Karaage
🍚Cơm Thịt Heo Xào Gừng
📌 Điều kiện áp dụng:
- Áp dụng hình thức Dùng món tại nhà hàng hoặc Mua mang về trên toàn hệ thống.
- Áp dụng thanh toán qua đồng thời bằng voucher đối tác GOT IT, URBOX, PLUXEE.
- Không áp dụng đồng thời các CTKM/ giảm giá khác.`,
        tags: ["Yoshi Day", "Deal 53K", "Yoshinoya Vietnam", "Gyudon", "Hot Promotion"],
      },
      {
        id: "vlotus-fb-post-3",
        postNumber: "Luxury Experience",
        brandName: "Ussina Snow Aging Beef & Bar",
        title: "☁️ SKYLINE JAPANESE AFTERNOON TEA",
        category: "Skyline Dining & Set Trà Chiều",
        postUrl: "https://www.facebook.com/share/p/1HmovSVXsa/",
        content: `A Perfect Weekend Escape In The Sky
(English Below)
Dành một chiều cuối tuần thật nhẹ nhàng cho chính mình – nơi không còn ồn ào, chỉ có mây trời, trà thơm và những điều đẹp đẽ.
Giữa guồng quay tất bật, ai cũng cần một khoảng lặng để thở – để lắng nghe chính mình và tận hưởng sự thanh bình. Skyline Japanese Afternoon Tea tại Ussina chính là lời mời cho một buổi chiều như thế.
Không đơn thuần là một set trà chiều, đây là trải nghiệm được tuyển chọn tỉ mỉ:
✨ Afternoon Bliss (390,000 VND/khách): bao gồm 8 món ngọt và 1 thức uống tự chọn.
✨ Golden Hour (590,000 VND/khách): bao gồm 5 món ngọt, 5 món mặn và 2 thức uống tự chọn.
Tất cả được phục vụ trong không gian sang trọng giữa tầng không – nơi thành phố thu nhỏ dưới chân bạn.
📌 Điều kiện áp dụng:
- Giá chưa bao gồm VAT
- Áp dụng phục vụ từ 2 set cùng loại trở lên
- Vui lòng đặt trước 1 ngày
- Thời gian phục vụ từ 14h - 17h mỗi ngày.
💫 Hoàn hảo cho một buổi hẹn cuối tuần, một cuộc trò chuyện riêng tư, hoặc đơn giản là khoảnh khắc yêu chiều bản thân – bởi bạn xứng đáng được tận hưởng những điều đẹp đẽ nhất.`,
        tags: ["Skyline Afternoon Tea", "Ussina Sky 77", "Landmark 81", "Japanese Tea", "Luxury Dining"],
      },
      {
        id: "vlotus-fb-post-4",
        postNumber: "Storytelling & Brand Culture",
        brandName: "Conservo - Japanese Breads & Café",
        title: "NAMA DONUT - Ít ngọt - Tròn đầy",
        category: "Ra Mắt Bánh Mới & Triết Lý Washoku",
        postUrl: "https://www.facebook.com/share/p/19UtHAxRfr/",
        content: `Thanh nhẹ, tinh tế - đó không chỉ là cách người Nhật tôn vinh ẩm thực, mà còn là triết lý Washoku được gửi gắm vào từng chiếc Nama Donut vừa ra mắt tại Conservo.
Với lớp vỏ mềm mịn ôm trọn phần kem trái cây thanh mát bên trong, Nama Donut mang đến cảm giác dễ chịu, nhẹ nhàng từ miếng đầu tiên. Không quá ngọt, không gây ngấy - chiếc bánh này chiều lòng cả những ai ít hảo đồ ngọt nhất.
Chính sự tinh giản trong nguyên liệu, sự chỉn chu trong cách làm và tâm huyết trong từng chi tiết nhỏ đã tạo nên một chiếc bánh vừa đẹp mắt, vừa hài hoà vị giác. Dù là bữa xế nhẹ, món tráng miệng hay chỉ đơn giản là muốn nạp chút “ngọt lành” cho ngày thêm vui - Nama Donut chính là lựa chọn lý tưởng dành cho bạn.
📍 Ghé Conservo hôm nay để thưởng thức siêu phẩm mới toanh này nhé.`,
        tags: ["Nama Donut", "Washoku Philosophy", "Conservo", "Fresh Bakery", "Japanese Pastry"],
      },
    ],
  },
  videoPillar: {
    title: "Video Editor & Short-Form Media Production",
    overview: "Executed end-to-end multimedia content production for Conservo Japanese Breads & Café and Yoshinoya Vietnam across Facebook Reels and TikTok. Ideated video angles, coordinated on-site shootings, authored comprehensive creative briefs, and edited dynamic short-form videos with viral reach.",
    briefVideoUrl: "https://docs.google.com/presentation/d/1vXM5CUAIm0cCK_NDEoBUoqhK-zl7rq1eJfKrmhMXO9Y/edit?usp=sharing",
    videos: [
      {
        id: "vid-fb-conservo",
        platform: "facebook",
        brandName: "Conservo - Japanese Breads & Café",
        title: "Conservo - Japanese Breads & Café",
        role: "Video Creator & Editor",
        videoUrl: "https://www.facebook.com/reel/2088629484989843/",
        briefUrl: "https://docs.google.com/presentation/d/1vXM5CUAIm0cCK_NDEoBUoqhK-zl7rq1eJfKrmhMXO9Y/edit?usp=sharing",
        highlight: "Facebook Reel",
        description: "Engaging short-form bakery presentation and artisan bread crafting reel published on Conservo Japanese Breads & Café Facebook page.",
        image: getVLotusImage("v_lotus_img_06.webp"),
        tags: ["Facebook Reel", "Conservo", "Artisan Bakery", "Short-Form"],
      },
      {
        id: "vid-fb-yoshinoya",
        platform: "facebook",
        brandName: "Yoshinoya Vietnam",
        title: "Yoshinoya Vietnam",
        role: "Video Creator & Editor",
        videoUrl: "https://www.facebook.com/reel/1243129067306742/",
        briefUrl: "https://docs.google.com/presentation/d/1vXM5CUAIm0cCK_NDEoBUoqhK-zl7rq1eJfKrmhMXO9Y/edit?usp=sharing",
        highlight: "Facebook Reel",
        description: "Dynamic dining experience, sizzling beef bowls, and lifestyle food reel published on Yoshinoya Vietnam Facebook page.",
        image: getVLotusImage("v_lotus_img_05.webp"),
        tags: ["Facebook Reel", "Yoshinoya", "Gyudon", "Fast Casual"],
      },
      {
        id: "vid-tiktok-conservo",
        platform: "tiktok",
        brandName: "Conservo Việt Nam",
        title: "Conservo Việt Nam",
        role: "Shooting Coordinator & TikTok Editor",
        videoUrl: "https://www.tiktok.com/@conservovn/video/7519379432910392584",
        videoId: "7519379432910392584",
        briefUrl: "https://docs.google.com/presentation/d/1vXM5CUAIm0cCK_NDEoBUoqhK-zl7rq1eJfKrmhMXO9Y/edit?usp=sharing",
        highlight: "TikTok Video",
        description: "Viral short-form TikTok reel showcasing freshly baked Japanese artisan pastries, cafe ambiance, and customer favorites at Conservo.",
        image: getVLotusImage("v_lotus_img_31.webp") || getVLotusImage("v_lotus_img_06.webp"),
        tags: ["TikTok Video", "Conservo Việt Nam", "Japanese Bakery", "Food Reel"],
      },
      {
        id: "vid-tiktok-yoshinoya",
        platform: "tiktok",
        brandName: "Yoshinoya Vietnam",
        title: "Yoshinoya Vietnam",
        role: "Shooting Coordinator & TikTok Editor",
        videoUrl: "https://www.tiktok.com/@yoshinoyavietnamofficial/video/7517883339034987783",
        videoId: "7517883339034987783",
        briefUrl: "https://docs.google.com/presentation/d/1vXM5CUAIm0cCK_NDEoBUoqhK-zl7rq1eJfKrmhMXO9Y/edit?usp=sharing",
        highlight: "TikTok Video",
        description: "High-energy culinary short-form TikTok reel celebrating Yoshinoya's 120-year Tokyo beef bowl heritage and mouthwatering menu items.",
        image: getVLotusImage("v_lotus_img_24.webp") || getVLotusImage("v_lotus_img_05.webp"),
        tags: ["TikTok Video", "Yoshinoya Vietnam", "Gyudon Experience", "Viral Food"],
      },
    ],
  },
  websiteArticlesSection: {
    title: "Some Selected Website Contents",
    description: "Published SEO articles, culinary insights, and brand storytelling for Ussina Snow Aging Beef & Bar (V Lotus Holdings).",
    seoArticlesDocUrl: "https://docs.google.com/document/d/1et29HNZpvdqlIijd9MCwSJr22HnkEi86Ta-B17WJzdc/edit?tab=t.0#heading=h.lo79n582y1x7",
    contentPlanUrl: "https://docs.google.com/spreadsheets/d/1W2VrQlxd1YcWlIVlrVDoTljeyrjdt3Wg/edit?usp=sharing&ouid=115935600825419567163&rtpof=true&sd=true",
    articles: [
      {
        id: "ussina-art-1",
        date: "08/2025",
        title: "KHÁM PHÁ NÉT VĂN HÓA MÙA HÈ NHẬT BẢN – HÀNH TRÌNH VỊ GIÁC TẠI USSINA",
        author: "Hồng Anh",
        type: "Content",
        url: "https://ussinavietnam.vn/kham-pha-net-van-hoa-mua-he-nhat-ban-hanh-trinh-vi-giac-tai-ussina/",
      },
      {
        id: "ussina-art-2",
        date: "07/2025",
        title: "BÒ WAGYU Ủ TUYẾT – TINH HOA ẨM THỰC NHẬT BẢN TẠI USSINA",
        author: "Hồng Anh",
        type: "Content",
        url: "https://ussinavietnam.vn/bo-wagyu-u-tuyet-tinh-hoa-am-thuc-nhat-ban-tai-ussina/",
      },
      {
        id: "ussina-art-3",
        date: "05/2025",
        title: "YUKIMURO – Tuyết Trắng Nhật Bản & Nghệ Thuật “Nuôi Dưỡng Hương Vị” Từ Tự Nhiên",
        author: "Hồng Anh",
        type: "Content",
        url: "https://ussinavietnam.vn/yukimuro-tuyet-trang-nhat-ban-nghe-thuat-nuoi-duong-huong-vi-tu-tu-nhien/",
      },
      {
        id: "ussina-art-4",
        date: "03/2025",
        title: "Đặc Sản Theo Vùng Nhật Bản: Hành Trình Khám Phá Ẩm Thực Độc Đáo",
        author: "Hồng Anh",
        type: "Content",
        url: "https://ussinavietnam.vn/dac-san-theo-vung-nhat-ban-hanh-trinh-kham-pha-am-thuc-doc-dao/",
      },
      {
        id: "ussina-art-5",
        date: "02/2025",
        title: "Tinh thần Omotenashi – Phong Cách Phục Vụ Hiếu Khách Tại Ussina Sky 77",
        author: "Hồng Anh",
        type: "Content",
        url: "https://ussinavietnam.vn/tinh-than-omotenashi-phong-cach-phuc-vu-hieu-khach-tai-ussina-sky-77/",
      },
    ],
  },
};
