// Smooth scroll for nav links
const navLinksAnchors = document.querySelectorAll('.nav-links a');
if (navLinksAnchors && navLinksAnchors.length) {
  navLinksAnchors.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const selector = link.getAttribute('href');
      if (!selector || selector === '#') return;
      const target = document.querySelector(selector);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Simple contact form handling
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.getElementById('message');
    const name = nameEl ? nameEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const message = messageEl ? messageEl.value.trim() : '';

    if (!name || !email || !message) {
      alert('Please fill in all fields!');
      return;
    }

    // basic email regex (not exhaustive)
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      alert('Please provide a valid email address.');
      return;
    }

    alert(`Thanks ${name}! Your message has been sent.`);
    form.reset();
  });
}

// Mobile nav toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('show');
  });
}
