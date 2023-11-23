export async function load({ params }) {
    const project = await import(`../../../content/programming/${params.slug}.md`);
    const { title, date, daterange, hero, technologies } = project.metadata;
    const meta = project.metadata;

    const content = project.default;
 
    return {
        content,
        title,
        date,
        daterange,
        hero,
        technologies,
        title: title, 
    }
}
