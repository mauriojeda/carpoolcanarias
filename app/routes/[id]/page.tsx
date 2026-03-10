'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

interface RouteDetail {
  id: string
  origin_name: string
  destination_name: string
  departure_time: string
  days_of_week: number[]
  seats_available: number
  price_per_seat: number | null
  description: string | null
  max_detour_minutes: number
  active: boolean
  created_at: string
  driver: {
    id: string
    full_name: string
    avatar_url: string | null
    bio: string | null
    phone: string | null
    allows_smoking: boolean
    allows_pets: boolean
    likes_conversation: boolean
    vehicle: string | null
  }
}

interface Suggestion {
  place_name: string
  center: [number, number]
}

const DAYS_LABEL: Record<number, string> = {
  0: 'Domingo', 1: 'Lunes', 2: 'Martes', 3: 'Miércoles',
  4: 'Jueves', 5: 'Viernes', 6: 'Sábado',
}
const DAYS_SHORT: Record<number, string> = {
  0: 'D', 1: 'L', 2: 'M', 3: 'X', 4: 'J', 5: 'V', 6: 'S',
}

const supabase = createClient()

function Avatar({ url, name, size = 64 }: { url?: string | null; name?: string | null; size?: number }) {
  const initials = name?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) ?? '?'
  if (url) return (
    <img src={url} alt={name ?? ''} style={{ width: size, height: size }}
      className="rounded-full object-cover ring-4 ring-white shadow-lg shrink-0" />
  )
  return (
    <div style={{ width: size, height: size, fontSize: size * 0.36 }}
      className="rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold ring-4 ring-white shadow-lg shrink-0">
      {initials}
    </div>
  )
}

function RequestModal({ route, onClose, onSent }: { route: RouteDetail; onClose: () => void; onSent: () => void }) {
  const router = useRouter()
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  const [pickupAddress, setPickupAddress] = useState('')
  const [dropoffAddress, setDropoffAddress] = useState('')
  const [pickupCoords, setPickupCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [dropoffCoords, setDropoffCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pickupSuggestions, setPickupSuggestions] = useState<Suggestion[]>([])
  const [dropoffSuggestions, setDropoffSuggestions] = useState<Suggestion[]>([])
  const [showPickup, setShowPickup] = useState(false)
  const [showDropoff, setShowDropoff] = useState(false)

  const searchMapbox = async (query: string, type: 'pickup' | 'dropoff') => {
    if (query.length < 3) { type === 'pickup' ? setPickupSuggestions([]) : setDropoffSuggestions([]); return }
    const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?country=ES&proximity=-15.5,28.3&bbox=-18.5,27.5,-13.0,29.5&access_token=${MAPBOX_TOKEN}`)
    const data = await res.json()
    if (type === 'pickup') { setPickupSuggestions(data.features || []); setShowPickup(true) }
    else { setDropoffSuggestions(data.features || []); setShowDropoff(true) }
  }

  const handleSend = async () => {
    if (!pickupCoords || !dropoffCoords) { setError('Selecciona tu punto de recogida y destino de las sugerencias'); return }
    setSending(true); setError(null)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth/login'); return }
      const { error: err } = await supabase.from('route_requests').insert({
        route_id: route.id, passenger_id: user.id,
        pickup_location: `POINT(${pickupCoords.lng} ${pickupCoords.lat})`, pickup_name: pickupAddress,
        dropoff_location: `POINT(${dropoffCoords.lng} ${dropoffCoords.lat})`, dropoff_name: dropoffAddress,
        seats_requested: 1, message: message.trim() || null, status: 'pending',
      })
      if (err) throw err
      onSent()
    } catch (e: any) {
      setError(e.message || 'Error al enviar solicitud')
    } finally { setSending(false) }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between rounded-t-3xl z-10">
          <h2 className="text-lg font-bold text-gray-900">✋ Solicitar plaza</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition">✕</button>
        </div>
        <div className="p-5 space-y-4">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
              <span>{route.origin_name}</span><span className="text-blue-400">→</span><span>{route.destination_name}</span>
            </div>
            <p className="text-xs text-blue-600 mt-1">🕐 {route.departure_time?.slice(0, 5)} · Con {route.driver.full_name}</p>
          </div>
          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">📍 ¿Dónde te recogemos?</label>
            <input type="text" value={pickupAddress}
              onChange={e => { setPickupAddress(e.target.value); setPickupCoords(null); searchMapbox(e.target.value, 'pickup') }}
              onFocus={() => pickupSuggestions.length > 0 && setShowPickup(true)}
              onBlur={() => setTimeout(() => setShowPickup(false), 200)}
              placeholder="Ej: Calle Mayor 3, Las Palmas"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            />
            {pickupCoords && <span className="absolute right-3 top-[calc(50%+10px)] -translate-y-1/2 text-green-500 font-bold">✓</span>}
            {showPickup && pickupSuggestions.length > 0 && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-48 overflow-y-auto">
                {pickupSuggestions.map((s, i) => (
                  <div key={i} onMouseDown={e => { e.preventDefault(); setPickupAddress(s.place_name); setPickupCoords({ lat: s.center[1], lng: s.center[0] }); setShowPickup(false) }}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-800">{s.place_name}</div>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">🏁 ¿Dónde te dejamos?</label>
            <input type="text" value={dropoffAddress}
              onChange={e => { setDropoffAddress(e.target.value); setDropoffCoords(null); searchMapbox(e.target.value, 'dropoff') }}
              onFocus={() => dropoffSuggestions.length > 0 && setShowDropoff(true)}
              onBlur={() => setTimeout(() => setShowDropoff(false), 200)}
              placeholder="Ej: Avenida Mesa y López 45"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            />
            {dropoffCoords && <span className="absolute right-3 top-[calc(50%+10px)] -translate-y-1/2 text-green-500 font-bold">✓</span>}
            {showDropoff && dropoffSuggestions.length > 0 && (
              <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-48 overflow-y-auto">
                {dropoffSuggestions.map((s, i) => (
                  <div key={i} onMouseDown={e => { e.preventDefault(); setDropoffAddress(s.place_name); setDropoffCoords({ lat: s.center[1], lng: s.center[0] }); setShowDropoff(false) }}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-800">{s.place_name}</div>
                ))}
              </div>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">💬 Mensaje <span className="font-normal text-gray-400 normal-case">(opcional)</span></label>
            <textarea value={message} onChange={e => setMessage(e.target.value)}
              placeholder="Preséntate brevemente..." rows={3} maxLength={500}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 resize-none"
            />
            <p className="text-xs text-gray-400 text-right mt-1">{message.length}/500</p>
          </div>
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">⚠️ {error}</p>}
          <div className="flex gap-3 pt-1">
            <button onClick={onClose} disabled={sending} className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition">Cancelar</button>
            <button onClick={handleSend} disabled={sending} className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition disabled:opacity-50 shadow-lg shadow-blue-200">
              {sending ? 'Enviando...' : 'Enviar solicitud'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RouteDetailPage() {
  const params = useParams()
  const router = useRouter()

  const [route, setRoute] = useState<RouteDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)
  const [requestSent, setRequestSent] = useState(false)
  const [alreadyRequested, setAlreadyRequested] = useState(false)
  const [startingChat, setStartingChat] = useState(false)

  useEffect(() => {
    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setCurrentUser(session?.user ?? null)

      const { data, error } = await supabase
        .from('routes')
        .select(`
          id, origin_name, destination_name, departure_time, days_of_week,
          seats_available, price_per_seat, description, max_detour_minutes,
          active, created_at,
          driver:profiles!routes_driver_id_fkey(
            id, full_name, avatar_url, bio, phone,
            allows_smoking, allows_pets, likes_conversation, vehicle
          )
        `)
        .eq('id', params.id)
        .single()

      if (error || !data) { setNotFound(true); setLoading(false); return }
      setRoute(data as any)

      if (session?.user) {
        const { data: existing } = await supabase
          .from('route_requests').select('id')
          .eq('route_id', params.id).eq('passenger_id', session.user.id).maybeSingle()
        if (existing) setAlreadyRequested(true)
      }
      setLoading(false)
    }
    load()
  }, [params.id])

  // ── Abrir o crear conversación y redirigir a /messages ─────────────────
  const handleContact = async () => {
    if (!currentUser) { router.push('/auth/login'); return }
    if (!route) return
    setStartingChat(true)

    try {
      // Buscar conversación existente para esta ruta + pasajero
      const { data: existing } = await supabase
        .from('conversations')
        .select('id')
        .eq('route_id', route.id)
        .eq('passenger_id', currentUser.id)
        .maybeSingle()

      let convId = existing?.id

      // Si no existe, crearla
      if (!convId) {
        const { data: newConv, error } = await supabase
          .from('conversations')
          .insert({
            route_id: route.id,
            passenger_id: currentUser.id,
            driver_id: route.driver.id,
          })
          .select('id')
          .single()
        if (error) throw error
        convId = newConv.id
      }

      router.push(`/messages?conv=${convId}`)
    } catch (e) {
      console.error('Error abriendo chat:', e)
    } finally {
      setStartingChat(false)
    }
  }

  const isOwnRoute = currentUser && route && currentUser.id === route.driver?.id

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-gray-500">Cargando viaje...</p>
      </div>
    </div>
  )

  if (notFound || !route) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl mb-4">🗺️</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Viaje no encontrado</h1>
        <p className="text-gray-500 mb-6">Este viaje no existe o ha sido eliminado.</p>
        <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition">Volver al inicio</Link>
      </div>
    </div>
  )

  const days = [...(route.days_of_week ?? [])].sort((a, b) => a - b)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => router.back()} className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition font-bold text-lg">←</button>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🚗</span>
            <span className="font-bold text-gray-800 text-lg">Carpool <span className="text-blue-600">Canarias</span></span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-5">

        {/* Hero ruta */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-3 h-3 rounded-full bg-white" />
              <div className="w-0.5 h-10 bg-white/40" />
              <div className="w-3 h-3 rounded-full bg-white/60 border-2 border-white" />
            </div>
            <div className="flex flex-col justify-between h-16">
              <div><p className="text-xs text-blue-200 font-medium">Origen</p><p className="text-xl font-bold leading-tight">{route.origin_name}</p></div>
              <div><p className="text-xs text-blue-200 font-medium">Destino</p><p className="text-xl font-bold leading-tight">{route.destination_name}</p></div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Hora', value: route.departure_time?.slice(0, 5) },
              { label: 'Plazas', value: `${route.seats_available} 💺` },
              { label: 'Precio', value: route.price_per_seat != null ? `${route.price_per_seat}€` : 'Gratis' },
              { label: 'Desvío máx.', value: `${route.max_detour_minutes} min` },
            ].map(item => (
              <div key={item.label} className="bg-white/10 rounded-xl px-3 py-2.5 text-center">
                <p className="text-xs text-blue-200 mb-0.5">{item.label}</p>
                <p className="font-bold text-lg">{item.value}</p>
              </div>
            ))}
          </div>
          {days.length > 0 && (
            <div className="mt-4 flex items-center gap-2">
              <p className="text-xs text-blue-200 font-medium shrink-0">Días:</p>
              <div className="flex gap-1.5">
                {[0,1,2,3,4,5,6].map(d => (
                  <span key={d} className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${days.includes(d) ? 'bg-white text-blue-700' : 'bg-white/10 text-white/40'}`}>
                    {DAYS_SHORT[d]}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Columna izquierda */}
          <div className="md:col-span-2 space-y-5">

            {/* Conductor */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Conductor</h2>
              <div className="flex items-start gap-4">
                <Avatar url={route.driver.avatar_url} name={route.driver.full_name} size={72} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{route.driver.full_name}</h3>
                  {route.driver.vehicle && <p className="text-sm text-gray-600 mt-1">🚙 {route.driver.vehicle}</p>}
                </div>
              </div>
              {route.driver.bio && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed">{route.driver.bio}</p>
                </div>
              )}
            </div>

            {/* Preferencias */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Preferencias a bordo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: '🚬', label: 'Fumar', value: route.driver.allows_smoking },
                  { icon: '🐾', label: 'Mascotas', value: route.driver.allows_pets },
                  { icon: '💬', label: 'Conversación', value: route.driver.likes_conversation },
                ].map(pref => (
                  <div key={pref.label} className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${pref.value ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-600'}`}>
                    <span className="text-xl">{pref.icon}</span>
                    <div>
                      <p className="text-xs font-semibold">{pref.label}</p>
                      <p className="text-xs">{pref.value ? '✓ Permitido' : '✗ No permitido'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {route.description && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Descripción del viaje</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{route.description}</p>
              </div>
            )}

            {days.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Días de viaje</h2>
                <div className="flex flex-wrap gap-2">
                  {days.map(d => (
                    <span key={d} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-xl border border-blue-100">{DAYS_LABEL[d]}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Columna derecha: CTA */}
          <div className="md:col-span-1">
            <div className="sticky top-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
              <div className="text-center pb-4 border-b border-gray-100">
                {route.price_per_seat != null ? (
                  <><p className="text-3xl font-extrabold text-gray-900">{route.price_per_seat}€</p><p className="text-sm text-gray-500">por plaza</p></>
                ) : (
                  <p className="text-3xl font-extrabold text-green-600">Gratis</p>
                )}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Plazas disponibles</span>
                <span className="font-bold text-gray-900">{route.seats_available} 💺</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Desvío máximo</span>
                <span className="font-bold text-gray-900">{route.max_detour_minutes} min</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Estado</span>
                <span className={`font-bold ${route.active ? 'text-green-600' : 'text-red-500'}`}>
                  {route.active ? '🟢 Activo' : '🔴 Inactivo'}
                </span>
              </div>

              {/* Botones de acción */}
              {isOwnRoute ? (
                <Link href={`/routes/${route.id}/edit`}
                  className="w-full block text-center py-3.5 rounded-xl bg-gray-800 text-white font-bold hover:bg-gray-900 transition shadow-md">
                  ✏️ Editar mi ruta
                </Link>
              ) : (
                <>
                  {/* Botón solicitar plaza */}
                  {requestSent || alreadyRequested ? (
                    <div className="w-full py-3.5 rounded-xl bg-green-50 border border-green-200 text-green-700 font-bold text-center">
                      ✅ Solicitud enviada
                    </div>
                  ) : !route.active ? (
                    <div className="w-full py-3.5 rounded-xl bg-gray-100 text-gray-400 font-bold text-center">
                      Ruta no disponible
                    </div>
                  ) : (
                    <button
                      onClick={() => currentUser ? setShowModal(true) : router.push('/auth/login')}
                      className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 active:scale-95 transition shadow-lg shadow-blue-200 text-base"
                    >
                      ✋ Solicitar plaza
                    </button>
                  )}

                  {/* Botón contactar con el conductor */}
                  <button
                    onClick={handleContact}
                    disabled={startingChat}
                    className="w-full py-3.5 rounded-xl border-2 border-blue-200 text-blue-700 font-bold hover:bg-blue-50 active:scale-95 transition text-base flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {startingChat ? (
                      <><div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" /> Abriendo chat...</>
                    ) : (
                      <>💬 Contactar con el conductor</>
                    )}
                  </button>
                </>
              )}

              {!currentUser && (
                <p className="text-xs text-center text-gray-400">
                  <Link href="/auth/login" className="text-blue-600 underline font-medium">Inicia sesión</Link> para contactar
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <RequestModal route={route} onClose={() => setShowModal(false)} onSent={() => { setShowModal(false); setRequestSent(true) }} />
      )}
    </div>
  )
}