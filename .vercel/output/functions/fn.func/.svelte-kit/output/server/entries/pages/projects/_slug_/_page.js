import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const project = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/projects/avaliemeuprofessor.md": () => import("../../../../chunks/avaliemeuprofessor.js"), "../../../content/projects/eon.md": () => import("../../../../chunks/eon.js") }), `../../../content/projects/${params.slug}.md`);
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
    title,
    image: hero
  };
}
export {
  load
};
