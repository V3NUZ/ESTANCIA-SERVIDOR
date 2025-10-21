/**
 * Hook personalizado para manejar el scroll al inicio en cada navegación
 * 
 * Este componente asegura que cada vez que el usuario navega a una nueva página,
 * el scroll se posicione automáticamente en la parte superior.
 * 
 * @author AnimalWorld La Estancia Team
 * @version 1.0.0
 * @since 2025-10-21
 */

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Forzar scroll al inicio cuando cambia la ruta
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // También forzar scroll después de un pequeño delay por si hay renderizados asíncronos
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null
}