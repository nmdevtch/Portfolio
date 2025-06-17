// Menu Hambúrguer
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});

// Fade‑in ao rolar
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
document.querySelectorAll('section, .project-card, .skill').forEach(el => {
  observer.observe(el);
});

// Scroll suave pelos links do menu
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    }
  });
});

// Scroll para Projetos via botão
const btnProjects = document.getElementById('scrollToProjects');
btnProjects?.addEventListener('click', () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
});
