'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PawPrint, Tractor, Heart, Store, ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Landing() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleSelectBusiness = (business: 'animalworld' | 'laestancia') => {
    if (business === 'animalworld') {
      window.location.href = '/animalworld'
    } else {
      window.location.href = '/laestancia'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/90">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3" 
                alt="Animal World - La Estancia" 
                className="h-10 w-auto rounded-lg"
              />
            </div>
            <div>
              <span className="font-bold text-xl text-blue-600">Animal World</span>
              <span className="block text-xs text-indigo-500 font-medium">La Estancia</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-blue-900 hover:text-indigo-500"
          >
            <div className="h-[1.2rem] w-[1.2rem]">
              {theme === 'dark' ? '☀️' : '🌙'}
            </div>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-white mb-6">
            Bienvenido a <span className="text-indigo-600">Animal World</span> <span className="text-purple-600">La Estancia</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Dos negocios especializados para cuidar a tus animales. Elige la opción que mejor se adapte a tus necesidades.
          </p>
        </div>

        {/* Business Selection Cards */}
        <div className="container mx-auto grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* Animal World Card */}
          <Card className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <PawPrint className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-blue-900 dark:text-white">
                Animal World
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                Clínica Veterinaria y Tienda para Mascotas
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Atención veterinaria especializada</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                  <Store className="h-5 w-5 text-green-500" />
                  <span>Productos para perros y gatos</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                  <PawPrint className="h-5 w-5 text-blue-500" />
                  <span>Accesorios y juguetes</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={() => handleSelectBusiness('animalworld')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Entrar a Animal World
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* La Estancia Card */}
          <Card className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-green-200 dark:border-green-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-green-100 dark:bg-green-900 rounded-full group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                <Tractor className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-green-900 dark:text-white">
                La Estancia
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                Productos Agropecuarios y Ganadería
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                  <Tractor className="h-5 w-5 text-orange-500" />
                  <span>Alimentos para ganado</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                  <Store className="h-5 w-5 text-green-500" />
                  <span>Insumos agrícolas</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Asesoría especializada</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={() => handleSelectBusiness('laestancia')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Entrar a La Estancia
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="container mx-auto mt-16 text-center">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Necesitas ayuda?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Contáctanos directamente y te ayudaremos a encontrar lo que necesitas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/contacto'}
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/20"
              >
                Contacto General
              </Button>
              <Button 
                onClick={() => window.location.href = 'tel:+573106871639'}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}