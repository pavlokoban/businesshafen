"use client";

import { useEffect } from "react";

export function useHeadingReveal() {
  useEffect(() => {
    const headings = document.querySelectorAll(
      "h1, h2, h3, h4"
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    headings.forEach(h => {
      h.classList.add("heading-reveal", "glass-accent");
      observer.observe(h);
    });

    return () => observer.disconnect();
  }, []);
}
