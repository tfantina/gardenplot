import { c as create_ssr_component, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { C as Card } from "../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p data-svelte-h="svelte-1vrbu6q">Tales from my professional life as a programmer: a not-comprehensive list of projects that I&#39;ve worked on in the past few years.</p> <p data-svelte-h="svelte-1brkh3g">Most of my programming time is spent working as a 
contractor for <a href="https://objective.dev">Objective Inc</a> in Salt Lake City, UT (I work remotely).
Unless otherwise noted all of these projects were done for them!
Objective is a small agency that works on big projects. We&#39;ve been voted Best in State some half a dozen 
times; clients really like us! I&#39;m happy to be part of a team that solves problems with a variety of 
languages and stacks.  For the most part I work in the Elixir, Ruby and Javascript worlds.</p> <div class="d-flex flex-column">${each(data.projects, (project) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        path: `${base}${project.path}`,
        meta: project.meta
      },
      {},
      {}
    )}`;
  })}</div>`;
});
export {
  Page as default
};
