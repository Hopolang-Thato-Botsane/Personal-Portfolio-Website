const projectsData = [
  {
    id: "studio-set",
    title: "Studio & Set",
    tags: ["NEXT JS", "TypeScript"],
    description: "Studio & Set is a specialized e-commerce platform built for film production professionals requiring high-performance camera, grip, and lighting gear. Built with Next.js, TypeScript, and custom CSS Modules, the application pairs an industrial design system with dynamic catalog filtering and a seamless dual-state drawer for product inspection and basket management.",
    links: {
      live: "https://studio-set.vercel.app/",
      code: "https://github.com/Hopolang-Thato-Botsane/Studio-Set"
    },
    images: {
      mobile: "public/mobile-studio.jpg",
      desktop: "public/desktop-studio.jpg"
    },
    caseStudy: {
      year: "2026",
      status: "Ongoing",
      version: "1.4",
      meta: {
        role: "Design Engineer",
        timeline: "2 Months",
        team: "Sole",
        platform: "Next JS"
      },
      overviewHeading: "Streamlining film production gear rentals & crew dispatch",
      overviewText: "Studio & Set is a specialized platform concept focused on helping Southern African film crews and commercial production managers source gear and book vetted crew. The redesign centered on visual hierarchy, equipment availability tracking, and high-conversion checkout flows across complex orders.",
      impactHeading: "Impact",
      impactText: "The layout optimizations focused on improving booking speed through clearer gear categorization, transparent line-item pricing, and zero-friction checkout flows—allowing managers to build equipment manifests without losing context.",
      problemHeading: "Managing equipment rosters and production gear felt unnecessarily fragmented",
      problemText: "Existing rental portals contained massive catalogs of technical equipment, but weak layout hierarchy made checking live availability and calculating daily production rates slow and tedious. Crew leads often lost time double-checking item quantities and spec breakdowns before finalizing bookings.",
      learnedText: "Having worked in the industry as a production assistant for Rise Up Productions whilst they were filming Relate Season 6 is the difficult of acquiring, rigging, dismantling and return equipment which is something that most production teams have to deal with along with getting verified professional film crews",
      explorationsText: "Instead of low-fidelity sketching, the design phase focused directly on high-fidelity layout grids, component states, and interactive logic. I explored side-by-side component structures to solve immediate UX bottlenecks: testing sticky order summaries against inline cart removals, read-only metadata alignment (Lens Mount: PL, FPS: 120), and responsive grid scaling for dense technical catalogs.",
      takeawaysHeading: "Final Interface & Key Interactions",
      takeawaysText: "This project reinforced how strongly user confidence is shaped by interface clarity rather than complex visual noise. Focusing on clean state feedback, scannable data layouts, and frictionless micro-interactions significantly improved how quickly users could build manifests and complete rental bookings."
    }
  },
  {
    id: "perfect-finish",
    title: "Perfect Finish",
    tags: ["HTML", "SANITY CMS"],
    description: "A high-fidelity digital platform built for premium automotive detailing, featuring a dynamic pricing matrix and an interactive dual-stepper booking engine. Engineered using a lightweight, native web stack (HTML, CSS, Vanilla JS) integrated with a headless Sanity CMS backend via direct GROQ API queries. Built to eliminate pricing friction and deliver seamless, real-time service configuration without framework overhead.",
    links: {
      live: "https://hopolang-thato-botsane.github.io/Perfect-Finish-Detailing/",
      code: "https://github.com/Hopolang-Thato-Botsane/Perfect-Finish-Detailing"
    },
    images: {
      mobile: "public/mobile-perfect.jpg",
      desktop: "public/desktop-perfect.jpg"
    },
    caseStudy: {
      year: "2026",
      status: "Complete",
      version: "1.0",
      meta: {
        role: "Design Engineer",
        timeline: "3 Weeks",
        team: "Sole",
        platform: "HTML / Sanity"
      },
      overviewHeading: "Engineering a bespoke booking engine for high-end automotive detailing",
      overviewText: "Perfect Finish is an elite vehicle detailing studio specializing in multi-stage paint correction, ceramic coatings, and premium reconditioning. The redesign centered on elevating brand perception, structuring complex multi-tier service packages, and implementing an interactive, dynamic vehicle configurator that eliminates booking friction.",
      impactHeading: "Impact",
      impactText: "The layout optimization focused on streamlining the reservation funnel. By transitioning from static service lists to a real-time, dynamic cost calculator driven by Sanity CMS, users can instantly calculate package totals tailored to their specific vehicle tier (Hatch, Sedan, SUV, Bakkie) and lock in slots directly via automated communication flows.",
      problemHeading: "Opaque package pricing and friction-heavy scheduling killed conversion potential",
      problemText: "Traditional auto detailing portals struggle with pricing transparency. Customers were forced to wade through unorganized package tiers without clear breakdowns of stage processes, duration, or vehicle-size add-ons. This lack of clarity generated booking drop-offs and forced studio owners to manually quote every inquiry via messaging apps.",
      learnedText: "Having hands-on experience in vehicle maintenance, body paint correction, and mechanical detailing provided a unique domain advantage. Detailing clients aren't just buying a wash—they are investing in asset protection. The UI needed to communicate technical precision, process transparency, and luxury aesthetics through subtle visual hierarchy and micro-interactions.",
      explorationsText: "Instead of low-fidelity wireframing, the design phase moved directly to high-fidelity grid layouts, component systems, and interactive logic testing. Key focus areas included:\n• Dynamic Cost Calculator: Building single-pass stepper UI state logic for instantaneous package + vehicle tier calculations.\n• Service Deep-Dives: Constructing non-disruptive detail modals that display process breakdowns, estimated time allocations, and multi-tier pricing matrices.\n• Headless CMS Synchronization: Structuring Sanity schema topologies to allow zero-code updates for seasonal specials and vehicle class adjustments.",
      takeawaysHeading: "Takeaways & System Logic",
      takeawaysText: "This project reinforced that high-ticket service conversions rely on transparency and speed. Replacing static contact forms with an interactive visual configurator gave clients immediate control over their booking options while giving the studio fully structured, pre-qualified reservation leads."
    }
  },
  {
    id: "solar-secure",
    title: "Solar & Secure",
    tags: ["HTML", "SANITY CMS"],
    description: "A high-fidelity digital platform built for autonomous energy infrastructure, featuring an interactive system ignition sequence and a dynamic spec-driven service matrix. Engineered using a lightweight, native web stack (HTML, CSS, Vanilla JS) integrated with a headless Sanity CMS backend via direct GROQ API queries. Built to eliminate procurement friction and deliver seamless, real-time technical service configuration without framework overhead.",
    links: {
      live: "https://hopolang-thato-botsane.github.io/Solar-Security/",
      code: "https://github.com/Hopolang-Thato-Botsane/Solar-Security"
    },
    images: {
      mobile: "public/mobile-solar.jpg",
      desktop: "public/desktop-solar.jpg"
    },
    caseStudy: {
      year: "2026",
      status: "Complete",
      version: "1.0",
      meta: {
        role: "Design Engineer",
        timeline: "3 Weeks",
        team: "Sole",
        platform: "Vanilla JS / Sanity CMS"
      },
      overviewHeading: "Engineering an off-grid resilience platform & site telemetry assessment engine",
      overviewText: "Solar & Secure is an engineering firm specializing in commercial off-grid micro-grids, enterprise photovoltaic arrays, industrial battery energy storage systems (BESS), and encrypted site telemetry. The digital platform redesign focused on projecting enterprise-grade authority, organizing complex technical specifications, and deploying an inline site assessment workflow that eliminates quote friction.",
      impactHeading: "Impact",
      impactText: "The layout optimization centered on streamlining client intake for high-capacity installations. By transitioning from static informational pages to a real-time, resilient content pipeline driven by Sanity CMS—backed by a local fail-safe state fallback—commercial and residential clients can evaluate capability matrices, review project specs, and schedule technical site telemetry audits instantly without full-page reloads.",
      problemHeading: "Fragmented technical data and slow audit scheduling slowed enterprise engagement",
      problemText: "Traditional solar and security deployment portals struggle with clarity. Prospective clients were forced to navigate disjointed specification sheets, opaque battery storage metrics, and indirect contact forms to get basic feasibility answers. This friction delayed site telemetry scheduling and created administrative overhead for engineering leads handling initial intake manually.",
      learnedText: "Hands-on experience with technical hardware layouts and security systems gave me a solid domain edge. Solar and grid-resilience clients aren't just buying panels—they are investing in uptime, infrastructure protection, and risk mitigation. The UI needed to reflect industrial-grade precision through sharp typographic hierarchy, dark-mode visual surfaces, and instant interactive feedback.",
      explorationsText: "Instead of spending time in low-fidelity wireframes, the design phase moved directly into high-fidelity component systems, responsive CSS Grid layouts, and custom JavaScript interaction logic:\n• Inline Telemetry & Audit Engine: Building a native <dialog> modal flow allowing clients to configure property scale, load demands, and site locations seamlessly.\n• Component-Scoped CSS Architecture: Crafting modular, zero-dependency stylesheets using CSS variables, Flexbox, and Grid to achieve 60fps performance without framework bloat.\n• Headless CMS & Resilient Pipeline: Designing Sanity schema topologies and a hybrid fetching engine (executeContentPipeline) that gracefully falls back to local data states if live CDN sync degrades.\n• Non-Disruptive Data Displays: Implementing dynamic DOM painting methods for process pipelines, service cards, and interactive FAQ accordions.",
      takeawaysHeading: "Summary & Key Takeaways",
      takeawaysText: "This project reinforced that enterprise technical conversions rely on speed, structural resilience, and clear process transparency. Replacing multi-step inquiry redirects with a zero-latency, inline assessment UI gave clients complete confidence in initiating high-end deployments while providing the engineering team with pre-qualified site data."
    }
  },
  {
    id: "voyant",
    title: "Moyagobo Tours",
    tags: ["FRAMER", "FIGMA"],
    description: "A dedicated digital experience engineered for a premier hotel and resort shuttle service. Designed and structured with custom interactions, seamless booking pathways, and a responsive luxury aesthetic built to connect guests directly to partner destinations.",
    links: {
      live: "https://moyagobotours.framer.website/"
    },
    images: {
      mobile: "public/mobile-moyagobo.jpg",
      desktop: "public/desktop-moyagobo.jpg"
    },
    caseStudy: {
      year: "2026",
      status: "Complete",
      version: "1.0",
      meta: {
        role: "Design Engineer",
        timeline: "1 Month",
        team: "Sole",
        platform: "Framer"
      },
      overviewHeading: "Streamlining luxury hospitality and executive transit bookings",
      overviewText: "Voyant is a high-end conceptual hospitality and transit platform bridging luxury hotel stays, private executive vehicle transfers, and curated regional adventures. The digital platform redesign focused on projecting absolute authority, organizing complex multi-modal booking flows, and deploying an inline reservation workflow that eliminates booking friction.",
      impactHeading: "Optimizing high-capacity client intake",
      impactText: "The layout optimization centered on streamlining client intake for high-capacity bookings. By transitioning from static informational pages to a real-time, immersive content pipeline driven by structured component architectures—backed by a resilient multi-state interaction fallback—users can evaluate vehicle specs, review resort options, and schedule complex itineraries instantly without dead ends.",
      problemHeading: "Fragmented travel options and slow reservation workflows",
      problemText: "Traditional travel and transport portals struggle with clarity. Prospective clients were forced to navigate disjointed specification sheets, opaque vehicle capacities, and indirect inquiry forms to get basic pricing answers. This friction delayed trip scheduling and created administrative overhead for logistics teams handling initial intake manually.",
      learnedText: "Designing for high-end hospitality and executive transit highlighted how crucial it is to bridge the gap between aesthetic sophistication and complex transactional logic. Working through multi-modal booking flows—where users seamlessly pair accommodation stays with private transport and regional tours—reinforced that luxury digital platforms must prioritize absolute clarity and zero-friction interactions. Users investing in premium services expect a seamless digital experience that mirrors the exclusivity and reliability of the physical service itself, making intuitive state management and responsive component design non-negotiable for high-conversion interfaces.",
      explorationsText: "Instead of spending time in low-fidelity wireframes, the design phase moved directly into high-fidelity component systems, responsive CSS Grid layouts, and custom interaction logic:\n• Inline Stay & Transfer Engine: Building a native interactive modal flow allowing clients to configure resort stays, vehicle preferences, and schedule itineraries seamlessly.\n• Component-Scoped Architecture: Crafting modular stylesheets and card systems using layout grids to achieve seamless performance without framework bloat.\n• Resilient Navigation Pipeline: Designing structured schema topologies and component states that gracefully handle multi-step user flows.\n• Non-Disruptive Data Displays: Implementing dynamic UI painting methods for vehicle fleets, curated tour cards, and interactive FAQ accordions.",
      takeawaysHeading: "Summary & Key Takeaways",
      takeawaysText: "This project reinforced that luxury digital conversions rely on speed, structural resilience, and clear process transparency. Replacing multi-step inquiry redirects with a zero-latency, inline assessment UI gave clients complete confidence in initiating high-end bookings while providing the logistics team with pre-qualified journey data."
    }
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-section");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalContent = document.getElementById("modalContent");

  if (!contactSection) return;

  const projectsMarkup = projectsData.map((project, index) => {
    const tagsHTML = project.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    const liveLink = project.links.live 
      ? `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="action-link">01 / Live Beta</a>` 
      : "";
      
    // Triggers full presentation modal
    const designLink = `<button class="action-link modal-trigger-btn" data-project-id="${project.id}">02 / Design Process</button>`;

    const codeLink = project.links.code 
      ? `<a href="${project.links.code}" target="_blank" rel="noopener noreferrer" class="action-link">03 / Code Architecture</a>` 
      : "";

    return `
      <section 
        class="project-section project-${index + 1}" 
        style="--bg-mobile: url('../${project.images.mobile}'); z-index: ${index + 2};"
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
            ${liveLink}
            ${designLink}
            ${codeLink}
          </div>
        </div>
        <div class="project-media">
          <img src="${project.images.desktop}" alt="${project.title} Desktop Preview" />
        </div>
      </section>
    `;
  }).join("");

  contactSection.insertAdjacentHTML("beforebegin", projectsMarkup);

  // Modal Functionality
  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !project.caseStudy) return;

    const cs = project.caseStudy;

    modalContent.innerHTML = `
      <div class="cs-header">
        <h1 class="cs-title">${project.title} - ${cs.year}</h1>
        <div class="cs-top-meta">
          <span>Project Status: ${cs.status}</span>
          <span>VERSION: ${cs.version}</span>
        </div>
      </div>

      <div class="cs-hero-placeholder">
        <span class="placeholder-text">Main Project Name</span>
      </div>

      <div class="cs-meta-grid">
        <div class="cs-meta-item">
          <span class="meta-label">Role</span>
          <span class="meta-val">${cs.meta.role}</span>
        </div>
        <div class="cs-meta-item">
          <span class="meta-label">Timeline</span>
          <span class="meta-val">${cs.meta.timeline}</span>
        </div>
        <div class="cs-meta-item">
          <span class="meta-label">Team</span>
          <span class="meta-val">${cs.meta.team}</span>
        </div>
        <div class="cs-meta-item">
          <span class="meta-label">Platform</span>
          <span class="meta-val">${cs.meta.platform}</span>
        </div>
      </div>

      <div class="cs-divider"></div>

      <div class="cs-section">
        <span class="cs-sub-label">Overview</span>
        <h2 class="cs-heading">${cs.overviewHeading}</h2>
        <p class="cs-text">${cs.overviewText}</p>
        
        <h3 class="cs-subheading">${cs.impactHeading}</h3>
        <p class="cs-text">${cs.impactText}</p>
      </div>

      <div class="cs-divider"></div>

      <div class="cs-section">
        <span class="cs-sub-label">The Problem</span>
        <h2 class="cs-heading">${cs.problemHeading}</h2>
        <p class="cs-text">${cs.problemText}</p>

        <div class="cs-mid-placeholder">
          <span class="placeholder-text">Main Project Name</span>
        </div>
      </div>

      <div class="cs-divider"></div>

      <div class="cs-section">
        <span class="cs-sub-label">Industry Deep Dive</span>
        <h3 class="cs-subheading">What I learned</h3>
        <p class="cs-text">${cs.learnedText}</p>

        <h3 class="cs-subheading">High-Fidelity Explorations & Layout Architecture</h3>
        <p class="cs-text" style="white-space: pre-line;">${cs.explorationsText}</p>
      </div>

      <div class="cs-divider"></div>

      <div class="cs-section">
        <h3 class="cs-subheading">Final Interface & Key Interactions</h3>
        <p class="cs-text">${cs.takeawaysText}</p>

        <div class="cs-proto-placeholder">
          <span class="placeholder-text">Desktop Prototype</span>
        </div>
        <div class="cs-proto-placeholder mobile-proto">
          <span class="placeholder-text">Mobile Prototype</span>
        </div>
      </div>

      <div class="cs-section">
        <h3 class="cs-subheading">${cs.takeawaysHeading || "Summary & Key Takeaways"}</h3>
        <p class="cs-text">${cs.takeawaysText}</p>
      </div>

      <div class="cs-divider"></div>

      <div class="cs-footer-links">
        ${project.links.code ? `<a href="${project.links.code}" target="_blank" rel="noopener noreferrer">View Codebase</a>` : ''}
        ${project.links.code ? `<span class="link-sep">|</span>` : ''}
        <a href="${project.links.live}" target="_blank" rel="noopener noreferrer">Launch Website</a>
      </div>
    `;

    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-trigger-btn")) {
      const projectId = e.target.getAttribute("data-project-id");
      openModal(projectId);
    }
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});