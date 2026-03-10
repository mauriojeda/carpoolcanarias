'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import RoutesMap from '@/components/map-view'

interface Suggestion { place_name: string; center: [number, number] }

const supabase = createClient()

async function fetchAllRoutes() {
  const { data: routes, error } = await supabase
    .from('routes')
    .select('id, origin_name, destination_name, departure_time, days_of_week, seats_available, price_per_seat, active, created_at, driver_id')
    .eq('active', true).order('departure_time', { ascending: true })
  if (error || !routes || routes.length === 0) return []
  const driverIds = [...new Set(routes.map((r: any) => r.driver_id))]
  const { data: profiles } = await supabase.from('profiles').select('id, full_name, avatar_url').in('id', driverIds)
  const routesWithGeo = await Promise.all(routes.map(async (route: any) => {
    const { data: geoData } = await supabase.rpc('get_route_geojson', { route_id: route.id })
    return { ...route, profiles: (profiles ?? []).find((p: any) => p.id === route.driver_id) ?? null, origin_geo: geoData?.origin_geo ?? null, destination_geo: geoData?.destination_geo ?? null, route_line_geo: geoData?.route_line_geo ?? null }
  }))
  return routesWithGeo
}

const WEEK_DAYS = [
  { value: 1, label: 'L' }, { value: 2, label: 'M' }, { value: 3, label: 'X' },
  { value: 4, label: 'J' }, { value: 5, label: 'V' }, { value: 6, label: 'S' }, { value: 7, label: 'D' },
]

export default function RoutesListPage() {
  const [routes, setRoutes] = useState<any[]>([])
  const [filteredRoutes, setFilteredRoutes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchOriginName, setSearchOriginName] = useState('')
  const [searchDestName, setSearchDestName] = useState('')
  const [searchTime, setSearchTime] = useState('')
  const [originSuggestions, setOriginSuggestions] = useState<Suggestion[]>([])
  const [destSuggestions, setDestSuggestions] = useState<Suggestion[]>([])
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false)
  const [showDestSuggestions, setShowDestSuggestions] = useState(false)
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  useEffect(() => { fetchAllRoutes().then(data => { setRoutes(data); setFilteredRoutes(data); setLoading(false) }) }, [])
  useEffect(() => { filterRoutes() }, [routes, searchOriginName, searchDestName, searchTime])

  const searchMapbox = async (query: string, type: 'origin' | 'dest') => {
    if (query.length < 3) { type === 'origin' ? setOriginSuggestions([]) : setDestSuggestions([]); return }
    const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?country=ES&proximity=-15.5,28.3&bbox=-18.5,27.5,-13.0,29.5&access_token=${MAPBOX_TOKEN}`)
    const data = await res.json()
    if (type === 'origin') { setOriginSuggestions(data.features || []); setShowOriginSuggestions(true) }
    else { setDestSuggestions(data.features || []); setShowDestSuggestions(true) }
  }

  const clearSearch = () => {
    setSearchOriginName(''); setSearchDestName(''); setSearchTime('')
    setOriginSuggestions([]); setDestSuggestions([])
    setShowOriginSuggestions(false); setShowDestSuggestions(false)
    setFilteredRoutes(routes)
  }

  function timeToMinutes(t: string) { const [h, m] = t.split(':').map(Number); return h * 60 + m }

  function filterRoutes() {
    if (!searchOriginName && !searchDestName && !searchTime) { setFilteredRoutes(routes); return }
    setFilteredRoutes(routes.filter(r => {
      const o = !searchOriginName || r.origin_name?.toLowerCase().includes(searchOriginName.toLowerCase())
      const d = !searchDestName   || r.destination_name?.toLowerCase().includes(searchDestName.toLowerCase())
      const t = !searchTime       || Math.abs(timeToMinutes(searchTime) - timeToMinutes(r.departure_time)) <= 30
      return o && d && t
    }))
  }

  const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">

      {/* Cabecera */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Rutas en Canarias</h1>
          <p className="text-gray-500 mt-1">Encuentra tu próximo viaje compartido</p>
        </div>
      </div>

      {/* Buscador */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">🔍 Buscar rutas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Origen */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">📍 Desde</label>
            <input type="text" value={searchOriginName} placeholder="Ej: Las Palmas..." className={inputCls}
              onChange={e => { setSearchOriginName(e.target.value); searchMapbox(e.target.value, 'origin') }}
              onFocus={() => originSuggestions.length > 0 && setShowOriginSuggestions(true)}
              onBlur={() => setTimeout(() => setShowOriginSuggestions(false), 200)} />
            {showOriginSuggestions && originSuggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
                {originSuggestions.map((s, i) => (
                  <div key={i} onMouseDown={e => { e.preventDefault(); setSearchOriginName(s.place_name); setShowOriginSuggestions(false) }}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-800">{s.place_name}</div>
                ))}
              </div>
            )}
          </div>

          {/* Destino */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">🎯 Hacia</label>
            <input type="text" value={searchDestName} placeholder="Ej: Agaete..." className={inputCls}
              onChange={e => { setSearchDestName(e.target.value); searchMapbox(e.target.value, 'dest') }}
              onFocus={() => destSuggestions.length > 0 && setShowDestSuggestions(true)}
              onBlur={() => setTimeout(() => setShowDestSuggestions(false), 200)} />
            {showDestSuggestions && destSuggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
                {destSuggestions.map((s, i) => (
                  <div key={i} onMouseDown={e => { e.preventDefault(); setSearchDestName(s.place_name); setShowDestSuggestions(false) }}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 text-sm text-gray-800">{s.place_name}</div>
                ))}
              </div>
            )}
          </div>

          {/* Hora */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">🕒 Hora (±30 min)</label>
            <input type="time" value={searchTime} onChange={e => setSearchTime(e.target.value)} className={inputCls} />
          </div>
        </div>

        {(searchOriginName || searchDestName || searchTime) && (
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-gray-500"><span className="font-bold text-gray-800">{filteredRoutes.length}</span> {filteredRoutes.length === 1 ? 'ruta encontrada' : 'rutas encontradas'}</p>
            <button onClick={clearSearch} className="text-sm text-blue-600 hover:text-blue-800 font-medium transition">✕ Limpiar</button>
          </div>
        )}
      </div>

      {/* Mapa */}
      {!loading && filteredRoutes.length > 0 && (
        <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200 overflow-hidden">
          <div className="h-[400px] w-full relative">
            <RoutesMap routes={filteredRoutes} />
          </div>
        </div>
      )}

      {/* Lista */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            <p className="text-gray-400 text-sm">Cargando rutas...</p>
          </div>
        </div>
      ) : filteredRoutes.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl text-center py-16 shadow-sm">
          <p className="text-4xl mb-3">🗺️</p>
          <p className="text-gray-700 font-semibold">{(searchOriginName || searchDestName || searchTime) ? 'No se encontraron rutas con esos filtros' : 'No hay rutas publicadas. ¡Sé el primero!'}</p>
          {(searchOriginName || searchDestName || searchTime) && (
            <button onClick={clearSearch} className="mt-3 text-blue-600 hover:text-blue-800 text-sm underline transition">Ver todas las rutas</button>
          )}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredRoutes.map(route => {
            const days = [...(route.days_of_week ?? [])].sort((a: number, b: number) => a - b)
            return (
              <div key={route.id} className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-blue-200 transition-all">

                {/* Conductor */}
                <div className="flex items-center gap-3 mb-4">
                  {route.profiles?.avatar_url
                    ? <img src={route.profiles.avatar_url} alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100" />
                    : <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">{route.profiles?.full_name?.charAt(0) ?? '?'}</div>
                  }
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{route.profiles?.full_name ?? 'Conductor'}</p>
                    <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">Conductor</p>
                  </div>
                </div>

                {/* Ruta */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <div><p className="text-[10px] text-gray-400 font-bold uppercase">Origen</p><p className="text-gray-800 font-semibold text-sm">{route.origin_name}</p></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🏁</span>
                    <div><p className="text-[10px] text-gray-400 font-bold uppercase">Destino</p><p className="text-gray-800 font-semibold text-sm">{route.destination_name}</p></div>
                  </div>
                </div>

                {/* Días */}
                {days.length > 0 && (
                  <div className="flex gap-1 mb-3">
                    {WEEK_DAYS.map(d => (
                      <span key={d.value} className={`w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center ${days.includes(d.value) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>{d.label}</span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-2xl font-black text-gray-800">{route.departure_time?.substring(0, 5)}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Salida</p>
                  </div>
                  <div className="text-right">
                    {route.price_per_seat != null
                      ? <><p className="text-xl font-bold text-blue-600">{route.price_per_seat}€</p><p className="text-[10px] text-gray-400 font-bold uppercase">Por plaza</p></>
                      : <><p className="text-xl font-bold text-green-600">Gratis</p><p className="text-[10px] text-gray-400 font-bold uppercase">Sin coste</p></>
                    }
                  </div>
                </div>

                <Link href={`/routes/${route.id}`}
                  className="mt-4 block w-full text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition shadow-sm">
                  Ver detalles →
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}