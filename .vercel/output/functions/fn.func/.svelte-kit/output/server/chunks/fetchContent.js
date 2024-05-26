import { f as fetchFromPixelfed, m as makeMetaFromPixelfed } from "./externalApis.js";
const fetchContent = async (type) => {
  let allFiles;
  switch (type) {
    case "programming":
      allFiles = /* @__PURE__ */ Object.assign({ "/src/content/programming/elixir-and-phoenix.md": () => import("./elixir-and-phoenix.js"), "/src/content/programming/exq-to-oban.md": () => import("./exq-to-oban.js"), "/src/content/programming/kbyg.md": () => import("./kbyg.js"), "/src/content/programming/optconnect.md": () => import("./optconnect.js"), "/src/content/programming/ses-tests-with-mox.md": () => import("./ses-tests-with-mox.js"), "/src/content/programming/wild-elements.md": () => import("./wild-elements.js") });
      break;
    case "projects":
      allFiles = /* @__PURE__ */ Object.assign({ "/src/content/projects/avaliemeuprofessor.md": () => import("./avaliemeuprofessor.js"), "/src/content/projects/eon.md": () => import("./eon.js") });
      break;
    case "blog":
      return fetchAll();
    default:
      return fetchAll();
  }
  const allContent = Object.entries(allFiles);
  const content = await resolver(allContent);
  console.log(content);
  return content;
};
const fetchContentByTag = async (tag) => {
  const posts = await fetchAll();
  const allContent = posts.filter((post) => includedTag(post, tag));
  return allContent;
};
const includedTag = (post, tag) => {
  return post.meta.tags.map((str) => str.toLowerCase()).includes(tag);
};
const resolver = async (allContent) => {
  return Promise.all(
    allContent.map(async ([path, resolver2]) => {
      const { metadata } = await resolver2();
      const posted = await resolver2();
      posted.default.render();
      const postPath = path.slice(12, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
};
const fetchAll = async () => {
  const posts = Object.entries(/* @__PURE__ */ Object.assign({ "/src/content/blog/til-2024-01-03.md": () => import("./til-2024-01-03.js") }));
  const post_meta = await resolver(posts);
  const pixelfed_feed = await fetchFromPixelfed();
  const photos = await pixelfed_feed.json();
  const photo_meta = photos.map((photo) => {
    return makeMetaFromPixelfed(photo);
  });
  const allContent = post_meta.concat(photo_meta);
  return allContent;
};
const fetchForRSS = async (tag) => {
  if (tag) {
    return true;
  }
  const posts = Object.entries(/* @__PURE__ */ Object.assign({ "/src/content/blog/til-2024-01-03.md": () => import("./til-2024-01-03.js") }));
  const posts_and_content = await rssResolver(posts);
  const pixelfed_feed = await fetchFromPixelfed();
  const photos = await pixelfed_feed.json();
  const photo_meta = photos.map((photo) => {
    return makeMetaFromPixelfed(photo);
  });
  return posts_and_content.concat(photo_meta).sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
};
const rssResolver = async (posts) => {
  return Promise.all(
    posts.map(async ([path, resolver2]) => {
      const resolved = await resolver2();
      const postPath = path.slice(12, -3);
      return {
        meta: resolved.metadata,
        path: postPath,
        content: resolved.default.render().html
      };
    })
  );
};
export {
  fetchContent as a,
  fetchForRSS as b,
  fetchContentByTag as f
};
