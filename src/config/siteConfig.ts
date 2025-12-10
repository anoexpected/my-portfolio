/**
 * Site-wide configuration and metadata
 */

export const siteConfig = {
  name: "Anotida Expected",
  title: "Anotida Expected - AWS-Certified Developer & Software Engineer",
  description: "Portfolio of Anotida Expected - AWS-Certified Developer, Software Engineer, and Problem Solver. Explore my projects, experience, and skills in AI/ML, cloud computing, and software development.",
  url: "https://anoexpected.vercel.app",
  ogImage: "https://anoexpected.vercel.app/og.png",
  author: "Anotida Expected",
  keywords: [
    "Software Engineer",
    "AWS Certified Developer",
    "Machine Learning",
    "Next.js",
    "Python",
    "Cloud Computing",
    "Software Developer",
    "Portfolio",
  ],
  links: {
    github: "https://github.com/anoexpected",
    linkedin: "https://linkedin.com/in/anoexpected",
    twitter: "https://twitter.com/anoexpected",
    x: "https://x.com/anoexpected",
  },
  contact: {
    email: "anoexpected@gmail.com",
    phone: "+91 9704442804",
  },
} as const;

export type SiteConfig = typeof siteConfig;

