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
    description: "Meta content calendars, fanpage analytics dashboards, top-performing post screenshots, TikTok data reports & reach metrics.",
    bestPostStats: {
      reach: "130,000+",
      likes: "160+",
      comments: "52",
      shares: "9",
    },
    assets: [
      {
        id: "sd-vn-1",
        title: "Expert Dental Consultation & Aesthetic Smile Design",
        category: "Treatment & Education",
        channel: "Fanpage Nha Khoa Shark (VN)",
        image: getDNImage("dn_group_img_16.webp"),
        description: "Detailed breakdown of painless aesthetic dentistry and dental implant procedures.",
        stats: { reach: "130,000+", likes: "160+", comments: "52", shares: "9" },
        tags: ["Content Plan", "Social Post", "Dentistry", "Customer Education"],
      },
      {
        id: "sd-vn-2",
        title: "Customer Smile Transformation Story Series",
        category: "Customer Storytelling",
        channel: "Fanpage Nha Khoa Shark (VN)",
        image: getDNImage("dn_group_img_17.webp"),
        description: "High-impact before & after smile transformations with real patient testimonials.",
        stats: { reach: "85,000+", likes: "120+", comments: "34", shares: "6" },
        tags: ["Storytelling", "Patient Trust", "Branding"],
      },
      {
        id: "sd-vn-3",
        title: "Seasonal Oral Healthcare Campaign & Voucher Activation",
        category: "Promotional Campaign",
        channel: "Fanpage Nha Khoa Shark (VN)",
        image: getDNImage("dn_group_img_18.webp"),
        description: "Promotional visual layout driving appointment bookings and clinic check-ins.",
        stats: { reach: "64,000+", likes: "95+", comments: "28", shares: "12" },
        tags: ["Promotion", "Lead Generation", "Call to Action"],
      },
      {
        id: "sd-vn-4",
        title: "Doctor's Advice: Daily Hygiene & Gum Protection",
        category: "Medical Tips",
        channel: "Fanpage Nha Khoa Shark (VN)",
        image: getDNImage("dn_group_img_19.webp"),
        description: "Infographic-style post providing quick dental tips and common mistake warnings.",
        stats: { reach: "42,000+", likes: "80+", comments: "19", shares: "5" },
        tags: ["Infographic", "Health Tips", "Doctor Voice"],
      },
      {
        id: "sd-vn-5",
        title: "Modern Clinical Technology & Sterile Environment",
        category: "Facility & Tech",
        channel: "Fanpage Nha Khoa Shark (VN)",
        image: getDNImage("dn_group_img_20.webp"),
        description: "Showcasing advanced European dental machinery and hygiene standards.",
        stats: { reach: "38,000+", likes: "72+", comments: "15", shares: "3" },
        tags: ["Technology", "Clinical Standards", "Quality"],
      },
      {
        id: "sd-gl-1",
        title: "International Dental Tourism & Complete Smile Makeover",
        category: "Dental Tourism",
        channel: "Fanpage Shark Dental (Global)",
        image: getDNImage("dn_group_img_24.webp"),
        description: "English-language campaign tailored for international tourists visiting Vietnam for dental care.",
        stats: { reach: "45,000+", likes: "88+", comments: "24", shares: "11" },
        tags: ["Global Market", "Bilingual Content", "Smile Makeover"],
      },
      {
        id: "sd-gl-2",
        title: "All-on-4 & All-on-6 Dental Implant Global Standard",
        category: "High-Tech Treatment",
        channel: "Fanpage Shark Dental (Global)",
        image: getDNImage("dn_group_img_25.webp"),
        description: "Specialized implant guide highlighting warranty policies and cost advantages.",
        stats: { reach: "32,000+", likes: "65+", comments: "18", shares: "7" },
        tags: ["Implants", "Medical Tourism", "English Post"],
      },
      {
        id: "sd-gl-3",
        title: "Global Patient Testimonials & Airport Pickup Service",
        category: "Hospitality Service",
        channel: "Fanpage Shark Dental (Global)",
        image: getDNImage("dn_group_img_26.webp"),
        description: "Full service concierge experience for overseas clients arriving in Ho Chi Minh City.",
        stats: { reach: "28,000+", likes: "54+", comments: "16", shares: "4" },
        tags: ["Concierge Care", "VIP Experience", "Expat Focus"],
      },
      {
        id: "sd-gl-4",
        title: "Porcelain Veneers vs. Composite Bonding Comparison",
        category: "Aesthetic Guide",
        channel: "Fanpage Shark Dental (Global)",
        image: getDNImage("dn_group_img_27.webp"),
        description: "Educational comparison guide helping clients choose the best cosmetic option.",
        stats: { reach: "36,000+", likes: "70+", comments: "22", shares: "8" },
        tags: ["Veneers", "Comparison", "Bilingual"],
      },
    ],
  },
  videoEditorPillars: {
    title: "1.2. Video Editor & Short-Form Content Production",
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
