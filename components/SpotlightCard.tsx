"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  glowColor = "0,210,255",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [opacity, setOpacity] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });

    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const rx = -((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setTilt({ rx, ry });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => {
        setOpacity(0);
        setTilt({ rx: 0, ry: 0 });
      }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`hud-frame glass glass-hover relative overflow-hidden rounded-2xl ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${pos.x}% ${pos.y}%, rgba(${glowColor},0.16), transparent 65%)`,
        }}
      />
      <div
        className="pointer-events-none absolute h-2 w-2 rounded-full bg-signal-cyan transition-opacity duration-200"
        style={{
          opacity,
          left: `calc(${pos.x}% - 4px)`,
          top: `calc(${pos.y}% - 4px)`,
          boxShadow: "0 0 12px 2px rgba(0,210,255,0.8)",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full border transition-opacity duration-200"
        style={{
          opacity: opacity * 0.7,
          left: `calc(${pos.x}% - 22px)`,
          top: `calc(${pos.y}% - 22px)`,
          width: 44,
          height: 44,
          borderColor: "rgba(0,210,255,0.5)",
        }}
      />
      <div style={{ transform: "translateZ(20px)" }} className="relative">
        {children}
      </div>
    </motion.div>
  );
}
