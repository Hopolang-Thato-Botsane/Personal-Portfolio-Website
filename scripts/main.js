document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelector("main");
  if (mainContainer) {
    mainContainer.insertAdjacentHTML("beforeend", projectsMarkup);
  }
});