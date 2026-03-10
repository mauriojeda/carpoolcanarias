(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
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
const STATUS_CONFIG = {
    pending: {
        label: 'Pendiente',
        bg: 'bg-amber-100',
        text: 'text-amber-700',
        dot: 'bg-amber-400'
    },
    accepted: {
        label: 'Aceptado',
        bg: 'bg-green-100',
        text: 'text-green-700',
        dot: 'bg-green-500'
    },
    rejected: {
        label: 'Rechazado',
        bg: 'bg-red-100',
        text: 'text-red-700',
        dot: 'bg-red-400'
    }
};
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
async function loadAll(onProfile, onRoutes, onRequests, onDone, onRedirect) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        onRedirect();
        return;
    }
    const uid = session.user.id;
    const { data: prof } = await supabase.from('profiles').select('*').eq('id', uid).single();
    onProfile(prof ?? {
        id: uid,
        full_name: null,
        avatar_url: null,
        phone: null,
        bio: null,
        preferences: []
    });
    const { data: routes } = await supabase.from('routes').select('id, origin_name, destination_name, departure_time, days_of_week, seats_available, price_per_seat, active, created_at').eq('driver_id', uid).order('created_at', {
        ascending: false
    });
    let routesWithRequests = routes ?? [];
    if (routes && routes.length > 0) {
        const { data: allRequests } = await supabase.from('route_requests').select('id, status, created_at, route_id, passenger:profiles!route_requests_passenger_id_fkey(full_name, avatar_url)').in('route_id', routes.map((r)=>r.id));
        routesWithRequests = routes.map((route)=>({
                ...route,
                requests: (allRequests ?? []).filter((req)=>req.route_id === route.id)
            }));
    }
    onRoutes(routesWithRequests);
    const { data: reqs } = await supabase.from('route_requests').select('id, status, created_at, route_id').eq('passenger_id', uid).order('created_at', {
        ascending: false
    });
    let reqsWithRoute = [];
    if (reqs && reqs.length > 0) {
        const routeIds = reqs.map((r)=>r.route_id);
        const { data: routeDetails } = await supabase.from('routes').select('id, origin_name, destination_name, departure_time, driver_id').in('id', routeIds);
        const driverIds = [
            ...new Set((routeDetails ?? []).map((r)=>r.driver_id))
        ];
        const { data: driverProfiles } = await supabase.from('profiles').select('id, full_name, avatar_url').in('id', driverIds);
        reqsWithRoute = reqs.map((req)=>{
            const rd = (routeDetails ?? []).find((r)=>r.id === req.route_id);
            const dp = (driverProfiles ?? []).find((p)=>p.id === rd?.driver_id);
            return {
                ...req,
                route: {
                    id: rd?.id ?? '',
                    origin_name: rd?.origin_name ?? '',
                    destination_name: rd?.destination_name ?? '',
                    departure_time: rd?.departure_time ?? '',
                    driver: dp ? {
                        full_name: dp.full_name,
                        avatar_url: dp.avatar_url
                    } : undefined
                }
            };
        });
    }
    onRequests(reqsWithRoute);
    onDone();
}
async function uploadAvatar(file, userId) {
    const ext = file.name.split('.').pop();
    const { error } = await supabase.storage.from('avatars').upload(`${userId}/avatar.${ext}`, file, {
        upsert: true
    });
    if (error) return null;
    return supabase.storage.from('avatars').getPublicUrl(`${userId}/avatar.${ext}`).data.publicUrl;
}
function Avatar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3";
    }
    const { url, name, size: t1 } = t0;
    const size = t1 === undefined ? 40 : t1;
    let t2;
    if ($[1] !== name) {
        t2 = name?.split(" ").map(_AvatarAnonymous).join("").toUpperCase().slice(0, 2) ?? "??";
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
                className: "rounded-full object-cover ring-2 ring-blue-100 shrink-0"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 238,
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
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 264,
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
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3";
    }
    const { status } = t0;
    const c = STATUS_CONFIG[status];
    const t1 = `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`;
    const t2 = `w-1.5 h-1.5 rounded-full ${c.dot}`;
    let t3;
    if ($[1] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 292,
            columnNumber: 10
        }, this);
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== c.label || $[4] !== t1 || $[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: [
                t3,
                c.label
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 300,
            columnNumber: 10
        }, this);
        $[3] = c.label;
        $[4] = t1;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
}
_c1 = Badge;
function MyRouteCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3";
    }
    const { route, onToggle, onDelete } = t0;
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== route.requests) {
        t1 = route.requests?.filter(_MyRouteCardAnonymous).length ?? 0;
        $[1] = route.requests;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const pendingCount = t1;
    const t2 = `bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-sm transition ${!route.active ? "opacity-60" : ""}`;
    let t3;
    if ($[3] !== route.origin_name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-semibold text-gray-800 truncate",
            children: route.origin_name
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 336,
            columnNumber: 10
        }, this);
        $[3] = route.origin_name;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-blue-400 shrink-0",
            children: "→"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 344,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== route.destination_name) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-semibold text-gray-800 truncate",
            children: route.destination_name
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 351,
            columnNumber: 10
        }, this);
        $[6] = route.destination_name;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t3 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-1 flex-wrap",
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 359,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== route.departure_time) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "🕐 ",
                route.departure_time
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 368,
            columnNumber: 10
        }, this);
        $[11] = route.departure_time;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== route.seats_available) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "💺 ",
                route.seats_available,
                " plazas"
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 376,
            columnNumber: 10
        }, this);
        $[13] = route.seats_available;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== route.price_per_seat) {
        t9 = route.price_per_seat != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-blue-600 font-semibold",
            children: [
                "💶 ",
                route.price_per_seat,
                "€/plaza"
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 384,
            columnNumber: 42
        }, this);
        $[15] = route.price_per_seat;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t7 || $[18] !== t8 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500",
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== route.days_of_week) {
        t11 = (route.days_of_week ?? []).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1 mt-2",
            children: WEEK_DAYS.map({
                "MyRouteCard[WEEK_DAYS.map()]": (d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center ${route.days_of_week.includes(d.value) ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`,
                        children: d.label
                    }, d.value, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 403,
                        columnNumber: 46
                    }, this)
            }["MyRouteCard[WEEK_DAYS.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 402,
            columnNumber: 52
        }, this);
        $[21] = route.days_of_week;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t10 || $[24] !== t11 || $[25] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t6,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 412,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t11;
        $[25] = t6;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== pendingCount) {
        t13 = pendingCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bg-amber-400 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse",
            children: pendingCount
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 422,
            columnNumber: 31
        }, this);
        $[27] = pendingCount;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    const t14 = `text-xs font-medium px-2 py-0.5 rounded-full ${route.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`;
    const t15 = route.active ? "Activa" : "Inactiva";
    let t16;
    if ($[29] !== t14 || $[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t14,
            children: t15
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[29] = t14;
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t13 || $[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 441,
            columnNumber: 11
        }, this);
        $[32] = t13;
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    const t18 = `/routes/${route.id}/edit`;
    let t19;
    if ($[35] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t18,
            className: "w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-sm transition",
            title: "Editar",
            children: "✏️"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 451,
            columnNumber: 11
        }, this);
        $[35] = t18;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    const t20 = route.active ? "\u23F8" : "\u25B6\uFE0F";
    let t21;
    if ($[37] !== onToggle || $[38] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onToggle,
            className: "w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-sm transition",
            children: t20
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[37] = onToggle;
        $[38] = t20;
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    let t22;
    if ($[40] !== onDelete) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onDelete,
            className: "w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center text-sm transition",
            children: "🗑"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[40] = onDelete;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== t19 || $[43] !== t21 || $[44] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t19,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[42] = t19;
        $[43] = t21;
        $[44] = t22;
        $[45] = t23;
    } else {
        t23 = $[45];
    }
    let t24;
    if ($[46] !== t17 || $[47] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-end gap-2 shrink-0",
            children: [
                t17,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 487,
            columnNumber: 11
        }, this);
        $[46] = t17;
        $[47] = t23;
        $[48] = t24;
    } else {
        t24 = $[48];
    }
    let t25;
    if ($[49] !== t12 || $[50] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-3",
            children: [
                t12,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[49] = t12;
        $[50] = t24;
        $[51] = t25;
    } else {
        t25 = $[51];
    }
    let t26;
    if ($[52] !== expanded || $[53] !== route.requests) {
        t26 = (route.requests?.length ?? 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 pt-3 border-t border-gray-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "MyRouteCard[<button>.onClick]": ()=>setExpanded(_MyRouteCardButtonOnClickSetExpanded)
                    }["MyRouteCard[<button>.onClick]"],
                    className: "text-xs text-blue-600 font-semibold hover:underline",
                    children: [
                        expanded ? "\u25B2" : "\u25BC",
                        " ",
                        route.requests.length,
                        " solicitud",
                        route.requests.length !== 1 ? "es" : ""
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 505,
                    columnNumber: 100
                }, this),
                expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 space-y-2",
                    children: route.requests.map(_MyRouteCardRouteRequestsMap)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 507,
                    columnNumber: 236
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 505,
            columnNumber: 48
        }, this);
        $[52] = expanded;
        $[53] = route.requests;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    let t27;
    if ($[55] !== t2 || $[56] !== t25 || $[57] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[55] = t2;
        $[56] = t25;
        $[57] = t26;
        $[58] = t27;
    } else {
        t27 = $[58];
    }
    return t27;
}
_s(MyRouteCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c2 = MyRouteCard;
function _MyRouteCardRouteRequestsMap(req) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                url: req.passenger?.avatar_url,
                name: req.passenger?.full_name,
                size: 28
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 527,
                columnNumber: 96
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-700 font-medium flex-1 truncate",
                children: req.passenger?.full_name ?? "Usuario"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 527,
                columnNumber: 180
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                status: req.status
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 527,
                columnNumber: 294
            }, this)
        ]
    }, req.id, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 527,
        columnNumber: 10
    }, this);
}
function _MyRouteCardButtonOnClickSetExpanded(e) {
    return !e;
}
function _MyRouteCardAnonymous(r) {
    return r.status === "pending";
}
function MyRequestCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3";
    }
    const { request } = t0;
    const t1 = request.route?.driver?.avatar_url;
    const t2 = request.route?.driver?.full_name;
    let t3;
    if ($[1] !== t1 || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
            url: t1,
            name: t2,
            size: 40
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 550,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = request.route?.origin_name;
    let t5;
    if ($[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-semibold text-gray-800 truncate",
            children: t4
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 560,
            columnNumber: 10
        }, this);
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-blue-400 shrink-0 text-xs",
            children: "→"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 568,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const t7 = request.route?.destination_name;
    let t8;
    if ($[7] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-semibold text-gray-800 truncate",
            children: t7
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 576,
            columnNumber: 10
        }, this);
        $[7] = t7;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== t5 || $[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-0.5 flex-wrap",
            children: [
                t5,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 584,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = request.route?.driver?.full_name ?? "Desconocido";
    let t11;
    if ($[12] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500",
            children: [
                "Conductor: ",
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== request.route) {
        t12 = request.route?.departure_time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 mt-0.5",
            children: [
                "🕐 ",
                request.route.departure_time
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 602,
            columnNumber: 44
        }, this);
        $[14] = request.route;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== t11 || $[17] !== t12 || $[18] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t9,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 610,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t12;
        $[18] = t9;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== request.status) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
            status: request.status
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[20] = request.status;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== t13 || $[23] !== t14 || $[24] !== t3) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-sm transition",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    t3,
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 628,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 628,
            columnNumber: 11
        }, this);
        $[22] = t13;
        $[23] = t14;
        $[24] = t3;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    return t15;
}
_c3 = MyRequestCard;
function ProfilePanel(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3";
    }
    const { profile, onSave } = t0;
    const t1 = profile.full_name ?? "";
    const t2 = profile.phone ?? "";
    const t3 = profile.bio ?? "";
    let t4;
    if ($[1] !== profile.preferences) {
        t4 = profile.preferences ?? [];
        $[1] = profile.preferences;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    if ($[3] !== t1 || $[4] !== t2 || $[5] !== t3 || $[6] !== t4) {
        t5 = {
            full_name: t1,
            phone: t2,
            bio: t3,
            preferences: t4
        };
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingAvatar, setUploadingAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatarPreview, setAvatarPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(profile.avatar_url ?? null);
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "ProfilePanel[toggle]": (v)=>setForm({
                    "ProfilePanel[toggle > setForm()]": (f)=>({
                            ...f,
                            preferences: f.preferences.includes(v) ? f.preferences.filter({
                                "ProfilePanel[toggle > setForm() > f.preferences.filter()]": (p)=>p !== v
                            }["ProfilePanel[toggle > setForm() > f.preferences.filter()]"]) : [
                                ...f.preferences,
                                v
                            ]
                        })
                }["ProfilePanel[toggle > setForm()]"])
        })["ProfilePanel[toggle]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const toggle = t6;
    let t7;
    if ($[9] !== onSave) {
        t7 = ({
            "ProfilePanel[handleAvatarChange]": async (e)=>{
                const file = e.target.files?.[0];
                if (!file) {
                    return;
                }
                setAvatarPreview(URL.createObjectURL(file));
                setUploadingAvatar(true);
                const { data: t8 } = await supabase.auth.getSession();
                const { session } = t8;
                if (session) {
                    const url = await uploadAvatar(file, session.user.id);
                    if (url) {
                        await onSave({
                            avatar_url: url
                        });
                    }
                }
                setUploadingAvatar(false);
            }
        })["ProfilePanel[handleAvatarChange]"];
        $[9] = onSave;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const handleAvatarChange = t7;
    let t8;
    if ($[11] !== form || $[12] !== onSave) {
        t8 = ({
            "ProfilePanel[handleSave]": async ()=>{
                setSaving(true);
                await onSave(form);
                setSaving(false);
                setSaved(true);
                setTimeout({
                    "ProfilePanel[handleSave > setTimeout()]": ()=>setSaved(false)
                }["ProfilePanel[handleSave > setTimeout()]"], 2000);
            }
        })["ProfilePanel[handleSave]"];
        $[11] = form;
        $[12] = onSave;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const handleSave = t8;
    let t9;
    if ($[14] !== avatarPreview || $[15] !== form.full_name) {
        t9 = avatarPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: avatarPreview,
            alt: "Avatar",
            style: {
                width: 64,
                height: 64
            },
            className: "rounded-full object-cover ring-2 ring-blue-100"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 754,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 64,
                height: 64
            },
            className: "rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold",
            children: form.full_name?.split(" ").map(_ProfilePanelAnonymous).join("").toUpperCase().slice(0, 2) ?? "??"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 757,
            columnNumber: 72
        }, this);
        $[14] = avatarPreview;
        $[15] = form.full_name;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== uploadingAvatar) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center",
            children: uploadingAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 769,
                columnNumber: 167
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white text-lg",
                children: "📷"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 769,
                columnNumber: 266
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 769,
            columnNumber: 11
        }, this);
        $[17] = uploadingAvatar;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== handleAvatarChange || $[20] !== uploadingAvatar) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            accept: "image/png,image/jpeg,image/webp",
            className: "hidden",
            onChange: handleAvatarChange,
            disabled: uploadingAvatar
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 777,
            columnNumber: 11
        }, this);
        $[19] = handleAvatarChange;
        $[20] = uploadingAvatar;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t10 || $[23] !== t11 || $[24] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "cursor-pointer group relative shrink-0",
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 786,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
        $[24] = t9;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    const t13 = uploadingAvatar ? "\u23F3 Subiendo..." : "Toca para cambiar foto";
    let t14;
    if ($[26] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 mb-1",
            children: t13
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 797,
            columnNumber: 11
        }, this);
        $[26] = t13;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "ProfilePanel[<input>.onChange]": (e_0)=>setForm({
                    "ProfilePanel[<input>.onChange > setForm()]": (f_0)=>({
                            ...f_0,
                            full_name: e_0.target.value
                        })
                }["ProfilePanel[<input>.onChange > setForm()]"])
        })["ProfilePanel[<input>.onChange]"];
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== form.full_name) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.full_name,
            onChange: t15,
            className: "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
            placeholder: "Tu nombre"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 819,
            columnNumber: 11
        }, this);
        $[29] = form.full_name;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== t14 || $[32] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 827,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t16;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== t12 || $[35] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4",
            children: [
                t12,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 836,
            columnNumber: 11
        }, this);
        $[34] = t12;
        $[35] = t17;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xs font-bold text-gray-400 uppercase tracking-wide",
            children: "Contacto"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 845,
            columnNumber: 11
        }, this);
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "ProfilePanel[<input>.onChange]": (e_1)=>setForm({
                    "ProfilePanel[<input>.onChange > setForm()]": (f_1)=>({
                            ...f_1,
                            phone: e_1.target.value
                        })
                }["ProfilePanel[<input>.onChange > setForm()]"])
        })["ProfilePanel[<input>.onChange]"];
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== form.phone) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: form.phone,
            onChange: t20,
            className: "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
            placeholder: "+34 600 000 000",
            type: "tel"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 866,
            columnNumber: 11
        }, this);
        $[39] = form.phone;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "ProfilePanel[<textarea>.onChange]": (e_2)=>setForm({
                    "ProfilePanel[<textarea>.onChange > setForm()]": (f_2)=>({
                            ...f_2,
                            bio: e_2.target.value
                        })
                }["ProfilePanel[<textarea>.onChange > setForm()]"])
        })["ProfilePanel[<textarea>.onChange]"];
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== form.bio) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            value: form.bio,
            onChange: t22,
            className: "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none h-20",
            placeholder: "Cu\xE9ntale algo a tus compa\xF1eros de viaje..."
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 888,
            columnNumber: 11
        }, this);
        $[42] = form.bio;
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    let t24;
    if ($[44] !== t21 || $[45] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border border-gray-200 rounded-2xl p-5 space-y-3",
            children: [
                t19,
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 896,
            columnNumber: 11
        }, this);
        $[44] = t21;
        $[45] = t23;
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xs font-bold text-gray-400 uppercase tracking-wide mb-3",
            children: "Preferencias de viaje"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 905,
            columnNumber: 11
        }, this);
        $[47] = t25;
    } else {
        t25 = $[47];
    }
    let t26;
    if ($[48] !== form.preferences) {
        t26 = DRIVING_PREFERENCES.map({
            "ProfilePanel[DRIVING_PREFERENCES.map()]": (p_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "ProfilePanel[DRIVING_PREFERENCES.map() > <button>.onClick]": ()=>toggle(p_0.value)
                    }["ProfilePanel[DRIVING_PREFERENCES.map() > <button>.onClick]"],
                    className: `px-3 py-1.5 rounded-xl text-sm font-medium border transition ${form.preferences.includes(p_0.value) ? "bg-blue-600 text-white border-blue-600" : "bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-400"}`,
                    children: p_0.label
                }, p_0.value, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 913,
                    columnNumber: 57
                }, this)
        }["ProfilePanel[DRIVING_PREFERENCES.map()]"]);
        $[48] = form.preferences;
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    let t27;
    if ($[50] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border border-gray-200 rounded-2xl p-5",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: t26
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 924,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 924,
            columnNumber: 11
        }, this);
        $[50] = t26;
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    const t28 = saving || uploadingAvatar;
    const t29 = `w-full py-3 rounded-xl font-bold text-white transition ${saved ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"} disabled:opacity-60`;
    const t30 = saving ? "Guardando..." : saved ? "\u2713 Guardado" : "Guardar cambios";
    let t31;
    if ($[52] !== handleSave || $[53] !== t28 || $[54] !== t29 || $[55] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSave,
            disabled: t28,
            className: t29,
            children: t30
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 935,
            columnNumber: 11
        }, this);
        $[52] = handleSave;
        $[53] = t28;
        $[54] = t29;
        $[55] = t30;
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    if ($[57] !== t18 || $[58] !== t24 || $[59] !== t27 || $[60] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t18,
                t24,
                t27,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 946,
            columnNumber: 11
        }, this);
        $[57] = t18;
        $[58] = t24;
        $[59] = t27;
        $[60] = t31;
        $[61] = t32;
    } else {
        t32 = $[61];
    }
    return t32;
}
_s1(ProfilePanel, "RGAceUFOgDxIjKDCRHRUs8D0838=");
_c4 = ProfilePanel;
function _ProfilePanelAnonymous(w) {
    return w[0];
}
function DashboardPage() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "074e9c7b341887c33c61dcedc29d37c83292a2b3f115e9917660938d07d586e3";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("tab") ?? "routes";
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const [myRoutes, setMyRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [myRequests, setMyRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t3;
    if ($[5] !== router) {
        t3 = ({
            "DashboardPage[useEffect()]": ()=>{
                const run = {
                    "DashboardPage[useEffect() > run]": ()=>loadAll(setProfile, setMyRoutes, setMyRequests, {
                            "DashboardPage[useEffect() > run > loadAll(arg3)]": ()=>setLoading(false)
                        }["DashboardPage[useEffect() > run > loadAll(arg3)]"], {
                            "DashboardPage[useEffect() > run > loadAll(arg4)]": ()=>router.push("/auth/login")
                        }["DashboardPage[useEffect() > run > loadAll(arg4)]"])
                }["DashboardPage[useEffect() > run]"];
                run();
                const handleVis = {
                    "DashboardPage[useEffect() > handleVis]": ()=>{
                        if (document.visibilityState === "visible") {
                            run();
                        }
                    }
                }["DashboardPage[useEffect() > handleVis]"];
                document.addEventListener("visibilitychange", handleVis);
                window.addEventListener("focus", run);
                return ()=>{
                    document.removeEventListener("visibilitychange", handleVis);
                    window.removeEventListener("focus", run);
                };
            }
        })["DashboardPage[useEffect()]"];
        $[5] = router;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "DashboardPage[handleToggleRoute]": async (id, current)=>{
                await supabase.from("routes").update({
                    active: !current
                }).eq("id", id);
                setMyRoutes({
                    "DashboardPage[handleToggleRoute > setMyRoutes()]": (r)=>r.map({
                            "DashboardPage[handleToggleRoute > setMyRoutes() > r.map()]": (rt)=>rt.id === id ? {
                                    ...rt,
                                    active: !current
                                } : rt
                        }["DashboardPage[handleToggleRoute > setMyRoutes() > r.map()]"])
                }["DashboardPage[handleToggleRoute > setMyRoutes()]"]);
            }
        })["DashboardPage[handleToggleRoute]"];
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const handleToggleRoute = t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "DashboardPage[handleDeleteRoute]": async (id_0)=>{
                if (!confirm("\xBFEliminar esta ruta?")) {
                    return;
                }
                await supabase.from("routes").delete().eq("id", id_0);
                setMyRoutes({
                    "DashboardPage[handleDeleteRoute > setMyRoutes()]": (r_0)=>r_0.filter({
                            "DashboardPage[handleDeleteRoute > setMyRoutes() > r_0.filter()]": (rt_0)=>rt_0.id !== id_0
                        }["DashboardPage[handleDeleteRoute > setMyRoutes() > r_0.filter()]"])
                }["DashboardPage[handleDeleteRoute > setMyRoutes()]"]);
            }
        })["DashboardPage[handleDeleteRoute]"];
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const handleDeleteRoute = t6;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "DashboardPage[handleSaveProfile]": async (data)=>{
                const { data: t8 } = await supabase.auth.getSession();
                const { session } = t8;
                if (!session) {
                    return;
                }
                await supabase.from("profiles").upsert({
                    id: session.user.id,
                    ...data
                });
                setProfile({
                    "DashboardPage[handleSaveProfile > setProfile()]": (p)=>p ? {
                            ...p,
                            ...data
                        } : p
                }["DashboardPage[handleSaveProfile > setProfile()]"]);
            }
        })["DashboardPage[handleSaveProfile]"];
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const handleSaveProfile = t7;
    let t8;
    if ($[11] !== myRoutes) {
        t8 = myRoutes.filter(_DashboardPageMyRoutesFilter);
        $[11] = myRoutes;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t8.length) {
        t9 = {
            icon: "\uD83D\uDEE3\uFE0F",
            value: t8.length,
            label: "Rutas activas"
        };
        $[13] = t8.length;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== myRoutes) {
        t10 = myRoutes.flatMap(_DashboardPageMyRoutesFlatMap).filter(_DashboardPageAnonymous);
        $[15] = myRoutes;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10.length) {
        t11 = {
            icon: "\uD83D\uDD14",
            value: t10.length,
            label: "Solicitudes pendientes"
        };
        $[17] = t10.length;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== myRequests) {
        t12 = myRequests.filter(_DashboardPageMyRequestsFilter);
        $[19] = myRequests;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t12.length) {
        t13 = {
            icon: "\u2708\uFE0F",
            value: t12.length,
            label: "Mis peticiones"
        };
        $[21] = t12.length;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== myRequests) {
        t14 = myRequests.filter(_DashboardPageMyRequestsFilter2);
        $[23] = myRequests;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t14.length) {
        t15 = {
            icon: "\u2705",
            value: t14.length,
            label: "Viajes confirmados"
        };
        $[25] = t14.length;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== t11 || $[28] !== t13 || $[29] !== t15 || $[30] !== t9) {
        t16 = [
            t9,
            t11,
            t13,
            t15
        ];
        $[27] = t11;
        $[28] = t13;
        $[29] = t15;
        $[30] = t9;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    const stats = t16;
    let t17;
    if ($[32] !== myRoutes) {
        t17 = myRoutes.flatMap(_DashboardPageMyRoutesFlatMap2).filter(_DashboardPageAnonymous2);
        $[32] = myRoutes;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== t17.length) {
        t18 = {
            key: "routes",
            icon: "\uD83D\uDEE3\uFE0F",
            label: "Mis rutas",
            badge: t17.length
        };
        $[34] = t17.length;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== myRequests) {
        t19 = myRequests.filter(_DashboardPageMyRequestsFilter3);
        $[36] = myRequests;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== t19.length) {
        t20 = {
            key: "requests",
            icon: "\u270B",
            label: "Mis solicitudes",
            badge: t19.length
        };
        $[38] = t19.length;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            key: "profile",
            icon: "\uD83D\uDC64",
            label: "Mi perfil"
        };
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== t18 || $[42] !== t20) {
        t22 = [
            t18,
            t20,
            t21
        ];
        $[41] = t18;
        $[42] = t20;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    const TABS = t22;
    if (loading) {
        let t23;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 1268,
                            columnNumber: 118
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "Cargando tu panel..."
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 1268,
                            columnNumber: 216
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 1268,
                    columnNumber: 68
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 1268,
                columnNumber: 13
            }, this);
            $[44] = t23;
        } else {
            t23 = $[44];
        }
        return t23;
    }
    let t23;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-gray-800",
            children: "Mi panel"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 1277,
            columnNumber: 11
        }, this);
        $[45] = t23;
    } else {
        t23 = $[45];
    }
    let t24;
    if ($[46] !== stats) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: stats.map(_DashboardPageStatsMap)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 1284,
            columnNumber: 11
        }, this);
        $[46] = stats;
        $[47] = t24;
    } else {
        t24 = $[47];
    }
    let t25;
    if ($[48] !== TABS || $[49] !== tab) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 border-b border-gray-200 pb-0",
            children: TABS.map({
                "DashboardPage[TABS.map()]": (t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "DashboardPage[TABS.map() > <button>.onClick]": ()=>setTab(t.key)
                        }["DashboardPage[TABS.map() > <button>.onClick]"],
                        className: `relative flex items-center gap-2 px-4 py-3 text-sm font-semibold transition border-b-2 -mb-px ${tab === t.key ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`,
                        children: [
                            t.icon,
                            " ",
                            t.label,
                            t.badge != null && t.badge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-1 -right-1 bg-amber-400 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center",
                                children: t.badge
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1295,
                                columnNumber: 329
                            }, this)
                        ]
                    }, t.key, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1293,
                        columnNumber: 43
                    }, this)
            }["DashboardPage[TABS.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 1292,
            columnNumber: 11
        }, this);
        $[48] = TABS;
        $[49] = tab;
        $[50] = t25;
    } else {
        t25 = $[50];
    }
    let t26;
    if ($[51] !== myRoutes || $[52] !== tab) {
        t26 = tab === "routes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: myRoutes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-2xl text-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-5xl mb-3",
                        children: "🗺️"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1305,
                        columnNumber: 162
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-gray-700 mb-1",
                        children: "Aún no has publicado rutas"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1305,
                        columnNumber: 198
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm mb-5",
                        children: "Crea tu primera ruta y empieza a compartir coche."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1305,
                        columnNumber: 282
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/routes/create",
                        className: "inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition",
                        children: "+ Publicar viaje"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1305,
                        columnNumber: 377
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 1305,
                columnNumber: 83
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400",
                                children: [
                                    myRoutes.length,
                                    " ruta",
                                    myRoutes.length !== 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1305,
                                columnNumber: 618
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/routes/create",
                                className: "text-sm font-semibold text-blue-600 hover:underline",
                                children: "+ Nueva ruta"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1305,
                                columnNumber: 715
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1305,
                        columnNumber: 567
                    }, this),
                    myRoutes.map({
                        "DashboardPage[myRoutes.map()]": (route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MyRouteCard, {
                                route: route,
                                onToggle: {
                                    "DashboardPage[myRoutes.map() > <MyRouteCard>.onToggle]": ()=>handleToggleRoute(route.id, route.active)
                                }["DashboardPage[myRoutes.map() > <MyRouteCard>.onToggle]"],
                                onDelete: {
                                    "DashboardPage[myRoutes.map() > <MyRouteCard>.onDelete]": ()=>handleDeleteRoute(route.id)
                                }["DashboardPage[myRoutes.map() > <MyRouteCard>.onDelete]"]
                            }, route.id, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1306,
                                columnNumber: 53
                            }, this)
                    }["DashboardPage[myRoutes.map()]"])
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 1305,
            columnNumber: 31
        }, this);
        $[51] = myRoutes;
        $[52] = tab;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] !== myRequests || $[55] !== tab) {
        t27 = tab === "requests" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: myRequests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-2xl text-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-5xl mb-3",
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1320,
                        columnNumber: 166
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-gray-700 mb-1",
                        children: "Sin solicitudes enviadas"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1320,
                        columnNumber: 201
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm mb-5",
                        children: "Busca rutas disponibles y únete a un viaje."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1320,
                        columnNumber: 283
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/routes",
                        className: "inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition",
                        children: "Buscar rutas"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1320,
                        columnNumber: 372
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 1320,
                columnNumber: 87
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: myRequests.map(_DashboardPageMyRequestsMap)
            }, void 0, false)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 1320,
            columnNumber: 33
        }, this);
        $[54] = myRequests;
        $[55] = tab;
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] !== profile || $[58] !== tab) {
        t28 = tab === "profile" && profile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfilePanel, {
            profile: profile,
            onSave: handleSaveProfile
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 1329,
            columnNumber: 43
        }, this);
        $[57] = profile;
        $[58] = tab;
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    let t29;
    if ($[60] !== t24 || $[61] !== t25 || $[62] !== t26 || $[63] !== t27 || $[64] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-4 py-8 space-y-6",
            children: [
                t23,
                t24,
                t25,
                t26,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 1338,
            columnNumber: 11
        }, this);
        $[60] = t24;
        $[61] = t25;
        $[62] = t26;
        $[63] = t27;
        $[64] = t28;
        $[65] = t29;
    } else {
        t29 = $[65];
    }
    return t29;
}
_s2(DashboardPage, "L/w/LfNzJkl6TIrpGprJZ1Hi87E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c5 = DashboardPage;
function _DashboardPageMyRequestsMap(req) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MyRequestCard, {
        request: req
    }, req.id, false, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 1351,
        columnNumber: 10
    }, this);
}
function _DashboardPageStatsMap(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-200 rounded-2xl px-4 py-4 flex items-center gap-3 hover:shadow-sm transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl",
                children: s.icon
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 1354,
                columnNumber: 146
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold text-gray-800",
                        children: s.value
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1354,
                        columnNumber: 193
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400",
                        children: s.label
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1354,
                        columnNumber: 253
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 1354,
                columnNumber: 188
            }, this)
        ]
    }, s.label, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 1354,
        columnNumber: 10
    }, this);
}
function _DashboardPageMyRequestsFilter3(r_8) {
    return r_8.status === "pending";
}
function _DashboardPageAnonymous2(r_7) {
    return r_7.status === "pending";
}
function _DashboardPageMyRoutesFlatMap2(r_6) {
    return r_6.requests ?? [];
}
function _DashboardPageMyRequestsFilter2(r_5) {
    return r_5.status === "accepted";
}
function _DashboardPageMyRequestsFilter(r_4) {
    return r_4.status === "pending";
}
function _DashboardPageAnonymous(r_3) {
    return r_3.status === "pending";
}
function _DashboardPageMyRoutesFlatMap(r_2) {
    return r_2.requests ?? [];
}
function _DashboardPageMyRoutesFilter(r_1) {
    return r_1.active;
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "Badge");
__turbopack_context__.k.register(_c2, "MyRouteCard");
__turbopack_context__.k.register(_c3, "MyRequestCard");
__turbopack_context__.k.register(_c4, "ProfilePanel");
__turbopack_context__.k.register(_c5, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_dashboard_page_tsx_fb125c68._.js.map