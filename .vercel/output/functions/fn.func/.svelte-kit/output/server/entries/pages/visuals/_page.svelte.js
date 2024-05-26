import { c as create_ssr_component, d as each, e as escape, a as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p data-svelte-h="svelte-1bkakor">Everyday I try to produce some kind of art, recently this has manifested in the form of taking and editing lots and lots of photos.</p> <p data-svelte-h="svelte-158ubjy">In the future I&#39;ll add some specific categories perhaps to showcase design work or my watercolours but for now I&#39;ve just wired 
up the feed from my Pixelfed account below:</p> ${each(data.photos, (photo) => {
    return `<div class="photo"><h4><!-- HTML_TAG_START -->${photo.title}<!-- HTML_TAG_END --></h4> <div class="photo--content"><!-- HTML_TAG_START -->${photo.content}<!-- HTML_TAG_END --></div> <div class="meta">${escape(new Date(Date.parse(photo.updated)).toLocaleDateString("en-GB", options))}</div> <a${add_attribute("href", photo.link, 0)}>View full post</a> </div>`;
  })}`;
});
export {
  Page as default
};
