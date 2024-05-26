import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4.12e3e23f.js","_app/immutable/chunks/scheduler.c83dfd02.js","_app/immutable/chunks/index.bdcb1ddf.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.dfdace7a.js","_app/immutable/chunks/Card.636ab42f.js"];
export const stylesheets = [];
export const fonts = [];
