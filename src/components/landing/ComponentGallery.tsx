"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { EFFECTS } from "@/data/effects";
import { EffectCard } from "../ui/card/EffectCard";

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

