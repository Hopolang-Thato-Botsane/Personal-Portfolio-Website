export function initMobileCarousel(container, cards) {
  const observerOptions = {
    root: container,
    rootMargin: '0px -40% 0px -40%', // Targets the strict center 20% viewport zone
    threshold: 0.2
  };

  const intersectionEngine = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-centered');
      } else {
        entry.target.classList.remove('is-centered');
      }
    });
  }, observerOptions);

  cards.forEach(card => intersectionEngine.observe(card));
}