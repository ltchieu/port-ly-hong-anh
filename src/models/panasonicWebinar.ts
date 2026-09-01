export interface WebinarMetric {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface WebinarPhotoCaption {
  filename: string;
  title: string;
  subtitle: string;
  height: number;
}

export interface WebinarVideo {
  url: string;
  videoId: string;
  title: string;
  description: string;
  channel: string;
  category: string;
}
