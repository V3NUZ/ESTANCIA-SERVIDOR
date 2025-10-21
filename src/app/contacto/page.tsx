'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send, 
  Truck, Package, Users, Calculator, FileText,
  CheckCircle, AlertCircle, Star, Heart, ChevronRight, ArrowLeft
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
    country: "Colombia",
    hours: "Lunes a Sábado: 8:00 AM - 6:00 PM"
  },
  laEstancia: {
    name: "La Estancia - Productos Agropecuarios",
    address: "Avenida Caracas 70A-83, Bogotá, Colombia",
    phone: "+57 310 6871639",
    whatsapp: "+57 310 6871639",
    email: "info@laestancia.co",
    city: "Bogotá",
    country: "Colombia",
    hours: "Lunes a Sábado: 8:00 AM - 6:00 PM"
  },
  // Contacto general
  phone: "+57 314 2822728",
  email: "clinica@animalworld.co", 
  whatsapp: "+57 314 2822728",
  address: "Carrera 58 #128B-88, Bogotá, Colombia",
  hours: "Lunes a Sábado: 8:00 AM - 6:00 PM"
}

const contactMethods = [
  {
    icon: Phone,
    title: 'Animal World',
    subtitle: 'Clínica Veterinaria',
    value: contactInfo.animalWorld.phone,
    description: 'Atención para mascotas',
    action: 'Llamar ahora',
    color: 'bg-blue-600 hover:bg-blue-700',
    address: contactInfo.animalWorld.address,
    email: contactInfo.animalWorld.email
  },
  {
    icon: Phone,
    title: 'La Estancia',
    subtitle: 'Productos Agropecuarios',
    value: contactInfo.laEstancia.phone,
    description: 'Insumos y semillas',
    action: 'Llamar ahora',
    color: 'bg-green-600 hover:bg-green-700',
    address: contactInfo.laEstancia.address,
    email: contactInfo.laEstancia.email
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    subtitle: 'Respuesta rápida',
    value: contactInfo.whatsapp,
    description: 'Consultas inmediatas',
    action: 'Escribir ahora',
    color: 'bg-green-600 hover:bg-green-700'
  },
  {
    icon: Mail,
    title: 'Email',
    value: contactInfo.email,
    description: 'Respuesta en 24 horas',
    action: 'Enviar email',
    color: 'bg-purple-600 hover:bg-purple-700'
  }
]

const quoteTypes = [
  {
    id: 'mascotas',
    name: 'Productos para Mascotas',
    description: 'Alimentos, accesorios y medicamentos',
    icon: '🐕',
    popular: true,
    brand: 'Animal World'
  },
  {
    id: 'semillas',
    name: 'Semillas Certificadas',
    description: 'Maíz, sorgo, pastos y forrajes',
    icon: '🌱',
    popular: true,
    brand: 'La Estancia'
  },
  {
    id: 'ganado',
    name: 'Insumos Ganado',
    description: 'Balanceados, suplementos y medicamentos',
    icon: '🐄',
    brand: 'La Estancia'
  },
  {
    id: 'aves',
    name: 'Productos Aves',
    description: 'Alimentos, incubadoras y equipos',
    icon: '🐓',
    brand: 'La Estancia'
  },
  {
    id: 'porcinos',
    name: 'Insumos Porcinos',
    description: 'Nutrición y manejo especializado',
    icon: '🐷',
    brand: 'La Estancia'
  },
  {
    id: 'equinos',
    name: 'Productos Equinos',
    description: 'Forrajes, herrajes y cuidado',
    icon: '🐴',
    brand: 'La Estancia'
  }
]

const faqs = [
  {
    question: '¿Realizan envíos a todo Colombia?',
    answer: 'Sí, realizamos envíos a todo Colombia. Para pedidos sobre $100.000 el envío es gratuito. Los tiempos de entrega varían entre 24-72 horas según la región.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencia bancaria, tarjetas de crédito/débito, PSE, y también ofrecemos opciones de pago contra entrega para clientes habituales.'
  },
  {
    question: '¿Cómo puedo agendar una cita veterinaria?',
    answer: 'Puedes contactarnos directamente por WhatsApp, teléfono o visitarnos en nuestra sede. Las citas se agendan previa confirmación.'
  },
  {
    question: '¿Ofrecen descuentos por volumen?',
    answer: 'Sí, tenemos descuentos especiales para compras por volumen y para clientes empresariales. Contáctanos para recibir una cotización personalizada.'
  },
  {
    question: '¿Los productos tienen garantía?',
    answer: 'Todos nuestros productos cuentan con garantía del fabricante. Además, ofrecemos garantía de satisfacción: si no está conforme, puede devolver el producto dentro de 30 días.'
  },
  {
    question: '¿Venden semillas certificadas?',
    answer: 'Sí, en La Estancia ofrecemos semillas certificadas de maíz, sorgo, pastos y soya con alta germinación y rendimiento garantizado.'
  }
]

const testimonials = [
  {
    name: 'María González',
    type: 'Cliente Mascotas',
    rating: 5,
    comment: 'Excelente servicio veterinario y productos de calidad para mis mascotas. La atención presencial es muy profesional.',
    avatar: '👩‍🦰'
  },
  {
    name: 'Carlos Rodríguez',
    type: 'Productor Ganadero',
    rating: 5,
    comment: 'Los mejores insumos y semillas para mi ganado. Las semillas de maíz tienen excelente germinación.',
    avatar: '👨‍🌾'
  },
  {
    name: 'Ana Martínez',
    type: 'Avicultora',
    rating: 4,
    comment: 'Muy buenos productos para aves y el servicio de entrega es muy puntual en Bogotá.',
    avatar: '👩‍🏫'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  })
  
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quoteType: '',
    products: '',
    quantity: '',
    frequency: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          type: 'general'
        })
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        alert(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      console.error('Error de red:', error)
      alert('Error de conexión. Intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setQuoteData({
      name: '',
      email: '',
      phone: '',
      company: '',
      quoteType: '',
      products: '',
      quantity: '',
      frequency: '',
      message: ''
    })
    
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const handleQuickContact = (method: string, brand: 'animalWorld' | 'laEstancia' = 'animalWorld') => {
    const info = brand === 'animalWorld' ? contactInfo.animalWorld : contactInfo.laEstancia
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
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
              <h2 className="text-2xl font-bold text-gray-900">Contacto y Cotizaciones</h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium"
                onClick={() => handleQuickContact('phone', 'animalWorld')}
              >
                <Phone className="mr-2 h-4 w-4" />
                {contactInfo.animalWorld.phone}
              </Button>
              <Button 
                variant="outline" 
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium"
                onClick={() => handleQuickContact('whatsapp', 'animalWorld')}
              >
                <span className="mr-2">💬</span>
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contacto y Cotizaciones
          </h2>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Estamos en Bogotá para ayudarte. Contáctanos para consultas veterinarias, 
            cotizaciones de productos o cualquier pregunta sobre nuestros servicios.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => handleQuickContact('phone', 'animalWorld')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Animal World
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold"
              onClick={() => handleQuickContact('phone', 'laEstancia')}
            >
              <Phone className="mr-2 h-5 w-5" />
              La Estancia
            </Button>
          </div>
        </div>
      </div>

      {/* Locations Info */}
      <section className="py-12 px-4 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-600 p-4 rounded-full">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Animal World</h3>
                    <p className="text-blue-600 font-medium">Clínica Veterinaria</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Dirección</p>
                      <p className="text-gray-600">{contactInfo.animalWorld.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <p className="text-gray-600">{contactInfo.animalWorld.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">{contactInfo.animalWorld.whatsapp}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">{contactInfo.animalWorld.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Horario</p>
                      <p className="text-gray-600">{contactInfo.animalWorld.hours}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-600 p-4 rounded-full">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">La Estancia</h3>
                    <p className="text-green-600 font-medium">Productos Agropecuarios</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Dirección</p>
                      <p className="text-gray-600">{contactInfo.laEstancia.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <p className="text-gray-600">{contactInfo.laEstancia.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">{contactInfo.laEstancia.whatsapp}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">{contactInfo.laEstancia.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Horario</p>
                      <p className="text-gray-600">{contactInfo.laEstancia.hours}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-gray-200">
                  <CardContent className="p-6">
                    <div className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1 text-gray-900">{method.title}</h3>
                    {method.subtitle && (
                      <p className="text-sm text-blue-600 font-medium mb-2">{method.subtitle}</p>
                    )}
                    <p className="text-lg font-medium mb-1 text-gray-900">{method.value}</p>
                    <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                    {method.address && (
                      <p className="text-xs text-gray-500 mb-2">{method.address}</p>
                    )}
                    <Button 
                      className={`w-full ${method.color} text-white font-medium`}
                      onClick={() => {
                        if (method.title === 'Animal World') handleQuickContact('phone', 'animalWorld')
                        else if (method.title === 'La Estancia') handleQuickContact('phone', 'laEstancia')
                        else if (method.title === 'WhatsApp') handleQuickContact('whatsapp')
                        else if (method.title === 'Email') handleQuickContact('email')
                      }}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Quote */}
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-gray-200 shadow-lg">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-2xl text-gray-900">Envíanos un Mensaje</CardTitle>
                <CardDescription className="text-gray-600">
                  Responderemos tu consulta dentro de las próximas 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    <span>¡Mensaje enviado con éxito! Te responderemos pronto.</span>
                  </div>
                )}
                
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Nombre completo</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Tu nombre"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="tu@email.com"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Teléfono</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+57 314 2822728"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Tipo de consulta</label>
                      <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Consulta general</SelectItem>
                          <SelectItem value="products">Productos</SelectItem>
                          <SelectItem value="services">Servicios veterinarios</SelectItem>
                          <SelectItem value="emergency">Urgencia veterinaria</SelectItem>
                          <SelectItem value="quote">Cotización</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">Asunto</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="Describe brevemente tu consulta"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">Mensaje</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Describe detalladamente tu consulta o solicitud..."
                      className="h-32 resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quote Form */}
            <Card className="border-gray-200 shadow-lg">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-2xl text-gray-900">Solicitar Cotización</CardTitle>
                <CardDescription className="text-gray-600">
                  Obtén una cotización personalizada para productos y semillas
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Nombre</label>
                      <Input
                        value={quoteData.name}
                        onChange={(e) => setQuoteData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Tu nombre"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Empresa (opcional)</label>
                      <Input
                        value={quoteData.company}
                        onChange={(e) => setQuoteData(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Nombre de tu empresa"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Email</label>
                      <Input
                        type="email"
                        value={quoteData.email}
                        onChange={(e) => setQuoteData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="tu@email.com"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Teléfono</label>
                      <Input
                        type="tel"
                        value={quoteData.phone}
                        onChange={(e) => setQuoteData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+57 314 2822728"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">Tipo de cotización</label>
                    <Select value={quoteData.quoteType} onValueChange={(value) => setQuoteData(prev => ({ ...prev, quoteType: value }))}>
                      <SelectTrigger className="border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Selecciona un tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        {quoteTypes.map(type => (
                          <SelectItem key={type.id} value={type.id}>
                            <div className="flex items-center gap-2">
                              <span>{type.icon}</span>
                              <span>{type.name}</span>
                              {type.popular && <Badge className="ml-2 bg-orange-500 text-white text-xs">Popular</Badge>}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">Productos de interés</label>
                    <Input
                      value={quoteData.products}
                      onChange={(e) => setQuoteData(prev => ({ ...prev, products: e.target.value }))}
                      placeholder="Describe los productos que necesitas (ej: semillas de maíz, balanceado para ganado)"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Cantidad</label>
                      <Input
                        value={quoteData.quantity}
                        onChange={(e) => setQuoteData(prev => ({ ...prev, quantity: e.target.value }))}
                        placeholder="Cantidad aproximada"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Frecuencia</label>
                      <Select value={quoteData.frequency} onValueChange={(value) => setQuoteData(prev => ({ ...prev, frequency: value }))}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500">
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unica">Compra única</SelectItem>
                          <SelectItem value="mensual">Mensual</SelectItem>
                          <SelectItem value="trimestral">Trimestral</SelectItem>
                          <SelectItem value="semestral">Semestral</SelectItem>
                          <SelectItem value="anual">Anual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">Mensaje adicional</label>
                    <Textarea
                      value={quoteData.message}
                      onChange={(e) => setQuoteData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Cualquier información adicional que consideres relevante..."
                      className="h-24 resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Procesando...
                      </>
                    ) : (
                      <>
                        <Calculator className="mr-2 h-4 w-4" />
                        Solicitar Cotización
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes de nuestros clientes en Bogotá
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experiencias reales de quienes confían en nosotros en Bogotá
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.type}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para contactarnos?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Estamos disponibles en Bogotá para ayudarte con tus mascotas y productos agropecuarios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => handleQuickContact('phone', 'animalWorld')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Animal World
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold"
              onClick={() => handleQuickContact('phone', 'laEstancia')}
            >
              <Phone className="mr-2 h-5 w-5" />
              La Estancia
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}