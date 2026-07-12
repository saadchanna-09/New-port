"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { skills } from "@/lib/data";

export default function SkillsMatrix() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:px-12 [perspective:1400px]">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">04 · Skills Matrix</p>
        <h2 className="font-display text-4xl text-ink sm:text-5xl">Toolkit &amp; stack</h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((group, gi) => (
            <div key={group.id} className="gsap-card">
              <SpotlightCard className="p-7">
                <h3 className="eyebrow mb-5 flex items-center gap-2 text-ink-dim">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" />
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: gi * 0.08 + ii * 0.03 }}
                      whileHover={{ y: -3, borderColor: "rgba(0,210,255,0.6)" }}
                      className="rounded-md border border-edge bg-white/[0.03] px-4 py-2 font-mono text-xs text-ink transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
