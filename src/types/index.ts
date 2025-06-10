// Navigation types
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'marketing';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

// Experience types
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  achievements?: string[];
}

// Skill types
export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'marketing';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon: string;
}

// Insight/Blog post types
export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'tech' | 'business' | 'career';
  publishedAt: string;
  readTime: number;
  tags: string[];
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Component props
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}