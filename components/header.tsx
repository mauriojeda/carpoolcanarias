'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const supabase = createClient()

function Avatar({ url, name, size = 32 }: { url?: string | null; name?: string | null; size?: number }) {
  const initials = name?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) ?? '?'
  if (url) return <img src={url} alt={name ?? ''} style={{ width: size, height: size }} className="rounded-full object-cover ring-2 ring-white/30 shrink-0" />
  return (
    <div style={{ width: size, height: size, fontSize: size * 0.38 }}
      className="rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
      {initials}
    </div>
  )
}

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [unread, setUnread] = useState(0)

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return
      setUser(session.user)
      const { data: prof } = await supabase.from('profiles').select('full_name, avatar_url').eq('id', session.user.id).single()
      setProfile(prof)
      const { data: convs } = await supabase.from('conversations').select('id').or(`passenger_id.eq.${session.user.id},driver_id.eq.${session.user.id}`)
      if (convs && convs.length > 0) {
        const { count } = await supabase.from('messages').select('*', { count: 'exact', head: true })
          .in('conversation_id', convs.map(c => c.id)).neq('sender_id', session.user.id).is('read_at', null)
        setUnread(count ?? 0)
      }
    }
    init()
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
      if (!session) { setProfile(null); setUnread(0) }
    })
    return () => subscription.unsubscribe()
  }, [pathname])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null); setProfile(null); setMenuOpen(false)
    router.push('/'); router.refresh()
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="bg-blue-900 shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-0 flex items-center justify-between h-16 gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🚗</span>
          <span className="text-lg font-bold text-white">Carpool <span className="text-blue-300">Canarias</span></span>
        </Link>

        {/* Nav central */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/routes"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${isActive('/routes') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-800 hover:text-white'}`}>
            Ver rutas
          </Link>
          {user && (
            <Link href="/dashboard"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${isActive('/dashboard') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-800 hover:text-white'}`}>
              Mi panel
            </Link>
          )}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-2 shrink-0">
          {user ? (
            <>
              {/* Mensajes */}
              <Link href="/messages"
                className={`relative w-9 h-9 flex items-center justify-center rounded-lg transition text-lg ${isActive('/messages') ? 'bg-blue-700' : 'hover:bg-blue-800'}`}
                title="Mensajes">
                💬
                {unread > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {unread > 9 ? '9+' : unread}
                  </span>
                )}
              </Link>

              {/* Publicar viaje */}
              <Link href="/routes/create"
                className="hidden sm:flex items-center gap-1.5 bg-white text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition text-sm shadow-sm">
                + Publicar viaje
              </Link>

              {/* Avatar + menú */}
              <div className="relative">
                <button onClick={() => setMenuOpen(v => !v)}
                  className="flex items-center gap-2 hover:bg-blue-800 rounded-lg px-2 py-1.5 transition">
                  <Avatar url={profile?.avatar_url} name={profile?.full_name} size={30} />
                  <span className="hidden sm:block text-sm text-white font-medium max-w-[90px] truncate">
                    {profile?.full_name?.split(' ')[0] ?? 'Perfil'}
                  </span>
                  <span className="text-blue-300 text-xs">{menuOpen ? '▲' : '▼'}</span>
                </button>

                {menuOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 w-52 overflow-hidden z-50">
                    <div className="px-4 py-3 bg-blue-50 border-b border-gray-100">
                      <p className="text-sm font-bold text-gray-800 truncate">{profile?.full_name ?? 'Usuario'}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                    </div>
                    {[
                      { href: '/dashboard', icon: '📊', label: 'Mi panel' },
                      { href: '/dashboard?tab=profile', icon: '👤', label: 'Mi perfil' },
                      { href: '/messages', icon: '💬', label: 'Mensajes', badge: unread },
                      { href: '/routes/create', icon: '🚗', label: 'Publicar viaje' },
                    ].map(item => (
                      <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                        <span>{item.icon}</span>
                        <span className="flex-1">{item.label}</span>
                        {item.badge != null && item.badge > 0 && (
                          <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>
                        )}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100">
                      <button onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition">
                        <span>🚪</span> Cerrar sesión
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/auth/register" className="text-sm text-blue-200 hover:text-white font-medium transition px-3 py-2 rounded-lg hover:bg-blue-800">
                Registrarse
              </Link>
              <Link href="/auth/login" className="bg-white text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition text-sm shadow-sm">
                Iniciar sesión
              </Link>
            </>
          )}
        </div>
      </div>

      {menuOpen && <div className="fixed inset-0 z-30" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}