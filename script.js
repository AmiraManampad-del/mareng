/* ==========================================================================
   PAULO MIGUEL L. DE GUZMAN — PORTFOLIO SCRIPT
   Handles: mobile nav toggle, smooth scroll, active-link tracking,
   scroll-reveal animations, animated skill bars, and contact form feedback.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile navigation toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function closeMenu() {
    navToggle.classList.remove('is-open');
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  /* Close mobile menu after a link is tapped */
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* Close mobile menu on Escape */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- Smooth scroll for in-page links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length <= 1) return; // ignore bare "#"
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- Active navigation link on scroll ---------- */
  const sections = Array.from(document.querySelectorAll('main section[id], main[id]'));
  const navLinkEls = Array.from(document.querySelectorAll('.nav__link'));

  function setActiveLink() {
    const scrollPos = window.scrollY + 120; // offset for fixed nav
    let currentId = sections[0] && sections[0].id;

    for (const section of sections) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    }

    navLinkEls.forEach(link => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('is-active', isActive);
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Scroll reveal animations ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: reveal everything immediately if IntersectionObserver is unsupported
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Animated skill bars ---------- */
  const skillBars = document.querySelectorAll('.skillbar');

  if ('IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const fill = bar.querySelector('.skillbar__fill');
          const level = bar.getAttribute('data-level') || '0';
          fill.style.width = `${level}%`;
          obs.unobserve(bar);
        }
      });
    }, { threshold: 0.4 });

    skillBars.forEach(bar => skillObserver.observe(bar));
  } else {
    skillBars.forEach(bar => {
      const fill = bar.querySelector('.skillbar__fill');
      fill.style.width = `${bar.getAttribute('data-level') || 0}%`;
    });
  }

  /* ---------- Contact form (front-end only placeholder) ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = 'Please fill in all fields before sending.';
      status.style.color = '#B3452F';
      return;
    }

    // NOTE: This form does not send email on its own. Connect it to a
    // service such as Formspree, EmailJS, or a backend endpoint to make
    // it fully functional. See the instructions provided separately.
    status.textContent = 'Thanks! This form is a placeholder — connect it to a form service to receive messages.';
    status.style.color = '#2E7D6B';
    form.reset();
  });

});
