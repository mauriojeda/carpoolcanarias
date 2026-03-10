import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-6">
        <Link href="/about" className="text-gray-400 hover:text-blue-600 text-sm transition">Acerca de nosotros</Link>
        <Link href="/seguridad" className="text-gray-400 hover:text-blue-600 text-sm transition">Viaja seguro/a</Link>
      </div>
    </footer>
  )
}