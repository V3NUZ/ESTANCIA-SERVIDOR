/**
 * Página de Cotizaciones - La Estancia
 * 
 * Página especializada para cotizaciones de productos agropecuarios.
 * Formulario completo con categorías, cantidades y contacto directo.
 * 
 * @author Alejandro (V3NUZ)
 * @version 1.0.0
 * @since 2024
 * @copyright AnimalWorld La Estancia © 2025
 */

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  ArrowLeft, Phone, MessageCircle, 
  Calculator, Store, CheckCircle, Send
} from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'

// Información de contacto - La Estancia (solo tienda principal)
// NOTA: Se eliminó el punto de venta falso de Funza
const contactInfo = {
  mainStore: {
    name: "La Estancia - Productos Agropecuarios",
    address: "Avenida Caracas 70A-83, Bogotá, Colombia",
    phone: "+57 310 6871639",
    whatsapp: "+57 310 6871639",
    email: "info@laestancia.co",
    hours: "Lunes a Sábado: 8:00 AM - 6:00 PM"
  }
}

const productCategories = [
  {
    id: 'ganado',
    name: 'Ganado Bovino',
    icon: '🐄',
    description: 'Alimentos, suplementos y medicamentos',
    products: [
      'Concentrados para engorde',
      'Sales minerales',
      'Suplementos vitamínicos',
      'Medicamentos antiparasitarios'
    ]
  },
  {
    id: 'aves',
    name: 'Aves y Corral',
    icon: '🐔',
    description: 'Alimentos balanceados y equipamiento',
    products: [
      'Concentrados para pollos',
      'Alimento para gallinas ponedoras',
      'Suplementos para aves',
      'Equipamiento avícola'
    ]
  },
  {
    id: 'porcinos',
    name: 'Porcinos',
    icon: '🐷',
    description: 'Nutrición y salud porcina',
    products: [
      'Concentrados para cerdos',
      'Preiniciadores y iniciadores',
      'Suplementos de crecimiento',
      'Medicamentos específicos'
    ]
  },
  {
    id: 'equinos',
    name: 'Equinos',
    icon: '🐴',
    description: 'Alimentos y cuidados para caballos',
    products: [
      'Alimentos balanceados',
      'Suplementos vitamínicos',
      'Cuidado de cascos',
      'Equipamiento ecuestre'
    ]
  },
  {
    id: 'insumos',
    name: 'Insumos Agrícolas',
    icon: '🌱',
    description: 'Semillas y fertilizantes',
    products: [
      'Semillas certificadas',
      'Fertilizantes orgánicos',
      'Agroquímicos',
      'Equipamiento agrícola'
    ]
  }
]

export default function CotizarPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    farm: '',
    category: '',
    products: [] as string[],
    quantity: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleProductToggle = (product: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleWhatsApp = () => {
    const message = `Hola, soy ${formData.name} y quiero cotizar productos para ${formData.category || 'mi finca'}. Teléfono: ${formData.phone}`
    window.open(`https://wa.me/3106871639?text=${encodeURIComponent(message)}`, '_blank')
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Solicitud de Cotización Enviada!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Nos pondremos en contacto contigo a la brevedad posible con tu cotización personalizada.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </Button>
              <Link href="/laestancia">
                <Button variant="outline">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a La Estancia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/laestancia" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a La Estancia
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Solicitar Cotización
            </h1>
            <p className="text-xl text-gray-600">
              Cuéntanos qué necesitas y te prepararemos una cotización personalizada para tu finca
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-blue-600" />
                  Formulario de Cotización
                </CardTitle>
                <CardDescription>
                  Completa todos los campos para recibir una cotización precisa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Personal */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de la finca
                      </label>
                      <Input
                        name="farm"
                        value={formData.farm}
                        onChange={handleInputChange}
                        placeholder="Nombre de tu finca"
                      />
                    </div>
                  </div>

                  {/* Categoría */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoría de productos *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecciona una categoría</option>
                      {productCategories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.icon} {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Productos */}
                  {formData.category && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Productos de interés
                      </label>
                      <div className="grid md:grid-cols-2 gap-2">
                        {productCategories
                          .find(cat => cat.id === formData.category)
                          ?.products.map(product => (
                            <label key={product} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={formData.products.includes(product)}
                                onChange={() => handleProductToggle(product)}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="text-sm text-gray-700">{product}</span>
                            </label>
                          ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cantidad aproximada
                    </label>
                    <Input
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="Ej: 50 sacos, 100 unidades, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje adicional
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Cuéntanos más sobre tus necesidades..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Solicitud
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="bg-green-600 text-white hover:bg-green-700 border-green-600"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Store className="w-6 h-6 text-green-600" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {contactInfo.mainStore.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-1">
                    📍 {contactInfo.mainStore.address}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    📞 {contactInfo.mainStore.phone}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    💬 {contactInfo.mainStore.whatsapp}
                  </p>
                  <p className="text-gray-600 text-sm">
                    📧 {contactInfo.mainStore.email}
                  </p>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-3">
                    ⏰ {contactInfo.mainStore.hours}
                  </p>
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Cotizar por WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>¿Por qué elegirnos?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-gray-900">Precios competitivos</h5>
                      <p className="text-sm text-gray-600">Las mejores ofertas del mercado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-gray-900">Calidad garantizada</h5>
                      <p className="text-sm text-gray-600">Productos certificados y de confianza</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-gray-900">Entrega rápida</h5>
                      <p className="text-sm text-gray-600">Distribución en todo Colombia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}