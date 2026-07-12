"use client";

import { useEffect } from "react";
import gsap from "gsap";

/**
 * Mount-only component (no DOM output) that wires up the page-wide GSAP
 * ScrollTrigger choreography: the fixed HUD backdrop scales/drifts for a
 * parallax depth effect, and every element flagged `.gsap-card` animates
 * forward out of the depth of field as it enters the viewport.
 */
export default function ScrollFX() {
  useEffect(() => {
    let ctx: gsap.Context | undefined;

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const backdrop = document.getElementById("hud-backdrop");
        if (backdrop) {
          gsap.to(backdrop, {
            scale: 1.35,
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.8,
            },
          });
        }

        const cards = gsap.utils.toArray<HTMLElement>(".gsap-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
              z: -120,
              scale: 0.94,
            },
            {
              opacity: 1,
              y: 0,
              z: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              delay: (i % 3) * 0.05,
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
              },
            }
          );
        });
      });
    })();

    return () => ctx?.revert();
  }, []);

  return null;
}
