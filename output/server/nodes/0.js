

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.df78cf8f.js","_app/immutable/chunks/scheduler.ad385dde.js","_app/immutable/chunks/index.0e750d12.js","_app/immutable/chunks/singletons.f17f4bf4.js","_app/immutable/chunks/stores.97c8781b.js"];
export const stylesheets = ["_app/immutable/assets/0.638a26f4.css"];
export const fonts = [];
