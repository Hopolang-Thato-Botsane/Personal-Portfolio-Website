import { projectsData } from './projectsData.js';

class ProjectsRenderer {
  constructor() {
    this.gridContainer = document.querySelector('.projects-grid');
    this.detailContainer = document.querySelector('.project-detail-view');
    this.init();
  }

  init() {
    if (!this.gridContainer) return;
    this.renderGrid();
    this.bindEvents();
  }

  renderGrid() {
    this.gridContainer.innerHTML = projectsData.map(project => `
      <article class="project-card" data-id="${project.id}">
        <div class="project-card-image-wrapper">
          <img 
            src="${project.heroImage}" 
            alt="${project.title}" 
            class="project-card-image"
            id="card-img-${project.id}"
          />
        </div>
        <div class="project-card-info">
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-category">${project.meta.platform} • ${project.year}</p>
        </div>
      </article>
    `).join('');
  }

  bindEvents() {
    this.gridContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (card) {
        const projectId = card.dataset.id;
        this.openProjectDetail(projectId, card);
      }
    });

    if (this.detailContainer) {
      this.detailContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('detail-close-btn')) {
          this.closeProjectDetail();
        }
      });
    }
  }

  openProjectDetail(projectId, cardElement) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const imgElement = cardElement.querySelector('.project-card-image');

    if (!document.startViewTransition) {
      this.renderDetailContent(project);
      this.detailContainer.classList.add('active');
      return;
    }

    imgElement.style.viewTransitionName = 'active-project-hero';

    const transition = document.startViewTransition(() => {

      imgElement.style.viewTransitionName = '';
 
      this.renderDetailContent(project);
      this.detailContainer.classList.add('active');

      const targetHeroImg = this.detailContainer.querySelector('.project-hero-media img');
      if (targetHeroImg) {
        targetHeroImg.style.viewTransitionName = 'active-project-hero';
      }
    });

    transition.finished.then(() => {
      const targetHeroImg = this.detailContainer.querySelector('.project-hero-media img');
      if (targetHeroImg) {
        targetHeroImg.style.viewTransitionName = '';
      }
    });
  }

  closeProjectDetail() {
    if (!document.startViewTransition) {
      this.detailContainer.classList.remove('active');
      this.detailContainer.innerHTML = '';
      return;
    }

    const targetHeroImg = this.detailContainer.querySelector('.project-hero-media img');
    if (targetHeroImg) {
      targetHeroImg.style.viewTransitionName = 'active-project-hero';
    }

    const transition = document.startViewTransition(() => {
      if (targetHeroImg) {
        targetHeroImg.style.viewTransitionName = '';
      }
      this.detailContainer.classList.remove('active');
      this.detailContainer.innerHTML = '';
    });

    transition.finished.then(() => {
    });
  }

  renderDetailContent(project) {
    this.detailContainer.innerHTML = `
      <button class="detail-close-btn">Close [X]</button>
      <div class="project-container">
        
        <header class="project-header">
          <div class="project-title-row">
            <h1 class="project-title">${project.title} - ${project.year}</h1>
            <span class="project-status-tag">Project Status: ${project.status} | VERSION: ${project.version}</span>
          </div>
          
          <div class="project-meta-grid">
            <div class="meta-item">
              <label>Role</label>
              <span>${project.meta.role}</span>
            </div>
            <div class="meta-item">
              <label>Timeline</label>
              <span>${project.meta.timeline}</span>
            </div>
            <div class="meta-item">
              <label>Team</label>
              <span>${project.meta.team}</span>
            </div>
            <div class="meta-item">
              <label>Platform</label>
              <span>${project.meta.platform}</span>
            </div>
          </div>
        </header>

        <div class="project-hero-media">
          <img src="${project.heroImage}" alt="${project.title} Hero" />
        </div>

        <section class="project-section">
          <div class="section-label">Overview</div>
          <h2 class="section-heading">${project.overview.heading}</h2>
          <p class="section-body">${project.overview.body}</p>
          <p class="section-body"><strong>Impact:</strong> ${project.overview.impact}</p>
        </section>

        <section class="project-section">
          <div class="section-label">The Problem</div>
          <h2 class="section-heading">${project.problem.heading}</h2>
          <p class="section-body">${project.problem.body}</p>
          
          <div class="carousel-wrapper">
            <div class="carousel-track">
              ${project.problem.carouselImages.map(img => `
                <div class="carousel-slide">
                  <img src="${img}" alt="Carousel Preview" />
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="project-section">
          <div class="section-label">Industry Deep Dive</div>
          <h2 class="section-heading">${project.industryDeepDive.heading}</h2>
          <p class="section-body">${project.industryDeepDive.body}</p>
        </section>

        <section class="project-section">
          <h2 class="section-heading">${project.explorations.heading}</h2>
          <p class="section-body">${project.explorations.body}</p>
          ${project.explorations.bullets ? `
            <ul class="section-bullets">
              ${project.explorations.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
          ` : ''}
        </section>

        <!-- Figma Prototypes Placeholders -->
        <section class="prototypes-section">
          <div class="section-label">Figma Interactive Prototypes</div>
          <p class="section-body">Interactive Figma prototypes built for this system:</p>
          <div class="prototype-grid">
            ${project.prototypes.map(proto => `
              <div class="prototype-card">
                <h4>${proto.title}</h4>
                <div class="prototype-iframe-container">
                  ${proto.embedUrl ? `<iframe src="${proto.embedUrl}" allowfullscreen></iframe>` : `<div class="prototype-placeholder-text">Figma Prototype Space Reserved</div>`}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="project-section">
          <h2 class="section-heading">${project.finalSection.heading}</h2>
          <p class="section-body">${project.finalSection.body}</p>
        </section>

      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ProjectsRenderer();
});