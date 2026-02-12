import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getAllJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://aleynacintron.com";

export const viewport: Viewport = {
  themeColor: "#030213",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // ─── Core Metadata ───────────────────────────────────────────────────────────
  title: {
    default: "Aleyna Cintron | Full Stack Developer for Hire | Boston & Manchester NH",
    template: "%s | Aleyna Cintron",
  },
  description:
    "Aleyna Cintron is a Full Stack Developer available for hire in Boston, Massachusetts and Manchester, New Hampshire. Specializing in React, Next.js, Node.js, TypeScript, and the MERN stack. View projects and hire a developer today.",
  keywords: [
    "Full Stack Developer for Hire",
    "Full Stack Developer New Hampshire",
    "Full Stack Developer Manchester NH",
    "Full Stack Developer Massachusetts",
    "Full Stack Developer Boston",
    "Full Stack Developer Boston Area",
    "Hire Full Stack Developer",
    "Hire React Developer",
    "Hire Next.js Developer",
    "React Developer Portfolio",
    "React Developer for Hire Boston",
    "Next.js Developer for Hire",
    "JavaScript Developer",
    "JavaScript Developer New Hampshire",
    "TypeScript Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Software Engineer for Hire",
    "Web Developer New England",
    "Freelance Developer Manchester NH",
    "Freelance Developer Boston",
    "Aleyna Cintron",
    "Aleyna Cintron Developer",
  ],
  authors: [{ name: "Aleyna Cintron", url: SITE_URL }],
  creator: "Aleyna Cintron",
  publisher: "Aleyna Cintron",

  // ─── Canonical + Alternates ──────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },

  // ─── Robots ──────────────────────────────────────────────────────────────────
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

  // ─── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Aleyna Cintron Portfolio",
    title: "Aleyna Cintron | Full Stack Developer for Hire | Boston & Manchester NH",
    description:
      "Full Stack Developer available for hire in Boston, MA and Manchester, NH. Specializing in React, Next.js, Node.js, TypeScript, and the MERN stack. Open to opportunities.",
    images: [
      {
        url: "/graduation.jpg",
        width: 800,
        height: 600,
        alt: "Aleyna Cintron - Full Stack Software Engineer",
        type: "image/jpeg",
      },
    ],
  },

  // ─── Twitter / X Cards ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Aleyna Cintron | Full Stack Developer",
    description:
      "Full Stack Developer for hire in Boston, MA & Manchester, NH. React, Next.js, Node.js & MERN specialist. View my portfolio and let's build something.",
    images: ["/graduation.jpg"],
    creator: "@aleynacintron",
  },

  // ─── Verification (add your IDs after registering) ──────────────────────────
  // Uncomment and add your verification IDs:
  // verification: {
  //   google: "your-google-site-verification-id",
  //   yandex: "your-yandex-verification-id",
  // },

  // ─── Category + Classification ──────────────────────────────────────────────
  category: "Technology",
  classification: "Software Developer Portfolio",

  // ─── Other ──────────────────────────────────────────────────────────────────
  other: {
    "application-name": "Aleyna Cintron Portfolio",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Aleyna Cintron",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdSchemas = getAllJsonLd();

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* JSON-LD Structured Data */}
        {jsonLdSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
