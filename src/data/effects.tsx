"use client";

export const COLORS = {
  primary: "oklch(0.65 0.15 150)",
  secondary: "oklch(0.67 0.14 261)",
  accent: "oklch(0.64 0.21 25)",
};

/** Static preview for cursor effects (no live cursor so no default cursor effect on page) */
const CursorThumbnail = ({
  children,
  gradient,
}: {
  children?: React.ReactNode;
  gradient?: string;
}) => (
  <div
    className={`absolute inset-0 overflow-hidden rounded-xl ${gradient ?? "bg-gradient-to-br from-muted to-muted/60"}`}
  >
    {children}
  </div>
);

export type EffectItem = {
  name: string;
  category: "cursor" | "background";
  import: string;
  usage: string;
  isNew?: boolean;
  Thumbnail: React.FC;
  PageEffect: React.FC;
};

export const EFFECTS: EffectItem[] = [
  {
    name: "CursorGlow",
    category: "cursor",
    import: 'import { CursorGlow } from "react-effects";',
    usage: '<CursorGlow color="#6366f1" size={300} />',
    isNew: true,
    Thumbnail: () => (
      <CursorThumbnail gradient="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent">
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-2xl" />
      </CursorThumbnail>
    ),
    PageEffect: () => null,
  },
  {
    name: "CursorTrail",
    category: "cursor",
    import: 'import { CursorTrail } from "react-effects";',
    usage: '<CursorTrail color="#8b5cf6" size={8} />',
    isNew: true,
    Thumbnail: () => (
      <CursorThumbnail gradient="bg-gradient-to-br from-secondary/15 to-transparent">
        <svg className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" viewBox="0 0 100 100" fill="none">
          <path d="M20 50 Q 40 30 50 50 T 80 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-secondary/50" />
        </svg>
      </CursorThumbnail>
    ),
    PageEffect: () => null,
  },
  {
    name: "CursorRipple",
    category: "cursor",
    import: 'import { CursorRipple } from "react-effects";',
    usage: '<CursorRipple color="#ec4899" size={80} />',
    Thumbnail: () => (
      <CursorThumbnail>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 w-8 rounded-full border-2 border-accent/50 bg-accent/10" style={{ transform: `scale(${i * 0.6})` }} />
          ))}
        </div>
      </CursorThumbnail>
    ),
    PageEffect: () => null,
  },
  {
    name: "CursorDotRing",
    category: "cursor",
    import: 'import { CursorDotRing } from "react-effects";',
    usage: '<CursorDotRing dotSize={4} ringSize={60} />',
    Thumbnail: () => (
      <CursorThumbnail>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-12 w-12 rounded-full border-2 border-dashed border-primary/50" />
          <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        </div>
      </CursorThumbnail>
    ),
    PageEffect: () => null,
  },
  {
    name: "CursorFollower",
    category: "cursor",
    import: 'import { CursorFollower } from "react-effects";',
    usage: '<CursorFollower dotSize={8} circleSize={48} />',
    Thumbnail: () => (
      <CursorThumbnail>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-8 w-8 rounded-full border-2 border-primary/40" />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        </div>
      </CursorThumbnail>
    ),
    PageEffect: () => null,
  },
  {
    name: "CursorSpotlight",
    category: "cursor",
    import: 'import { CursorSpotlight } from "react-effects";',
    usage: '<CursorSpotlight size={200} blur={60} />',
    Thumbnail: () => (
      <CursorThumbnail gradient="bg-gradient-to-b from-muted to-muted/80">
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-xl" />
      </CursorThumbnail>
    ),
    PageEffect: () => null,
  },
  {
    name: "BackgroundGradient",
    category: "background",
    import: 'import { BackgroundGradient } from "react-effects";',
    usage: '<BackgroundGradient colors={["#6366f1","#8b5cf6","#ec4899"]} />',
    isNew: true,
    Thumbnail: () => (
      <div className="absolute inset-0 overflow-hidden rounded-xl bg-gradient-to-br from-primary/50 via-secondary/30 to-accent/40" />
    ),
    PageEffect: () => null,
  },
  {
    name: "BackgroundGrid",
    category: "background",
    import: 'import { BackgroundGrid } from "react-effects";',
    usage: '<BackgroundGrid cellSize={24} opacity={0.4} />',
    isNew: true,
    Thumbnail: () => (
      <div className="absolute inset-0 overflow-hidden rounded-xl bg-muted/50 [background-image:linear-gradient(rgba(0,0,0,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.1)_1px,transparent_1px)] [background-size:20px_20px]" />
    ),
    PageEffect: () => null,
  },
  {
    name: "BackgroundDots",
    category: "background",
    import: 'import { BackgroundDots } from "react-effects";',
    usage: '<BackgroundDots dotSize={2} gap={24} />',
    Thumbnail: () => (
      <div className="absolute inset-0 overflow-hidden rounded-xl bg-muted/50 [background-image:radial-gradient(circle,rgba(0,0,0,.2)_1px,transparent_1px)] [background-size:20px_20px]" />
    ),
    PageEffect: () => null,
  },
  {
    name: "BackgroundStars",
    category: "background",
    import: 'import { BackgroundStars } from "react-effects";',
    usage: '<BackgroundStars starCount={80} />',
    Thumbnail: () => (
      <div className="absolute inset-0 overflow-hidden rounded-xl bg-muted/50 [background-image:radial-gradient(2px_2px_at_20px_30px,currentColor,transparent),radial-gradient(2px_2px_at_40px_70px,currentColor,transparent),radial-gradient(2px_2px_at_50px_50px,currentColor,transparent)] [background-size:60px_80px] text-primary/40" />
    ),
    PageEffect: () => null,
  },
  {
    name: "BackgroundMesh",
    category: "background",
    import: 'import { BackgroundMesh } from "react-effects";',
    usage: '<BackgroundMesh colors={["#6366f1","#8b5cf6"]} speed={1} />',
    Thumbnail: () => (
      <div className="absolute inset-0 overflow-hidden rounded-xl bg-gradient-to-br from-primary/40 via-secondary/20 to-primary/10" />
    ),
    PageEffect: () => null,
  },
  {
    name: "BackgroundWaves",
    category: "background",
    import: 'import { BackgroundWaves } from "react-effects";',
    usage: '<BackgroundWaves waveCount={3} speed={0.3} />',
    Thumbnail: () => (
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" d="M0,50 Q25,30 50,50 T100,50" className="text-primary" />
          <path fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" d="M0,60 Q25,40 50,60 T100,60" className="text-secondary" />
        </svg>
      </div>
    ),
    PageEffect: () => null,
  },
];

export const EFFECTS_BY_NAME = Object.fromEntries(
  EFFECTS.map((e) => [e.name, e])
);
