import { useEffect, useRef, useState } from 'react'
import { useCart } from '../context/CartContext'

const SWIPE_CLOSE_THRESHOLD = 80

export default function Cart({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart()
  const [dragX, setDragX] = useState(0)
  const startX = useRef(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isOpen])

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e) => {
    const x = e.touches[0].clientX
    const dx = x - startX.current
    if (dx > 0) setDragX(dx)
  }
  const handleTouchEnd = () => {
    if (dragX > SWIPE_CLOSE_THRESHOLD) {
      onClose()
      setDragX(0)
    } else {
      setDragX(0)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right safe-area-padding"
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de pedido"
        style={dragX > 0 ? { transform: `translateX(${dragX}px)`, transition: 'none' } : undefined}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex-shrink-0 flex justify-center pt-3 pb-1 md:hidden">
          <div className="w-10 h-1 rounded-full bg-stone-200" aria-hidden />
        </div>
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-stone-200 flex-shrink-0 pt-0 md:pt-4">
          <h2 className="font-display font-bold text-xl text-[#1d3557]">Tu pedido</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -m-2 rounded-full hover:bg-stone-100 active:scale-95 text-stone-500 hover:text-stone-700 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Cerrar carrito"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="text-5xl mb-4 opacity-60">🛒</span>
              <p className="text-stone-500 font-medium">Tu carrito está vacío</p>
              <p className="text-sm text-stone-400 mt-1">Agregá productos del menú</p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 px-6 py-3 rounded-full bg-[#1d3557] text-white font-semibold"
              >
                Ver menú
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-stone-50 border border-stone-100"
                >
                  <span className="text-2xl sm:text-3xl flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-lg overflow-hidden">
                    {item.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-[#1d3557] truncate">{item.name}</p>
                    <p className="text-sm text-[#e63946] font-bold mt-0.5">
                      ${(item.price * item.quantity).toLocaleString('es-AR')}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 active:scale-95 font-medium touch-manipulation transition-transform"
                      aria-label="Quitar uno"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-semibold text-[#1d3557] tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-9 h-9 rounded-full bg-[#1d3557] text-white flex items-center justify-center font-medium hover:bg-[#2a4a6f] active:scale-95 touch-manipulation transition-transform"
                      aria-label="Agregar uno"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="p-2 rounded-full hover:bg-red-50 text-stone-400 hover:text-red-500 transition-colors touch-manipulation flex-shrink-0"
                    aria-label="Eliminar"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="flex-shrink-0 border-t border-stone-200 p-4 sm:p-6 bg-stone-50/80 safe-area-pb">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-stone-600">Total</span>
              <span className="font-display font-bold text-xl text-[#e63946]">
                ${totalPrice.toLocaleString('es-AR')}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-4 sm:py-3.5 rounded-xl border-2 border-stone-200 font-semibold text-stone-600 hover:border-stone-300 hover:bg-stone-50 transition-colors touch-manipulation min-h-[48px]"
              >
                Seguir agregando
              </button>
              <button
                type="button"
                className="flex-1 py-4 sm:py-3.5 rounded-xl bg-[#e63946] text-white font-semibold hover:bg-[#c1121f] transition-colors touch-manipulation min-h-[48px] shadow-lg shadow-[#e63946]/20"
              >
                Finalizar pedido
              </button>
            </div>
            <button
              type="button"
              onClick={() => { clearCart(); onClose(); }}
              className="w-full mt-3 py-2 text-sm font-medium text-stone-400 hover:text-red-500 transition-colors touch-manipulation"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
