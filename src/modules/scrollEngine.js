export function initScrollEngine(siteWrapper, triggerBtn) {
  let isHomeState = true;

  const navHome = document.getElementById('nav-home');
  const navCases = document.getElementById('nav-cases');

  function blockScroll(e) {
    if (isHomeState) {
      e.preventDefault();
    }
  }

  window.addEventListener('wheel', blockScroll, { passive: false });
  window.addEventListener('touchmove', blockScroll, { passive: false });

  function routeToCases() {
    isHomeState = false;
    siteWrapper.classList.remove('home-state');
    siteWrapper.classList.add('cases-state');
    
    if (navHome && navCases) {
      navHome.classList.remove('active');
      navCases.classList.add('active');
    }

    setTimeout(() => {
      window.removeEventListener('wheel', blockScroll);
      window.removeEventListener('touchmove', blockScroll);
    }, 800);
  }

  function routeToHome() {
    isHomeState = true;
    siteWrapper.classList.remove('cases-state');
    siteWrapper.classList.add('home-state');
    
    if (navHome && navCases) {
      navCases.classList.remove('active');
      navHome.classList.add('active');
    }

    window.addEventListener('wheel', blockScroll, { passive: false });
    window.addEventListener('touchmove', blockScroll, { passive: false });
  }

  triggerBtn.addEventListener('click', routeToCases);

  if (navCases) {
    navCases.addEventListener('click', (e) => {
      e.preventDefault();
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