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
"[project]/app/auth/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
function LoginPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "16fbb6e4ad240cd3d52d3ca41e838a3eb4dbc40a398a5855d0e8c61114fdf1ef") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16fbb6e4ad240cd3d52d3ca41e838a3eb4dbc40a398a5855d0e8c61114fdf1ef";
    }
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    const [resetSent, setResetSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== email || $[2] !== password || $[3] !== router) {
        t0 = ({
            "LoginPage[handleLogin]": async (e)=>{
                e.preventDefault();
                setLoading(true);
                setErrorMsg("");
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password
                });
                if (error) {
                    setErrorMsg("Credenciales incorrectas o usuario no verificado.");
                    setLoading(false);
                } else {
                    router.push("/");
                    router.refresh();
                }
            }
        })["LoginPage[handleLogin]"];
        $[1] = email;
        $[2] = password;
        $[3] = router;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const handleLogin = t0;
    let t1;
    if ($[5] !== email) {
        t1 = ({
            "LoginPage[handleReset]": async (e_0)=>{
                e_0.preventDefault();
                setLoading(true);
                setErrorMsg("");
                const { error: error_0 } = await supabase.auth.resetPasswordForEmail(email, {
                    redirectTo: `${window.location.origin}/auth/update-password`
                });
                setLoading(false);
                if (error_0) {
                    setErrorMsg("No se pudo enviar el correo. Verifica el email introducido.");
                } else {
                    setResetSent(true);
                }
            }
        })["LoginPage[handleReset]"];
        $[5] = email;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const handleReset = t1;
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-5xl mb-3",
            children: "🚗"
        }, void 0, false, {
            fileName: "[project]/app/auth/login/page.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const t3 = mode === "login" ? "Iniciar sesi\xF3n" : "Recuperar contrase\xF1a";
    let t4;
    if ($[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-blue-600",
            children: t3
        }, void 0, false, {
            fileName: "[project]/app/auth/login/page.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const t5 = mode === "login" ? "Bienvenido/a de vuelta a Carpool Canarias" : "Te enviaremos un enlace para restablecer tu contrase\xF1a";
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-sm mt-1",
            children: t5
        }, void 0, false, {
            fileName: "[project]/app/auth/login/page.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t4 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                t2,
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/login/page.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== email || $[16] !== errorMsg || $[17] !== handleLogin || $[18] !== loading || $[19] !== mode || $[20] !== password) {
        t8 = mode === "login" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Correo electrónico"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 116,
                            columnNumber: 62
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "tu@email.com",
                            className: "w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all",
                            value: email,
                            onChange: {
                                "LoginPage[<input>.onChange]": (e_1)=>setEmail(e_1.target.value)
                            }["LoginPage[<input>.onChange]"],
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 116,
                            columnNumber: 152
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 116,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Contraseña"
                                }, void 0, false, {
                                    fileName: "[project]/app/auth/login/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 128
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "LoginPage[<button>.onClick]": ()=>{
                                            setMode("reset");
                                            setErrorMsg("");
                                        }
                                    }["LoginPage[<button>.onClick]"],
                                    className: "text-xs text-blue-600 hover:underline font-medium",
                                    children: "¿Olvidaste tu contraseña?"
                                }, void 0, false, {
                                    fileName: "[project]/app/auth/login/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 205
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 118,
                            columnNumber: 72
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                            className: "w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all",
                            value: password,
                            onChange: {
                                "LoginPage[<input>.onChange]": (e_2)=>setPassword(e_2.target.value)
                            }["LoginPage[<input>.onChange]"],
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 123,
                            columnNumber: 147
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 118,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogin,
                    disabled: loading,
                    className: "w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-base hover:bg-blue-700 disabled:bg-blue-300 transition-colors shadow-lg mt-2",
                    children: loading ? "Entrando..." : "Entrar"
                }, void 0, false, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 125,
                    columnNumber: 67
                }, this),
                errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-center text-red-500 bg-red-50 p-3 rounded-lg",
                    children: errorMsg
                }, void 0, false, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 125,
                    columnNumber: 323
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-600 text-sm pt-2",
                    children: [
                        "¿No tienes cuenta?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/auth/register",
                            className: "text-blue-600 font-semibold hover:underline",
                            children: "Regístrate"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 125,
                            columnNumber: 488
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 125,
                    columnNumber: 411
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/login/page.tsx",
            lineNumber: 116,
            columnNumber: 30
        }, this);
        $[15] = email;
        $[16] = errorMsg;
        $[17] = handleLogin;
        $[18] = loading;
        $[19] = mode;
        $[20] = password;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== email || $[23] !== errorMsg || $[24] !== handleReset || $[25] !== loading || $[26] !== mode || $[27] !== resetSent) {
        t9 = mode === "reset" && !resetSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "Correo electrónico"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 138,
                            columnNumber: 76
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "tu@email.com",
                            className: "w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all",
                            value: email,
                            onChange: {
                                "LoginPage[<input>.onChange]": (e_3)=>setEmail(e_3.target.value)
                            }["LoginPage[<input>.onChange]"],
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 138,
                            columnNumber: 166
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 138,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleReset,
                    disabled: loading,
                    className: "w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-base hover:bg-blue-700 disabled:bg-blue-300 transition-colors shadow-lg",
                    children: loading ? "Enviando..." : "Enviar enlace de recuperaci\xF3n"
                }, void 0, false, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 140,
                    columnNumber: 67
                }, this),
                errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-center text-red-500 bg-red-50 p-3 rounded-lg",
                    children: errorMsg
                }, void 0, false, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 140,
                    columnNumber: 344
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "LoginPage[<button>.onClick]": ()=>{
                            setMode("login");
                            setErrorMsg("");
                        }
                    }["LoginPage[<button>.onClick]"],
                    className: "w-full text-sm text-gray-500 hover:text-gray-700 text-center pt-1",
                    children: "← Volver al inicio de sesión"
                }, void 0, false, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 140,
                    columnNumber: 432
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/login/page.tsx",
            lineNumber: 138,
            columnNumber: 44
        }, this);
        $[22] = email;
        $[23] = errorMsg;
        $[24] = handleReset;
        $[25] = loading;
        $[26] = mode;
        $[27] = resetSent;
        $[28] = t9;
    } else {
        t9 = $[28];
    }
    let t10;
    if ($[29] !== email || $[30] !== mode || $[31] !== resetSent) {
        t10 = mode === "reset" && resetSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl",
                    children: "📬"
                }, void 0, false, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 158,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-700 bg-green-50 p-4 rounded-lg text-sm font-medium",
                    children: [
                        "Hemos enviado un enlace a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: email
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.tsx",
                            lineNumber: 158,
                            columnNumber: 220
                        }, this),
                        ". Revisa tu bandeja de entrada y sigue las instrucciones."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 158,
                    columnNumber: 117
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "LoginPage[<button>.onClick]": ()=>{
                            setMode("login");
                            setResetSent(false);
                            setErrorMsg("");
                        }
                    }["LoginPage[<button>.onClick]"],
                    className: "text-sm text-blue-600 hover:underline font-medium",
                    children: "← Volver al inicio de sesión"
                }, void 0, false, {
                    fileName: "[project]/app/auth/login/page.tsx",
                    lineNumber: 158,
                    columnNumber: 305
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/login/page.tsx",
            lineNumber: 158,
            columnNumber: 44
        }, this);
        $[29] = email;
        $[30] = mode;
        $[31] = resetSent;
        $[32] = t10;
    } else {
        t10 = $[32];
    }
    let t11;
    if ($[33] !== t10 || $[34] !== t7 || $[35] !== t8 || $[36] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md",
                children: [
                    t7,
                    t8,
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/app/auth/login/page.tsx",
                lineNumber: 174,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/auth/login/page.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[33] = t10;
        $[34] = t7;
        $[35] = t8;
        $[36] = t9;
        $[37] = t11;
    } else {
        t11 = $[37];
    }
    return t11;
}
_s(LoginPage, "0akrPwVuoPSJxSfBl0cRIK3/NOY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_c50b4704._.js.map