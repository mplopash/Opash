import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Opash Software",
  description: "Opash Software Privacy Policy. Details on how we collect, protect, and respect your intellectual property, personal data, and business privacy.",
  alternates: {
    canonical: "https://www.opashsoftware.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
