import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Opash Software | Join Our Senior Engineering Team",
  description:
    "Build mission-critical digital products for global startups and enterprises. Explore open full-time and remote roles in Full-Stack, Flutter, React Native, AI, and DevOps at Opash Software.",
  keywords: [
    "Opash Software Careers",
    "Software Developer Jobs Surat",
    "Full Stack Developer Hiring",
    "React Native Jobs India",
    "AI Engineer Hiring Surat",
  ],
  alternates: {
    canonical: "https://www.opashsoftware.com/career",
  },
  openGraph: {
    title: "Careers at Opash Software | High-Impact Engineering Culture",
    description: "Join an elite team of 50+ engineers building next-generation digital foundations.",
    url: "https://www.opashsoftware.com/career",
  },
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
