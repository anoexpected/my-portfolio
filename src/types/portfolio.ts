/**
 * TypeScript types and interfaces for portfolio data structures
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string; // Max 10 words for card display
  image: string;
  technologies: string[];
  link: string;
  github?: string;
  liveUrl?: string; // Alternative to link
  githubUrl?: string; // Alternative to github
  featured?: boolean;
  category: "Python" | "Next.js" | "All";
  impact?: string;
  demo?: {
    youtubeVideoId: string;
    caption?: string;
  } | null; // null means no video available
  // Detailed page content
  overview?: string;
  background?: string;
  architecture?: string;
  architectureImage?: string; // Path to architecture diagram image
  challenges?: string[] | Array<{
    title: string;
    challenge: string;
    solution: string;
  }>;
  results?: string[];
  takeaways?: string[];
  timeline?: string; // Simple month and year, e.g., "January 2025"
  tools?: string[];
  keyFeatures?: Array<{
    title: string;
    description: string;
  }>;
  myRole?: Array<{
    title: string;
    description: string;
  }>;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  skills: string[];
  logo?: string;
  website?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  cgpa?: string;
  startDate?: string;
  endDate: string;
  location: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  description?: string;
  logo?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SkillBadge {
  name: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Personal {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  cvUrl: string;
  profileImage: string;
}

export interface About {
  summary: string;
  education: {
    university: string;
    degree: string;
    cgpa: string;
    graduationDate: string;
    location: string;
    highSchool: {
      name: string;
      stream: string;
      period: string;
      location: string;
    };
  };
  focusAreas: string[];
}

export interface NavigationItem {
  label: string;
  id: string;
}

export interface Portfolio {
  personal: Personal;
  about: About;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: Skill[];
  skillBadges: SkillBadge[];
  socials: SocialLink[];
  navigation: NavigationItem[];
}

