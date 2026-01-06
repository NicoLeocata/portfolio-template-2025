# Plan 1 — Project setup & base architecture

## Goal

Define the overall structure, technology stack, and workflow for a production-ready portfolio template.

## Project type

Reusable portfolio template (not a personal portfolio).

## Target grade

Grade 2 — Bootstrap + GSAP.

## Technology stack

- HTML5 (semantic markup)
- CSS3 (custom architecture + Bootstrap overrides)
- Bootstrap 5 (via CDN)
- JavaScript (vanilla)
- GSAP + ScrollTrigger (scroll-driven animations)
- Git + GitHub (version control and deployment)

## Project structure

- index.html (main entry point)
- 404.html (custom not-found page)
- assets/
  - css/
    - base.css (design tokens, variables, fluid typography)
    - layout.css (layout and section structure)
    - components.css (custom Bootstrap overrides)
    - index.css (CSS entry point)
  - js/
    - main.js (interactions and animations)
- docs/
  - plan1.md
  - plan2.md

## Design approach

- Mobile-first responsive layout
- Fluid typography using clamp()
- Custom dark theme (not default Bootstrap)
- Subtle gradients and glass-like surfaces
- Micro-interactions and hover effects

## Accessibility considerations

- Semantic HTML structure
- Visible focus states
- Keyboard navigation
- prefers-reduced-motion support

## AI usage

AI was used during the planning phase to:

- define project structure
- choose the appropriate grade and stack
- outline required features according to the brief

All AI-assisted planning was documented before implementation.
