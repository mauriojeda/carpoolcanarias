'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

interface PublicProfile {
  id: string
  full_name: string
  avatar_url: string | null
  bio: string | null
  preferences: string[]
  vehicle: string | null
  rating: number | null
  trips_completed: number | null
  created_at: string
}

interface PublicRoute {
  id: string
  origin_name: string
  destination_name: string
  departure_time: string
  recurrence: string[]
  seats_available: number
  price_per_seat: number | null
}

const DRIVING_PREFERENCES = [
  { value: 'no_smoking',   label: '🚭 Sin tabaco' },
  { value: 'pets_allowed', label: '🐾 Mascotas OK' },
  { value: 'no_pets',      label: '🚫 Sin mascotas' },
  { value: 'music',        label: '🎵 Con música' },
  { value: 'silent',       label: '🤫 Silencioso' },
  { value: 'chat',         label: '💬 Charla amigable' },
  { value: 'ac',           label: '❄️ Aire acondicionado' },
  { value: 'luggage',      label: '🧳 Equipaje grande' },
]

const RECURRENCE_DAYS = [
  { value: 'monday',    label: 'L' },
  { value: 'tuesday',   label: 'M' },
  { value: 'wednesday', label: 'X' },
  { value: 'thursday',  label: 'J' },
  { value: 'friday',    label: 'V' },
  { value: 'saturday',  label: 'S' },
  { value: 'sunday',    label: 'D' },
]

function Avatar({ url, name, size = 80 }: { url?: string | null; name?: string | null; size?: number }) {
  const initials = name?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) ?? '??'
  if (url) return (
    <img src={url} alt={name ?? ''} style={{ width: size, height: size }}
      className="rounded-full object-cover ring-4 ring-white shadow-xl" />
  )
  return (
    <div
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      className="rounded-full bg-gradient-to-br from-ocean to-sky flex items-center justify-center text-white font-bold ring-4 ring-white shadow-xl shrink-0"
    >
      {initials}
    </div>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <svg key={star} className={`w-4 h-4 ${star <= Math.round(rating) ? 'text-amber-400' : 'text-slate-200'}`}
          fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm font-bold text-amber-600 ml-1">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function UserProfilePage() {
  const { id } = useParams<{ id: string }>()
  console.log('ID recibido:', id)

  const router = useRouter()
  const supabase = createClient()

  const [profile, setProfile] = useState<PublicProfile | null>(null)
  const [routes, setRoutes] = useState<PublicRoute[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  // Modal solicitud
  const [showModal, setShowModal] = useState(false)
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const load = async () => {
      const { data: prof, error } = await supabase
        .from('profiles')
        .select('id, full_name, avatar_url, bio, preferences, vehicle, rating, trips_completed, created_at')
        .eq('id', id)
        .single()

        console.log('Resultado:', { prof, error })


      if (error || !prof) { setNotFound(true); setLoading(false); return }
      setProfile(prof)

      const { data: rts } = await supabase
        .from('routes')
        .select('id, origin_name, destination_name, departure_time, recurrence, seats_available, price_per_seat')
        .eq('driver_id', id)
        .eq('active', true)
        .order('departure_time')

      setRoutes(rts ?? [])
      setLoading(false)
    }
    load()
  }, [id])

  const openModal = (routeId: string) => {
    setSelectedRouteId(routeId)
    setMessage('')
    setSent(false)
    setShowModal(true)
  }

  const handleSendRequest = async () => {
    if (!selectedRouteId) return
    setSending(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth/login'); return }

      const { error } = await supabase.from('route_requests').insert({
        route_id: selectedRouteId,
        passenger_id: user.id,
        message: message.trim() || null,
        status: 'pending',
      })
      if (error) throw error
      setSent(true)
    } catch (err: any) {
      alert('Error al enviar: ' + err.message)
    } finally {
      setSending(false)
    }
  }

  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString('es', { month: 'long', year: 'numeric' })
    : ''

  // ── Loading ──────────────────────────────────────────────────────────────
  if (loading) return (
    <div className="min-h-screen bg-canvas flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-ocean border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-400 text-sm">Cargando perfil...</p>
      </div>
    </div>
  )

  // ── Not found ────────────────────────────────────────────────────────────
  if (notFound) return (
    <div className="min-h-screen bg-canvas flex flex-col items-center justify-center gap-4">
      <p className="text-6xl">🌊</p>
      <h1 className="text-xl font-bold text-slate-700">Usuario no encontrado</h1>
      <Link href="/" className="text-sm text-ocean hover:underline">← Volver al inicio</Link>
    </div>
  )

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root { --ocean:#1a6fa8; --sky:#2a9ed8; --foam:#e8f4fd; --canvas:#f5f8fb; }

        body { font-family:'DM Sans',sans-serif; background:var(--canvas); }
        h1,h2,h3 { font-family:'Sora',sans-serif; }

        .bg-ocean { background-color:var(--ocean); }
        .bg-sky   { background-color:var(--sky); }
        .bg-foam  { background-color:var(--foam); }
        .bg-canvas{ background-color:var(--canvas); }
        .text-ocean { color:var(--ocean); }
        .hover\\:bg-sky:hover { background-color:var(--sky); }
        .from-ocean { --tw-gradient-from:var(--ocean); }
        .to-sky     { --tw-gradient-to:var(--sky); }

        .card {
          background:#fff;
          border-radius:1rem;
          padding:1.25rem;
          box-shadow:0 1px 4px rgba(0,0,0,.06),0 4px 16px rgba(0,0,0,.04);
          border:1px solid rgba(0,0,0,.05);
        }

        .input {
          border:1.5px solid #e2e8f0;
          border-radius:.75rem;
          padding:.625rem .875rem;
          font-size:.875rem;
          color:#334155;
          background:#f8fafc;
          outline:none;
          transition:border-color .15s;
          width:100%;
        }
        .input:focus { border-color:var(--ocean); background:white; }

        .route-card {
          background:#f8fafc;
          border:1.5px solid #e8f0f8;
          border-radius:1rem;
          padding:1rem;
          transition:border-color .15s, box-shadow .15s;
        }
        .route-card:hover {
          border-color:var(--ocean);
          box-shadow:0 4px 16px rgba(26,111,168,.1);
        }
      `}</style>

      {/* ── Header ── */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => router.back()} className="p-2 rounded-xl hover:bg-slate-100 transition text-slate-500">
            ←
          </button>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🚗</span>
            <span className="font-bold text-slate-800" style={{ fontFamily: 'Sora' }}>
              Carpool <span className="text-ocean">Canarias</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-5">

        {/* ── Hero perfil ── */}
        <div className="card overflow-hidden p-0">
          {/* Banner */}
          <div className="h-24 bg-gradient-to-r from-ocean to-sky relative">
            <div className="absolute -bottom-8 left-6">
              <Avatar url={profile?.avatar_url} name={profile?.full_name} size={72} />
            </div>
          </div>

          <div className="pt-12 px-6 pb-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">{profile?.full_name}</h1>
                {memberSince && (
                  <p className="text-xs text-slate-400 mt-0.5">Miembro desde {memberSince}</p>
                )}
              </div>

              {/* Rating */}
              <div className="flex flex-col items-end gap-1">
                {profile?.rating ? (
                  <StarRating rating={profile.rating} />
                ) : (
                  <span className="text-xs text-slate-400 italic">Sin valoraciones aún</span>
                )}
                {profile?.trips_completed != null && (
                  <span className="text-xs text-slate-500">{profile.trips_completed} viajes completados</span>
                )}
              </div>
            </div>

            {/* Bio */}
            {profile?.bio && (
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">{profile.bio}</p>
            )}

            {/* Vehículo */}
            {profile?.vehicle && (
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-xl">
                <span className="text-base">🚙</span>
                <span className="text-sm font-medium text-slate-700">{profile.vehicle}</span>
              </div>
            )}
          </div>
        </div>

        {/* ── Preferencias ── */}
        {profile?.preferences && profile.preferences.length > 0 && (
          <div className="card">
            <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-3">Preferencias de viaje</h2>
            <div className="flex flex-wrap gap-2">
              {DRIVING_PREFERENCES.filter(p => profile.preferences.includes(p.value)).map(p => (
                <span key={p.value}
                  className="px-3 py-1.5 rounded-xl text-sm font-medium bg-foam text-ocean border border-ocean/20">
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── Rutas activas ── */}
        <div>
          <h2 className="text-base font-bold text-slate-700 mb-3">
            Rutas activas
            <span className="ml-2 text-sm font-normal text-slate-400">({routes.length})</span>
          </h2>

          {routes.length === 0 ? (
            <div className="card text-center py-10">
              <p className="text-4xl mb-2">🛣️</p>
              <p className="text-slate-500 text-sm">Este conductor no tiene rutas activas ahora mismo.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {routes.map(route => (
                <div key={route.id} className="route-card">
                  {/* Trayecto */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-slate-700 truncate">{route.origin_name}</span>
                    <span className="text-ocean shrink-0 text-xs">→</span>
                    <span className="text-sm font-semibold text-slate-700 truncate">{route.destination_name}</span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mb-3">
                    <span>🕐 {route.departure_time.slice(0, 5)}</span>
                    <span>💺 {route.seats_available} plaza{route.seats_available !== 1 ? 's' : ''}</span>
                    {route.price_per_seat != null && <span>💶 {route.price_per_seat}€/plaza</span>}
                  </div>

                  {/* Días */}
                  {route.recurrence?.length > 0 && (
                    <div className="flex gap-1 mb-3">
                      {RECURRENCE_DAYS.map(d => (
                        <span key={d.value}
                          className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center ${
                            route.recurrence.includes(d.value) ? 'bg-ocean text-white' : 'bg-slate-100 text-slate-400'
                          }`}>
                          {d.label}
                        </span>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => openModal(route.id)}
                    className="w-full py-2 rounded-xl bg-ocean text-white text-sm font-bold hover:bg-sky transition"
                  >
                    Solicitar unirme
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ── Modal solicitud ── */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            {sent ? (
              <div className="p-8 text-center">
                <p className="text-5xl mb-3">✅</p>
                <h3 className="text-lg font-bold text-slate-800 mb-1">¡Solicitud enviada!</h3>
                <p className="text-sm text-slate-500 mb-5">
                  {profile?.full_name} recibirá tu petición y podrá aceptarla o rechazarla.
                </p>
                <button onClick={() => setShowModal(false)}
                  className="px-6 py-2.5 rounded-xl bg-ocean text-white font-bold hover:bg-sky transition">
                  Cerrar
                </button>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800">Enviar solicitud</h3>
                  <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 text-xl">✕</button>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl mb-4">
                  <Avatar url={profile?.avatar_url} name={profile?.full_name} size={36} />
                  <p className="text-sm font-semibold text-slate-700">{profile?.full_name}</p>
                </div>

                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Mensaje <span className="font-normal text-slate-400">(opcional)</span>
                </label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={4}
                  maxLength={500}
                  placeholder="Preséntate brevemente, menciona tu horario o flexibilidad..."
                  className="input resize-none mb-1"
                />
                <p className="text-xs text-slate-400 text-right mb-4">{message.length}/500</p>

                <div className="flex gap-3">
                  <button onClick={() => setShowModal(false)} disabled={sending}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition">
                    Cancelar
                  </button>
                  <button onClick={handleSendRequest} disabled={sending}
                    className="flex-1 py-2.5 rounded-xl bg-ocean text-white font-bold text-sm hover:bg-sky transition disabled:opacity-60">
                    {sending ? 'Enviando...' : 'Enviar solicitud'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
