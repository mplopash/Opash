import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Client Success Portfolio | Opash Software",
  description:
    "Explore verified flagship enterprise deployments, cross-platform mobile apps, and custom AI architectures engineered by Opash Software for global leaders.",
  keywords: [
    "Opash Software Portfolio",
    "Custom Software Case Studies",
    "Enterprise Mobile App Portfolio",
    "AI Project Deployments",
    "Verified Client Results",
  ],
  alternates: {
    canonical: "https://www.opashsoftware.com/portfolio",
  },
  openGraph: {
    title: "Case Studies & Client Success Portfolio | Opash Software",
    description: "Verified telemetry, live metrics, and real business growth delivered for 75+ global clients.",
    url: "https://www.opashsoftware.com/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
