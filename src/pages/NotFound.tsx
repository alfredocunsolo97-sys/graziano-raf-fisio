import { Link } from 'wouter'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pagina Non Trovata</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          La pagina che stai cercando non esiste. Torna alla home per continuare la navigazione.
        </p>
        <Link href="/">
          <a className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold">
            Torna alla Home
          </a>
        </Link>
      </div>
    </div>
  )
}
