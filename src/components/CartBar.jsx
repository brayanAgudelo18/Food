import { useCart } from '../context/CartContext'

export default function CartBar({ onOpenCart }) {
  const { totalItems, totalPrice } = useCart()

  if (totalItems === 0) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden safe-area-pb">
      <div className="bg-[#1d3557] text-white px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <button
          type="button"
          onClick={onOpenCart}
          className="w-full flex items-center justify-between gap-4 py-3 px-4 rounded-xl bg-[#e63946] hover:bg-[#c1121f] active:scale-[0.97] transition-transform duration-150 touch-manipulation"
        >
          <span className="flex items-center gap-2">
            <span className="text-lg">🛒</span>
            <span className="font-semibold">
              Ver carrito · {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
            </span>
          </span>
          <span className="font-bold text-lg">${totalPrice.toLocaleString('es-AR')}</span>
        </button>
      </div>
    </div>
  )
}
