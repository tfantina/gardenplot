import { c as create_ssr_component, a as add_attribute, e as escape, d as each } from "./ssr.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { meta, path } = $$props;
  let { title, content, daterange, tags, hero, alt, date, source } = meta;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  return `<a${add_attribute("href", path, 0)} class="no-underline"><div class="content-link"><div class="content-link--image">${hero ? `<img${add_attribute("src", hero, 0)} alt="${"hehttps://pixelfed.social/p/tfantina/653463191348593627ro thumbnail for " + escape(title, true)}">` : `<div class="content-link--inner" data-svelte-h="svelte-xduk2b"><div class="content-link--gradient"></div></div>`}</div> <div class="content-link--content d-flex flex-column justify-content-center"><h5>${escape(title)}</h5> <div class="meta d-flex flex-row"><div class="d-flex flex-column">${daterange ? `<div>Project Timeline: ${escape(daterange)}</div>` : ``} <div>${escape(new Date(Date.parse(date)).toLocaleDateString("en-GB", options))}</div></div> <div class="content-link--content__tag"><strong data-svelte-h="svelte-94f2ex">Tags:</strong> ${each(tags, (technology) => {
    return `<span class="tag">${escape(technology)}</span>`;
  })}</div></div> <div data-svelte-h="svelte-gp1p0o"></div></div></div></a>`;
});
export {
  Card as C
};
