(() => {
  const navLinks = [...document.querySelectorAll('.site-nav a')];
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (window.lucide) {
    window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } });
  }

  const updateActiveNav = () => {
    const position = window.scrollY + 130;
    let active = sections[0]?.id;

    sections.forEach((section) => {
      if (section.offsetTop <= position) active = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${active}`);
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      window.setTimeout(updateActiveNav, 350);
      if (siteNav?.classList.contains('is-open')) {
        siteNav.classList.remove('is-open');
        menuToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  menuToggle?.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close portfolio navigation' : 'Open portfolio navigation');
    menuToggle.querySelector('[data-lucide]')?.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav?.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.focus();
    }
  });

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
})();
