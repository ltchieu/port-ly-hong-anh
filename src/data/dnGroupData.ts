// Dynamically import all images under assets/image/DN_Group using Vite import.meta.glob
const dnImagesGlob = import.meta.glob<string>(
  '../../assets/image/DN_Group/*.webp',
  { eager: true, import: 'default' }
);

export const getDNImage = (filename: string): string => {
  const matchKey = Object.keys(dnImagesGlob).find(key => key.endsWith(filename));
  return matchKey ? dnImagesGlob[matchKey] : '';
};

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
  icon: string;
}

export interface PostStatItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface PostItem {
  id: string;
  title: string;
  category: string;
  channel?: string;
  image: string;
  description?: string;
  stats?: {
    reach?: string;
    likes?: string;
    comments?: string;
    shares?: string;
    views?: string;
  };
  statItems?: PostStatItem[];
  tags: string[];
}

export interface VideoEditorItem {
  id: string;
  platform: "facebook" | "tiktok";
  channel: string;
  title: string;
  role: string;
  videoUrl: string;
  videoId?: string;
  briefUrl?: string;
  scriptUrl?: string;
  stats?: {
    views?: string;
    likes?: string;
    shares?: string;
    comments?: string;
    followers?: string;
  };
  highlight: string;
  description: string;
  image: string;
  tags: string[];
}

export interface FacebookHighlightPost {
  id: string;
  postNumber: string;
  title: string;
  category: string;
  channel: string;
  content: string;
  postUrl: string;
  tags: string[];
}

export interface HighlightPostsSection {
  title: string;
  sectionTitle: string;
  instruction: string;
  description: string;
  contentPlanUrl: string;
  ducmDetailsUrl: string;
  posts: FacebookHighlightPost[];
}

export interface DNGroupData {
  companyName: string;
  brandName: string;
  roleTitle: string;
  period: string;
  overview: {
    description: string;
    ecosystemBrands: string[];
    scale: string;
    offices: string;
    mission: string;
    contentPlanUrl: string;
    ducmDetailsUrl: string;
  };
  keyMetrics: MetricItem[];
  socialMediaPillar: {
    title: string;
    sectionTitle: string;
    instruction: string;
    description: string;
    bestPostStats: {
      reach: string;
      likes: string;
      comments: string;
      shares: string;
    };
    assets: PostItem[];
  };
  highlightPostsSection: HighlightPostsSection;
  videoEditorPillars: {
    title: string;
    overview: string;
    projects: VideoEditorItem[];
  };
}

export const dnGroupData: DNGroupData = {
  companyName: "Diem Nhan Group JSC",
  brandName: "Shark Dental",
  roleTitle: "Content Creator & Video Editor / Social Media Specialist",
  period: "Project 1",
  overview: {
    description: "Diem Nhan Group JSC is a multi-sector corporation in beauty, healthcare, education, retail, and interior, with 500+ employees and 60 offices nationwide, building a leading ecosystem. Guided by a customer-centric mission, the Group owns 5 premier brands including Seoul Center, Seoul Spa, Seoul Academy, DN Home Interior and Shark Dental, representing a new generation of Vietnamese enterprises committed to sustainable growth.",
    ecosystemBrands: ["Shark Dental", "Seoul Center", "Seoul Spa", "Seoul Academy", "DN Home Interior"],
    scale: "500+ Employees",
    offices: "60+ Offices Nationwide",
    mission: "Customer-Centric Beauty, Healthcare & Dental Ecosystem",
    contentPlanUrl: "https://docs.google.com/document/d/1D8L30oGzTLofJnq7lMFefaDgy83e5oyKtkMc4q8Xbic/edit?usp=sharing",
    ducmDetailsUrl: "https://docs.google.com/spreadsheets/d/1uXekQDkhCKDhSC5cgZ64RscvPxtqvW9Ofnvacmk1Igo/edit?usp=sharing",
  },
  keyMetrics: [
    {
      label: "TikTok Organic Followers",
      value: "5,300+",
      subtext: "51.7K+ Channel Likes",
      icon: "fa-brands fa-tiktok",
    },
    {
      label: "Top Video Viral Reach",
      value: "596,000+",
      subtext: "Views (17K+ Likes & 209 Comments)",
      icon: "fa-solid fa-fire",
    },
    {
      label: "Best Performing Post",
      value: "130,000+",
      subtext: "Organic Reach (160+ Likes)",
      icon: "fa-solid fa-chart-line",
    },
    {
      label: "Multi-channel Followers",
      value: "7,150+",
      subtext: "Facebook, Instagram & TikTok",
      icon: "fa-solid fa-users",
    },
  ],
  socialMediaPillar: {
    title: "1.1. Content Fanpage & Social Strategy",
    sectionTitle: "Social Media Performance & Analytics",
    instruction: "Hover over cards to view engagement metrics; click image to expand.",
    description: "Meta content calendars, monthly editorial roadmaps on Google Docs, fanpage analytics dashboards, cross-platform scheduling, and TikTok viral performance reports.",
    bestPostStats: {
      reach: "279,000+",
      likes: "177+",
      comments: "52",
      shares: "9",
    },
    assets: [
      {
        id: "sd-brand-identity",
        title: "Official Fanpage Branding & Identity",
        category: "Page Identity & Brand",
        channel: "Fanpage Nha Khoa Shark",
        image: getDNImage("dn_group_img_01.webp"),
        description: "Official verified Facebook page header & brand positioning for Nha Khoa Shark (7.8K+ followers, Dental Clinic of the Year in Vietnam 2025).",
        statItems: [
          { label: "Followers", value: "7.8K+", highlight: true },
          { label: "Award", value: "2025" },
          { label: "Status", value: "Verified" },
        ],
        stats: { reach: "7.8K+", likes: "Verified", comments: "Award 2025" },
        tags: ["Brand Identity", "Facebook Page", "Dental Clinic", "Positioning"],
      },
      {
        id: "sd-global-plan-feb",
        title: "International Editorial Calendar & English Strategy",
        category: "Global Strategy",
        channel: "Fanpage Shark Dental (Global)",
        image: getDNImage("dn_group_img_02.webp"),
        description: "Structured February 2026 editorial content roadmap on Google Docs tailored for English-speaking overseas patients & dental tourism in Vietnam.",
        statItems: [
          { label: "Month", value: "Feb 2026", highlight: true },
          { label: "Language", value: "English" },
          { label: "Schedule", value: "Daily + Live" },
        ],
        stats: { reach: "Feb 2026", likes: "English", comments: "Daily + Live" },
        tags: ["Content Plan", "Dental Tourism", "Global Strategy", "Bilingual"],
      },
      {
        id: "sd-tiktok-channel",
        title: "TikTok Channel Growth & Video Matrix",
        category: "TikTok Growth",
        channel: "TikTok @sharkdentalxdieuuoccuame",
        image: getDNImage("dn_group_img_13.webp"),
        description: "Official TikTok channel portfolio for 'Shark Dental x Điều Ước Của Mẹ', driving 5,386 organic followers, 51.7K+ likes, and viral multi-hundred thousand view series.",
        statItems: [
          { label: "Followers", value: "5,386", highlight: true },
          { label: "Total Likes", value: "51.7K" },
          { label: "Top Views", value: "596.4K" },
        ],
        stats: { reach: "5,386", likes: "51.7K", comments: "596.4K" },
        tags: ["TikTok Channel", "Organic Growth", "Điều Ước Của Mẹ", "Viral Matrix"],
      },
      {
        id: "sd-meta-insights",
        title: "Meta Business Suite Performance Dashboard",
        category: "Analytics & Growth",
        channel: "Meta Business Suite",
        image: getDNImage("dn_group_img_16.webp"),
        description: "Official Meta Insights dashboard reporting 96.1K content interactions (+105.9%), 47.9K link clicks (+5.5%), and 80.1K page visits.",
        statItems: [
          { label: "Interactions", value: "96.1K", highlight: true },
          { label: "Link Clicks", value: "47.9K" },
          { label: "Growth", value: "+105.9%" },
        ],
        stats: { reach: "96.1K", likes: "47.9K", comments: "+105.9%" },
        tags: ["Meta Insights", "Interactions", "Link Clicks", "Growth KPI"],
      },
      {
        id: "sd-top-post-veneer",
        title: "Top-Performing Aesthetic Porcelain Crown Post",
        category: "High-Impact Post",
        channel: "Fanpage Nha Khoa Shark",
        image: getDNImage("dn_group_img_18.webp"),
        description: "High-conversion social post breakdown delivering 279,226 impressions, 1,998 link clicks, 177 reactions, and 52 comments.",
        statItems: [
          { label: "Impressions", value: "279.2K", highlight: true },
          { label: "Link Clicks", value: "1,998" },
          { label: "Reactions", value: "177" },
        ],
        stats: { reach: "279.2K", likes: "177", comments: "52" },
        tags: ["Porcelain Crown", "Viral Post", "Lead Generation", "Conversion"],
      },
      {
        id: "sd-social-planner-grid",
        title: "Cross-Platform Weekly Content Scheduling Grid",
        category: "Multi-Channel Planner",
        channel: "Meta Planner (FB & Instagram)",
        image: getDNImage("dn_group_img_03.webp"),
        description: "Multi-channel weekly calendar matrix managing dual-slot publishing (09:00 & 17:00) cross-posted to Facebook and Instagram with live engagement analytics.",
        statItems: [
          { label: "Channels", value: "FB + Insta", highlight: true },
          { label: "Cadence", value: "2x Daily" },
          { label: "Top Likes", value: "387 / Post" },
        ],
        stats: { reach: "FB + Insta", likes: "2x Daily", comments: "387/Post" },
        tags: ["Meta Planner", "Cross-Posting", "Instagram", "Content Matrix"],
      },
      {
        id: "sd-monthly-plan-dec",
        title: "December Content Strategy & Veneer Campaign",
        category: "Monthly Planning",
        channel: "Fanpage Nha Khoa Shark (VN)",
        image: getDNImage("dn_group_img_30.webp"),
        description: "Full-month editorial roadmap on Google Docs focusing on Porcelain Veneers, client personalization, and GlobalHealth Awards 2025 highlight.",
        statItems: [
          { label: "Month", value: "Dec 2025", highlight: true },
          { label: "Plan Topics", value: "25+ Posts" },
          { label: "Campaign", value: "Veneers" },
        ],
        stats: { reach: "Dec 2025", likes: "25+ Posts", comments: "Veneers" },
        tags: ["Content Roadmap", "Porcelain Veneers", "Global Health", "Dental Care"],
      },
      {
        id: "sd-tiktok-video-analytics",
        title: "TikTok 596K Viral Video Performance & Retention Report",
        category: "Viral Video Deep-Dive",
        channel: "TikTok Analytics Dashboard",
        image: getDNImage("dn_group_img_31.webp"),
        description: "Deep-dive video metrics for viral story hitting 596K views, 2,684h watch time, 39.1% full completion rate, and 98.4% FYP algorithmic distribution.",
        statItems: [
          { label: "Views", value: "596K", highlight: true },
          { label: "Watch Time", value: "2,684h" },
          { label: "FYP Ratio", value: "98.4%" },
        ],
        stats: { reach: "596K", likes: "17K", comments: "209" },
        tags: ["TikTok Report", "596K Views", "Retention", "Algorithm"],
      },
    ],
  },
  highlightPostsSection: {
    title: "1.2. Highlight Facebook Posts & Copywriting Showcase",
    sectionTitle: "High-Engagement Facebook Content & Medical Copywriting",
    instruction: "Read detailed content copy, strategic dental storytelling, and click link to view live Facebook post.",
    description: "Curated high-performing Facebook posts covering clinical knowledge, patient smile transformations, customer gratitude, and advanced implantology.",
    contentPlanUrl: "https://docs.google.com/document/d/1D8L30oGzTLofJnq7lMFefaDgy83e5oyKtkMc4q8Xbic/edit?usp=sharing",
    ducmDetailsUrl: "https://docs.google.com/spreadsheets/d/1uXekQDkhCKDhSC5cgZ64RscvPxtqvW9Ofnvacmk1Igo/edit?usp=sharing",
    posts: [
      {
        id: "fb-post-1",
        postNumber: "Facebook Post #1",
        title: "✨ SỰ THẬT: NHỔ RĂNG KHÔN CÓ GIÚP GƯƠNG MẶT THON GỌN HƠN? ✨",
        category: "Kiến Thức & Trị Liệu",
        channel: "Nha Khoa Shark",
        postUrl: "https://www.facebook.com/share/p/1CYrUZrPU2/",
        content: `Nhiều người cho rằng sau khi nhổ răng khôn, gương mặt sẽ trở nên nhỏ gọn và V-line hơn. Tuy nhiên, đây là quan niệm chưa hoàn toàn chính xác.

🦷 Răng khôn nằm sâu trong xương hàm và hầu như không tác động trực tiếp đến cấu trúc khuôn mặt bên ngoài. Vì vậy, việc nhổ răng khôn thường không làm thay đổi rõ rệt dáng mặt như nhiều người vẫn nghĩ.

Trong một số trường hợp, gương mặt có thể trông thon hơn tạm thời sau khi nhổ răng do chế độ ăn uống bị hạn chế trong những ngày đầu hồi phục.

Tuy không mang lại hiệu quả tạo hình khuôn mặt, nhưng nhổ răng khôn lại có vai trò rất quan trọng đối với sức khỏe răng miệng:
✔️ Giảm đau nhức, khó chịu kéo dài
✔️ Hạn chế viêm nhiễm và sâu răng
✔️ Cải thiện tình trạng hôi miệng
✔️ Giúp việc ăn nhai trở nên dễ chịu hơn

Một nụ cười khỏe mạnh và tự tin sau khi điều trị chính là yếu tố giúp bạn trở nên rạng rỡ hơn mỗi ngày ✨

📩 Nếu bạn đang gặp tình trạng răng khôn mọc lệch, đau nhức hoặc sưng viêm, hãy liên hệ để được bác sĩ thăm khám và tư vấn phù hợp.`,
        tags: ["Nhổ Răng Khôn", "Kiến Thức Nha Khoa", "Nha Khoa Shark", "Sức Khỏe Răng Miệng"],
      },
      {
        id: "fb-post-2",
        postNumber: "Facebook Post #2",
        title: "🚀 BỌC SỨ TỨC THÌ - \"LẤP ĐẦY\" KHOẢNG TRỐNG",
        category: "Khách Hàng & Thẩm Mỹ Răng Sứ",
        channel: "Nha Khoa Shark",
        postUrl: "https://www.facebook.com/share/p/1E6gdETarj/",
        content: `Mất 2 răng hàm trên bên trái đã lâu, anh khách hàng chia sẻ thật lòng: "Nhiều lúc vui lắm muốn cười lớn nhưng lại sợ lộ khoảng trống, nhìn kỳ lắm nên cứ phải tém tém lại."

Đến với Shark, sau khi được bác sĩ phân tích kỹ lưỡng giữa cấy Implant và làm răng sứ, anh đã quyết định chọn bọc răng sứ với mong muốn khôi phục thẩm mỹ nhanh chóng.

💎 Lựa chọn dòng sứ Zirconia - Giải pháp hoàn hảo:
✅ Độ cứng chắc gấp 7 lần răng thật, đảm bảo ăn nhai thoải mái, chịu lực tốt
✅ Màu sắc tự nhiên, không bị đục, tệp màu các răng còn lại.
✅ Không gây kích ứng nướu, không bị đen viền nướu.

Nếu khách hàng nào cũng gặp tình trạng tương tự, ghé Nha khoa Shark để được tư vấn các giải pháp phù hợp nhé`,
        tags: ["Bọc Răng Sứ", "Răng Sứ Zirconia", "Nha Khoa Shark", "Thẩm Mỹ Nụ Cười"],
      },
      {
        id: "fb-post-3",
        postNumber: "Facebook Post #3",
        title: "💌 THƯ CẢM ƠN GỬI ĐẾN QUÝ KHÁCH HÀNG",
        category: "Tri Ân Khách Hàng",
        channel: "Nha Khoa Shark",
        postUrl: "https://www.facebook.com/share/p/19MLnqx7GC/",
        content: `💙 Một năm 2025 rực rỡ đã đi qua. Nhìn lại chặng đường này, Nha khoa Shark cảm thấy vô cùng may mắn vì niềm tin yêu mà các khách hàng đã dành tặng.

Khép lại năm cũ, Nha khoa Shark xin gửi lời cảm ơn chân thành nhất đến Quý khách hàng. Sự hài lòng của khách hàng chính là thành tựu lớn nhất của Shark.

️🎊 Chào đón năm mới 2026, Shark xin kính chúc Quý khách và gia đình một năm: VẠN SỰ NHƯ Ý - TỶ SỰ NHƯ MƠ - TRIỆU ĐIỀU BẤT NGỜ - HẠNH PHÚC NGẬP TRÀN.

Happy New Year!
Nha khoa Shark.`,
        tags: ["Thư Cảm Ơn", "Happy New Year 2026", "Nha Khoa Shark", "Tri Ân Khách Hàng"],
      },
      {
        id: "fb-post-4",
        postNumber: "Facebook Post #4",
        title: "🦷 TRỒNG RĂNG IMPLANT CÓ ẢNH HƯỞNG ĐẾN RĂNG KẾ BÊN KHÔNG?",
        category: "Chuyên Sâu Implant",
        channel: "Nha Khoa Shark",
        postUrl: "https://www.facebook.com/share/p/14nX9Pyeb17/",
        content: `Trồng răng Implant là phương pháp bảo tồn răng kế cạnh tốt nhất hiện nay. Điều có nghĩa nghĩa, khi trồng răng, các răng kế cạnh không chỉ không bị ảnh hưởng, mà còn được đảm bảo vị trí, không xô lệch.

Vì khi trồng Implant:
✨ Bác sĩ sẽ đặt một trụ titanium độc lập vào vị trí mất răng
✨ Không cần mài nhỏ 2 răng bên cạnh như làm cầu răng
✨ Răng kế bên vẫn được giữ nguyên cấu trúc tự nhiên

Điều này giúp:
💙 Hạn chế ảnh hưởng đến răng thật
💙 Ăn nhai chắc chắn hơn
💙 Giảm nguy cơ tiêu xương vùng mất răng
💙 Dễ chăm sóc và sử dụng lâu dài hơn

Mặc dù vậy, nhưng Implant vẫn là kỹ thuật khó, liên quan trực tiếp đến xương hàm. Để có thể ăn nhai thoải mái, Implant ổn định, bền đẹp, việc lựa chọn địa chỉ điều trị rất quan trọng. Và Nha khoa Shark cam kết tất cả, khách hàng sẽ được đảm bảo chất lượng tuyệt đối. Liên hệ ngay với Nha khoa Shark để được tư vấn nhé!`,
        tags: ["Trồng Răng Implant", "Implant Nha Khoa", "Nha Khoa Shark", "Bảo Tồn Răng Thật"],
      },
    ],
  },
  videoEditorPillars: {
    title: "1.3. Video Editor & Short-Form Content Production",
    overview: "Executed multimedia content production for the Shark Dental brand by building and scaling the 'Shark Dental x Điều ước của mẹ' TikTok channel with over 200 on-location and self-shot videos, collaborating with planners on scripts and leveraging CapCut Pro and AI tools for short-form editing.",
    projects: [
      {
        id: "fb-shark-reel",
        platform: "facebook",
        channel: "Nha khoa Shark",
        title: "Nha khoa Shark",
        role: "Video Creator & Editor",
        videoUrl: "https://www.facebook.com/reel/24250507347978560",
        highlight: "Facebook Reel",
        description: "Engaging short-form dental care & clinic experience reel published on Nha khoa Shark Facebook page.",
        image: getDNImage("dn_group_img_28.webp") || getDNImage("dn_group_img_16.webp"),
        tags: ["Facebook Reel", "Nha Khoa Shark", "CapCut Pro", "Short-Form"],
      },
      {
        id: "fb-shark-video-production",
        platform: "facebook",
        channel: "Nha khoa Shark",
        title: "Nha khoa Shark",
        role: "Production Lead & Video Editor",
        videoUrl: "https://www.facebook.com/reel/855037387682043",
        briefUrl: "https://docs.google.com/spreadsheets/d/1OiF65aYb5gk5Lluo50LQPVBCD9AZ2et2tfgGoGVbAYQ/edit?usp=sharing",
        scriptUrl: "https://docs.google.com/spreadsheets/d/145IwPNgMM3_desFcJoGOzzN21Lbtw2hVOaNPayWZrk8/edit?usp=sharing",
        highlight: "Facebook Video with Brief & Script",
        description: "End-to-end video production including comprehensive video brief planning and detailed on-location shooting script (Kịch bản đi quay).",
        image: getDNImage("dn_group_img_30.webp") || getDNImage("dn_group_img_20.webp"),
        tags: ["Facebook Video", "Shooting Script", "Creative Brief", "Dental Clinic"],
      },
      {
        id: "tiktok-dieu-uoc-cua-me-1",
        platform: "tiktok",
        channel: "Nha khoa Shark x Điều ước của mẹ",
        title: "Nha khoa Shark x Điều ước của mẹ",
        role: "Channel Growth Lead & Video Editor",
        videoUrl: "https://www.tiktok.com/@sharkdentalxdieuuoccuame/video/7567568707547958548",
        videoId: "7567568707547958548",
        highlight: "TikTok Video",
        description: "Heartwarming patient story and mother-care viral short-form video produced for the 'Shark Dental x Điều ước của mẹ' campaign channel.",
        image: getDNImage("dn_group_img_29.webp") || getDNImage("dn_group_img_17.webp"),
        tags: ["TikTok Viral", "Điều Ước Của Mẹ", "Human Interest", "CapCut Pro"],
      },
      {
        id: "tiktok-dieu-uoc-cua-me-2",
        platform: "tiktok",
        channel: "Nha khoa Shark x Điều ước của mẹ",
        title: "Nha khoa Shark x Điều ước của mẹ",
        role: "Production Lead & Video Editor",
        videoUrl: "https://www.tiktok.com/@sharkdentalxdieuuoccuame/video/7596998560168578322",
        videoId: "7596998560168578322",
        briefUrl: "https://docs.google.com/spreadsheets/d/1OiF65aYb5gk5Lluo50LQPVBCD9AZ2et2tfgGoGVbAYQ/edit?usp=sharing",
        scriptUrl: "https://docs.google.com/spreadsheets/d/145IwPNgMM3_desFcJoGOzzN21Lbtw2hVOaNPayWZrk8/edit?usp=sharing",
        highlight: "TikTok Feature with Brief & Script",
        description: "Full-lifecycle TikTok video production supported by strategic creative brief documentation and detailed on-location shooting script (Kịch bản đi quay).",
        image: getDNImage("dn_group_img_29.webp") || getDNImage("dn_group_img_08.webp"),
        tags: ["TikTok Production", "Shooting Script", "Creative Brief", "Viral Channel"],
      },
    ],
  },
};
