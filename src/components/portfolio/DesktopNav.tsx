import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function DesktopNav({ activeSection, onNavigate }: DesktopNavProps) {
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden border-b border-border bg-background/95 md:block">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="Go to home"
          >
            <img
              src={`${import.meta.env.BASE_URL}Portfolio%20Logo.png`}
              alt="Dipesh Bist"
              className="h-8 w-auto object-contain lg:h-10"
            />
          </button>

          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href={resumeHref}
            download
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
