interface MobileHeaderProps {
  onNavigate: (section: string) => void;
}

export function MobileHeader({ onNavigate }: MobileHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center border-b border-border bg-background/95 px-4 md:hidden">
      <button
        onClick={() => onNavigate("home")}
        aria-label="Go to home"
        className="transition-opacity hover:opacity-80"
      >
        <img
          src={`${import.meta.env.BASE_URL}Portfolio%20Logo.png`}
          alt="Dipesh Bist"
          className="h-8 w-auto object-contain"
        />
      </button>
    </header>
  );
}
