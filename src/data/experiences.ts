import { Experience } from "../models/Experience";
import { getDNImage } from "./dnGroupData";
import { getVLotusImage } from "./vLotusData";
import { getBeneliftsImage } from "./beneliftsData";

export const experiences: Experience[] = [
  {
    id: "dn-group",
    index: "01",
    role: "Content Marketing Executive",
    company: "Diem Nhan Group JSC | Shark Dental",
    location: "August 2025 - Now",
    summary: "Formulated monthly content strategies by defining core pillars and creative angles for Shark Dental. Scaled 'Shark Dental x Điều ước của mẹ' TikTok channel with 200+ on-location and self-shot videos, delivering 1,000+ posts, 320 fanpage videos, and 200 TikTok videos.",
    description: "Formulated monthly content strategies by defining core pillars and creative angles for Shark Dental. Scaled 'Shark Dental x Điều ước của mẹ' TikTok channel with 200+ on-location and self-shot videos, delivering 1,000+ posts, 320 fanpage videos, and 200 TikTok videos.",
    image: getDNImage("dn_group_img_09.webp") || getDNImage("dn_group_img_01.webp"),
    tech: ["Social Media Strategy", "TikTok Channel Growth", "Bilingual Content", "Video Production & Editing", "Healthcare Marketing"],
    sections: [
      {
        title: "Content Fanpage & Social Media Strategy",
        items: [
          "Formulated monthly content strategies by defining core pillars and creative angles tailored to campaign directions.",
          "Developed and executed bilingual content across Facebook, TikTok, and Instagram for the Shark Dental brand.",
          "Conceptualized visual directions and provided clear creative briefs to designers that ensuring visual assets seamlessly complemented written copy.",
        ]
      },
      {
        title: "Video Editor & Short-Form Content Production",
        items: [
          "Executed multimedia content production for the Shark Dental brand by building and scaling the 'Shark Dental x Điều ước của mẹ' TikTok channel with over 200 on-location and self-shot videos.",
          "Supported end-to-end video production by collaborating with planners on scripts and leveraging CapCut Pro and AI tools for short-form editing.",
        ]
      },
      {
        title: "Key Achievements",
        items: [
          "Executed high-volume digital content production across social media channels, delivering over 1,000 written posts and 320 videos for the fanpage, alongside 200 short-form videos for TikTok.",
          {
            subtitle: "Contributed to Nha khoa Shark, generating:",
            subitems: [
              "1,700+ Facebook Followers",
              "150+ Instagram Followers",
              "5,300+ TikTok Followers"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "v-lotus",
    index: "02",
    role: "Content Marketing Executive",
    company: "V Lotus Holdings JSC | Lotus Group (F&B Division)",
    location: "February 2025 - August 2025",
    summary: "Formulated monthly content strategies and executed bilingual campaigns across Facebook, TikTok and Instagram for 3 fanpages Ussina, Conservo and Yoshinoya. Produced 50+ short-form videos and authored 35+ SEO-optimized website articles for Ussina.",
    description: "Formulated monthly content strategies and executed bilingual campaigns across Facebook, TikTok and Instagram for 3 fanpages Ussina, Conservo and Yoshinoya. Produced 50+ short-form videos and authored 35+ SEO-optimized website articles for Ussina.",
    image: getVLotusImage("v_lotus_img_07.webp") || getVLotusImage("v_lotus_img_04.webp"),
    tech: ["Social Media Strategy", "TikTok Video Production", "SEO Content & Research", "Bilingual Content", "F&B Marketing"],
    sections: [
      {
        title: "Content Fanpage & Social Media Strategy",
        items: [
          "Formulated monthly content strategies and executed bilingual campaigns across Facebook, TikTok and Instagram for 3 fanpages Ussina, Conservo and Yoshinoya.",
          "Directed visual asset creation by defining creative angles and delivering clear design briefs to seamlessly complement written copy."
        ]
      },
      {
        title: "Video Editor & Short-Form Content Production",
        items: [
          "Produced 50+ short-form videos for Yoshinoya and Conservo by organizing onsite restaurant shoots and directing visual storytelling.",
          "Managed end-to-end video operations, from scripting with planners to final editing using CapCut Pro and AI integration."
        ]
      },
      {
        title: "SEO Content & Culinary Research",
        items: [
          "Authored 35+ SEO-optimized website articles for Ussina, conducting in-depth research to cover products, culinary insights, and industry news.",
          "Achieved top search engine rankings for targeted keywords (e.g., “nhà hàng bò Wagyu”, “bò Wagyu ủ tuyết”) to drive organic website traffic."
        ]
      },
      {
        title: "Key Achievements",
        items: [
          "Executed high-volume digital content production across 6 months, delivering over 200 written posts and 50 videos for Conservo, Ussina, and Yoshinoya, alongside 35 SEO-optimized articles for Ussina.",
          {
            subtitle: "Contributed to multi-brand channel growth, generating:",
            subitems: [
              "1,300+ Facebook Followers",
              "200+ Instagram Followers",
              "300+ TikTok Followers"
            ]
          },
          {
            subtitle: "Achieved peak engagement metrics:",
            subitems: [
              "425,000+ Best Post Reach",
              "1,500+ Likes & 52 Shares",
              "120,000+ Best Video Views"
            ]
          }
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
