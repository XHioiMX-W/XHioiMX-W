(() => {
  const navLinks = [...document.querySelectorAll('.site-nav a')];
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
    });
  });

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
})();
