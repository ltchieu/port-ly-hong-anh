export interface SkillGroup {
  name: string;
  details: string;
}

export interface CompetencyItem {
  title: string;
  icon: string;
  category: string;
}

export const coreCompetencies: CompetencyItem[] = [
  { title: "Content marketing", icon: "fa-solid fa-pen-nib", category: "STRATEGY" },
  { title: "Campaign planning", icon: "fa-solid fa-bullseye", category: "PLANNING" },
  { title: "Social media management", icon: "fa-solid fa-share-nodes", category: "CHANNELS" },
  { title: "Internal communication", icon: "fa-solid fa-comments", category: "COMMUNICATION" },
  { title: "Event coordination", icon: "fa-solid fa-calendar-check", category: "EVENTS" },
  { title: "Project coordination", icon: "fa-solid fa-list-check", category: "PROJECTS" },
  { title: "POSM development", icon: "fa-solid fa-store", category: "CREATIVE" },
  { title: "AI productivity", icon: "fa-solid fa-wand-magic-sparkles", category: "AI & TECH" },
  { title: "Workspace & data management", icon: "fa-solid fa-database", category: "OPERATIONS" }
];

export interface ToolItem {
  name: string;
  icon: string;
  category?: string;
}

export const toolsAndPlatforms: ToolItem[] = [
  { name: "CMS", icon: "fa-solid fa-globe", category: "WEB" },
  { name: "TikTok Studio", icon: "fa-brands fa-tiktok", category: "VIDEO" },
  { name: "Meta Business Suite", icon: "fa-brands fa-meta", category: "SOCIAL" },
  { name: "Canva", icon: "fa-solid fa-palette", category: "VISUAL" },
  { name: "ChatGPT / Gemini / Canva AI", icon: "fa-solid fa-brain", category: "AI" },
  { name: "Excel / Word", icon: "fa-solid fa-file-excel", category: "OFFICE" },
  { name: "CapCut", icon: "fa-solid fa-video", category: "VIDEO" },
  { name: "Photoshop / Adobe Illustrator", icon: "fa-solid fa-bezier-curve", category: "CREATIVE" }
];

export const executiveStatement = {
  badge: "EXECUTIVE STATEMENT",
  tagline: "Craft the message. Drive the impact. Shape the narrative.",
  quote: "Great marketing doesn't just speak to the audience, it resonates and inspires action.",
  paragraphs: [
    "Driven by a strong creative mindset, I approach every project as an opportunity to build a meaningful brand narrative. With a solid foundation in Content Marketing, Social Media Management and Multimedia Production, I have successfully planned and executed digital campaigns that maximize reach and cultivate loyal communities.",
    "I am deeply focused on the intersection of creative conceptualization and end-to-end campaign execution. By continuously refining my skills in omnichannel content strategy and visual storytelling, I aim to architect campaigns that are both visually compelling and strategically sound."
  ],
  motto: "Delivering strategic creativity, one campaign at a time.",
  author: "Lý Hồng Anh",
  role: "Content Strategist & Marketing"
};

export const careerObjectives = {
  shortTerm: "Apply my marketing experience, content creativity, and AI-driven productivity to execute high-impact omnichannel campaigns.",
  longTerm: "Aiming to become a Content Strategist, leveraging AI and omnichannel approaches to deepen brand-audience connections and drive long-term business value."
};

export const educationInfo = {
  institution: "University of Finance - Marketing",
  period: "Sep 2020 - Dec 2023",
  major: "Marketing",
  gpa: "3.24 / 4"
};

export const contactInfo = {
  location: "Tan Phu District, Ho Chi Minh City",
  phone: "0946 549 320",
  email: "lys.honganh@gmail.com"
};

export const introBio = {
  greeting: "HELLO & WELCOME",
  tagline: "Content Marketing & Strategy",
  paragraphs: [
    "Working in Content Marketing, with experience in delivering multi-platform digital content, SEO optimization, and multimedia productions across corporate services, F&B, and healthcare industries.",
    "Skilled in conceptualizing and executing highly engaging creative content, copywriting, and video production. Adept at collaborating effectively to drive impactful campaigns that advance CSR objectives and build strong, long-term relationships.",
    "Currently aiming to become a Content Strategist, leveraging AI and omnichannel approaches to deepen brand-audience connections and drive long-term business value."
  ]
};

