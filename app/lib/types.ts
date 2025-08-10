
// Bondspire Website Types

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface PillarData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  problem: string;
  solution: string;
  impact: string;
  progress: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  whyImHere: string;
  linkedIn?: string;
  twitter?: string;
}

export interface ImpactMetric {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  animationDelay?: number;
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  howDidYouHear?: string;
  partnershipType?: string[];
  organizationName?: string;
  website?: string;
}

export interface NewsletterSignup {
  email: string;
  firstName?: string;
  interestArea?: 'financial' | 'community' | 'education' | 'all';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  image: string;
  slug: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  summary: string;
  participant: string;
  location: string;
  outcome: string;
  image: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  status: 'available' | 'coming-soon' | 'early-access';
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

// Animation Props
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}
