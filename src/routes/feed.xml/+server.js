import { fetchForRSS } from '$lib/utils';

const siteURL = "https://travisfantina.com";
const siteTitle = "The Web Garden of Travis Fantina"
const siteDescription = "A collection of my projects and ideas"

export const prerender = true;

export const GET = async () => {
    const allPosts = await fetchForRSS();
    const posts = allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });

    const body = render(posts);

    const options = {
        headers: {
            'Chache-Control': 'max-age=0, s-maxage=3600',
            'Content-Type': 'application/xml'
        }
    };

    return new Response(body, options);
}

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>${siteTitle}</title>
        <description>${siteDescription}</description>
        <language>en</language>
        <link>${siteURL}</link>
        ${posts.map((post) => 
    `
            <item>
                <title>${post.meta.title}</title>
                <link>${siteURL}/blog/${post.path}</link>
                <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
                <guid>${siteURL}/blog/${post.path}</guid>
                <description>
                    <![CDATA[${post.content || `<img src="${post.meta.hero}" alt="${post.meta.title} - photo" />`}]]>
                </description>
            </item>
       `).join('')}
    </channel>
</rss>

`