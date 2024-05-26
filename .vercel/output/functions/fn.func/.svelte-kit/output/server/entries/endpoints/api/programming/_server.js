import { j as json } from "../../../../chunks/index.js";
import "fast-xml-parser";
import { a as fetchContent } from "../../../../chunks/fetchContent.js";
const GET = async () => {
  const allProjects = await fetchContent("programming");
  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return json(sortedProjects);
};
export {
  GET
};
