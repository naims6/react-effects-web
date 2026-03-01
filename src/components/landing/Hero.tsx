import React from "react";
import { useState } from "react";

const INSTALL_COMMAND = "npm install react-effects";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy install command", error);
    }
  };

  return (
    <section className="flex mt-20 flex-1 flex-col items-center justify-center py-10 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-[11px] text-muted-foreground shadow-sm">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-400">
          ●
        </span>
        <span className="font-medium tracking-tight">
          New: Visual effects pack for React
        </span>
      </div>

      <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
        Beautiful{" "}
        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          Background Effects
        </span>{" "}
        for React
      </h1>

      <p className="mt-4 max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
        A lightweight React library of customizable visual effects add to your
        React apps stunning cursors and animated backgrounds in seconds.
      </p>

      {/* CTAs */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#quick-start"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Get Started
        </a>
        <a
          href="#components"
          className="inline-flex items-center justify-center rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground shadow-sm transition hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View Components
        </a>
      </div>

      {/* Trust line */}
      <p className="mt-4 text-[11px] text-muted-foreground sm:text-xs">
        Open source • TypeScript ready • Tree-shakable
      </p>

      {/* Install command with copy button */}
      <div className="mt-8 w-full max-w-xl space-y-3">
        <div className="flex items-center rounded-2xl border border-border bg-card p-2 shadow-[0_0_0_1px_rgba(15,23,42,0.4)] backdrop-blur">
          <div className="flex-1 overflow-x-auto whitespace-nowrap rounded-xl bg-muted px-3 py-2 text-left text-xs font-mono text-foreground sm:text-sm">
            {INSTALL_COMMAND}
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="ml-2 inline-flex items-center justify-center rounded-xl bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Effect previews under hero */}
      <div className="mt-10 w-full max-w-3xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Preview a few effects
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="group rounded-2xl border border-border bg-card p-3 text-left shadow-sm transition hover:border-primary/60 hover:shadow-md">
            <div className="h-24 rounded-xl bg-gradient-to-br from-primary/70 via-primary/10 to-background transition group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]" />
            <p className="mt-3 text-xs font-medium text-foreground">Aurora Gradient</p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Soft multi-layered glow for hero backgrounds.
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-card p-3 text-left shadow-sm transition hover:border-primary/60 hover:shadow-md">
            <div className="h-24 rounded-xl bg-[radial-gradient(circle_at_0_0,theme(colors.primary.DEFAULT)/0.35,transparent_55%),radial-gradient(circle_at_100%_100%,theme(colors.primary.DEFAULT)/0.12,transparent_55%)] bg-background [background-blend-mode:screen]" />
            <p className="mt-3 text-xs font-medium text-foreground">Noise Grid</p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Subtle dotted pattern that keeps content readable.
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-card p-3 text-left shadow-sm transition hover:border-primary/60 hover:shadow-md">
            <div className="h-24 rounded-xl bg-gradient-to-tr from-background via-muted to-primary/40" />
            <p className="mt-3 text-xs font-medium text-foreground">Glass Panel</p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Frosted glass overlay ideal for dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
