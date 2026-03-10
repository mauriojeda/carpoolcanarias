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
"[project]/app/auth/register/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
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
function getPasswordChecks(pwd) {
    return [
        {
            label: 'Mínimo 8 caracteres',
            pass: pwd.length >= 8
        },
        {
            label: 'Una letra mayúscula (A-Z)',
            pass: /[A-Z]/.test(pwd)
        },
        {
            label: 'Una letra minúscula (a-z)',
            pass: /[a-z]/.test(pwd)
        },
        {
            label: 'Un número (0-9)',
            pass: /[0-9]/.test(pwd)
        },
        {
            label: 'Un símbolo (!@#$%...)',
            pass: /[^A-Za-z0-9]/.test(pwd)
        }
    ];
}
function getStrength(checks) {
    const passed = checks.filter((c)=>c.pass).length;
    if (passed <= 1) return {
        score: passed,
        label: 'Muy débil',
        color: 'bg-red-500',
        bg: 'text-red-600'
    };
    if (passed === 2) return {
        score: passed,
        label: 'Débil',
        color: 'bg-orange-400',
        bg: 'text-orange-500'
    };
    if (passed === 3) return {
        score: passed,
        label: 'Regular',
        color: 'bg-yellow-400',
        bg: 'text-yellow-600'
    };
    if (passed === 4) return {
        score: passed,
        label: 'Buena',
        color: 'bg-blue-500',
        bg: 'text-blue-600'
    };
    return {
        score: passed,
        label: 'Excelente',
        color: 'bg-green-500',
        bg: 'text-green-600'
    };
}
// ─── Componente indicador ─────────────────────────────────────────────────
function PasswordStrengthIndicator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "e343196550f9911fcc30e6b257b677b43722dc29be28766bbef15b978010c52d") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e343196550f9911fcc30e6b257b677b43722dc29be28766bbef15b978010c52d";
    }
    const { password } = t0;
    if (!password) {
        return null;
    }
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== password) {
        const checks = getPasswordChecks(password);
        const strength = getStrength(checks);
        const total = checks.length;
        t3 = "mt-2 space-y-2";
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1 flex-1",
                    children: Array.from({
                        length: total
                    }).map({
                        "PasswordStrengthIndicator[(anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-1.5 flex-1 rounded-full transition-all duration-300 ${i < strength.score ? strength.color : "bg-gray-200"}`
                            }, i, false, {
                                fileName: "[project]/app/auth/register/page.tsx",
                                lineNumber: 99,
                                columnNumber: 65
                            }, this)
                    }["PasswordStrengthIndicator[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/app/auth/register/page.tsx",
                    lineNumber: 96,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-xs font-semibold shrink-0 ${strength.bg}`,
                    children: strength.label
                }, void 0, false, {
                    fileName: "[project]/app/auth/register/page.tsx",
                    lineNumber: 100,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        t1 = "space-y-1";
        t2 = checks.map(_PasswordStrengthIndicatorChecksMap);
        $[1] = password;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t1 || $[7] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c = PasswordStrengthIndicator;
// ─── Página de registro ───────────────────────────────────────────────────
function _PasswordStrengthIndicatorChecksMap(check) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: `flex items-center gap-2 text-xs transition-colors ${check.pass ? "text-green-600" : "text-gray-400"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-all ${check.pass ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`,
                children: check.pass ? "\u2713" : "\xB7"
            }, void 0, false, {
                fileName: "[project]/app/auth/register/page.tsx",
                lineNumber: 138,
                columnNumber: 147
            }, this),
            check.label
        ]
    }, check.label, true, {
        fileName: "[project]/app/auth/register/page.tsx",
        lineNumber: 138,
        columnNumber: 10
    }, this);
}
function RegisterPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "e343196550f9911fcc30e6b257b677b43722dc29be28766bbef15b978010c52d") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e343196550f9911fcc30e6b257b677b43722dc29be28766bbef15b978010c52d";
    }
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [birthdate, setBirthdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== password) {
        const passwordChecks = getPasswordChecks(password);
        getStrength(passwordChecks);
        t0 = passwordChecks.every(_RegisterPagePasswordChecksEvery);
        $[1] = password;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const passwordValid = t0;
    const calculateAge = _RegisterPageCalculateAge;
    let t1;
    if ($[3] !== birthdate || $[4] !== email || $[5] !== fullName || $[6] !== password || $[7] !== passwordValid || $[8] !== router) {
        t1 = ({
            "RegisterPage[handleRegister]": async (e)=>{
                e.preventDefault();
                setLoading(true);
                setMessage(null);
                if (!fullName.trim()) {
                    setMessage({
                        type: "error",
                        text: "Por favor introduce tu nombre completo"
                    });
                    setLoading(false);
                    return;
                }
                if (!birthdate) {
                    setMessage({
                        type: "error",
                        text: "Por favor introduce tu fecha de nacimiento"
                    });
                    setLoading(false);
                    return;
                }
                if (calculateAge(birthdate) < 18) {
                    setMessage({
                        type: "error",
                        text: "Debes tener al menos 18 a\xF1os para registrarte"
                    });
                    setLoading(false);
                    return;
                }
                if (!passwordValid) {
                    setMessage({
                        type: "error",
                        text: "La contrase\xF1a no cumple los requisitos de seguridad"
                    });
                    setLoading(false);
                    return;
                }
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName
                        },
                        emailRedirectTo: `${window.location.origin}/auth/callback`
                    }
                });
                if (error) {
                    setMessage({
                        type: "error",
                        text: error.message
                    });
                    setLoading(false);
                    return;
                }
                const { data: t2 } = await supabase.auth.getSession();
                const { session } = t2;
                if (session) {
                    await supabase.from("profiles").upsert({
                        id: session.user.id,
                        full_name: fullName
                    });
                }
                setMessage({
                    type: "success",
                    text: "\xA1Cuenta creada! Revisa tu email para confirmarla."
                });
                setLoading(false);
                setTimeout({
                    "RegisterPage[handleRegister > setTimeout()]": ()=>router.push("/auth/login")
                }["RegisterPage[handleRegister > setTimeout()]"], 3000);
            }
        })["RegisterPage[handleRegister]"];
        $[3] = birthdate;
        $[4] = email;
        $[5] = fullName;
        $[6] = password;
        $[7] = passwordValid;
        $[8] = router;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const handleRegister = t1;
    let t2;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl mb-3",
                    children: "🚗"
                }, void 0, false, {
                    fileName: "[project]/app/auth/register/page.tsx",
                    lineNumber: 262,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-blue-600",
                    children: "Únete a Carpool"
                }, void 0, false, {
                    fileName: "[project]/app/auth/register/page.tsx",
                    lineNumber: 262,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mt-2",
                    children: "Empieza a compartir tus rutas por Canarias"
                }, void 0, false, {
                    fileName: "[project]/app/auth/register/page.tsx",
                    lineNumber: 262,
                    columnNumber: 152
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 262,
            columnNumber: 10
        }, this);
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Nombre completo"
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 269,
            columnNumber: 10
        }, this);
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "RegisterPage[<input>.onChange]": (e_0)=>setFullName(e_0.target.value)
        })["RegisterPage[<input>.onChange]"];
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== fullName) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Ej: Juan P\xE9rez",
                    className: "w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all",
                    value: fullName,
                    onChange: t4,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/app/auth/register/page.tsx",
                    lineNumber: 285,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 285,
            columnNumber: 10
        }, this);
        $[13] = fullName;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Fecha de nacimiento"
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 293,
            columnNumber: 10
        }, this);
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "RegisterPage[<input>.onChange]": (e_1)=>setBirthdate(e_1.target.value)
        })["RegisterPage[<input>.onChange]"];
        t8 = new Date().toISOString().split("T");
        $[16] = t7;
        $[17] = t8;
    } else {
        t7 = $[16];
        t8 = $[17];
    }
    let t9;
    if ($[18] !== birthdate) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "date",
            className: "w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all",
            value: birthdate,
            onChange: t7,
            max: t8[0],
            required: true
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 313,
            columnNumber: 10
        }, this);
        $[18] = birthdate;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Debes tener al menos 18 años"
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[21] = t9;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Correo electrónico"
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "RegisterPage[<input>.onChange]": (e_2)=>setEmail(e_2.target.value)
        })["RegisterPage[<input>.onChange]"];
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== email) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    placeholder: "tu@email.com",
                    className: "w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all",
                    value: email,
                    onChange: t13,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/app/auth/register/page.tsx",
                    lineNumber: 352,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[25] = email;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Contraseña"
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    const t16 = showPassword ? "text" : "password";
    const t17 = `w-full p-3 pr-12 border rounded-lg text-black focus:ring-2 outline-none transition-all ${password && !passwordValid ? "border-orange-300 focus:ring-orange-400" : password && passwordValid ? "border-green-400 focus:ring-green-400" : "border-gray-300 focus:ring-blue-500"}`;
    let t18;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "RegisterPage[<input>.onChange]": (e_3)=>setPassword(e_3.target.value)
        })["RegisterPage[<input>.onChange]"];
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== password || $[30] !== t16 || $[31] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t16,
            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
            className: t17,
            value: password,
            onChange: t18,
            required: true
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[29] = password;
        $[30] = t16;
        $[31] = t17;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "RegisterPage[<button>.onClick]": ()=>setShowPassword(_RegisterPageButtonOnClickSetShowPassword)
        })["RegisterPage[<button>.onClick]"];
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    const t21 = showPassword ? "\uD83D\uDE48" : "\uD83D\uDC41\uFE0F";
    let t22;
    if ($[34] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t20,
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition text-lg select-none",
            children: t21
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[34] = t21;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    let t23;
    if ($[36] !== t19 || $[37] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t19,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[36] = t19;
        $[37] = t22;
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    let t24;
    if ($[39] !== password) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PasswordStrengthIndicator, {
            password: password
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 415,
            columnNumber: 11
        }, this);
        $[39] = password;
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    let t25;
    if ($[41] !== t23 || $[42] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[41] = t23;
        $[42] = t24;
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    const t26 = loading || !passwordValid;
    const t27 = `w-full p-3 rounded-lg font-bold text-lg transition-all shadow-lg mt-2 ${passwordValid ? "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`;
    const t28 = loading ? "Creando cuenta..." : "Registrarme";
    let t29;
    if ($[44] !== handleRegister || $[45] !== t26 || $[46] !== t27 || $[47] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleRegister,
            disabled: t26,
            className: t27,
            children: t28
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[44] = handleRegister;
        $[45] = t26;
        $[46] = t27;
        $[47] = t28;
        $[48] = t29;
    } else {
        t29 = $[48];
    }
    let t30;
    if ($[49] !== t11 || $[50] !== t14 || $[51] !== t25 || $[52] !== t29 || $[53] !== t5) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t5,
                t11,
                t14,
                t25,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[49] = t11;
        $[50] = t14;
        $[51] = t25;
        $[52] = t29;
        $[53] = t5;
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    let t31;
    if ($[55] !== message) {
        t31 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `mt-4 p-3 rounded-lg text-sm text-center ${message.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`,
            children: message.text
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 458,
            columnNumber: 22
        }, this);
        $[55] = message;
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 text-center text-sm text-gray-600",
            children: [
                "¿Ya tienes cuenta?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/auth/login",
                    className: "text-blue-600 font-semibold hover:underline",
                    children: "Inicia sesión aquí"
                }, void 0, false, {
                    fileName: "[project]/app/auth/register/page.tsx",
                    lineNumber: 466,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[57] = t32;
    } else {
        t32 = $[57];
    }
    let t33;
    if ($[58] !== t30 || $[59] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md",
                children: [
                    t2,
                    t30,
                    t31,
                    t32
                ]
            }, void 0, true, {
                fileName: "[project]/app/auth/register/page.tsx",
                lineNumber: 473,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/auth/register/page.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, this);
        $[58] = t30;
        $[59] = t31;
        $[60] = t33;
    } else {
        t33 = $[60];
    }
    return t33;
}
_s(RegisterPage, "S87cP2/C282IepnDG0bdnMyNUMY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = RegisterPage;
function _RegisterPageButtonOnClickSetShowPassword(v) {
    return !v;
}
function _RegisterPageCalculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birth.getDate()) {
        age--;
    }
    return age;
}
function _RegisterPagePasswordChecksEvery(c) {
    return c.pass;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "PasswordStrengthIndicator");
__turbopack_context__.k.register(_c1, "RegisterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_52cf741e._.js.map