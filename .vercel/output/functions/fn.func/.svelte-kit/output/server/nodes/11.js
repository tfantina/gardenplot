import * as universal from '../entries/pages/visuals/_page.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/visuals/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/visuals/+page.js";
export const imports = ["_app/immutable/nodes/11.f3b48d4b.js","_app/immutable/chunks/scheduler.c83dfd02.js","_app/immutable/chunks/index.bdcb1ddf.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.dfdace7a.js"];
export const stylesheets = [];
export const fonts = [];
