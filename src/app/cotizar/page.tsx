'use client'

/**
 * Página de Cotizaciones - La Estancia
 * 
 * Esta página permite a los clientes solicitar cotizaciones personalizadas para:
 * - Productos agropecuarios (ganado, aves, porcinos, equinos)
 * - Insumos agrícolas (semillas, fertilizantes, agroquímicos)
 * 
 * El formulario envía la información directamente por WhatsApp
 * 
 * @author AnimalWorld La Estancia Team
 * @version 2.0.0
 * @since 2025-10-21
 */

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { 
  ArrowLeft, Phone, MessageCircle, 
  Calculator, Store, CheckCircle, Send
} from 'lucide-react'

// Información de contacto - La Estancia (solo tienda principal)
// NOTA: Se eliminó el punto de venta falso de Funza
const contactInfo = {
  mainStore: {
    name: "La Estancia - Productos Agropecuarios",
    address: "Avenida Caracas 70A-89, Bogotá, Colombia",
    phone: "+57 310 6871639",
    whatsapp: "+57 310 6871639",
    email: "contacto@laestancia.co"
  }
}

// Categorías de productos disponibles para cotización
// Incluye Insumos Agrícolas con semillas (categoría restaurada)
const productCategories = [
  { id: 'ganado', name: 'Ganado Bovino', icon: '🐄', description: 'Concentrados, suplementos, medicamentos' },
  { id: 'aves', name: 'Aves', icon: '🐓', description: 'Balanceados, incubadoras, vitaminas' },
  { id: 'porcinos', name: 'Porcinos', icon: '🐷', description: 'Nutrición especializada' },
  { id: 'equinos', name: 'Equinos', icon: '🐴', description: 'Forrajes, herrajes, cuidado' },
  { id: 'agricola', name: 'Insumos Agrícolas', icon: '🌱', description: 'Semillas, fertilizantes, agroquímicos' }
]

export default function CotizarPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    farmName: '',
    location: '',
    category: '',
    products: '',
    quantity: '',
    frequency: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Crear mensaje para WhatsApp
      const message = `*NUEVA SOLICITUD DE COTIZACIÓN - LA ESTANCIA*%0A%0A` +
        `*Datos del Cliente:*%0A` +
        `Nombre: ${formData.name}%0A` +
        `Email: ${formData.email}%0A` +
        `Teléfono: ${formData.phone}%0A` +
        `Finca: ${formData.farmName}%0A` +
        `Ubicación: ${formData.location}%0A%0A` +
        `*Detalles de la Cotización:*%0A` +
        `Categoría: ${formData.category}%0A` +
        `Productos: ${formData.products}%0A` +
        `Cantidad: ${formData.quantity}%0A` +
        `Frecuencia: ${formData.frequency}%0A%0A` +
        `*Mensaje adicional:*%0A${formData.message}`

      // Enviar por WhatsApp
      window.open(`https://wa.me/${contactInfo.mainStore.whatsapp.replace(/[^\d]/g, '')}?text=${message}`, '_blank')
      
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        farmName: '',
        location: '',
        category: '',
        products: '',
        quantity: '',
        frequency: '',
        message: ''
      })
    } catch (error) {
      console.error('Error al enviar cotización:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.location.href = '/laestancia'}
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
              <span className="block text-xs text-emerald-500 font-medium">Solicitud de Cotización</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open(`tel:${contactInfo.mainStore.phone}`, '_self')}
            >
              <Phone className="mr-2 h-4 w-4" />
              {contactInfo.mainStore.phone}
            </Button>
            <Button 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              onClick={() => window.open(`https://wa.me/${contactInfo.mainStore.whatsapp.replace(/[^\d]/g, '')}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-green-600 p-4 rounded-full">
              <Calculator className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Solicita tu <span className="text-emerald-600">Cotización</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Cuéntanos qué necesitas y te prepararemos una cotización personalizada para tu finca o proyecto agropecuario
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center text-green-900 mb-8">
            ¿Qué tipo de productos necesitas?
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {productCategories.map((category) => (
              <Card 
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                  formData.category === category.name 
                    ? 'border-green-600 bg-green-50' 
                    : 'border-green-200 hover:border-green-400'
                }`}
                onClick={() => setFormData({...formData, category: category.name})}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-sm text-green-900">{category.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-xl border-green-200">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Formulario de Cotización
              </CardTitle>
              <CardDescription className="text-green-100">
                Completa todos los campos para recibir una cotización precisa
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">¡Cotización Enviada!</h3>
                  <p className="text-gray-600 mb-6">
                    Nos pondremos en contacto contigo pronto con tu cotización personalizada.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Enviar otra cotización
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Personal */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-900">Información Personal</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nombre completo *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Teléfono *</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+57 300 000 0000"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Nombre de la Finca</label>
                        <Input
                          name="farmName"
                          value={formData.farmName}
                          onChange={handleInputChange}
                          placeholder="Nombre de tu finca (opcional)"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Ubicación *</label>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Ciudad, Departamento"
                        required
                      />
                    </div>
                  </div>

                  {/* Detalles de la Cotización */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-900">Detalles de la Cotización</h3>
                    <div>
                      <label className="block text-sm font-medium mb-2">Categoría de productos *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      >
                        <option value="">Selecciona una categoría</option>
                        {productCategories.map((cat) => (
                          <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Productos que necesitas *</label>
                      <Textarea
                        name="products"
                        value={formData.products}
                        onChange={handleInputChange}
                        placeholder="Describe los productos específicos que necesitas (ej: Concentrado para ganado lechero, 50 sacos de 40kg)"
                        rows={3}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Cantidad / Frecuencia</label>
                        <Input
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          placeholder="Ej: 100 sacos mensuales"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Frecuencia de compra</label>
                        <select
                          name="frequency"
                          value={formData.frequency}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Selecciona frecuencia</option>
                          <option value="Única compra">Única compra</option>
                          <option value="Mensual">Mensual</option>
                          <option value="Bimestral">Bimestral</option>
                          <option value="Trimestral">Trimestral</option>
                          <option value="Semestral">Semestral</option>
                          <option value="Anual">Anual</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensaje adicional</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Cualquier información adicional que consideres relevante para tu cotización"
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Cotización'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 bg-green-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <Store className="w-12 h-12 mx-auto mb-4 text-green-300" />
            <h3 className="text-xl font-bold mb-2">Tienda Principal - La Estancia</h3>
            <p className="text-green-200 mb-2">{contactInfo.mainStore.address}</p>
            <p className="text-green-200 mb-2">{contactInfo.mainStore.phone}</p>
            <p className="text-green-200">{contactInfo.mainStore.email}</p>
          </div>
        </div>
      </section>
    </div>
  )
}