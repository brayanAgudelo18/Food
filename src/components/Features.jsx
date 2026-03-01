const features = [
  {
    title: 'Entrega rápida',
    description: 'Pedí y en 25–40 min lo tenés en la puerta.',
    icon: '🚀',
  },
  {
    title: 'Ingredientes frescos',
    description: 'Trabajamos con proveedores de confianza cada día.',
    icon: '🥬',
  },
  {
    title: 'Pedido online fácil',
    description: 'Elegí, pagá y recibí. Sin complicaciones.',
    icon: '📱',
  },
]

export default function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-stone-50 border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="text-center sm:text-left p-6 sm:p-8 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#e63946]/10 text-xl sm:text-2xl">
                {feature.icon}
              </span>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#1d3557] mt-4">
                {feature.title}
              </h3>
              <p className="mt-1 sm:mt-2 text-stone-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
