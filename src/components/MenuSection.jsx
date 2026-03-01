import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { menuItems, categories } from '../data/menuItems'
import ProductDetail from './ProductDetail'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    const handler = () => setIsMobile(mql.matches)
    handler()
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])
  return isMobile
}

function MenuCardCompact({ item, onOpenDetail }) {
  const { addItem } = useCart()
  const showToast = useToast()
  const [justAdded, setJustAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.stopPropagation()
    addItem(item)
    showToast(`Agregado: ${item.name}`)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 600)
  }

  return (
    <article className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-100 shadow-sm active:scale-[0.99] transition-transform duration-150">
      <button
        type="button"
        onClick={() => onOpenDetail(item)}
        className="shrink-0 w-12 h-12 rounded-lg bg-stone-50 flex items-center justify-center text-2xl touch-manipulation active:scale-95 transition-transform"
      >
        {item.emoji}
      </button>
      <button
        type="button"
        onClick={() => onOpenDetail(item)}
        className="min-w-0 flex-1 text-left touch-manipulation active:scale-[0.99] transition-transform py-1"
      >
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display font-semibold text-[#1d3557] text-sm truncate">
            {item.name}
          </h3>
          <p className="shrink-0 font-bold text-[#e63946] text-sm tabular-nums">
            ${item.price.toLocaleString('es-AR')}
          </p>
        </div>
        <p className="text-stone-500 text-xs mt-0.5 line-clamp-1">{item.description}</p>
      </button>
      <button
        type="button"
        onClick={handleQuickAdd}
        className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg leading-none transition-all touch-manipulation duration-200 ${
          justAdded
            ? 'bg-green-500 text-white scale-110'
            : 'bg-[#1d3557] text-white hover:bg-[#2a4a6f] active:scale-95'
        }`}
        aria-label={justAdded ? 'Agregado' : `Agregar ${item.name}`}
      >
        {justAdded ? '✓' : '+'}
      </button>
    </article>
  )
}

function MenuCard({ item, index, onOpenDetail }) {
  const { addItem } = useCart()
  const showToast = useToast()

  const handleAdd = () => {
    addItem(item)
    showToast(`Agregado: ${item.name}`)
  }

  return (
    <article
      className="group relative bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-stone-200/80 transition-all duration-300 animate-slide-up cursor-pointer"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {item.tag && (
        <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-[#e63946] text-white text-xs font-semibold uppercase tracking-wide shadow-sm">
          {item.tag}
        </span>
      )}
      <button
        type="button"
        onClick={() => onOpenDetail(item)}
        className="w-full text-left block"
      >
        <div className="aspect-[4/3] sm:aspect-[5/4] bg-gradient-to-br from-stone-50 to-amber-50/80 flex items-center justify-center text-5xl sm:text-6xl group-hover:scale-105 transition-transform duration-300 border-b border-stone-100">
          {item.emoji}
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="font-display font-bold text-[#1d3557] text-base sm:text-lg">
            {item.name}
          </h3>
          <p className="mt-1.5 text-stone-500 text-sm leading-snug line-clamp-2 min-h-[2.5rem]">
            {item.description}
          </p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="font-bold text-[#e63946] text-lg tabular-nums">
              ${item.price.toLocaleString('es-AR')}
            </p>
          </div>
        </div>
      </button>
      <div className="px-4 sm:px-5 pb-4 sm:pb-5 -mt-2">
        <button
          type="button"
          onClick={handleAdd}
          className="w-full py-2.5 rounded-xl bg-[#1d3557] text-white font-semibold text-sm hover:bg-[#2a4a6f] active:scale-[0.97] transition-transform touch-manipulation min-h-[44px]"
        >
          Agregar al pedido
        </button>
      </div>
    </article>
  )
}

function CategoryBlock({ category, items, startIndex, compact, onOpenDetail }) {
  const cat = categories.find((c) => c.id === category)
  if (!cat || !items.length) return null

  if (compact) {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-3 sticky top-[3.5rem] sm:top-20 z-10 py-2 bg-stone-50/95 backdrop-blur-sm -mx-1 px-1">
          <span className="text-lg">{cat.icon}</span>
          <h3 className="font-display font-bold text-[#1d3557] text-sm">
            {cat.label}
          </h3>
        </div>
        <div className="space-y-2">
          {items.map((item) => (
            <MenuCardCompact key={item.id} item={item} onOpenDetail={onOpenDetail} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mb-14 sm:mb-16 last:mb-0">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e63946]/10 text-xl">
          {cat.icon}
        </span>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1d3557]">
          {cat.label}
        </h3>
        <span className="h-px flex-1 bg-gradient-to-r from-stone-200 to-transparent" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {items.map((item, i) => (
          <MenuCard key={item.id} item={item} index={startIndex + i} onOpenDetail={onOpenDetail} />
        ))}
      </div>
    </div>
  )
}

export default function MenuSection() {
  const isMobile = useIsMobile()
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? 'all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const grouped = categories.reduce((acc, cat) => {
    acc[cat.id] = menuItems.filter((item) => item.category === cat.id)
    return acc
  }, {})

  let index = 0
  const categoryBlocks = categories.map((cat) => {
    const items = grouped[cat.id] || []
    const startIndex = index
    index += items.length
    return { category: cat.id, items, startIndex }
  }).filter((block) => block.items.length > 0)

  const showAll = activeCategory === 'all'
  const currentBlock = categoryBlocks.find((b) => b.category === activeCategory)
  const useCompact = isMobile

  return (
    <section id="menu" className="py-8 sm:py-16 lg:py-24 bg-stone-50/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <p className="text-[#e63946] font-semibold uppercase tracking-wider text-xs sm:text-sm mb-1 sm:mb-2">
            Carta
          </p>
          <h2 className="font-display font-extrabold text-xl sm:text-3xl lg:text-4xl text-[#1d3557]">
            Nuestro menú
          </h2>
          <p className="mt-2 sm:mt-3 text-stone-600 text-xs sm:text-base hidden sm:block">
            Ingredientes frescos y porciones generosas. Elegí categoría y agregá al pedido.
          </p>
        </header>

        {/* Tabs: en móvil una categoría a la vez para no alargar */}
        <div className="flex overflow-x-auto gap-2 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-hide snap-x snap-mandatory">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`shrink-0 snap-start px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-150 touch-manipulation active:scale-95 ${
              showAll
                ? 'bg-[#1d3557] text-white'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Todo
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 snap-start px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-150 touch-manipulation active:scale-95 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-[#1d3557] text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-4 sm:mt-10">
          {showAll ? (
            categoryBlocks.map((block) => (
              <CategoryBlock
                key={block.category}
                category={block.category}
                items={block.items}
                startIndex={block.startIndex}
                compact={useCompact}
                onOpenDetail={setSelectedProduct}
              />
            ))
          ) : currentBlock ? (
            <CategoryBlock
              category={currentBlock.category}
              items={currentBlock.items}
              startIndex={0}
              compact={useCompact}
              onOpenDetail={setSelectedProduct}
            />
          ) : null}
        </div>
      </div>

      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
