import { Metadata } from "next";

export const metadata: Metadata = {
  title: "60-Second Software Scope & Budget Estimator | Opash Software",
  description:
    "Calculate an instant, transparent cost and timeline estimate for your web application, mobile app, SaaS platform, or AI solution with Opash Software.",
  keywords: [
    "Software Project Cost Estimator",
    "App Development Cost Calculator",
    "Opash Software Pricing",
    "Custom Software Budget Tool",
    "Project Estimation Surat",
  ],
  alternates: {
    canonical: "https://www.opashsoftware.com/get-a-quote",
  },
  openGraph: {
    title: "60-Second Software Scope & Budget Estimator | Opash Software",
    description: "Transparent, real-time scoping for custom platforms, mobile apps, and enterprise AI systems.",
    url: "https://www.opashsoftware.com/get-a-quote",
  },
};

export default function GetAQuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
