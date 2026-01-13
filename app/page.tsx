'use client';

import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';

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

      {/* File System Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">{'>'}</span> file_system/projects
          </h2>
          <div className="space-y-6">
            {[
              {
                name: 'E-Commerce Platform',
                description: 'Full-stack e-commerce solution with real-time inventory management',
                tech: ['Next.js', 'PostgreSQL', 'Stripe'],
                link: '#'
              },
              {
                name: 'AI Task Manager',
                description: 'Smart task management app with AI-powered prioritization',
                tech: ['React', 'Node.js', 'OpenAI API'],
                link: '#'
              },
              {
                name: 'Design System Library',
                description: 'Comprehensive component library with accessibility features',
                tech: ['TypeScript', 'Storybook', 'Tailwind'],
                link: '#'
              },
            ].map((project) => (
              <div
                key={project.name}
                className="border border-zinc-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-mono text-cyan-400 group-hover:text-emerald-300">
                    📁 {project.name}
                  </h3>
                  <a
                    href={project.link}
                    className="text-sm font-mono text-zinc-500 hover:text-cyan-400 transition-colors"
                  >
                    view_details {'->'}
                  </a>
                </div>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs px-3 py-1 bg-zinc-900 border border-zinc-800 rounded font-mono text-cyan-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Command History Section */}
      <section id="history" className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-950">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">{'>'}</span> command_history
          </h2>
          <div className="space-y-8">
            {[
              {
                date: '2023 - Present',
                command: 'senior_developer',
                company: 'Tech Innovations Inc.',
                description: 'Leading frontend development team, architecting scalable solutions'
              },
              {
                date: '2021 - 2023',
                command: 'full_stack_developer',
                company: 'Digital Solutions Co.',
                description: 'Built and maintained multiple client projects using modern stack'
              },
              {
                date: '2020 - 2021',
                command: 'junior_developer',
                company: 'Startup Ventures',
                description: 'Contributed to core product development and feature implementation'
              },
            ].map((exp) => (
              <div key={exp.command} className="flex gap-6 group">
                <div className="text-cyan-400 font-mono text-sm whitespace-nowrap pt-1">
                  {exp.date}
                </div>
                <div className="flex-1">
                  <div className="font-mono text-lg mb-1">
                    <span className="text-zinc-600">{'$ '}</span>
                    <span className="text-cyan-400">{exp.command}</span>
                    <span className="text-zinc-600"> --company=</span>
                    <span className="text-cyan-400">{exp.company}</span>
                  </div>
                  <p className="text-zinc-400 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">{'>'}</span> credentials.json
          </h2>
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 font-mono text-sm">
            <pre className="text-zinc-400">
              <span className="text-cyan-400">{'{'}</span>{'\n'}
              <span>  </span><span className="text-cyan-400">"education"</span>: <span className="text-cyan-400">{'['}</span>{'\n'}
              <span>    {'{'}</span>{'\n'}
              <span>      </span><span className="text-cyan-400">"degree"</span>: <span className="text-yellow-400">"Bachelor of Science in Computer Science"</span>,{'\n'}
              <span>      </span><span className="text-cyan-400">"institution"</span>: <span className="text-yellow-400">"University of Technology"</span>,{'\n'}
              <span>      </span><span className="text-cyan-400">"year"</span>: <span className="text-purple-400">2020</span>{'\n'}
              <span>    {'}'}</span>{'\n'}
              <span>  </span><span className="text-cyan-400">{']'}</span>,{'\n'}
              <span>  </span><span className="text-cyan-400">"certifications"</span>: <span className="text-cyan-400">{'['}</span>{'\n'}
              <span>    </span><span className="text-yellow-400">"AWS Certified Developer"</span>,{'\n'}
              <span>    </span><span className="text-yellow-400">"React Advanced Patterns"</span>,{'\n'}
              <span>    </span><span className="text-yellow-400">"Full Stack JavaScript Developer"</span>{'\n'}
              <span>  </span><span className="text-cyan-400">{']'}</span>{'\n'}
              <span className="text-cyan-400">{'}'}</span>
            </pre>
          </div>
        </div>
      </section>

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
