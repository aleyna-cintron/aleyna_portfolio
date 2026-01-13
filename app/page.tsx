'use client';

import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { PrimarySkills } from '@/components/PrimarySkills';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-mono text-cyan-400">{'>'} aleyna.dev</span>
            <div className="flex gap-6 text-sm font-mono">
              <button onClick={() => scrollToSection('hero')} className="hover:text-cyan-400 transition-colors">home</button>
              <button onClick={() => scrollToSection('abilities')} className="hover:text-cyan-400 transition-colors">abilities</button>
              <button onClick={() => scrollToSection('weapons')} className="hover:text-cyan-400 transition-colors">weapons</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors">projects</button>
              <button onClick={() => scrollToSection('history')} className="hover:text-cyan-400 transition-colors">history</button>
              <button onClick={() => scrollToSection('credentials')} className="hover:text-cyan-400 transition-colors">credentials</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">connect</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Skills Section */}
      <div id="abilities">
        <SkillsSection />
      </div>

      {/* Development Practices Section */}
      <PrimarySkills />

      {/* Weapon Cache Section */}
      <section id="weapons" className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">{'>'}</span> weapon_cache
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js',
              'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL',
              'MongoDB', 'Git', 'Docker', 'AWS',
              'Figma', 'REST APIs', 'GraphQL', 'CI/CD'
            ].map((weapon) => (
              <div
                key={weapon}
                className="border border-zinc-800 rounded-lg p-4 text-center hover:border-emerald-500 hover:bg-emerald-500/5 transition-all cursor-pointer group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">⚡</div>
                <div className="font-mono text-sm text-zinc-400 group-hover:text-cyan-400 transition-colors">
                  {weapon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <div id="history">
        <ExperienceSection />
      </div>

      {/* Education Section */}
      <div id="credentials">
        <EducationSection />
      </div>

      {/* Network Connection Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-950">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">{'>'}</span> network_connection
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-mono text-cyan-400 mb-4">establish_connection()</h3>
              <div className="space-y-4">
                {[
                  { platform: 'GitHub', handle: 'github.com/aleyna', icon: '⚙️' },
                  { platform: 'LinkedIn', handle: 'linkedin.com/in/aleyna', icon: '💼' },
                  { platform: 'Email', handle: 'aleyna@example.com', icon: '📧' },
                  { platform: 'Twitter', handle: '@aleyna_dev', icon: '🐦' },
                ].map((contact) => (
                  <a
                    key={contact.platform}
                    href="#"
                    className="flex items-center gap-4 p-4 border border-zinc-800 rounded-lg hover:border-emerald-500 hover:bg-emerald-500/5 transition-all group"
                  >
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <div className="font-mono text-sm text-zinc-500">{contact.platform}</div>
                      <div className="text-cyan-400 group-hover:text-emerald-300">{contact.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-mono text-cyan-400 mb-4">send_message()</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="your_name"
                  className="w-full px-4 py-3 bg-black border border-zinc-800 rounded font-mono text-sm focus:border-emerald-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="your_email"
                  className="w-full px-4 py-3 bg-black border border-zinc-800 rounded font-mono text-sm focus:border-emerald-500 focus:outline-none"
                />
                <textarea
                  placeholder="your_message"
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-zinc-800 rounded font-mono text-sm focus:border-emerald-500 focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-500 text-black font-mono rounded hover:bg-emerald-400 transition-colors"
                >
                  transmit()
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-mono text-sm text-zinc-600">
            <span className="text-cyan-400">{'>'}</span> aleyna.dev © 2026
          </div>
          <div className="font-mono text-sm text-zinc-600">
            crafted with <span className="text-red-500">♥</span> and code
          </div>
        </div>
      </footer>
    </div>
  );
}
