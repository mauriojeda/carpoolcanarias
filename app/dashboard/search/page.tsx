'use client'

import { useState, useEffect, Suspense } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface Route {
  id: string
  origin_name: string
  destination_name: string
  departure_time: string
  days_of_week: number[]
  seats_available: number
  price_per_seat: number
  description: string
  max_detour_minutes: number
  driver: {
    id: string          // ← añadido
    full_name: string
    rating: number
    avatar_url: string | null
    vehicle: string
    allows_smoking: boolean
    allows_pets: boolean
    likes_conversation: boolean
  }
  origin_distance_km: number
  destination_distance_km: number
}

interface Suggestion {
  place_name: string
  center: [number, number]
}

const DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

function PreferenceBadge({ icon, label, value }: { icon: string; label: string; value: boolean }) {
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
      value ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-600'
    }`}>
      <span className="text-base">{icon}</span>
      <span>{label}</span>
      <span className={`ml-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white ${value ? 'bg-green-500' : 'bg-red-400'}`}>
        {value ? '✓' : '✗'}
      </span>
    </div>
  )
}

// ── Avatar clicable ──────────────────────────────────────────────────────────
function DriverCard({ driver }: { driver: Route['driver'] }) {
  const initials = driver.full_name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <Link
      href={`/users/${driver.id}`}
      className="flex items-center gap-4 group"
      title={`Ver perfil de ${driver.full_name}`}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        {driver.avatar_url ? (
          <img
            src={driver.avatar_url}
            alt={driver.full_name}
            className="w-14 h-14 rounded-full object-cover border-2 border-blue-200 shadow-md group-hover:border-blue-400 transition"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border-2 border-blue-200 shadow-md group-hover:border-blue-400 transition">
            <span className="text-white font-bold text-lg">{initials}</span>
          </div>
        )}
        {/* Indicador hover */}
        <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow">
          <span className="text-white text-[9px] font-bold">→</span>
        </span>
      </div>

      {/* Info conductor */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition leading-tight">
          {driver.full_name}
        </h3>
        {driver.rating > 0 ? (
          <div className="flex items-center gap-1 mt-0.5">
            {[1, 2, 3, 4, 5].map(star => (
              <svg key={star} className={`w-3.5 h-3.5 ${star <= Math.round(driver.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs font-semibold text-yellow-600 ml-1">{driver.rating.toFixed(1)}</span>
          </div>
        ) : (
          <p className="text-xs text-gray-400 italic mt-0.5">Sin puntuación aún</p>
        )}
        <p className="text-xs text-gray-500 mt-0.5">🚙 {driver.vehicle}</p>
        <p className="text-xs text-blue-500 font-medium mt-1 opacity-0 group-hover:opacity-100 transition">
          Ver perfil completo →
        </p>
      </div>
    </Link>
  )
}

// ─── Componente interno que usa useSearchParams ───────────────────────────────
function SearchRoutesContent() {
  const searchParams = useSearchParams()

  const [originAddress, setOriginAddress] = useState('')
  const [destinationAddress, setDestinationAddress] = useState('')
  const [searchTime, setSearchTime] = useState('')
  const [originCoords, setOriginCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [destinationCoords, setDestinationCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [routes, setRoutes] = useState<Route[]>([])
  const [loading, setLoading] = useState(false)
  const [searching, setSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  // Modal
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null)
  const [requestMessage, setRequestMessage] = useState('')
  const [sendingRequest, setSendingRequest] = useState(false)
  const [requestSent, setRequestSent] = useState(false)

  // Autocomplete
  const [originSuggestions, setOriginSuggestions] = useState<Suggestion[]>([])
  const [destSuggestions, setDestSuggestions] = useState<Suggestion[]>([])
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false)
  const [showDestSuggestions, setShowDestSuggestions] = useState(false)

  const supabase = createClient()
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  // Días seleccionados (números 1-7)
  const [selectedDays, setSelectedDays] = useState<number[]>([])

  const WEEK_DAYS = [
    { value: 1, label: 'L' },
    { value: 2, label: 'M' },
    { value: 3, label: 'X' },
    { value: 4, label: 'J' },
    { value: 5, label: 'V' },
    { value: 6, label: 'S' },
    { value: 7, label: 'D' },
  ]

  const toggleDay = (v: number) =>
    setSelectedDays(prev => prev.includes(v) ? prev.filter(d => d !== v) : [...prev, v])

  // ─── Leer params y lanzar búsqueda automática ─────────────────────────────
  useEffect(() => {
    const originParam      = searchParams.get('origin')
    const destParam        = searchParams.get('destination')
    const timeParam        = searchParams.get('time')
    const daysParam        = searchParams.get('days')
    const originLatParam   = searchParams.get('origin_lat')
    const originLngParam   = searchParams.get('origin_lng')
    const destLatParam     = searchParams.get('dest_lat')
    const destLngParam     = searchParams.get('dest_lng')

    if (originParam) setOriginAddress(originParam)
    if (destParam)   setDestinationAddress(destParam)
    if (timeParam)   setSearchTime(timeParam)
    if (daysParam)   setSelectedDays(daysParam.split(',').map(Number))

    if (originLatParam && originLngParam && destLatParam && destLngParam) {
      const oCoords = { lat: parseFloat(originLatParam), lng: parseFloat(originLngParam) }
      const dCoords = { lat: parseFloat(destLatParam),   lng: parseFloat(destLngParam)   }
      setOriginCoords(oCoords)
      setDestinationCoords(dCoords)
      setLoading(true)
      setHasSearched(true)
      searchRoutes(oCoords.lat, oCoords.lng, dCoords.lat, dCoords.lng, timeParam || '', daysParam ? daysParam.split(',').map(Number) : [])
        .finally(() => setLoading(false))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ─── Geocodificación ──────────────────────────────────────────────────────
  const searchMapboxOrigin = async (query: string) => {
    if (query.length < 3) { setOriginSuggestions([]); return }
    try {
      const res  = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?` +
        `country=ES&proximity=-15.5,28.3&bbox=-18.5,27.5,-13.0,29.5&access_token=${MAPBOX_TOKEN}`
      )
      const data = await res.json()
      setOriginSuggestions(data.features || [])
      setShowOriginSuggestions(true)
    } catch (err) { console.error(err) }
  }

  const searchMapboxDest = async (query: string) => {
    if (query.length < 3) { setDestSuggestions([]); return }
    try {
      const res  = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?` +
        `country=ES&proximity=-15.5,28.3&bbox=-18.5,27.5,-13.0,29.5&access_token=${MAPBOX_TOKEN}`
      )
      const data = await res.json()
      setDestSuggestions(data.features || [])
      setShowDestSuggestions(true)
    } catch (err) { console.error(err) }
  }

  const selectOrigin      = (s: Suggestion) => { setOriginAddress(s.place_name);      setOriginCoords({ lat: s.center[1], lng: s.center[0] });      setShowOriginSuggestions(false) }
  const selectDestination = (s: Suggestion) => { setDestinationAddress(s.place_name); setDestinationCoords({ lat: s.center[1], lng: s.center[0] }); setShowDestSuggestions(false)  }

  // ─── Búsqueda ─────────────────────────────────────────────────────────────
  const timeToMinutes = (time: string) => { const [h, m] = time.split(':'); return parseInt(h) * 60 + parseInt(m) }

  const searchRoutes = async (originLat: number, originLng: number, destLat: number, destLng: number, time: string, days: number[] = []) => {
    setSearching(true)
    setError(null)
    setRoutes([])
    try {
      const { data, error: searchError } = await supabase.rpc('search_compatible_routes', {
        user_origin_lat: originLat,
        user_origin_lng: originLng,
        user_dest_lat:   destLat,
        user_dest_lng:   destLng,
        max_deviation_km: 10,
      })
      if (searchError) throw searchError

      let filtered = data || []

      // Filtro por hora (±30 min)
      if (time && filtered.length > 0) {
        const searchMinutes = timeToMinutes(time)
        filtered = filtered.filter((r: Route) => Math.abs(timeToMinutes(r.departure_time) - searchMinutes) <= 30)
      }

      // Filtro por días: la ruta debe incluir AL MENOS uno de los días seleccionados
      if (days.length > 0 && filtered.length > 0) {
        filtered = filtered.filter((r: Route) =>
          r.days_of_week.some(d => days.includes(d))
        )
      }

      setRoutes(filtered)
    } catch (err: any) {
      setError(err.message || 'Error al buscar en la base de datos')
    } finally {
      setSearching(false)
    }
  }

  const handleSearch = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!originCoords || !destinationCoords) { setError('Por favor selecciona origen y destino de las sugerencias'); return }
    setLoading(true)
    setHasSearched(true)
    try {
      await searchRoutes(originCoords.lat, originCoords.lng, destinationCoords.lat, destinationCoords.lng, searchTime, selectedDays)
    } catch (err: any) {
      setError(err.message || 'Error al buscar rutas')
    } finally {
      setLoading(false)
    }
  }

  // ─── Modal ────────────────────────────────────────────────────────────────
  const openMessageModal = (routeId: string) => {
    setSelectedRouteId(routeId)
    setRequestMessage('')
    setRequestSent(false)
    setShowMessageModal(true)
  }

  const closeMessageModal = () => { setShowMessageModal(false); setSelectedRouteId(null); setRequestMessage('') }

  const handleSendRequest = async () => {
    if (!originCoords || !destinationCoords || !selectedRouteId) return
    setSendingRequest(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { alert('Debes iniciar sesión para solicitar unirte a una ruta'); return }
      const { error } = await supabase.from('route_requests').insert({
        route_id:          selectedRouteId,
        passenger_id:      user.id,
        pickup_location:   `POINT(${originCoords.lng} ${originCoords.lat})`,
        pickup_name:       originAddress,
        dropoff_location:  `POINT(${destinationCoords.lng} ${destinationCoords.lat})`,
        dropoff_name:      destinationAddress,
        seats_requested:   1,
        message:           requestMessage.trim() || null,
        status:            'pending',
      })
      if (error) throw error
      setRequestSent(true)
    } catch (err: any) {
      alert('Error al enviar solicitud: ' + err.message)
    } finally {
      setSendingRequest(false)
    }
  }

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">🚗 Carpool Canarias</Link>
          <Link href="/dashboard" className="text-sm text-blue-600 hover:text-blue-800 font-medium">Mi Dashboard →</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">🔍 Buscar Rutas Disponibles</h1>

        {/* Formulario */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="space-y-4">

            {/* Origen */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">📍 ¿Desde dónde sales?</label>
              <div className="relative">
                <input type="text" value={originAddress}
                  onChange={e => { setOriginAddress(e.target.value); setOriginCoords(null); searchMapboxOrigin(e.target.value) }}
                  onFocus={() => originSuggestions.length > 0 && setShowOriginSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowOriginSuggestions(false), 200)}
                  placeholder="Ej: Las Palmas de Gran Canaria, Calle Mayor 123"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                {originCoords && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 font-bold text-lg">✓</span>}
              </div>
              {showOriginSuggestions && originSuggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {originSuggestions.map((s, i) => (
                    <div key={i} onMouseDown={e => { e.preventDefault(); selectOrigin(s) }}
                      className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-900">
                      {s.place_name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Destino */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">🎯 ¿A dónde vas?</label>
              <div className="relative">
                <input type="text" value={destinationAddress}
                  onChange={e => { setDestinationAddress(e.target.value); setDestinationCoords(null); searchMapboxDest(e.target.value) }}
                  onFocus={() => destSuggestions.length > 0 && setShowDestSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowDestSuggestions(false), 200)}
                  placeholder="Ej: Telde, Avenida Principal 456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                {destinationCoords && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 font-bold text-lg">✓</span>}
              </div>
              {showDestSuggestions && destSuggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {destSuggestions.map((s, i) => (
                    <div key={i} onMouseDown={e => { e.preventDefault(); selectDestination(s) }}
                      className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-900">
                      {s.place_name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Hora */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🕒 Hora de salida <span className="text-gray-400 font-normal">(opcional, ±30 min)</span>
              </label>
              <input type="time" value={searchTime} onChange={e => setSearchTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Días */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📅 Días <span className="text-gray-400 font-normal">(opcional)</span>
              </label>
              <div className="flex gap-1.5 flex-wrap">
                {WEEK_DAYS.map(day => (
                  <button
                    key={day.value}
                    type="button"
                    onClick={() => toggleDay(day.value)}
                    className={`w-10 h-10 rounded-full text-sm font-bold border transition ${
                      selectedDays.includes(day.value)
                        ? 'bg-blue-600 text-white border-blue-600 shadow'
                        : 'bg-gray-50 text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600'
                    }`}
                  >
                    {day.label}
                  </button>
                ))}
                {selectedDays.length > 0 && (
                  <button type="button" onClick={() => setSelectedDays([])}
                    className="text-xs text-gray-400 hover:text-gray-600 px-1" title="Limpiar">✕</button>
                )}
              </div>
              {selectedDays.length > 0 && (
                <p className="text-xs text-blue-600 mt-1.5">
                  Solo rutas que operen alguno de los días seleccionados
                </p>
              )}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">⚠️ {error}</div>
            )}

            <button onClick={handleSearch} disabled={loading || searching}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {loading || searching ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Buscando rutas...
                </span>
              ) : 'Buscar rutas compatibles'}
            </button>
          </div>
        </div>

        {/* Spinner inicial */}
        {(loading || searching) && routes.length === 0 && (
          <div className="flex justify-center py-12">
            <div className="text-center">
              <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-3" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              <p className="text-gray-500">Buscando rutas compatibles...</p>
            </div>
          </div>
        )}

        {/* Resultados */}
        {routes.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {routes.length} {routes.length === 1 ? 'ruta encontrada' : 'rutas encontradas'}
              {searchTime && <span className="text-base text-gray-500 font-normal ml-2">(±30 min de {searchTime})</span>}
            </h2>

            <div className="grid gap-6">
              {routes.map(route => (
                <div key={route.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">

                  {/* ── Conductor clicable ── */}
                  <div className="flex items-start gap-4 mb-5">
                    <DriverCard driver={route.driver} />
                  </div>

                  {/* Preferencias */}
                  <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-gray-100">
                    <PreferenceBadge icon="🚬" label="Fumar"        value={route.driver.allows_smoking} />
                    <PreferenceBadge icon="🐾" label="Mascotas"     value={route.driver.allows_pets} />
                    <PreferenceBadge icon="💬" label="Conversación" value={route.driver.likes_conversation} />
                  </div>

                  {/* Detalles ruta */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 font-semibold shrink-0">📍 Origen:</span>
                      <div>
                        <p className="text-gray-900">{route.origin_name}</p>
                        <p className="text-sm text-gray-500">~{route.origin_distance_km.toFixed(1)} km de tu punto de origen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-600 font-semibold shrink-0">🎯 Destino:</span>
                      <div>
                        <p className="text-gray-900">{route.destination_name}</p>
                        <p className="text-sm text-gray-500">~{route.destination_distance_km.toFixed(1)} km de tu destino</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">🕒 Hora:</span>
                      <p className="text-gray-900">{route.departure_time.substring(0, 5)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">📅 Días:</span>
                      <div className="flex gap-2 flex-wrap">
                        {route.days_of_week.map(day => (
                          <span key={day} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">
                            {DAYS[day]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">💺 Asientos:</span>
                        <p className="text-gray-900">{route.seats_available}</p>
                      </div>
                      {route.price_per_seat && (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">💰 Precio:</span>
                          <p className="text-gray-900">{route.price_per_seat}€/asiento</p>
                        </div>
                      )}
                    </div>
                    {route.description && (
                      <div className="pt-2 border-t">
                        <p className="text-gray-600 text-sm">{route.description}</p>
                      </div>
                    )}
                  </div>

                  <button onClick={() => openMessageModal(route.id)}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Solicitar unirme a esta ruta
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && !searching && hasSearched && routes.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
            <p className="text-5xl mb-3">🔍</p>
            <p className="text-yellow-800 font-semibold text-lg mb-2">No se encontraron rutas compatibles</p>
            <p className="text-yellow-700 text-sm">
              Intenta buscar con otras direcciones o considera{' '}
              <Link href="/routes/create" className="underline font-medium hover:text-yellow-900">crear tu propia ruta como conductor</Link>.
            </p>
          </div>
        )}
      </main>

      {/* ── Modal solicitud ── */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {requestSent ? (
                <div className="text-center py-8">
                  <p className="text-5xl mb-3">✅</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">¡Solicitud enviada!</h3>
                  <p className="text-gray-500 text-sm mb-6">El conductor recibirá tu petición y podrá aceptarla o rechazarla.</p>
                  <button onClick={closeMessageModal}
                    className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                    Cerrar
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">✉️ Enviar solicitud al conductor</h2>
                    <button onClick={closeMessageModal} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">✕</button>
                  </div>

                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">💡 Consejos para tu mensaje:</h3>
                    <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                      <li>Preséntate brevemente</li>
                      <li>Explica tu situación y por qué necesitas esta ruta</li>
                      <li>Menciona tu flexibilidad de horarios si la tienes</li>
                      <li>Sé amable y respetuoso</li>
                      <li>Indica si estás dispuesto a compartir gastos</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje para el conductor <span className="text-gray-400">(opcional pero recomendado)</span>
                    </label>
                    <textarea
                      value={requestMessage}
                      onChange={e => setRequestMessage(e.target.value)}
                      placeholder="Ej: ¡Hola! Me llamo Juan y trabajo en la misma zona..."
                      rows={6} maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm text-gray-500">Este mensaje ayudará al conductor a conocerte mejor</p>
                      <p className="text-sm text-gray-500">{requestMessage.length}/500</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={closeMessageModal} disabled={sendingRequest}
                      className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50">
                      Cancelar
                    </button>
                    <button onClick={handleSendRequest} disabled={sendingRequest}
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50">
                      {sendingRequest ? 'Enviando...' : 'Enviar solicitud'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SearchRoutesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-3" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <p className="text-gray-500">Cargando...</p>
        </div>
      </div>
    }>
      <SearchRoutesContent />
    </Suspense>
  )
}