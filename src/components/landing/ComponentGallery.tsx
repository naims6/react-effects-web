"use client";

import { useState, useMemo } from "react";
import { Star, Search, Eye, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EFFECTS, type EffectItem } from "@/data/effects";

type Tab = "all" | "cursor" | "background";

export default function ComponentGallery() {
  const [tab, setTab] = useState<Tab>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let items = tab === "all" ? EFFECTS : EFFECTS.filter((e) => e.category === tab);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      items = items.filter((e) => e.name.toLowerCase().includes(q));
    }
    return items;
  }, [tab, search]);

  const tabs: { id: Tab; label: string }[] = [
    { id: "all", label: "All Patterns" },
    { id: "background", label: "Backgrounds" },
    { id: "cursor", label: "Cursors" },
  ];

  return (
    <section id="components" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Effect Library
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Tap on mobile or hover on desktop to see options.
        </p>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-1 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`border-b-2 px-4 py-3 text-sm font-medium transition ${
                tab === t.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mt-4">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            strokeWidth={2}
          />
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          {filtered.length} pattern{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <EffectCard key={item.name} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            No patterns match your search.
          </p>
        )}
      </div>
    </section>
  );
}

function EffectCard({ item }: { item: EffectItem }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      role="presentation"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative overflow-hidden rounded-2xl border-2 border-border transition hover:border-primary/60"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
        <item.Thumbnail />
        {/* Hover overlay: Preview + Use buttons */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 backdrop-blur-[2px] transition duration-200 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye className="h-3.5 w-3.5" />
              Preview
            </Button>
            <Button
              size="sm"
              className="shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Code className="h-3.5 w-3.5" />
              Use
            </Button>
          </div>
        </div>
      </div>

      {/* Star (favourite placeholder) */}
      <button
        type="button"
        className="absolute left-2 top-2 rounded-full p-1.5 text-muted-foreground transition hover:bg-background/50 hover:text-foreground"
        aria-label="Add to favourites"
      >
        <Star className="h-4 w-4" strokeWidth={2} />
      </button>

      {/* New tag */}
      {item.isNew && (
        <span className="absolute right-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground">
          New
        </span>
      )}

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
        <span className="font-mono text-sm font-semibold text-white">
          {item.name}
        </span>
      </div>
    </div>
  );
}
