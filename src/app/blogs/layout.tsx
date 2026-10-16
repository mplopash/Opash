import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Insights & Technology Blog | Opash Software",
  description:
    "Architectural deep dives on Next.js 16, microservices, multi-region cloud resilience, CI/CD pipelines, and autonomous AI agents written by senior engineers.",
  keywords: [
    "Software Engineering Blog",
    "Next.js Architecture Guide",
    "Full-Stack Development Best Practices",
    "Cloud DevOps Insights",
    "Opash Tech Insights",
  ],
  alternates: {
    canonical: "https://www.opashsoftware.com/blogs",
  },
  openGraph: {
    title: "Engineering Insights & Technology Blog | Opash Software",
    description: "Practical engineering blueprints, performance optimizations, and technology trends from Opash Software.",
    url: "https://www.opashsoftware.com/blogs",
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
