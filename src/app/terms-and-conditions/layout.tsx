import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Opash Software",
  description: "Opash Software Terms and Conditions. Commercial governance, IP assignment policies, warranty provisions, and client service terms.",
  alternates: {
    canonical: "https://www.opashsoftware.com/terms-and-conditions",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
