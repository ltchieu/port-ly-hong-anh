// Dynamically import all images under assets/image/Benelifts_Asia using Vite import.meta.glob
const beneliftsImagesGlob = import.meta.glob<string>(
  '../../assets/image/Benelifts_Asia/*.webp',
  { eager: true, import: 'default' }
);

export const getBeneliftsImage = (filename: string): string => {
  const matchKey = Object.keys(beneliftsImagesGlob).find(key => key.endsWith(filename));
  return matchKey ? beneliftsImagesGlob[matchKey] : '';
};

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
  icon: string;
}

export interface BeneliftsSEOArticle {
  id: string;
  title: string;
  category: string;
  image: string;
  impact: string;
  excerpt: string;
  tags: string[];
}

export interface BeneliftsFanpage {
  id: string;
  name: string;
  subtitle: string;
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

export interface BeneliftsEvent {
  id: string;
  title: string;
  type: string;
  scale: string;
  achievement: string;
  description: string;
  image: string;
  tags: string[];
}

export interface BeneliftsData {
  companyName: string;
  headquarters: string;
  roleTitle: string;
  period: string;
  overview: {
    description: string;
    established: string;
    specialization: string;
    brands: string[];
  };
  keyMetrics: MetricItem[];
  seoPillar: {
    title: string;
    overview: string;
    articleCount: string;
    leadGeneration: string;
    articles: BeneliftsSEOArticle[];
  };
  fanpagePillar: {
    title: string;
    overview: string;
    monthOneGrowth: string;
    fanpages: BeneliftsFanpage[];
  };
  videoPillar: {
    title: string;
    overview: string;
    stats: {
      views: string;
      likes: string;
      shares: string;
      comments: string;
    };
    description: string;
    image: string;
    tags: string[];
  };
  eventPillar: {
    title: string;
    overview: string;
    events: BeneliftsEvent[];
  };
}

export const beneliftsData: BeneliftsData = {
  companyName: "Benelifts Asia Co., Ltd.",
  headquarters: "Official Representative of Benelifts S.r.l (Milan, Italy)",
  roleTitle: "Marketing Executive & Communications Coordinator",
  period: "Project 3",
  overview: {
    description: "Benelifts Asia Co., Ltd. was established in 2019 as the official representative of Benelifts S.r.l in Asia, with global headquarters in Milan, Italy. The company specializes in supplying premium European elevator equipment, genuine spare parts, and fully custom-imported luxury Italian home elevators.",
    established: "Established in 2019",
    specialization: "European Elevator Systems, Custom Italian Elevators & Spare Parts",
    brands: ["Benelifts Asia", "Benelifts S.r.l (Milan)", "Casanova Luxury Line"],
  },
  keyMetrics: [
    {
      label: "Inbound Customer Leads",
      value: "20 / month",
      subtext: "Generated directly via SEO Website Articles",
      icon: "fa-solid fa-bullseye",
    },
    {
      label: "VietBuild 2024 Trade Leads",
      value: "120+",
      subtext: "High-value architect & homeowner prospects",
      icon: "fa-solid fa-handshake",
    },
    {
      label: "Bilingual SEO Articles",
      value: "45+",
      subtext: "Technical guides & luxury design showcases",
      icon: "fa-solid fa-pen-nib",
    },
    {
      label: "Fanpage Month 1 Growth",
      value: "+600",
      subtext: "Organic Targeted Industry Followers",
      icon: "fa-solid fa-users-line",
    },
  ],
  seoPillar: {
    title: "3.1. Technical SEO & Inbound Demand Generation",
    overview: "Created over 45 SEO-optimized (English-Vietnamese) website articles focusing on elevator technology, safety regulations, architectural integration, and European design standards. Conducted thorough technical research, crafted engaging thumbnails, and established an inbound acquisition channel generating up to 20 customer inquiries per month.",
    articleCount: "45+ Bilingual Articles",
    leadGeneration: "Peak 20 qualified homeowner & villa leads / month",
    articles: [
      {
        id: "bene-seo-1",
        title: "Italian Hydraulic vs. Traction Home Elevators: Complete Selection Guide",
        category: "Technical Guide & Comparison",
        image: getBeneliftsImage("benelifts_img_03.webp"),
        impact: "Top Organic Traffic Driver & Inbound Conversion",
        excerpt: "Analyzing shaft dimensions, machine-room-less (MRL) design, power consumption, and smoothness for premium residential villas.",
        tags: ["Bilingual SEO", "Technical Spec", "Italian Engineering", "Villa Design"],
      },
      {
        id: "bene-seo-2",
        title: "Custom Panoramic Glass Elevators for Modern Luxury Architecture",
        category: "Architectural Integration",
        image: getBeneliftsImage("benelifts_img_04.webp"),
        impact: "High Architecture & Design Firm Engagement",
        excerpt: "Showcasing curved glass cabins, bespoke LED lighting trims, and structural shaft calculations for high-end penthouses and estates.",
        tags: ["Glass Cabin", "Architecture", "Luxury Homes", "Design Specs"],
      },
      {
        id: "bene-seo-3",
        title: "European Safety Standards & Preventive Elevator Maintenance Protocols",
        category: "Safety & Standards",
        image: getBeneliftsImage("benelifts_img_05.webp"),
        impact: "Customer Trust & After-Sales Authority",
        excerpt: "Detailed breakdown of EN 81-20/50 safety regulations, emergency battery rescue systems, and genuine spare part longevity.",
        tags: ["Safety Standards", "EN 81-20", "Milan Engineering", "Maintenance"],
      },
    ],
  },
  fanpagePillar: {
    title: "3.2. Multi-Brand Social Content & Visual Design",
    overview: "Monthly content planning and visual design across 3 distinct brand entities: Benelifts Asia (Corporate & Sales), Benelifts S.r.l (European Engineering), and Casanova (Luxury Aesthetics). Achieved over 600 new followers within the first month and 4.7K reach on key product releases.",
    monthOneGrowth: "+600 New Followers in Month 1",
    fanpages: [
      {
        id: "fp-benelifts-asia",
        name: "Fanpage Benelifts Asia",
        subtitle: "Corporate Brand & Asian Regional Presence",
        badge: "Main Corporate Fanpage",
        description: "Engaging commercial posts, product catalogs, technical infographics, customer installation showcases, and promotional trade show announcements.",
        coverImage: getBeneliftsImage("benelifts_img_10.webp"),
        posts: [
          {
            id: "ba-p1",
            title: "Compact Home Elevator Solutions for Limited Shaft Spaces",
            image: getBeneliftsImage("benelifts_img_11.webp"),
            category: "Product Solution",
            description: "Highlighting smart pit depth requirements starting at just 150mm for urban shophouses.",
            tags: ["Smart Pit", "Urban Homes", "Space Saving"],
          },
          {
            id: "ba-p2",
            title: "Italian Craftsmanship: Cabin Materials, Italian Leather & Wood Accents",
            image: getBeneliftsImage("benelifts_img_12.webp"),
            category: "Material Palette",
            description: "Detailed tactile catalog showcasing brushed bronze stainless steel and fine Italian leather finishes.",
            tags: ["Italian Leather", "Custom Interior", "Luxury Finish"],
          },
          {
            id: "ba-p3",
            title: "Client Installation Showcase: Private Villa in Thao Dien, District 2",
            image: getBeneliftsImage("benelifts_img_13.webp"),
            category: "Case Study",
            description: "Completed installation walkthrough featuring 4-stop panoramic glass elevator integration.",
            tags: ["Case Study", "Thao Dien Villa", "Real Project"],
          },
          {
            id: "ba-p4",
            title: "Energy Efficiency: Gearless Eco-Drive Motors with 40% Power Savings",
            image: getBeneliftsImage("benelifts_img_14.webp"),
            category: "Green Tech",
            description: "Educating architects on low-noise operation and single-phase 220V residential compatibility.",
            tags: ["Eco-Drive", "220V Power", "Green Tech"],
          },
        ],
      },
      {
        id: "fp-benelifts-srl",
        name: "Fanpage Benelifts S.r.l (Milan, Italy)",
        subtitle: "European Engineering & Global Standards",
        badge: "Italian Brand Heritage",
        description: "Focus on European technical design catalogs, CAD integration diagrams, Milan factory manufacturing reels, and international certifications.",
        coverImage: getBeneliftsImage("benelifts_img_18.webp"),
        posts: [
          {
            id: "srl-p1",
            title: "Precision Engineering: Milanese Craftsmanship Since Founding",
            image: getBeneliftsImage("benelifts_img_19.webp"),
            category: "Factory Heritage",
            description: "Visual journey through component manufacturing in Lombardy, Italy with strict quality testing.",
            tags: ["Milan Factory", "Lombardy", "Precision QC"],
          },
          {
            id: "srl-p2",
            title: "CAD & BIM Elevator Planning Files for Architects & Builders",
            image: getBeneliftsImage("benelifts_img_20.webp"),
            category: "Architect Resources",
            description: "Downloadable 3D files and dimension templates streamlining luxury villa blueprints.",
            tags: ["BIM / CAD", "Architect Support", "Technical Assets"],
          },
        ],
      },
      {
        id: "fp-casanova",
        name: "Fanpage Casanova",
        subtitle: "Bespoke Italian Luxury Elevator Aesthetics",
        badge: "Luxury Lifestyle Line",
        description: "Editorial photography, lifestyle styling, lighting design, and artistic elevator interiors for high-net-worth homeowners.",
        coverImage: getBeneliftsImage("benelifts_img_21.webp"),
        posts: [
          {
            id: "casa-p1",
            title: "Casanova Bespoke Cabin Series: Where Engineering Meets High Fashion",
            image: getBeneliftsImage("benelifts_img_22.webp"),
            category: "Luxury Aesthetic",
            description: "Highlighting artistic ceiling LED patterns, marble flooring inlays, and gold-leaf details.",
            tags: ["Bespoke Interior", "Marble Inlay", "High Fashion"],
          },
        ],
      },
    ],
  },
  videoPillar: {
    title: "3.3. Video Production & Technical Short-Form Content",
    overview: "Generated video concepts, developed technical scripts, arranged background staging, and coordinated participants for company video production. Filmed and edited informative short-form TikTok/Reels videos.",
    stats: {
      views: "1.2K+",
      likes: "53",
      shares: "11",
      comments: "11",
    },
    description: "Produced engaging educational reels showing how home elevators operate safely during power outages, how smart control panels work, and elevator design aesthetics for villa owners.",
    image: getBeneliftsImage("benelifts_img_26.webp"),
    tags: ["Video Scripting", "TikTok / Reels", "Technical Demo", "CapCut / Premiere"],
  },
  eventPillar: {
    title: "3.4. Corporate Events & Trade Exhibitions",
    overview: "Planned, organized, and managed communication campaigns for major corporate events and international trade exhibitions. Managed vendor contracts, created booth marketing materials, and served as MC when required.",
    events: [
      {
        id: "event-vietbuild",
        title: "VietBuild International Construction & Architecture Exhibition 2024",
        type: "Major Industry Trade Exhibition",
        scale: "Thousands of Trade Visitors & Architects",
        achievement: "120+ High-Quality Customer & Partner Leads Generated",
        description: "Planned and executed comprehensive marketing and on-site booth operations at VietBuild 2024. Designed promotional standees, product brochures, interactive video displays, and led booth hospitality, acquiring 120+ hot homeowner and contractor leads.",
        image: getBeneliftsImage("benelifts_img_28.webp"),
        tags: ["VietBuild 2024", "120+ Leads", "Booth Management", "B2B Marketing"],
      },
      {
        id: "event-new-year",
        title: "Corporate New Year Gala & Annual Appreciation Night",
        type: "Internal & VIP Partner Gala",
        scale: "60+ VIP Guests, Directors & Partners",
        achievement: "Flawless Event Flow & MC Coordination",
        description: "Successfully hosted and coordinated the annual New Year Party for 60+ VIP guests and employees. Handled script development, stage LED background graphics, vendor synchronization, and served as event Master of Ceremonies (MC).",
        image: getBeneliftsImage("benelifts_img_02.webp"),
        tags: ["Gala Event", "MC & Host", "60+ VIPs", "Stage Management"],
      },
    ],
  },
};
