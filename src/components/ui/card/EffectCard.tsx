import { useState } from "react";
import { Button } from "../button";
import { Code, Eye, Star } from "lucide-react";
import { EffectItem } from "@/data/effects";

export function EffectCard({ item }: { item: EffectItem }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative overflow-hidden rounded-2xl border-2 border-border transition hover:border-primary/60"
    >
      {/* Thumbnail */}
      <div className="relative aspect-4/3 overflow-hidden bg-muted/30">
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
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-3 pt-8">
        <span className="font-mono text-sm font-semibold text-white">
          {item.name}
        </span>
      </div>
    </div>
  );
}
