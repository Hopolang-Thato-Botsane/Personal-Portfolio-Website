export function initScrollEngine(siteWrapper, triggerBtn) {
  let isHomeState = true;

  // Cache navigation link elements
  const navHome = document.getElementById('nav-home');
  const navCases = document.getElementById('nav-cases');

  // Input lock engine prevents natural scrolling while locked in a specific state
  function blockScroll(e) {
    if (isHomeState) {
      e.preventDefault();
    }
  }

  window.addEventListener('wheel', blockScroll, { passive: false });
  window.addEventListener('touchmove', blockScroll, { passive: false });

  // ROUTE FUNCTION A: Transition seamlessly into Case Studies view
  function routeToCases() {
    isHomeState = false;
    siteWrapper.classList.remove('home-state');
    siteWrapper.classList.add('cases-state');
    
    if (navHome && navCases) {
      navHome.classList.remove('active');
      navCases.classList.add('active');
    }

    // Release global scroll bounds after the slide finishes animating (0.8s)
    setTimeout(() => {
      window.removeEventListener('wheel', blockScroll);
      window.removeEventListener('touchmove', blockScroll);
    }, 800);
  }

  // ROUTE FUNCTION B: Transition seamlessly back up into Hero view
  function routeToHome() {
    isHomeState = true;
    siteWrapper.classList.remove('cases-state');
    siteWrapper.classList.add('home-state');
    
    if (navHome && navCases) {
      navCases.classList.remove('active');
      navHome.classList.add('active');
    }

    // Re-engage input scrolling restrictions immediately to safeguard the layout
    window.addEventListener('wheel', blockScroll, { passive: false });
    window.addEventListener('touchmove', blockScroll, { passive: false });
  }

  // Bind trigger actions to layout components
  triggerBtn.addEventListener('click', routeToCases);

  if (navCases) {
    navCases.addEventListener('click', (e) => {
      e.preventDefault(); // Stop default browser # anchor jumps
      if (isHomeState) routeToCases();
    });
  }

  if (navHome) {
    navHome.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isHomeState) routeToHome();
    });
  }
}