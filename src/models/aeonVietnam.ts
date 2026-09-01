export interface AeonVideoItem {
  id: string;
  title: string;
  channel: string;
  platform: 'facebook';
  videoUrl: string;
  reelId: string;
  category: string;
  description: string;
}

export interface AeonReportLink {
  title: string;
  url: string;
  badge: string;
  description: string;
  icon: string;
}

export interface AeonMetric {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}
