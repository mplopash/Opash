import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Opash Software | Company Overview & Executive Leadership",
  description:
    "Learn about Opash Software, our 8+ year engineering journey, 50+ vetted senior developers, client-first philosophy, and executive leadership under Founder & CEO Hiren Danecha.",
  keywords: [
    "About Opash Software",
    "Software Development Agency India",
    "Hiren Danecha Founder",
    "Enterprise Software Partner",
    "Software Engineering Team Surat",
  ],
  alternates: {
    canonical: "https://www.opashsoftware.com/company",
  },
  openGraph: {
    title: "About Opash Software | Enterprise Engineering & Executive Leadership",
    description: "8+ years transforming digital visions into market-defining software products with agile sprint velocity.",
    url: "https://www.opashsoftware.com/company",
  },
};

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
