import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { C as Card } from "../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="d-flex flex-column"><p data-svelte-h="svelte-1ru8sf3">Something akin to a blog. Thoughts, photos, and relevant updates are collected here, click a tag to narrow by interest.</p> <div class="d-flex flex-wrap mb-4">${each(data.tags, (tag) => {
    return `<div class="tag mx-1"><a href="${"/blog/tags/" + escape(tag, true)}">${escape(tag)}</a> </div>`;
  })}</div> ${each(data.posts, (post) => {
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
