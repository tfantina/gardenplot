import { c as create_ssr_component, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { C as Card } from "../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p data-svelte-h="svelte-1n8poyc">Rough timeline of various projects I&#39;ve worked on.</p> <div class="d-flex flex-column">${each(data.projects, (project) => {
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
