import { Experience } from "../models/Experience";
import { getDNImage } from "./dnGroupData";
import { getVLotusImage } from "./vLotusData";
import { getBeneliftsImage } from "./beneliftsData";
import { getPanasonicWebinarImage } from "./panasonicWebinarData";

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
    role: "Marketing Officer",
    company: "Benelifts Asia Co.,Ltd. I Benelifts S.r.l",
    location: "April 2024 - February 2025",
    summary: "Planned and executed monthly content calendars for three brands, managed end-to-end video production, created 45+ bilingual SEO articles, and coordinated internal corporate events & trade exhibitions.",
    description: "Planned and executed monthly content calendars for three brands, managed end-to-end video production, created 45+ bilingual SEO articles, and coordinated internal corporate events & trade exhibitions.",
    image: getBeneliftsImage("benelifts_img_01.webp") || getBeneliftsImage("benelifts_img_03.webp"),
    tech: ["Social Media Strategy", "Video Production & Editing", "Bilingual SEO Content", "Event Operation & MC", "B2B Communications"],
    sections: [
      {
        title: "Content Fanpage & Social Media Strategy",
        items: [
          "Planned and executed monthly content calendars for three brands: Benelifts Asia, Benelifts S.r.l and Casanova Building.",
          "Created engaging social media content including posts, reels, banners and posters to support fanpage growth."
        ]
      },
      {
        title: "Video Editor & Short-Form Content Production",
        items: [
          "Managed end-to-end video production from script development and content planning to editing and final delivery.",
          "Produced short-form video content using CapCut Pro and AI-powered tools."
        ]
      },
      {
        title: "SEO Content & Culinary Research",
        items: [
          "Created over 45 bilingual (English-Vietnamese) SEO-optimized articles covering products and elevator-related topics.",
          "Conducted in-depth research and developed supporting visuals, including thumbnails and creative assets."
        ]
      },
      {
        title: "Organizer, Main Designer & Photographer OF EVENT",
        items: [
          "Planned, organized, and managed communications for corporate events and exhibitions, including 20/10 celebrations and New Year Party. Coordinated with vendors, served as MC when needed, and managed end-to-end event.",
          "Developed communication materials and managed onsite media activities, including invitation design, banners, MC coordination, event photography and post-event content."
        ]
      },
      {
        title: "Key Achievements",
        items: [
          "Achieved over 600 new followers within the first month across three brand fanpages.",
          "Delivered high-performing social content, with the top post reaching 4.7K people and the best-performing video generating 1.2K+ views, 53 likes, 11 shares and 11 comments.",
          "Successfully organized a New Year Party with over 60 guests and supported VietBuild 2024 generating 120+ customer leads."
        ]
      }
    ]
  },
  {
    id: "freelance-event-coordinator",
    index: "04",
    role: "Freelance Webinar Assistant | Online Room Administrator",
    company: "Movement Marketing Agency I PANASONIC CFAN WEBINAR",
    location: "March 2024",
    summary: "Supported event organizers in coordinating with stakeholders, managing AV technical operations and online room administration for Panasonic CFAN product training webinars.",
    description: "Supported event organizers in coordinating with relevant stakeholders and managing support resources throughout the webinar, alongside AV technical setup and online room administration.",
    image: getPanasonicWebinarImage("1.webp") || getPanasonicWebinarImage("5.webp"),
    tech: ["Webinar Operations", "Room Administration", "AV Technical Setup", "Speaker Coordination", "Stakeholder Management"],
    sections: [
      {
        title: "Webinar Assistant",
        items: [
          "Supported event organizers in coordinating with relevant stakeholders and managing support resources throughout the webinar.",
          "Filtered and compiled audience questions for speakers and assisted with speaker coordination during the session."
        ]
      },
      {
        title: "Webinar Administrator",
        items: [
          "Managed audio-visual quality, network connectivity and technical setup for online webinars.",
          "Monitored participant counts, approved attendees and controlled microphone settings for speakers."
        ]
      },
      {
        title: "Key achievements",
        items: [
          "Successfully supported two product training webinars, attracting 200+ participants in total.",
          "Generated 30+ orders directly during the events and achieved over 93% positive attendee feedback."
        ]
      }
    ]
  },
  {
    id: "aeon-vietnam",
    index: "05",
    role: "Corporate Communications Intern",
    company: "AEON VIET NAM",
    location: "October 2023 - February 2024",
    summary: "Managed end-to-end video production for internal communications and employer branding ('Growth with AEON'), while supporting on-site media and operations for Job Fairs and Mass Recruitment campaigns.",
    description: "Managed end-to-end video production from script development and content planning to editing and final delivery using CapCut Pro and Canva, alongside supporting internal and recruitment events.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
    tech: ["Video Production", "CapCut Pro & Canva", "Event Operations", "Corporate Communications", "Employer Branding"],
    sections: [
      {
        title: "Video Editor & Short-Form Content Production",
        items: [
          "Managed end-to-end video production from script development and content planning to editing and final delivery.",
          "Produced short-form video content using CapCut Pro and Canva"
        ]
      },
      {
        title: "Event Operation & Communications",
        items: [
          "Supported internal and recruitment events, including Job Fairs and Mass Recruitment campaigns.",
          "Produced event content through photography, videography, video editing and social media posts to support event communications."
        ]
      }
    ]
  }
];
