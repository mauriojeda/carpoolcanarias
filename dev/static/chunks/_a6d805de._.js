(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/map-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoutesMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$map$2d$gl$2f$dist$2f$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-map-gl/dist/mapbox.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const MAPBOX_TOKEN = ("TURBOPACK compile-time value", "pk.eyJ1IjoibWF1cmlvamVkYSIsImEiOiJjbG5uMG9jMzEwMWk2MnFtbjRxbDB1MTRoIn0.xagJkDt94ClTWwJF6DxsPA");
function RoutesMap(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "79eb58fc85a3469ad4d37e7594bb7967c4bec919f051773026b6e8df230e359d") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79eb58fc85a3469ad4d37e7594bb7967c4bec919f051773026b6e8df230e359d";
    }
    const { routes } = t0;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let t1;
    if ($[2] !== routes) {
        t1 = routes?.filter(_RoutesMapAnonymous).map(_RoutesMapAnonymous2) || [];
        $[2] = routes;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = {
            type: "FeatureCollection",
            features: t1
        };
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const geojson = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            longitude: -15.5,
            latitude: 28.3,
            zoom: 7.5
        };
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationControl"], {
            position: "top-right"
        }, void 0, false, {
            fileName: "[project]/components/map-view.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
            id: "route-layer",
            type: "line",
            layout: {
                "line-join": "round",
                "line-cap": "round"
            },
            paint: {
                "line-color": "#2563eb",
                "line-width": 5,
                "line-opacity": 0.8
            }
        }, void 0, false, {
            fileName: "[project]/components/map-view.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== geojson) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Source"], {
            id: "route-source",
            type: "geojson",
            data: geojson,
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/map-view.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[9] = geojson;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== routes) {
        t7 = routes?.map(_RoutesMapAnonymous3);
        $[11] = routes;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t6 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                initialViewState: t3,
                mapStyle: "mapbox://styles/mapbox/streets-v12",
                mapboxAccessToken: MAPBOX_TOKEN,
                children: [
                    t4,
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 100,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/map-view.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
}
_c = RoutesMap;
function _RoutesMapAnonymous3(route_0) {
    const start = route_0.origin_geo?.coordinates;
    const end = route_0.destination_geo?.coordinates;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            start && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                longitude: start[0],
                latitude: start[1],
                anchor: "bottom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-white px-2 py-0.5 rounded shadow text-[10px] font-bold border opacity-0 group-hover:opacity-100 transition-opacity",
                            children: route_0.origin_name
                        }, void 0, false, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 112,
                            columnNumber: 168
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl drop-shadow-md cursor-pointer",
                            children: "📍"
                        }, void 0, false, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 112,
                            columnNumber: 332
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/map-view.tsx",
                    lineNumber: 112,
                    columnNumber: 118
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 112,
                columnNumber: 53
            }, this),
            end && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                longitude: end[0],
                latitude: end[1],
                anchor: "bottom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-black text-white px-2 py-0.5 rounded shadow text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity",
                            children: route_0.destination_name
                        }, void 0, false, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 112,
                            columnNumber: 531
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl drop-shadow-md cursor-pointer",
                            children: "🏁"
                        }, void 0, false, {
                            fileName: "[project]/components/map-view.tsx",
                            lineNumber: 112,
                            columnNumber: 704
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/map-view.tsx",
                    lineNumber: 112,
                    columnNumber: 481
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/map-view.tsx",
                lineNumber: 112,
                columnNumber: 420
            }, this)
        ]
    }, route_0.id, true, {
        fileName: "[project]/components/map-view.tsx",
        lineNumber: 112,
        columnNumber: 10
    }, this);
}
function _RoutesMapAnonymous2(route) {
    return {
        type: "Feature",
        properties: {
            id: route.id
        },
        geometry: route.route_line_geo
    };
}
function _RoutesMapAnonymous(r) {
    return r.route_line_geo;
}
var _c;
__turbopack_context__.k.register(_c, "RoutesMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/routes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoutesListPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map-view.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
async function fetchAllRoutes() {
    const { data: routes, error } = await supabase.from('routes').select('id, origin_name, destination_name, departure_time, days_of_week, seats_available, price_per_seat, active, created_at, driver_id').eq('active', true).order('departure_time', {
        ascending: true
    });
    if (error || !routes || routes.length === 0) return [];
    const driverIds = [
        ...new Set(routes.map((r)=>r.driver_id))
    ];
    const { data: profiles } = await supabase.from('profiles').select('id, full_name, avatar_url').in('id', driverIds);
    const routesWithGeo = await Promise.all(routes.map(async (route)=>{
        const { data: geoData } = await supabase.rpc('get_route_geojson', {
            route_id: route.id
        });
        return {
            ...route,
            profiles: (profiles ?? []).find((p)=>p.id === route.driver_id) ?? null,
            origin_geo: geoData?.origin_geo ?? null,
            destination_geo: geoData?.destination_geo ?? null,
            route_line_geo: geoData?.route_line_geo ?? null
        };
    }));
    return routesWithGeo;
}
const WEEK_DAYS = [
    {
        value: 1,
        label: 'L'
    },
    {
        value: 2,
        label: 'M'
    },
    {
        value: 3,
        label: 'X'
    },
    {
        value: 4,
        label: 'J'
    },
    {
        value: 5,
        label: 'V'
    },
    {
        value: 6,
        label: 'S'
    },
    {
        value: 7,
        label: 'D'
    }
];
function RoutesListPage() {
    _s();
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredRoutes, setFilteredRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchOriginName, setSearchOriginName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchDestName, setSearchDestName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchTime, setSearchTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [originSuggestions, setOriginSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [destSuggestions, setDestSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showOriginSuggestions, setShowOriginSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDestSuggestions, setShowDestSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const MAPBOX_TOKEN = ("TURBOPACK compile-time value", "pk.eyJ1IjoibWF1cmlvamVkYSIsImEiOiJjbG5uMG9jMzEwMWk2MnFtbjRxbDB1MTRoIn0.xagJkDt94ClTWwJF6DxsPA");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoutesListPage.useEffect": ()=>{
            fetchAllRoutes().then({
                "RoutesListPage.useEffect": (data)=>{
                    setRoutes(data);
                    setFilteredRoutes(data);
                    setLoading(false);
                }
            }["RoutesListPage.useEffect"]);
        }
    }["RoutesListPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoutesListPage.useEffect": ()=>{
            filterRoutes();
        }
    }["RoutesListPage.useEffect"], [
        routes,
        searchOriginName,
        searchDestName,
        searchTime
    ]);
    const searchMapbox = async (query, type)=>{
        if (query.length < 3) {
            type === 'origin' ? setOriginSuggestions([]) : setDestSuggestions([]);
            return;
        }
        const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?country=ES&proximity=-15.5,28.3&bbox=-18.5,27.5,-13.0,29.5&access_token=${MAPBOX_TOKEN}`);
        const data_0 = await res.json();
        if (type === 'origin') {
            setOriginSuggestions(data_0.features || []);
            setShowOriginSuggestions(true);
        } else {
            setDestSuggestions(data_0.features || []);
            setShowDestSuggestions(true);
        }
    };
    const clearSearch = ()=>{
        setSearchOriginName('');
        setSearchDestName('');
        setSearchTime('');
        setOriginSuggestions([]);
        setDestSuggestions([]);
        setShowOriginSuggestions(false);
        setShowDestSuggestions(false);
        setFilteredRoutes(routes);
    };
    function timeToMinutes(t) {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + m;
    }
    function filterRoutes() {
        if (!searchOriginName && !searchDestName && !searchTime) {
            setFilteredRoutes(routes);
            return;
        }
        setFilteredRoutes(routes.filter((r)=>{
            const o = !searchOriginName || r.origin_name?.toLowerCase().includes(searchOriginName.toLowerCase());
            const d = !searchDestName || r.destination_name?.toLowerCase().includes(searchDestName.toLowerCase());
            const t_0 = !searchTime || Math.abs(timeToMinutes(searchTime) - timeToMinutes(r.departure_time)) <= 30;
            return o && d && t_0;
        }));
    }
    const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto px-4 py-8 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-800",
                            children: "Rutas en Canarias"
                        }, void 0, false, {
                            fileName: "[project]/app/routes/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 mt-1",
                            children: "Encuentra tu próximo viaje compartido"
                        }, void 0, false, {
                            fileName: "[project]/app/routes/page.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/routes/page.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/routes/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-bold text-gray-400 uppercase tracking-wide mb-4",
                        children: "🔍 Buscar rutas"
                    }, void 0, false, {
                        fileName: "[project]/app/routes/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5",
                                        children: "📍 Desde"
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchOriginName,
                                        placeholder: "Ej: Las Palmas...",
                                        className: inputCls,
                                        onChange: (e)=>{
                                            setSearchOriginName(e.target.value);
                                            searchMapbox(e.target.value, 'origin');
                                        },
                                        onFocus: ()=>originSuggestions.length > 0 && setShowOriginSuggestions(true),
                                        onBlur: ()=>setTimeout(()=>setShowOriginSuggestions(false), 200)
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    showOriginSuggestions && originSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto",
                                        children: originSuggestions.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseDown: (e_0)=>{
                                                    e_0.preventDefault();
                                                    setSearchOriginName(s.place_name);
                                                    setShowOriginSuggestions(false);
                                                },
                                                className: "px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-800",
                                                children: s.place_name
                                            }, i, false, {
                                                fileName: "[project]/app/routes/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 50
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 71
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/routes/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5",
                                        children: "🎯 Hacia"
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchDestName,
                                        placeholder: "Ej: Agaete...",
                                        className: inputCls,
                                        onChange: (e_1)=>{
                                            setSearchDestName(e_1.target.value);
                                            searchMapbox(e_1.target.value, 'dest');
                                        },
                                        onFocus: ()=>destSuggestions.length > 0 && setShowDestSuggestions(true),
                                        onBlur: ()=>setTimeout(()=>setShowDestSuggestions(false), 200)
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    showDestSuggestions && destSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto",
                                        children: destSuggestions.map((s_0, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseDown: (e_2)=>{
                                                    e_2.preventDefault();
                                                    setSearchDestName(s_0.place_name);
                                                    setShowDestSuggestions(false);
                                                },
                                                className: "px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-800",
                                                children: s_0.place_name
                                            }, i_0, false, {
                                                fileName: "[project]/app/routes/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 52
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 67
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/routes/page.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5",
                                        children: "🕒 Hora (±30 min)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: searchTime,
                                        onChange: (e_3)=>setSearchTime(e_3.target.value),
                                        className: inputCls
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/routes/page.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/routes/page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    (searchOriginName || searchDestName || searchTime) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-gray-800",
                                        children: filteredRoutes.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 50
                                    }, this),
                                    " ",
                                    filteredRoutes.length === 1 ? 'ruta encontrada' : 'rutas encontradas'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/routes/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearSearch,
                                className: "text-sm text-blue-600 hover:text-blue-800 font-medium transition",
                                children: "✕ Limpiar"
                            }, void 0, false, {
                                fileName: "[project]/app/routes/page.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/routes/page.tsx",
                        lineNumber: 180,
                        columnNumber: 64
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/routes/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            !loading && filteredRoutes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-2 shadow-sm border border-gray-200 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[400px] w-full relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        routes: filteredRoutes
                    }, void 0, false, {
                        fileName: "[project]/app/routes/page.tsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/routes/page.tsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/routes/page.tsx",
                lineNumber: 187,
                columnNumber: 49
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/app/routes/page.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "Cargando rutas..."
                        }, void 0, false, {
                            fileName: "[project]/app/routes/page.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/routes/page.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/routes/page.tsx",
                lineNumber: 194,
                columnNumber: 18
            }, this) : filteredRoutes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-2xl text-center py-16 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-4xl mb-3",
                        children: "🗺️"
                    }, void 0, false, {
                        fileName: "[project]/app/routes/page.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 font-semibold",
                        children: searchOriginName || searchDestName || searchTime ? 'No se encontraron rutas con esos filtros' : 'No hay rutas publicadas. ¡Sé el primero!'
                    }, void 0, false, {
                        fileName: "[project]/app/routes/page.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    (searchOriginName || searchDestName || searchTime) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearSearch,
                        className: "mt-3 text-blue-600 hover:text-blue-800 text-sm underline transition",
                        children: "Ver todas las rutas"
                    }, void 0, false, {
                        fileName: "[project]/app/routes/page.tsx",
                        lineNumber: 202,
                        columnNumber: 66
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/routes/page.tsx",
                lineNumber: 199,
                columnNumber: 48
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                children: filteredRoutes.map((route)=>{
                    const days = [
                        ...route.days_of_week ?? []
                    ].sort((a, b)=>a - b);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-blue-200 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    route.profiles?.avatar_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: route.profiles.avatar_url,
                                        alt: "",
                                        className: "w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 49
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold",
                                        children: route.profiles?.full_name?.charAt(0) ?? '?'
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 167
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-gray-800 text-sm",
                                                children: route.profiles?.full_name ?? 'Conductor'
                                            }, void 0, false, {
                                                fileName: "[project]/app/routes/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-blue-500 font-bold uppercase tracking-wider",
                                                children: "Conductor"
                                            }, void 0, false, {
                                                fileName: "[project]/app/routes/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/routes/page.tsx",
                                lineNumber: 209,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/app/routes/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-gray-400 font-bold uppercase",
                                                        children: "Origen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/routes/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 26
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-800 font-semibold text-sm",
                                                        children: route.origin_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/routes/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 97
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/routes/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🏁"
                                            }, void 0, false, {
                                                fileName: "[project]/app/routes/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-gray-400 font-bold uppercase",
                                                        children: "Destino"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/routes/page.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 26
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-800 font-semibold text-sm",
                                                        children: route.destination_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/routes/page.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 98
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/routes/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/routes/page.tsx",
                                lineNumber: 218,
                                columnNumber: 17
                            }, this),
                            days.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 mb-3",
                                children: WEEK_DAYS.map((d_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center ${days.includes(d_0.value) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`,
                                        children: d_0.label
                                    }, d_0.value, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 43
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/routes/page.tsx",
                                lineNumber: 230,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center border-t border-gray-100 pt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-black text-gray-800",
                                                children: route.departure_time?.substring(0, 5)
                                            }, void 0, false, {
                                                fileName: "[project]/app/routes/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-gray-400 font-bold uppercase",
                                                children: "Salida"
                                            }, void 0, false, {
                                                fileName: "[project]/app/routes/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: route.price_per_seat != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-bold text-blue-600",
                                                    children: [
                                                        route.price_per_seat,
                                                        "€"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/routes/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 55
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-gray-400 font-bold uppercase",
                                                    children: "Por plaza"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/routes/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 129
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-bold text-green-600",
                                                    children: "Gratis"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/routes/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 211
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-gray-400 font-bold uppercase",
                                                    children: "Sin coste"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/routes/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 269
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/routes/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/routes/page.tsx",
                                lineNumber: 235,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/routes/${route.id}`,
                                className: "mt-4 block w-full text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition shadow-sm",
                                children: "Ver detalles →"
                            }, void 0, false, {
                                fileName: "[project]/app/routes/page.tsx",
                                lineNumber: 245,
                                columnNumber: 17
                            }, this)
                        ]
                    }, route.id, true, {
                        fileName: "[project]/app/routes/page.tsx",
                        lineNumber: 206,
                        columnNumber: 16
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/routes/page.tsx",
                lineNumber: 203,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/routes/page.tsx",
        lineNumber: 126,
        columnNumber: 10
    }, this);
}
_s(RoutesListPage, "PTw6R7Bapw/fJmP/fbarL+rYJYs=");
_c = RoutesListPage;
var _c;
__turbopack_context__.k.register(_c, "RoutesListPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-map.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapProvider",
    ()=>MapProvider,
    "MountedMapsContext",
    ()=>MountedMapsContext,
    "useMap",
    ()=>useMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript)");
;
;
;
const MountedMapsContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const MapProvider = (props)=>{
    const [maps, setMaps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const onMapMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapProvider.useCallback[onMapMount]": (map, id = 'default')=>{
            setMaps({
                "MapProvider.useCallback[onMapMount]": (currMaps)=>{
                    if (id === 'current') {
                        throw new Error("'current' cannot be used as map id");
                    }
                    if (currMaps[id]) {
                        throw new Error(`Multiple maps with the same id: ${id}`);
                    }
                    return {
                        ...currMaps,
                        [id]: map
                    };
                }
            }["MapProvider.useCallback[onMapMount]"]);
        }
    }["MapProvider.useCallback[onMapMount]"], []);
    const onMapUnmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapProvider.useCallback[onMapUnmount]": (id = 'default')=>{
            setMaps({
                "MapProvider.useCallback[onMapUnmount]": (currMaps)=>{
                    if (currMaps[id]) {
                        const nextMaps = {
                            ...currMaps
                        };
                        delete nextMaps[id];
                        return nextMaps;
                    }
                    return currMaps;
                }
            }["MapProvider.useCallback[onMapUnmount]"]);
        }
    }["MapProvider.useCallback[onMapUnmount]"], []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MountedMapsContext.Provider, {
        value: {
            maps,
            onMapMount,
            onMapUnmount
        }
    }, props.children);
};
function useMap() {
    const maps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MountedMapsContext)?.maps;
    const currentMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]);
    const mapsWithCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMap.useMemo[mapsWithCurrent]": ()=>{
            return {
                ...maps,
                current: currentMap?.map
            };
        }
    }["useMap.useMemo[mapsWithCurrent]"], [
        maps,
        currentMap
    ]);
    return mapsWithCurrent;
} //# sourceMappingURL=use-map.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/utils/transform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Capture a transform's current state
 * @param transform
 * @returns descriptor of the view state
 */ __turbopack_context__.s([
    "applyViewStateToTransform",
    ()=>applyViewStateToTransform,
    "compareViewStateWithTransform",
    ()=>compareViewStateWithTransform,
    "isViewStateControlled",
    ()=>isViewStateControlled,
    "transformToViewState",
    ()=>transformToViewState
]);
function transformToViewState(tr) {
    return {
        longitude: tr.center.lng,
        latitude: tr.center.lat,
        zoom: tr._seaLevelZoom ?? tr.zoom,
        pitch: tr.pitch,
        bearing: tr.bearing,
        padding: tr.padding,
        elevation: tr._centerAltitude
    };
}
function isViewStateControlled(v) {
    return Number.isFinite(v.longitude) || Number.isFinite(v.latitude) || Number.isFinite(v.zoom) || Number.isFinite(v.pitch) || Number.isFinite(v.bearing);
}
function compareViewStateWithTransform(tr, v) {
    if (Number.isFinite(v.longitude) && tr.center.lng !== v.longitude) {
        return true;
    }
    if (Number.isFinite(v.latitude) && tr.center.lat !== v.latitude) {
        return true;
    }
    if (Number.isFinite(v.bearing) && tr.bearing !== v.bearing) {
        return true;
    }
    if (Number.isFinite(v.pitch) && tr.pitch !== v.pitch) {
        return true;
    }
    if (Number.isFinite(v.zoom) && (tr._seaLevelZoom ?? tr.zoom) !== v.zoom) {
        return true;
    }
    if (v.padding && !tr.isPaddingEqual(v.padding)) {
        return true;
    }
    return false;
}
function noOp() {}
function applyViewStateToTransform(tr, v) {
    // prevent constrain from running until all properties are set
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const constrain = tr._constrain;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const calcMatrices = tr._calcMatrices;
    tr._constrain = noOp;
    tr._calcMatrices = noOp;
    if (Number.isFinite(v.bearing)) {
        tr.bearing = v.bearing;
    }
    if (Number.isFinite(v.pitch)) {
        tr.pitch = v.pitch;
    }
    if (v.padding && !tr.isPaddingEqual(v.padding)) {
        tr.padding = v.padding;
    }
    if (Number.isFinite(v.longitude) || Number.isFinite(v.latitude)) {
        const center = tr.center;
        // @ts-expect-error LngLat constructor is not typed
        tr._center = new center.constructor(v.longitude ?? center.lng, v.latitude ?? center.lat);
    }
    if (Number.isFinite(v.zoom)) {
        tr._centerAltitude = v.elevation ?? 0;
        if (tr.elevation) {
            tr._seaLevelZoom = v.zoom;
            const mercatorElevation = tr.pixelsPerMeter / tr.worldSize * tr._centerAltitude;
            const altitude = tr._mercatorZfromZoom(v.zoom);
            const minHeight = tr._mercatorZfromZoom(tr._maxZoom);
            const height = Math.max(altitude - mercatorElevation, minHeight);
            tr._setZoom(tr._zoomFromMercatorZ(height));
        } else {
            tr._seaLevelZoom = null;
            tr.zoom = v.zoom;
        }
    }
    // restore methods
    tr._constrain = constrain;
    tr._calcMatrices = calcMatrices;
    if (!tr._unmodified) {
        tr._constrain();
        tr._calcMatrices();
    }
} //# sourceMappingURL=transform.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/mapbox/proxy-transform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProxyTransform",
    ()=>createProxyTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/transform.js [app-client] (ecmascript)");
;
// These are Transform class methods that:
// + do not mutate any view state properties
// + populate private members derived from view state properties
// They should always reflect the state of their owning instance and NOT trigger any proxied getter/setter
const unproxiedMethods = new Set([
    '_calcMatrices',
    '_calcFogMatrices',
    '_updateCameraState',
    '_updateSeaLevelZoom'
]);
function createProxyTransform(tr) {
    let internalUpdate = false;
    let reactViewState = {};
    /**
     * Reflects view state set by react props
     * This is the transform seen by painter, style etc.
     */ const controlledTransform = tr;
    /** Populated during camera move (handler/easeTo) if there is a discrepency between react props and proposed view state
     * This is the transform seen by Mapbox's input handlers
     */ let proposedTransform = null;
    const handlers = {
        get (target, prop) {
            // Props added by us
            if (prop === '$reactViewState') {
                return reactViewState;
            }
            if (prop === '$proposedTransform') {
                return proposedTransform;
            }
            if (prop === '$internalUpdate') {
                return internalUpdate;
            }
            // Ugly - this method is called from HandlerManager bypassing zoom setter
            if (prop === '_setZoom') {
                return (z)=>{
                    if (internalUpdate) {
                        proposedTransform?.[prop](z);
                    }
                    if (!Number.isFinite(reactViewState.zoom)) {
                        controlledTransform[prop](z);
                    }
                };
            }
            // Ugly - this method is called from HandlerManager and mutates transform._camera
            if (internalUpdate && prop === '_translateCameraConstrained' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isViewStateControlled"])(reactViewState)) {
                proposedTransform = proposedTransform || controlledTransform.clone();
            }
            if (unproxiedMethods.has(prop)) {
                // When this function is executed, it updates both transforms respectively
                return function(...parms) {
                    proposedTransform?.[prop](...parms);
                    controlledTransform[prop](...parms);
                };
            }
            // Expose the proposed transform to input handlers
            if (internalUpdate && proposedTransform) {
                return proposedTransform[prop];
            }
            // Expose the controlled transform to renderer, markers, and event listeners
            return controlledTransform[prop];
        },
        set (target, prop, value) {
            // Props added by us
            if (prop === '$reactViewState') {
                reactViewState = value;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyViewStateToTransform"])(controlledTransform, reactViewState);
                return true;
            }
            if (prop === '$proposedTransform') {
                proposedTransform = value;
                return true;
            }
            if (prop === '$internalUpdate') {
                internalUpdate = value;
                return true;
            }
            // Controlled props
            let controlledValue = value;
            if (prop === 'center' || prop === '_center') {
                if (Number.isFinite(reactViewState.longitude) || Number.isFinite(reactViewState.latitude)) {
                    // @ts-expect-error LngLat constructor is not typed
                    controlledValue = new value.constructor(reactViewState.longitude ?? value.lng, reactViewState.latitude ?? value.lat);
                }
            } else if (prop === 'zoom' || prop === '_zoom' || prop === '_seaLevelZoom') {
                if (Number.isFinite(reactViewState.zoom)) {
                    controlledValue = controlledTransform[prop];
                }
            } else if (prop === '_centerAltitude') {
                if (Number.isFinite(reactViewState.elevation)) {
                    controlledValue = controlledTransform[prop];
                }
            } else if (prop === 'pitch' || prop === '_pitch') {
                if (Number.isFinite(reactViewState.pitch)) {
                    controlledValue = controlledTransform[prop];
                }
            } else if (prop === 'bearing' || prop === 'rotation' || prop === 'angle') {
                if (Number.isFinite(reactViewState.bearing)) {
                    controlledValue = controlledTransform[prop];
                }
            }
            // During camera update, we save view states that are overriden by controlled values in proposedTransform
            if (internalUpdate && controlledValue !== value) {
                proposedTransform = proposedTransform || controlledTransform.clone();
            }
            if (internalUpdate && proposedTransform) {
                proposedTransform[prop] = value;
            }
            // controlledTransform is not exposed to view state mutation
            controlledTransform[prop] = controlledValue;
            return true;
        }
    };
    return new Proxy(tr, handlers);
} //# sourceMappingURL=proxy-transform.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/utils/style-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeStyle",
    ()=>normalizeStyle
]);
const refProps = [
    'type',
    'source',
    'source-layer',
    'minzoom',
    'maxzoom',
    'filter',
    'layout'
];
function normalizeStyle(style) {
    if (!style) {
        return null;
    }
    if (typeof style === 'string') {
        return style;
    }
    if ('toJS' in style) {
        style = style.toJS();
    }
    if (!style.layers) {
        return style;
    }
    const layerIndex = {};
    for (const layer of style.layers){
        layerIndex[layer.id] = layer;
    }
    const layers = style.layers.map((layer)=>{
        let normalizedLayer = null;
        if ('interactive' in layer) {
            normalizedLayer = Object.assign({}, layer);
            // Breaks style diffing :(
            // @ts-ignore legacy field not typed
            delete normalizedLayer.interactive;
        }
        // Style diffing doesn't work with refs so expand them out manually before diffing.
        // @ts-ignore legacy field not typed
        const layerRef = layerIndex[layer.ref];
        if (layerRef) {
            normalizedLayer = normalizedLayer || Object.assign({}, layer);
            // @ts-ignore
            delete normalizedLayer.ref;
            // https://github.com/mapbox/mapbox-gl-js/blob/master/src/style-spec/deref.js
            for (const propName of refProps){
                if (propName in layerRef) {
                    normalizedLayer[propName] = layerRef[propName];
                }
            }
        }
        return normalizedLayer || layer;
    });
    // Do not mutate the style object provided by the user
    return {
        ...style,
        layers
    };
} //# sourceMappingURL=style-utils.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/utils/deep-equal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Compare two points
 * @param a
 * @param b
 * @returns true if the points are equal
 */ __turbopack_context__.s([
    "arePointsEqual",
    ()=>arePointsEqual,
    "deepEqual",
    ()=>deepEqual
]);
function arePointsEqual(a, b) {
    const ax = Array.isArray(a) ? a[0] : a ? a.x : 0;
    const ay = Array.isArray(a) ? a[1] : a ? a.y : 0;
    const bx = Array.isArray(b) ? b[0] : b ? b.x : 0;
    const by = Array.isArray(b) ? b[1] : b ? b.y : 0;
    return ax === bx && ay === by;
}
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!a || !b) {
        return false;
    }
    if (Array.isArray(a)) {
        if (!Array.isArray(b) || a.length !== b.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if (!deepEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    } else if (Array.isArray(b)) {
        return false;
    }
    if (typeof a === 'object' && typeof b === 'object') {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        for (const key of aKeys){
            if (!b.hasOwnProperty(key)) {
                return false;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return false;
} //# sourceMappingURL=deep-equal.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/mapbox/mapbox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$mapbox$2f$proxy$2d$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/mapbox/proxy-transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$style$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/style-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/deep-equal.js [app-client] (ecmascript)");
;
;
;
;
const DEFAULT_STYLE = {
    version: 8,
    sources: {},
    layers: []
};
const pointerEvents = {
    mousedown: 'onMouseDown',
    mouseup: 'onMouseUp',
    mouseover: 'onMouseOver',
    mousemove: 'onMouseMove',
    click: 'onClick',
    dblclick: 'onDblClick',
    mouseenter: 'onMouseEnter',
    mouseleave: 'onMouseLeave',
    mouseout: 'onMouseOut',
    contextmenu: 'onContextMenu',
    touchstart: 'onTouchStart',
    touchend: 'onTouchEnd',
    touchmove: 'onTouchMove',
    touchcancel: 'onTouchCancel'
};
const cameraEvents = {
    movestart: 'onMoveStart',
    move: 'onMove',
    moveend: 'onMoveEnd',
    dragstart: 'onDragStart',
    drag: 'onDrag',
    dragend: 'onDragEnd',
    zoomstart: 'onZoomStart',
    zoom: 'onZoom',
    zoomend: 'onZoomEnd',
    rotatestart: 'onRotateStart',
    rotate: 'onRotate',
    rotateend: 'onRotateEnd',
    pitchstart: 'onPitchStart',
    pitch: 'onPitch',
    pitchend: 'onPitchEnd'
};
const otherEvents = {
    wheel: 'onWheel',
    boxzoomstart: 'onBoxZoomStart',
    boxzoomend: 'onBoxZoomEnd',
    boxzoomcancel: 'onBoxZoomCancel',
    resize: 'onResize',
    load: 'onLoad',
    render: 'onRender',
    idle: 'onIdle',
    remove: 'onRemove',
    data: 'onData',
    styledata: 'onStyleData',
    sourcedata: 'onSourceData',
    error: 'onError'
};
const settingNames = [
    'minZoom',
    'maxZoom',
    'minPitch',
    'maxPitch',
    'maxBounds',
    'projection',
    'renderWorldCopies'
];
const handlerNames = [
    'scrollZoom',
    'boxZoom',
    'dragRotate',
    'dragPan',
    'keyboard',
    'doubleClickZoom',
    'touchZoomRotate',
    'touchPitch'
];
/**
 * A wrapper for mapbox-gl's Map class
 */ class Mapbox {
    constructor(MapClass, props, container){
        /** mapboxgl.Map instance */ this._map = null;
        // Internal states
        /** Making updates driven by React props. Do not trigger React callbacks to avoid infinite loop */ this._internalUpdate = false;
        /** Map is currently rendering */ this._inRender = false;
        /** Map features under the pointer */ this._hoveredFeatures = null;
        /** View state changes driven by React props
         * They still need to fire move/etc. events because controls such as marker/popup
         * subscribe to the move event internally to update their position
         * React callbacks like onMove are not called for these */ this._deferredEvents = {
            move: false,
            zoom: false,
            pitch: false,
            rotate: false
        };
        this._onEvent = (e)=>{
            // @ts-ignore
            const cb = this.props[otherEvents[e.type]];
            if (cb) {
                cb(e);
            } else if (e.type === 'error') {
                console.error(e.error); // eslint-disable-line
            }
        };
        this._onPointerEvent = (e)=>{
            if (e.type === 'mousemove' || e.type === 'mouseout') {
                this._updateHover(e);
            }
            // @ts-ignore
            const cb = this.props[pointerEvents[e.type]];
            if (cb) {
                if (this.props.interactiveLayerIds && e.type !== 'mouseover' && e.type !== 'mouseout') {
                    e.features = this._hoveredFeatures || this._queryRenderedFeatures(e.point);
                }
                cb(e);
                delete e.features;
            }
        };
        this._onCameraEvent = (e)=>{
            if (!this._internalUpdate) {
                // @ts-ignore
                const cb = this.props[cameraEvents[e.type]];
                const tr = this._proxyTransform;
                if (cb) {
                    e.viewState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformToViewState"])(tr.$proposedTransform ?? tr);
                    cb(e);
                }
                if (e.type === 'moveend') {
                    tr.$proposedTransform = null;
                }
            }
            if (e.type in this._deferredEvents) {
                this._deferredEvents[e.type] = false;
            }
        };
        this._MapClass = MapClass;
        this.props = props;
        this._initialize(container);
    }
    get map() {
        return this._map;
    }
    get transform() {
        return this._map.transform;
    }
    setProps(props) {
        const oldProps = this.props;
        this.props = props;
        const settingsChanged = this._updateSettings(props, oldProps);
        if (settingsChanged) {
            this._createProxyTransform(this._map);
        }
        const sizeChanged = this._updateSize(props);
        const viewStateChanged = this._updateViewState(props, true);
        this._updateStyle(props, oldProps);
        this._updateStyleComponents(props, oldProps);
        this._updateHandlers(props, oldProps);
        // If 1) view state has changed to match props and
        //    2) the props change is not triggered by map events,
        // it's driven by an external state change. Redraw immediately
        if (settingsChanged || sizeChanged || viewStateChanged && !this._map.isMoving()) {
            this.redraw();
        }
    }
    static reuse(props, container) {
        const that = Mapbox.savedMaps.pop();
        if (!that) {
            return null;
        }
        const map = that.map;
        // When reusing the saved map, we need to reparent the map(canvas) and other child nodes
        // intoto the new container from the props.
        // Step 1: reparenting child nodes from old container to new container
        const oldContainer = map.getContainer();
        container.className = oldContainer.className;
        while(oldContainer.childNodes.length > 0){
            container.appendChild(oldContainer.childNodes[0]);
        }
        // Step 2: replace the internal container with new container from the react component
        // @ts-ignore
        map._container = container;
        // Step 4: apply new props
        that.setProps({
            ...props,
            styleDiffing: false
        });
        map.resize();
        const { initialViewState } = props;
        if (initialViewState) {
            if (initialViewState.bounds) {
                map.fitBounds(initialViewState.bounds, {
                    ...initialViewState.fitBoundsOptions,
                    duration: 0
                });
            } else {
                that._updateViewState(initialViewState, false);
            }
        }
        // Simulate load event
        if (map.isStyleLoaded()) {
            map.fire('load');
        } else {
            map.once('styledata', ()=>map.fire('load'));
        }
        // Force reload
        // @ts-ignore
        map._update();
        return that;
    }
    /* eslint-disable complexity,max-statements */ _initialize(container) {
        const { props } = this;
        const { mapStyle = DEFAULT_STYLE } = props;
        const mapOptions = {
            ...props,
            ...props.initialViewState,
            accessToken: props.mapboxAccessToken || getAccessTokenFromEnv() || null,
            container,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$style$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeStyle"])(mapStyle)
        };
        const viewState = mapOptions.initialViewState || mapOptions.viewState || mapOptions;
        Object.assign(mapOptions, {
            center: [
                viewState.longitude || 0,
                viewState.latitude || 0
            ],
            zoom: viewState.zoom || 0,
            pitch: viewState.pitch || 0,
            bearing: viewState.bearing || 0
        });
        if (props.gl) {
            // eslint-disable-next-line
            const getContext = HTMLCanvasElement.prototype.getContext;
            // Hijack canvas.getContext to return our own WebGLContext
            // This will be called inside the mapboxgl.Map constructor
            // @ts-expect-error
            HTMLCanvasElement.prototype.getContext = ()=>{
                // Unhijack immediately
                HTMLCanvasElement.prototype.getContext = getContext;
                return props.gl;
            };
        }
        const map = new this._MapClass(mapOptions);
        // Props that are not part of constructor options
        if (viewState.padding) {
            map.setPadding(viewState.padding);
        }
        if (props.cursor) {
            map.getCanvas().style.cursor = props.cursor;
        }
        this._createProxyTransform(map);
        // Hack
        // Insert code into map's render cycle
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const renderMap = map._render;
        map._render = (arg)=>{
            // Hijacked to set this state flag
            this._inRender = true;
            renderMap.call(map, arg);
            this._inRender = false;
        };
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const runRenderTaskQueue = map._renderTaskQueue.run;
        map._renderTaskQueue.run = (arg)=>{
            // This is where camera updates from input handler/animation happens
            // And where all view state change events are fired
            this._proxyTransform.$internalUpdate = true;
            runRenderTaskQueue.call(map._renderTaskQueue, arg);
            this._proxyTransform.$internalUpdate = false;
            this._fireDefferedEvents();
        };
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const jumpTo = map.jumpTo;
        map.jumpTo = (...args)=>{
            // This method will fire view state change events immediately
            this._proxyTransform.$internalUpdate = true;
            jumpTo.apply(map, args);
            this._proxyTransform.$internalUpdate = false;
            return map;
        };
        // Insert code into map's event pipeline
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const fireEvent = map.fire;
        map.fire = this._fireEvent.bind(this, fireEvent);
        // add listeners
        map.on('styledata', ()=>{
            this._updateStyleComponents(this.props, {});
        });
        map.on('sourcedata', ()=>{
            this._updateStyleComponents(this.props, {});
        });
        for(const eventName in pointerEvents){
            map.on(eventName, this._onPointerEvent);
        }
        for(const eventName in cameraEvents){
            map.on(eventName, this._onCameraEvent);
        }
        for(const eventName in otherEvents){
            map.on(eventName, this._onEvent);
        }
        this._map = map;
    }
    /* eslint-enable complexity,max-statements */ recycle() {
        // Clean up unnecessary elements before storing for reuse.
        const container = this.map.getContainer();
        const children = container.querySelector('[mapboxgl-children]');
        children?.remove();
        Mapbox.savedMaps.push(this);
    }
    destroy() {
        this._map.remove();
    }
    // Force redraw the map now. Typically resize() and jumpTo() is reflected in the next
    // render cycle, which is managed by Mapbox's animation loop.
    // This removes the synchronization issue caused by requestAnimationFrame.
    redraw() {
        const map = this._map;
        // map._render will throw error if style does not exist
        // https://github.com/mapbox/mapbox-gl-js/blob/fb9fc316da14e99ff4368f3e4faa3888fb43c513
        //   /src/ui/map.js#L1834
        if (!this._inRender && map.style) {
            // cancel the scheduled update
            if (map._frame) {
                map._frame.cancel();
                map._frame = null;
            }
            // the order is important - render() may schedule another update
            map._render();
        }
    }
    _createProxyTransform(map) {
        const proxyTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$mapbox$2f$proxy$2d$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProxyTransform"])(map.transform);
        map.transform = proxyTransform;
        map.painter.transform = proxyTransform;
        this._proxyTransform = proxyTransform;
    }
    /* Trigger map resize if size is controlled
       @param {object} nextProps
       @returns {bool} true if size has changed
     */ _updateSize(nextProps) {
        // Check if size is controlled
        const { viewState } = nextProps;
        if (viewState) {
            const map = this._map;
            if (viewState.width !== map.transform.width || viewState.height !== map.transform.height) {
                map.resize();
                return true;
            }
        }
        return false;
    }
    // Adapted from map.jumpTo
    /* Update camera to match props
       @param {object} nextProps
       @param {bool} triggerEvents - should fire camera events
       @returns {bool} true if anything is changed
     */ _updateViewState(nextProps, triggerEvents) {
        const viewState = nextProps.viewState || nextProps;
        const tr = this._proxyTransform;
        const { zoom, pitch, bearing } = tr;
        const changed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareViewStateWithTransform"])(this._proxyTransform, viewState);
        tr.$reactViewState = viewState;
        if (changed && triggerEvents) {
            const deferredEvents = this._deferredEvents;
            // Delay DOM control updates to the next render cycle
            deferredEvents.move = true;
            deferredEvents.zoom || (deferredEvents.zoom = zoom !== tr.zoom);
            deferredEvents.rotate || (deferredEvents.rotate = bearing !== tr.bearing);
            deferredEvents.pitch || (deferredEvents.pitch = pitch !== tr.pitch);
        }
        return changed;
    }
    /* Update camera constraints and projection settings to match props
       @param {object} nextProps
       @param {object} currProps
       @returns {bool} true if anything is changed
     */ _updateSettings(nextProps, currProps) {
        const map = this._map;
        let changed = false;
        for (const propName of settingNames){
            if (propName in nextProps && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(nextProps[propName], currProps[propName])) {
                changed = true;
                const setter = map[`set${propName[0].toUpperCase()}${propName.slice(1)}`];
                setter?.call(map, nextProps[propName]);
            }
        }
        return changed;
    }
    /* Update map style to match props
       @param {object} nextProps
       @param {object} currProps
       @returns {bool} true if style is changed
     */ _updateStyle(nextProps, currProps) {
        if (nextProps.cursor !== currProps.cursor) {
            this._map.getCanvas().style.cursor = nextProps.cursor || '';
        }
        if (nextProps.mapStyle !== currProps.mapStyle) {
            const { mapStyle = DEFAULT_STYLE, styleDiffing = true } = nextProps;
            const options = {
                diff: styleDiffing
            };
            if ('localIdeographFontFamily' in nextProps) {
                // @ts-ignore Mapbox specific prop
                options.localIdeographFontFamily = nextProps.localIdeographFontFamily;
            }
            this._map.setStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$style$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeStyle"])(mapStyle), options);
            return true;
        }
        return false;
    }
    /* Update fog, light and terrain to match props
       @param {object} nextProps
       @param {object} currProps
       @returns {bool} true if anything is changed
     */ _updateStyleComponents(nextProps, currProps) {
        const map = this._map;
        let changed = false;
        if (map.isStyleLoaded()) {
            if ('light' in nextProps && map.setLight && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(nextProps.light, currProps.light)) {
                changed = true;
                map.setLight(nextProps.light);
            }
            if ('fog' in nextProps && map.setFog && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(nextProps.fog, currProps.fog)) {
                changed = true;
                map.setFog(nextProps.fog);
            }
            if ('terrain' in nextProps && map.setTerrain && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(nextProps.terrain, currProps.terrain)) {
                if (!nextProps.terrain || map.getSource(nextProps.terrain.source)) {
                    changed = true;
                    map.setTerrain(nextProps.terrain);
                }
            }
        }
        return changed;
    }
    /* Update interaction handlers to match props
       @param {object} nextProps
       @param {object} currProps
       @returns {bool} true if anything is changed
     */ _updateHandlers(nextProps, currProps) {
        const map = this._map;
        let changed = false;
        for (const propName of handlerNames){
            const newValue = nextProps[propName] ?? true;
            const oldValue = currProps[propName] ?? true;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(newValue, oldValue)) {
                changed = true;
                if (newValue) {
                    map[propName].enable(newValue);
                } else {
                    map[propName].disable();
                }
            }
        }
        return changed;
    }
    _queryRenderedFeatures(point) {
        const map = this._map;
        const { interactiveLayerIds = [] } = this.props;
        try {
            return map.queryRenderedFeatures(point, {
                layers: interactiveLayerIds.filter(map.getLayer.bind(map))
            });
        } catch  {
            // May fail if style is not loaded
            return [];
        }
    }
    _updateHover(e) {
        const { props } = this;
        const shouldTrackHoveredFeatures = props.interactiveLayerIds && (props.onMouseMove || props.onMouseEnter || props.onMouseLeave);
        if (shouldTrackHoveredFeatures) {
            const eventType = e.type;
            const wasHovering = this._hoveredFeatures?.length > 0;
            const features = this._queryRenderedFeatures(e.point);
            const isHovering = features.length > 0;
            if (!isHovering && wasHovering) {
                e.type = 'mouseleave';
                this._onPointerEvent(e);
            }
            this._hoveredFeatures = features;
            if (isHovering && !wasHovering) {
                e.type = 'mouseenter';
                this._onPointerEvent(e);
            }
            e.type = eventType;
        } else {
            this._hoveredFeatures = null;
        }
    }
    _fireEvent(baseFire, event, properties) {
        const map = this._map;
        const tr = this._proxyTransform;
        // Always expose the controlled transform to controls/end user
        const internal = tr.$internalUpdate;
        try {
            tr.$internalUpdate = false;
            baseFire.call(map, event, properties);
        } finally{
            tr.$internalUpdate = internal;
        }
        return map;
    }
    // If there are camera changes driven by props, invoke camera events so that DOM controls are synced
    _fireDefferedEvents() {
        const map = this._map;
        this._internalUpdate = true;
        for(const eventType in this._deferredEvents){
            if (this._deferredEvents[eventType]) {
                map.fire(eventType);
            }
        }
        this._internalUpdate = false;
    }
}
Mapbox.savedMaps = [];
const __TURBOPACK__default__export__ = Mapbox;
/**
 * Access token can be provided via one of:
 *   mapboxAccessToken prop
 *   access_token query parameter
 *   MapboxAccessToken environment variable
 *   REACT_APP_MAPBOX_ACCESS_TOKEN environment variable
 * @returns access token
 */ function getAccessTokenFromEnv() {
    let accessToken = null;
    /* global location, process */ if (typeof location !== 'undefined') {
        const match = /access_token=([^&\/]*)/.exec(location.search);
        accessToken = match && match[1];
    }
    // Note: This depends on bundler plugins (e.g. webpack) importing environment correctly
    try {
        // eslint-disable-next-line no-process-env
        accessToken = accessToken || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.MapboxAccessToken;
    } catch  {
    // ignore
    }
    try {
        // eslint-disable-next-line no-process-env
        accessToken = accessToken || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    } catch  {
    // ignore
    }
    return accessToken;
} //# sourceMappingURL=mapbox.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/mapbox/create-ref.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createRef
]);
/** These methods may break the react binding if called directly */ const skipMethods = [
    'setMaxBounds',
    'setMinZoom',
    'setMaxZoom',
    'setMinPitch',
    'setMaxPitch',
    'setRenderWorldCopies',
    'setProjection',
    'setStyle',
    'addSource',
    'removeSource',
    'addLayer',
    'removeLayer',
    'setLayerZoomRange',
    'setFilter',
    'setPaintProperty',
    'setLayoutProperty',
    'setLight',
    'setTerrain',
    'setFog',
    'remove'
];
function createRef(mapInstance) {
    if (!mapInstance) {
        return null;
    }
    const map = mapInstance.map;
    const ref = {
        getMap: ()=>map,
        // Overwrite getters to use our shadow transform
        getCenter: ()=>mapInstance.transform.center,
        getZoom: ()=>mapInstance.transform.zoom,
        getBearing: ()=>mapInstance.transform.bearing,
        getPitch: ()=>mapInstance.transform.pitch,
        getPadding: ()=>mapInstance.transform.padding,
        getBounds: ()=>mapInstance.transform.getBounds(),
        project: (lnglat)=>{
            const tr = map.transform;
            map.transform = mapInstance.transform;
            const result = map.project(lnglat);
            map.transform = tr;
            return result;
        },
        unproject: (point)=>{
            const tr = map.transform;
            map.transform = mapInstance.transform;
            const result = map.unproject(point);
            map.transform = tr;
            return result;
        },
        // options diverge between mapbox and maplibre
        queryTerrainElevation: (lnglat, options)=>{
            const tr = map.transform;
            map.transform = mapInstance.transform;
            const result = map.queryTerrainElevation(lnglat, options);
            map.transform = tr;
            return result;
        },
        queryRenderedFeatures: (geometry, options)=>{
            const tr = map.transform;
            map.transform = mapInstance.transform;
            const result = map.queryRenderedFeatures(geometry, options);
            map.transform = tr;
            return result;
        }
    };
    for (const key of getMethodNames(map)){
        // @ts-expect-error
        if (!(key in ref) && !skipMethods.includes(key)) {
            ref[key] = map[key].bind(map);
        }
    }
    return ref;
}
function getMethodNames(obj) {
    const result = new Set();
    let proto = obj;
    while(proto){
        for (const key of Object.getOwnPropertyNames(proto)){
            if (key[0] !== '_' && typeof obj[key] === 'function' && key !== 'fire' && key !== 'setEventedParent') {
                result.add(key);
            }
        }
        proto = Object.getPrototypeOf(proto);
    }
    return Array.from(result);
} //# sourceMappingURL=create-ref.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/utils/use-isomorphic-layout-effect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// From https://github.com/streamich/react-use/blob/master/src/useIsomorphicLayoutEffect.ts
// useLayoutEffect but does not trigger warning in server-side rendering
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useIsomorphicLayoutEffect = typeof document !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
const __TURBOPACK__default__export__ = useIsomorphicLayoutEffect;
 //# sourceMappingURL=use-isomorphic-layout-effect.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/utils/set-globals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>setGlobals
]);
const globalSettings = [
    'baseApiUrl',
    'maxParallelImageRequests',
    'workerClass',
    'workerCount',
    'workerUrl'
];
function setGlobals(mapLib, props) {
    for (const key of globalSettings){
        if (key in props) {
            mapLib[key] = props[key];
        }
    }
    const { RTLTextPlugin = 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js' } = props;
    if (RTLTextPlugin && mapLib.getRTLTextPluginStatus && mapLib.getRTLTextPluginStatus() === 'unavailable') {
        mapLib.setRTLTextPlugin(RTLTextPlugin, (error)=>{
            if (error) {
                // eslint-disable-next-line
                console.error(error);
            }
        }, true);
    }
} //# sourceMappingURL=set-globals.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Map",
    ()=>Map,
    "MapContext",
    ()=>MapContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$mapbox$2f$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/mapbox/mapbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$mapbox$2f$create$2d$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/mapbox/create-ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/use-isomorphic-layout-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$set$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/set-globals.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const MapContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function _Map(props, ref) {
    const mountedMapsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MountedMapsContext"]);
    const [mapInstance, setMapInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const { current: contextValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        mapLib: null,
        map: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "_Map.useEffect": ()=>{
            const mapLib = props.mapLib;
            let isMounted = true;
            let mapbox;
            Promise.resolve(mapLib || __turbopack_context__.A("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript, async loader)")).then({
                "_Map.useEffect": (module)=>{
                    if (!isMounted) {
                        return;
                    }
                    if (!module) {
                        throw new Error('Invalid mapLib');
                    }
                    const mapboxgl = 'Map' in module ? module : module.default;
                    if (!mapboxgl.Map) {
                        throw new Error('Invalid mapLib');
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$set$2d$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mapboxgl, props);
                    if (props.reuseMaps) {
                        mapbox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$mapbox$2f$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reuse(props, containerRef.current);
                    }
                    if (!mapbox) {
                        mapbox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$mapbox$2f$mapbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](mapboxgl.Map, props, containerRef.current);
                    }
                    contextValue.map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$mapbox$2f$create$2d$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mapbox);
                    contextValue.mapLib = mapboxgl;
                    setMapInstance(mapbox);
                    mountedMapsContext?.onMapMount(contextValue.map, props.id);
                }
            }["_Map.useEffect"]).catch({
                "_Map.useEffect": (error)=>{
                    const { onError } = props;
                    if (onError) {
                        onError({
                            type: 'error',
                            target: null,
                            error
                        });
                    } else {
                        console.error(error); // eslint-disable-line
                    }
                }
            }["_Map.useEffect"]);
            return ({
                "_Map.useEffect": ()=>{
                    isMounted = false;
                    if (mapbox) {
                        mountedMapsContext?.onMapUnmount(props.id);
                        if (props.reuseMaps) {
                            mapbox.recycle();
                        } else {
                            mapbox.destroy();
                        }
                    }
                }
            })["_Map.useEffect"];
        }
    }["_Map.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$use$2d$isomorphic$2d$layout$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "_Map.useIsomorphicLayoutEffect": ()=>{
            if (mapInstance) {
                mapInstance.setProps(props);
            }
        }
    }["_Map.useIsomorphicLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "_Map.useImperativeHandle": ()=>contextValue.map
    }["_Map.useImperativeHandle"], [
        mapInstance
    ]);
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "_Map.useMemo[style]": ()=>({
                position: 'relative',
                width: '100%',
                height: '100%',
                ...props.style
            })
    }["_Map.useMemo[style]"], [
        props.style
    ]);
    const CHILD_CONTAINER_STYLE = {
        height: '100%'
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        id: props.id,
        ref: containerRef,
        style: style
    }, mapInstance && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MapContext.Provider, {
        value: contextValue
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        "mapboxgl-children": "",
        style: CHILD_CONTAINER_STYLE
    }, props.children)));
}
const Map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_Map); //# sourceMappingURL=map.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/utils/apply-react-style.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyReactStyle",
    ()=>applyReactStyle
]);
// This is a simplified version of
// https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSPropertyOperations.js#L62
const unitlessNumber = /box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;
function applyReactStyle(element, styles) {
    if (!element || !styles) {
        return;
    }
    const style = element.style;
    for(const key in styles){
        const value = styles[key];
        if (Number.isFinite(value) && !unitlessNumber.test(key)) {
            style[key] = `${value}px`;
        } else {
            style[key] = value;
        }
    }
} //# sourceMappingURL=apply-react-style.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/utils/compare-class-names.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Compare two classNames string and return the difference */ __turbopack_context__.s([
    "compareClassNames",
    ()=>compareClassNames
]);
function compareClassNames(prevClassName, nextClassName) {
    if (prevClassName === nextClassName) {
        return null;
    }
    const prevClassList = getClassList(prevClassName);
    const nextClassList = getClassList(nextClassName);
    const diff = [];
    for (const c of nextClassList){
        if (!prevClassList.has(c)) {
            diff.push(c);
        }
    }
    for (const c of prevClassList){
        if (!nextClassList.has(c)) {
            diff.push(c);
        }
    }
    return diff.length === 0 ? null : diff;
}
function getClassList(className) {
    return new Set(className ? className.trim().split(/\s+/) : []);
} //# sourceMappingURL=compare-class-names.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/marker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Marker",
    ()=>Marker
]);
/* global document */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/deep-equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$compare$2d$class$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/compare-class-names.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const Marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { map, mapLib } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]);
    const thisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        props
    });
    const marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Marker.useMemo[marker]": ()=>{
            let hasChildren = false;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(props.children, {
                "Marker.useMemo[marker]": (el)=>{
                    if (el) {
                        hasChildren = true;
                    }
                }
            }["Marker.useMemo[marker]"]);
            const options = {
                ...props,
                element: hasChildren ? document.createElement('div') : null
            };
            const mk = new mapLib.Marker(options);
            mk.setLngLat([
                props.longitude,
                props.latitude
            ]);
            mk.getElement().addEventListener('click', {
                "Marker.useMemo[marker]": (e)=>{
                    thisRef.current.props.onClick?.({
                        type: 'click',
                        target: mk,
                        originalEvent: e
                    });
                }
            }["Marker.useMemo[marker]"]);
            mk.on('dragstart', {
                "Marker.useMemo[marker]": (e)=>{
                    const evt = e;
                    evt.lngLat = marker.getLngLat();
                    thisRef.current.props.onDragStart?.(evt);
                }
            }["Marker.useMemo[marker]"]);
            mk.on('drag', {
                "Marker.useMemo[marker]": (e)=>{
                    const evt = e;
                    evt.lngLat = marker.getLngLat();
                    thisRef.current.props.onDrag?.(evt);
                }
            }["Marker.useMemo[marker]"]);
            mk.on('dragend', {
                "Marker.useMemo[marker]": (e)=>{
                    const evt = e;
                    evt.lngLat = marker.getLngLat();
                    thisRef.current.props.onDragEnd?.(evt);
                }
            }["Marker.useMemo[marker]"]);
            return mk;
        }
    }["Marker.useMemo[marker]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Marker.useEffect": ()=>{
            marker.addTo(map.getMap());
            return ({
                "Marker.useEffect": ()=>{
                    marker.remove();
                }
            })["Marker.useEffect"];
        }
    }["Marker.useEffect"], []);
    const { longitude, latitude, offset, style, draggable = false, popup = null, rotation = 0, rotationAlignment = 'auto', pitchAlignment = 'auto' } = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Marker.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(marker.getElement(), style);
        }
    }["Marker.useEffect"], [
        style
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Marker.useImperativeHandle": ()=>marker
    }["Marker.useImperativeHandle"], []);
    const oldProps = thisRef.current.props;
    if (marker.getLngLat().lng !== longitude || marker.getLngLat().lat !== latitude) {
        marker.setLngLat([
            longitude,
            latitude
        ]);
    }
    if (offset && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arePointsEqual"])(marker.getOffset(), offset)) {
        marker.setOffset(offset);
    }
    if (marker.isDraggable() !== draggable) {
        marker.setDraggable(draggable);
    }
    if (marker.getRotation() !== rotation) {
        marker.setRotation(rotation);
    }
    if (marker.getRotationAlignment() !== rotationAlignment) {
        marker.setRotationAlignment(rotationAlignment);
    }
    if (marker.getPitchAlignment() !== pitchAlignment) {
        marker.setPitchAlignment(pitchAlignment);
    }
    if (marker.getPopup() !== popup) {
        marker.setPopup(popup);
    }
    const classNameDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$compare$2d$class$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareClassNames"])(oldProps.className, props.className);
    if (classNameDiff) {
        for (const c of classNameDiff){
            marker.toggleClassName(c);
        }
    }
    thisRef.current.props = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(props.children, marker.getElement());
})); //# sourceMappingURL=marker.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/popup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popup",
    ()=>Popup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/deep-equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$compare$2d$class$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/compare-class-names.js [app-client] (ecmascript)");
;
;
;
;
;
;
const Popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { map, mapLib } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]);
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Popup.useMemo[container]": ()=>{
            return document.createElement('div');
        }
    }["Popup.useMemo[container]"], []);
    const thisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        props
    });
    const popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Popup.useMemo[popup]": ()=>{
            const options = {
                ...props
            };
            const pp = new mapLib.Popup(options);
            pp.setLngLat([
                props.longitude,
                props.latitude
            ]);
            pp.once('open', {
                "Popup.useMemo[popup]": (e)=>{
                    thisRef.current.props.onOpen?.(e);
                }
            }["Popup.useMemo[popup]"]);
            return pp;
        }
    }["Popup.useMemo[popup]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popup.useEffect": ()=>{
            const onClose = {
                "Popup.useEffect.onClose": (e)=>{
                    thisRef.current.props.onClose?.(e);
                }
            }["Popup.useEffect.onClose"];
            popup.on('close', onClose);
            popup.setDOMContent(container).addTo(map.getMap());
            return ({
                "Popup.useEffect": ()=>{
                    // https://github.com/visgl/react-map-gl/issues/1825
                    // onClose should not be fired if the popup is removed by unmounting
                    // When using React strict mode, the component is mounted twice.
                    // Firing the onClose callback here would be a false signal to remove the component.
                    popup.off('close', onClose);
                    if (popup.isOpen()) {
                        popup.remove();
                    }
                }
            })["Popup.useEffect"];
        }
    }["Popup.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popup.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(popup.getElement(), props.style);
        }
    }["Popup.useEffect"], [
        props.style
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Popup.useImperativeHandle": ()=>popup
    }["Popup.useImperativeHandle"], []);
    if (popup.isOpen()) {
        const oldProps = thisRef.current.props;
        if (popup.getLngLat().lng !== props.longitude || popup.getLngLat().lat !== props.latitude) {
            popup.setLngLat([
                props.longitude,
                props.latitude
            ]);
        }
        if (props.offset && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(oldProps.offset, props.offset)) {
            popup.options.anchor = props.anchor;
            popup.setOffset(props.offset);
        }
        if (oldProps.anchor !== props.anchor || oldProps.maxWidth !== props.maxWidth) {
            popup.setMaxWidth(props.maxWidth);
        }
        const classNameDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$compare$2d$class$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareClassNames"])(oldProps.className, props.className);
        if (classNameDiff) {
            for (const c of classNameDiff){
                popup.toggleClassName(c);
            }
        }
        thisRef.current.props = props;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(props.children, container);
})); //# sourceMappingURL=popup.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-control.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useControl",
    ()=>useControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript)");
;
;
function useControl(onCreate, arg1, arg2, arg3) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]);
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useControl.useMemo[ctrl]": ()=>onCreate(context)
    }["useControl.useMemo[ctrl]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useControl.useEffect": ()=>{
            const opts = arg3 || arg2 || arg1;
            const onAdd = typeof arg1 === 'function' && typeof arg2 === 'function' ? arg1 : null;
            const onRemove = typeof arg2 === 'function' ? arg2 : typeof arg1 === 'function' ? arg1 : null;
            const { map } = context;
            if (!map.hasControl(ctrl)) {
                map.addControl(ctrl, opts?.position);
                if (onAdd) {
                    onAdd(context);
                }
            }
            return ({
                "useControl.useEffect": ()=>{
                    if (onRemove) {
                        onRemove(context);
                    }
                    // Map might have been removed (parent effects are destroyed before child ones)
                    if (map.hasControl(ctrl)) {
                        map.removeControl(ctrl);
                    }
                }
            })["useControl.useEffect"];
        }
    }["useControl.useEffect"], []);
    return ctrl;
} //# sourceMappingURL=use-control.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/attribution-control.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributionControl",
    ()=>AttributionControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-control.js [app-client] (ecmascript)");
;
;
;
function _AttributionControl(props) {
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControl"])({
        "_AttributionControl.useControl[ctrl]": ({ mapLib })=>new mapLib.AttributionControl(props)
    }["_AttributionControl.useControl[ctrl]"], {
        position: props.position
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "_AttributionControl.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(ctrl._container, props.style);
        }
    }["_AttributionControl.useEffect"], [
        props.style
    ]);
    return null;
}
const AttributionControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_AttributionControl); //# sourceMappingURL=attribution-control.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/fullscreen-control.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FullscreenControl",
    ()=>FullscreenControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-control.js [app-client] (ecmascript)");
;
;
;
function _FullscreenControl(props) {
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControl"])({
        "_FullscreenControl.useControl[ctrl]": ({ mapLib })=>new mapLib.FullscreenControl({
                container: props.containerId && document.getElementById(props.containerId)
            })
    }["_FullscreenControl.useControl[ctrl]"], {
        position: props.position
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "_FullscreenControl.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(ctrl._controlContainer, props.style);
        }
    }["_FullscreenControl.useEffect"], [
        props.style
    ]);
    return null;
}
const FullscreenControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_FullscreenControl); //# sourceMappingURL=fullscreen-control.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/geolocate-control.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeolocateControl",
    ()=>GeolocateControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-control.js [app-client] (ecmascript)");
;
;
;
function _GeolocateControl(props, ref) {
    const thisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        props
    });
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControl"])({
        "_GeolocateControl.useControl[ctrl]": ({ mapLib })=>{
            const gc = new mapLib.GeolocateControl(props);
            // Hack: fix GeolocateControl reuse
            // When using React strict mode, the component is mounted twice.
            // GeolocateControl's UI creation is asynchronous. Removing and adding it back causes the UI to be initialized twice.
            const setupUI = gc._setupUI.bind(gc);
            gc._setupUI = ({
                "_GeolocateControl.useControl[ctrl]": (args)=>{
                    if (!gc._container.hasChildNodes()) {
                        setupUI(args);
                    }
                }
            })["_GeolocateControl.useControl[ctrl]"];
            gc.on('geolocate', {
                "_GeolocateControl.useControl[ctrl]": (e)=>{
                    thisRef.current.props.onGeolocate?.(e);
                }
            }["_GeolocateControl.useControl[ctrl]"]);
            gc.on('error', {
                "_GeolocateControl.useControl[ctrl]": (e)=>{
                    thisRef.current.props.onError?.(e);
                }
            }["_GeolocateControl.useControl[ctrl]"]);
            gc.on('outofmaxbounds', {
                "_GeolocateControl.useControl[ctrl]": (e)=>{
                    thisRef.current.props.onOutOfMaxBounds?.(e);
                }
            }["_GeolocateControl.useControl[ctrl]"]);
            gc.on('trackuserlocationstart', {
                "_GeolocateControl.useControl[ctrl]": (e)=>{
                    thisRef.current.props.onTrackUserLocationStart?.(e);
                }
            }["_GeolocateControl.useControl[ctrl]"]);
            gc.on('trackuserlocationend', {
                "_GeolocateControl.useControl[ctrl]": (e)=>{
                    thisRef.current.props.onTrackUserLocationEnd?.(e);
                }
            }["_GeolocateControl.useControl[ctrl]"]);
            return gc;
        }
    }["_GeolocateControl.useControl[ctrl]"], {
        position: props.position
    });
    thisRef.current.props = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "_GeolocateControl.useImperativeHandle": ()=>ctrl
    }["_GeolocateControl.useImperativeHandle"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "_GeolocateControl.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(ctrl._container, props.style);
        }
    }["_GeolocateControl.useEffect"], [
        props.style
    ]);
    return null;
}
const GeolocateControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_GeolocateControl)); //# sourceMappingURL=geolocate-control.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/navigation-control.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationControl",
    ()=>NavigationControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-control.js [app-client] (ecmascript)");
;
;
;
function _NavigationControl(props) {
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControl"])({
        "_NavigationControl.useControl[ctrl]": ({ mapLib })=>new mapLib.NavigationControl(props)
    }["_NavigationControl.useControl[ctrl]"], {
        position: props.position
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "_NavigationControl.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(ctrl._container, props.style);
        }
    }["_NavigationControl.useEffect"], [
        props.style
    ]);
    return null;
}
const NavigationControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_NavigationControl); //# sourceMappingURL=navigation-control.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/scale-control.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleControl",
    ()=>ScaleControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/apply-react-style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-control.js [app-client] (ecmascript)");
;
;
;
function _ScaleControl(props) {
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControl"])({
        "_ScaleControl.useControl[ctrl]": ({ mapLib })=>new mapLib.ScaleControl(props)
    }["_ScaleControl.useControl[ctrl]"], {
        position: props.position
    });
    const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
    const prevProps = propsRef.current;
    propsRef.current = props;
    const { style } = props;
    if (props.maxWidth !== undefined && props.maxWidth !== prevProps.maxWidth) {
        ctrl.options.maxWidth = props.maxWidth;
    }
    if (props.unit !== undefined && props.unit !== prevProps.unit) {
        ctrl.setUnit(props.unit);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "_ScaleControl.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$apply$2d$react$2d$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReactStyle"])(ctrl._container, style);
        }
    }["_ScaleControl.useEffect"], [
        style
    ]);
    return null;
}
const ScaleControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_ScaleControl); //# sourceMappingURL=scale-control.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/utils/assert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>assert
]);
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
} //# sourceMappingURL=assert.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/source.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Source",
    ()=>Source
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/deep-equal.js [app-client] (ecmascript)");
;
;
;
;
;
let sourceCounter = 0;
function createSource(map, id, props) {
    // @ts-ignore
    if (map.style && map.style._loaded) {
        const options = {
            ...props
        };
        delete options.id;
        delete options.children;
        // @ts-ignore
        map.addSource(id, options);
        return map.getSource(id);
    }
    return null;
}
/* eslint-disable complexity */ function updateSource(source, props, prevProps) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.id === prevProps.id, 'source id changed');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.type === prevProps.type, 'source type changed');
    let changedKey = '';
    let changedKeyCount = 0;
    for(const key in props){
        if (key !== 'children' && key !== 'id' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(prevProps[key], props[key])) {
            changedKey = key;
            changedKeyCount++;
        }
    }
    if (!changedKeyCount) {
        return;
    }
    const type = props.type;
    if (type === 'geojson') {
        source.setData(props.data);
    } else if (type === 'image') {
        source.updateImage({
            url: props.url,
            coordinates: props.coordinates
        });
    } else if ('setCoordinates' in source && changedKeyCount === 1 && changedKey === 'coordinates') {
        source.setCoordinates(props.coordinates);
    } else if ('setUrl' in source && changedKey === 'url') {
        source.setUrl(props.url);
    } else if ('setTiles' in source && changedKey === 'tiles') {
        source.setTiles(props.tiles);
    } else {
        // eslint-disable-next-line
        console.warn(`Unable to update <Source> prop: ${changedKey}`);
    }
}
function Source(props) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]).map.getMap();
    const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
    const [, setStyleLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Source.useMemo[id]": ()=>props.id || `jsx-source-${sourceCounter++}`
    }["Source.useMemo[id]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Source.useEffect": ()=>{
            if (map) {
                /* global setTimeout */ const forceUpdate = {
                    "Source.useEffect.forceUpdate": ()=>setTimeout({
                            "Source.useEffect.forceUpdate": ()=>setStyleLoaded({
                                    "Source.useEffect.forceUpdate": (version)=>version + 1
                                }["Source.useEffect.forceUpdate"])
                        }["Source.useEffect.forceUpdate"], 0)
                }["Source.useEffect.forceUpdate"];
                map.on('styledata', forceUpdate);
                forceUpdate();
                return ({
                    "Source.useEffect": ()=>{
                        map.off('styledata', forceUpdate);
                        // @ts-ignore
                        if (map.style && map.style._loaded && map.getSource(id)) {
                            // Parent effects are destroyed before child ones, see
                            // https://github.com/facebook/react/issues/16728
                            // Source can only be removed after all child layers are removed
                            const allLayers = map.getStyle()?.layers;
                            if (allLayers) {
                                for (const layer of allLayers){
                                    // @ts-ignore (2339) source does not exist on all layer types
                                    if (layer.source === id) {
                                        map.removeLayer(layer.id);
                                    }
                                }
                            }
                            map.removeSource(id);
                        }
                    }
                })["Source.useEffect"];
            }
            return undefined;
        }
    }["Source.useEffect"], [
        map
    ]);
    // @ts-ignore
    let source = map && map.style && map.getSource(id);
    if (source) {
        updateSource(source, props, propsRef.current);
    } else {
        source = createSource(map, id, props);
    }
    propsRef.current = props;
    return source && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(props.children, (child)=>child && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            source: id
        })) || null;
} //# sourceMappingURL=source.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/components/layer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layer",
    ()=>Layer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/assert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/utils/deep-equal.js [app-client] (ecmascript)");
;
;
;
;
/* eslint-disable complexity, max-statements */ function updateLayer(map, id, props, prevProps) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.id === prevProps.id, 'layer id changed');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$assert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.type === prevProps.type, 'layer type changed');
    if (props.type === 'custom' || prevProps.type === 'custom') {
        return;
    }
    // @ts-ignore filter does not exist in some Layer types
    const { layout = {}, paint = {}, filter, minzoom, maxzoom, beforeId } = props;
    if (beforeId !== prevProps.beforeId) {
        map.moveLayer(id, beforeId);
    }
    if (layout !== prevProps.layout) {
        const prevLayout = prevProps.layout || {};
        for(const key in layout){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(layout[key], prevLayout[key])) {
                map.setLayoutProperty(id, key, layout[key]);
            }
        }
        for(const key in prevLayout){
            if (!layout.hasOwnProperty(key)) {
                map.setLayoutProperty(id, key, undefined);
            }
        }
    }
    if (paint !== prevProps.paint) {
        const prevPaint = prevProps.paint || {};
        for(const key in paint){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(paint[key], prevPaint[key])) {
                map.setPaintProperty(id, key, paint[key]);
            }
        }
        for(const key in prevPaint){
            if (!paint.hasOwnProperty(key)) {
                map.setPaintProperty(id, key, undefined);
            }
        }
    }
    // @ts-ignore filter does not exist in some Layer types
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$utils$2f$deep$2d$equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(filter, prevProps.filter)) {
        map.setFilter(id, filter);
    }
    if (minzoom !== prevProps.minzoom || maxzoom !== prevProps.maxzoom) {
        map.setLayerZoomRange(id, minzoom, maxzoom);
    }
}
function createLayer(map, id, props) {
    // @ts-ignore
    if (map.style && map.style._loaded && (!('source' in props) || map.getSource(props.source))) {
        const options = {
            ...props,
            id
        };
        delete options.beforeId;
        // @ts-ignore
        map.addLayer(options, props.beforeId);
    }
}
/* eslint-enable complexity, max-statements */ let layerCounter = 0;
function Layer(props) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContext"]).map.getMap();
    const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
    const [, setStyleLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Layer.useMemo[id]": ()=>props.id || `jsx-layer-${layerCounter++}`
    }["Layer.useMemo[id]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Layer.useEffect": ()=>{
            if (map) {
                const forceUpdate = {
                    "Layer.useEffect.forceUpdate": ()=>setStyleLoaded({
                            "Layer.useEffect.forceUpdate": (version)=>version + 1
                        }["Layer.useEffect.forceUpdate"])
                }["Layer.useEffect.forceUpdate"];
                map.on('styledata', forceUpdate);
                forceUpdate();
                return ({
                    "Layer.useEffect": ()=>{
                        map.off('styledata', forceUpdate);
                        // @ts-ignore
                        if (map.style && map.style._loaded && map.getLayer(id)) {
                            map.removeLayer(id);
                        }
                    }
                })["Layer.useEffect"];
            }
            return undefined;
        }
    }["Layer.useEffect"], [
        map
    ]);
    // @ts-ignore
    const layer = map && map.style && map.getLayer(id);
    if (layer) {
        try {
            updateLayer(map, id, props, propsRef.current);
        } catch (error) {
            console.warn(error); // eslint-disable-line
        }
    } else {
        createLayer(map, id, props);
    }
    // Store last rendered props
    propsRef.current = props;
    return null;
} //# sourceMappingURL=layer.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/types/common.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=common.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/types/events.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=events.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/types/lib.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=lib.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/types/style-spec.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=style-spec.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$attribution$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/attribution-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$fullscreen$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/fullscreen-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$geolocate$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/geolocate-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/navigation-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$scale$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/scale-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-map.js [app-client] (ecmascript)");
// Types
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$types$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/types/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$types$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/types/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$types$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/types/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$types$2f$style$2d$spec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/types/style-spec.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/react-map-gl/dist/mapbox.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/index.js [app-client] (ecmascript) <locals>");
;
;
 //# sourceMappingURL=mapbox.js.map
}),
"[project]/node_modules/@vis.gl/react-mapbox/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributionControl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$attribution$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttributionControl"],
    "FullscreenControl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$fullscreen$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FullscreenControl"],
    "GeolocateControl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$geolocate$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeolocateControl"],
    "Layer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"],
    "Map",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"],
    "MapProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapProvider"],
    "Marker",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"],
    "NavigationControl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationControl"],
    "Popup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"],
    "ScaleControl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$scale$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScaleControl"],
    "Source",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Source"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "useControl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControl"],
    "useMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$attribution$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/attribution-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$fullscreen$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/fullscreen-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$geolocate$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/geolocate-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$navigation$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/navigation-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$scale$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/scale-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$components$2f$use$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/components/use-map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$types$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/types/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$types$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/types/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$types$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/types/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$mapbox$2f$dist$2f$types$2f$style$2d$spec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-mapbox/dist/types/style-spec.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_a6d805de._.js.map