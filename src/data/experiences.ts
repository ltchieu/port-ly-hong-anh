import { Experience } from "../models/Experience";
import { getDNImage } from "./dnGroupData";
import { getVLotusImage } from "./vLotusData";
import { getBeneliftsImage } from "./beneliftsData";

export const experiences: Experience[] = [
  {
    id: "dn-group",
    index: "01",
    role: "Content Creator & Video Editor / Social Media Specialist",
    company: "Diem Nhan Group JSC | Shark Dental",
    location: "PROJECT 1 — DN GROUP",
    summary: "Spearheaded bilingual content strategy across Facebook, Instagram, and TikTok for Shark Dental. Built the viral 'Shark Dental x Điều ước của mẹ' TikTok channel (5.3K followers, 596K+ top video views) and generated 130K+ reach on flagship posts.",
    description: "Spearheaded bilingual content strategy across Facebook, Instagram, and TikTok for Shark Dental. Built the viral 'Shark Dental x Điều ước của mẹ' TikTok channel (5.3K followers, 596K+ top video views) and generated 130K+ reach on flagship posts.",
    image: getDNImage("dn_group_img_09.webp") || getDNImage("dn_group_img_01.webp"),
    tech: ["Social Media Strategy", "TikTok Channel Growth", "Bilingual Content", "Video Production & Editing", "Healthcare Marketing"],
    sections: [
      {
        title: "1.1. Content Fanpage & Social Media Strategy",
        items: [
          "Developed and executed monthly bilingual content calendars across Facebook, TikTok, and Instagram for Shark Dental.",
          "Achieved over 1,700+ Facebook followers, 150+ Instagram followers, and 5,300+ TikTok followers.",
          {
            subtitle: "Best-performing social campaign highlights:",
            subitems: [
              "130,000+ Post Reach",
              "160+ Likes & Reactions",
              "52 Active Comments",
              "9 Organic Shares"
            ]
          },
          "Managed Shark Dental Vietnam (Domestic) and Shark Dental Global (Expats & Dental Tourism) fanpages."
        ]
      },
      {
        title: "1.2. Video Editor & Short-Form Content Production",
        items: [
          "Collaborated with marketing planners to script, stage, and shoot clinical promotional videos and patient smile stories.",
          "Built and scaled 'Shark Dental x Điều ước của mẹ' TikTok channel organically to 5.3K followers and 51.7K likes.",
          {
            subtitle: "Top short-form video milestones:",
            subitems: [
              "596,000+ Viral Views",
              "17,000+ Video Likes",
              "209 Comments",
              "145 Video Shares"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "v-lotus",
    index: "02",
    role: "Marketing Executive / Content & SEO Specialist",
    company: "V Lotus Holdings JSC | Lotus Group (F&B Division)",
    location: "PROJECT 2 — V LOTUS",
    summary: "Led SEO content and multi-brand social media marketing for 35+ Japanese franchise restaurants (Conservo, Yoshinoya, Ussina Snow Aging Beef). Authored 35+ SEO articles ranking top on Google and generated 425K+ reach on flagship campaigns.",
    description: "Led SEO content and multi-brand social media marketing for 35+ Japanese franchise restaurants (Conservo, Yoshinoya, Ussina Snow Aging Beef). Authored 35+ SEO articles ranking top on Google and generated 425K+ reach on flagship campaigns.",
    image: getVLotusImage("v_lotus_img_01.webp") || getVLotusImage("v_lotus_img_05.webp"),
    tech: ["SEO Optimization", "Multi-Brand Management", "Food & Beverage Marketing", "Photoshoot Staging", "TikTok ASMR"],
    sections: [
      {
        title: "2.1. SEO Content & Culinary Research",
        items: [
          "Authored 35+ SEO-optimized Vietnamese website articles covering signature dining products, culinary heritage, and gastronomic guides.",
          "Conducted deep visual and factual research, earning top Google search rankings for high-intent keywords such as 'nhà hàng bò Wagyu' and 'bò Wagyu ủ tuyết'."
        ]
      },
      {
        title: "2.2. Multi-Brand Social Content Strategy",
        items: [
          "Planned and implemented cross-platform content (Facebook, TikTok, Website) for Conservo Bakery, Yoshinoya, and Ussina.",
          "Gained 1,300+ FB followers, 250+ IG followers, and 500+ TikTok followers within 6 months.",
          {
            subtitle: "Top multi-brand campaign performance:",
            subitems: [
              "425,000+ Peak Reach",
              "1,500+ Post Likes",
              "52 Shares",
              "35 Discussion Comments"
            ]
          }
        ]
      },
      {
        title: "2.3. Video Editor & Restaurant Media Production",
        items: [
          "Ideated, organized, and hosted professional photoshoots and video recordings at restaurant locations.",
          "Edited viral short-form TikTok reels (Conservo ASMR: 120,000+ views; Yoshinoya Gyudon Vlog: 105,000+ views)."
        ]
      }
    ]
  },
  {
    id: "benelifts-asia",
    index: "03",
    role: "Marketing Executive & Communications Coordinator",
    company: "Benelifts Asia Co., Ltd. | Benelifts S.r.l (Milan, Italy)",
    location: "PROJECT 3 — BENELIFTS ASIA",
    summary: "Coordinated 360° marketing communications for Italian luxury elevators. Generated 20 inbound customer leads/month via 45+ bilingual SEO articles, grew fanpages (+600 followers month 1), and acquired 120+ leads managing VietBuild 2024 exhibition.",
    description: "Coordinated 360° marketing communications for Italian luxury elevators. Generated 20 inbound customer leads/month via 45+ bilingual SEO articles, grew fanpages (+600 followers month 1), and acquired 120+ leads managing VietBuild 2024 exhibition.",
    image: getBeneliftsImage("benelifts_img_01.webp") || getBeneliftsImage("benelifts_img_03.webp"),
    tech: ["Inbound Lead Generation", "Bilingual Technical SEO", "Exhibition Management", "Visual Design", "B2B Communications"],
    sections: [
      {
        title: "3.1. Technical SEO & Inbound Lead Generation",
        items: [
          "Authored 45+ SEO-optimized bilingual (English-Vietnamese) website articles on luxury home elevator engineering and European safety norms.",
          "Designed eye-catching visual thumbnails and information layouts, converting organic web search into up to 20 customer inquiries/month."
        ]
      },
      {
        title: "3.2. Multi-Brand Social Strategy & Visual Design",
        items: [
          "Spearheaded visual design and content calendars for Benelifts Asia (Corporate), Benelifts S.r.l Milan (Engineering), and Casanova (Luxury Aesthetics).",
          "Generated 600+ organic industry followers in the first month and delivered 4.7K reach per announcement."
        ]
      },
      {
        title: "3.3. Video Production & Technical Short-Form Content",
        items: [
          "Scripted, staged, and edited TikTok/Reels showcasing smart elevator safety features, European interior craftsmanship, and installation guides."
        ]
      },
      {
        title: "3.4. Corporate Events & Trade Exhibitions",
        items: [
          "Planned and operated marketing communications for VietBuild 2024 International Exhibition, directly generating 120+ qualified customer leads.",
          "Hosted and served as Master of Ceremonies (MC) for the annual Corporate New Year Gala with 60+ VIP guests and corporate partners."
        ]
      }
    ]
  },
  {
    id: "freelance-event-coordinator",
    index: "04",
    role: "Independent Communications Associate & Event Coordinator",
    company: "Freelance Projects",
    location: "Q2/2025 — PRESENT",
    summary: "Supported brand communication initiatives across lifestyle, handicrafts, and wedding brands through integrated creative production, visual communications, and customer experience projects",
    description: "Supported brand communication initiatives across lifestyle, handicrafts, and wedding brands through integrated creative production, visual communications, and customer experience projects",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    tech: ["Event Planning", "Vendor Coordination", "SOP Development", "On-site Operations", "Content Production"]
  },
  {
    id: "ou-news-marcom-associate",
    index: "05",
    role: "Freelance MarCom Associate | Team Leader Assistant",
    company: "OU NEWS - HCMC Open University",
    location: "Q1 2021 — Q2 2023 | Q1 2024 — PRESENT",
    summary: "Produced 100+ news articles, feature stories, press releases, website content and multimedia communication materials for institutional branding.",
    description: "Produced 100+ news articles, feature stories, press releases, website content and multimedia communication materials for institutional branding.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
    tech: ["MarCom Strategy", "Press Releases", "Workflow Optimization", "Team Leadership", "Livestream & Media"],
    sections: [
      {
        title: "Editorial & Media Communications",
        items: [
          "Produced 100+ news articles, feature stories, press releases, website content and multimedia communication materials for institutional branding.",
          "Covered university-wide events through photography, videography and social media storytelling."
        ]
      },
      {
        title: "Event Communications & Workflow Optimization",
        items: [
          "Delivered communication support for graduation ceremonies, conferences, and campaigns involving 200-600 participants.",
          "Designed and standardized contributor workflow, reducing content approval time and establishing performance tracking."
        ]
      }
    ]
  }
];
