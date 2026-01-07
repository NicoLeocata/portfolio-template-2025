// ===============================
// Utilities
// ===============================
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===============================
// Projects data (template-friendly)
// ===============================
const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción corta del proyecto.",
    tags: ["Branding", "UI"],
    link: "#",
  },
  {
    title: "Proyecto 2",
    description: "Descripción corta del proyecto.",
    tags: ["Editorial", "Design"],
    link: "#",
  },
  {
    title: "Proyecto 3",
    description: "Descripción corta del proyecto.",
    tags: ["Web", "Motion"],
    link: "#",
  },
  {
    title: "Proyecto 4",
    description: "Descripción corta del proyecto.",
    tags: ["Packaging"],
    link: "#",
  },
  {
    title: "Proyecto 5",
    description: "Descripción corta del proyecto.",
    tags: ["Photography"],
    link: "#",
  },
  {
    title: "Proyecto 6",
    description: "Descripción corta del proyecto.",
    tags: ["Art Direction"],
    link: "#",
  },
];

const projectsGrid = document.getElementById("projectsGrid");
const viewAllBtn = document.getElementById("viewAllProjects");

let expanded = false;

function projectCardHTML(p) {
  const tagsHTML = (p.tags || [])
    .map((t) => `<span class="badge text-bg-secondary-subtle me-1">${t}</span>`)
    .join("");

  return `
    <div class="col-12 col-md-6 col-lg-4">
      <article class="card h-100 project-card">
        <div class="ratio ratio-16x9 bg-body-tertiary"></div>
        <div class="card-body">
          <h3 class="h5">${p.title}</h3>
          <p class="mb-3 text-body-secondary">${p.description}</p>
          <div class="mb-3">${tagsHTML}</div>
          <a class="link-primary" href="${p.link}">Ver caso →</a>
        </div>
      </article>
    </div>
  `;
}

function renderProjects() {
  if (!projectsGrid || !viewAllBtn) return;

  const visible = expanded ? projects : projects.slice(0, 3);
  projectsGrid.innerHTML = visible.map(projectCardHTML).join("");
  viewAllBtn.textContent = expanded ? "Ver menos" : "Ver todos";
}

renderProjects();

// ===============================
// GSAP Animations
// ===============================
function runAnimations() {
  if (prefersReducedMotion || !window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero intro
  gsap.from(".hero-copy > *", {
    opacity: 0,
    y: 16,
    duration: 0.65,
    ease: "power2.out",
    stagger: 0.07,
  });

  gsap.from(".hero-media", {
    opacity: 0,
    y: 16,
    duration: 0.75,
    ease: "power2.out",
    delay: 0.08,
  });

  // Projects reveal on scroll
  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 75%",
    },
    opacity: 0,
    y: 18,
    duration: 0.65,
    ease: "power2.out",
    stagger: 0.1,
  });

  // Subtle parallax for hero
  gsap.to("#home", {
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: -24,
    ease: "none",
  });
}

runAnimations();

// ===============================
// View all / view less behavior
// ===============================
if (viewAllBtn) {
  viewAllBtn.addEventListener("click", () => {
    expanded = !expanded;
    renderProjects();

    if (expanded && projectsGrid) {
      projectsGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Re-run a small reveal when new cards are injected
    if (!prefersReducedMotion && window.gsap) {
      ScrollTrigger.refresh(true);
      gsap.from(".project-card", {
        opacity: 0,
        y: 14,
        duration: 0.45,
        ease: "power2.out",
        stagger: 0.06,
      });
    }
  });
}
