'use client'

import { useState, useCallback, useMemo } from 'react'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
import { Phone, Menu, X } from 'lucide-react'
import Link from 'next/link'
=======
import { Phone, Menu, X, Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  href: string
  label: string
  icon?: any
}
>>>>>>> 28cf33f0c3aa9ccad02f3ad92742a9e5e0030a86

const contactInfo = {
  animalWorld: {
    phone: "+57 314 2822728",
    whatsapp: "+57 314 2822728",
  },
  laEstancia: {
    phone: "+57 310 6871639",
    whatsapp: "+57 310 6871639",
  }
}

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
<<<<<<< HEAD
=======
  const pathname = usePathname()
>>>>>>> 28cf33f0c3aa9ccad02f3ad92742a9e5e0030a86

  const handleQuickContact = useCallback((method: string, brand: 'animalWorld' | 'laEstancia' = 'animalWorld') => {
    const info = contactInfo[brand]
    switch (method) {
      case 'phone':
        window.open(`tel:${info.phone}`, '_self')
        break
      case 'whatsapp':
        window.open(`https://wa.me/${info.whatsapp.replace(/[^\d]/g, '')}`, '_blank')
        break
    }
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

<<<<<<< HEAD
  const navLinks = useMemo(() => [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' },
  ], [])
=======
  const navLinks = useMemo((): NavLink[] => {
    const links: NavLink[] = [
      { href: '/productos', label: 'Productos' },
      { href: '/servicios', label: 'Servicios' },
      { href: '/contacto', label: 'Contacto' },
    ]
    
    // Solo agregar "Inicio" si no estamos en la página principal
    if (pathname !== '/') {
      links.unshift({ href: '/', label: 'Inicio', icon: Home })
    }
    
    return links
  }, [pathname])
>>>>>>> 28cf33f0c3aa9ccad02f3ad92742a9e5e0030a86

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
<<<<<<< HEAD
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
=======
          {/* Logo - Siempre redirige a la página principal */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
>>>>>>> 28cf33f0c3aa9ccad02f3ad92742a9e5e0030a86
              <img 
                src="https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3"
                alt="AnimalWorld La Estancia"
                className="h-10 w-auto rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">AnimalWorld</h1>
                <p className="text-sm font-semibold text-green-700">La Estancia</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
<<<<<<< HEAD
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
=======
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2"
              >
                {link.icon && <link.icon className="h-4 w-4" />}
>>>>>>> 28cf33f0c3aa9ccad02f3ad92742a9e5e0030a86
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
<<<<<<< HEAD
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={closeMobileMenu}
                >
=======
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 flex items-center gap-2"
                  onClick={closeMobileMenu}
                >
                  {link.icon && <link.icon className="h-4 w-4" />}
>>>>>>> 28cf33f0c3aa9ccad02f3ad92742a9e5e0030a86
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}