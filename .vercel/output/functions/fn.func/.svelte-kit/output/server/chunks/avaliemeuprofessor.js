import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Avalie Meu Professor",
  "hero": "src/images/programming/avaliemeuprofessor/hero.png",
  "alt": "AValie Meu Professor",
  "daterange": "Feb 2015 - Jan 2018",
  "date": "2015-09-20",
  "tags": ["Ruby", "Rails"]
};
const Avaliemeuprofessor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-1nk8vti">I served as a co-founder/CTO for a Brazilian based ‘Rate My Professors’ type of website.  We
launched with a few dozen reviews and struggled to gain traction. I learned Ruby and Rails
with this site and it was refreshing to be able to focus 100% on the technical sides of the
business while my friend focused on the business/marketing.</p> <p data-svelte-h="svelte-rvwhms">It was with this project that I realized I’d rather write code than start businesses.</p> <p data-svelte-h="svelte-1s1jcqx">The <a href="https://github.com/tfantina/Avalie-Meu-Professor" rel="nofollow">source code</a> is pretty vanilla.</p>`;
});
export {
  Avaliemeuprofessor as default,
  metadata
};
