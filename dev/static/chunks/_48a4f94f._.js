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
"[project]/app/messages/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessagesPage
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
function Avatar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "e25edaa78499b3f838ffbcfacbba9739aaef7eff3b99eab4490cf8e12a33344b") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e25edaa78499b3f838ffbcfacbba9739aaef7eff3b99eab4490cf8e12a33344b";
    }
    const { url, name, size: t1 } = t0;
    const size = t1 === undefined ? 40 : t1;
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
                fileName: "[project]/app/messages/page.tsx",
                lineNumber: 74,
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
            className: "rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white font-bold shrink-0",
            children: initials
        }, void 0, false, {
            fileName: "[project]/app/messages/page.tsx",
            lineNumber: 100,
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
function formatTime(ts) {
    const d = new Date(ts), now = new Date();
    const diff = Math.floor((now.getTime() - d.getTime()) / 86400000);
    if (diff === 0) return d.toLocaleTimeString('es', {
        hour: '2-digit',
        minute: '2-digit'
    });
    if (diff === 1) return 'Ayer';
    if (diff < 7) return d.toLocaleDateString('es', {
        weekday: 'short'
    });
    return d.toLocaleDateString('es', {
        day: 'numeric',
        month: 'short'
    });
}
function MessagesPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialConvId = searchParams.get('conv');
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeConv, setActiveConv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingConvs, setLoadingConvs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMsgs, setLoadingMsgs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            const init = {
                "MessagesPage.useEffect.init": async ()=>{
                    const { data: { session } } = await supabase.auth.getSession();
                    if (!session) {
                        router.push('/auth/login');
                        return;
                    }
                    setCurrentUser(session.user);
                    await loadConversations(session.user.id, initialConvId);
                }
            }["MessagesPage.useEffect.init"];
            init();
        }
    }["MessagesPage.useEffect"], []);
    const loadConversations = async (uid, selectId)=>{
        setLoadingConvs(true);
        const { data: convs } = await supabase.from('conversations').select('id, route_id, passenger_id, driver_id, last_message_at').or(`passenger_id.eq.${uid},driver_id.eq.${uid}`).order('last_message_at', {
            ascending: false
        });
        if (!convs) {
            setLoadingConvs(false);
            return;
        }
        const routeIds = [
            ...new Set(convs.map((c)=>c.route_id))
        ];
        const profileIds = [
            ...new Set(convs.flatMap((c_0)=>[
                    c_0.passenger_id,
                    c_0.driver_id
                ]))
        ];
        const [{ data: routes }, { data: profiles }, { data: lastMsgs }] = await Promise.all([
            supabase.from('routes').select('id, origin_name, destination_name').in('id', routeIds),
            supabase.from('profiles').select('id, full_name, avatar_url').in('id', profileIds),
            supabase.from('messages').select('conversation_id, content').in('conversation_id', convs.map((c_1)=>c_1.id)).order('created_at', {
                ascending: false
            })
        ]);
        const enriched = convs.map((c_2)=>({
                ...c_2,
                route: (routes ?? []).find((r)=>r.id === c_2.route_id) ?? {
                    origin_name: '...',
                    destination_name: '...'
                },
                passenger: (profiles ?? []).find((p)=>p.id === c_2.passenger_id) ?? {
                    id: c_2.passenger_id,
                    full_name: 'Usuario',
                    avatar_url: null
                },
                driver: (profiles ?? []).find((p_0)=>p_0.id === c_2.driver_id) ?? {
                    id: c_2.driver_id,
                    full_name: 'Conductor',
                    avatar_url: null
                },
                last_message: (lastMsgs ?? []).find((m)=>m.conversation_id === c_2.id)?.content
            }));
        setConversations(enriched);
        setLoadingConvs(false);
        if (selectId) {
            const t = enriched.find((c_3)=>c_3.id === selectId);
            if (t) openConversation(t, uid);
        }
    };
    const openConversation = async (conv, uid_0)=>{
        setActiveConv(conv);
        setLoadingMsgs(true);
        setMessages([]);
        const { data: msgs } = await supabase.from('messages').select('*').eq('conversation_id', conv.id).order('created_at', {
            ascending: true
        });
        setMessages(msgs ?? []);
        setLoadingMsgs(false);
        const myId = uid_0 ?? currentUser?.id;
        if (myId) await supabase.from('messages').update({
            read_at: new Date().toISOString()
        }).eq('conversation_id', conv.id).neq('sender_id', myId).is('read_at', null);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            if (!activeConv) return;
            const channel = supabase.channel(`messages:${activeConv.id}`).on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'messages',
                filter: `conversation_id=eq.${activeConv.id}`
            }, {
                "MessagesPage.useEffect.channel": (payload)=>{
                    setMessages({
                        "MessagesPage.useEffect.channel": (prev)=>prev.find({
                                "MessagesPage.useEffect.channel": (m_0)=>m_0.id === payload.new.id
                            }["MessagesPage.useEffect.channel"]) ? prev : [
                                ...prev,
                                payload.new
                            ]
                    }["MessagesPage.useEffect.channel"]);
                    setConversations({
                        "MessagesPage.useEffect.channel": (prev_0)=>prev_0.map({
                                "MessagesPage.useEffect.channel": (c_4)=>c_4.id === activeConv.id ? {
                                        ...c_4,
                                        last_message: payload.new.content
                                    } : c_4
                            }["MessagesPage.useEffect.channel"])
                    }["MessagesPage.useEffect.channel"]);
                }
            }["MessagesPage.useEffect.channel"]).subscribe();
            return ({
                "MessagesPage.useEffect": ()=>{
                    supabase.removeChannel(channel);
                }
            })["MessagesPage.useEffect"];
        }
    }["MessagesPage.useEffect"], [
        activeConv?.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessagesPage.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["MessagesPage.useEffect"], [
        messages
    ]);
    const sendMessage = async ()=>{
        if (!newMessage.trim() || !activeConv || !currentUser || sending) return;
        const content = newMessage.trim();
        setNewMessage('');
        setSending(true);
        const optimistic = {
            id: `temp-${Date.now()}`,
            conversation_id: activeConv.id,
            sender_id: currentUser.id,
            content,
            created_at: new Date().toISOString(),
            read_at: null
        };
        setMessages((prev_1)=>[
                ...prev_1,
                optimistic
            ]);
        const { error } = await supabase.from('messages').insert({
            conversation_id: activeConv.id,
            sender_id: currentUser.id,
            content
        });
        if (error) {
            setMessages((prev_2)=>prev_2.filter((m_1)=>m_1.id !== optimistic.id));
            setNewMessage(content);
        } else await supabase.from('conversations').update({
            last_message_at: new Date().toISOString()
        }).eq('id', activeConv.id);
        setSending(false);
        inputRef.current?.focus();
    };
    const otherPerson = (conv_0)=>currentUser?.id === conv_0.driver_id ? conv_0.passenger : conv_0.driver;
    if (!currentUser) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        style: {
            height: 'calc(100vh - 72px)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 overflow-hidden max-w-5xl mx-auto w-full px-4 py-4 gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full md:w-72 shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex flex-col overflow-hidden ${activeConv ? 'hidden md:flex' : 'flex'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-3 border-b border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-bold text-white",
                                    children: "Conversaciones"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-blue-200",
                                    children: [
                                        conversations.length,
                                        " conversación",
                                        conversations.length !== 1 ? 'es' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/messages/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto",
                            children: loadingConvs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center h-24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 border-2 border-white/40 border-t-white rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 84
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/messages/page.tsx",
                                lineNumber: 289,
                                columnNumber: 29
                            }, this) : conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12 px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl mb-2",
                                        children: "💬"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-200 text-sm",
                                        children: "Sin conversaciones aún"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/routes",
                                        className: "mt-3 inline-block text-sm text-white font-semibold hover:underline",
                                        children: "Ver rutas →"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/messages/page.tsx",
                                lineNumber: 289,
                                columnNumber: 215
                            }, this) : conversations.map((conv_1)=>{
                                const other = otherPerson(conv_1);
                                const isActive = activeConv?.id === conv_1.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>openConversation(conv_1),
                                    className: `w-full text-left px-4 py-3 flex items-center gap-3 border-b border-white/5 hover:bg-white/10 transition ${isActive ? 'bg-white/20 border-l-4 border-l-white' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                            url: other.avatar_url,
                                            name: other.full_name,
                                            size: 40
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-white truncate",
                                                            children: other.full_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-blue-300 shrink-0",
                                                            children: formatTime(conv_1.last_message_at)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/messages/page.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-blue-300 truncate",
                                                    children: [
                                                        conv_1.route.origin_name,
                                                        " → ",
                                                        conv_1.route.destination_name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/messages/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 21
                                                }, this),
                                                conv_1.last_message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-blue-400 truncate mt-0.5",
                                                    children: conv_1.last_message
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/messages/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, conv_1.id, true, {
                                    fileName: "[project]/app/messages/page.tsx",
                                    lineNumber: 296,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/messages/page.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/messages/page.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex-1 flex flex-col bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden ${!activeConv ? 'hidden md:flex' : 'flex'}`,
                    children: !activeConv ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-5xl mb-3",
                                    children: "💬"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-medium",
                                    children: "Selecciona una conversación"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-200 text-sm mt-1",
                                    children: "o contacta con un conductor desde una ruta"
                                }, void 0, false, {
                                    fileName: "[project]/app/messages/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/messages/page.tsx",
                            lineNumber: 314,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/messages/page.tsx",
                        lineNumber: 313,
                        columnNumber: 26
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-white/10 px-4 py-3 flex items-center gap-3 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveConv(null),
                                        className: "md:hidden w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white font-bold",
                                        children: "←"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                        url: otherPerson(activeConv).avatar_url,
                                        name: otherPerson(activeConv).full_name,
                                        size: 38
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-white text-sm",
                                                children: otherPerson(activeConv).full_name
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/routes/${activeConv.route_id}`,
                                                className: "text-xs text-blue-300 hover:text-white transition truncate block",
                                                children: [
                                                    "🚗 ",
                                                    activeConv.route.origin_name,
                                                    " → ",
                                                    activeConv.route.destination_name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/messages/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/messages/page.tsx",
                                lineNumber: 321,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto px-4 py-4 space-y-2",
                                children: [
                                    loadingMsgs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center h-24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 border-2 border-white/40 border-t-white rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/messages/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 87
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 32
                                    }, this) : messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl mb-2",
                                                children: "👋"
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 248
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-blue-200 text-sm",
                                                children: "Inicia la conversación"
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 283
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 213
                                    }, this) : messages.map((msg, i)=>{
                                        const isMe = msg.sender_id === currentUser.id;
                                        const prev_3 = messages[i - 1];
                                        const showTime = !prev_3 || new Date(msg.created_at).getTime() - new Date(prev_3.created_at).getTime() > 5 * 60 * 1000;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                showTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center text-[10px] text-blue-300 my-2",
                                                    children: formatTime(msg.created_at)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 36
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex ${isMe ? 'justify-end' : 'justify-start'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${isMe ? 'bg-white text-blue-800 rounded-br-sm' : 'bg-white/20 text-white border border-white/20 rounded-bl-sm'} ${msg.id.startsWith('temp-') ? 'opacity-60' : ''}`,
                                                        children: msg.content
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, msg.id, true, {
                                            fileName: "[project]/app/messages/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 22
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/messages/page.tsx",
                                lineNumber: 333,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-white/10 px-4 py-3 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                ref: inputRef,
                                                value: newMessage,
                                                onChange: (e)=>setNewMessage(e.target.value),
                                                onKeyDown: (e_0)=>{
                                                    if (e_0.key === 'Enter' && !e_0.shiftKey) {
                                                        e_0.preventDefault();
                                                        sendMessage();
                                                    }
                                                },
                                                placeholder: "Escribe un mensaje... (Enter para enviar)",
                                                rows: 1,
                                                className: "flex-1 bg-white/10 border border-white/20 rounded-2xl px-4 py-2.5 text-sm text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none max-h-32"
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: sendMessage,
                                                disabled: !newMessage.trim() || sending,
                                                className: "w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-md shrink-0 font-bold",
                                                children: sending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 32
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "w-5 h-5 rotate-90",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/messages/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 244
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/messages/page.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 134
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/messages/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-blue-300 mt-1 text-center",
                                        children: "Shift+Enter para nueva línea"
                                    }, void 0, false, {
                                        fileName: "[project]/app/messages/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/messages/page.tsx",
                                lineNumber: 351,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app/messages/page.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/messages/page.tsx",
            lineNumber: 280,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/messages/page.tsx",
        lineNumber: 277,
        columnNumber: 10
    }, this);
}
_s(MessagesPage, "lxx7WcTmtdVDgUuEl7cw8J7MCUw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c1 = MessagesPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "MessagesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_48a4f94f._.js.map