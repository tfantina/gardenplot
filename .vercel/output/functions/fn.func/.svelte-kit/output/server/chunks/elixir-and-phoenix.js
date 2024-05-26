import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Elixir & Phoenix",
  "hero": "",
  "alt": "Elixir and Phoenix Projects",
  "daterange": "Sep 2019 - Present",
  "date": "2023-12-31",
  "tags": ["Elixir", "Phoenix", "LiveView"]
};
const Elixir_and_phoenix = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-12rz3si">Since 2019 at about 80% of the work I’ve done has been Elixir based. Consulting for an agency projects tend to come and go but I’ve been a constant on two big Elixir projects beginning in the fall of 2019 and the summer of
2020 respectively. These are not trivial sites, they interface directly with the clients’ accounting services (in one case a large ERP system) and handles over a million dollars of transactions a day.
I can’t go into client details but I can detail some of my responsibilities.  I took over as the lead developer on both projects in March of 2022 and have continued to actively maintain them. Generally, I am
the sole contributor on these projects working hand in hand with a PM and the client directly to troubleshoot bugs, refine and implement new features. Occasionally, as demand and budgets have allowed another developer has been
added to the project, in such cases I provide a technical orientation and PR reviews.</p> <p data-svelte-h="svelte-1jdi5hx">Both projects are large Phoenix monoliths and is almost entirely LiveViews. A few of the interesting features I’ve built out over the years:</p> <ul data-svelte-h="svelte-1p695u4"><li>Switching a buggy job processor from Exq to Oban</li> <li>Building out a production scheduling system</li> <li>Utilizing LiveView hooks to implement a rich text editor for an email template builder (I’ve written a lot of custom hooks but this one was particularly beefy as it handled file uploads)</li> <li>Optimizing truck fill when adding items to a cart</li> <li>Creating GenServers to check that notifications were sent at a specific time</li> <li>Introducing Mox testing to troubleshoot failed SES mailers</li> <li>Moving way from SES to Mandrill (see above)</li> <li>Introducing LiveView tests to the codebase</li></ul>`;
});
export {
  Elixir_and_phoenix as default,
  metadata
};
