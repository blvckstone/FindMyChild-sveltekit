

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/list/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.c4a49387.js","_app/immutable/chunks/scheduler.ad385dde.js","_app/immutable/chunks/index.0e750d12.js","_app/immutable/chunks/data.dbeff283.js"];
export const stylesheets = ["_app/immutable/assets/3.7dd127ef.css"];
export const fonts = [];
