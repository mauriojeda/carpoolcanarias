'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface Profile { id: string; full_name: string | null; avatar_url: string | null; phone: string | null; bio: string | null; preferences: string[] }
interface Route { id: string; origin_name: string; destination_name: string; departure_time: string; days_of_week: number[]; seats_available: number; price_per_seat: number | null; active: boolean; created_at: string; requests?: RouteRequest[] }
interface RouteRequest { id: string; route_id?: string; status: 'pending' | 'accepted' | 'rejected'; created_at: string; route: { id: string; origin_name: string; destination_name: string; departure_time: string; driver?: { full_name: string; avatar_url: string | null } }; passenger?: { full_name: string; avatar_url: string | null } }

const DRIVING_PREFERENCES = [
  { value: 'no_smoking', label: '🚭 Sin tabaco' }, { value: 'pets_allowed', label: '🐾 Mascotas OK' },
  { value: 'no_pets', label: '🚫 Sin mascotas' }, { value: 'music', label: '🎵 Con música' },
  { value: 'silent', label: '🤫 Silencioso' }, { value: 'chat', label: '💬 Charla amigable' },
  { value: 'ac', label: '❄️ Aire acondicionado' }, { value: 'luggage', label: '🧳 Equipaje grande' },
]
const WEEK_DAYS = [{ value: 1, label: 'L' }, { value: 2, label: 'M' }, { value: 3, label: 'X' }, { value: 4, label: 'J' }, { value: 5, label: 'V' }, { value: 6, label: 'S' }, { value: 7, label: 'D' }]
const STATUS_CONFIG = {
  pending:  { label: 'Pendiente', bg: 'bg-amber-100',   text: 'text-amber-700',   dot: 'bg-amber-400' },
  accepted: { label: 'Aceptado',  bg: 'bg-green-100',   text: 'text-green-700',   dot: 'bg-green-500' },
  rejected: { label: 'Rechazado', bg: 'bg-red-100',     text: 'text-red-700',     dot: 'bg-red-400' },
}

const supabase = createClient()

async function loadAll(onProfile: (p: Profile) => void, onRoutes: (r: Route[]) => void, onRequests: (r: RouteRequest[]) => void, onDone: () => void, onRedirect: () => void) {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { onRedirect(); return }
  const uid = session.user.id
  const { data: prof } = await supabase.from('profiles').select('*').eq('id', uid).single()
  onProfile(prof ?? { id: uid, full_name: null, avatar_url: null, phone: null, bio: null, preferences: [] })
  const { data: routes } = await supabase.from('routes').select('id, origin_name, destination_name, departure_time, days_of_week, seats_available, price_per_seat, active, created_at').eq('driver_id', uid).order('created_at', { ascending: false })
  let routesWithRequests: Route[] = routes ?? []
  if (routes && routes.length > 0) {
    const { data: allRequests } = await supabase.from('route_requests').select('id, status, created_at, route_id, passenger:profiles!route_requests_passenger_id_fkey(full_name, avatar_url)').in('route_id', routes.map((r: any) => r.id))
    routesWithRequests = routes.map((route: any) => ({ ...route, requests: (allRequests ?? []).filter((req: any) => req.route_id === route.id) }))
  }
  onRoutes(routesWithRequests)
  const { data: reqs } = await supabase.from('route_requests').select('id, status, created_at, route_id').eq('passenger_id', uid).order('created_at', { ascending: false })
  let reqsWithRoute: RouteRequest[] = []
  if (reqs && reqs.length > 0) {
    const routeIds = reqs.map((r: any) => r.route_id)
    const { data: routeDetails } = await supabase.from('routes').select('id, origin_name, destination_name, departure_time, driver_id').in('id', routeIds)
    const driverIds = [...new Set((routeDetails ?? []).map((r: any) => r.driver_id))]
    const { data: driverProfiles } = await supabase.from('profiles').select('id, full_name, avatar_url').in('id', driverIds)
    reqsWithRoute = reqs.map((req: any) => {
      const rd = (routeDetails ?? []).find((r: any) => r.id === req.route_id)
      const dp = (driverProfiles ?? []).find((p: any) => p.id === rd?.driver_id)
      return { ...req, route: { id: rd?.id ?? '', origin_name: rd?.origin_name ?? '', destination_name: rd?.destination_name ?? '', departure_time: rd?.departure_time ?? '', driver: dp ? { full_name: dp.full_name, avatar_url: dp.avatar_url } : undefined } }
    })
  }
  onRequests(reqsWithRoute); onDone()
}

async function uploadAvatar(file: File, userId: string): Promise<string | null> {
  const ext = file.name.split('.').pop()
  const { error } = await supabase.storage.from('avatars').upload(`${userId}/avatar.${ext}`, file, { upsert: true })
  if (error) return null
  return supabase.storage.from('avatars').getPublicUrl(`${userId}/avatar.${ext}`).data.publicUrl
}

function Avatar({ url, name, size = 40 }: { url?: string | null; name?: string | null; size?: number }) {
  const initials = name?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) ?? '??'
  if (url) return <img src={url} alt={name ?? ''} style={{ width: size, height: size }} className="rounded-full object-cover ring-2 ring-blue-100 shrink-0" />
  return <div style={{ width: size, height: size, fontSize: size * 0.38 }} className="rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">{initials}</div>
}

function Badge({ status }: { status: 'pending' | 'accepted' | 'rejected' }) {
  const c = STATUS_CONFIG[status]
  return <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}><span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />{c.label}</span>
}

function MyRouteCard({ route, onToggle, onDelete }: { route: Route; onToggle: () => void; onDelete: () => void }) {
  const [expanded, setExpanded] = useState(false)
  const pendingCount = route.requests?.filter(r => r.status === 'pending').length ?? 0
  return (
    <div className={`bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-sm transition ${!route.active ? 'opacity-60' : ''}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-sm font-semibold text-gray-800 truncate">{route.origin_name}</span>
            <span className="text-blue-400 shrink-0">→</span>
            <span className="text-sm font-semibold text-gray-800 truncate">{route.destination_name}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
            <span>🕐 {route.departure_time}</span>
            <span>💺 {route.seats_available} plazas</span>
            {route.price_per_seat != null && <span className="text-blue-600 font-semibold">💶 {route.price_per_seat}€/plaza</span>}
          </div>
          {(route.days_of_week ?? []).length > 0 && (
            <div className="flex gap-1 mt-2">
              {WEEK_DAYS.map(d => (
                <span key={d.value} className={`w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center ${route.days_of_week.includes(d.value) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>{d.label}</span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="flex items-center gap-2">
            {pendingCount > 0 && <span className="bg-amber-400 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">{pendingCount}</span>}
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${route.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{route.active ? 'Activa' : 'Inactiva'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Link href={`/routes/${route.id}/edit`} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-sm transition" title="Editar">✏️</Link>
            <button onClick={onToggle} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-sm transition">{route.active ? '⏸' : '▶️'}</button>
            <button onClick={onDelete} className="w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center text-sm transition">🗑</button>
          </div>
        </div>
      </div>
      {(route.requests?.length ?? 0) > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <button onClick={() => setExpanded(e => !e)} className="text-xs text-blue-600 font-semibold hover:underline">
            {expanded ? '▲' : '▼'} {route.requests!.length} solicitud{route.requests!.length !== 1 ? 'es' : ''}
          </button>
          {expanded && (
            <div className="mt-2 space-y-2">
              {route.requests!.map(req => (
                <div key={req.id} className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2">
                  <Avatar url={req.passenger?.avatar_url} name={req.passenger?.full_name} size={28} />
                  <span className="text-xs text-gray-700 font-medium flex-1 truncate">{req.passenger?.full_name ?? 'Usuario'}</span>
                  <Badge status={req.status} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function MyRequestCard({ request }: { request: RouteRequest }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-sm transition">
      <div className="flex items-start gap-3">
        <Avatar url={request.route?.driver?.avatar_url} name={request.route?.driver?.full_name} size={40} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <span className="text-sm font-semibold text-gray-800 truncate">{request.route?.origin_name}</span>
            <span className="text-blue-400 shrink-0 text-xs">→</span>
            <span className="text-sm font-semibold text-gray-800 truncate">{request.route?.destination_name}</span>
          </div>
          <p className="text-xs text-gray-500">Conductor: {request.route?.driver?.full_name ?? 'Desconocido'}</p>
          {request.route?.departure_time && <p className="text-xs text-gray-400 mt-0.5">🕐 {request.route.departure_time}</p>}
        </div>
        <Badge status={request.status} />
      </div>
    </div>
  )
}

function ProfilePanel({ profile, onSave }: { profile: Profile; onSave: (p: Partial<Profile>) => Promise<void> }) {
  const [form, setForm] = useState({ full_name: profile.full_name ?? '', phone: profile.phone ?? '', bio: profile.bio ?? '', preferences: profile.preferences ?? [] })
  const [saving, setSaving] = useState(false); const [saved, setSaved] = useState(false)
  const [uploadingAvatar, setUploadingAvatar] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(profile.avatar_url ?? null)
  const toggle = (v: string) => setForm(f => ({ ...f, preferences: f.preferences.includes(v) ? f.preferences.filter(p => p !== v) : [...f.preferences, v] }))
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return
    setAvatarPreview(URL.createObjectURL(file)); setUploadingAvatar(true)
    const { data: { session } } = await supabase.auth.getSession()
    if (session) { const url = await uploadAvatar(file, session.user.id); if (url) await onSave({ avatar_url: url }) }
    setUploadingAvatar(false)
  }
  const handleSave = async () => { setSaving(true); await onSave(form); setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const inputCls = "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4">
        <label className="cursor-pointer group relative shrink-0">
          {avatarPreview ? <img src={avatarPreview} alt="Avatar" style={{ width: 64, height: 64 }} className="rounded-full object-cover ring-2 ring-blue-100" />
            : <div style={{ width: 64, height: 64 }} className="rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold">{form.full_name?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) ?? '??'}</div>}
          <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            {uploadingAvatar ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <span className="text-white text-lg">📷</span>}
          </div>
          <input type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={handleAvatarChange} disabled={uploadingAvatar} />
        </label>
        <div className="flex-1">
          <p className="text-xs text-gray-400 mb-1">{uploadingAvatar ? '⏳ Subiendo...' : 'Toca para cambiar foto'}</p>
          <input value={form.full_name} onChange={e => setForm(f => ({ ...f, full_name: e.target.value }))} className={inputCls} placeholder="Tu nombre" />
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-3">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide">Contacto</h3>
        <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className={inputCls} placeholder="+34 600 000 000" type="tel" />
        <textarea value={form.bio} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))} className={`${inputCls} resize-none h-20`} placeholder="Cuéntale algo a tus compañeros de viaje..." />
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Preferencias de viaje</h3>
        <div className="flex flex-wrap gap-2">
          {DRIVING_PREFERENCES.map(p => (
            <button key={p.value} type="button" onClick={() => toggle(p.value)}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium border transition ${form.preferences.includes(p.value) ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-400'}`}>
              {p.label}
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleSave} disabled={saving || uploadingAvatar}
        className={`w-full py-3 rounded-xl font-bold text-white transition ${saved ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'} disabled:opacity-60`}>
        {saving ? 'Guardando...' : saved ? '✓ Guardado' : 'Guardar cambios'}
      </button>
    </div>
  )
}

type Tab = 'routes' | 'requests' | 'profile'

export default function DashboardPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [tab, setTab] = useState<Tab>((searchParams.get('tab') as Tab) ?? 'routes')
  const [profile, setProfile] = useState<Profile | null>(null)
  const [myRoutes, setMyRoutes] = useState<Route[]>([])
  const [myRequests, setMyRequests] = useState<RouteRequest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = () => loadAll(setProfile, setMyRoutes, setMyRequests, () => setLoading(false), () => router.push('/auth/login'))
    run()
    const handleVis = () => { if (document.visibilityState === 'visible') run() }
    document.addEventListener('visibilitychange', handleVis)
    window.addEventListener('focus', run)
    return () => { document.removeEventListener('visibilitychange', handleVis); window.removeEventListener('focus', run) }
  }, []) // eslint-disable-line

  const handleToggleRoute = async (id: string, current: boolean) => { await supabase.from('routes').update({ active: !current }).eq('id', id); setMyRoutes(r => r.map(rt => rt.id === id ? { ...rt, active: !current } : rt)) }
  const handleDeleteRoute = async (id: string) => { if (!confirm('¿Eliminar esta ruta?')) return; await supabase.from('routes').delete().eq('id', id); setMyRoutes(r => r.filter(rt => rt.id !== id)) }
  const handleSaveProfile = async (data: Partial<Profile>) => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return
    await supabase.from('profiles').upsert({ id: session.user.id, ...data }); setProfile(p => p ? { ...p, ...data } : p)
  }

  const stats = [
    { icon: '🛣️', value: myRoutes.filter(r => r.active).length, label: 'Rutas activas' },
    { icon: '🔔', value: myRoutes.flatMap(r => r.requests ?? []).filter(r => r.status === 'pending').length, label: 'Solicitudes pendientes' },
    { icon: '✈️', value: myRequests.filter(r => r.status === 'pending').length, label: 'Mis peticiones' },
    { icon: '✅', value: myRequests.filter(r => r.status === 'accepted').length, label: 'Viajes confirmados' },
  ]
  const TABS: { key: Tab; icon: string; label: string; badge?: number }[] = [
    { key: 'routes',   icon: '🛣️', label: 'Mis rutas',      badge: myRoutes.flatMap(r => r.requests ?? []).filter(r => r.status === 'pending').length },
    { key: 'requests', icon: '✋', label: 'Mis solicitudes', badge: myRequests.filter(r => r.status === 'pending').length },
    { key: 'profile',  icon: '👤', label: 'Mi perfil' },
  ]

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Cargando tu panel...</p>
      </div>
    </div>
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Mi panel</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(s => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex items-center gap-3 hover:shadow-sm transition">
            <span className="text-2xl">{s.icon}</span>
            <div><p className="text-xl font-bold text-gray-800">{s.value}</p><p className="text-xs text-gray-400">{s.label}</p></div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-200 pb-0">
        {TABS.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`relative flex items-center gap-2 px-4 py-3 text-sm font-semibold transition border-b-2 -mb-px ${tab === t.key ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            {t.icon} {t.label}
            {t.badge != null && t.badge > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{t.badge}</span>
            )}
          </button>
        ))}
      </div>

      {/* Contenido */}
      {tab === 'routes' && (
        <div className="space-y-3">
          {myRoutes.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-2xl text-center py-12">
              <p className="text-5xl mb-3">🗺️</p>
              <h2 className="text-lg font-bold text-gray-700 mb-1">Aún no has publicado rutas</h2>
              <p className="text-gray-400 text-sm mb-5">Crea tu primera ruta y empieza a compartir coche.</p>
              <Link href="/routes/create" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">+ Publicar viaje</Link>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between"><p className="text-sm text-gray-400">{myRoutes.length} ruta{myRoutes.length !== 1 ? 's' : ''}</p><Link href="/routes/create" className="text-sm font-semibold text-blue-600 hover:underline">+ Nueva ruta</Link></div>
              {myRoutes.map(route => <MyRouteCard key={route.id} route={route} onToggle={() => handleToggleRoute(route.id, route.active)} onDelete={() => handleDeleteRoute(route.id)} />)}
            </>
          )}
        </div>
      )}

      {tab === 'requests' && (
        <div className="space-y-3">
          {myRequests.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-2xl text-center py-12">
              <p className="text-5xl mb-3">🔍</p>
              <h2 className="text-lg font-bold text-gray-700 mb-1">Sin solicitudes enviadas</h2>
              <p className="text-gray-400 text-sm mb-5">Busca rutas disponibles y únete a un viaje.</p>
              <Link href="/routes" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">Buscar rutas</Link>
            </div>
          ) : (
            <>{myRequests.map(req => <MyRequestCard key={req.id} request={req} />)}</>
          )}
        </div>
      )}

      {tab === 'profile' && profile && <ProfilePanel profile={profile} onSave={handleSaveProfile} />}
    </div>
  )
}