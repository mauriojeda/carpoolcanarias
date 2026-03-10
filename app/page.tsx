'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import RoutesMap from '@/components/map-view'

interface Suggestion { place_name: string; center: [number, number] }
interface RecentRoute {
  id: string; origin_name: string; destination_name: string; departure_time: string
  days_of_week: number[]; seats_available: number; price_per_seat: number | null
  driver: { id: string; full_name: string; avatar_url: string | null } | null
}

const DRIVING_PREFERENCES = [
  { value: 'no_smoking', label: '🚭 Sin tabaco' }, { value: 'pets_allowed', label: '🐾 Mascotas OK' },
  { value: 'no_pets', label: '🚫 Sin mascotas' }, { value: 'music', label: '🎵 Con música' },
  { value: 'silent', label: '🤫 Silencioso' }, { value: 'chat', label: '💬 Charla amigable' },
  { value: 'ac', label: '❄️ Aire acondicionado' }, { value: 'luggage', label: '🧳 Equipaje grande' },
]
const WEEK_DAYS = [
  { value: 1, label: 'L' }, { value: 2, label: 'M' }, { value: 3, label: 'X' },
  { value: 4, label: 'J' }, { value: 5, label: 'V' }, { value: 6, label: 'S' }, { value: 7, label: 'D' },
]

function Avatar({ url, name, size = 28 }: { url?: string | null; name?: string | null; size?: number }) {
  const initials = name?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) ?? '?'
  if (url) return <img src={url} alt={name ?? ''} style={{ width: size, height: size }} className="rounded-full object-cover shrink-0" />
  return (
    <div style={{ width: size, height: size, fontSize: size * 0.38 }}
      className="rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
      {initials}
    </div>
  )
}

function RecentRouteCard({ route }: { route: RecentRoute }) {
  const days = [...(route.days_of_week ?? [])].sort((a, b) => a - b)
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md hover:border-blue-200 transition-all">
      <div className="mb-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-gray-800 text-sm truncate max-w-[130px]">{route.origin_name}</span>
          <span className="text-blue-400 text-xs shrink-0">→</span>
          <span className="font-semibold text-gray-800 text-sm truncate max-w-[130px]">{route.destination_name}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-xs text-gray-500">
          <span>🕐 {route.departure_time?.slice(0, 5)}</span>
          <span>💺 {route.seats_available} pl.</span>
          {route.price_per_seat != null ? <span className="text-blue-600 font-semibold">💶 {route.price_per_seat}€</span> : <span className="text-green-600 font-semibold">Gratis</span>}
        </div>
      </div>
      {days.length > 0 && (
        <div className="flex gap-1 mb-3">
          {WEEK_DAYS.map(d => (
            <span key={d.value} className={`w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center ${days.includes(d.value) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>{d.label}</span>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between">
        {route.driver ? (
          <div className="flex items-center gap-1.5">
            <Avatar url={route.driver.avatar_url} name={route.driver.full_name} size={22} />
            <span className="text-xs text-gray-500 truncate max-w-[110px]">{route.driver.full_name}</span>
          </div>
        ) : <div />}
        <Link href={`/routes/${route.id}`} className="text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition shrink-0">
          Ver →
        </Link>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [mapRoutes, setMapRoutes] = useState<any[]>([])
  const [recentRoutes, setRecentRoutes] = useState<RecentRoute[]>([])
  const [originAddress, setOriginAddress] = useState('')
  const [destinationAddress, setDestinationAddress] = useState('')
  const [originCoords, setOriginCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [destinationCoords, setDestinationCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [departureTime, setDepartureTime] = useState('')
  const [selectedDays, setSelectedDays] = useState<number[]>([])
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([])
  const [showPreferences, setShowPreferences] = useState(false)
  const [passengerCount, setPassengerCount] = useState(1)
  const [originSuggestions, setOriginSuggestions] = useState<Suggestion[]>([])
  const [destSuggestions, setDestSuggestions] = useState<Suggestion[]>([])
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false)
  const [showDestSuggestions, setShowDestSuggestions] = useState(false)

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      const { data: mapData } = await supabase.from('routes').select('id, origin_name, destination_name').eq('active', true)
      if (mapData && mapData.length > 0) {
        const routesWithGeo = await Promise.all(mapData.map(async (route) => {
          const { data: geoData } = await supabase.rpc('get_route_geojson', { route_id: route.id })
          return { ...route, origin_geo: geoData?.origin_geo || null, destination_geo: geoData?.destination_geo || null, route_line_geo: geoData?.route_line_geo || null }
        }))
        setMapRoutes(routesWithGeo)
      }
      const { data: recent } = await supabase.from('routes')
        .select('id, origin_name, destination_name, departure_time, days_of_week, seats_available, price_per_seat, driver:profiles!routes_driver_id_fkey(id, full_name, avatar_url)')
        .eq('active', true).order('created_at', { ascending: false }).limit(3)
      setRecentRoutes(recent ?? [])
    }
    fetchData()
  }, [])

  const searchMapbox = async (query: string, type: 'origin' | 'dest') => {
    if (query.length < 3) { type === 'origin' ? setOriginSuggestions([]) : setDestSuggestions([]); return }
    const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?country=ES&proximity=-15.5,28.3&bbox=-18.5,27.5,-13.0,29.5&access_token=${MAPBOX_TOKEN}`)
    const data = await res.json()
    if (type === 'origin') { setOriginSuggestions(data.features || []); setShowOriginSuggestions(true) }
    else { setDestSuggestions(data.features || []); setShowDestSuggestions(true) }
  }

  const selectOrigin      = (s: Suggestion) => { setOriginAddress(s.place_name); setOriginCoords({ lat: s.center[1], lng: s.center[0] }); setShowOriginSuggestions(false) }
  const selectDestination = (s: Suggestion) => { setDestinationAddress(s.place_name); setDestinationCoords({ lat: s.center[1], lng: s.center[0] }); setShowDestSuggestions(false) }
  const toggleDay         = (v: number) => setSelectedDays(prev => prev.includes(v) ? prev.filter(d => d !== v) : [...prev, v])
  const togglePreference  = (v: string) => setSelectedPreferences(prev => prev.includes(v) ? prev.filter(p => p !== v) : [...prev, v])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (originAddress.trim())           params.set('origin', originAddress.trim())
    if (destinationAddress.trim())      params.set('destination', destinationAddress.trim())
    if (originCoords)                   { params.set('origin_lat', String(originCoords.lat)); params.set('origin_lng', String(originCoords.lng)) }
    if (destinationCoords)              { params.set('dest_lat', String(destinationCoords.lat)); params.set('dest_lng', String(destinationCoords.lng)) }
    if (departureTime)                  params.set('time', departureTime)
    if (selectedDays.length > 0)        params.set('days', selectedDays.join(','))
    if (selectedPreferences.length > 0) params.set('preferences', selectedPreferences.join(','))
    params.set('passengers', String(passengerCount))
    router.push(`/routes?${params.toString()}`)
  }

  const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"

  return (
    <div>

      {/* ── HERO ── */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h1 className="text-5xl font-bold mb-4 leading-tight">Comparte viaje<br className="hidden sm:block" /> en Canarias</h1>
          <p className="text-xl text-blue-200 mb-10">Ahorra dinero, reduce tráfico y cuida el medio ambiente.</p>

          {/* Formulario de búsqueda */}
          <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-5 text-left">
            <div className="grid md:grid-cols-3 gap-3 mb-3">

              {/* Origen */}
              <div className="flex flex-col gap-1 relative">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">📍 Origen</label>
                <input type="text" placeholder="Ej: Las Palmas..." value={originAddress} className={inputCls}
                  onChange={e => { setOriginAddress(e.target.value); setOriginCoords(null); searchMapbox(e.target.value, 'origin') }}
                  onFocus={() => originSuggestions.length > 0 && setShowOriginSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowOriginSuggestions(false), 200)} />
                {originCoords && <span className="absolute right-3 bottom-3 text-green-500 text-sm font-bold">✓</span>}
                {showOriginSuggestions && originSuggestions.length > 0 && (
                  <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-52 overflow-y-auto">
                    {originSuggestions.map((s, i) => (
                      <div key={i} onMouseDown={e => { e.preventDefault(); selectOrigin(s) }}
                        className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-800">{s.place_name}</div>
                    ))}
                  </div>
                )}
              </div>

              {/* Destino */}
              <div className="flex flex-col gap-1 relative">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">🏁 Destino</label>
                <input type="text" placeholder="Ej: Maspalomas..." value={destinationAddress} className={inputCls}
                  onChange={e => { setDestinationAddress(e.target.value); setDestinationCoords(null); searchMapbox(e.target.value, 'dest') }}
                  onFocus={() => destSuggestions.length > 0 && setShowDestSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowDestSuggestions(false), 200)} />
                {destinationCoords && <span className="absolute right-3 bottom-3 text-green-500 text-sm font-bold">✓</span>}
                {showDestSuggestions && destSuggestions.length > 0 && (
                  <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-52 overflow-y-auto">
                    {destSuggestions.map((s, i) => (
                      <div key={i} onMouseDown={e => { e.preventDefault(); selectDestination(s) }}
                        className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-800">{s.place_name}</div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hora */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">🕐 Hora de salida</label>
                <div className="flex gap-2">
                  <select
                    value={departureTime ? departureTime.split(':')[0] : ''}
                    onChange={e => {
                      const h = e.target.value
                      const m = departureTime ? departureTime.split(':')[1] ?? '00' : '00'
                      setDepartureTime(h ? `${h}:${m}` : '')
                    }}
                    className="flex-1 border border-gray-200 rounded-xl px-3 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">HH</option>
                    {Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0')).map(h => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                  <select
                    value={departureTime ? departureTime.split(':')[1] ?? '' : ''}
                    onChange={e => {
                      const h = departureTime ? departureTime.split(':')[0] ?? '00' : '00'
                      const m = e.target.value
                      setDepartureTime(m ? `${h}:${m}` : '')
                    }}
                    className="flex-1 border border-gray-200 rounded-xl px-3 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">MM</option>
                    {['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'].map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Días */}
            <div className="mb-3">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">📅 Días</label>
              <div className="flex gap-1.5 flex-wrap">
                {WEEK_DAYS.map(day => (
                  <button key={day.value} type="button" onClick={() => toggleDay(day.value)}
                    className={`w-9 h-9 rounded-full text-xs font-bold transition border ${selectedDays.includes(day.value) ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-400'}`}>
                    {day.label}
                  </button>
                ))}
                {selectedDays.length > 0 && <button type="button" onClick={() => setSelectedDays([])} className="text-xs text-gray-400 hover:text-gray-600 px-1">✕</button>}
              </div>
            </div>

            {/* Pasajeros */}
            <div className="mb-3">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">👥 Pasajeros</label>
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setPassengerCount(c => Math.max(1, c - 1))}
                  className="w-9 h-9 rounded-full border border-gray-200 bg-gray-50 text-gray-600 font-bold text-lg hover:border-blue-400 transition flex items-center justify-center">−</button>
                <span className="text-gray-800 font-semibold text-sm w-24 text-center">{passengerCount} {passengerCount === 1 ? 'pasajero' : 'pasajeros'}</span>
                <button type="button" onClick={() => setPassengerCount(c => Math.min(8, c + 1))}
                  className="w-9 h-9 rounded-full border border-gray-200 bg-gray-50 text-gray-600 font-bold text-lg hover:border-blue-400 transition flex items-center justify-center">+</button>
              </div>
            </div>

            {/* Preferencias */}
            <div className="mb-4">
              <button type="button" onClick={() => setShowPreferences(p => !p)}
                className="flex items-center gap-2 text-sm text-blue-600 font-semibold hover:text-blue-800 transition">
                <span>{showPreferences ? '▲' : '▼'}</span> Preferencias de viaje
                {selectedPreferences.length > 0 && <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{selectedPreferences.length}</span>}
              </button>
              {showPreferences && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {DRIVING_PREFERENCES.map(pref => (
                    <button key={pref.value} type="button" onClick={() => togglePreference(pref.value)}
                      className={`px-3 py-2 rounded-xl text-sm font-medium border transition ${selectedPreferences.includes(pref.value) ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-400'}`}>
                      {pref.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-base transition shadow-lg">
              🔍 Buscar rutas disponibles
            </button>
          </form>
        </div>
      </div>

      {/* ── CONTENIDO PRINCIPAL ── */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* Rutas recientes */}
        {recentRoutes.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">🛣️ Rutas recientes</h2>
              <Link href="/routes" className="text-sm text-blue-600 font-semibold hover:underline">Ver todas →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {recentRoutes.map(route => <RecentRouteCard key={route.id} route={route} />)}
            </div>
          </section>
        )}

        {/* Mapa */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">🗺️ Rutas activas en el mapa</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <div className="h-[400px] w-full relative">
              <RoutesMap routes={mapRoutes} />
            </div>
          </div>
        </section>

        {/* Aviso precios */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
          <span className="text-2xl shrink-0">⚠️</span>
          <div>
            <p className="text-gray-800 font-semibold text-sm leading-snug">
              Carpool Canarias es una plataforma de <span className="underline underline-offset-2">compartir gastos</span>, no de transporte remunerado.
            </p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">
              Recomendamos que el precio por plaza cubra únicamente los costes del viaje (combustible, peajes…) y no suponga un beneficio económico para el conductor/a.
            </p>
          </div>
        </div>

        {/* Beneficios */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">¿Por qué usar Carpool Canarias?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Ahorra dinero', desc: 'Comparte los gastos de combustible y peajes con otros pasajeros.' },
              { icon: '🌱', title: 'Cuida el planeta', desc: 'Reduce las emisiones de CO₂ compartiendo vehículo.' },
              { icon: '🤝', title: 'Conecta', desc: 'Conoce gente nueva y haz tu viaje más ameno.' },
            ].map(b => (
              <div key={b.title} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md hover:border-blue-200 transition">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}