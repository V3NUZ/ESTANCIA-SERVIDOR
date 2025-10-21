'use client'

/**
 * Página principal de La Estancia - Productos Agropecuarios
 * 
 * Página completa con catálogo de productos, categorías especializadas,
 * sistema de cotización y contacto directo.
 * 
 * @author Propietario del Proyecto
 * @version 1.0.0
 * @since 2024
 * @copyright AnimalWorld La Estancia © 2025
 * @note Desarrollado con soporte técnico de IA
 */

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, Phone, MessageCircle, 
  Calculator, Store, CheckCircle, Send, Truck,
  Shield, Star, Users, MapPin, Dog, Cat
} from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'

// Información de contacto - La Estancia
// NOTA: Solo mantenemos la tienda principal, eliminamos punto de venta falso
const contactInfo = {
  mainStore: {
    name: "La Estancia - Productos Agropecuarios",
    address: "Avenida Caracas 70A-83, Bogotá, Colombia",
    phone: "+57 310 6871639",
    whatsapp: "+57 310 6871639",
    email: "info@laestancia.co"
  }
}

const stats = [
  { label: 'Productos Disponibles', value: '500+', icon: Store },
  { label: 'Clientes Satisfechos', value: '8,000+', icon: Users },
  { label: 'Años de Experiencia', value: '15+', icon: Shield }
]

export default function LaEstanciaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  // Categorías principales de productos agropecuarios
  // Actualizado con todas las categorías solicitadas incluyendo perros y gatos
  const farmCategories = [
    { 
      icon: '🐄', 
      name: 'Ganado Bovino', 
      count: '200+ productos',
      description: 'Concentrados, suplementos y medicamentos para ganado',
      color: 'from-amber-500 to-amber-700',
      image: '/ganado-bovino.jpg'
    },
    { 
      icon: '🐴', 
      name: 'Caballos', 
      count: '150+ productos',
      description: 'Alimentos, suplementos y cuidado equino',
      color: 'from-purple-500 to-purple-700',
      image: '/caballos-equinos.jpg'
    },
    { 
      icon: '🐷', 
      name: 'Cerdos', 
      count: '120+ productos',
      description: 'Nutrición especializada y productos porcinos',
      color: 'from-pink-500 to-pink-700',
      image: '/cerdos-porcinos.jpg'
    },
    { 
      icon: '🐔', 
      name: 'Aves y Corral', 
      count: '180+ productos',
      description: 'Alimentos balanceados y equipamiento avícola',
      color: 'from-orange-500 to-orange-700',
      image: '/aves-corral.jpg'
    },
    { 
      icon: '🐐', 
      name: 'Cabras', 
      count: '80+ productos',
      description: 'Nutrición y manejo caprino especializado',
      color: 'from-yellow-500 to-yellow-700',
      image: '/cabras-caprinas.jpg'
    },
    { 
      icon: '🐕', 
      name: 'Perros', 
      count: '100+ productos',
      description: 'Alimentos y accesorios para perros',
      color: 'from-blue-500 to-blue-700',
      image: '/ganado-bovino.jpg'
    },
    { 
      icon: '🐈', 
      name: 'Gatos', 
      count: '80+ productos',
      description: 'Alimentos y accesorios para gatos',
      color: 'from-indigo-500 to-indigo-700',
      image: '/ganado-bovino.jpg'
    },
    { 
      icon: '🌱', 
      name: 'Semillas', 
      count: '100+ productos',
      description: 'Semillas certificadas de alta calidad',
      color: 'from-green-500 to-green-700',
      image: '/semillas-abonos.jpg'
    },
    { 
      icon: '🌿', 
      name: 'Abonos y Fertilizantes', 
      count: '90+ productos',
      description: 'Fertilizantes orgánicos y químicos',
      color: 'from-emerald-500 to-emerald-700',
      image: '/semillas-abonos.jpg'
    },
    { 
      icon: '🛡️', 
      name: 'Pesticidas', 
      count: '70+ productos',
      description: 'Control de plagas agrícolas profesional',
      color: 'from-red-500 to-red-700',
      image: '/pesticidas-herbicidas.jpg'
    },
    { 
      icon: '🌾', 
      name: 'Herbicidas', 
      count: '60+ productos',
      description: 'Control de malezas selectivo',
      color: 'from-lime-500 to-lime-700',
      image: '/pesticidas-herbicidas.jpg'
    },
    { 
      icon: '🚜', 
      name: 'Herramientas para Fumigar', 
      count: '50+ productos',
      description: 'Equipamiento y aplicación profesional',
      color: 'from-blue-500 to-blue-700',
      image: '/herramientas-fumigar.jpg'
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: 'Concentrado Super Engorde Bovino',
      category: 'Ganado Bovino',
      price: 'Cotizar',
      image: '/ganado-bovino.jpg',
      badge: 'Más vendido',
      description: 'Alimento premium para rápido engorde de ganado'
    },
    {
      id: 2,
      name: 'Semilla Certificada de Maíz',
      category: 'Semillas',
      price: 'Cotizar',
      image: '/semillas-abonos.jpg',
      badge: 'Certificado',
      description: 'Alta germinación y rendimiento garantizado'
    },
    {
      id: 3,
      name: 'Fertilizante Orgánico Premium',
      category: 'Abonos y Fertilizantes',
      price: 'Cotizar',
      image: '/semillas-abonos.jpg',
      badge: 'Orgánico',
      description: 'Nutrición completa para cultivos'
    },
    {
      id: 4,
      name: 'Pesticida de Amplio Espectro',
      category: 'Pesticidas',
      price: 'Cotizar',
      image: '/pesticidas-herbicidas.jpg',
      badge: 'Profesional',
      description: 'Control efectivo de plagas agrícolas'
    },
    {
      id: 5,
      name: 'Fumigadora de Mochila Profesional',
      category: 'Herramientas para Fumigar',
      price: 'Cotizar',
      image: '/herramientas-fumigar.jpg',
      badge: 'Equipo',
      description: 'Aplicación precisa y eficiente'
    },
    {
      id: 6,
      name: 'Alimento Balanceado para Caballos',
      category: 'Caballos',
      price: 'Cotizar',
      image: '/caballos-equinos.jpg',
      badge: 'Premium',
      description: 'Nutrición especializada equina'
    }
  ]

  const handleQuickContact = (method: string) => {
    const info = contactInfo.mainStore
    switch (method) {
      case 'phone':
        window.open(`tel:${info.phone}`, '_self')
        break
      case 'whatsapp':
        window.open(`https://wa.me/${info.whatsapp.replace(/[^\d]/g, '')}`, '_blank')
        break
      case 'email':
        window.open(`mailto:${info.email}`, '_blank')
        break
    }
  }

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Botón de volver atrás en la esquina superior izquierda */}
        <div className="absolute top-6 left-6 z-20">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => window.location.href = '/'}
            className="text-white hover:text-green-200 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🌾</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              La Estancia<br/>Productos Agropecuarios
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
              Insumos para todo tipo de ganado, pesticidas, herbicidas, semillas, abonos y herramientas para fumigar. 
              Cuidamos lo que amas, del campo al hogar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-gray-100 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/30 rounded-xl px-8 py-4"
                onClick={() => handleQuickContact('whatsapp')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Cotizar por WhatsApp
              </Button>
              <Link href="/cotizar">
                <Button size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-green-700 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-xl px-8 py-4">
                  <Calculator className="mr-2 h-5 w-5" />
                  Formulario de Cotización
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">Ubicación Principal</div>
                <div className="text-gray-600">{contactInfo.mainStore.address}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">Contacto Directo</div>
                <div className="text-gray-600">{contactInfo.mainStore.phone}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Store className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">Tienda Física</div>
                <div className="text-gray-600">Bogotá, Colombia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Categorías de Productos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encuentra todo lo que necesitas para tu finca o proyecto agrícola
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {farmCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl mb-2">{category.icon}</div>
                      <h3 className="text-xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="mb-4">
                    {category.count}
                  </Badge>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-xl px-4 py-3 border-2 border-green-700/30"
                    onClick={() => handleQuickContact('whatsapp')}
                  >
                    Ver productos disponibles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce nuestros productos más demandados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">
                    {product.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </div>
                    <div className="text-green-600 font-bold">{product.price}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-xl px-4 py-3 border-2 border-green-700/30"
                    onClick={() => handleProductClick(product)}
                  >
                    Solicitar información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Necesitas asesoría personalizada?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Nuestros expertos están listos para ayudarte a encontrar las mejores soluciones para tu finca
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-gray-100 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/30 rounded-xl px-8 py-4"
              onClick={() => handleQuickContact('whatsapp')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chatear con Expertos
            </Button>
            <Link href="/cotizar">
              <Button size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-green-700 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-xl px-8 py-4">
                <Calculator className="mr-2 h-5 w-5" />
                Solicitar Cotización
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>{selectedProduct.name}</CardTitle>
              <CardDescription>{selectedProduct.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    handleQuickContact('whatsapp')
                    closeModal()
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Cotizar por WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={closeModal}
                >
                  Cerrar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}