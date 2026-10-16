import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Opash Software | Surat HQ Hub & Global Engineering Leads",
  description:
    "Reach out to Opash Software for enterprise software engineering, mobile development, or AI architecture consultation. Direct founder line and guaranteed response within 4 hours.",
  keywords: [
    "Contact Opash Software",
    "Software Development Company Surat Address",
    "Hire Dedicated Developers Inquiry",
    "Request Software Proposal",
    "Opash Phone Email",
  ],
  alternates: {
    canonical: "https://www.opashsoftware.com/contact",
  },
  openGraph: {
    title: "Contact Opash Software | Surat HQ & Direct Engineering Line",
    description: "Connect with senior technology leads for rapid project scoping, NDA-backed consultations, and transparent cost estimates.",
    url: "https://www.opashsoftware.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
