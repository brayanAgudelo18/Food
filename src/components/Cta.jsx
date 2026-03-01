import { useCart } from '../context/CartContext'

export default function Cta({ onOpenCart }) {
  const { totalItems } = useCart()

  return (
    <section id="pedido" className="py-12 sm:py-16 lg:py-24 bg-[#1d3557] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 20V40H20M40 40V20H0\'/%3E%3C/g%3E%3C/svg%3E')]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
          ¿Listo para pedir?
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-stone-300 max-w-xl mx-auto">
          Armá tu pedido en segundos. Delivery o retiro en local.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-[#e63946] text-white font-bold rounded-full hover:bg-[#c1121f] active:scale-[0.98] transition-all text-sm sm:text-base touch-manipulation min-h-[48px]"
          >
            {totalItems > 0 ? `Ver mi pedido (${totalItems})` : 'Pedir por web'}
          </button>
          <a
            href="tel:+5491112345678"
            className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-white/10 text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 active:scale-[0.98] transition-all text-sm sm:text-base touch-manipulation min-h-[48px]"
          >
            Llamar al local
          </a>
        </div>
      </div>
    </section>
  )
}
