"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const letter = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function AnimatedHeadline({ text }: { text: string }) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="font-display text-[13vw] leading-[0.95] tracking-tight text-ink sm:text-[7rem] md:text-[8rem]"
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 40 });

  useEffect(() => {
    function handleMove(e: globalThis.MouseEvent) {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setGlow({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-mesh px-6 sm:px-12"
    >
      {/* Mouse-tracking spatial glow sphere */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(0,210,255,0.18), transparent 60%)`,
        }}
      />
      <div className="scan-line" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-signal-cyan/20 blur-[140px] animate-pulse-slow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-5%] h-[420px] w-[420px] rounded-full bg-signal-gold/10 blur-[130px] animate-float"
        aria-hidden
      />

      {/* Generic HUD energy-core motif — concentric rings + spokes, original SVG */}
      <div
        className="pointer-events-none absolute right-[-6%] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 opacity-40 md:block lg:right-[2%]"
        aria-hidden
      >
        <svg viewBox="0 0 420 420" className="h-full w-full animate-[spin_60s_linear_infinite]">
          <g transform="translate(210,210)">
            <circle r="170" fill="none" stroke="#00D2FF" strokeOpacity="0.35" strokeWidth="1" />
            <circle r="130" fill="none" stroke="#00D2FF" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 7" />
            <circle r="195" fill="none" stroke="#E8B356" strokeOpacity="0.25" strokeWidth="1" />
            <line x1="-190" y1="0" x2="190" y2="0" stroke="#00D2FF" strokeOpacity="0.15" />
            <line x1="0" y1="-190" x2="0" y2="190" stroke="#00D2FF" strokeOpacity="0.15" />
          </g>
        </svg>
        <svg viewBox="0 0 420 420" className="absolute inset-0 h-full w-full">
          <circle cx="210" cy="210" r="60" fill="none" stroke="#00D2FF" strokeOpacity="0.6" strokeWidth="1.5" />
          <circle cx="210" cy="210" r="14" fill="#00D2FF" className="drop-shadow-[0_0_20px_rgba(0,210,255,0.9)]" />
        </svg>
      </div>

      <div className="absolute top-8 left-6 right-6 flex items-center justify-between sm:left-12 sm:right-12">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          {profile.location}
        </motion.span>
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href="#contact"
          className="eyebrow border-b border-signal-cyan/40 pb-0.5 hover:text-signal-violet hover:border-signal-violet transition-colors"
        >
          Get in touch →
        </motion.a>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-4"
        >
          01 · Full-Stack Web Developer
        </motion.p>
        <AnimatedHeadline text={profile.name} />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 max-w-2xl font-body text-lg text-ink-dim sm:text-xl"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-signal-gradient px-6 py-3 font-body text-sm font-medium text-void shadow-glow transition-transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-edge px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:border-signal-cyan/50 hover:text-signal-cyan"
          >
            GitHub ↗
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-6 flex items-center gap-3 sm:left-12"
      >
        <span className="h-8 w-px bg-gradient-to-b from-signal-cyan to-transparent" />
        <span className="eyebrow text-ink-faint">Scroll</span>
      </motion.div>
    </section>
  );
}
