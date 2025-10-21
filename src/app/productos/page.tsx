'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Search, Filter, Star, Heart, Share2,
  Dog, Cat, ChevronRight,
  Truck, Shield, Award, Phone, Mail, MessageCircle, ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

// Información de contacto - Colombia
const contactInfo = {
  animalWorld: {
    name: "Animal World - Clínica Veterinaria",
    address: "Carrera 58 #128B-88, Bogotá, Colombia",
    phone: "+57 314 2822728",
    whatsapp: "+57 314 2822728",
    email: "clinica@animalworld.co",
    city: "Bogotá",
    country: "Colombia"
  },
  laEstancia: {
    name: "La Estancia - Productos Agropecuarios",
    address: "Avenida Caracas 70A-83, Bogotá, Colombia",
    phone: "+57 310 6871639",
    whatsapp: "+57 310 6871639",
    email: "info@laestancia.co",
    city: "Bogotá",
    country: "Colombia"
  },
  // Contacto general
  phone: "+57 314 2822728",
  email: "clinica@animalworld.co", 
  whatsapp: "+57 314 2822728",
  address: "Carrera 58 #128B-88, Bogotá, Colombia"
}

const products = [
  // Productos para Perros - Animal World
  {
    id: 1,
    name: 'Alimento Premium Perros Adultos',
    category: 'perros',
    subcategory: 'alimentos',
    price: 25990,
    originalPrice: 32990,
    image: '🐕',
    rating: 4.8,
    reviews: 124,
    badge: 'Más vendido',
    description: 'Alimento balanceado premium para perros adultos con pollo y arroz',
    features: ['Alta proteína', 'Sin conservantes', 'Omega 3 y 6'],
    stock: 50,
    brand: 'Animal World'
  },
  {
    id: 2,
    name: 'Juguete Interactivo Mordedor',
    category: 'perros',
    subcategory: 'accesorios',
    price: 8990,
    image: '🦴',
    rating: 4.6,
    reviews: 89,
    description: 'Juguete resistente para morder y jugar',
    features: ['Material seguro', 'Diseño ergonómico', 'Fácil limpieza'],
    stock: 30,
    brand: 'Animal World'
  },
  // Productos para Gatos - Animal World
  {
    id: 3,
    name: 'Arena Higiénica Premium Gatos',
    category: 'gatos',
    subcategory: 'higiene',
    price: 12990,
    image: '🐈',
    rating: 4.7,
    reviews: 156,
    badge: 'Calidad superior',
    description: 'Arena aglomerante con control de olores',
    features: ['Aglomerante rápido', 'Bajo polvo', 'Control de olores 7 días'],
    stock: 40,
    brand: 'Animal World'
  },
  {
    id: 4,
    name: 'Rascador para Gatos',
    category: 'gatos',
    subcategory: 'accesorios',
    price: 19990,
    image: '🪵',
    rating: 4.9,
    reviews: 67,
    description: 'Rascador vertical con sisal natural',
    features: ['Altura ajustable', 'Base estable', 'Sisal natural'],
    stock: 25,
    brand: 'Animal World'
  },
  // Productos para Ganado - La Estancia
  {
    id: 5,
    name: 'Balanceado Vacas Lecheras',
    category: 'ganado',
    subcategory: 'alimentos',
    price: 45990,
    image: '🐄',
    rating: 4.8,
    reviews: 45,
    badge: 'Profesional',
    description: 'Alimento especializado para vacas lecheras en producción',
    features: ['Alta producción', 'Minerales esenciales', 'Vitaminas A, D, E'],
    stock: 20,
    brand: 'La Estancia'
  },
  {
    id: 6,
    name: 'Suplemento Mineral Ganado',
    category: 'ganado',
    subcategory: 'suplementos',
    price: 32990,
    image: '🧂',
    rating: 4.7,
    reviews: 38,
    description: 'Bloque mineral con sales y oligoelementos',
    features: ['Libre consumo', 'Palatable', 'Nutrición completa'],
    stock: 35,
    brand: 'La Estancia'
  },
  // Productos para Aves - La Estancia
  {
    id: 7,
    name: 'Balanceado Pollos Engorde',
    category: 'aves',
    subcategory: 'alimentos',
    price: 18990,
    image: '🐓',
    rating: 4.6,
    reviews: 92,
    badge: 'Rápido crecimiento',
    description: 'Alimento para pollos de engorde',
    features: ['Alta proteína', 'Pre-iniciador', 'Antibióticos'],
    stock: 60,
    brand: 'La Estancia'
  },
  {
    id: 8,
    name: 'Incubadora Automática',
    category: 'aves',
    subcategory: 'equipos',
    price: 89990,
    image: '🥚',
    rating: 4.8,
    reviews: 28,
    description: 'Incubadora automática para 48 huevos',
    features: ['Control digital', 'Auto-giro', 'Alta precisión'],
    stock: 15,
    brand: 'La Estancia'
  },
  // Productos para Porcinos - La Estancia
  {
    id: 9,
    name: 'Alimento Cerdos Engorde',
    category: 'porcinos',
    subcategory: 'alimentos',
    price: 22990,
    image: '🐷',
    rating: 4.7,
    reviews: 34,
    description: 'Balanceado para cerdos en etapa de engorde',
    features: ['Conversión óptima', 'Fórmula mejorada', 'Vitaminas'],
    stock: 45,
    brand: 'La Estancia'
  },
  // Productos para Equinos - La Estancia
  {
    id: 10,
    name: 'Forraje Premium Caballos',
    category: 'equinos',
    subcategory: 'alimentos',
    price: 35990,
    image: '🐴',
    rating: 4.9,
    reviews: 56,
    badge: 'Premium',
    description: 'Heno de alfalfa de primera calidad',
    features: ['Alta proteína', 'Libre de hongos', 'Excelente digestión'],
    stock: 25,
    brand: 'La Estancia'
  },
  // SEMILLAS - La Estancia (Nuevos productos)
  {
    id: 11,
    name: 'Semillas de Maíz Híbrido',
    category: 'semillas',
    subcategory: 'cereales',
    price: 28990,
    image: '🌽',
    rating: 4.8,
    reviews: 67,
    badge: 'Alto rendimiento',
    description: 'Semillas híbridas de maíz con alto potencial de rendimiento',
    features: ['Alto rendimiento', 'Resistencia a plagas', 'Germinación certificada', 'Adaptado al clima'],
    stock: 100,
    brand: 'La Estancia'
  },
  {
    id: 12,
    name: 'Semillas de Sorgo Forrajero',
    category: 'semillas',
    subcategory: 'forrajes',
    price: 19990,
    image: '🌾',
    rating: 4.6,
    reviews: 43,
    description: 'Semillas de sorgo especializadas para producción de forraje',
    features: ['Rápido crecimiento', 'Alto valor nutricional', 'Tolerancia a sequía', 'Múltiples cortes'],
    stock: 80,
    brand: 'La Estancia'
  },
  {
    id: 13,
    name: 'Semillas de Pasto Elefante',
    category: 'semillas',
    subcategory: 'pastos',
    price: 15990,
    image: '🌿',
    rating: 4.7,
    reviews: 52,
    description: 'Semillas de pasto elefante para ganadería intensiva',
    features: ['Alta producción', 'Excelente palatabilidad', 'Perenne', 'Adaptación tropical'],
    stock: 120,
    brand: 'La Estancia'
  },
  {
    id: 14,
    name: 'Semillas de Soya',
    category: 'semillas',
    subcategory: 'leguminosas',
    price: 32990,
    image: '🫘',
    rating: 4.9,
    reviews: 38,
    badge: 'Alta proteína',
    description: 'Semillas de soya con alto contenido proteico',
    features: ['Alto proteína', 'Fijación de nitrógeno', 'Certificadas', 'No transgénicas'],
    stock: 60,
    brand: 'La Estancia'
  },
  {
    id: 15,
    name: 'Mezcla de Pastos Tropicales',
    category: 'semillas',
    subcategory: 'pastos',
    price: 21990,
    image: '🌱',
    rating: 4.5,
    reviews: 29,
    description: 'Mezcla balanceada de pastos tropicales para ganado',
    features: ['Mezcla balanceada', 'Persistencia', 'Adaptación múltiple', 'Recuperación rápida'],
    stock: 90,
    brand: 'La Estancia'
  }
]

const categories = [
  { value: 'todos', label: 'Todas las Categorías', icon: Search },
  { value: 'perros', label: 'Perros', icon: Dog },
  { value: 'gatos', label: 'Gatos', icon: Cat },
  { value: 'ganado', label: 'Ganado', icon: '🐄' },
  { value: 'aves', label: 'Aves', icon: '🐓' },
  { value: 'porcinos', label: 'Porcinos', icon: '🐷' },
  { value: 'equinos', label: 'Equinos', icon: '🐴' },
  { value: 'semillas', label: 'Semillas', icon: '🌱' }
]

const sortOptions = [
  { value: 'relevance', label: 'Más Relevantes' },
  { value: 'price-low', label: 'Precio: Menor a Mayor' },
  { value: 'price-high', label: 'Precio: Mayor a Menor' },
  { value: 'rating', label: 'Mejor Calificados' },
  { value: 'name', label: 'Nombre A-Z' }
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [sortBy, setSortBy] = useState('relevance')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 })
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
      
      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  const handleContactClick = (productName: string, method: 'whatsapp' | 'phone' | 'email', brand: 'animalWorld' | 'laEstancia') => {
    const info = brand === 'animalWorld' ? contactInfo.animalWorld : contactInfo.laEstancia
    const message = `Hola! Estoy interesado en el producto: ${productName}`
    
    switch (method) {
      case 'whatsapp':
        window.open(`https://wa.me/${info.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`, '_blank')
        break
      case 'phone':
        window.open(`tel:${info.phone}`, '_self')
        break
      case 'email':
        window.open(`mailto:${info.email}?subject=Consulta sobre producto: ${productName}&body=${encodeURIComponent(message)}`, '_blank')
        break
    }
  }

  const getBrandColor = (brand: string) => {
    return brand === 'Animal World' ? 'bg-blue-600' : 'bg-green-600'
  }

  const getBrandInfo = (brand: string) => {
    return brand === 'Animal World' ? contactInfo.animalWorld : contactInfo.laEstancia
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-40 w-full border-b bg-white shadow-lg">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center gap-3">
                <img 
                  src="https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3"
                  alt="AnimalWorld La Estancia"
                  className="h-8 w-auto rounded-lg"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">AnimalWorld</h1>
                  <p className="text-xs text-green-700 font-semibold">La Estancia</p>
                </div>
              </Link>
              <div className="h-8 w-px bg-gray-300"></div>
              <h2 className="text-2xl font-bold text-gray-900">Catálogo de Productos</h2>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                {filteredProducts.length} productos
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 border-gray-300 focus:border-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowFilters(!showFilters)}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-4">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Animal World: {contactInfo.animalWorld.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">La Estancia: {contactInfo.laEstancia.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-4 w-4">💬</span>
              <span className="font-medium">WhatsApp disponible</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-64 flex-shrink-0`}>
            <Card className="border-gray-200 shadow-lg">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg text-gray-900">Filtros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map(category => {
                      const Icon = typeof category.icon === 'string' ? null : category.icon
                      return (
                        <Button
                          key={category.value}
                          variant={selectedCategory === category.value ? 'default' : 'ghost'}
                          className={`w-full justify-start ${
                            selectedCategory === category.value 
                              ? 'bg-blue-600 text-white hover:bg-blue-700' 
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          onClick={() => setSelectedCategory(category.value)}
                        >
                          {typeof Icon === 'string' ? <span className="mr-2">{Icon}</span> : Icon && <Icon className="mr-2 h-4 w-4" />}
                          {category.label}
                        </Button>
                      )
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Rango de Precio</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600">Mínimo</label>
                      <Input
                        type="number"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                        placeholder="0"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Máximo</label>
                      <Input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                        placeholder="100000"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Características</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">Envío gratis</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">En stock</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">Ofertas</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">No se encontraron productos</h3>
                <p className="text-gray-600">Intenta ajustar los filtros o tu búsqueda</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => {
                  const brandInfo = getBrandInfo(product.brand)
                  return (
                    <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 group border-gray-200 bg-white">
                      <CardHeader className="relative pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <Badge className={`${getBrandColor(product.brand)} text-white`}>
                            {product.brand}
                          </Badge>
                          {product.badge && (
                            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                              {product.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="text-6xl text-center mb-3 group-hover:scale-110 transition-transform">
                          {product.image}
                        </div>
                        <CardTitle className="text-lg text-gray-900 text-center">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-center text-gray-600">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-center mb-3">
                          {renderStars(product.rating)}
                          <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <ChevronRight className="h-3 w-3 text-blue-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div>
                            {product.originalPrice ? (
                              <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-green-600">
                                  ${product.price.toLocaleString('es-CO')}
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                  ${product.originalPrice.toLocaleString('es-CO')}
                                </span>
                              </div>
                            ) : (
                              <span className="text-xl font-bold text-gray-900">
                                ${product.price.toLocaleString('es-CO')}
                              </span>
                            )}
                          </div>
                          <Badge variant="outline" className="text-green-700 border-green-600">
                            Stock: {product.stock}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <Button 
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
                            onClick={() => handleContactClick(product.name, 'whatsapp', product.brand.toLowerCase() as 'animalWorld' | 'laEstancia')}
                          >
                            <span className="mr-2">💬</span>
                            WhatsApp {product.brand}
                          </Button>
                          <div className="grid grid-cols-2 gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="border-gray-300 text-gray-700 hover:bg-gray-50"
                              onClick={() => handleContactClick(product.name, 'phone', product.brand.toLowerCase() as 'animalWorld' | 'laEstancia')}
                            >
                              <Phone className="mr-1 h-3 w-3" />
                              Llamar
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="border-gray-300 text-gray-700 hover:bg-gray-50"
                              onClick={() => handleContactClick(product.name, 'email', product.brand.toLowerCase() as 'animalWorld' | 'laEstancia')}
                            >
                              <Mail className="mr-1 h-3 w-3" />
                              Email
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}