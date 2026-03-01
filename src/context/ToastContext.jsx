import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)

  const showToast = useCallback((message) => {
    setToast({ message })
  }, [])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(t)
  }, [toast])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div
          className="fixed bottom-24 left-4 right-4 z-[100] md:bottom-8 md:left-auto md:right-8 md:max-w-sm animate-toast-in safe-area-pb pointer-events-none"
          role="status"
          aria-live="polite"
        >
          <div className="bg-[#1d3557] text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-xl">✓</span>
            <span className="font-medium text-sm">{toast.message}</span>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  return ctx?.showToast ?? (() => {})
}
