import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const project = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/blog/til-2024-01-03.md": () => import("../../../../chunks/til-2024-01-03.js") }), `../../../content/blog/${params.slug}.md`);
  const { title, date, daterange, hero, tags } = project.metadata;
  project.metadata;
  const content = project.default;
  return {
    content,
    title,
    date,
    daterange,
    hero,
    tags,
    title
  };
}
export {
  load
};
