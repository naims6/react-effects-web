"use client";

import Hero from "@/components/landing/Hero";

export default function Home() {

  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        {/* Top navigation / logo */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">React Effects</h1>
          </div>

          <nav className="hidden items-center gap-5 text-xs text-muted-foreground sm:flex">
            <a href="#" className="transition hover:text-foreground">
              Docs
            </a>
            <a href="#" className="transition hover:text-slate-100">
              Examples
            </a>
            <a
              href="#"
              className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-foreground transition hover:border-primary hover:bg-muted"
            >
              GitHub
            </a>
          </nav>
        </header>

        {/* Hero content */}
        <Hero />
      </div>
    </main>
  );
}
