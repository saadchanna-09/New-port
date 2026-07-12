"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOG_LINES = [
  "INITIALIZING DISPLAY INTERFACE...",
  "LOADING PROFILE :: SAAD GUL CHANNA",
  "CALIBRATING SENSOR ARRAY...",
  "MOUNTING PROJECT REGISTRY...",
  "SYSTEMS NOMINAL",
];

export default function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= LOG_LINES.length) {
      const t = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 320);
    return () => clearTimeout(t);
  }, [lineIndex]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
        >
          <div className="bg-hud-grid absolute inset-0 opacity-40" aria-hidden />

          <motion.svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            className="mb-8"
            initial="hidden"
            animate="show"
          >
            {[58, 44, 30].map((r, i) => (
              <motion.circle
                key={r}
                cx="70"
                cy="70"
                r={r}
                fill="none"
                stroke="#00D2FF"
                strokeWidth={1.2}
                strokeDasharray="4 6"
                initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 0.8,
                  rotate: 360 * (i % 2 === 0 ? 1 : -1),
                }}
                transition={{
                  pathLength: { duration: 1, delay: i * 0.15 },
                  opacity: { duration: 0.6, delay: i * 0.15 },
                  rotate: { duration: 8 + i * 2, repeat: Infinity, ease: "linear" },
                }}
              />
            ))}
            <motion.circle
              cx="70"
              cy="70"
              r="9"
              fill="#00D2FF"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="drop-shadow-[0_0_18px_rgba(0,210,255,0.9)]"
            />
          </motion.svg>

          <div className="w-72 font-mono text-xs text-signal-cyan sm:w-96">
            {LOG_LINES.slice(0, lineIndex).map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-1 flex items-center gap-2"
              >
                <span className="text-ink-faint">[{String(i + 1).padStart(2, "0")}]</span>
                {line}
              </motion.p>
            ))}
            <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full bg-signal-gradient"
                initial={{ width: "0%" }}
                animate={{ width: `${(lineIndex / LOG_LINES.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
