'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/" className="block">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Home className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Regresar
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            ¿Buscas alguna de nuestras páginas?
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link href="/animalworld" className="text-blue-600 hover:text-blue-800">
              Animal World
            </Link>
            <Link href="/laestancia" className="text-green-600 hover:text-green-800">
              La Estancia
            </Link>
            <Link href="/productos" className="text-blue-600 hover:text-blue-800">
              Productos
            </Link>
            <Link href="/servicios" className="text-blue-600 hover:text-blue-800">
              Servicios
            </Link>
            <Link href="/contacto" className="text-blue-600 hover:text-blue-800">
              Contacto
            </Link>
            <Link href="/cotizar" className="text-green-600 hover:text-green-800">
              Cotizar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}