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
