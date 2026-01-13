'use client';

import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { PrimarySkills } from '@/components/PrimarySkills';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';

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
              <button onClick={() => scrollToSection('practices')} className="hover:text-cyan-400 transition-colors">practices</button>
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
      <div id="practices">
        <PrimarySkills />
      </div>

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

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
