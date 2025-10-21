'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send, 
  CheckCircle, ArrowLeft
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
    hours: "Lunes a Sábado: 8:00 AM - 6:00 PM",
    description: "Atención veterinaria especializada para mascotas"
  },
  laEstancia: {
    name: "La Estancia - Productos Agropecuarios",
    address: "Avenida Caracas 70A-83, Bogotá, Colombia",
    phone: "+57 310 6871639",
    whatsapp: "+57 310 6871639",
    email: "info@laestancia.co",
    city: "Bogotá",
    country: "Colombia",
    hours: "Lunes a Sábado: 8:00 AM - 6:00 PM",
    description: "Insumos y semillas certificadas para el agro"
  }
}

const contactMethods = [
  {
    icon: Phone,
    title: 'Llamadas',
    description: 'Habla directamente con nuestros expertos',
    action: 'Llamar ahora',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Respuesta rápida en minutos',
    action: 'Escribir ahora',
    color: 'bg-green-600 hover:bg-green-700'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Respuesta en 24 horas',
    action: 'Enviar email',
    color: 'bg-purple-600 hover:bg-purple-700'
  },
  {
    icon: MapPin,
    title: 'Visítanos',
    description: 'Atención presencial en Bogotá',
    action: 'Ver dirección',
    color: 'bg-orange-600 hover:bg-orange-700'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
          message: ''
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
      case 'location':
        window.open(`https://maps.google.com/?q=${encodeURIComponent(info.address)}`, '_blank')
        break
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost"
                size="icon"
                onClick={() => window.location.href = '/'}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="h-8 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Contacto</h1>
                <p className="text-sm text-gray-600">Estamos aquí para ayudarte</p>
              </div>
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
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contáctanos
          </h2>
          <p className="text-xl opacity-95 max-w-3xl mx-auto mb-8">
            Estamos en Bogotá para ayudarte con atención veterinaria especializada y 
            productos agropecuarios de calidad. Tu confianza es nuestra prioridad.
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
              className="border-white bg-white/10 text-white backdrop-blur-sm px-8 py-4 text-lg font-semibold hover:bg-white/20"
              onClick={() => handleQuickContact('phone', 'laEstancia')}
            >
              <Phone className="mr-2 h-5 w-5" />
              La Estancia
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vías de Contacto
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elige la forma que prefieras comunicarte con nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-6">{method.description}</p>
                    <Button 
                      className={`w-full ${method.color} text-white font-medium`}
                      onClick={() => {
                        if (method.title === 'Llamadas') handleQuickContact('phone')
                        else if (method.title === 'WhatsApp') handleQuickContact('whatsapp')
                        else if (method.title === 'Email') handleQuickContact('email')
                        else if (method.title === 'Visítanos') handleQuickContact('location')
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

      {/* Locations Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestras Sedes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dos ubicaciones estratégicas en Bogotá para servirte mejor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
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
                <p className="text-gray-600 mb-6">{contactInfo.animalWorld.description}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Dirección</p>
                      <p className="text-gray-600">{contactInfo.animalWorld.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <p className="text-gray-600">{contactInfo.animalWorld.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">{contactInfo.animalWorld.whatsapp}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">{contactInfo.animalWorld.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Horario</p>
                      <p className="text-gray-600">{contactInfo.animalWorld.hours}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-100">
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleQuickContact('phone', 'animalWorld')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Llamar
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      onClick={() => handleQuickContact('whatsapp', 'animalWorld')}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow">
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
                <p className="text-gray-600 mb-6">{contactInfo.laEstancia.description}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Dirección</p>
                      <p className="text-gray-600">{contactInfo.laEstancia.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <p className="text-gray-600">{contactInfo.laEstancia.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">{contactInfo.laEstancia.whatsapp}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">{contactInfo.laEstancia.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Horario</p>
                      <p className="text-gray-600">{contactInfo.laEstancia.hours}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-green-100">
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handleQuickContact('phone', 'laEstancia')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Llamar
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      onClick={() => handleQuickContact('whatsapp', 'laEstancia')}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Envíanos un Mensaje
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Responderemos tu consulta a la brevedad posible
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-gray-600">Nos pondremos en contacto contigo pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre completo *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Tu nombre"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="tu@email.com"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+57 300 000 0000"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Asunto *
                        </label>
                        <Input
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          placeholder="¿Cuál es tu consulta?"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Mensaje
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              ¿Emergencia Veterinaria?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Estamos disponibles 24/7 para urgencias veterinarias. No dudes en contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => handleQuickContact('phone', 'animalWorld')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar Emergencia
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white bg-white/10 text-white backdrop-blur-sm px-8 py-4 text-lg font-semibold hover:bg-white/20"
                onClick={() => handleQuickContact('whatsapp', 'animalWorld')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Emergencia
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}