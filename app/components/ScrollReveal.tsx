'use client';

import { useEffect } from 'react';

const sections = '.story-section, .menu-section, .gallery-section, .visit-section';

export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(sections);
    if (!('IntersectionObserver' in window)) return;

    document.body.classList.add('scroll-reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' },
    );

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      document.body.classList.remove('scroll-reveal-ready');
    };
  }, []);

  return null;
}
