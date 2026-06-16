import { projectData } from "./projectsData.js";

const stage = document.querySelector('.viewport-stage');
const navCells = document.querySelectorAll('.nav-cell');
const globalReset = document.getElementById('global-reset');
const caseBg = document.getElementById('project-bg-canvas');
const caseTags = document.getElementById('dynamic-tags');
const caseTitle = document.getElementById('dynamic-title');
const caseDesc = document.getElementById('dynamic-description');
const linkLive = document.getElementById('link-live');
const linkDesign = document.getElementById('link-design');
const linkCode = document.getElementById('link-code');

let activeProjectKey = null;

function injectProjectContent(key) {
    const data = projectData[key];
    if (!data) return;
    
    caseTitle.textContent = data.title;
    caseTags.textContent = data.tags;
    caseDesc.textContent = data.description;
    caseBg.style.backgroundImage = `url('${data.bgImage}')`;
    linkLive.href = data.live;
    linkDesign.href = data.design;
    linkCode.href = data.code;
}

navCells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        const projectKey = cell.dataset.project;
        if (stage.classList.contains('viewing-project')) {
            injectProjectContent(projectKey);
            navCells.forEach(c => c.classList.remove('is-active'));
            cell.classList.add('is-active');
        } else {
            cell.classList.add('is-hovered');
        }
    });

    cell.addEventListener('mouseleave', () => {
        cell.classList.remove('is-hovered');
        if (stage.classList.contains('viewing-project') && activeProjectKey) {
            injectProjectContent(activeProjectKey);
            navCells.forEach(c => {
                c.classList.remove('is-active');
                if (c.dataset.project === activeProjectKey) c.classList.add('is-active');
            });
        }
    });

    cell.addEventListener('click', () => {
        activeProjectKey = cell.dataset.project;
        
        injectProjectContent(activeProjectKey);
        navCells.forEach(c => c.classList.remove('is-active'));
        cell.classList.add('is-active');
        stage.classList.add('viewing-project');
        document.getElementById('case-study-stage').setAttribute('aria-hidden', 'false');
    });
});

globalReset.addEventListener('click', () => {
    activeProjectKey = null;
    stage.classList.remove('viewing-project');
    navCells.forEach(c => c.classList.remove('is-active', 'is-hovered'));
    document.getElementById('case-study-stage').setAttribute('aria-hidden', 'true');
});