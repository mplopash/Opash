import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { AwwwardsCursor } from "@/components/common/AwwwardsCursor";
import { InitialLoader } from "@/components/common/InitialLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.opashsoftware.com"),
  title: {
    default: "Opash Software | Custom Software Development, AI & Web Engineering",
    template: "%s | Opash Software",
  },
  description:
    "Opash Software empowers startups, SMEs, and global enterprises with scalable Web, Mobile, and AI engineering. 50+ Senior Developers, 75+ Delivered Projects, 8+ Years of Industry Excellence. Surat, India.",
  keywords: [
    "Custom Software Development Company",
    "Custom Software Development India",
    "AI Solutions Company",
    "Artificial Intelligence Development",
    "Machine Learning Engineering",
    "Next.js Development Company",
    "Mobile App Development Surat",
    "Cross-Platform Mobile Apps Flutter React Native",
    "Dedicated Software Developers India",
    "Hire Remote Developers",
    "SaaS Architecture & Multi-Tenancy",
    "Cloud Microservices & DevOps",
    "Software Agency Surat",
    "Opash Software",
    "Hiren Danecha",
  ],
  authors: [{ name: "Opash Software", url: "https://www.opashsoftware.com" }],
  creator: "Opash Software",
  publisher: "Opash Software",
  category: "Technology & Software Development",
  alternates: {
    canonical: "https://www.opashsoftware.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Opash Software | Custom Software & AI Development Partner",
    description: "Empowering startups and enterprises with scalable Web, Mobile, and AI engineering. 75+ projects delivered with agile sprint velocity.",
    url: "https://www.opashsoftware.com/",
    siteName: "Opash Software",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Opash Software - Custom Software & AI Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opash Software | Custom Software & AI Engineering",
    description: "Empowering startups and enterprises with scalable Web, Mobile, and AI solutions.",
    creator: "@opashsoftware",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logos/opash-icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "opash-google-search-console-verification",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.opashsoftware.com/#organization",
      "name": "Opash Software",
      "legalName": "Opash Software",
      "url": "https://www.opashsoftware.com",
      "logo": "https://www.opashsoftware.com/Only%20Logo.png",
      "description": "Opash Software is a premier custom software development, mobile application, and AI solutions engineering agency headquartered in Surat, India.",
      "email": "hiren@opashsoftware.com",
      "telephone": "+91-95372-22266",
      "founder": {
        "@type": "Person",
        "name": "Hiren Danecha",
        "jobTitle": "Founder & CEO"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "129, The Galleria Shopping Hub, Nr. Sanjeev Kumar Auditorium, Opp. 3Seventy Kitchen Restaurant, Pal, Adajan",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395009",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://in.linkedin.com/company/opash-software",
        "https://clutch.co/profile/opash-software",
        "https://www.goodfirms.co/company/opash-software"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.opashsoftware.com/#website",
      "url": "https://www.opashsoftware.com",
      "name": "Opash Software",
      "publisher": {
        "@id": "https://www.opashsoftware.com/#organization"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.opashsoftware.com/#localbusiness",
      "name": "Opash Software",
      "image": "https://www.opashsoftware.com/Only%20Logo.png",
      "url": "https://www.opashsoftware.com",
      "telephone": "+91-95372-22266",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "129, The Galleria Shopping Hub, Pal, Adajan",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395009",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    }
  ]
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
