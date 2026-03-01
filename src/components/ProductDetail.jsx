import { useEffect, useRef, useState } from 'react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'

const SWIPE_THRESHOLD = 120

export default function ProductDetail({ product, onClose }) {
  const { addItem } = useCart()
  const showToast = useToast()
  const [dragY, setDragY] = useState(0)
  const startY = useRef(0)

  useEffect(() => {
    if (!product) return
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [product])

  if (!product) return null

  const handleAdd = () => {
    addItem(product)
    showToast(`Agregado: ${product.name}`)
    onClose()
  }

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e) => {
    const y = e.touches[0].clientY
    const dy = y - startY.current
    if (dy > 0) setDragY(dy)
  }

  const handleTouchEnd = () => {
    if (dragY > SWIPE_THRESHOLD) {
      onClose()
      setDragY(0)
    } else {
      setDragY(0)
    }
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed inset-x-0 bottom-0 z-[90] bg-white rounded-t-3xl max-h-[92vh] overflow-hidden flex flex-col sm:inset-auto sm:left-1/2 sm:top-1/2 sm:bottom-auto sm:right-auto sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:max-w-md sm:max-h-[90vh] sm:shadow-2xl animate-slide-up-bottom sm:animate-slide-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-detail-title"
        style={
          dragY > 0
            ? { transform: `translateY(${dragY}px)`, transition: 'none' }
            : undefined
        }
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Manija para arrastrar (solo móvil) */}
        <div className="flex-shrink-0 flex justify-center pt-3 pb-1 sm:hidden touch-none">
          <div className="w-10 h-1 rounded-full bg-stone-200" aria-hidden />
        </div>
        <div className="flex-shrink-0 flex items-center justify-between p-4 pt-0 sm:pt-4 border-b border-stone-100">
          <h2 id="product-detail-title" className="font-display font-bold text-lg text-[#1d3557]">
            Detalle del producto
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -m-2 rounded-full hover:bg-stone-100 active:scale-95 text-stone-500 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="aspect-square max-w-sm mx-auto bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center text-8xl sm:text-9xl p-6">
            {product.emoji}
          </div>
          <div className="p-4 sm:p-6 pt-0">
            {product.tag && (
              <span className="inline-block px-3 py-1 rounded-lg bg-[#e63946] text-white text-xs font-semibold uppercase tracking-wide mb-3">
                {product.tag}
              </span>
            )}
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1d3557]">
              {product.name}
            </h3>
            <p className="mt-4 text-stone-600 leading-relaxed">
              {product.description}
            </p>
            <p className="mt-6 font-bold text-2xl text-[#e63946] tabular-nums">
              ${product.price.toLocaleString('es-AR')}
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 p-4 sm:p-6 border-t border-stone-100 bg-stone-50/50 safe-area-pb">
          <button
            type="button"
            onClick={handleAdd}
            className="w-full py-4 rounded-xl bg-[#e63946] text-white font-bold text-lg hover:bg-[#c1121f] active:scale-[0.97] transition-transform touch-manipulation"
          >
            Agregar al pedido
          </button>
        </div>
      </div>
    </>
  )
}
