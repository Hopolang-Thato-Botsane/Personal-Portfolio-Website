export const projectsData = [
  {
    id: "perfect-finish",
    title: "Perfect Finish",
    year: "2026",
    status: "Complete",
    version: "1.0",
    heroImage: "assets/projects/pfd-hero.jpg",
    meta: {
      role: "Design Engineer",
      timeline: "3 Weeks",
      team: "Solo",
      platform: "HTML / Sanity"
    },
    overview: {
      heading: "Engineering a bespoke booking engine for high-end automotive detailing",
      body: "Perfect Finish is an elite vehicle detailing studio specializing in multi-stage paint correction, ceramic coatings, and premium reconditioning. The redesign centered on elevating brand perception, structuring complex multi-tier service packages, and implementing an interactive, dynamic vehicle configurator that eliminates booking friction.",
      impact: "The layout optimization focused on streamlining the reservation funnel. By transitioning from static service lists to a real-time, dynamic cost calculator driven by Sanity CMS, users can instantly calculate package totals tailored to their specific vehicle tier (Hatch, Sedan, SUV, Bakkie) and lock in slots directly via automated communication flows."
    },
    problem: {
      heading: "Opaque package pricing and friction-heavy scheduling killed conversion potential",
      body: "Traditional auto detailing portals struggle with pricing transparency. Customers were forced to wade through unorganized package tiers without clear breakdowns of stage processes, duration, or vehicle-size add-ons. This lack of clarity generated booking drop-offs and forced studio owners to manually quote every inquiry via messaging apps.",
      carouselImages: [
        "assets/projects/pfd-carousel-1.jpg",
        "assets/projects/pfd-carousel-2.jpg",
        "assets/projects/pfd-carousel-3.jpg",
        "assets/projects/pfd-carousel-4.jpg"
      ]
    },
    industryDeepDive: {
      heading: "What I learned",
      body: "Having hands-on experience in vehicle maintenance, body paint dynamics, and mechanical detailing provided a unique domain advantage. Detailing clients aren't just buying a wash—they are investing in asset protection. The UI needed to communicate technical precision, process transparency, and luxury aesthetics through subtle visual hierarchy and micro-interactions."
    },
    explorations: {
      heading: "High-Fidelity Explorations & Layout Architecture",
      body: "Instead of low-fidelity wireframing, the design phase moved directly to high-fidelity grid layouts, component systems, and interactive logic. Key focus areas included:",
      bullets: [
        "<strong>Dynamic Cost Calculator:</strong> Building single-pass stepper UI state logic for instantaneous package + vehicle tier calculations.",
        "<strong>Service Deep-Dives:</strong> Constructing non-disruptive detail modals that display process breakdowns, estimated time allocations, and multi-tier pricing matrices.",
        "<strong>Headless CMS Synchronization:</strong> Structuring Sanity schema topologies to allow zero-code updates for seasonal specials and vehicle class adjustments."
      ]
    },
    takeaways: {
      heading: "Takeaways & System Logic",
      body: "This project reinforced that high-ticket service conversions rely on transparency and speed. Replacing static contact forms with an interactive visual configurator gave clients immediate control over their booking options while giving the studio fully structured, pre-qualified reservation leads."
    },
    prototypes: [
      {
        title: "Desktop Prototype",
        embedUrl: ""
      },
      {
        title: "Mobile Prototype",
        embedUrl: ""
      }
    ],
    finalSection: {
      heading: "Final Interface & Key Interactions",
      body: "The final design pairs dark-mode automotive aesthetics with sharp data display. Content hierarchy leads with visual service breakdowns, moves into a Bento-grid value architecture, and culminates in a high-conversion booking engine."
    }
  },
  {
    id: "studio-and-set",
    title: "Studio & Set",
    year: "2026",
    status: "Ongoing",
    version: "1.4",
    heroImage: "assets/projects/studio-hero.jpg",
    meta: {
      role: "Design Engineer",
      timeline: "2 Months",
      team: "Solo",
      platform: "Next JS"
    },
    overview: {
      heading: "Streamlining film production gear rentals & crew dispatch",
      body: "Studio & Set is a specialized platform concept focused on helping Southern African film crews and commercial production managers source gear and book vetted crew. The redesign centered on visual hierarchy, equipment availability tracking, and high-conversion checkout flows across complex orders.",
      impact: "The layout optimizations focused on improving booking speed through clearer gear categorization, transparent line-item pricing, and zero-friction checkout flows—allowing managers to build equipment manifests without losing context."
    },
    problem: {
      heading: "Managing equipment rosters and production gear felt unnecessarily fragmented",
      body: "Existing rental portals contained massive catalogs of technical equipment, but weak layout hierarchy made checking live availability and calculating daily production rates slow and tedious. Crew leads often lost time double-checking item quantities and spec breakdowns before finalizing bookings.",
      carouselImages: [
        "assets/projects/studio-carousel-1.jpg",
        "assets/projects/studio-carousel-2.jpg",
        "assets/projects/studio-carousel-3.jpg",
        "assets/projects/studio-carousel-4.jpg"
      ]
    },
    industryDeepDive: {
      heading: "What I learned",
      body: "Having worked in the industry as a production assistant for Rise Up Productions whilst they were filming Relate Season 6 is the difficult of acquiring, rigging, dismantling and return equipment which is something that most production teams have to deal with along with getting verified professional film crews"
    },
    explorations: {
      heading: "High-Fidelity Explorations & Layout Architecture",
      body: "Instead of low-fidelity sketching, the design phase focused directly on high-fidelity layout grids, component states, and interactive logic.",
      bullets: [
        "I explored side-by-side component structures to solve immediate UX bottlenecks: testing sticky order summaries against inline cart removals, read-only metadata alignment (Lens Mount: PL, FPS: 120), and responsive grid scaling for dense technical catalogs."
      ]
    },
    takeaways: {
      heading: "Final Interface & Key Interactions",
      body: "Instead of low-fidelity sketching, the design phase focused directly on high-fidelity layout grids, component states, and interactive logic. I explored side-by-side component structures to solve immediate UX bottlenecks: testing sticky order summaries against inline cart removals, read-only metadata alignment (Lens Mount: PL, FPS: 120), and responsive grid scaling for dense technical catalogs."
    },
    prototypes: [
      {
        title: "Desktop Prototype",
        embedUrl: ""
      },
      {
        title: "Mobile Prototype",
        embedUrl: ""
      }
    ],
    finalSection: {
      heading: "Summary & Key Takeaways",
      body: "This project reinforced how strongly user confidence is shaped by interface clarity rather than complex visual noise. Focusing on clean state feedback, scannable data layouts, and frictionless micro-interactions significantly improved how quickly users could build manifests and complete rental bookings."
    }
  },
  {
    id: "voyant",
    title: "Voyant",
    year: "2026",
    status: "Complete",
    version: "1.0",
    heroImage: "assets/projects/voyant-hero.jpg",
    meta: {
      role: "Design Engineer",
      timeline: "1 Month",
      team: "Solo",
      platform: "Next JS"
    },
    overview: {
      heading: "Streamlining luxury hospitality and executive transit bookings",
      body: "Voyant is a high-end conceptual hospitality and transit platform arranging luxury hotel stays, private executive vehicle transfers, and curated regional itineraries. The digital platform redesign focused on projecting absolute authority, organizing complex multi-modal booking flows, and deploying an inline reservation workflow that eliminates booking friction.",
      impact: "Optimizing high-capacity client intake. The layout optimization centered on streamlining client intake for high-capacity bookings. By transitioning static informational pages into real-time, interactive content modules driven by structured component architecture—backed by a resilient multi-state interaction footprint—users can easily select vehicle specifications, review route options, and schedule complex itineraries instantly without structural hitches."
    },
    problem: {
      heading: "Fragmented travel options and slow reservation workflows",
      body: "Traditional travel and transportation portals struggle with clarity. Prospective clients were forced to navigate disjointed specification sheets, opaque vehicle capacities, and indirect inquiry forms for bespoke pricing options. This friction delayed trip scheduling and created administrative overhead for logistics teams handling high-value requests.",
      carouselImages: [
        "assets/projects/voyant-carousel-1.jpg",
        "assets/projects/voyant-carousel-2.jpg",
        "assets/projects/voyant-carousel-3.jpg",
        "assets/projects/voyant-carousel-4.jpg"
      ]
    },
    industryDeepDive: {
      heading: "What I learned",
      body: "Designing for high-end hospitality and executive transit highlighted how crucial it is to balance top-tier aesthetic sophistication with functional transaction logic. Working through multi-tiered scheduling flows—where users seamlessly pair accommodation stays with private transport and bespoke itineraries—reinforced that luxury digital platforms must prioritize absolute clarity and zero-friction execution. Users requesting high-touch services expect a responsive digital experience that mirrors the exclusivity and reliability of the physical service itself, making intuitive state management and responsive component design non-negotiable for high-conversion interfaces."
    },
    explorations: {
      heading: "High-Fidelity Explorations & Layout Architecture",
      body: "Instead of spending time in low-fidelity wireframes, the design process moved directly into high-fidelity component synthesis, responsive CSS grid layouts, and custom interaction logic:",
      bullets: [
        "<strong>Inline Stay & Transfer Engine:</strong> Building a native interaction model flow allowing clients to configure room class, vehicle preferences, and schedule itineraries seamlessly.",
        "<strong>Component-Based Architecture:</strong> Crafting reusable styled sheets and class-systems aligned for slick UI surfaces, optimal performance, and clean framework layout.",
        "<strong>Resilient Navigation Engine:</strong> Designing structural dynamic header components and component states that gracefully handle multi-step user flows.",
        "<strong>Non-Disruptive Data Display:</strong> Implementing dynamic 3D panning methods for vehicle fleet summaries, custom hour cards, and interactive modal overlays."
      ]
    },
    takeaways: {
      heading: "Final Interface & Key Interactions",
      body: "The final design pairs dark high-contrast luxury aesthetics with crisp typography and editorial imagery. The content layout leads with core brand positioning, transitions through a step-by-step deployment protocol, highlights verified vehicle and resort specs, and concludes with an accessible assessment trigger."
    },
    prototypes: [
      {
        title: "Desktop Prototype",
        embedUrl: ""
      },
      {
        title: "Mobile Prototype",
        embedUrl: ""
      }
    ],
    finalSection: {
      heading: "Summary & Key Takeaways",
      body: "This project reinforced that luxury digital experiences rely on speed, structural resilience, and absolute transparency. Replacing multi-step inquiry redirects with a zero-friction, direct-development booking engine boosted user confidence in ordering high-end travel packages while providing the logistics team with pre-qualified journey data."
    }
  },
  {
    id: "solar-and-secure",
    title: "Solar & Secure",
    year: "2026",
    status: "In Progress",
    version: "1.0",
    heroImage: "assets/projects/solar-hero.jpg",
    meta: {
      role: "Design Engineer",
      timeline: "3 Weeks",
      team: "Solo",
      platform: "HTML / CSS / JS / Sanity"
    },
    overview: {
      heading: "Engineering an off-grid resilience platform & site telemetry assessment engine",
      body: "Solar & Secure is an engineering firm specializing in commercial off-grid solar grids, enterprise photovoltaic arrays, and high-capacity energy storage systems (BESS). The digital platform redesign focused on projecting industrial-grade authority, organizing complex technical specifications, and deploying an inline site assessment window that eliminates quote friction.",
      impact: "The layout optimization centered on streamlining client intake for high-capacity installations. By transitioning from static informational pages to a real-time, interactive assessment engine driven by Sanity CMS—backed by a full-suite data system—commercial and residential clients can evaluate capability matrices, review project specs, and schedule technical site telemetry audits instantly without full-page reloads."
    },
    problem: {
      heading: "Fragmented technical data and slow audit scheduling slowed enterprise engagement",
      body: "Traditional solar and security deployment portals struggle with clarity. Prospective clients were forced to navigate dispersed specification sheets, opaque battery storage capacities, and indirect contact forms to get basic feasibility answers. This friction delayed site telemetry scheduling and created administrative overhead for engineering teams handling initial quotes manually.",
      carouselImages: [
        "assets/projects/solar-carousel-1.jpg",
        "assets/projects/solar-carousel-2.jpg",
        "assets/projects/solar-carousel-3.jpg",
        "assets/projects/solar-carousel-4.jpg"
      ]
    },
    industryDeepDive: {
      heading: "What I learned",
      body: "Hands-on experience with technical hardware networks and security platforms gave a zero-barrier edge. Solar and grid-resilience clients aren't just buying solar panels—they are investing in strategic power resilience, asset security, and risk mitigation. The UI needed to reflect industrial-grade precision through sharp typographic hierarchy, dark-mode visual surfaces, and instant interactive feedback."
    },
    explorations: {
      heading: "High-Fidelity Explorations & Layout Architecture",
      body: "Instead of spending time in low-fidelity wireframes, the design phase moved directly into high-fidelity component synthesis, responsive CSS grid layouts, and custom interaction logic:",
      bullets: [
        "<strong>Inline Telemetry & Audit Engine:</strong> Building a native ordering / assessment model flow allowing clients to configure property type, load requirements, and site location seamlessly.",
        "<strong>Component-Based CSS Architecture:</strong> Crafting modular, zero-dependency components using CSS variables, Flexbox, and Grid to achieve 60fps performance without framework bloat.",
        "<strong>Headless CMS & Realtime Pipeline:</strong> Designing Sanity-powered schemas and a hybrid fetching engine structured to keep content cached while gracefully falling back to local states if the CDN responds slowly.",
        "<strong>Non-Disruptive Data Display:</strong> Implementing dynamic BESS sizing matrix tables, interactive service cards, and interactive FAQ accordions."
      ]
    },
    takeaways: {
      heading: "Final Interface & Key Interactions",
      body: "The final design pairs high-tech premium industrial aesthetics with clear telemetry display. The content hierarchy opens with core brand positioning, transitions through a step-by-step deployment protocol, highlights verified installation specs, and concludes with an accessible assessment trigger."
    },
    prototypes: [
      {
        title: "Desktop Prototype",
        embedUrl: ""
      },
      {
        title: "Mobile Prototype",
        embedUrl: ""
      }
    ],
    finalSection: {
      heading: "Summary & Key Takeaways",
      body: "This project reinforced that enterprise technical conversions rely on speed, structural resilience, and absolute process transparency. Replacing multi-page inquiry redirects with a zero-friction, inline assessment engine dropped client contact friction while providing the engineering team with pre-qualified site data."
    }
  }
];