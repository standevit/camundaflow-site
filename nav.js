// nav.js – finalna verzija, radi na svim stranicama, čeka Tailwind, ispravno detektira aktivnu stranicu
document.addEventListener("DOMContentLoaded", () => {
  // Normaliziraj putanju (ukloni index.html, trailing slash, itd.)
  let path = window.location.pathname;
  if (path.endsWith('/index.html') || path === '/index.html') path = '/';
  if (path.endsWith('/')) path = path.slice(0, -1) || '/';
  if (!path) path = '/';

  const isActive = (href) => {
    if (href === '/') return path === '/';
    return path.includes(href.replace('.html', ''));
  };

  const navHTML = `
    <nav class="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        Camunda Flow
      </h1>
      <ul class="flex gap-8 text-lg">
        <li><a href="/" class="nav-link ${isActive('/') ? 'nav-link-active' : ''}">Home</a></li>
        <li><a href="/theorie.html" class="nav-link ${isActive('theorie') ? 'nav-link-active' : ''}">Theorie</a></li>
        <li><a href="/camunda.html" class="nav-link ${isActive('camunda') ? 'nav-link-active' : ''}">Was ist Camunda?</a></li>
        <li><a href="/skalierbarkeit.html" class="nav-link ${isActive('skalierbarkeit') ? 'nav-link-active' : ''}">Skalierbarkeit</a></li>
        <li><a href="/workflows.html" class="nav-link ${isActive('workflows') ? 'nav-link-active' : ''}">Workflows</a></li>
        <li><a href="/leistungen.html" class="nav-link ${isActive('leistungen') ? 'nav-link-active' : ''}">Leistungen</a></li>
      </ul>
    </nav>
  `;

  const insertNav = () => {
    const placeholder = document.getElementById("navigation");
    if (placeholder) {
      placeholder.outerHTML = navHTML;
    }
  };

  // Čekaj da Tailwind učita stilove (max-w-6xl je siguran indikator)
  const waitForTailwind = () => {
    const test = document.querySelector('.max-w-6xl') || document.body;
    const style = getComputedStyle(test);
    if (style.maxWidth && style.maxWidth !== 'none') {
      insertNav();
    } else {
      requestAnimationFrame(waitForTailwind);
    }
  };

  waitForTailwind();
});
