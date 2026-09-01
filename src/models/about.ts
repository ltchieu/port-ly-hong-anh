export interface SkillGroup {
  name: string;
  details: string;
}

export interface CompetencyItem {
  title: string;
  icon: string;
  category: string;
}

export interface ToolItem {
  name: string;
  icon: string;
  category?: string;
}

export interface ExecutiveStatement {
  badge: string;
  tagline: string;
  quote: string;
  paragraphs: string[];
  motto: string;
  author: string;
  role: string;
}

export interface CareerObjectives {
  shortTerm: string;
  longTerm: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  major: string;
  period: string;
  badge: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  level: string;
  score: string;
  badge: string;
  description: string;
  icon: string;
}
