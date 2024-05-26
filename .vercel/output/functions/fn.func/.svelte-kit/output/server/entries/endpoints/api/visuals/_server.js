import { f as fetchFromPixelfed } from "../../../../chunks/externalApis.js";
import "../../../../chunks/index.js";
import "fast-xml-parser";
const GET = async () => {
  const pixelfed_feed = await fetchFromPixelfed();
  return pixelfed_feed;
};
export {
  GET
};
