"use client";

const LABELS = [
  { x: 60, y: 90, text: "SEC-04.A" },
  { x: 920, y: 140, text: "GRID//REF" },
  { x: 160, y: 720, text: "NODE.12" },
  { x: 980, y: 860, text: "SYS-OK" },
];

/**
 * Fixed, full-viewport technical-blueprint backdrop, built entirely from
 * inline SVG (grid lines, circuit traces, targeting brackets, telemetry
 * labels). No external imagery — this is the deep z-0 layer that GSAP
 * parallaxes as the page scrolls.
 */
export default function HUDBackdrop() {
  return (
    <div
      id="hud-backdrop"
      className="pointer-events-none fixed inset-0 z-0 opacity-70 will-change-transform"
      aria-hidden
    >
      <div className="bg-hud-grid absolute inset-0" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="#00D2FF" strokeOpacity="0.22" strokeWidth="1">
          <path d="M0 120 H260 V300 H520 V80 H900 V400 H1200" />
          <path d="M0 460 H180 V620 H460 V520 H820 V740 H1200" />
          <path d="M0 900 H320 V760 H600 V980 H980 V820 H1200" />
        </g>
        <g fill="#00D2FF" fillOpacity="0.5">
          <circle cx="260" cy="120" r="3" />
          <circle cx="520" cy="300" r="3" />
          <circle cx="900" cy="80" r="3" />
          <circle cx="180" cy="460" r="3" />
          <circle cx="460" cy="620" r="3" />
          <circle cx="820" cy="520" r="3" />
        </g>

        {/* Concentric radar rings, upper right */}
        <g stroke="#00D2FF" strokeOpacity="0.18" strokeWidth="1" fill="none">
          <circle cx="1000" cy="220" r="60" />
          <circle cx="1000" cy="220" r="110" />
          <circle cx="1000" cy="220" r="160" />
          <path d="M1000 60 V380 M840 220 H1160" />
        </g>

        {/* Targeting corner brackets, lower left */}
        <g stroke="#E8B356" strokeOpacity="0.35" strokeWidth="1.5" fill="none">
          <path d="M140 760 L140 820 L200 820" />
          <path d="M340 760 L340 820 L280 820" />
        </g>

        {LABELS.map((l) => (
          <text
            key={l.text}
            x={l.x}
            y={l.y}
            fill="#00D2FF"
            fillOpacity="0.4"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="2"
          >
            {l.text}
          </text>
        ))}
      </svg>

      <div className="bg-grid-fade absolute inset-0" />
    </div>
  );
}
