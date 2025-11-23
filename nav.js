// nav.js
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;

  const navHTML = `
    <nav class="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Camunda Flow
      </h1>
      <ul class="flex gap-8 text-lg">
        <li><a href="/" class="nav-link ${currentPath === '/' || currentPath === '/index.html' ? 'nav-link-active' : 'hover:text-cyan-400 transition'}">Home</a></li>
        <li><a href="/theorie.html" class="${currentPath.includes('theorie') ? 'nav-link-active' : 'hover:text-cyan-400 transition'}">Theorie</a></li>
        <li><a href="/camunda.html" class="${currentPath.includes('camunda') ? 'nav-link-active' : 'hover:text-cyan-400 transition'}">Was ist Camunda?</a></li>
        <li><a href="/skalierbarkeit.html" class="${currentPath.includes('skalierbarkeit') ? 'nav-link-active' : 'hover:text-cyan-400 transition'}">Skalierbarkeit</a></li>
        <li><a href="/workflows.html" class="${currentPath.includes('workflows') ? 'nav-link-active' : 'hover:text-cyan-400 transition'}">Workflows</a></li>
        <li><a href="/leistungen.html" class="${currentPath.includes('leistungen') ? 'nav-link-active' : 'hover:text-cyan-400 transition'}">Leistungen</a></li>
      </ul>
    </nav>
  `;

  const placeholder = document.getElementById("navigation");
  if (placeholder) {
    placeholder.outerHTML = navHTML;
  }
});
