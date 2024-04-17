export async function load({ params }) {
    const project = await import(`../../../content/blog/${params.slug}.md`);
    const { title, date, daterange, hero, tags } = project.metadata;
    const meta = project.metadata;

    const content = project.default;
 
    return {
        content,
        title,
        date,
        daterange,
        hero,
        tags,
        title: title, 
    }
}
