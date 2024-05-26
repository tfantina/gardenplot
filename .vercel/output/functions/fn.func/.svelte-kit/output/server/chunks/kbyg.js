import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Know Before You Go",
  "hero": "src/images/programming/kbyg/hero.png",
  "alt": "Know Before You Go",
  "daterange": "Apr - Oct 2022",
  "date": "2022-04-01",
  "tags": ["Svelte", "SvelteKit", "GreenSock"]
};
const Kbyg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-1arzxdb">The Know Before You Go program brings avalanche awareness and backcountry safety to classrooms and organizations around the world. Having partnered with Academy Awarding Sherpas Cinemas, KBYG launched a full
rebrand of their course as well as a feature documentary <strong>To the Hills and Back</strong>. I was fully in charge of development for the markeing site.  I worked closely with the lead designer at Objective as well as
the client to refine the vision and bring the site to life.</p> <p data-svelte-h="svelte-uu39kg">Having worked with Svelte on some personal projects I felt that the framework was both mature and robust enough to be used in production. Svelte comes with a lot of handy features out of the box such as data stores,
animations and SSR which made some of the features unique to the project much easier. KBYG featured more animation then I had ever worked with before and there were instances where GreenSock was an absolute
necessity but in most cases I found Svelte’s built in animation library did the trick.</p> <p data-svelte-h="svelte-cdqfxc">The project was finished by the launch date of October 2022 but I have continued to support it as needed.</p>`;
});
export {
  Kbyg as default,
  metadata
};
