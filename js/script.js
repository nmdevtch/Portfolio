// Menu Hamburguer
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});

// Animações ao rolar (Fade In)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('section, .project-card, .skill');
hiddenElements.forEach((el) => observer.observe(el));

// Scroll suave para seção ao clicar nos links do menu
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Fecha o menu hambúrguer após clicar no link (em telas pequenas)
    hamburger.classList.remove('active');
    nav.classList.remove('open');
  });
});

// Scroll para seção de projetos via botão específico
const btnScrollProjects = document.getElementById('scrollToProjects');
if (btnScrollProjects) {
  btnScrollProjects.addEventListener('click', () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
