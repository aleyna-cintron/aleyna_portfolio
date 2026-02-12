import { FILE_RECORDS } from "./constants";

const SITE_URL = "https://aleynacintron.com";
const SITE_NAME = "Aleyna Cintron | Full Stack Developer";

// ─── Person Schema (E-E-A-T Signal) ───────────────────────────────────────────
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Aleyna Cintron",
  givenName: "Aleyna",
  familyName: "Cintron",
  url: SITE_URL,
  image: `${SITE_URL}/graduation.jpg`,
  jobTitle: "Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer available for hire in Boston, Massachusetts and Manchester, New Hampshire. Specializing in React, Next.js, Node.js, and cloud technologies. BS in Web Development from Full Sail University.",
  email: "mailto:aleynatcintron@gmail.com",
  knowsAbout: [
    "Full Stack Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "PostgreSQL",
    "Python",
    "Django",
    "Flask",
    "AWS",
    "Docker",
    "Tailwind CSS",
    "REST APIs",
    "OAuth",
    "JWT Authentication",
    "Prisma ORM",
    "Redis",
    "Git",
    "Software Architecture",
    "Database Design",
    "Cloud Computing",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Full Sail University",
    url: "https://www.fullsail.edu",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Winter Park",
      addressRegion: "FL",
      addressCountry: "US",
    },
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "Bachelor of Science in Web Development",
    recognizedBy: {
      "@type": "CollegeOrUniversity",
      name: "Full Sail University",
    },
  },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Manchester",
      addressRegion: "NH",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Boston",
      addressRegion: "MA",
      addressCountry: "US",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/aleynacintron/",
    "https://github.com/aleyna-cintron",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed / Open to Opportunities",
  },
};

// ─── WebSite Schema (Sitelinks + AI Search) ──────────────────────────────────
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Portfolio of Aleyna Cintron, a Full Stack Developer for hire in Boston, MA and Manchester, NH. Specializing in React, Next.js, Node.js, and the MERN stack.",
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-US",
};

// ─── WebPage Schema ──────────────────────────────────────────────────────────
export const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Hire Aleyna Cintron — Full Stack Developer available in Boston, MA and Manchester, NH. Specializing in React, Next.js, Node.js, and modern web technologies.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-US",
  dateModified: new Date().toISOString(),
};

// ─── ProfilePage Schema (Google rich result for profiles) ─────────────────────
export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: "Aleyna Cintron — Full Stack Developer Portfolio",
  mainEntity: { "@id": `${SITE_URL}/#person` },
  dateModified: new Date().toISOString(),
};

// ─── Portfolio Project Schemas (CreativeWork) ─────────────────────────────────
export const projectsJsonLd = FILE_RECORDS.map((project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.filename,
  description: project.description,
  url: project.liveUrl !== "#" ? project.liveUrl : undefined,
  author: { "@id": `${SITE_URL}/#person` },
  keywords: project.stack.join(", "),
  sourceOrganization: {
    "@type": "Person",
    name: "Aleyna Cintron",
  },
}));

// ─── FAQ Schema (AI Search Optimization) ──────────────────────────────────────
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What technologies does Aleyna Cintron specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aleyna Cintron specializes in the MERN stack (MongoDB, Express, React, Node.js) plus Next.js, TypeScript, Python, Django, Flask, PostgreSQL, AWS, Docker, and Tailwind CSS. She builds full stack web applications with modern technologies.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Aleyna Cintron located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aleyna Cintron is based in the Manchester, New Hampshire and Greater Boston, Massachusetts area. She is available for hire for both remote and on-site opportunities in the New England region, including Boston, Cambridge, Manchester, Nashua, and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "What is Aleyna Cintron's educational background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aleyna Cintron holds a Bachelor of Science in Web Development from Full Sail University (graduated May 2023) where she was class Salutatorian with a 3.98 GPA.",
      },
    },
    {
      "@type": "Question",
      name: "Is Aleyna Cintron available for hire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Aleyna Cintron is currently available for hire as a Full Stack Software Engineer. She accepts full-time, freelance, and contract opportunities in the Boston, MA and Manchester, NH areas, as well as remote positions. Contact her at aleynatcintron@gmail.com or connect on LinkedIn.",
      },
    },
    {
      "@type": "Question",
      name: "What projects has Aleyna Cintron built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aleyna has built a diverse portfolio including: The Long Autumn Band Website (React, Next.js, Stripe, Bandsintown API), Opulence Tools E-Commerce (Next.js 16, React 19, PostgreSQL, Prisma, NextAuth.js), a Spotify OAuth MERN App, Scoundrel Dungeon Crawler game, and more. All projects are viewable at aleynacintron.com.",
      },
    },
    {
      "@type": "Question",
      name: "Does Aleyna Cintron have experience with Next.js?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Aleyna Cintron has extensive experience with Next.js. She has built multiple production applications including a band website and an e-commerce platform using Next.js with TypeScript, as well as her own portfolio site.",
      },
    },
  ],
};

// ─── BreadcrumbList Schema ────────────────────────────────────────────────────
export const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Aleyna Cintron — Full Stack Developer for Hire",
      item: SITE_URL,
    },
  ],
};

// ─── Combined JSON-LD for injection ───────────────────────────────────────────
export function getAllJsonLd() {
  return [
    personJsonLd,
    websiteJsonLd,
    webPageJsonLd,
    profilePageJsonLd,
    faqJsonLd,
    breadcrumbJsonLd,
    ...projectsJsonLd,
  ];
}
