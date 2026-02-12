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
    default: "Aleyna Cintron | Full Stack Developer | React & Next.js Engineer",
    template: "%s | Aleyna Cintron",
  },
  description:
    "Aleyna Cintron is a Full Stack Software Engineer in New Hampshire / Boston specializing in React, Next.js, Node.js, TypeScript, and the MERN stack. View projects, skills, and hire a developer.",
  keywords: [
    "Full Stack Developer",
    "Full Stack Developer New Hampshire",
    "Full Stack Developer Massachusetts",
    "Full Stack Developer Boston",
    "React Developer",
    "React Developer Portfolio",
    "Next.js Developer",
    "Hire Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Software Engineer Portfolio",
    "Web Developer New England",
    "Aleyna Cintron",
    "Aleyna Cintron Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Engineer",
    "React Developer for Hire",
    "Freelance Web Developer New Hampshire",
    "Freelance Web Developer Boston",
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
    title: "Aleyna Cintron | Full Stack Developer | React & Next.js Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, Node.js, TypeScript, and the MERN stack. Based in New Hampshire / Boston. Open to opportunities.",
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
      "Full Stack Engineer specializing in React, Next.js, Node.js & MERN. Based in NH/Boston. View my portfolio and let's build something.",
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
