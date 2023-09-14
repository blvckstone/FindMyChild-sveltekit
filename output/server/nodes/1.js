

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1fccdeda.js","_app/immutable/chunks/scheduler.ad385dde.js","_app/immutable/chunks/index.0e750d12.js","_app/immutable/chunks/stores.97c8781b.js","_app/immutable/chunks/singletons.f17f4bf4.js"];
export const stylesheets = [];
export const fonts = [];
