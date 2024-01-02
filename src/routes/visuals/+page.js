export const load = async ({ fetch, params }) => {

    const response = await fetch(`/api/visuals`);
    const photos = await response.json();

    return { photos, title: "Visuals" };
};
