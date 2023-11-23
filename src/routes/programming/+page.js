export const load = async ({ fetch }) => {
    const response = await fetch(`/api/programming`);
    const projects = await response.json();

    return { projects, title: "Programming Projects" };
};