import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import About from './components/About'
import Features from './components/Features'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Cart from './components/Cart'
import CartBar from './components/CartBar'

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <ToastProvider>
      <CartProvider>
        <Header onOpenCart={() => setCartOpen(true)} />
      <main className="pb-20 md:pb-0">
        <Hero onOpenCart={() => setCartOpen(true)} />
        <MenuSection />
        <About />
        <Features />
        <Cta onOpenCart={() => setCartOpen(true)} />
        <Footer />
      </main>
      <CartBar onOpenCart={() => setCartOpen(true)} />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </CartProvider>
    </ToastProvider>
  )
}

export default App
