import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "OptConnect",
  "hero": "src/images/programming/optconnect/hero.png",
  "alt": "OptConnect",
  "daterange": "Jul 2020 - Dec 2020",
  "date": "2020-07-01",
  "tags": ["CraftCMS", "Twig"]
};
const Optconnect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-vjh8b">I built Optconnect’s Marketing site with Craft, an elegant and opinionated alternative to WordPress. Over the
years I’ve been able to work on several different Craft projects. The ecosystem is noticeably smaller than
WordPress (as to be expected), but in my experience the sites are easier to setup, manage and troubleshoot.
Craft is a bit more opinionated, you won’t find any plugins to reskin your entire admin panel, but once you
know it you can jump into any Craft instance and be up and running in no time.</p> <p data-svelte-h="svelte-1a7sqff">Over the years I’ve continued to offer support and updates to OptConnect as needed.</p>`;
});
export {
  Optconnect as default,
  metadata
};
