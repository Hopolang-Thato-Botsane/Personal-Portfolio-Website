export function initScrollEngine(siteWrapper, triggerBtn) {
  const heroNode = document.getElementById('hero-node');
  const projectsNode = document.getElementById('projects-node');
  const contactNode = document.getElementById('contact-node');

  const navHome = document.getElementById('nav-home');
  const navCases = document.getElementById('nav-cases');
  const navContact = document.getElementById('nav-contact');

  function updateActiveNav(activeTarget) {
    [navHome, navCases, navContact].forEach(link => {
      if (link) link.classList.remove('active');
    });
    if (activeTarget) activeTarget.classList.add('active');
  }

  function scrollToSection(sectionNode, navLink) {
    if (sectionNode) {
      sectionNode.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      updateActiveNav(navLink);
    }
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => scrollToSection(projectsNode, navCases));
  }
  if (navHome) {
    navHome.addEventListener('click', (e) => { e.preventDefault(); scrollToSection(heroNode, navHome); });
  }
  if (navCases) {
    navCases.addEventListener('click', (e) => { e.preventDefault(); scrollToSection(projectsNode, navCases); });
  }
  if (navContact) {
    navContact.addEventListener('click', (e) => { e.preventDefault(); scrollToSection(contactNode, navContact); });
  }
}