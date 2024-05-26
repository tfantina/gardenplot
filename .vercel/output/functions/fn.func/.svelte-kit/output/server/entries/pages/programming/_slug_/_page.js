import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const project = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/programming/elixir-and-phoenix.md": () => import("../../../../chunks/elixir-and-phoenix.js"), "../../../content/programming/exq-to-oban.md": () => import("../../../../chunks/exq-to-oban.js"), "../../../content/programming/kbyg.md": () => import("../../../../chunks/kbyg.js"), "../../../content/programming/optconnect.md": () => import("../../../../chunks/optconnect.js"), "../../../content/programming/ses-tests-with-mox.md": () => import("../../../../chunks/ses-tests-with-mox.js"), "../../../content/programming/wild-elements.md": () => import("../../../../chunks/wild-elements.js") }), `../../../content/programming/${params.slug}.md`);
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
