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

export interface FacebookHighlightPost {
  id: string;
  postNumber: string;
  brandName: string;
  title: string;
  category: string;
  content: string;
  postUrl: string;
  tags: string[];
}

export interface HighlightPostsSection {
  title: string;
  sectionTitle: string;
  instruction: string;
  description: string;
  posts: FacebookHighlightPost[];
}

export interface VideoProductionItem {
  id: string;
  platform: "facebook" | "tiktok";
  brandName: string;
  title: string;
  role: string;
  videoUrl: string;
  videoId?: string;
  briefUrl?: string;
  stats?: {
    views?: string;
    likes?: string;
    shares?: string;
  };
  highlight: string;
  description: string;
  image: string;
  tags: string[];
}

export interface VLotusWebsiteArticle {
  id: string;
  date: string;
  title: string;
  author: string;
  type: string;
  url: string;
}

export interface WebsiteArticlesSection {
  title: string;
  description: string;
  seoArticlesDocUrl: string;
  contentPlanUrl: string;
  articles: VLotusWebsiteArticle[];
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
  highlightPostsSection: HighlightPostsSection;
  videoPillar: {
    title: string;
    overview: string;
    briefVideoUrl: string;
    videos: VideoProductionItem[];
  };
  websiteArticlesSection: WebsiteArticlesSection;
}
