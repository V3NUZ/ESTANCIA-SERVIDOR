'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Heart, Stethoscope, Clock, Phone, Mail, MapPin, Calendar,
  Dog, Cat, Star, CheckCircle,
  Users, Award, Shield, Truck, Camera, Pill,
  ChevronRight, Video, FileText, Ambulance, MessageCircle, ArrowLeft
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

const veterinaryServices = [
  {
    id: 1,
    name: 'Consulta General Veterinaria',
    category: 'mascotas',
    price: 'Consulta',
    duration: '30 min',
    description: 'Revisión completa de salud para tu mascota en nuestra sede',
    features: ['Examen físico completo', 'Diagnóstico', 'Recomendaciones', 'Vacunación'],
    icon: Stethoscope,
    popular: true,
    available: ['perros', 'gatos'],
    brand: 'Animal World',
    location: 'presencial'
  },
  {
    id: 2,
    name: 'Asesoría Nutricional',
    category: 'mascotas',
    price: 'Consulta',
    duration: '30 min',
    description: 'Evaluación nutricional personalizada para tu mascota',
    features: ['Evaluación dietética', 'Plan alimenticio', 'Recomendaciones', 'Seguimiento'],
    icon: Heart,
    available: ['perros', 'gatos'],
    brand: 'Animal World',
    location: 'presencial'
  },
  {
    id: 3,
    name: 'Vacunación Completa',
    category: 'mascotas',
    price: 'Consulta',
    duration: '20 min',
    description: 'Esquema completo de vacunación para tu mascota',
    features: ['Vacunas múltiples', 'Cartilla sanitaria', 'Recordatorio', 'Certificado'],
    icon: Shield,
    available: ['perros', 'gatos'],
    brand: 'Animal World',
    location: 'presencial'
  },
  {
    id: 4,
    name: 'Desparasitación',
    category: 'mascotas',
    price: 'Consulta',
    duration: '15 min',
    description: 'Tratamiento desparasitante interno y externo',
    features: ['Desparasitación interna', 'Desparasitación externa', 'Control de pulgas y garrapatas', 'Prevención'],
    icon: Pill,
    available: ['perros', 'gatos'],
    brand: 'Animal World',
    location: 'presencial'
  },
  {
    id: 5,
    name: 'Baño y Estética',
    category: 'mascotas',
    price: 'Servicio',
    duration: '1 hora',
    description: 'Servicio completo de higiene y estética canina y felina',
    features: ['Baño medicinal', 'Corte de pelo', 'Limpieza de oídos', 'Corte de uñas'],
    icon: '🧼',
    available: ['perros', 'gatos'],
    brand: 'Animal World',
    location: 'presencial'
  },
  {
    id: 6,
    name: 'Laboratorio Clínico',
    category: 'mascotas',
    price: 'Exámenes',
    duration: '30 min',
    description: 'Análisis de laboratorio para diagnóstico preciso',
    features: ['Análisis de sangre', 'Análisis de orina', 'Análisis de heces', 'Pruebas rápidas'],
    icon: '🔬',
    available: ['perros', 'gatos'],
    brand: 'Animal World',
    location: 'presencial'
  }
]

const specialists = [
  {
    id: 1,
    name: 'Dr. Carlos Martínez',
    specialty: 'Medicina General Veterinaria',
    experience: '10 años',
    rating: 4.9,
    patients: 2500,
    image: '👨‍⚕️',
    available: ['perros', 'gatos'],
    languages: ['Español', 'Inglés']
  },
  {
    id: 2,
    name: 'Dra. María González',
    specialty: 'Cirugía Veterinaria',
    experience: '8 años',
    rating: 4.8,
    patients: 1800,
    image: '👩‍⚕️',
    available: ['perros', 'gatos'],
    languages: ['Español']
  },
  {
    id: 3,
    name: 'Dr. Roberto Silva',
    specialty: 'Nutrición Animal',
    experience: '12 años',
    rating: 4.9,
    patients: 2200,
    image: '👨‍⚕️',
    available: ['perros', 'gatos'],
    languages: ['Español', 'Portugués']
  },
  {
    id: 4,
    name: 'Dra. Ana López',
    specialty: 'Medicina Preventiva',
    experience: '6 años',
    rating: 4.7,
    patients: 1500,
    image: '👩‍⚕️',
    available: ['perros', 'gatos'],
    languages: ['Español']
  }
]

const emergencyServices = [
  {
    name: 'Emergencia Veterinaria',
    phone: '+57 314 2822728',
    description: 'Atención de urgencias para mascotas',
    icon: Ambulance,
    color: 'bg-red-600',
    brand: 'Animal World'
  },
  {
    name: 'WhatsApp Consultas',
    phone: '+57 314 2822728',
    description: 'Consultas rápidas por WhatsApp',
    icon: MessageCircle,
    color: 'bg-green-600',
    brand: 'Animal World'
  },
  {
    name: 'Agendar Cita',
    phone: '+57 314 2822728',
    description: 'Reserva tu cita presencial',
    icon: Calendar,
    color: 'bg-blue-600',
    brand: 'Animal World'
  }
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('mascotas')
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const filteredServices = veterinaryServices.filter(service => 
    service.category === selectedCategory
  )

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

  const handleContactClick = (serviceName: string, method: 'whatsapp' | 'phone' | 'email', brand: 'animalWorld' | 'laEstancia' = 'animalWorld') => {
    const info = brand === 'animalWorld' ? contactInfo.animalWorld : contactInfo.laEstancia
    const message = `Hola! Estoy interesado en el servicio: ${serviceName}`
    
    switch (method) {
      case 'whatsapp':
        window.open(`https://wa.me/${info.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`, '_blank')
        break
      case 'phone':
        window.open(`tel:${info.phone}`, '_self')
        break
      case 'email':
        window.open(`mailto:${info.email}?subject=Consulta sobre servicio: ${serviceName}&body=${encodeURIComponent(message)}`, '_blank')
        break
    }
  }

  const getBrandColor = (brand: string) => {
    return brand === 'Animal World' ? 'bg-blue-600' : 'bg-green-600'
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
              <h2 className="text-2xl font-bold text-gray-900">Servicios Veterinarios</h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium"
                onClick={() => window.open(`tel:${contactInfo.animalWorld.phone}`, '_self')}
              >
                <Phone className="mr-2 h-4 w-4" />
                {contactInfo.animalWorld.phone}
              </Button>
              <Button 
                variant="outline" 
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium"
                onClick={() => window.open(`https://wa.me/${contactInfo.animalWorld.whatsapp.replace(/[^\d]/g, '')}`, '_blank')}
              >
                <span className="mr-2">💬</span>
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Servicios Veterinarios Presenciales
          </h2>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Atención especializada para mascotas en nuestra sede de Bogotá. 
            Contamos con profesionales certificados y equipamiento de última generación.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open(`tel:${contactInfo.animalWorld.phone}`, '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora: {contactInfo.animalWorld.phone}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white bg-white/10 text-white backdrop-blur-sm px-8 py-4 text-lg font-semibold"
              onClick={() => window.open(`https://wa.me/${contactInfo.animalWorld.whatsapp.replace(/[^\d]/g, '')}`, '_blank')}
            >
              <span className="mr-2">💬</span>
              WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Location Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto w-full">
          <Card className="border-blue-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-6">
                <div className="bg-blue-600 p-4 rounded-full">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visítanos en nuestra sede</h3>
                  <p className="text-lg text-gray-700">{contactInfo.animalWorld.address}</p>
                  <p className="text-gray-600">Horario: Lunes a Sábado de 8:00 AM a 6:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contacto Directo</h2>
            <p className="text-lg text-gray-600">
              Comunícate directamente con nuestra clínica veterinaria
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {emergencyServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button 
                      className={`w-full ${service.color} hover:opacity-90 text-white font-medium`}
                      onClick={() => window.open(`tel:${service.phone}`, '_self')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {service.phone}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios Veterinarios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Atención especializada para perros y gatos en Bogotá
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredServices.map((service) => {
              const Icon = typeof service.icon === 'string' ? null : service.icon
              return (
                <Card 
                  key={service.id} 
                  className={`hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-200 bg-white ${
                    selectedService === service.id ? 'ring-2 ring-blue-600' : ''
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`${getBrandColor(service.brand)} text-white`}>
                        {service.brand}
                      </Badge>
                      {service.popular && (
                        <Badge className="bg-orange-500 text-white">Popular</Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-center mb-3">
                      {typeof Icon === 'string' ? <span className="text-4xl">{Icon}</span> : Icon && <Icon className="h-10 w-10 text-blue-600" />}
                    </div>
                    <CardTitle className="text-lg text-gray-900 text-center">{service.name}</CardTitle>
                    <CardDescription className="text-center text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-blue-600">
                        {service.price}
                      </span>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-gray-300 text-gray-700">
                          {service.duration}
                        </Badge>
                        <Badge variant="outline" className="border-green-600 text-green-700">
                          Presencial
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {service.available.map((animal, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-700">
                          {animal.charAt(0).toUpperCase() + animal.slice(1)}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
                        onClick={() => handleContactClick(service.name, 'whatsapp', 'animalWorld')}
                      >
                        <span className="mr-2">💬</span>
                        Consultar por WhatsApp
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          onClick={() => handleContactClick(service.name, 'phone', 'animalWorld')}
                        >
                          <Phone className="mr-1 h-3 w-3" />
                          Llamar
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          onClick={() => handleContactClick('Agendar cita', 'phone', 'animalWorld')}
                        >
                          <Calendar className="mr-1 h-3 w-3" />
                          Agendar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Veterinarios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesionales certificados con amplia experiencia en medicina veterinaria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {specialists.map((specialist) => (
              <Card key={specialist.id} className="text-center hover:shadow-lg transition-shadow border-gray-200">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{specialist.image}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{specialist.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{specialist.specialty}</p>
                  <p className="text-sm text-gray-600 mb-3">{specialist.experience} experiencia</p>
                  
                  <div className="flex items-center justify-center mb-3">
                    {renderStars(specialist.rating)}
                    <span className="ml-2 text-sm text-gray-600">({specialist.rating})</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">{specialist.patients}</span> pacientes atendidos
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {specialist.available.map((animal, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-700">
                          {animal}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                      onClick={() => handleContactClick(`Consulta con ${specialist.name}`, 'whatsapp', 'animalWorld')}
                    >
                      Consultar ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas Atención Veterinaria?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Visítanos en nuestra sede o agenda tu cita. Estamos para cuidar de tus mascotas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open(`tel:${contactInfo.animalWorld.phone}`, '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white bg-white/10 text-white backdrop-blur-sm px-8 py-4 text-lg font-semibold"
              onClick={() => window.open(`https://wa.me/${contactInfo.animalWorld.whatsapp.replace(/[^\d]/g, '')}`, '_blank')}
            >
              <span className="mr-2">💬</span>
              WhatsApp
            </Button>
          </div>
          <div className="mt-6">
            <p className="text-lg opacity-90">
              📍 {contactInfo.animalWorld.address}
            </p>
            <p className="text-lg opacity-90">
              🕐 Lunes a Sábado: 8:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}