export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4a8f9d89.js","app":"_app/immutable/entry/app.13edb1a6.js","imports":["_app/immutable/entry/start.4a8f9d89.js","_app/immutable/chunks/scheduler.ad385dde.js","_app/immutable/chunks/singletons.f17f4bf4.js","_app/immutable/entry/app.13edb1a6.js","_app/immutable/chunks/scheduler.ad385dde.js","_app/immutable/chunks/index.0e750d12.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/list",
				pattern: /^\/list\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
