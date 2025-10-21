'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  ArrowRight, Phone, Mail, MapPin, Clock, ShoppingBag, 
  Heart, Stethoscope, Truck, Star, Users, Shield,
  Dog, Cat, ChevronRight, Store, Instagram, Facebook, Twitter
} from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'

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
  phone: "+57 314 2822728",
  email: "clinica@animalworld.co", 
  whatsapp: "+57 314 2822728",
  address: "Carrera 58 #128B-88, Bogotá, Colombia",
  hours: "Lunes a Sábado: 8:00 AM - 6:00 PM"
}

const brands = [
  {
    name: 'Animal World',
    description: 'Clínica veterinaria y productos premium para mascotas. Atención presencial especializada para el bienestar de tus compañeros.',
    icon: '🐕',
    color: 'from-blue-600 to-blue-800',
    href: '/animalworld',
    features: [
      'Atención veterinaria presencial', 
      'Productos premium para mascotas', 
      'Servicios especializados',
      'Consulta y prevención'
    ],
    image: '/animal-world-card.jpg',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
  },
  {
    name: 'La Estancia',
    description: 'Insumos agropecuarios, semillas certificadas y productos para ganadería. El poder del campo en tus manos.',
    icon: '🐄',
    color: 'from-green-600 to-green-800',
    href: '/laestancia',
    features: [
      'Insumos para ganadería', 
      'Semillas certificadas', 
      'Equipamiento profesional',
      'Asesoría técnica'
    ],
    image: '/la-estancia-card.jpg',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100'
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
  { label: 'Años de Experiencia', value: '15+', icon: Shield, color: 'text-purple-600' },
  { label: 'Categorías', value: '12+', icon: Store, color: 'text-orange-600' }
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

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden" suppressHydrationWarning={true}>
      <Navigation />

      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 leading-tight">
              Cuidamos lo que amas,<br/>del campo al hogar.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Clínica veterinaria presencial para mascotas y productos agropecuarios 
              con semillas certificadas. Calidad y confianza en Bogotá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-blue-800/30 rounded-xl"
                onClick={() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar Marcas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white hover:border-green-700 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white/90 backdrop-blur-sm rounded-xl"
                onClick={() => window.location.href = '/contacto'}
              >
                Contactar Ahora
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6">
              <Store className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
              Elige tu Destino
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Dos marcas especializadas para cubrir todas tus necesidades con la máxima calidad en Bogotá
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
            {brands.map((brand, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-xl bg-white rounded-2xl">
                {/* Brand Header with Image */}
                <div className={`relative h-48 overflow-hidden ${brand.bgColor}`}>
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-30"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${brand.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-2 drop-shadow-lg">{brand.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold drop-shadow-lg">{brand.name}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Brand Content */}
                <CardContent className="p-8 bg-white">
                  <p className="text-gray-700 mb-6 text-center leading-relaxed">{brand.description}</p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {brand.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-700 p-2 rounded-lg bg-gray-50 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-green-50 transition-all duration-300">
                        <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:text-green-600 transition-colors duration-300" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex gap-3">
                    <Link href={brand.href} className="flex-1">
                      <Button className={`w-full bg-gradient-to-r ${brand.color} hover:opacity-90 text-white py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/20 rounded-xl`}>
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Logros
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              La confianza de nuestros clientes nos impulsa a seguir creciendo
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-1">{stat.value}</div>
                  <div className="text-gray-700 font-medium text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones completas y profesionales para cada tipo de necesidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <Icon className={`w-12 h-12 mx-auto mb-4 ${service.color}`} />
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mantente Informado
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
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
            <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 px-6 py-3 rounded-xl border-2 border-gray-200">
              Suscribirse
            </Button>
          </form>
        </div>
      </section>

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

      <footer className="bg-gray-800 text-white py-12">
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
              <p className="text-gray-300">
                Tu petshop y agropecuaria de confianza en Bogotá. 
                15+ años de experiencia cuidando lo que amas.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Animal World</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/animalworld" className="hover:text-white transition-colors">Clínica Veterinaria</Link></li>
                <li><Link href="/productos?category=mascotas" className="hover:text-white transition-colors">Productos Mascotas</Link></li>
                <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">La Estancia</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/laestancia" className="hover:text-white transition-colors">Agropecuarios</Link></li>
                <li><Link href="/productos?category=agro" className="hover:text-white transition-colors">Insumos</Link></li>
                <li><Link href="/cotizar" className="hover:text-white transition-colors">Cotizar</Link></li>
                <li><Link href="/contacto" className="hover:text-white transition-colors">Asesoría</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.hours}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AnimalWorld La Estancia. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm">
              Bogotá, Colombia - Servicios veterinarios y agropecuarios de confianza
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}