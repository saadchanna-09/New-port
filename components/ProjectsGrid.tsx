"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { projects, Project } from "@/lib/data";

export default function ProjectsGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="projects" className="relative px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          02 · Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-4xl text-ink sm:text-5xl"
        >
          Systems I&rsquo;ve architected
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 [perspective:1400px] md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setActiveId(project.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`gsap-card ${project.featured ? "md:col-span-2" : ""}`}
            >
              <SpotlightCard className="h-full cursor-pointer p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${project.id}`}
                      className="font-display text-2xl text-ink sm:text-3xl"
                    >
                      {project.name}
                    </motion.h3>
                    <p className="mt-1 font-body text-sm text-ink-dim">{project.tagline}</p>
                  </div>
                  <span className="eyebrow shrink-0 rounded-full border border-edge px-3 py-1 text-ink-faint">
                    TGT.{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 line-clamp-2 font-body text-sm text-ink-dim">
                  {project.points[0]}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="eyebrow rounded-full border border-signal-violet/30 bg-signal-violet/5 px-3 py-1 normal-case tracking-normal text-ink-dim"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="eyebrow rounded-full px-2 py-1 text-ink-faint">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                <span className="mt-6 inline-block font-mono text-xs text-signal-cyan">
                  Expand details →
                </span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActiveId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-void/80 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        className="glass max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-8 shadow-glow sm:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <motion.h3 layoutId={`title-${project.id}`} className="font-display text-3xl text-ink sm:text-4xl">
              {project.name}
            </motion.h3>
            <p className="mt-1 font-body text-sm text-signal-cyan">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-full border border-edge p-2 text-ink-dim transition-colors hover:border-signal-violet/50 hover:text-ink"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="eyebrow rounded-full border border-edge px-3 py-1 normal-case tracking-normal text-ink-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-7 space-y-4">
          {project.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="flex gap-3 font-body text-sm leading-relaxed text-ink-dim"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-gradient" />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
