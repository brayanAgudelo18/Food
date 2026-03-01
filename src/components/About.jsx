export default function About() {
  return (
    <section id="nosotros" className="py-12 sm:py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <p className="text-[#e63946] font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-3">
              Nosotros
            </p>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1d3557]">
              Rápido en la entrega, rico en sabor
            </h2>
            <p className="mt-4 sm:mt-6 text-stone-600 leading-relaxed text-sm sm:text-base">
              Somos un equipo que cree que la comida rápida puede ser fresca, sabrosa y hecha con cuidado.
              Cada hamburguesa se arma al momento, cada porción de papas sale recién frita. Sin atajos.
            </p>
            <p className="mt-3 sm:mt-4 text-stone-600 leading-relaxed text-sm sm:text-base">
              Delivery en zona y retiro en local. Horarios amplios para cuando tengas hambre.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center text-4xl sm:text-5xl">
              🍔
            </div>
            <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-4xl sm:text-5xl">
              🍟
            </div>
            <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-100 to-amber-100 flex items-center justify-center text-4xl sm:text-5xl">
              🥤
            </div>
            <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-stone-100 to-amber-100 flex items-center justify-center text-4xl sm:text-5xl">
              🌮
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
