/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderSlot, b as renderTemplate, d as renderComponent } from '../chunks/astro/server_hUddXrt_.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://camundaflow.de");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`mkdir -p src/layouts
cat > src/layouts/<meta name="description" content="Camunda Flow – IT usluge & procesna automatizacija">
// src/layouts/Layout.astro
const { title } = Astro.props;
<meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>${title}
    
  
  ${maybeRenderHead()}<body class="bg-gray-950 text-white min-h-screen">
    ${renderSlot($$result, $$slots["default"])} <!-- ovde ide sav sadržaj iz index.astro -->
  
EOF</body></title>`;
}, "/home/sasa/Dev/camundaflow-site/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Camunda Flow \u2013 IT usluge & procesna automatizacija";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="max-w-5xl mx-auto text-center"> <h1 class="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
Camunda Flow
</h1> <p class="text-2xl md:text-4xl mb-12 opacity-90">
Konsultacije • Implementacija • Custom razvoj
</p> <p class="text-xl md:text-2xl mb-12 text-cyan-300">
Camunda BPM • Zeebe • Process Automation • DevOps
</p> <div class="flex flex-col sm:flex-row gap-8 justify-center text-lg"> <a href="mailto:info@camundaflow.io" class="underline hover:text-cyan-400 transition">
info@camundaflow.io
</a> <span class="hidden sm:inline">•</span> <a href="https://linkedin.com/company/camundaflow" class="underline hover:text-cyan-400 transition">
LinkedIn
</a> </div> <p class="mt-16 text-gray-400">Sajt u izradi – uskoro portfolio i kontakt forma</p> </main> ` })}`;
}, "/home/sasa/Dev/camundaflow-site/src/pages/index.astro", void 0);

const $$file = "/home/sasa/Dev/camundaflow-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
