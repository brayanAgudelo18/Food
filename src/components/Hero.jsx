export default function Hero({ onOpenCart }) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-stone-50 via-orange-50/30 to-amber-50/50 pt-[env(safe-area-inset-top)]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e63946\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="inline-block px-3 py-1.5 sm:px-4 rounded-full bg-[#e63946]/10 text-[#e63946] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
              Delivery & Para llevar
            </p>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1d3557] leading-[1.15] tracking-tight">
              Comida rápida que
              <span className="text-[#e63946]"> sí sabe bien</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-stone-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Hamburguesas, papas, alitas y más. Hecho fresco, entregado rápido. Pedí en línea y lo tenés en minutos.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-[#e63946] text-white font-bold rounded-full hover:bg-[#c1121f] active:scale-[0.98] transition-all shadow-lg shadow-[#e63946]/25 hover:shadow-xl hover:shadow-[#e63946]/30 text-sm sm:text-base touch-manipulation min-h-[48px]"
              >
                Ver menú
              </a>
              <button
                type="button"
                onClick={onOpenCart}
                className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-[#1d3557] font-bold rounded-full border-2 border-stone-200 hover:border-[#e63946] hover:text-[#e63946] active:scale-[0.98] transition-all text-sm sm:text-base touch-manipulation min-h-[48px]"
              >
                Hacer pedido
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/20 to-[#f4a261]/20 rounded-[3rem] rotate-6 scale-95" />
              <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-stone-200/80 p-8 border border-stone-100">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">🍔</span>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <p className="font-display font-bold text-[#1d3557]">Combo Clásico</p>
                    <p className="text-sm text-stone-500">Hamburguesa + Papas + Bebida</p>
                  </div>
                  <p className="font-bold text-[#e63946] text-xl">$2.490</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
