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
"[project]/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
function Avatar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "0193fdfa89f1e0e48b5e38077f90ee3d6c2f3a76b77483233248e78f66b1ba64") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0193fdfa89f1e0e48b5e38077f90ee3d6c2f3a76b77483233248e78f66b1ba64";
    }
    const { url, name, size: t1 } = t0;
    const size = t1 === undefined ? 32 : t1;
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
                className: "rounded-full object-cover ring-2 ring-white/30 shrink-0"
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 47,
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
            className: "rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0",
            children: initials
        }, void 0, false, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 73,
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
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "0193fdfa89f1e0e48b5e38077f90ee3d6c2f3a76b77483233248e78f66b1ba64") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0193fdfa89f1e0e48b5e38077f90ee3d6c2f3a76b77483233248e78f66b1ba64";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unread, setUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Header[useEffect()]": ()=>{
                const init = {
                    "Header[useEffect() > init]": async ()=>{
                        const { data: t1 } = await supabase.auth.getSession();
                        const { session } = t1;
                        if (!session) {
                            return;
                        }
                        setUser(session.user);
                        const { data: prof } = await supabase.from("profiles").select("full_name, avatar_url").eq("id", session.user.id).single();
                        setProfile(prof);
                        const { data: convs } = await supabase.from("conversations").select("id").or(`passenger_id.eq.${session.user.id},driver_id.eq.${session.user.id}`);
                        if (convs && convs.length > 0) {
                            const { count } = await supabase.from("messages").select("*", {
                                count: "exact",
                                head: true
                            }).in("conversation_id", convs.map(_HeaderUseEffectInitConvsMap)).neq("sender_id", session.user.id).is("read_at", null);
                            setUnread(count ?? 0);
                        }
                    }
                }["Header[useEffect() > init]"];
                init();
                const { data: t2 } = supabase.auth.onAuthStateChange({
                    "Header[useEffect() > supabase.auth.onAuthStateChange()]": (_e, session_0)=>{
                        setUser(session_0?.user ?? null);
                        if (!session_0) {
                            setProfile(null);
                            setUnread(0);
                        }
                    }
                }["Header[useEffect() > supabase.auth.onAuthStateChange()]"]);
                const { subscription } = t2;
                return ()=>subscription.unsubscribe();
            }
        })["Header[useEffect()]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== pathname) {
        t1 = [
            pathname
        ];
        $[2] = pathname;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] !== router) {
        t2 = ({
            "Header[handleLogout]": async ()=>{
                await supabase.auth.signOut();
                setUser(null);
                setProfile(null);
                setMenuOpen(false);
                router.push("/");
                router.refresh();
            }
        })["Header[handleLogout]"];
        $[4] = router;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleLogout = t2;
    let t3;
    if ($[6] !== pathname) {
        t3 = ({
            "Header[isActive]": (href)=>pathname === href || pathname.startsWith(href + "/")
        })["Header[isActive]"];
        $[6] = pathname;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const isActive = t3;
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-2xl",
            children: "🚗"
        }, void 0, false, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 195,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-2 shrink-0",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg font-bold text-white",
                    children: [
                        "Carpool ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-300",
                            children: "Canarias"
                        }, void 0, false, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 202,
                            columnNumber: 129
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/header.tsx",
                    lineNumber: 202,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const t6 = `px-4 py-2 rounded-lg text-sm font-medium transition ${isActive("/routes") ? "bg-blue-700 text-white" : "text-blue-100 hover:bg-blue-800 hover:text-white"}`;
    let t7;
    if ($[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/routes",
            className: t6,
            children: "Ver rutas"
        }, void 0, false, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 210,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== isActive || $[13] !== user) {
        t8 = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/dashboard",
            className: `px-4 py-2 rounded-lg text-sm font-medium transition ${isActive("/dashboard") ? "bg-blue-700 text-white" : "text-blue-100 hover:bg-blue-800 hover:text-white"}`,
            children: "Mi panel"
        }, void 0, false, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 218,
            columnNumber: 18
        }, this);
        $[12] = isActive;
        $[13] = user;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t7 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden md:flex items-center gap-1",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 227,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== handleLogout || $[19] !== isActive || $[20] !== menuOpen || $[21] !== profile?.avatar_url || $[22] !== profile?.full_name || $[23] !== unread || $[24] !== user) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 shrink-0",
            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/messages",
                        className: `relative w-9 h-9 flex items-center justify-center rounded-lg transition text-lg ${isActive("/messages") ? "bg-blue-700" : "hover:bg-blue-800"}`,
                        title: "Mensajes",
                        children: [
                            "💬",
                            unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center",
                                children: unread > 9 ? "9+" : unread
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 236,
                                columnNumber: 285
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 236,
                        columnNumber: 71
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/routes/create",
                        className: "hidden sm:flex items-center gap-1.5 bg-white text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition text-sm shadow-sm",
                        children: "+ Publicar viaje"
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 236,
                        columnNumber: 469
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Header[<button>.onClick]": ()=>setMenuOpen(_HeaderButtonOnClickSetMenuOpen)
                                }["Header[<button>.onClick]"],
                                className: "flex items-center gap-2 hover:bg-blue-800 rounded-lg px-2 py-1.5 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                        url: profile?.avatar_url,
                                        name: profile?.full_name,
                                        size: 30
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 238,
                                        columnNumber: 130
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:block text-sm text-white font-medium max-w-[90px] truncate",
                                        children: profile?.full_name?.split(" ")[0] ?? "Perfil"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 238,
                                        columnNumber: 202
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-300 text-xs",
                                        children: menuOpen ? "\u25B2" : "\u25BC"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 238,
                                        columnNumber: 343
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 236,
                                columnNumber: 694
                            }, this),
                            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 w-52 overflow-hidden z-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 bg-blue-50 border-b border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-gray-800 truncate",
                                                children: profile?.full_name ?? "Usuario"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 238,
                                                columnNumber: 636
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 truncate",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 238,
                                                columnNumber: 729
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 238,
                                        columnNumber: 573
                                    }, this),
                                    [
                                        {
                                            href: "/dashboard",
                                            icon: "\uD83D\uDCCA",
                                            label: "Mi panel"
                                        },
                                        {
                                            href: "/dashboard?tab=profile",
                                            icon: "\uD83D\uDC64",
                                            label: "Mi perfil"
                                        },
                                        {
                                            href: "/messages",
                                            icon: "\uD83D\uDCAC",
                                            label: "Mensajes",
                                            badge: unread
                                        },
                                        {
                                            href: "/routes/create",
                                            icon: "\uD83D\uDE97",
                                            label: "Publicar viaje"
                                        }
                                    ].map({
                                        "Header[(anonymous)()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                onClick: {
                                                    "Header[(anonymous)() > <Link>.onClick]": ()=>setMenuOpen(false)
                                                }["Header[(anonymous)() > <Link>.onClick]"],
                                                className: "flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 158
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 182
                                                    }, this),
                                                    item.badge != null && item.badge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                                                        children: item.badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 267
                                                    }, this)
                                                ]
                                            }, item.href, true, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 256,
                                                columnNumber: 48
                                            }, this)
                                    }["Header[(anonymous)()]"]),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLogout,
                                            className: "w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "🚪"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 217
                                                }, this),
                                                " Cerrar sesión"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 259,
                                            columnNumber: 83
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 259,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 238,
                                columnNumber: 444
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 236,
                        columnNumber: 668
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/auth/register",
                        className: "text-sm text-blue-200 hover:text-white font-medium transition px-3 py-2 rounded-lg hover:bg-blue-800",
                        children: "Registrarse"
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 259,
                        columnNumber: 282
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/auth/login",
                        className: "bg-white text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition text-sm shadow-sm",
                        children: "Iniciar sesión"
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 259,
                        columnNumber: 441
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[18] = handleLogout;
        $[19] = isActive;
        $[20] = menuOpen;
        $[21] = profile?.avatar_url;
        $[22] = profile?.full_name;
        $[23] = unread;
        $[24] = user;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== t10 || $[27] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-0 flex items-center justify-between h-16 gap-4",
            children: [
                t5,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t9;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== menuOpen) {
        t12 = menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-30",
            onClick: {
                "Header[<div>.onClick]": ()=>setMenuOpen(false)
            }["Header[<div>.onClick]"]
        }, void 0, false, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 282,
            columnNumber: 23
        }, this);
        $[29] = menuOpen;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== t11 || $[32] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-blue-900 shadow-lg sticky top-0 z-40",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/header.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[31] = t11;
        $[32] = t12;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    return t13;
}
_s(Header, "JcRsQYhX9f/VTfRxNUBcyOTmLI8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Header;
function _HeaderButtonOnClickSetMenuOpen(v) {
    return !v;
}
function _HeaderUseEffectInitConvsMap(c) {
    return c.id;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_389bfb12._.js.map