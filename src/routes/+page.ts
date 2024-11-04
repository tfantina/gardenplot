import { base } from '$app/paths';
import { lastFM, updateTrackListing, fetchBlogPosts } from '$lib/utils'


export const prerender = true;

export async function load() {
    const songs = await lastFM()
    const posts = await fetchBlogPosts()
    // updateTrackListing();
    return { title: "Travis Fantina - Web gardner and caretaker", image: `${base}/images/storage/index/hero.jpeg`, songs: songs, posts: posts }
}



