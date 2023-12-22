import { base } from '$app/paths';
export const prerender = true;

export function load() {
    return { title: "Travis Fantina", image: `${base}/images/storage/index/hero.jpeg` }
}