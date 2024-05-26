import * as universal from '../entries/pages/projects/_slug_/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/10.08f06a7a.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/dynamic-import-helper.be004503.js","_app/immutable/chunks/scheduler.c83dfd02.js","_app/immutable/chunks/index.bdcb1ddf.js","_app/immutable/chunks/paths.dfdace7a.js"];
export const stylesheets = ["_app/immutable/assets/Nav.1642b795.css"];
export const fonts = [];
