const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.term-button').forEach((button) => {
  button.addEventListener('click', () => {
    const contentId = button.getAttribute('aria-controls');
    const content = contentId ? document.getElementById(contentId) : null;

    if (!content) {
      return;
    }

    const archive = button.getAttribute('data-term-archive');
    const buttons = archive
      ? document.querySelectorAll(`.term-button[data-term-archive="${archive}"]`)
      : [button];

    buttons.forEach((termButton) => {
      const isSelected = termButton === button;
      const termContentId = termButton.getAttribute('aria-controls');
      const termContent = termContentId ? document.getElementById(termContentId) : null;

      termButton.setAttribute('aria-expanded', String(isSelected));
      if (termContent) {
        termContent.hidden = !isSelected;
      }
    });
  });
});
