'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const supabase = createClient()

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [mode, setMode] = useState<'login' | 'reset'>('login')
  const [resetSent, setResetSent] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setErrorMsg('Credenciales incorrectas o usuario no verificado.')
      setLoading(false)
    } else {
      router.push('/')
      router.refresh()
    }
  }

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/update-password`,
    })

    setLoading(false)
    if (error) {
      setErrorMsg('No se pudo enviar el correo. Verifica el email introducido.')
    } else {
      setResetSent(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🚗</div>
          <h1 className="text-2xl font-bold text-blue-600">
            {mode === 'login' ? 'Iniciar sesión' : 'Recuperar contraseña'}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {mode === 'login'
              ? 'Bienvenido/a de vuelta a Carpool Canarias'
              : 'Te enviaremos un enlace para restablecer tu contraseña'}
          </p>
        </div>

        {/* ── FORMULARIO LOGIN ── */}
        {mode === 'login' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                <button
                  type="button"
                  onClick={() => { setMode('reset'); setErrorMsg('') }}
                  className="text-xs text-blue-600 hover:underline font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-base hover:bg-blue-700 disabled:bg-blue-300 transition-colors shadow-lg mt-2"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>

            {errorMsg && (
              <p className="text-sm text-center text-red-500 bg-red-50 p-3 rounded-lg">{errorMsg}</p>
            )}

            <p className="text-center text-gray-600 text-sm pt-2">
              ¿No tienes cuenta?{' '}
              <Link href="/auth/register" className="text-blue-600 font-semibold hover:underline">
                Regístrate
              </Link>
            </p>
          </div>
        )}

        {/* ── FORMULARIO RECUPERAR CONTRASEÑA ── */}
        {mode === 'reset' && !resetSent && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleReset}
              disabled={loading}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-base hover:bg-blue-700 disabled:bg-blue-300 transition-colors shadow-lg"
            >
              {loading ? 'Enviando...' : 'Enviar enlace de recuperación'}
            </button>

            {errorMsg && (
              <p className="text-sm text-center text-red-500 bg-red-50 p-3 rounded-lg">{errorMsg}</p>
            )}

            <button
              type="button"
              onClick={() => { setMode('login'); setErrorMsg('') }}
              className="w-full text-sm text-gray-500 hover:text-gray-700 text-center pt-1"
            >
              ← Volver al inicio de sesión
            </button>
          </div>
        )}

        {/* ── CONFIRMACIÓN ENVIADO ── */}
        {mode === 'reset' && resetSent && (
          <div className="text-center space-y-4">
            <div className="text-5xl">📬</div>
            <p className="text-green-700 bg-green-50 p-4 rounded-lg text-sm font-medium">
              Hemos enviado un enlace a <strong>{email}</strong>. Revisa tu bandeja de entrada y sigue las instrucciones.
            </p>
            <button
              type="button"
              onClick={() => { setMode('login'); setResetSent(false); setErrorMsg('') }}
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              ← Volver al inicio de sesión
            </button>
          </div>
        )}

      </div>
    </div>
  )
}