import { j as json } from "../../../../chunks/index.js";
import "fast-xml-parser";
import { f as fetchContentByTag, a as fetchContent } from "../../../../chunks/fetchContent.js";
const GET = async ({ url }) => {
  let sortedProjects, tags;
  const tag = url.searchParams.get("tag");
  if (tag) {
    const allProjects = await fetchContentByTag(tag);
    sortedProjects = allProjects.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date);
    });
    const unique = (val, index, array) => {
      return array.indexOf(val) === index;
    };
    tags = sortedProjects.flatMap((proj) => {
      return proj.meta.tags.map((tag2) => tag2.toLowerCase());
    }).filter(unique);
  } else {
    const allProjects = await fetchContent("blog");
    sortedProjects = allProjects.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date);
    });
    const unique = (val, index, array) => {
      return array.indexOf(val) === index;
    };
    tags = sortedProjects.flatMap((proj) => {
      return proj.meta.tags.map((tag2) => tag2.toLowerCase());
    }).filter(unique);
  }
  return json({ content: sortedProjects, tags });
};
export {
  GET
};
