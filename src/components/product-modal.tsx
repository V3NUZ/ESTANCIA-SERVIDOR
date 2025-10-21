'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  X, Phone, MessageCircle, Mail, 
  ShoppingBag, Star, MapPin, Clock
} from 'lucide-react'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: number
    name: string
    price: string
    description: string
    image: string
    category: string
    rating?: number
    reviews?: number
    badge?: string
  }
  brand: 'animalworld' | 'laestancia'
}

const brandInfo = {
  animalworld: {
    name: 'Animal World',
    phone: '+57 314 2822728',
    whatsapp: '573142827288',
    email: 'clinica@animalworld.co',
    address: 'Carrera 58 #128b-88, Bogotá, Colombia',
    color: 'blue'
  },
  laestancia: {
    name: 'La Estancia',
    phone: '+57 310 6871639',
    whatsapp: '573106871639',
    email: 'info@laestancia.co',
    address: 'Avenida Caracas 70A-89, Bogotá, Colombia',
    color: 'green'
  }
}

export function ProductModal({ isOpen, onClose, product, brand }: ProductModalProps) {
  const [isClosing, setIsClosing] = useState(false)
  const info = brandInfo[brand]

  if (!isOpen) return null

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 300)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `¡Hola! Quiero comprar este producto de ${info.name}:\n\n` +
      `📦 Producto: ${product.name}\n` +
      `💰 Precio: ${product.price}\n` +
      `📝 Descripción: ${product.description}\n\n` +
      `Por favor, indíqueme los pasos para realizar la compra.`
    )
    window.open(`https://wa.me/${info.whatsapp}?text=${message}`, '_blank')
    handleClose()
  }

  const handlePhone = () => {
    window.open(`tel:${info.phone}`, '_self')
    handleClose()
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(`Consulta sobre producto: ${product.name}`)
    const body = encodeURIComponent(
      `Hola,\n\n` +
      `Estoy interesado en el siguiente producto:\n\n` +
      `Producto: ${product.name}\n` +
      `Precio: ${product.price}\n` +
      `Descripción: ${product.description}\n\n` +
      `¿Podrían darme más información sobre cómo realizar la compra?\n\n` +
      `Gracias.`
    )
    window.open(`mailto:${info.email}?subject=${subject}&body=${body}`, '_blank')
    handleClose()
  }

  const renderStars = (rating?: number) => {
    if (!rating) return null
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className={`relative w-full max-w-2xl transform transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <Card className="bg-white shadow-2xl border-0">
          {/* Header */}
          <CardHeader className="pb-4 border-b">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{product.image}</div>
                <div>
                  <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{info.name}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="h-8 w-8 rounded-full hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            {/* Product Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {product.badge && (
                    <Badge className={`bg-${info.color}-100 text-${info.color}-700`}>
                      {product.badge}
                    </Badge>
                  )}
                  {product.rating && (
                    <div className="flex items-center gap-1">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                  )}
                </div>
                <div className="text-2xl font-bold text-gray-900">{product.price}</div>
              </div>
              
              <p className="text-gray-700">{product.description}</p>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShoppingBag className="h-4 w-4" />
                <span>Categoría: {product.category}</span>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Formas de Contacto</h3>
              
              <div className="grid gap-3">
                <Button
                  onClick={handleWhatsApp}
                  className={`w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-3 py-3`}
                >
                  <MessageCircle className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm opacity-90">Respuesta rápida</div>
                  </div>
                </Button>

                <Button
                  onClick={handlePhone}
                  variant="outline"
                  className={`w-full border-${info.color}-300 text-${info.color}-700 hover:bg-${info.color}-50 flex items-center gap-3 py-3`}
                >
                  <Phone className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Llamar Ahora</div>
                    <div className="text-sm opacity-70">{info.phone}</div>
                  </div>
                </Button>

                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className={`w-full border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-3 py-3`}
                >
                  <Mail className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Enviar Email</div>
                    <div className="text-sm opacity-70">Consulta detallada</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Store Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>{info.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Lunes a Sábado: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}