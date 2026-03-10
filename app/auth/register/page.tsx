'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const supabase = createClient()

// ─── Validación de contraseña ─────────────────────────────────────────────
interface PasswordCheck {
  label: string
  pass: boolean
}

function getPasswordChecks(pwd: string): PasswordCheck[] {
  return [
    { label: 'Mínimo 8 caracteres',      pass: pwd.length >= 8 },
    { label: 'Una letra mayúscula (A-Z)', pass: /[A-Z]/.test(pwd) },
    { label: 'Una letra minúscula (a-z)', pass: /[a-z]/.test(pwd) },
    { label: 'Un número (0-9)',           pass: /[0-9]/.test(pwd) },
    { label: 'Un símbolo (!@#$%...)',     pass: /[^A-Za-z0-9]/.test(pwd) },
  ]
}

function getStrength(checks: PasswordCheck[]): { score: number; label: string; color: string; bg: string } {
  const passed = checks.filter(c => c.pass).length
  if (passed <= 1) return { score: passed, label: 'Muy débil',  color: 'bg-red-500',    bg: 'text-red-600' }
  if (passed === 2) return { score: passed, label: 'Débil',     color: 'bg-orange-400', bg: 'text-orange-500' }
  if (passed === 3) return { score: passed, label: 'Regular',   color: 'bg-yellow-400', bg: 'text-yellow-600' }
  if (passed === 4) return { score: passed, label: 'Buena',     color: 'bg-blue-500',   bg: 'text-blue-600' }
  return               { score: passed, label: 'Excelente', color: 'bg-green-500',  bg: 'text-green-600' }
}

// ─── Componente indicador ─────────────────────────────────────────────────
function PasswordStrengthIndicator({ password }: { password: string }) {
  if (!password) return null
  const checks  = getPasswordChecks(password)
  const strength = getStrength(checks)
  const total   = checks.length

  return (
    <div className="mt-2 space-y-2">
      {/* Barra de fortaleza */}
      <div className="flex items-center gap-2">
        <div className="flex gap-1 flex-1">
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              i < strength.score ? strength.color : 'bg-gray-200'
            }`} />
          ))}
        </div>
        <span className={`text-xs font-semibold shrink-0 ${strength.bg}`}>{strength.label}</span>
      </div>

      {/* Checklist */}
      <ul className="space-y-1">
        {checks.map(check => (
          <li key={check.label} className={`flex items-center gap-2 text-xs transition-colors ${
            check.pass ? 'text-green-600' : 'text-gray-400'
          }`}>
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-all ${
              check.pass ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
            }`}>
              {check.pass ? '✓' : '·'}
            </span>
            {check.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Página de registro ───────────────────────────────────────────────────
export default function RegisterPage() {
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setFullName]   = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [loading, setLoading]     = useState(false)
  const [message, setMessage]     = useState<{ type: 'error' | 'success'; text: string } | null>(null)
  const router = useRouter()

  const passwordChecks  = getPasswordChecks(password)
  const passwordStrength = getStrength(passwordChecks)
  const passwordValid   = passwordChecks.every(c => c.pass)

  const calculateAge = (birthDate: string): number => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age--
    return age
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    if (!fullName.trim()) {
      setMessage({ type: 'error', text: 'Por favor introduce tu nombre completo' })
      setLoading(false); return
    }
    if (!birthdate) {
      setMessage({ type: 'error', text: 'Por favor introduce tu fecha de nacimiento' })
      setLoading(false); return
    }
    if (calculateAge(birthdate) < 18) {
      setMessage({ type: 'error', text: 'Debes tener al menos 18 años para registrarte' })
      setLoading(false); return
    }
    if (!passwordValid) {
      setMessage({ type: 'error', text: 'La contraseña no cumple los requisitos de seguridad' })
      setLoading(false); return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setMessage({ type: 'error', text: error.message })
      setLoading(false)
      return
    }

    // Crear perfil manualmente
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      await supabase.from('profiles').upsert({ id: session.user.id, full_name: fullName })
    }

    setMessage({
      type: 'success',
      text: '¡Cuenta creada! Revisa tu email para confirmarla.',
    })
    setLoading(false)
    setTimeout(() => router.push('/auth/login'), 3000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🚗</div>
          <h1 className="text-3xl font-bold text-blue-600">Únete a Carpool</h1>
          <p className="text-gray-500 mt-2">Empieza a compartir tus rutas por Canarias</p>
        </div>

        <div className="space-y-4">

          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
            <input type="text" placeholder="Ej: Juan Pérez"
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={fullName} onChange={e => setFullName(e.target.value)} required
            />
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de nacimiento</label>
            <input type="date"
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={birthdate} onChange={e => setBirthdate(e.target.value)}
              max={new Date().toISOString().split('T')[0]} required
            />
            <p className="text-xs text-gray-500 mt-1">Debes tener al menos 18 años</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input type="email" placeholder="tu@email.com"
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={email} onChange={e => setEmail(e.target.value)} required
            />
          </div>

          {/* Contraseña con indicador */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`w-full p-3 pr-12 border rounded-lg text-black focus:ring-2 outline-none transition-all ${
                  password && !passwordValid
                    ? 'border-orange-300 focus:ring-orange-400'
                    : password && passwordValid
                    ? 'border-green-400 focus:ring-green-400'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                value={password} onChange={e => setPassword(e.target.value)} required
              />
              {/* Toggle mostrar/ocultar */}
              <button type="button" onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition text-lg select-none">
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            {/* Indicador de fortaleza */}
            <PasswordStrengthIndicator password={password} />
          </div>

          {/* Botón */}
          <button
            onClick={handleRegister}
            disabled={loading || !passwordValid}
            className={`w-full p-3 rounded-lg font-bold text-lg transition-all shadow-lg mt-2 ${
              passwordValid
                ? 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {loading ? 'Creando cuenta...' : 'Registrarme'}
          </button>
        </div>

        {message && (
          <div className={`mt-4 p-3 rounded-lg text-sm text-center ${
            message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {message.text}
          </div>
        )}

        <div className="mt-6 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <Link href="/auth/login" className="text-blue-600 font-semibold hover:underline">
            Inicia sesión aquí
          </Link>
        </div>
      </div>
    </div>
  )
}