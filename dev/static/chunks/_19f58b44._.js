(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://pwppsbaghnyavzljdhtx.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_05dbaFvqLg7k9tHMBHh1OQ_CMHSot_f"));
}
const supabase = createClient();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/map-view.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const DRIVING_PREFERENCES = [
    {
        value: 'no_smoking',
        label: '🚭 Sin tabaco'
    },
    {
        value: 'pets_allowed',
        label: '🐾 Mascotas OK'
    },
    {
        value: 'no_pets',
        label: '🚫 Sin mascotas'
    },
    {
        value: 'music',
        label: '🎵 Con música'
    },
    {
        value: 'silent',
        label: '🤫 Silencioso'
    },
    {
        value: 'chat',
        label: '💬 Charla amigable'
    },
    {
        value: 'ac',
        label: '❄️ Aire acondicionado'
    },
    {
        value: 'luggage',
        label: '🧳 Equipaje grande'
    }
];
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
function Avatar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "9ec27a27f28f15a3601827e7ca150fd4cee32d795de3f113dcaee3eb723b8527") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9ec27a27f28f15a3601827e7ca150fd4cee32d795de3f113dcaee3eb723b8527";
    }
    const { url, name, size: t1 } = t0;
    const size = t1 === undefined ? 28 : t1;
    let t2;
    if ($[1] !== name) {
        t2 = name?.split(" ").map(_AvatarAnonymous).join("").toUpperCase().slice(0, 2) ?? "?";
        $[1] = name;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const initials = t2;
    if (url) {
        const t3 = name ?? "";
        let t4;
        if ($[3] !== size) {
            t4 = {
                width: size,
                height: size
            };
            $[3] = size;
            $[4] = t4;
        } else {
            t4 = $[4];
        }
        let t5;
        if ($[5] !== t3 || $[6] !== t4 || $[7] !== url) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: url,
                alt: t3,
                style: t4,
                className: "rounded-full object-cover shrink-0"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 112,
                columnNumber: 12
            }, this);
            $[5] = t3;
            $[6] = t4;
            $[7] = url;
            $[8] = t5;
        } else {
            t5 = $[8];
        }
        return t5;
    }
    const t3 = size * 0.38;
    let t4;
    if ($[9] !== size || $[10] !== t3) {
        t4 = {
            width: size,
            height: size,
            fontSize: t3
        };
        $[9] = size;
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== initials || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t4,
            className: "rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0",
            children: initials
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[12] = initials;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = Avatar;
function _AvatarAnonymous(w) {
    return w[0];
}
function RecentRouteCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "9ec27a27f28f15a3601827e7ca150fd4cee32d795de3f113dcaee3eb723b8527") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9ec27a27f28f15a3601827e7ca150fd4cee32d795de3f113dcaee3eb723b8527";
    }
    const { route } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] !== route.days_of_week || $[2] !== route.departure_time || $[3] !== route.destination_name || $[4] !== route.origin_name || $[5] !== route.price_per_seat || $[6] !== route.seats_available) {
        const days = [
            ...route.days_of_week ?? []
        ].sort(_RecentRouteCardAnonymous);
        t1 = "bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md hover:border-blue-200 transition-all";
        let t4;
        if ($[10] !== route.origin_name) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold text-gray-800 text-sm truncate max-w-[130px]",
                children: route.origin_name
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 169,
                columnNumber: 12
            }, this);
            $[10] = route.origin_name;
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        let t5;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-blue-400 text-xs shrink-0",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 177,
                columnNumber: 12
            }, this);
            $[12] = t5;
        } else {
            t5 = $[12];
        }
        let t6;
        if ($[13] !== route.destination_name) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold text-gray-800 text-sm truncate max-w-[130px]",
                children: route.destination_name
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 184,
                columnNumber: 12
            }, this);
            $[13] = route.destination_name;
            $[14] = t6;
        } else {
            t6 = $[14];
        }
        let t7;
        if ($[15] !== t4 || $[16] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 flex-wrap",
                children: [
                    t4,
                    t5,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 192,
                columnNumber: 12
            }, this);
            $[15] = t4;
            $[16] = t6;
            $[17] = t7;
        } else {
            t7 = $[17];
        }
        let t8;
        if ($[18] !== route.departure_time) {
            t8 = route.departure_time?.slice(0, 5);
            $[18] = route.departure_time;
            $[19] = t8;
        } else {
            t8 = $[19];
        }
        let t9;
        if ($[20] !== t8) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "🕐 ",
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 209,
                columnNumber: 12
            }, this);
            $[20] = t8;
            $[21] = t9;
        } else {
            t9 = $[21];
        }
        let t10;
        if ($[22] !== route.seats_available) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "💺 ",
                    route.seats_available,
                    " pl."
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 217,
                columnNumber: 13
            }, this);
            $[22] = route.seats_available;
            $[23] = t10;
        } else {
            t10 = $[23];
        }
        let t11;
        if ($[24] !== route.price_per_seat) {
            t11 = route.price_per_seat != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-blue-600 font-semibold",
                children: [
                    "💶 ",
                    route.price_per_seat,
                    "€"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 225,
                columnNumber: 44
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-green-600 font-semibold",
                children: "Gratis"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 225,
                columnNumber: 126
            }, this);
            $[24] = route.price_per_seat;
            $[25] = t11;
        } else {
            t11 = $[25];
        }
        let t12;
        if ($[26] !== t10 || $[27] !== t11 || $[28] !== t9) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-xs text-gray-500",
                children: [
                    t9,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this);
            $[26] = t10;
            $[27] = t11;
            $[28] = t9;
            $[29] = t12;
        } else {
            t12 = $[29];
        }
        if ($[30] !== t12 || $[31] !== t7) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2",
                children: [
                    t7,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 242,
                columnNumber: 12
            }, this);
            $[30] = t12;
            $[31] = t7;
            $[32] = t2;
        } else {
            t2 = $[32];
        }
        t3 = days.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1 mb-3",
            children: WEEK_DAYS.map({
                "RecentRouteCard[WEEK_DAYS.map()]": (d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center ${days.includes(d.value) ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`,
                        children: d.label
                    }, d.value, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 250,
                        columnNumber: 50
                    }, this)
            }["RecentRouteCard[WEEK_DAYS.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 249,
            columnNumber: 29
        }, this);
        $[1] = route.days_of_week;
        $[2] = route.departure_time;
        $[3] = route.destination_name;
        $[4] = route.origin_name;
        $[5] = route.price_per_seat;
        $[6] = route.seats_available;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
    } else {
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
    }
    let t4;
    if ($[33] !== route.driver) {
        t4 = route.driver ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                    url: route.driver.avatar_url,
                    name: route.driver.full_name,
                    size: 22
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 268,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-500 truncate max-w-[110px]",
                    children: route.driver.full_name
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 268,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 268,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 268,
            columnNumber: 251
        }, this);
        $[33] = route.driver;
        $[34] = t4;
    } else {
        t4 = $[34];
    }
    const t5 = `/routes/${route.id}`;
    let t6;
    if ($[35] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t5,
            className: "text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition shrink-0",
            children: "Ver →"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 277,
            columnNumber: 10
        }, this);
        $[35] = t5;
        $[36] = t6;
    } else {
        t6 = $[36];
    }
    let t7;
    if ($[37] !== t4 || $[38] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 285,
            columnNumber: 10
        }, this);
        $[37] = t4;
        $[38] = t6;
        $[39] = t7;
    } else {
        t7 = $[39];
    }
    let t8;
    if ($[40] !== t1 || $[41] !== t2 || $[42] !== t3 || $[43] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 294,
            columnNumber: 10
        }, this);
        $[40] = t1;
        $[41] = t2;
        $[42] = t3;
        $[43] = t7;
        $[44] = t8;
    } else {
        t8 = $[44];
    }
    return t8;
}
_c1 = RecentRouteCard;
function _RecentRouteCardAnonymous(a, b) {
    return a - b;
}
function HomePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(122);
    if ($[0] !== "9ec27a27f28f15a3601827e7ca150fd4cee32d795de3f113dcaee3eb723b8527") {
        for(let $i = 0; $i < 122; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9ec27a27f28f15a3601827e7ca150fd4cee32d795de3f113dcaee3eb723b8527";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [mapRoutes, setMapRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [recentRoutes, setRecentRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [originAddress, setOriginAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [destinationAddress, setDestinationAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [originCoords, setOriginCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [destinationCoords, setDestinationCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [departureTime, setDepartureTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [selectedDays, setSelectedDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [selectedPreferences, setSelectedPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [showPreferences, setShowPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passengerCount, setPassengerCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const [originSuggestions, setOriginSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const [destSuggestions, setDestSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    const [showOriginSuggestions, setShowOriginSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDestSuggestions, setShowDestSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const MAPBOX_TOKEN = ("TURBOPACK compile-time value", "pk.eyJ1IjoibWF1cmlvamVkYSIsImEiOiJjbG5uMG9jMzEwMWk2MnFtbjRxbDB1MTRoIn0.xagJkDt94ClTWwJF6DxsPA");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const supabase = t6;
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "HomePage[useEffect()]": ()=>{
                const fetchData = {
                    "HomePage[useEffect() > fetchData]": async ()=>{
                        const { data: mapData } = await supabase.from("routes").select("id, origin_name, destination_name").eq("active", true);
                        if (mapData && mapData.length > 0) {
                            const routesWithGeo = await Promise.all(mapData.map({
                                "HomePage[useEffect() > fetchData > mapData.map()]": async (route)=>{
                                    const { data: geoData } = await supabase.rpc("get_route_geojson", {
                                        route_id: route.id
                                    });
                                    return {
                                        ...route,
                                        origin_geo: geoData?.origin_geo || null,
                                        destination_geo: geoData?.destination_geo || null,
                                        route_line_geo: geoData?.route_line_geo || null
                                    };
                                }
                            }["HomePage[useEffect() > fetchData > mapData.map()]"]));
                            setMapRoutes(routesWithGeo);
                        }
                        const { data: recent } = await supabase.from("routes").select("id, origin_name, destination_name, departure_time, days_of_week, seats_available, price_per_seat, driver:profiles!routes_driver_id_fkey(id, full_name, avatar_url)").eq("active", true).order("created_at", {
                            ascending: false
                        }).limit(3);
                        setRecentRoutes(recent ?? []);
                    }
                }["HomePage[useEffect() > fetchData]"];
                fetchData();
            }
        })["HomePage[useEffect()]"];
        t8 = [];
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "HomePage[searchMapbox]": async (query, type)=>{
                if (query.length < 3) {
                    type === "origin" ? setOriginSuggestions([]) : setDestSuggestions([]);
                    return;
                }
                const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?country=ES&proximity=-15.5,28.3&bbox=-18.5,27.5,-13.0,29.5&access_token=${MAPBOX_TOKEN}`);
                const data = await res.json();
                if (type === "origin") {
                    setOriginSuggestions(data.features || []);
                    setShowOriginSuggestions(true);
                } else {
                    setDestSuggestions(data.features || []);
                    setShowDestSuggestions(true);
                }
            }
        })["HomePage[searchMapbox]"];
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    const searchMapbox = t9;
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "HomePage[selectOrigin]": (s)=>{
                setOriginAddress(s.place_name);
                setOriginCoords({
                    lat: s.center[1],
                    lng: s.center[0]
                });
                setShowOriginSuggestions(false);
            }
        })["HomePage[selectOrigin]"];
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    const selectOrigin = t10;
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "HomePage[selectDestination]": (s_0)=>{
                setDestinationAddress(s_0.place_name);
                setDestinationCoords({
                    lat: s_0.center[1],
                    lng: s_0.center[0]
                });
                setShowDestSuggestions(false);
            }
        })["HomePage[selectDestination]"];
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    const selectDestination = t11;
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "HomePage[toggleDay]": (v)=>setSelectedDays({
                    "HomePage[toggleDay > setSelectedDays()]": (prev)=>prev.includes(v) ? prev.filter({
                            "HomePage[toggleDay > setSelectedDays() > prev.filter()]": (d)=>d !== v
                        }["HomePage[toggleDay > setSelectedDays() > prev.filter()]"]) : [
                            ...prev,
                            v
                        ]
                }["HomePage[toggleDay > setSelectedDays()]"])
        })["HomePage[toggleDay]"];
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    const toggleDay = t12;
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "HomePage[togglePreference]": (v_0)=>setSelectedPreferences({
                    "HomePage[togglePreference > setSelectedPreferences()]": (prev_0)=>prev_0.includes(v_0) ? prev_0.filter({
                            "HomePage[togglePreference > setSelectedPreferences() > prev_0.filter()]": (p)=>p !== v_0
                        }["HomePage[togglePreference > setSelectedPreferences() > prev_0.filter()]"]) : [
                            ...prev_0,
                            v_0
                        ]
                }["HomePage[togglePreference > setSelectedPreferences()]"])
        })["HomePage[togglePreference]"];
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    const togglePreference = t13;
    let t14;
    if ($[15] !== departureTime || $[16] !== destinationAddress || $[17] !== destinationCoords || $[18] !== originAddress || $[19] !== originCoords || $[20] !== passengerCount || $[21] !== router || $[22] !== selectedDays || $[23] !== selectedPreferences) {
        t14 = ({
            "HomePage[handleSearch]": (e)=>{
                e.preventDefault();
                const params = new URLSearchParams();
                if (originAddress.trim()) {
                    params.set("origin", originAddress.trim());
                }
                if (destinationAddress.trim()) {
                    params.set("destination", destinationAddress.trim());
                }
                if (originCoords) {
                    params.set("origin_lat", String(originCoords.lat));
                    params.set("origin_lng", String(originCoords.lng));
                }
                if (destinationCoords) {
                    params.set("dest_lat", String(destinationCoords.lat));
                    params.set("dest_lng", String(destinationCoords.lng));
                }
                if (departureTime) {
                    params.set("time", departureTime);
                }
                if (selectedDays.length > 0) {
                    params.set("days", selectedDays.join(","));
                }
                if (selectedPreferences.length > 0) {
                    params.set("preferences", selectedPreferences.join(","));
                }
                params.set("passengers", String(passengerCount));
                router.push(`/routes?${params.toString()}`);
            }
        })["HomePage[handleSearch]"];
        $[15] = departureTime;
        $[16] = destinationAddress;
        $[17] = destinationCoords;
        $[18] = originAddress;
        $[19] = originCoords;
        $[20] = passengerCount;
        $[21] = router;
        $[22] = selectedDays;
        $[23] = selectedPreferences;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    const handleSearch = t14;
    let t15;
    let t16;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl font-bold mb-4 leading-tight",
            children: [
                "Comparte viaje",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                    className: "hidden sm:block"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 566,
                    columnNumber: 79
                }, this),
                " en Canarias"
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 566,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl text-blue-200 mb-10",
            children: "Ahorra dinero, reduce tráfico y cuida el medio ambiente."
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        $[25] = t15;
        $[26] = t16;
    } else {
        t15 = $[25];
        t16 = $[26];
    }
    let t17;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase tracking-wide",
            children: "📍 Origen"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 576,
            columnNumber: 11
        }, this);
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "HomePage[<input>.onChange]": (e_0)=>{
                setOriginAddress(e_0.target.value);
                setOriginCoords(null);
                searchMapbox(e_0.target.value, "origin");
            }
        })["HomePage[<input>.onChange]"];
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== originSuggestions.length) {
        t19 = ({
            "HomePage[<input>.onFocus]": ()=>originSuggestions.length > 0 && setShowOriginSuggestions(true)
        })["HomePage[<input>.onFocus]"];
        $[29] = originSuggestions.length;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "HomePage[<input>.onBlur]": ()=>setTimeout({
                    "HomePage[<input>.onBlur > setTimeout()]": ()=>setShowOriginSuggestions(false)
                }["HomePage[<input>.onBlur > setTimeout()]"], 200)
        })["HomePage[<input>.onBlur]"];
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] !== originAddress || $[33] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Ej: Las Palmas...",
            value: originAddress,
            className: "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
            onChange: t18,
            onFocus: t19,
            onBlur: t20
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[32] = originAddress;
        $[33] = t19;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] !== originCoords) {
        t22 = originCoords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute right-3 bottom-3 text-green-500 text-sm font-bold",
            children: "✓"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 626,
            columnNumber: 27
        }, this);
        $[35] = originCoords;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    let t23;
    if ($[37] !== originSuggestions || $[38] !== showOriginSuggestions) {
        t23 = showOriginSuggestions && originSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-52 overflow-y-auto",
            children: originSuggestions.map({
                "HomePage[originSuggestions.map()]": (s_1, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseDown: {
                            "HomePage[originSuggestions.map() > <div>.onMouseDown]": (e_1)=>{
                                e_1.preventDefault();
                                selectOrigin(s_1);
                            }
                        }["HomePage[originSuggestions.map() > <div>.onMouseDown]"],
                        className: "px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-800",
                        children: s_1.place_name
                    }, i, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 635,
                        columnNumber: 58
                    }, this)
            }["HomePage[originSuggestions.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 634,
            columnNumber: 68
        }, this);
        $[37] = originSuggestions;
        $[38] = showOriginSuggestions;
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] !== t21 || $[41] !== t22 || $[42] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1 relative",
            children: [
                t17,
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 650,
            columnNumber: 11
        }, this);
        $[40] = t21;
        $[41] = t22;
        $[42] = t23;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase tracking-wide",
            children: "🏁 Destino"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 660,
            columnNumber: 11
        }, this);
        $[44] = t25;
    } else {
        t25 = $[44];
    }
    let t26;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = ({
            "HomePage[<input>.onChange]": (e_2)=>{
                setDestinationAddress(e_2.target.value);
                setDestinationCoords(null);
                searchMapbox(e_2.target.value, "dest");
            }
        })["HomePage[<input>.onChange]"];
        $[45] = t26;
    } else {
        t26 = $[45];
    }
    let t27;
    if ($[46] !== destSuggestions.length) {
        t27 = ({
            "HomePage[<input>.onFocus]": ()=>destSuggestions.length > 0 && setShowDestSuggestions(true)
        })["HomePage[<input>.onFocus]"];
        $[46] = destSuggestions.length;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "HomePage[<input>.onBlur]": ()=>setTimeout({
                    "HomePage[<input>.onBlur > setTimeout()]": ()=>setShowDestSuggestions(false)
                }["HomePage[<input>.onBlur > setTimeout()]"], 200)
        })["HomePage[<input>.onBlur]"];
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] !== destinationAddress || $[50] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Ej: Maspalomas...",
            value: destinationAddress,
            className: "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
            onChange: t26,
            onFocus: t27,
            onBlur: t28
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 701,
            columnNumber: 11
        }, this);
        $[49] = destinationAddress;
        $[50] = t27;
        $[51] = t29;
    } else {
        t29 = $[51];
    }
    let t30;
    if ($[52] !== destinationCoords) {
        t30 = destinationCoords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute right-3 bottom-3 text-green-500 text-sm font-bold",
            children: "✓"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 710,
            columnNumber: 32
        }, this);
        $[52] = destinationCoords;
        $[53] = t30;
    } else {
        t30 = $[53];
    }
    let t31;
    if ($[54] !== destSuggestions || $[55] !== showDestSuggestions) {
        t31 = showDestSuggestions && destSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-52 overflow-y-auto",
            children: destSuggestions.map({
                "HomePage[destSuggestions.map()]": (s_2, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseDown: {
                            "HomePage[destSuggestions.map() > <div>.onMouseDown]": (e_3)=>{
                                e_3.preventDefault();
                                selectDestination(s_2);
                            }
                        }["HomePage[destSuggestions.map() > <div>.onMouseDown]"],
                        className: "px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-800",
                        children: s_2.place_name
                    }, i_0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 719,
                        columnNumber: 58
                    }, this)
            }["HomePage[destSuggestions.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 718,
            columnNumber: 64
        }, this);
        $[54] = destSuggestions;
        $[55] = showDestSuggestions;
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    if ($[57] !== t29 || $[58] !== t30 || $[59] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1 relative",
            children: [
                t25,
                t29,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 734,
            columnNumber: 11
        }, this);
        $[57] = t29;
        $[58] = t30;
        $[59] = t31;
        $[60] = t32;
    } else {
        t32 = $[60];
    }
    let t33;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase tracking-wide",
            children: "🕐 Hora de salida"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 744,
            columnNumber: 11
        }, this);
        $[61] = t33;
    } else {
        t33 = $[61];
    }
    let t34;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = ({
            "HomePage[<input>.onChange]": (e_4)=>setDepartureTime(e_4.target.value)
        })["HomePage[<input>.onChange]"];
        $[62] = t34;
    } else {
        t34 = $[62];
    }
    let t35;
    if ($[63] !== departureTime) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "time",
                    value: departureTime,
                    onChange: t34,
                    className: "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 760,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 760,
            columnNumber: 11
        }, this);
        $[63] = departureTime;
        $[64] = t35;
    } else {
        t35 = $[64];
    }
    let t36;
    if ($[65] !== t24 || $[66] !== t32 || $[67] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-3 gap-3 mb-3",
            children: [
                t24,
                t32,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 768,
            columnNumber: 11
        }, this);
        $[65] = t24;
        $[66] = t32;
        $[67] = t35;
        $[68] = t36;
    } else {
        t36 = $[68];
    }
    let t37;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2",
            children: "📅 Días"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 778,
            columnNumber: 11
        }, this);
        $[69] = t37;
    } else {
        t37 = $[69];
    }
    let t38;
    if ($[70] !== selectedDays) {
        t38 = WEEK_DAYS.map({
            "HomePage[WEEK_DAYS.map()]": (day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "HomePage[WEEK_DAYS.map() > <button>.onClick]": ()=>toggleDay(day.value)
                    }["HomePage[WEEK_DAYS.map() > <button>.onClick]"],
                    className: `w-9 h-9 rounded-full text-xs font-bold transition border ${selectedDays.includes(day.value) ? "bg-blue-600 text-white border-blue-600" : "bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-400"}`,
                    children: day.label
                }, day.value, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 786,
                    columnNumber: 43
                }, this)
        }["HomePage[WEEK_DAYS.map()]"]);
        $[70] = selectedDays;
        $[71] = t38;
    } else {
        t38 = $[71];
    }
    let t39;
    if ($[72] !== selectedDays.length) {
        t39 = selectedDays.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "HomePage[<button>.onClick]": ()=>setSelectedDays([])
            }["HomePage[<button>.onClick]"],
            className: "text-xs text-gray-400 hover:text-gray-600 px-1",
            children: "✕"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 797,
            columnNumber: 38
        }, this);
        $[72] = selectedDays.length;
        $[73] = t39;
    } else {
        t39 = $[73];
    }
    let t40;
    if ($[74] !== t38 || $[75] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3",
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1.5 flex-wrap",
                    children: [
                        t38,
                        t39
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 807,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 807,
            columnNumber: 11
        }, this);
        $[74] = t38;
        $[75] = t39;
        $[76] = t40;
    } else {
        t40 = $[76];
    }
    let t41;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2",
            children: "👥 Pasajeros"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 816,
            columnNumber: 11
        }, this);
        $[77] = t41;
    } else {
        t41 = $[77];
    }
    let t42;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "HomePage[<button>.onClick]": ()=>setPassengerCount(_HomePageButtonOnClickSetPassengerCount)
            }["HomePage[<button>.onClick]"],
            className: "w-9 h-9 rounded-full border border-gray-200 bg-gray-50 text-gray-600 font-bold text-lg hover:border-blue-400 transition flex items-center justify-center",
            children: "−"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 823,
            columnNumber: 11
        }, this);
        $[78] = t42;
    } else {
        t42 = $[78];
    }
    const t43 = passengerCount === 1 ? "pasajero" : "pasajeros";
    let t44;
    if ($[79] !== passengerCount || $[80] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-800 font-semibold text-sm w-24 text-center",
            children: [
                passengerCount,
                " ",
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 833,
            columnNumber: 11
        }, this);
        $[79] = passengerCount;
        $[80] = t43;
        $[81] = t44;
    } else {
        t44 = $[81];
    }
    let t45;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "HomePage[<button>.onClick]": ()=>setPassengerCount(_HomePageButtonOnClickSetPassengerCount2)
            }["HomePage[<button>.onClick]"],
            className: "w-9 h-9 rounded-full border border-gray-200 bg-gray-50 text-gray-600 font-bold text-lg hover:border-blue-400 transition flex items-center justify-center",
            children: "+"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 842,
            columnNumber: 11
        }, this);
        $[82] = t45;
    } else {
        t45 = $[82];
    }
    let t46;
    if ($[83] !== t44) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3",
            children: [
                t41,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        t42,
                        t44,
                        t45
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 851,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 851,
            columnNumber: 11
        }, this);
        $[83] = t44;
        $[84] = t46;
    } else {
        t46 = $[84];
    }
    let t47;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = ({
            "HomePage[<button>.onClick]": ()=>setShowPreferences(_HomePageButtonOnClickSetShowPreferences)
        })["HomePage[<button>.onClick]"];
        $[85] = t47;
    } else {
        t47 = $[85];
    }
    const t48 = showPreferences ? "\u25B2" : "\u25BC";
    let t49;
    if ($[86] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t48
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 869,
            columnNumber: 11
        }, this);
        $[86] = t48;
        $[87] = t49;
    } else {
        t49 = $[87];
    }
    let t50;
    if ($[88] !== selectedPreferences.length) {
        t50 = selectedPreferences.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full",
            children: selectedPreferences.length
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 877,
            columnNumber: 45
        }, this);
        $[88] = selectedPreferences.length;
        $[89] = t50;
    } else {
        t50 = $[89];
    }
    let t51;
    if ($[90] !== t49 || $[91] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t47,
            className: "flex items-center gap-2 text-sm text-blue-600 font-semibold hover:text-blue-800 transition",
            children: [
                t49,
                " Preferencias de viaje",
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 885,
            columnNumber: 11
        }, this);
        $[90] = t49;
        $[91] = t50;
        $[92] = t51;
    } else {
        t51 = $[92];
    }
    let t52;
    if ($[93] !== selectedPreferences || $[94] !== showPreferences) {
        t52 = showPreferences && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 flex flex-wrap gap-2",
            children: DRIVING_PREFERENCES.map({
                "HomePage[DRIVING_PREFERENCES.map()]": (pref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "HomePage[DRIVING_PREFERENCES.map() > <button>.onClick]": ()=>togglePreference(pref.value)
                        }["HomePage[DRIVING_PREFERENCES.map() > <button>.onClick]"],
                        className: `px-3 py-2 rounded-xl text-sm font-medium border transition ${selectedPreferences.includes(pref.value) ? "bg-blue-600 text-white border-blue-600" : "bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-400"}`,
                        children: pref.label
                    }, pref.value, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 895,
                        columnNumber: 56
                    }, this)
            }["HomePage[DRIVING_PREFERENCES.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 894,
            columnNumber: 30
        }, this);
        $[93] = selectedPreferences;
        $[94] = showPreferences;
        $[95] = t52;
    } else {
        t52 = $[95];
    }
    let t53;
    if ($[96] !== t51 || $[97] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t51,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 907,
            columnNumber: 11
        }, this);
        $[96] = t51;
        $[97] = t52;
        $[98] = t53;
    } else {
        t53 = $[98];
    }
    let t54;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-base transition shadow-lg",
            children: "🔍 Buscar rutas disponibles"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 916,
            columnNumber: 11
        }, this);
        $[99] = t54;
    } else {
        t54 = $[99];
    }
    let t55;
    if ($[100] !== handleSearch || $[101] !== t36 || $[102] !== t40 || $[103] !== t46 || $[104] !== t53) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-900 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-14 text-center",
                children: [
                    t15,
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSearch,
                        className: "bg-white rounded-2xl shadow-2xl p-5 text-left",
                        children: [
                            t36,
                            t40,
                            t46,
                            t53,
                            t54
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 923,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 923,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 923,
            columnNumber: 11
        }, this);
        $[100] = handleSearch;
        $[101] = t36;
        $[102] = t40;
        $[103] = t46;
        $[104] = t53;
        $[105] = t55;
    } else {
        t55 = $[105];
    }
    let t56;
    if ($[106] !== recentRoutes) {
        t56 = recentRoutes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-800",
                            children: "🛣️ Rutas recientes"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 935,
                            columnNumber: 103
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/routes",
                            className: "text-sm text-blue-600 font-semibold hover:underline",
                            children: "Ver todas →"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 935,
                            columnNumber: 175
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 935,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                    children: recentRoutes.map(_HomePageRecentRoutesMap)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 935,
                    columnNumber: 284
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 935,
            columnNumber: 38
        }, this);
        $[106] = recentRoutes;
        $[107] = t56;
    } else {
        t56 = $[107];
    }
    let t57;
    if ($[108] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-gray-800 mb-4",
            children: "🗺️ Rutas activas en el mapa"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 943,
            columnNumber: 11
        }, this);
        $[108] = t57;
    } else {
        t57 = $[108];
    }
    let t58;
    if ($[109] !== mapRoutes) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                t57,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[400px] w-full relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$map$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            routes: mapRoutes
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 950,
                            columnNumber: 155
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 950,
                        columnNumber: 112
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 950,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 950,
            columnNumber: 11
        }, this);
        $[109] = mapRoutes;
        $[110] = t58;
    } else {
        t58 = $[110];
    }
    let t59;
    if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-2xl shrink-0",
            children: "⚠️"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 958,
            columnNumber: 11
        }, this);
        $[111] = t59;
    } else {
        t59 = $[111];
    }
    let t60;
    let t61;
    if ($[112] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4",
            children: [
                t59,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-800 font-semibold text-sm leading-snug",
                            children: [
                                "Carpool Canarias es una plataforma de ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "underline underline-offset-2",
                                    children: "compartir gastos"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 966,
                                    columnNumber: 221
                                }, this),
                                ", no de transporte remunerado."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 966,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-xs mt-1 leading-relaxed",
                            children: "Recomendamos que el precio por plaza cubra únicamente los costes del viaje (combustible, peajes…) y no suponga un beneficio económico para el conductor/a."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 966,
                            columnNumber: 325
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 966,
                    columnNumber: 114
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 966,
            columnNumber: 11
        }, this);
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-gray-800 mb-6 text-center",
            children: "¿Por qué usar Carpool Canarias?"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 967,
            columnNumber: 11
        }, this);
        $[112] = t60;
        $[113] = t61;
    } else {
        t60 = $[112];
        t61 = $[113];
    }
    let t62;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                t61,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-6",
                    children: [
                        {
                            icon: "\uD83D\uDCB0",
                            title: "Ahorra dinero",
                            desc: "Comparte los gastos de combustible y peajes con otros pasajeros."
                        },
                        {
                            icon: "\uD83C\uDF31",
                            title: "Cuida el planeta",
                            desc: "Reduce las emisiones de CO\u2082 compartiendo veh\xEDculo."
                        },
                        {
                            icon: "\uD83E\uDD1D",
                            title: "Conecta",
                            desc: "Conoce gente nueva y haz tu viaje m\xE1s ameno."
                        }
                    ].map(_HomePageAnonymous)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 976,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 976,
            columnNumber: 11
        }, this);
        $[114] = t62;
    } else {
        t62 = $[114];
    }
    let t63;
    if ($[115] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-6 pt-4 border-t border-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/about",
                    className: "text-gray-400 hover:text-blue-600 text-sm transition",
                    children: "Acerca de nosotros"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 995,
                    columnNumber: 94
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/seguridad",
                    className: "text-gray-400 hover:text-blue-600 text-sm transition",
                    children: "Viaja seguro/a"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 995,
                    columnNumber: 204
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 995,
            columnNumber: 11
        }, this);
        $[115] = t63;
    } else {
        t63 = $[115];
    }
    let t64;
    if ($[116] !== t56 || $[117] !== t58) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 py-10 space-y-12",
            children: [
                t56,
                t58,
                t60,
                t62,
                t63
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 1002,
            columnNumber: 11
        }, this);
        $[116] = t56;
        $[117] = t58;
        $[118] = t64;
    } else {
        t64 = $[118];
    }
    let t65;
    if ($[119] !== t55 || $[120] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: [
                t55,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 1011,
            columnNumber: 11
        }, this);
        $[119] = t55;
        $[120] = t64;
        $[121] = t65;
    } else {
        t65 = $[121];
    }
    return t65;
}
_s(HomePage, "S5WbgtzZ6Vwz2PCkOosRZDbuPRs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = HomePage;
function _HomePageAnonymous(b) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md hover:border-blue-200 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl mb-3",
                children: b.icon
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1021,
                columnNumber: 150
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold text-gray-800 mb-2",
                children: b.title
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1021,
                columnNumber: 195
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-sm",
                children: b.desc
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1021,
                columnNumber: 262
            }, this)
        ]
    }, b.title, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1021,
        columnNumber: 10
    }, this);
}
function _HomePageRecentRoutesMap(route_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecentRouteCard, {
        route: route_0
    }, route_0.id, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1024,
        columnNumber: 10
    }, this);
}
function _HomePageButtonOnClickSetShowPreferences(p_0) {
    return !p_0;
}
function _HomePageButtonOnClickSetPassengerCount2(c_0) {
    return Math.min(8, c_0 + 1);
}
function _HomePageButtonOnClickSetPassengerCount(c) {
    return Math.max(1, c - 1);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "RecentRouteCard");
__turbopack_context__.k.register(_c2, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_19f58b44._.js.map