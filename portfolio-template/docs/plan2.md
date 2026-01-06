# Plan 2 — GSAP + ScrollTrigger animations (Grade 2)

## Goal

Add scroll-driven animations using GSAP + ScrollTrigger to improve visual polish and meet Grade 2 requirements.

## What will be animated

1. Hero content fade/slide in on page load.
2. Projects cards reveal on scroll (stagger).
3. Subtle parallax effect on hero background (scroll-driven).
4. Respect prefers-reduced-motion (disable animations if user requests reduced motion).

## Files to edit

- index.html: add GSAP + ScrollTrigger CDN scripts.
- assets/js/main.js: implement animations + reduced-motion guard.

## Acceptance criteria

- No console errors.
- Animations trigger on scroll smoothly.
- Reduced motion users do not get heavy animations.
- Site remains usable with keyboard and without JS.
