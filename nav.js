// nav.js – 100 % pouzdan, čeka da se CSS učita
document.addEventListener("DOMContentLoaded", () => {
  // Čekamo da se Tailwind klase počnu primjenjivati (provjeravamo npr. .max-w-6xl)
  const waitForStyles = () => {
    const testElement = document.querySelector('.max-w-6xl') || document.body;
    const computed = getComputedStyle(testElement);
    
    // Ako je širina body-ja ili nekog elementa već ograničena → CSS je učitan
    if (computed.maxWidth && computed.maxWidth !== 'none') {
      insertNavigation();
    } else {
      requestAnimationFrame(waitForStyles); // čekamo sljedeći frame
    }
  };

  const currentPath = window.location.pathname;

  const insertNavigation = () => {
    const navHTML = `
      <nav class="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Camunda Flow
        </h1>
        <ul class="flex gap-8 text-lg">
          <li><a href="/" class="nav-link ${currentPath === '/' || currentPath === '/index.html' ? 'nav-link-active' : ''}">Home</a></li>
          <li><a href="/theorie.html" class="nav-link ${currentPath.includes('theorie') ? 'nav-link-active' : ''}">Theorie</a></li>
          <li><a href="/camunda.html" class="nav-link ${currentPath.includes('camunda') ? 'nav-link-active' : ''}">Was ist Camunda?</a></li>
          <li><a href="/skalierbarkeit.html" class="nav-link ${currentPath.includes('skalierbarkeit') ? 'nav-link-active' : ''}">Skalierbarkeit</a></li>
          <li><a href="/workflows.html" class="nav-link ${currentPath.includes('workflows') ? 'nav-link-active' : ''}">Workflows</a></li>
          <li><a href="/leistungen.html" class="nav-link ${currentPath.includes('leistungen') ? 'nav-link-active' : ''}">Leistungen</a></li>
        </ul>
      </nav>
    `;

    const placeholder = document.getElementById("navigation");
    if (placeholder) {
      placeholder.outerHTML = navHTML;
    }
  };

  // Pokrećemo čekanje
  waitForStyles();
});
