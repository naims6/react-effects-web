"use client";

const LINKS = [
  { href: "https://www.npmjs.com/package/react-effects", label: "npm" },
  { href: "https://github.com/yourusername/react-effects", label: "GitHub" },
  { href: "#quick-start", label: "Docs" },
  { href: "#components", label: "Components" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            React Effects
          </span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
            v0.1.0
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>   
    </footer>
  );
}
