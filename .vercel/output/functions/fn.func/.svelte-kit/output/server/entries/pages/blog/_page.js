const load = async ({ fetch, params }) => {
  const response = await fetch(`/api/feed`);
  const { content: posts, tags } = await response.json();
  return { posts, tags, title: "Unified Feed" };
};
export {
  load
};
