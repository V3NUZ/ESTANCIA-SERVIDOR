'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Heart, PawPrint, 
  Phone, Mail, MapPin, Star,
  Dog, Cat, 
  Truck, Shield, Award, Clock,
  Menu, X, ChevronRight, MessageCircle, ArrowLeft, Store
} from 'lucide-react'
import { useTheme } from 'next-themes'

export default function AnimalWorld() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('todos')
  const { theme, setTheme } = useTheme()

  // Contact information for Animal World
  const contactInfo = {
    veterinaryClinic: {
      name: "Clínica Veterinaria Animal World",
      address: "Carrera 58 #128b-88, Bogotá, Colombia",
      phone: "+57 314 2822728",
      whatsapp: "+57 314 2822728",
      email: "clinica@animalworld.co"
    },
    petStore: {
      name: "Tienda de Mascotas Animal World",
      address: "Calle 127 #45-67, Bogotá, Colombia", 
      phone: "+57 320 4567890",
      whatsapp: "+57 320 4567890",
      email: "tienda@animalworld.co"
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })

        const data = await response.json()

        if (response.ok) {
          setIsSubscribed(true)
          setTimeout(() => setIsSubscribed(false), 3000)
          setEmail('')
        } else {
          console.error('Error:', data.error)
        }
      } catch (error) {
        console.error('Error de red:', error)
      }
    }
  }

  const petCategories = [
    { 
      icon: Dog, 
      name: 'Perros', 
      count: '150+ productos',
      description: 'Alimentos, accesorios y cuidado'
    },
    { 
      icon: Cat, 
      name: 'Gatos', 
      count: '120+ productos',
      description: 'Arena, juguetes y nutrición'
    }
  ]

  const featuredProducts = [
    {
      name: 'Alimento Premium para Perros Adultos',
      category: 'Perros',
      price: '$45.900',
      originalPrice: '$52.000',
      image: '🐕',
      badge: 'Más vendido',
      rating: 5,
      reviews: 234,
      description: 'Nutrición completa con pollo y arroz, fortificado con vitaminas'
    },
    {
      name: 'Alimento Súper Premium para Gatos',
      category: 'Gatos',
      price: '$38.500',
      originalPrice: '$44.000',
      image: '🐈',
      badge: 'Oferta especial',
      rating: 5,
      reviews: 189,
      description: 'Fórmula especial con salmón y vegetales'
    },
    {
      name: 'Juguetes Interactivos para Perros',
      category: 'Perros',
      price: '$25.000',
      originalPrice: '$30.000',
      image: '🦴',
      badge: 'Divertido',
      rating: 4,
      reviews: 156,
      description: 'Juguetes resistentes que estimulan la mente'
    },
    {
      name: 'Arena Higiénica Premium para Gatos',
      category: 'Gatos',
      price: '$28.500',
      originalPrice: '$32.000',
      image: '🏺',
      badge: 'Calidad superior',
      rating: 4,
      reviews: 342,
      description: 'Arena aglomerante con control de olores'
    }
  ]

  const allProductsList = [
    // Productos para Perros
    { id: 1, name: 'Alimento Premium para Perros Adultos', category: 'perros', price: '$45.900', originalPrice: '$52.000', rating: 5, reviews: 234, icon: '🐕', description: 'Nutrición completa con pollo y arroz' },
    { id: 2, name: 'Alimento para Cachorros', category: 'perros', price: '$42.000', originalPrice: '$48.000', rating: 5, reviews: 189, icon: '🐶', description: 'Fórmula especial para desarrollo' },
    { id: 3, name: 'Juguetes Interactivos para Perros', category: 'perros', price: '$25.000', originalPrice: '$30.000', rating: 4, reviews: 156, icon: '🦴', description: 'Estimulan mente y ejercicio físico' },
    { id: 4, name: 'Cama Ortopédica para Perros', category: 'perros', price: '$120.000', originalPrice: '$145.000', rating: 5, reviews: 267, icon: '🛏️', description: 'Memory foam para máximo confort' },
    { id: 5, name: 'Snacks Nutritivos para Perros', category: 'perros', price: '$15.000', originalPrice: '$18.000', rating: 4, reviews: 298, icon: '🦴', description: 'Premios saludables naturales' },
    
    // Productos para Gatos
    { id: 6, name: 'Alimento Súper Premium para Gatos', category: 'gatos', price: '$38.500', originalPrice: '$44.000', rating: 5, reviews: 189, icon: '🐈', description: 'Salmón y vegetales' },
    { id: 7, name: 'Arena Higiénica Premium para Gatos', category: 'gatos', price: '$28.500', originalPrice: '$32.000', rating: 4, reviews: 342, icon: '🏺', description: 'Control de olores por 30 días' },
    { id: 8, name: 'Rascador para Gatos de Madera', category: 'gatos', price: '$89.900', originalPrice: '$110.000', rating: 5, reviews: 98, icon: '🪵', description: 'Madera natural con sisal resistente' },
    { id: 9, name: 'Juguetes Interactivos para Gatos', category: 'gatos', price: '$18.000', originalPrice: '$22.000', rating: 4, reviews: 145, icon: '🧶', description: 'Plumas y sonidos para caza' },
    
    // Productos Veterinarios
    { id: 10, name: 'Vacuna Triple Canina', category: 'veterinario', price: '$55.000', originalPrice: '$65.000', rating: 5, reviews: 298, icon: '💉', description: 'Protección completa' },
    { id: 11, name: 'Antipulgas y Garrapatas Gatos', category: 'veterinario', price: '$42.000', originalPrice: '$48.000', rating: 5, reviews: 412, icon: '🦟', description: 'Tratamiento mensual' },
    { id: 12, name: 'Shampoo Medicado para Perros', category: 'veterinario', price: '$28.000', originalPrice: '$32.000', rating: 4, reviews: 167, icon: '🧴', description: 'Para piel sensible' }
  ]

  const filteredProducts = activeCategory === 'todos' 
    ? allProductsList 
    : allProductsList.filter(product => product.category === activeCategory)

  const services = [
    {
      icon: Heart,
      title: 'Consulta Veterinaria',
      description: 'Atención médica especializada para tus mascotas'
    },
    {
      icon: Truck,
      title: 'Despachos a Domicilio',
      description: 'Entrega rápida en toda Bogotá'
    },
    {
      icon: Shield,
      title: 'Garantía de Calidad',
      description: 'Productos certificados y seguros'
    },
    {
      icon: MessageCircle,
      title: 'Asesoría 24/7',
      description: 'Expertos disponibles siempre'
    }
  ]

  const stats = [
    { label: 'Mascotas Felices', value: '3,000+', icon: Heart },
    { label: 'Productos Premium', value: '500+', icon: PawPrint },
    { label: 'Años de Experiencia', value: '10+', icon: Award },
    { label: 'Veterinarios', value: '8', icon: Star }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/90">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.location.href = '/'}
              className="text-blue-900 hover:text-indigo-500"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="relative">
              <img 
                src="https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3" 
                alt="Animal World" 
                className="h-10 w-auto rounded-lg"
              />
            </div>
            <div>
              <span className="font-bold text-xl text-blue-600">Animal World</span>
              <span className="block text-xs text-indigo-500 font-medium">Clínica y Tienda de Mascotas</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-sm text-blue-900 hover:text-indigo-500">Inicio</Button>
            <Button variant="ghost" className="text-sm text-blue-900 hover:text-indigo-500" onClick={() => window.location.href = '/productos'}>Productos</Button>
            <Button variant="ghost" className="text-sm text-blue-900 hover:text-indigo-500" onClick={() => window.location.href = '/servicios'}>Servicios</Button>
            <Button variant="ghost" className="text-sm text-blue-900 hover:text-indigo-500" onClick={() => window.location.href = '/contacto'}>Contacto</Button>
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
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-blue-900 hover:text-indigo-500"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-md dark:bg-gray-900/95">
            <nav className="container py-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-blue-900 hover:text-indigo-500">Inicio</Button>
              <Button variant="ghost" className="w-full justify-start text-blue-900 hover:text-indigo-500" onClick={() => window.location.href = '/productos'}>Productos</Button>
              <Button variant="ghost" className="w-full justify-start text-blue-900 hover:text-indigo-500" onClick={() => window.location.href = '/servicios'}>Servicios</Button>
              <Button variant="ghost" className="w-full justify-start text-blue-900 hover:text-indigo-500" onClick={() => window.location.href = '/contacto'}>Contacto</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-white mb-6">
            Bienvenido a <span className="text-indigo-600">Animal World</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Clínica veterinaria especializada y tienda premium para el cuidado de tus mascotas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = '/productos'}
            >
              Ver Productos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900/20 px-8 py-3 text-lg"
              onClick={() => window.location.href = '/contacto'}
            >
              Agendar Cita
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-900 dark:text-white">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-12">
            Categorías Principales
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {petCategories.map((category, index) => (
              <Card key={index} className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <category.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900 dark:text-white">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </CardDescription>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {category.count}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-12">
            Productos Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{product.image}</div>
                  <Badge className="mb-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {product.badge}
                  </Badge>
                  <CardTitle className="text-lg font-bold text-blue-900 dark:text-white">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-blue-900 dark:text-white">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      Contactar para Comprar
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => window.location.href = '/contacto'}
                      className="px-3"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-12">
            Contacto Animal World
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Veterinary Clinic */}
            <Card className="p-6 border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-900 dark:text-white flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Clínica Veterinaria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{contactInfo.veterinaryClinic.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${contactInfo.veterinaryClinic.phone.replace(/[^\d]/g, '')}`} className="text-sm hover:text-blue-600">
                    {contactInfo.veterinaryClinic.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${contactInfo.veterinaryClinic.email}`} className="text-sm hover:text-blue-600">
                    {contactInfo.veterinaryClinic.email}
                  </a>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Emergencia 24/7
                </Button>
              </CardContent>
            </Card>

            {/* Pet Store */}
            <Card className="p-6 border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-900 dark:text-white flex items-center gap-2">
                  <Store className="h-5 w-5 text-green-500" />
                  Tienda de Mascotas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{contactInfo.petStore.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${contactInfo.petStore.phone.replace(/[^\d]/g, '')}`} className="text-sm hover:text-blue-600">
                    {contactInfo.petStore.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${contactInfo.petStore.email}`} className="text-sm hover:text-blue-600">
                    {contactInfo.petStore.email}
                  </a>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Ver Productos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
              Mantente Conectado
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Recibe ofertas exclusivas y consejos para el cuidado de tus mascotas
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-blue-300 dark:border-blue-700"
                required
              />
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                disabled={isSubscribed}
              >
                {isSubscribed ? '¡Suscrito!' : 'Suscribirse'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}