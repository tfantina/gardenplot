import { j as json } from "./index.js";
import { XMLParser } from "fast-xml-parser";
const fetchFromPixelfed = async (type) => {
  const pixelfed_feed = await fetch(`https://pixelfed.social/users/tfantina.atom`).then((res) => res.text()).then((xml) => {
    const parser = new XMLParser();
    let { feed } = parser.parse(xml);
    const entries = feed.entry;
    let parsed = [];
    for (const entry of entries) {
      parsed.push(
        { content: entry.content, updated: new Date(entry.updated), link: entry.id, title: entry.title.substring(0, 120) + "..." }
      );
    }
    return parsed;
  });
  return json(pixelfed_feed);
};
const makeMetaFromPixelfed = (photo) => {
  const hero = photo.content.match(/(?<=src=")[^"]+/g)[0];
  const meta = { title: photo.title, hero, date: photo.updated, tags: ["photography"], source: "pixelfed" };
  return {
    "meta": meta,
    "path": photo.link
  };
};
export {
  fetchFromPixelfed as f,
  makeMetaFromPixelfed as m
};
