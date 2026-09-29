const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Small reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .contact-card, .showcase-card, .cta-inner').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});
