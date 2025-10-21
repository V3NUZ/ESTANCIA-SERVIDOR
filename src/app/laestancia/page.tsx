'use client'

/**
 * Página principal de La Estancia - Productos Agropecuarios
 * 
 * Esta página muestra:
 * - Catálogo de productos agropecuarios
 * - Categorías principales (ganado, aves, porcinos, equinos, insumos agrícolas)
 * - Información de contacto y cotizaciones
 * - Productos destacados con precios y descripciones
 * 
 * @author AnimalWorld La Estancia Team
 * @version 2.0.0
 * @since 2025-10-21
 */

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, Phone, Mail, MapPin, Star,
  Truck, Shield, Award, Clock,
  Menu, X, ChevronRight, MessageCircle, ArrowLeft, Store, Tractor
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { ProductModal } from '@/components/product-modal'

export default function LaEstancia() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('todos')
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Información de contacto - La Estancia
  // NOTA: Solo mantenemos la tienda principal, eliminamos punto de venta falso
  const contactInfo = {
    mainStore: {
      name: "La Estancia - Productos Agropecuarios",
      address: "Avenida Caracas 70A-89, Bogotá, Colombia",
      phone: "+57 310 6871639",
      whatsapp: "+57 310 6871639",
      email: "contacto@laestancia.co"
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

  const handleBuyNow = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  // Categorías principales de productos agropecuarios
  // Incluye la categoría de Insumos Agrícolas con semillas que fue restaurada
  const farmCategories = [
    { 
      icon: '🐄', 
      name: 'Ganado Bovino', 
      count: '200+ productos',
      description: 'Alimentos, medicamentos y equipos'
    },
    { 
      icon: '🐓', 
      name: 'Aves', 
      count: '180+ productos',
      description: 'Balanceados, incubadoras y más'
    },
    { 
      icon: '🐷', 
      name: 'Porcinos', 
      count: '100+ productos',
      description: 'Nutrición y manejo especializado'
    },
    { 
      icon: '🐴', 
      name: 'Equinos', 
      count: '80+ productos',
      description: 'Forrajes, herrajes y cuidado'
    },
    { 
      icon: '🌱', 
      name: 'Insumos Agrícolas', // Categoría restaurada - incluye semillas
      count: '50+ productos',
      description: 'Semillas, fertilizantes y agroquímicos'
    }
  ]

  // Productos destacados en la página principal
  // Incluye productos de todas las categorías, incluyendo semillas agrícolas
  const featuredProducts = [
    {
      id: 1,
      name: 'Concentrado para Ganado Lechero',
      category: 'ganado',
      price: '$85.000',
      originalPrice: '$95.000',
      image: '🐄',
      badge: 'Calidad superior',
      rating: 5,
      reviews: 89,
      description: 'Alimento balanceado para máxima producción lechera'
    },
    {
      id: 5,
      name: 'Suplemento para Pollos de Engorde',
      category: 'aves',
      price: '$35.000',
      originalPrice: '$40.000',
      image: '🐓',
      badge: 'Rápido crecimiento',
      rating: 4,
      reviews: 203,
      description: 'Con prebióticos para crecimiento óptimo'
    },
    {
      id: 9,
      name: 'Alimento para Caballos de Alto Rendimiento',
      category: 'equinos',
      price: '$65.000',
      originalPrice: '$72.000',
      image: '🐴',
      badge: 'Premium',
      rating: 5,
      reviews: 67,
      description: 'Fórmula premium para caballos de competencia'
    },
    {
      id: 15,
      name: 'Semillas de Maíz Híbrido',
      category: 'agricola',
      price: '$120.000',
      originalPrice: '$140.000',
      image: '🌽',
      badge: 'Alto rendimiento',
      rating: 4,
      reviews: 189,
      description: 'Semillas certificadas de máximo rendimiento'
    },
    {
      id: 2,
      name: 'Sal Mineralizado para Ganado',
      category: 'ganado',
      price: '$22.000',
      originalPrice: '$25.000',
      image: '🧂',
      badge: 'Esencial',
      rating: 4,
      reviews: 124,
      description: 'Bloque mineral con nutrientes esenciales'
    }
  ]

  const allProductsList = [
    // Productos para Ganado
    { id: 1, name: 'Concentrado para Ganado Lechero', category: 'ganado', price: '$85.000', originalPrice: '$95.000', rating: 5, reviews: 89, icon: '🐄', description: 'Alimento balanceado para máxima producción' },
    { id: 2, name: 'Sal Mineralizado para Ganado', category: 'ganado', price: '$22.000', originalPrice: '$25.000', rating: 4, reviews: 124, icon: '🧂', description: 'Bloque mineral con nutrientes esenciales' },
    { id: 3, name: 'Medicamento Antiparasitario Ganado', category: 'ganado', price: '$45.000', originalPrice: '$52.000', rating: 5, reviews: 178, icon: '💊', description: 'Desparasitante de amplio espectro' },
    { id: 4, name: 'Suplemento Vitamínico para Ganado', category: 'ganado', price: '$38.000', originalPrice: '$45.000', rating: 4, reviews: 145, icon: '💉', description: 'Complejo vitamínico completo' },
    
    // Productos para Aves
    { id: 5, name: 'Suplemento para Pollos de Engorde', category: 'aves', price: '$35.000', originalPrice: '$40.000', rating: 4, reviews: 203, icon: '🐔', description: 'Con prebióticos para crecimiento óptimo' },
    { id: 6, name: 'Alimento para Gallinas Ponedoras', category: 'aves', price: '$28.000', originalPrice: '$32.000', rating: 5, reviews: 167, icon: '🥚', description: 'Nutrición especializada para huevos' },
    { id: 7, name: 'Vitaminas para Aves Corral', category: 'aves', price: '$15.000', originalPrice: '$18.000', rating: 4, reviews: 234, icon: '🌾', description: 'Complejo vitamínico para salud' },
    { id: 8, name: 'Incubadora Automática', category: 'aves', price: '$450.000', originalPrice: '$520.000', rating: 5, reviews: 89, icon: '🥚', description: 'Incubadora digital con control de temperatura' },
    
    // Productos para Equinos
    { id: 9, name: 'Alimento para Caballos de Alto Rendimiento', category: 'equinos', price: '$65.000', originalPrice: '$72.000', rating: 5, reviews: 67, icon: '🐴', description: 'Fórmula premium para competencia' },
    { id: 10, name: 'Herraduras de Alta Calidad', category: 'equinos', price: '$120.000', originalPrice: '$140.000', rating: 5, reviews: 45, icon: '🔩', description: 'Herraduras de acero ergonómicas' },
    { id: 11, name: 'Forraje Premium para Caballos', category: 'equinos', price: '$45.000', originalPrice: '$52.000', rating: 4, reviews: 123, icon: '🌾', description: 'Heno de alfalfa de primera calidad' },
    
    // Productos para Porcinos
    { id: 12, name: 'Concentrado para Cerdos de Engorde', category: 'porcinos', price: '$42.000', originalPrice: '$48.000', rating: 4, reviews: 156, icon: '🐷', description: 'Balanceado para rápido crecimiento' },
    { id: 13, name: 'Suplemento Nutricional Porcino', category: 'porcinos', price: '$28.000', originalPrice: '$32.000', rating: 5, reviews: 98, icon: '💊', description: 'Mejora conversión alimenticia' },
    
    // Insumos Agrícolas
    { id: 14, name: 'Fertilizante Orgánico Premium', category: 'agricola', price: '$55.000', originalPrice: '$65.000', rating: 5, reviews: 234, icon: '🌱', description: 'Fertilizante 100% orgánico' },
    { id: 15, name: 'Semillas de Maíz Híbrido', category: 'agricola', price: '$120.000', originalPrice: '$140.000', rating: 4, reviews: 189, icon: '🌽', description: 'Semillas de alto rendimiento' },
    { id: 16, name: 'Semillas de Soya Certificadas', category: 'agricola', price: '$85.000', originalPrice: '$95.000', rating: 5, reviews: 156, icon: '🌰', description: 'Semillas de soya de alta calidad' },
    { id: 17, name: 'Fertilizante NPK 15-15-15', category: 'agricola', price: '$75.000', originalPrice: '$85.000', rating: 4, reviews: 203, icon: '🧪', description: 'Fertilizante balanceado completo' },
    { id: 18, name: 'Herbicida Selectivo', category: 'agricola', price: '$45.000', originalPrice: '$52.000', rating: 4, reviews: 178, icon: '🌿', description: 'Control selectivo de malezas' }
  ]

  const filteredProducts = activeCategory === 'todos' 
    ? allProductsList 
    : allProductsList.filter(product => product.category === activeCategory)

  const stats = [
    { label: 'Fincas Atendidas', value: '800+', icon: Heart },
    { label: 'Productos Agropecuarios', value: '1,200+', icon: Award },
    { label: 'Años de Experiencia', value: '25+', icon: Star },
    { label: 'Técnicos Especializados', value: '15', icon: Shield }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/la-estancia-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/85"></div>
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/90">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.location.href = '/'}
              className="text-green-900 hover:text-emerald-500"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="relative">
              <img 
                src="https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3" 
                alt="La Estancia" 
                className="h-10 w-auto rounded-lg"
              />
            </div>
            <div>
              <span className="font-bold text-xl text-green-600">La Estancia</span>
              <span className="block text-xs text-emerald-500 font-medium">Productos Agropecuarios</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-sm text-green-900 hover:text-emerald-500" onClick={() => window.location.href = '/'}>Inicio</Button>
            <Button variant="ghost" className="text-sm text-green-900 hover:text-emerald-500" onClick={() => window.location.href = '/productos'}>Productos</Button>
            <Button variant="ghost" className="text-sm text-green-900 hover:text-emerald-500" onClick={() => window.location.href = '/contacto'}>Contacto</Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-green-900 hover:text-emerald-500"
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
              className="text-green-900 hover:text-emerald-500"
            >
              <div className="h-[1.2rem] w-[1.2rem]">
                {theme === 'dark' ? '☀️' : '🌙'}
              </div>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-green-900 hover:text-emerald-500"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-md dark:bg-gray-900/95">
            <nav className="container py-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-green-900 hover:text-emerald-500" onClick={() => window.location.href = '/'}>Inicio</Button>
              <Button variant="ghost" className="w-full justify-start text-green-900 hover:text-emerald-500" onClick={() => window.location.href = '/productos'}>Productos</Button>
              <Button variant="ghost" className="w-full justify-start text-green-900 hover:text-emerald-500" onClick={() => window.location.href = '/contacto'}>Contacto</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 dark:text-white mb-6">
            Bienvenido a <span className="text-emerald-600">La Estancia</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Tu proveedor líder en productos agropecuarios, insumos agrícolas y soluciones para el campo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = '/productos'}
            >
              Ver Productos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-900/20 px-8 py-3 text-lg"
              onClick={() => window.location.href = '/cotizar'}
            >
              Cotizar Productos
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
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-900 dark:text-white">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-900 dark:text-white mb-12">
            Categorías Principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {farmCategories.map((category, index) => (
              <Card key={index} className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-green-200 dark:border-green-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-green-100 dark:bg-green-900 rounded-full group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                    <div className="text-2xl">{category.icon}</div>
                  </div>
                  <CardTitle className="text-lg font-bold text-green-900 dark:text-white">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                    {category.description}
                  </CardDescription>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
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
          <h2 className="text-3xl font-bold text-center text-green-900 dark:text-white mb-12">
            Productos Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-green-200 dark:border-green-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{product.image}</div>
                  <Badge className="mb-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    {product.badge}
                  </Badge>
                  <CardTitle className="text-lg font-bold text-green-900 dark:text-white">
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
                    <span className="text-2xl font-bold text-green-900 dark:text-white">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium"
                      onClick={() => handleBuyNow(product)}
                    >
                      Comprar Ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-green-200 dark:border-green-800">
            <h2 className="text-2xl font-bold text-green-900 dark:text-white mb-4">
              Mantente Informado
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Recibe ofertas especiales en productos agropecuarios y consejos agronómicos
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-green-300 dark:border-green-700"
                required
              />
              <Button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white px-6"
                disabled={isSubscribed}
              >
                {isSubscribed ? '¡Suscrito!' : 'Suscribirse'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">La Estancia</h3>
              <p className="text-green-200">
                Tu proveedor líder en productos agropecuarios y soluciones para el campo.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <div className="text-green-200 hover:text-white cursor-pointer" onClick={() => window.location.href = '/'}>Inicio</div>
                <div className="text-green-200 hover:text-white cursor-pointer" onClick={() => window.location.href = '/productos'}>Productos</div>
                <div className="text-green-200 hover:text-white cursor-pointer" onClick={() => window.location.href = '/contacto'}>Contacto</div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-green-200">
                <p>{contactInfo.mainStore.address}</p>
                <p>{contactInfo.mainStore.phone}</p>
                <p>{contactInfo.mainStore.email}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 La Estancia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
          brand="laestancia"
        />
      )}
    </div>
  )
}