'use client'

import { useEffect, useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface Profile { id: string; full_name: string; avatar_url: string | null }
interface Conversation { id: string; route_id: string; passenger_id: string; driver_id: string; last_message_at: string; route: { origin_name: string; destination_name: string }; passenger: Profile; driver: Profile; last_message?: string }
interface Message { id: string; conversation_id: string; sender_id: string; content: string; created_at: string; read_at: string | null }

const supabase = createClient()

function Avatar({ url, name, size = 40 }: { url?: string | null; name?: string | null; size?: number }) {
  const initials = name?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) ?? '?'
  if (url) return <img src={url} alt={name ?? ''} style={{ width: size, height: size }} className="rounded-full object-cover ring-2 ring-blue-100 shrink-0" />
  return <div style={{ width: size, height: size, fontSize: size * 0.38 }} className="rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">{initials}</div>
}

function formatTime(ts: string) {
  const d = new Date(ts), now = new Date(), diff = Math.floor((now.getTime() - d.getTime()) / 86400000)
  if (diff === 0) return d.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })
  if (diff === 1) return 'Ayer'
  if (diff < 7) return d.toLocaleDateString('es', { weekday: 'short' })
  return d.toLocaleDateString('es', { day: 'numeric', month: 'short' })
}

export default function MessagesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialConvId = searchParams.get('conv')
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeConv, setActiveConv] = useState<Conversation | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [loadingConvs, setLoadingConvs] = useState(true)
  const [loadingMsgs, setLoadingMsgs] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/auth/login'); return }
      setCurrentUser(session.user)
      await loadConversations(session.user.id, initialConvId)
    }
    init()
  }, [])

  const loadConversations = async (uid: string, selectId?: string | null) => {
    setLoadingConvs(true)
    const { data: convs } = await supabase.from('conversations').select('id, route_id, passenger_id, driver_id, last_message_at').or(`passenger_id.eq.${uid},driver_id.eq.${uid}`).order('last_message_at', { ascending: false })
    if (!convs) { setLoadingConvs(false); return }
    const routeIds = [...new Set(convs.map(c => c.route_id))]
    const profileIds = [...new Set(convs.flatMap(c => [c.passenger_id, c.driver_id]))]
    const [{ data: routes }, { data: profiles }, { data: lastMsgs }] = await Promise.all([
      supabase.from('routes').select('id, origin_name, destination_name').in('id', routeIds),
      supabase.from('profiles').select('id, full_name, avatar_url').in('id', profileIds),
      supabase.from('messages').select('conversation_id, content').in('conversation_id', convs.map(c => c.id)).order('created_at', { ascending: false }),
    ])
    const enriched: Conversation[] = convs.map(c => ({
      ...c,
      route: (routes ?? []).find(r => r.id === c.route_id) ?? { origin_name: '...', destination_name: '...' },
      passenger: (profiles ?? []).find(p => p.id === c.passenger_id) ?? { id: c.passenger_id, full_name: 'Usuario', avatar_url: null },
      driver:    (profiles ?? []).find(p => p.id === c.driver_id)    ?? { id: c.driver_id,    full_name: 'Conductor', avatar_url: null },
      last_message: (lastMsgs ?? []).find(m => m.conversation_id === c.id)?.content,
    }))
    setConversations(enriched); setLoadingConvs(false)
    if (selectId) { const t = enriched.find(c => c.id === selectId); if (t) openConversation(t, uid) }
  }

  const openConversation = async (conv: Conversation, uid?: string) => {
    setActiveConv(conv); setLoadingMsgs(true); setMessages([])
    const { data: msgs } = await supabase.from('messages').select('*').eq('conversation_id', conv.id).order('created_at', { ascending: true })
    setMessages(msgs ?? []); setLoadingMsgs(false)
    const myId = uid ?? currentUser?.id
    if (myId) await supabase.from('messages').update({ read_at: new Date().toISOString() }).eq('conversation_id', conv.id).neq('sender_id', myId).is('read_at', null)
  }

  useEffect(() => {
    if (!activeConv) return
    const channel = supabase.channel(`messages:${activeConv.id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `conversation_id=eq.${activeConv.id}` }, payload => {
        setMessages(prev => prev.find(m => m.id === payload.new.id) ? prev : [...prev, payload.new as Message])
        setConversations(prev => prev.map(c => c.id === activeConv.id ? { ...c, last_message: (payload.new as Message).content } : c))
      }).subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [activeConv?.id])

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const sendMessage = async () => {
    if (!newMessage.trim() || !activeConv || !currentUser || sending) return
    const content = newMessage.trim(); setNewMessage(''); setSending(true)
    const optimistic: Message = { id: `temp-${Date.now()}`, conversation_id: activeConv.id, sender_id: currentUser.id, content, created_at: new Date().toISOString(), read_at: null }
    setMessages(prev => [...prev, optimistic])
    const { error } = await supabase.from('messages').insert({ conversation_id: activeConv.id, sender_id: currentUser.id, content })
    if (error) { setMessages(prev => prev.filter(m => m.id !== optimistic.id)); setNewMessage(content) }
    else await supabase.from('conversations').update({ last_message_at: new Date().toISOString() }).eq('id', activeConv.id)
    setSending(false); inputRef.current?.focus()
  }

  const otherPerson = (conv: Conversation) => currentUser?.id === conv.driver_id ? conv.passenger : conv.driver

  if (!currentUser) return null

  return (
    <div className="flex flex-col bg-gray-50" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="flex flex-1 overflow-hidden max-w-5xl mx-auto w-full px-4 py-4 gap-4">

        {/* Lista conversaciones */}
        <div className={`w-full md:w-72 shrink-0 bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden shadow-sm ${activeConv ? 'hidden md:flex' : 'flex'}`}>
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="font-bold text-gray-800">Conversaciones</h2>
            <p className="text-xs text-gray-400">{conversations.length} conversación{conversations.length !== 1 ? 'es' : ''}</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            {loadingConvs ? (
              <div className="flex items-center justify-center h-24"><div className="w-6 h-6 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" /></div>
            ) : conversations.length === 0 ? (
              <div className="text-center py-12 px-4">
                <p className="text-3xl mb-2">💬</p>
                <p className="text-gray-400 text-sm">Sin conversaciones aún</p>
                <Link href="/routes" className="mt-3 inline-block text-sm text-blue-600 font-semibold hover:underline">Ver rutas →</Link>
              </div>
            ) : conversations.map(conv => {
              const other = otherPerson(conv); const isActive = activeConv?.id === conv.id
              return (
                <button key={conv.id} onClick={() => openConversation(conv)}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 border-b border-gray-50 hover:bg-gray-50 transition ${isActive ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''}`}>
                  <Avatar url={other.avatar_url} name={other.full_name} size={40} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <p className="text-sm font-semibold text-gray-800 truncate">{other.full_name}</p>
                      <span className="text-[10px] text-gray-400 shrink-0">{formatTime(conv.last_message_at)}</span>
                    </div>
                    <p className="text-xs text-blue-500 truncate">{conv.route.origin_name} → {conv.route.destination_name}</p>
                    {conv.last_message && <p className="text-xs text-gray-400 truncate mt-0.5">{conv.last_message}</p>}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Chat */}
        <div className={`flex-1 flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm ${!activeConv ? 'hidden md:flex' : 'flex'}`}>
          {!activeConv ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl mb-3">💬</p>
                <p className="text-gray-600 font-medium">Selecciona una conversación</p>
                <p className="text-gray-400 text-sm mt-1">o contacta con un conductor desde una ruta</p>
              </div>
            </div>
          ) : (
            <>
              <div className="border-b border-gray-100 px-4 py-3 flex items-center gap-3 shrink-0 bg-white">
                <button onClick={() => setActiveConv(null)} className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 font-bold">←</button>
                <Avatar url={otherPerson(activeConv).avatar_url} name={otherPerson(activeConv).full_name} size={38} />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm">{otherPerson(activeConv).full_name}</p>
                  <Link href={`/routes/${activeConv.route_id}`} className="text-xs text-blue-500 hover:underline truncate block">
                    🚗 {activeConv.route.origin_name} → {activeConv.route.destination_name}
                  </Link>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 bg-gray-50">
                {loadingMsgs ? (
                  <div className="flex items-center justify-center h-24"><div className="w-6 h-6 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" /></div>
                ) : messages.length === 0 ? (
                  <div className="text-center py-10"><p className="text-3xl mb-2">👋</p><p className="text-gray-400 text-sm">Inicia la conversación</p></div>
                ) : messages.map((msg, i) => {
                  const isMe = msg.sender_id === currentUser.id
                  const prev = messages[i - 1]
                  const showTime = !prev || new Date(msg.created_at).getTime() - new Date(prev.created_at).getTime() > 5 * 60 * 1000
                  return (
                    <div key={msg.id}>
                      {showTime && <p className="text-center text-[10px] text-gray-400 my-2">{formatTime(msg.created_at)}</p>}
                      <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${isMe ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'} ${msg.id.startsWith('temp-') ? 'opacity-60' : ''}`}>
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div ref={messagesEndRef} />
              </div>

              <div className="bg-white border-t border-gray-100 px-4 py-3 shrink-0">
                <div className="flex items-end gap-2">
                  <textarea ref={inputRef} value={newMessage} onChange={e => setNewMessage(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() } }}
                    placeholder="Escribe un mensaje..." rows={1}
                    className="flex-1 border border-gray-200 rounded-2xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-gray-50 max-h-32"
                  />
                  <button onClick={sendMessage} disabled={!newMessage.trim() || sending}
                    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-40 transition shadow-sm shrink-0">
                    {sending ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 rotate-90"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>}
                  </button>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 text-center">Shift+Enter para nueva línea</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}