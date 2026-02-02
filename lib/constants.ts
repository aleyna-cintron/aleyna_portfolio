export interface FileRecord {
  filename: string;
  classification: string;
  classColor: string;
  accessLevel: string;
  fileSize: string;
  description: string;
  features: string[];
  stack: string[];
  status: string;
  color: string;
  liveUrl: string;
  githubUrl: string;
}

export const FILE_RECORDS: FileRecord[] = [
  {
    filename: "Opulence Tools E-Commerce",
    classification: "RESTRICTED",
    classColor: "#f472b6",
    accessLevel: "LEVEL_5",
    fileSize: "2.4 GB",
    description: "Freelance project: Modern e-commerce platform for luxury jewelry-making tools. Features secure authentication with NextAuth.js, JWT sessions with role-based access (admin/user), Zod validation, and product catalog with filtering.",
    features: [
      "NextAuth.js with JWT sessions & roles",
      "User registration with Zod validation",
      "Product catalog with filtering",
      "PostgreSQL with Prisma ORM"
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth.js"],
    status: "IN DEVELOPMENT",
    color: "#f472b6",
    liveUrl: "https://opulence-tools-nz3acixdx-oneida-toress-projects.vercel.app/",
    githubUrl: "https://github.com/aleyna-cintron/opulence-tools"
  },
  {
    filename: "The Long Autumn Band Website",
    classification: "RESTRICTED",
    classColor: "#a78bfa",
    accessLevel: "LEVEL_4",
    fileSize: "1.8 GB",
    description: "Freelance project: Comprehensive band website with Bandsintown API integration for tour dates, Stripe-powered merchandise store, media galleries, and contact functionality. Full-stack solution for band promotion and fan engagement.",
    features: [
      "Bandsintown API for tour dates",
      "Stripe payment integration",
      "Band bio & gallery sections",
      "Contact form & merch store"
    ],
    stack: ["React", "Next.js", "TypeScript", "Stripe", "Bandsintown API"],
    status: "IN DEVELOPMENT",
    color: "#a78bfa",
    liveUrl: "https://long-autumn-9p92hfvx3-jam-templetons-projects.vercel.app",
    githubUrl: "https://github.com/aleyna-cintron/long-autumn-project"
  },
  {
    filename: "Scoundrel: Dungeon Crawler",
    classification: "DEPLOYED",
    classColor: "#f472b6",
    accessLevel: "LEVEL_5",
    fileSize: "2.1 GB",
    description: "Contract work for Full Sail University: Educational card game demonstrating core JavaScript fundamentals including game logic, state management, and DOM manipulation. Features conditional card selection and dynamic game state tracking.",
    features: [
      "Card shuffling algorithm",
      "Conditional card selection logic",
      "Health & deck state management",
      "Hand card tracking system"
    ],
    stack: ["JavaScript", "HTML5", "CSS3"],
    status: "COMPLETE",
    color: "#f472b6",
    liveUrl: "https://aleyna-cintron.github.io/scoundrel/",
    githubUrl: "https://github.com/aleyna-cintron/scoundrel"
  },
  {
    filename: "Spotify OAuth MERN App",
    classification: "DEPLOYED",
    classColor: "#a78bfa",
    accessLevel: "LEVEL_3",
    fileSize: "1.9 GB",
    description: "Academic project: Full-stack MERN application with Spotify OAuth integration. Features JWT authentication, global music search across tracks, artists, and albums with real-time database interactions.",
    features: [
      "Spotify OAuth authentication",
      "JWT authorization tokens",
      "Global music search engine",
      "Real-time data synchronization"
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    status: "DEPLOYED",
    color: "#a78bfa",
    liveUrl: "https://spotify-mern-app.netlify.app/",
    githubUrl: "https://github.com/aleyna-cintron/spotify-api"
  },
  {
    filename: "Beautify Makeup Searcher",
    classification: "PUBLIC",
    classColor: "#f472b6",
    accessLevel: "LEVEL_2",
    fileSize: "1.2 GB",
    description: "Academic project: Beauty product discovery platform leveraging the Makeup API for comprehensive product searches across diverse brands. Features responsive design and extensive product database access.",
    features: [
      "Makeup API integration",
      "Multi-brand product search",
      "Product filtering & sorting",
      "Responsive user interface"
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "REST API"],
    status: "DEPLOYED",
    color: "#f472b6",
    liveUrl: "https://beautify-makeup.netlify.app/",
    githubUrl: "https://github.com/aleyna-cintron/beautify"
  },
  {
    filename: "ShipIt Social Media App",
    classification: "PUBLIC",
    classColor: "#a78bfa",
    accessLevel: "LEVEL_1",
    fileSize: "0.8 GB",
    description: "Academic project: Fundamental social media application demonstrating core web development principles with user authentication system and basic profile management functionality.",
    features: [
      "User login system",
      "Profile management",
      "Session handling",
      "Responsive design"
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    status: "DEPLOYED",
    color: "#a78bfa",
    liveUrl: "https://aleyna-cintron.github.io/ship-it/profile_page.html",
    githubUrl: "https://github.com/aleyna-cintron/ship-it"
  }
];
