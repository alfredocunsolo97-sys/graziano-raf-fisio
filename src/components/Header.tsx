import { Link } from 'wouter'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-lg md:text-xl font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer">
            Dr. Graziano Raffaele
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/">
            <span className="text-sm lg:text-base text-gray-900 hover:text-primary transition-colors font-medium cursor-pointer">Home</span>
          </Link>
          <Link href="/chi-sono">
            <span className="text-sm lg:text-base text-gray-900 hover:text-primary transition-colors font-medium cursor-pointer">Chi Sono</span>
          </Link>
          <a href="/#contatti" className="text-sm lg:text-base text-gray-900 hover:text-primary transition-colors font-medium">Contatti</a>
          <a 
            href="tel:+393398442169" 
            className="bg-primary text-white px-4 lg:px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium text-sm lg:text-base"
          >
            Chiama Ora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <Link href="/">
              <span 
                className="text-gray-900 hover:text-primary transition-colors font-medium py-2 block cursor-pointer text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </span>
            </Link>
            <Link href="/chi-sono">
              <span 
                className="text-gray-900 hover:text-primary transition-colors font-medium py-2 block cursor-pointer text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chi Sono
              </span>
            </Link>
            <a 
              href="/#contatti" 
              className="text-gray-900 hover:text-primary transition-colors font-medium py-2 text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contatti
            </a>
            <a 
              href="tel:+393398442169" 
              className="bg-primary text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity font-medium text-center text-base"
            >
              Chiama Ora
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
