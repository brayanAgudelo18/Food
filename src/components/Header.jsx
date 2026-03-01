import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Header({ onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()

  const navLinks = [
    { href: '#menu', label: 'Menú' },
    { href: '#combos', label: 'Combos' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm safe-area-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <a href="#" className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-[#1d3557] tracking-tight">
            Rápido<span className="text-[#e63946]"> & </span>Rico
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-[#e63946] font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={onOpenCart}
              className="relative p-2.5 sm:p-3 rounded-full hover:bg-stone-100 text-stone-600 hover:text-[#e63946] transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={`Abrir carrito${totalItems > 0 ? `, ${totalItems} productos` : ''}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 sm:top-1 sm:right-1 min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded-full bg-[#e63946] text-white text-xs font-bold">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
            <a
              href="#pedido"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-[#e63946] text-white font-semibold rounded-full hover:bg-[#c1121f] transition-colors text-sm touch-manipulation"
            >
              Ordenar ahora
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-xl text-stone-600 hover:bg-stone-100 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200 animate-slide-up">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-stone-600 hover:text-[#e63946] font-medium py-3 px-2 rounded-lg hover:bg-stone-50 transition-colors touch-manipulation"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => { setMenuOpen(false); onOpenCart(); }}
                className="text-left py-3 px-2 rounded-lg bg-[#e63946] text-white font-semibold mt-2 touch-manipulation"
              >
                Ver carrito {totalItems > 0 && `(${totalItems})`}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
