import * as universal from '../entries/pages/programming/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/programming/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/programming/+page.js";
export const imports = ["_app/immutable/nodes/7.a1af6c1f.js","_app/immutable/chunks/scheduler.c83dfd02.js","_app/immutable/chunks/index.bdcb1ddf.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.dfdace7a.js","_app/immutable/chunks/Card.636ab42f.js"];
export const stylesheets = [];
export const fonts = [];
