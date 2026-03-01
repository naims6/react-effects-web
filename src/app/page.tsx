"use client";

import Hero from "@/components/landing/Hero";
import ComponentGallery from "@/components/landing/ComponentGallery";
import Footer from "@/components/landing/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground">
      <div className="relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-8">
          {/* Top navigation / logo */}
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">React Effects</h1>
            </div>

            <nav className="flex items-center gap-4 text-xs text-muted-foreground sm:gap-5">
              <ThemeToggle />
              <a href="#quick-start" className="hidden transition hover:text-foreground sm:inline">
                Docs
              </a>
              <a href="#components" className="hidden transition hover:text-foreground sm:inline">
                Components
              </a>
              <a
                href="https://github.com/yourusername/react-effects"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-foreground transition hover:border-primary hover:bg-muted"
              >
                GitHub
              </a>
            </nav>
          </header>

          {/* Hero content */}
          <Hero />
        </div>

        {/* Effect Library - full width for Pattern Library style */}
        <ComponentGallery />
        <Footer />
      </div>
    </main>
  );
}
