const projectsData = [
  {
    title: "Studio & Set",
    tags: ["NEXT JS", "SANITY CMS"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    links: {
      live: "#",
      design: "#",
      code: "#"
    },
    image: ""
  },
  {
    title: "Pefect Finish",
    tags: ["HTML", "SANITY CMS"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    links: {
      live: "#",
      design: "#",
      code: "#"
    },
    image: ""
  },
  {
    title: "Solar & Secure",
    tags: ["HTML", "SANITY CMS"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    links: {
      live: "#",
      design: "#",
      code: "#"
    },
    image: ""
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector("main");

  if (!mainContainer) return;

  const projectsMarkup = projectsData.map((project, index) => {
    const tagsHTML = project.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    const mediaHTML = project.image
      ? `<img src="${project.image}" alt="${project.title} Preview" />`
      : "";

    return `
      <section class="project-section project-${index + 1}">
        <div class="project-content">
          <div class="tech-tags">
            ${tagsHTML}
          </div>
          <h2 class="project-title">${project.title}</h2>
          <p class="project-description">
            ${project.description}
          </p>
          <div class="project-actions">
            <a href="${project.links.live}" class="action-link">01 / Live Beta</a>
            <a href="${project.links.design}" class="action-link">02 / Design Process</a>
            <a href="${project.links.code}" class="action-link">03 / Code Architecture</a>
          </div>
        </div>
        <div class="project-media">
          ${mediaHTML}
        </div>
      </section>
    `;
  }).join("");

  mainContainer.insertAdjacentHTML("beforeend", projectsMarkup);
});