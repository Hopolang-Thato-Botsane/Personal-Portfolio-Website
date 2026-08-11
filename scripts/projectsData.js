const projectsData = [
  {
    title: "Studio & Set",
    tags: ["NEXT JS", "TypeScript"],
    description: "Studio & Set is a specialized e-commerce platform built for film production professionals requiring high-performance camera, grip, and lighting gear. Built with Next.js, TypeScript, and custom CSS Modules, the application pairs an industrial design system with dynamic catalog filtering and a seamless dual-state drawer for product inspection and basket management.",
    links: {
      live: "https://studio-set.vercel.app/",
      design: "https://www.behance.net/gallery/252901249/Studio-SetUpdate-In-Progress",
      code: "https://github.com/Hopolang-Thato-Botsane/Studio-Set"
    },
    images: {
      mobile: "public/mobile-studio.jpg",
      desktop: "public/desktop-studio.jpg"
    }
  },
  {
    title: "Perfect Finish",
    tags: ["HTML", "SANITY CMS"],
    description: "A high-fidelity digital platform built for premium automotive detailing, featuring a dynamic pricing matrix and an interactive dual-stepper booking engine. Engineered using a lightweight, native web stack (HTML, CSS, Vanilla JS) integrated with a headless Sanity CMS backend via direct GROQ API queries. Built to eliminate pricing friction and deliver seamless, real-time service configuration without framework overhead.",
    links: {
      live: "https://hopolang-thato-botsane.github.io/Perfect-Finish-Detailing/",
      design: "https://www.behance.net/gallery/252046599/Perfect-Finish-Detailing",
      code: "https://github.com/Hopolang-Thato-Botsane/Perfect-Finish-Detailing"
    },
    images: {
      mobile: "public/mobile-perfect.jpg",
      desktop: "public/desktop-perfect.jpg"
    }
  },
  {
    title: "Solar & Secure",
    tags: ["HTML", "SANITY CMS"],
    description: "A high-fidelity digital platform built for autonomous energy infrastructure, featuring an interactive system ignition sequence and a dynamic spec-driven service matrix. Engineered using a lightweight, native web stack (HTML, CSS, Vanilla JS) integrated with a headless Sanity CMS backend via direct GROQ API queries. Built to eliminate procurement friction and deliver seamless, real-time technical service configuration without framework overhead.",
    links: {
      live: "https://hopolang-thato-botsane.github.io/Solar-Security/",
      design: "https://www.behance.net/gallery/254040693/Solar-And-Secure",
      code: "https://github.com/Hopolang-Thato-Botsane/Solar-Security"
    },
    images: {
      mobile: "public/mobile-solar.jpg",
      desktop: "public/desktop-solar.jpg"
    }
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector("main");

  if (!mainContainer) return;

  const projectsMarkup = projectsData.map((project, index) => {
    const tagsHTML = project.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    return `
      <section 
        class="project-section project-${index + 1}" 
        style="--bg-mobile: url('../${project.images.mobile}');"
      >
        <div class="project-content">
          <div class="tech-tags">
            ${tagsHTML}
          </div>
          <h2 class="project-title">${project.title}</h2>
          <p class="project-description">
            ${project.description}
          </p>
          <div class="project-actions">
            <a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="action-link">01 / Live Beta</a>
            <a href="${project.links.design}" target="_blank" rel="noopener noreferrer" class="action-link">02 / Design Process</a>
            <a href="${project.links.code}" target="_blank" rel="noopener noreferrer" class="action-link">03 / Code Architecture</a>
          </div>
        </div>
        <div class="project-media">
          <img src="${project.images.desktop}" alt="${project.title} Desktop Preview" />
        </div>
      </section>
    `;
  }).join("");

  mainContainer.insertAdjacentHTML("beforeend", projectsMarkup);
});