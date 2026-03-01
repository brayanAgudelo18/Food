export default function Footer() {
  return (
    <footer id="contacto" className="bg-stone-900 text-stone-400 py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="sm:col-span-2">
            <a href="#" className="font-display font-bold text-xl sm:text-2xl text-white">
              Rápido<span className="text-[#e63946]"> & </span>Rico
            </a>
            <p className="mt-3 sm:mt-4 max-w-sm text-sm leading-relaxed">
              Comidas rápidas con sabor de verdad. Delivery y para llevar en tu ciudad.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#menu" className="hover:text-white transition-colors text-sm sm:text-base">Menú</a></li>
              <li><a href="#combos" className="hover:text-white transition-colors text-sm sm:text-base">Combos</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors text-sm sm:text-base">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors text-sm sm:text-base">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Contacto
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>Av. Siempre Viva 123</li>
              <li><a href="tel:+5491112345678" className="hover:text-white transition-colors">(011) 1234-5678</a></li>
              <li><a href="mailto:hola@rapidoyrico.com" className="hover:text-white transition-colors">hola@rapidoyrico.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-stone-800 text-center text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Rápido & Rico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
