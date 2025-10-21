'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ShoppingBag, 
  X, Plus, Minus, Trash2, 
  ArrowRight
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cartService, Cart, CartItem } from '@/lib/cart'

export function CartButton() {
  const router = useRouter()
  const [cart, setCart] = useState<Cart>({ items: [], total: '$0' })
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Obtener carrito inicial
    try {
      setCart(cartService.getCart())
    } catch (error) {
      console.error('Error loading cart:', error)
      setCart({ items: [], total: '$0' })
    }

    // Escuchar cambios en el carrito
    const handleCartUpdate = () => {
      try {
        setCart(cartService.getCart())
      } catch (error) {
        console.error('Error updating cart:', error)
      }
    }

    window.addEventListener('cartUpdated', handleCartUpdate)
    return () => window.removeEventListener('cartUpdated', handleCartUpdate)
  }, [])

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    try {
      if (newQuantity <= 0) {
        cartService.removeFromCart(productId)
      } else {
        cartService.updateQuantity(productId, newQuantity)
      }
    } catch (error) {
      console.error('Error updating quantity:', error)
    }
  }

  const handleRemoveItem = (productId: string) => {
    try {
      cartService.removeFromCart(productId)
    } catch (error) {
      console.error('Error removing item:', error)
    }
  }

  const handleCheckout = () => {
    setIsOpen(false)
    router.push('/comprar')
  }

  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0)

  // No renderizar el contenido del carrito hasta que estemos en el cliente
  if (!isClient) {
    return (
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          className="relative"
        >
          <ShoppingBag className="w-4 h-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <ShoppingBag className="w-4 h-4" />
        {itemCount > 0 && (
          <Badge 
            className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs bg-green-600 flex items-center justify-center"
          >
            {itemCount}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border z-50">
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Tu Carrito</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.items.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500">Tu carrito está vacío</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {cart.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                        <div className="text-2xl">{item.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-gray-600">{item.price}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="h-6 w-6 p-0 hover:bg-gray-200"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="h-6 w-6 p-0 hover:bg-gray-200"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id)}
                            className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-green-600 text-lg">{cart.total}</span>
                    </div>
                    <Button 
                      onClick={handleCheckout}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Proceder al Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}