'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, ArrowRight, Phone, Mail, MapPin, 
  ShoppingBag, Truck, Shield, CheckCircle,
  MessageCircle, User, CreditCard, Package, Plus, Minus, Trash2
} from 'lucide-react'
import Link from 'next/link'
import { cartService, Cart, CartItem } from '@/lib/cart'

export default function Comprar() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [cart, setCart] = useState<Cart>({ items: [], total: '$0' })
  const [isClient, setIsClient] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Bogotá',
    department: 'Cundinamarca',
    farmName: '',
    message: ''
  })

  useEffect(() => {
    setIsClient(true)
    // Obtener el carrito
    const cartData = cartService.getCart()
    setCart(cartData)
    
    // Si el carrito está vacío, redirigir a La Estancia
    if (cartData.items.length === 0) {
      router.push('/laestancia')
    }

    // Escuchar cambios en el carrito
    const handleCartUpdate = () => {
      setCart(cartService.getCart())
    }

    window.addEventListener('cartUpdated', handleCartUpdate)
    return () => window.removeEventListener('cartUpdated', handleCartUpdate)
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    cartService.updateQuantity(productId, newQuantity)
  }

  const handleRemoveItem = (productId: string) => {
    cartService.removeFromCart(productId)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.items.length === 0) return

    // Crear mensaje de WhatsApp con todos los productos del carrito
    const productsList = cart.items.map(item => 
      `• ${item.name} - Cantidad: ${item.quantity} - ${item.price}`
    ).join('%0A')

    const message = `*NUEVO PEDIDO - LA ESTANCIA*%0A%0A` +
      `*Datos del Cliente:*%0A` +
      `Nombre: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Teléfono: ${formData.phone}%0A` +
      `Dirección: ${formData.address}%0A` +
      `Ciudad: ${formData.city}, ${formData.department}%0A` +
      `Finca: ${formData.farmName}%0A%0A` +
      `*Pedido:*%0A${productsList}%0A%0A` +
      `*Total: ${cart.total}*%0A%0A` +
      `*Mensaje adicional:*%0A${formData.message}`

    window.open(`https://wa.me/573106871639?text=${message}`, '_blank')
  }

  const steps = [
    { id: 1, title: 'Resumen', icon: Package },
    { id: 2, title: 'Información', icon: User },
    { id: 3, title: 'Contacto', icon: MessageCircle }
  ]

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando información del carrito...</p>
        </div>
      </div>
    )
  }

  // No renderizar el contenido hasta que estemos en el cliente
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando información del carrito...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => router.push('/laestancia')}
                className="text-green-700 hover:text-green-600"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">La Estancia</h1>
                  <p className="text-sm text-green-600">Proceso de Compra</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-800">Paso {currentStep} de 3</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                    isActive 
                      ? 'border-green-600 bg-green-600 text-white' 
                      : isCompleted 
                        ? 'border-green-600 bg-green-600 text-white'
                        : 'border-gray-300 bg-white text-gray-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="ml-3">
                    <p className={`text-sm font-medium ${
                      isActive ? 'text-green-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 ${
                      isCompleted ? 'bg-green-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-green-600" />
                      Resumen del Pedido
                    </CardTitle>
                    <CardDescription>
                      Revisa los detalles de tu compra
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Lista de productos del carrito */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Productos en tu Carrito</h4>
                      {cart.items.map((item) => (
                        <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start gap-4">
                            <div className="text-3xl">{item.icon}</div>
                            <div className="flex-1">
                              <h3 className="font-semibold">{item.name}</h3>
                              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                              <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center border rounded-md">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                      className="h-8 w-8 p-0"
                                    >
                                      <Minus className="h-3 w-3" />
                                    </Button>
                                    <span className="px-3 py-1 text-sm font-medium">
                                      {item.quantity}
                                    </span>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                      className="h-8 w-8 p-0"
                                    >
                                      <Plus className="h-3 w-3" />
                                    </Button>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="text-red-500 hover:text-red-700 h-8 w-8 p-0"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                                <div className="text-lg font-bold text-green-600">
                                  {item.price}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total del Pedido:</span>
                        <span className="text-2xl font-bold text-green-600">{cart.total}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Información de Entrega</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Truck className="w-4 h-4 text-gray-400" />
                          <span>Entrega en Bogotá y zonas aledañas</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Shield className="w-4 h-4 text-gray-400" />
                          <span>Productos certificados</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">⚠️ Importante</h4>
                      <p className="text-sm text-blue-800">
                        Actualmente no procesamos pagos electrónicos. Al finalizar este proceso, 
                        nos pondremos en contacto contigo para coordinar el pago y la entrega.
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        onClick={handleNextStep}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Continuar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5 text-green-600" />
                      Información de Contacto
                    </CardTitle>
                    <CardDescription>
                      Ingresa tus datos para poder contactarte
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
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

                    <div>
                      <label className="block text-sm font-medium mb-2">Dirección de Entrega *</label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Calle #, Ciudad, Departamento"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ciudad *</label>
                        <Input
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Bogotá"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Departamento *</label>
                        <Input
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          placeholder="Cundinamarca"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        variant="outline" 
                        onClick={handlePrevStep}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Anterior
                      </Button>
                      <Button 
                        onClick={handleNextStep}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Continuar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      Finalizar Compra
                    </CardTitle>
                    <CardDescription>
                      Revisa tu información y envía tu pedido
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                      <h4 className="font-semibold">Resumen del Pedido</h4>
                      <div className="space-y-3">
                        {cart.items.map((item, index) => (
                          <div key={item.id} className="border-b pb-2 last:border-b-0">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <span className="font-medium">{item.name}</span>
                                <div className="text-sm text-gray-600">
                                  Cantidad: {item.quantity} × {item.price}
                                </div>
                              </div>
                              <span className="font-bold text-green-600">
                                ${(parseInt(item.price.replace(/[^\d]/g, '')) * item.quantity).toLocaleString('es-CO')}
                              </span>
                            </div>
                          </div>
                        ))}
                        <div className="flex justify-between pt-2 border-t">
                          <span className="font-semibold">Total:</span>
                          <span className="font-bold text-green-600 text-lg">{cart.total}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                      <h4 className="font-semibold">Tus Datos</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Nombre:</span>
                          <span className="font-medium">{formData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Teléfono:</span>
                          <span className="font-medium">{formData.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Email:</span>
                          <span className="font-medium">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dirección:</span>
                          <span className="font-medium">{formData.address}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Mensaje adicional (opcional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Alguna instrucción especial para tu pedido..."
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                        rows={3}
                      />
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-900 mb-2">📞 Siguiente Paso</h4>
                      <p className="text-sm text-orange-800">
                        Al hacer clic en "Enviar Pedido", serás redirigido a WhatsApp para 
                        finalizar tu orden. Nuestro equipo te contactará pronto para coordinar 
                        el pago y la entrega.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        variant="outline" 
                        onClick={handlePrevStep}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Anterior
                      </Button>
                      <Button 
                        onClick={handleSubmit}
                        className="bg-green-600 hover:bg-green-700"
                        size="lg"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Enviar Pedido por WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Resumen de Compra</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{selectedProduct.icon}</div>
                    <div>
                      <h4 className="font-semibold">{selectedProduct.name}</h4>
                      <p className="text-sm text-gray-600">Cantidad: 1</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>{selectedProduct.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Envío:</span>
                      <span className="text-green-600">Por confirmar</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Total:</span>
                      <span className="text-green-600">{selectedProduct.price}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-900">Compra Segura</span>
                    </div>
                    <p className="text-xs text-green-800">
                      Paga solo cuando recibas tus productos. 
                      Te contactaremos para confirmar todo antes del envío.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>+57 310 6871639</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>info@laestancia.co</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Bogotá, Colombia</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}