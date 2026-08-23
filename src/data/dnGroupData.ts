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
  channel: string;
  title: string;
  role: string;
  stats: {
    views: string;
    likes: string;
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
  fanpagePillars: {
    title: string;
    overview: string;
    bestPostStats: {
      reach: string;
      likes: string;
      comments: string;
      shares: string;
    };
    channels: {
      id: string;
      name: string;
      targetAudience: string;
      description: string;
      badge: string;
      posts: PostItem[];
    }[];
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
  fanpagePillars: {
    title: "1.1. Content Fanpage & Social Strategy",
    overview: "Monthly content planning and bilingual execution across Facebook, TikTok, and Instagram for Shark Dental brand. Achieved over 1,700+ Facebook followers, 150+ Instagram followers, and 5,300+ TikTok followers.",
    bestPostStats: {
      reach: "130,000+",
      likes: "160+",
      comments: "52",
      shares: "9",
    },
    channels: [
      {
        id: "shark-dental-vn",
        name: "Shark Dental Vietnam (Fanpage Nha Khoa Shark)",
        targetAudience: "Domestic Patients & Dental Healthcare Seekers in Vietnam",
        badge: "Domestic Market",
        description: "Comprehensive content calendar and interactive social post designs educating customers on oral healthcare, specialized dental treatments, customer testimonials, and seasonal promotions.",
        posts: [
          {
            id: "sd-vn-1",
            title: "Expert Dental Consultation & Aesthetic Smile Design",
            category: "Treatment & Education",
            image: getDNImage("dn_group_img_16.webp"),
            description: "Detailed breakdown of painless aesthetic dentistry and dental implant procedures.",
            stats: { reach: "130,000+", likes: "160+", comments: "52", shares: "9" },
            tags: ["Content Plan", "Social Post", "Dentistry", "Customer Education"],
          },
          {
            id: "sd-vn-2",
            title: "Customer Smile Transformation Story Series",
            category: "Customer Storytelling",
            image: getDNImage("dn_group_img_17.webp"),
            description: "High-impact before & after smile transformations with real patient testimonials.",
            stats: { reach: "85,000+", likes: "120+", comments: "34", shares: "6" },
            tags: ["Storytelling", "Patient Trust", "Branding"],
          },
          {
            id: "sd-vn-3",
            title: "Seasonal Oral Healthcare Campaign & Voucher Activation",
            category: "Promotional Campaign",
            image: getDNImage("dn_group_img_18.webp"),
            description: "Promotional visual layout driving appointment bookings and clinic check-ins.",
            stats: { reach: "64,000+", likes: "95+", comments: "28", shares: "12" },
            tags: ["Promotion", "Lead Generation", "Call to Action"],
          },
          {
            id: "sd-vn-4",
            title: "Doctor's Advice: Daily Hygiene & Gum Protection",
            category: "Medical Tips",
            image: getDNImage("dn_group_img_19.webp"),
            description: "Infographic-style post providing quick dental tips and common mistake warnings.",
            stats: { reach: "42,000+", likes: "80+", comments: "19", shares: "5" },
            tags: ["Infographic", "Health Tips", "Doctor Voice"],
          },
          {
            id: "sd-vn-5",
            title: "Modern Clinical Technology & Sterile Environment",
            category: "Facility & Tech",
            image: getDNImage("dn_group_img_20.webp"),
            description: "Showcasing advanced European dental machinery and hygiene standards.",
            stats: { reach: "38,000+", likes: "72+", comments: "15", shares: "3" },
            tags: ["Technology", "Clinical Standards", "Quality"],
          },
        ],
      },
      {
        id: "shark-dental-global",
        name: "Shark Dental Global (Fanpage Shark Dental)",
        targetAudience: "Overseas Vietnamese & International Dental Tourists",
        badge: "Global & Expat Market",
        description: "Bilingual English-Vietnamese content tailored for expats, tourists, and overseas Vietnamese seeking world-class dental treatments with transparent pricing and international quality standards.",
        posts: [
          {
            id: "sd-gl-1",
            title: "International Dental Tourism & Complete Smile Makeover",
            category: "Dental Tourism",
            image: getDNImage("dn_group_img_24.webp"),
            description: "English-language campaign tailored for international tourists visiting Vietnam for dental care.",
            stats: { reach: "45,000+", likes: "88+", comments: "24", shares: "11" },
            tags: ["Global Market", "Bilingual Content", "Smile Makeover"],
          },
          {
            id: "sd-gl-2",
            title: "All-on-4 & All-on-6 Dental Implant Global Standard",
            category: "High-Tech Treatment",
            image: getDNImage("dn_group_img_25.webp"),
            description: "Specialized implant guide highlighting warranty policies and cost advantages.",
            stats: { reach: "32,000+", likes: "65+", comments: "18", shares: "7" },
            tags: ["Implants", "Medical Tourism", "English Post"],
          },
          {
            id: "sd-gl-3",
            title: "Global Patient Testimonials & Airport Pickup Service",
            category: "Hospitality Service",
            image: getDNImage("dn_group_img_26.webp"),
            description: "Full service concierge experience for overseas clients arriving in Ho Chi Minh City.",
            stats: { reach: "28,000+", likes: "54+", comments: "16", shares: "4" },
            tags: ["Concierge Care", "VIP Experience", "Expat Focus"],
          },
          {
            id: "sd-gl-4",
            title: "Porcelain Veneers vs. Composite Bonding Comparison",
            category: "Aesthetic Guide",
            image: getDNImage("dn_group_img_27.webp"),
            description: "Educational comparison guide helping clients choose the best cosmetic option.",
            stats: { reach: "36,000+", likes: "70+", comments: "22", shares: "8" },
            tags: ["Veneers", "Comparison", "Bilingual"],
          },
        ],
      },
    ],
  },
  videoEditorPillars: {
    title: "1.2. Video Editor & Short-Form Content Production",
    overview: "Spearheaded end-to-end short-form video scripting, filming coordination, and creative video editing across TikTok and Reels, capturing brand voice and driving organic viral engagement.",
    projects: [
      {
        id: "video-shark-vn",
        channel: "Shark Dental (Vietnam)",
        title: "Promotional Brand & Treatment Video Series",
        role: "Scriptwriter, Production Coordinator & Video Editor",
        stats: {
          views: "179,000+",
          likes: "208",
          shares: "6",
          comments: "15+",
        },
        highlight: "179K+ Views on Best Promotional Reel",
        description: "Collaborated closely with marketing planners to script and shoot promotional videos and clinical brand stories. Edited dynamic short-form TikTok videos optimized with hooks, subtitles, and engaging visual pacing.",
        image: getDNImage("dn_group_img_28.webp"),
        tags: ["TikTok Scripting", "CapCut / Premiere", "Promo Videos", "Short-form"],
      },
      {
        id: "video-dieu-uoc-cua-me",
        channel: "Shark Dental x Điều Ước Của Mẹ",
        title: "Community & Emotional Brand TikTok Channel",
        role: "Channel Creator, Content Lead & Video Editor",
        stats: {
          views: "596,000+",
          likes: "17,000+",
          comments: "209",
          shares: "145",
          followers: "5.3K Organic Followers (51.7K Likes)",
        },
        highlight: "596K+ Views, 17K+ Likes on Flagship Viral Video",
        description: "Built and managed the dedicated TikTok channel 'Shark Dental x Điều ước của mẹ' from the ground up, reaching 5.3K organic followers and 51.7K likes. Produced emotional human-interest stories, dental transformation journeys, and mother-child care campaigns.",
        image: getDNImage("dn_group_img_29.webp"),
        tags: ["Viral Channel Growth", "Human Interest", "Community Campaign", "596K Views"],
      },
    ],
  },
};
