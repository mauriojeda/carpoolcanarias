'use client'

import Link from 'next/link'

export default function Seguridad() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            Seguridad y Convivencia
          </h1>
          <p className="text-xl text-gray-600">
            Viaja con la tranquilidad de estar en una comunidad basada en la confianza.
          </p>
        </div>

        {/* Sección: Antes de salir */}
        <section className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <span className="text-3xl mr-3">🛡️</span>
            <h2 className="text-2xl font-bold text-gray-800">Antes de salir</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-2xl shrink-0">⭐</span>
              <p className="text-gray-600"><strong>Verifica los perfiles:</strong> Lee reseñas y valoraciones. La reputación es nuestra mejor herramienta.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl shrink-0">💬</span>
              <p className="text-gray-600"><strong>Mensajería interna:</strong> Acuerda detalles por la plataforma antes de compartir tu teléfono personal.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🚗</span>
              <p className="text-gray-600"><strong>Reglas claras:</strong> Confirma si se puede fumar, llevar mascotas o música antes de reservar.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🕐</span>
              <p className="text-gray-600"><strong>Comparte tu ruta:</strong> Avisa a un amigo o familiar sobre tu trayecto y con quién viajas.</p>
            </div>
          </div>
        </section>

        {/* Sección: Durante el trayecto */}
        <section className="bg-blue-900 text-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">🚘</span> Durante el trayecto: Respeto y Civismo
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-blue-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 shrink-0 text-sm font-bold">1</span>
              <p><strong>Puntualidad canaria:</strong> El tiempo es oro. Intenta llegar 5 minutos antes al punto de encuentro.</p>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 shrink-0 text-sm font-bold">2</span>
              <p><strong>Estado del vehículo:</strong> Coches limpios y con el mantenimiento al día para un viaje seguro.</p>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 shrink-0 text-sm font-bold">3</span>
              <p><strong>Conducción responsable:</strong> Respeto total a las normas de tráfico. Sin distracciones.</p>
            </li>
          </ul>
        </section>

        {/* Sección: Tu intuición */}
        <section className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-8 mb-8">
          <div className="flex items-center mb-4 text-red-700">
            <span className="text-3xl mr-3">⚠️</span>
            <h2 className="text-2xl font-bold">Tu intuición es importante</h2>
          </div>
          <p className="text-red-900 mb-4">
            Tienes pleno derecho a decidir no realizar el viaje si al llegar algo no te convence. Tu seguridad es lo primero.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200">
            Reportar incidencia
          </button>
        </section>

        {/* Footer Nota */}
        <footer className="text-center text-gray-500 italic text-sm">
          <p>Nuestra plataforma es un punto de encuentro para particulares. Fomentamos la responsabilidad y el espíritu de colaboración que define a nuestra gente en Canarias.</p>
        </footer>
      </div>
    </div>
  )
}