import { initScrollEngine } from './modules/scrollEngine.js';
import { initMobileCarousel } from './modules/carouselEngine.js';

const siteWrapper = document.querySelector('.site-wrapper');
const triggerBtn = document.querySelector('.trigger-transition');
const container = document.querySelector('.project-columns-container');
const cards = document.querySelectorAll('.case-card');

console.log('App initialization targets:', { siteWrapper, triggerBtn, container, cardsCount: cards.length });

if (siteWrapper && triggerBtn) {
  initScrollEngine(siteWrapper, triggerBtn);
} else {
  console.warn('Scroll engine failed to initialize: Missing site-wrapper or trigger-transition in DOM.');
}

if (container && cards.length > 0) {
  initMobileCarousel(container, cards);
}