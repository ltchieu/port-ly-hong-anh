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

export interface BeneliftsVideoItem {
  id: string;
  platform: "facebook" | "tiktok";
  brandName: string;
  title: string;
  role: string;
  videoUrl: string;
  highlight: string;
  description: string;
  tags: string[];
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

export interface BeneliftsHighlightPostsSection {
  title: string;
  sectionTitle: string;
  instruction: string;
  description: string;
  beneliftsDriveUrl: string;
  casanovaDriveUrl: string;
  posts: FacebookHighlightPost[];
}

export interface BeneliftsWebsiteArticle {
  id: string;
  date: string;
  title: string;
  author: string;
  type: string;
  url: string;
}

export interface BeneliftsWebsiteArticlesSection {
  title: string;
  description: string;
  beneliftsSeoPlanUrl: string;
  casanovaSeoPlanUrl: string;
  articles: BeneliftsWebsiteArticle[];
}

export interface BeneliftsEventCollage {
  title: string;
  subtitle?: string;
  countLabel: string;
  images: string[];
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
    videos: BeneliftsVideoItem[];
  };
  highlightPostsSection: BeneliftsHighlightPostsSection;
  designAssetsCollage: BeneliftsEventCollage;
  eventPillar: {
    title: string;
    sectionHeader: string;
    overview: string;
    photographyCollage: BeneliftsEventCollage;
    designCollage: BeneliftsEventCollage;
  };
  websiteArticlesSection: BeneliftsWebsiteArticlesSection;
}
