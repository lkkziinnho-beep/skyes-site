(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    }));
  }
  const links = window.SKYES_LINKS || {};
  document.querySelectorAll('[data-link]').forEach(anchor => {
    const key = anchor.dataset.link;
    const url = links[key];
    if (url && /^https?:\/\//i.test(url)) {
      anchor.href = url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    } else {
      anchor.href = '#downloads';
      anchor.addEventListener('click', event => {
        event.preventDefault();
        alert('Este link ainda precisa ser configurado no arquivo config.js do site.');
      });
    }
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();