"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !message) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1400);
  }

  return (
    <section id="contact" className="relative px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">05 · Contact</p>
        <h2 className="font-display text-4xl text-ink sm:text-5xl">Let&rsquo;s build something</h2>
        <p className="mt-4 max-w-lg font-body text-ink-dim">
          Open to full-stack and AI-integration roles. Send a message below or reach out directly.
        </p>

        <div className="gsap-card hud-frame mt-12 overflow-hidden rounded-2xl border border-edge bg-black/60 shadow-glow-cyan">
          {/* terminal chrome */}
          <div className="flex items-center gap-2 border-b border-edge bg-white/[0.03] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            <span className="ml-3 font-mono text-xs text-ink-faint">contact.sh</span>
          </div>

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {status !== "sent" ? (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 font-mono text-sm"
                >
                  <div>
                    <label className="text-signal-cyan">
                      <span className="text-ink-faint">$</span> whoami --name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="your name"
                      className="mt-2 w-full rounded-md border border-edge bg-white/[0.03] px-3 py-2 text-ink outline-none transition-colors focus:border-signal-violet/60"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-signal-cyan">
                      <span className="text-ink-faint">$</span> message --send
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="tell me about the project..."
                      rows={4}
                      className="mt-2 w-full resize-none rounded-md border border-edge bg-white/[0.03] px-3 py-2 text-ink outline-none transition-colors focus:border-signal-violet/60"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === "sending"}
                    className="w-full rounded-md bg-signal-gradient px-5 py-3 font-body text-sm font-medium text-void disabled:opacity-60"
                  >
                    {status === "sending" ? "transmitting…" : "run ./send.sh"}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 font-mono text-sm"
                >
                  <p className="text-signal-cyan">$ ./send.sh</p>
                  <p className="text-ink-dim">✓ message queued for delivery</p>
                  <p className="text-ink-dim">
                    ✓ thanks, {name || "friend"} — I&rsquo;ll reply at {profile.email}
                  </p>
                  <p className="mt-4 text-ink-faint">
                    <span className="animate-pulse-slow">█</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 font-mono text-xs text-ink-dim">
          <a href={`mailto:${profile.email}`} className="hover:text-signal-cyan transition-colors">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="hover:text-signal-cyan transition-colors">
            {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-signal-cyan transition-colors">
            github.com/saadchanna-09
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal-cyan transition-colors">
            linkedin ↗
          </a>
        </div>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-edge pt-8 font-mono text-xs text-ink-faint">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS, Framer Motion &amp; GSAP.
      </footer>
    </section>
  );
}
