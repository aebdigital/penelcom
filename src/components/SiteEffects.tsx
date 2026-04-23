"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      anchors: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "[data-reveal]",
          ".about-text p",
          ".service-text p",
          ".service-details li",
          ".materials-text p",
          ".materials-highlights li",
          ".privacy-content > *",
        ].join(", "),
      ),
    ).filter((target, index, allTargets) => allTargets.indexOf(target) === index);

    targets.forEach((target, index) => {
      target.classList.add("reveal-up");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
      revealObserver.observe(target);
    });

    return () => revealObserver.disconnect();
  }, [pathname]);

  return null;
}
