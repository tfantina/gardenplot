import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../../../chunks/ssr.js";
import { b as base } from "../../../../../chunks/paths.js";
import { C as Card } from "../../../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="d-flex flex-column"><div class="d-flex align-center">All posts tagged with: <div class="tag mx-1">${escape(data.title)}</div></div> ${each(data.posts, (post) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        path: `${base}${post.path}`,
        meta: post.meta
      },
      {},
      {}
    )}`;
  })}</div>`;
});
export {
  Page as default
};
