import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { AwwwardsCursor } from "@/components/common/AwwwardsCursor";

export const metadata: Metadata = {
  title: "Opash Software | Custom Software Development, AI & Web Engineering",
  description:
    "Opash Software empowers startups, SMEs, and global enterprises with scalable Web, Mobile, and AI solutions. 50+ Senior Developers, 70+ Projects Delivered, 8+ Years of Industry Excellence.",
  keywords: [
    "Custom Software Development",
    "Opash Software",
    "AI Solutions India",
    "Next.js Development",
    "Mobile App Development",
    "React Native",
    "Flutter",
    "Dedicated Developers India",
    "Hire Developers",
    "SaaS Architecture",
    "InsureTech Software",
  ],
  authors: [{ name: "Opash Software" }],
  creator: "Opash Software",
  openGraph: {
    title: "Opash Software | Custom Software & AI Development Partner",
    description: "Empowering You With Innovation & Technology - High-velocity Web, Mobile, and AI engineering.",
    url: "https://www.opashsoftware.com/",
    siteName: "Opash Software",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opash Software | Custom Software & AI Engineering",
    description: "Empowering startups and enterprises with scalable web, mobile, and AI solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-mode="dark" data-font="jakarta" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[var(--primary)] selection:text-white">
        <SmoothScroll>
          <ThemeProvider>
            <AwwwardsCursor />
            {children}
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
