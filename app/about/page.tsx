'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

      {/* Cabecera */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Sobre nosotros</h1>
        <p className="text-gray-500 mt-1">La historia detrás de Carpool Canarias</p>
      </div>

      {/* Intro */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Menos colas, más vida.</h2>
        <p className="text-gray-600 leading-relaxed">
          En Canarias, sabemos lo que significa vivir "atrapados". El transporte público no siempre llega a tiempo, y nuestras carreteras se han convertido en el escenario diario de un estrés que nadie merece.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Nacimos de una observación simple: mientras miles de coches avanzan lentamente en la autopista con un solo ocupante, otros tantos vecinos buscan la manera de llegar a su destino de forma eficiente.
        </p>
        <div className="border-l-4 border-blue-600 pl-4 py-1">
          <p className="text-blue-800 font-semibold italic text-lg">No nos faltan carreteras, nos sobran <span className="underline">asientos vacíos</span>.</p>
        </div>
      </div>

      {/* Por qué lo hacemos */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-5">¿Por qué lo hacemos?</h2>
        <p className="text-gray-600 leading-relaxed mb-5">
          Nuestra plataforma no es solo una web de viajes compartidos; es nuestra respuesta colectiva a los retos de las Islas:
        </p>
        <div className="divide-y divide-gray-100">
          {[
            { icon: '😮‍💨', title: 'Adiós al estrés',             text: 'Queremos que tu trayecto al trabajo o a la universidad deje de ser una batalla contra el reloj y se convierta en un espacio para conectar.' },
            { icon: '🌿',   title: 'Respeto por nuestro paraíso', text: 'Reducir el número de vehículos en circulación es la forma más directa de bajar las emisiones de CO₂ y proteger el aire que respiramos en este archipiélago único.' },
            { icon: '💶',   title: 'Economía real',               text: 'Compartir gastos de combustible y mantenimiento no es solo inteligente, es un alivio necesario para el bolsillo en los tiempos que corren.' },
            { icon: '🤝',   title: 'Comunidad canaria',           text: 'Fomentamos la confianza entre vecinos. Hoy compartes coche, mañana compartes una buena charla.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
              <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cómo funcionamos */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-5">¿Cómo funcionamos?</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Ponemos la tecnología al servicio de las personas para que organizar tu viaje sea tan sencillo como dar un salto entre islas:
        </p>
        <div className="space-y-6">
          {[
            { n: '1', title: 'Publica o busca', text: 'Tanto si conduces como si buscas plaza, crear o encontrar una ruta lleva menos de dos minutos.' },
            { n: '2', title: 'Conecta',         text: 'Revisa perfiles y preferencias de viaje. Elige con quién quieres compartir trayecto.' },
            { n: '3', title: 'Comparte',        text: 'Ahorra dinero, reduce el tráfico y llega a tu destino con una sonrisa.' },
          ].map(step => (
            <div key={step.n} className="flex items-start gap-4">
              <span className="text-5xl font-black text-blue-100 leading-none shrink-0 select-none">{step.n}</span>
              <div className="pt-1">
                <p className="font-bold text-gray-800 mb-1">{step.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cita de cierre */}
      <div className="bg-blue-900 rounded-2xl p-6 text-white">
        <p className="italic text-lg leading-relaxed mb-3">
          "No estamos diseñando una app de transporte, estamos rediseñando la movilidad de nuestra tierra para que sea más humana, sostenible y justa."
        </p>
        <p className="text-blue-300 text-sm font-medium">— El equipo de Carpool Canarias</p>
      </div>

      {/* CTA */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center space-y-4">
        <p className="text-gray-700 font-semibold text-lg">¿Listo para unirte al cambio?</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/auth/register" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition text-sm shadow-sm">
            Crear cuenta gratis
          </Link>
          <Link href="/routes" className="bg-white hover:bg-gray-50 text-blue-600 font-bold px-6 py-3 rounded-xl border border-blue-200 transition text-sm">
            Buscar rutas
          </Link>
        </div>
      </div>

    </div>
  )
}