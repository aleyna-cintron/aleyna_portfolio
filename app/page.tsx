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
        <div id="home">
          <HeroSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <CredentialsContactSection />
      </main>
    </div>
  );
}
