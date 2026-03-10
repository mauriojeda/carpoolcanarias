'use client'

import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Suggestion {
  place_name: string
  center: [number, number]
}

export default function CreateRoutePage() {
  const router = useRouter()
  const supabase = createClient()
  
  // Estados del formulario
  const [originName, setOriginName] = useState('')
  const [destinationName, setDestinationName] = useState('')
  const [originCoords, setOriginCoords] = useState<[number, number] | null>(null)
  const [destCoords, setDestCoords] = useState<[number, number] | null>(null)
  const [departureTime, setDepartureTime] = useState('')
  const [daysOfWeek, setDaysOfWeek] = useState<number[]>([])
  const [seatsAvailable, setSeatsAvailable] = useState(3)
  const [pricePerSeat, setPricePerSeat] = useState('')
  const [description, setDescription] = useState('')
  const [maxDetourMinutes, setMaxDetourMinutes] = useState(10)
  const [loading, setLoading] = useState(false)

  // Estados para autocompletado
  const [originSuggestions, setOriginSuggestions] = useState<Suggestion[]>([])
  const [destSuggestions, setDestSuggestions] = useState<Suggestion[]>([])
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false)
  const [showDestSuggestions, setShowDestSuggestions] = useState(false)

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

  // Opciones de tiempo de desvío
  const DETOUR_OPTIONS = [
    { value: 5, label: '5 minutos' },
    { value: 10, label: '10 minutos' },
    { value: 15, label: '15 minutos' },
    { value: 20, label: '20 minutos' },
    { value: 30, label: '30 minutos' },
    { value: 45, label: '45 minutos' },
    { value: 60, label: '1 hora' },
  ]

  // Buscar sugerencias de origen
  const searchOrigin = async (query: string) => {
    if (query.length < 3) {
      setOriginSuggestions([])
      return
    }

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?` +
        `country=ES&` +
        `proximity=-15.5,28.3&` +
        `bbox=-18.5,27.5,-13.0,29.5&` +
        `access_token=${MAPBOX_TOKEN}`
      )
      const data = await response.json()
      setOriginSuggestions(data.features || [])
      setShowOriginSuggestions(true)
    } catch (error) {
      console.error('Error buscando origen:', error)
    }
  }

  // Buscar sugerencias de destino
  const searchDestination = async (query: string) => {
    if (query.length < 3) {
      setDestSuggestions([])
      return
    }

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?` +
        `country=ES&` +
        `proximity=-15.5,28.3&` +
        `bbox=-18.5,27.5,-13.0,29.5&` +
        `access_token=${MAPBOX_TOKEN}`
      )
      const data = await response.json()
      setDestSuggestions(data.features || [])
      setShowDestSuggestions(true)
    } catch (error) {
      console.error('Error buscando destino:', error)
    }
  }

  // Seleccionar origen
  const selectOrigin = (suggestion: Suggestion) => {
    setOriginName(suggestion.place_name)
    setOriginCoords(suggestion.center)
    setShowOriginSuggestions(false)
  }

  // Seleccionar destino
  const selectDestination = (suggestion: Suggestion) => {
    setDestinationName(suggestion.place_name)
    setDestCoords(suggestion.center)
    setShowDestSuggestions(false)
  }

  // Toggle día de la semana
  const toggleDay = (day: number) => {
    if (daysOfWeek.includes(day)) {
      setDaysOfWeek(daysOfWeek.filter(d => d !== day))
    } else {
      setDaysOfWeek([...daysOfWeek, day].sort())
    }
  }

  // Crear ruta
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!originCoords || !destCoords) {
      alert('Por favor selecciona origen y destino de las sugerencias')
      return
    }

    if (daysOfWeek.length === 0) {
      alert('Selecciona al menos un día de la semana')
      return
    }

    setLoading(true)

    try {
      // 1. Obtener usuario actual
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        alert('Debes iniciar sesión para crear una ruta')
        router.push('/auth/login')
        return
      }

      // 2. Obtener la ruta por carretera de Mapbox
      const directionsResponse = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/` +
        `${originCoords[0]},${originCoords[1]};${destCoords[0]},${destCoords[1]}?` +
        `geometries=geojson&access_token=${MAPBOX_TOKEN}`
      )
      const directionsData = await directionsResponse.json()

      if (!directionsData.routes || directionsData.routes.length === 0) {
        alert('No se pudo calcular la ruta por carretera')
        setLoading(false)
        return
      }

      const routeLine = directionsData.routes[0].geometry

      // 3. Usar RPC para insertar con geometrías correctas
      const { data: insertedRoute, error } = await supabase.rpc('create_route', {
        p_driver_id: user.id,
        p_origin_name: originName,
        p_origin_lng: originCoords[0],
        p_origin_lat: originCoords[1],
        p_destination_name: destinationName,
        p_destination_lng: destCoords[0],
        p_destination_lat: destCoords[1],
        p_departure_time: departureTime,
        p_days_of_week: daysOfWeek,
        p_seats_available: seatsAvailable,
        p_price_per_seat: pricePerSeat ? parseFloat(pricePerSeat) : null,
        p_description: description || null,
        p_route_line_geojson: routeLine,
        p_max_detour_minutes: maxDetourMinutes
      })

      if (error) throw error

      alert('¡Ruta creada exitosamente!')
      router.push('/dashboard')
      router.refresh()

    } catch (error: any) {
      console.error('Error al crear ruta:', error)
      alert('Error al crear la ruta: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="text-2xl font-bold text-gray-900">
            🚗 Carpool Canarias
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          🚗 Publicar Nueva Ruta
        </h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          
          {/* Origen */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📍 Punto de salida
            </label>
            <input
              type="text"
              value={originName}
              onChange={(e) => {
                setOriginName(e.target.value)
                searchOrigin(e.target.value)
              }}
              onFocus={() => setShowOriginSuggestions(true)}
              placeholder="Ej: Las Palmas de Gran Canaria, Calle Triana"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            {showOriginSuggestions && originSuggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {originSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => selectOrigin(suggestion)}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0"
                  >
                    <p className="text-sm text-gray-900">{suggestion.place_name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Destino */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              🎯 Punto de llegada
            </label>
            <input
              type="text"
              value={destinationName}
              onChange={(e) => {
                setDestinationName(e.target.value)
                searchDestination(e.target.value)
              }}
              onFocus={() => setShowDestSuggestions(true)}
              placeholder="Ej: Agaete, Plaza de la Constitución"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            {showDestSuggestions && destSuggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {destSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => selectDestination(suggestion)}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b last:border-b-0"
                  >
                    <p className="text-sm text-gray-900">{suggestion.place_name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hora de salida */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              🕒 Hora de salida
            </label>
            <input
              type="time"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Días de la semana */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              📅 Días de la semana
            </label>
            <div className="flex flex-wrap gap-2">
              {DAYS.map((day, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => toggleDay(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    daysOfWeek.includes(index)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Tiempo máximo de desvío */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ⏱️ Tiempo máximo de desvío
            </label>
            <p className="text-xs text-gray-500 mb-3">
              ¿Cuánto tiempo extra estás dispuesto a desviarte para recoger o dejar pasajeros?
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {DETOUR_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setMaxDetourMinutes(option.value)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors text-sm ${
                    maxDetourMinutes === option.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

    {/* Asientos disponibles */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        💺 Asientos disponibles (Máximo 8)
      </label>
      <input
        type="number"
        min="1"
        max="8" // Límite en el atributo HTML
        value={seatsAvailable}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          // Validación lógica para asegurar el rango 1-8
          if (isNaN(val)) setSeatsAvailable(1);
          else if (val > 8) setSeatsAvailable(8);
          else if (val < 1) setSeatsAvailable(1);
          else setSeatsAvailable(val);
        }}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      />
      <p className="mt-1 text-xs text-gray-500">
        Por motivos de seguridad y normativa, el máximo permitido son 8 pasajeros.
      </p>
    </div>

          {/* Precio por asiento (opcional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              💰 Precio por asiento (opcional)
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.01"
                min="0"
                value={pricePerSeat}
                onChange={(e) => setPricePerSeat(e.target.value)}
                placeholder="0.00"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <span className="absolute right-4 top-3 text-gray-500">€</span>
            </div>
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📝 Descripción (opcional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ej: Salgo desde el parking de mi trabajo, paso por la autopista..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creando ruta...' : 'Publicar Ruta'}
          </button>
        </form>
      </main>
    </div>
  )
}