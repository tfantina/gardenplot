

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fe224bd4.js","_app/immutable/chunks/scheduler.c83dfd02.js","_app/immutable/chunks/index.bdcb1ddf.js","_app/immutable/chunks/stores.14de990c.js","_app/immutable/chunks/singletons.0865b020.js","_app/immutable/chunks/paths.dfdace7a.js"];
export const stylesheets = [];
export const fonts = [];
