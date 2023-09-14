

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.dbf91bd0.js","_app/immutable/chunks/scheduler.ad385dde.js","_app/immutable/chunks/index.0e750d12.js","_app/immutable/chunks/data.dbeff283.js"];
export const stylesheets = ["_app/immutable/assets/2.b9baed5e.css"];
export const fonts = [];
