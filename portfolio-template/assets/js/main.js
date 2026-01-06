// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Guard: respect reduced motion
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  // 1) Hero intro
  gsap.from(".hero-copy > *", {
    opacity: 0,
    y: 18,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.08,
  });

  gsap.from(".hero-media", {
    opacity: 0,
    y: 18,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.1,
  });

  // 2) Projects reveal on scroll (stagger)
  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 75%",
    },
    opacity: 0,
    y: 24,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.12,
  });

  // 3) Subtle parallax (scroll-driven) on hero background glow
  // We'll move the entire hero section slightly for a clean effect
  gsap.to("#home", {
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: -30,
    ease: "none",
  });
}
