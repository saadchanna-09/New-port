"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { experience, journey } from "@/lib/data";

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: gsap.Context | undefined;

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (pathRef.current) {
          const length = pathRef.current.getTotalLength();
          gsap.set(pathRef.current, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          gsap.to(pathRef.current, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom 65%",
              scrub: 0.6,
            },
          });
        }

        itemRefs.current.forEach((el) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            }
          );
        });
      }, sectionRef);
    })();

    return () => ctx?.revert();
  }, []);

  const activeRole = experience[0];

  return (
    <section id="experience" ref={sectionRef} className="relative px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow mb-3">03 · Active Assignment &amp; Journey</p>
        <h2 className="font-display text-4xl text-ink sm:text-5xl">Where I&rsquo;ve shipped</h2>

        {activeRole && (
          <div className="hud-frame glass mt-10 rounded-2xl p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-cyan opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-cyan" />
                </span>
                <span className="eyebrow text-signal-cyan">Active</span>
              </div>
              <span className="font-mono text-xs text-ink-faint">{activeRole.period}</span>
            </div>
            <h3 className="mt-3 font-display text-xl text-ink sm:text-2xl">{activeRole.role}</h3>
            <p className="mt-1 font-body text-sm text-ink-dim">
              {activeRole.org} · {activeRole.location}
            </p>
            <ul className="mt-5 space-y-3">
              {activeRole.points.map((point, idx) => (
                <li key={idx} className="flex gap-3 font-body text-sm leading-relaxed text-ink-dim">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-cyan/70" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="relative mt-16 pl-10 sm:pl-14">
          <svg
            className="absolute left-0 top-0 h-full w-6 sm:w-8"
            viewBox="0 0 24 500"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden
          >
            <path d="M12 0 L12 500" stroke="rgba(0,210,255,0.12)" strokeWidth="2" />
            <path ref={pathRef} d="M12 0 L12 500" stroke="url(#timeline-gradient)" strokeWidth="2" />
            <defs>
              <linearGradient id="timeline-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D2FF" />
                <stop offset="100%" stopColor="#E8B356" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex flex-col gap-10">
            {journey.map((stage, i) => (
              <div
                key={stage.id}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="relative"
              >
                <span
                  className={`absolute -left-10 top-1.5 h-3 w-3 rounded-full sm:-left-14 ${
                    stage.current ? "bg-signal-gold shadow-glow-crimson" : "bg-signal-cyan shadow-glow-cyan"
                  }`}
                />
                <div className="glass rounded-xl p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="eyebrow text-ink-faint">{stage.stage}</span>
                    {stage.current && <span className="eyebrow text-signal-gold">In Progress</span>}
                  </div>
                  <h4 className="mt-1 font-display text-lg text-ink">{stage.title}</h4>
                  <p className="mt-1 font-body text-sm text-ink-dim">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
