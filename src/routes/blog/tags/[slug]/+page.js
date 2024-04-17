export const load = async ({ fetch, params }) => {

    const slug = params.slug;
    const response = await fetch(`/api/feed?tag=${slug}`);
    const { content: posts, tags: tags } = await response.json();


    return { posts, tags, title: slug }
};

