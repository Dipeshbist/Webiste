import { useState, useEffect } from "react";
import { MobileNav } from "@/components/portfolio/MobileNav";
import { MobileHeader } from "@/components/portfolio/MobileHeader";
import { DesktopNav } from "@/components/portfolio/DesktopNav";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ExpertiseSection } from "@/components/portfolio/ExpertiseSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { AboutSection } from "@/components/portfolio/AboutSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = section === "home" ? 0 : 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <DesktopNav activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileHeader onNavigate={handleNavigate} />
      <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <HeroSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
