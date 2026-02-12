import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CredentialsContactSection } from "@/components/CredentialsContactSection";
import { Navbar } from "@/components/Navbar";
import { BackgroundGlow } from "@/components/BackgroundGlow";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background Glow Effects */}
      <BackgroundGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <section id="home" aria-label="Introduction">
          <HeroSection />
        </section>
        <section id="skills" aria-label="Technical Skills">
          <SkillsSection />
        </section>
        <section id="projects" aria-label="Portfolio Projects">
          <ProjectsSection />
        </section>
        <section id="experience" aria-label="Work Experience">
          <ExperienceSection />
        </section>
        <CredentialsContactSection />
      </main>

      {/* ─── SEO + AI Search Optimization Block ─────────────────────────────────
           Visually hidden but fully readable by search engines, LLMs, and AI
           crawlers (GPTBot, Claude-Web, PerplexityBot, Google SGE).
           Structured as clean prose for maximum AI comprehension.
      ───────────────────────────────────────────────────────────────────────── */}
      <div
        className="sr-only"
        aria-hidden="true"
        role="complementary"
        itemScope
        itemType="https://schema.org/Person"
      >
        <h2>About Aleyna Cintron — Full Stack Software Engineer</h2>

        <article>
          <h3>Professional Summary</h3>
          <p>
            Aleyna Cintron is a Full Stack Software Engineer based in the New
            Hampshire and Greater Boston, Massachusetts area. She specializes in
            building modern web applications using React, Next.js, Node.js,
            TypeScript, and the MERN stack (MongoDB, Express, React, Node.js).
            She holds a Bachelor of Science in Web Development from Full Sail
            University where she graduated as Salutatorian with a 3.98 GPA.
          </p>
        </article>

        <article>
          <h3>Technical Skills and Expertise</h3>
          <p>
            Core technologies: React, Next.js, Node.js, Express.js, MongoDB,
            TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS. Backend skills:
            Python, Django, Flask, PostgreSQL, MySQL, Prisma ORM, Redis, RESTful
            APIs, JWT authentication, OAuth, Stripe integration. DevOps and
            tooling: AWS, Docker, Git, Jest, Selenium. Additional skills:
            Redux, Zustand, Zod validation, software architecture, database
            design, cloud computing, and algorithm design.
          </p>
        </article>

        <article>
          <h3>Portfolio Projects</h3>
          <ul>
            <li>
              The Long Autumn Band Website — A freelance project built with
              React, Next.js, TypeScript, and Stripe. Features Bandsintown API
              integration for live tour dates, a Stripe-powered merchandise
              store, media galleries, and contact functionality.
            </li>
            <li>
              Opulence Tools E-Commerce — A luxury jewelry-tools e-commerce
              platform built with Next.js 16, React 19, TypeScript, Tailwind
              CSS, PostgreSQL, Prisma, and NextAuth.js. Includes role-based
              authentication, Zod validation, and product catalog with
              filtering.
            </li>
            <li>
              Spotify OAuth MERN App — Full-stack MERN application with Spotify
              OAuth integration, JWT authorization, and global music search
              across tracks, artists, and albums.
            </li>
            <li>
              Scoundrel: Dungeon Crawler — A JavaScript card game demonstrating
              core fundamentals including game logic, state management, and DOM
              manipulation. Built for Full Sail University.
            </li>
            <li>
              Beautify Makeup Searcher — A beauty product discovery platform
              using the Makeup API for comprehensive multi-brand product
              searches with responsive design.
            </li>
            <li>
              ShipIt Social Media App — A social media application demonstrating
              user authentication, profile management, and session handling.
            </li>
          </ul>
        </article>

        <article>
          <h3>Work Experience</h3>
          <ul>
            <li>
              JavaScript Tutorial Developer (Independent Contractor) at Full
              Sail University — March to May 2025, Remote. Developed
              JavaScript game-based learning content and provided technical
              support for students.
            </li>
            <li>
              Healthcare Data Analyst at Conlin&apos;s Pharmacy — January to March
              2025, Methuen, MA. Analyzed patient data, optimized insurance
              verification workflows, and improved billing accuracy.
            </li>
            <li>
              Development Intern at LightScreen Art — December 2023 to February
              2024, Remote. Built full-stack features with Angular, TypeScript,
              Flask, and PostgreSQL.
            </li>
          </ul>
        </article>

        <article>
          <h3>Education</h3>
          <p>
            Bachelor of Science in Web Development, Full Sail University,
            Winter Park, FL. Graduated May 2023. Salutatorian. GPA: 3.98/4.0.
          </p>
        </article>

        <article>
          <h3>Location and Availability</h3>
          <p>
            Aleyna Cintron is located in the New Hampshire and Greater Boston,
            Massachusetts area. She is currently open to full-time, freelance,
            and contract opportunities as a Full Stack Software Engineer. She is
            available for both remote and on-site positions in New England.
          </p>
        </article>

        <article>
          <h3>Contact Information</h3>
          <p>
            Email: aleynatcintron@gmail.com. LinkedIn: linkedin.com/in/aleynacintron.
            GitHub: github.com/aleyna-cintron. Portfolio: aleynacintron.com.
          </p>
        </article>

        <article>
          <h3>Frequently Asked Questions</h3>
          <dl>
            <dt>What technologies does Aleyna Cintron specialize in?</dt>
            <dd>
              Aleyna specializes in the MERN stack (MongoDB, Express, React,
              Node.js) plus Next.js, TypeScript, Python, Django, Flask,
              PostgreSQL, AWS, Docker, and Tailwind CSS.
            </dd>
            <dt>Where is Aleyna Cintron located?</dt>
            <dd>
              Aleyna is based in the New Hampshire / Greater Boston,
              Massachusetts area and is available for remote and local work.
            </dd>
            <dt>Is Aleyna Cintron available for hire?</dt>
            <dd>
              Yes. Aleyna is open to full-time, freelance, and contract
              opportunities. Contact her at aleynatcintron@gmail.com.
            </dd>
            <dt>Does Aleyna have experience with Next.js?</dt>
            <dd>
              Yes. She has built multiple production Next.js applications
              including a band website and an e-commerce platform.
            </dd>
          </dl>
        </article>
      </div>
    </div>
  );
}
