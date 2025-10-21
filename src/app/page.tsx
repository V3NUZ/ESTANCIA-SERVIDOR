'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, Phone, Mail, MapPin, Clock, ShoppingBag, 
  Heart, Stethoscope, Truck, Star, Users, Shield,
  Dog, Cat, Horse, Cow, Bird, Pig, ChevronRight, ArrowLeft,
  Instagram, Facebook, Twitter
} from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'

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
  address: "Carrera 58 #128B-88, Bogotá, Colombia",
  hours: "Lunes a Sábado: 8:00 AM - 6:00 PM"
}

const brands = [
  {
    name: 'Animal World',
    description: 'Clínica veterinaria y productos premium para mascotas',
    icon: '🐕',
    color: 'from-blue-600 to-blue-800',
    href: '/animalworld',
    features: ['Atención veterinaria presencial', 'Productos premium', 'Servicios especializados'],
    image: '/animal-world-card.jpg'
  },
  {
    name: 'La Estancia',
    description: 'Insumos agropecuarios, semillas y productos para ganadería',
    icon: '🐄',
    color: 'from-green-600 to-green-800',
    href: '/laestancia',
    features: ['Insumos ganadería', 'Semillas certificadas', 'Equipamiento profesional'],
    image: '/la-estancia-card.jpg'
  }
]

const services = [
  {
    icon: Stethoscope,
    title: 'Asesoría Veterinaria',
    description: 'Atención especializada presencial para mascotas en nuestra sede',
    href: '/servicios',
    color: 'text-blue-600'
  },
  {
    icon: ShoppingBag,
    title: 'Productos Premium',
    description: 'Alimentos, accesorios e insumos de alta calidad',
    href: '/productos',
    color: 'text-green-600'
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Envíos en Bogotá y a todo Colombia',
    href: '/contacto',
    color: 'text-orange-600'
  },
  {
    icon: Shield,
    title: 'Garantía de Calidad',
    description: 'Productos certificados y garantizados',
    href: '/contacto',
    color: 'text-purple-600'
  }
]

const stats = [
  { label: 'Clientes Satisfechos', value: '10,000+', icon: Users, color: 'text-blue-600' },
  { label: 'Productos Disponibles', value: '500+', icon: ShoppingBag, color: 'text-green-600' },
  { label: 'Años de Experiencia', value: '15+', icon: Shield, color: 'text-purple-600' }
]

export default function Home() {
  const [email, setEmail] = useState('')

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    alert('¡Gracias por suscribirte! Te enviaremos las mejores ofertas.')
    setEmail('')
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
    <div className="min-h-screen bg-white w-full overflow-x-hidden" suppressHydrationWarning={true}>
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Todo para tus Animales<br/>en Bogotá
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
              Clínica veterinaria presencial para mascotas y productos agropecuarios 
              con semillas certificadas. Calidad y confianza en Bogotá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Explora nuestras marcas especializadas abajo para encontrar exactamente lo que necesitas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Info */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Animal World - Clínica Veterinaria</h3>
                    <p className="text-gray-600 mb-1">📍 {contactInfo.animalWorld.address}</p>
                    <p className="text-gray-600 mb-1">📞 {contactInfo.animalWorld.phone}</p>
                    <p className="text-gray-600 mb-1">💬 {contactInfo.animalWorld.whatsapp}</p>
                    <p className="text-gray-600">📧 {contactInfo.animalWorld.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">La Estancia - Agropecuarios</h3>
                    <p className="text-gray-600 mb-1">📍 {contactInfo.laEstancia.address}</p>
                    <p className="text-gray-600 mb-1">📞 {contactInfo.laEstancia.phone}</p>
                    <p className="text-gray-600 mb-1">💬 {contactInfo.laEstancia.whatsapp}</p>
                    <p className="text-gray-600">📧 {contactInfo.laEstancia.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Elige tu Destino
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dos marcas especializadas para cubrir todas tus necesidades con la máxima calidad en Bogotá
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto w-full">
            {brands.map((brand, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${brand.color} opacity-85`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-7xl mb-3">{brand.icon}</div>
                      <h3 className="text-3xl font-bold">{brand.name}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 bg-white">
                  <p className="text-gray-700 mb-6 text-center text-lg">{brand.description}</p>
                  <div className="space-y-3 mb-8">
                    {brand.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-700">
                        <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href={brand.href} className="flex-1">
                      <Button className={`w-full bg-gradient-to-r ${brand.color} hover:opacity-90 text-white py-3 text-lg font-semibold`}>
                        Explorar {brand.name}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className={`w-10 h-10 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones completas y profesionales para cada tipo de animal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                  <CardContent className="p-8">
                    <Icon className={`w-14 h-14 mx-auto mb-5 ${service.color}`} />
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-4">
            Mantente Informado
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Recibe ofertas exclusivas y consejos profesionales para tus animales
          </p>
          <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder-white/70 backdrop-blur-sm"
              required
            />
            <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Suscribirse
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Animal World - Mascotas</div>
                <div className="text-gray-300">{contactInfo.animalWorld.phone}</div>
                <div className="text-sm text-gray-400">{contactInfo.animalWorld.address}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">La Estancia - Agropecuarios</div>
                <div className="text-gray-300">{contactInfo.laEstancia.phone}</div>
                <div className="text-sm text-gray-400">{contactInfo.laEstancia.address}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://z-cdn-media.chatglm.cn/files/64d94c45-27c9-45e1-8ad3-9bc04b2fa260_logo.jpg?auth_key=1792540140-75a2b2d8c6d347fda35095901213cea9-0-94f7f0e249dcd9265a490ea16dc0a8b3"
                  alt="AnimalWorld La Estancia"
                  className="h-10 w-auto rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">AnimalWorld</h3>
                  <p className="text-green-400 font-semibold">La Estancia</p>
                </div>
              </div>
              <p className="text-gray-400">
                Tu tienda especializada en productos para mascotas y animales de granja en Bogotá
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Enlaces Rápidos</h4>
              <div className="space-y-3 text-gray-400">
                <Link href="/productos" className="block hover:text-white transition-colors">Productos</Link>
                <Link href="/servicios" className="block hover:text-white transition-colors">Servicios</Link>
                <Link href="/contacto" className="block hover:text-white transition-colors">Contacto</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Servicios</h4>
              <div className="space-y-3 text-gray-400">
                <p>Atención veterinaria presencial</p>
                <p>Entrega a domicilio</p>
                <p>Garantía de satisfacción</p>
                <p>Horario: 8AM - 6PM</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Síguenos</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AnimalWorld La Estancia. Todos los derechos reservados. Bogotá, Colombia</p>
          </div>
        </div>
      </footer>
    </div>
  )
}