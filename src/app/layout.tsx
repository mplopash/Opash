import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { AwwwardsCursor } from "@/components/common/AwwwardsCursor";
import { InitialLoader } from "@/components/common/InitialLoader";

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
  icons: {
    icon: [
      { url: "/logos/opash-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/opash-icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/logos/opash-icon.png",
    apple: [
      { url: "/logos/opash-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-mode="dark" data-font="nunito" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedMode = localStorage.getItem('opash_mode');
                  var mode = savedMode || 'light';
                  if (!savedMode && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    mode = 'dark';
                  }
                  var font = 'nunito';
                  var d = document.documentElement;
                  d.setAttribute('data-mode', mode);
                  d.setAttribute('data-font', font);
                  if (mode === 'light') {
                    d.classList.remove('dark');
                    d.classList.add('light');
                  } else {
                    d.classList.remove('light');
                    d.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="icon" href="/logos/opash-icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logos/opash-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[var(--primary)] selection:text-white">
        <SmoothScroll>
          <ThemeProvider>
            <InitialLoader />
            <AwwwardsCursor />
            {children}
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
