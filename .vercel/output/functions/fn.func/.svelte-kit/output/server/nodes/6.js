import * as universal from '../entries/pages/blog/tags/_slug_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/tags/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/tags/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/6.2d7288f7.js","_app/immutable/chunks/scheduler.c83dfd02.js","_app/immutable/chunks/index.bdcb1ddf.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.dfdace7a.js","_app/immutable/chunks/Card.636ab42f.js"];
export const stylesheets = [];
export const fonts = [];
