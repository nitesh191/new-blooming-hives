"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Intersection Observer-based scroll reveal hook.
 * Attaches `data-reveal="visible"` when the element scrolls into view.
 *
 * @param threshold – fraction of element visible before triggering (0–1)
 * @param rootMargin – CSS margin string applied to the root
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-reveal", "visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Hook that attaches IntersectionObserver to ALL children of a container,
 * staggering their reveal with CSS custom property `--stagger-index`.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  selector = ":scope > *",
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(selector);

    children.forEach((child, index) => {
      (child as HTMLElement).style.setProperty("--stagger-index", String(index));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-reveal", "visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [selector, threshold, rootMargin]);

  return ref;
}

/**
 * Parallax hook – translates an element on scroll relative to its position.
 * @param speed – multiplier (0.05 = subtle, 0.3 = dramatic)
 */
export function useParallax<T extends HTMLElement = HTMLElement>(speed = 0.1) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elCenter = rect.top + rect.height / 2;
        const offset = (elCenter - viewportCenter) * speed;
        el.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}

/**
 * Floating animation hook – applies a gentle CSS floating animation.
 * Uses pure CSS, this hook just sets the custom properties.
 */
export function useFloat<T extends HTMLElement = HTMLElement>(
  amplitude = 12,
  duration = 6,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--float-amplitude", `${amplitude}px`);
    el.style.setProperty("--float-duration", `${duration}s`);
    el.classList.add("anim-float");
  }, [amplitude, duration]);

  return ref;
}

