export interface CartItem {
  id: string
  name: string
  price: string
  icon: string
  description: string
  quantity: number
  category: string
}

export interface Cart {
  items: CartItem[]
  total: string
}

class CartService {
  private readonly CART_KEY = 'laestancia_cart'

  getCart(): Cart {
    if (typeof window === 'undefined') {
      return { items: [], total: '$0' }
    }
    
    try {
      const cartData = localStorage.getItem(this.CART_KEY)
      return cartData ? JSON.parse(cartData) : { items: [], total: '$0' }
    } catch {
      return { items: [], total: '$0' }
    }
  }

  addToCart(product: Omit<CartItem, 'quantity'>): void {
    if (typeof window === 'undefined') return

    const cart = this.getCart()
    const existingItem = cart.items.find(item => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.items.push({ ...product, quantity: 1 })
    }

    this.updateCart(cart)
  }

  removeFromCart(productId: string): void {
    if (typeof window === 'undefined') return

    const cart = this.getCart()
    cart.items = cart.items.filter(item => item.id !== productId)
    this.updateCart(cart)
  }

  updateQuantity(productId: string, quantity: number): void {
    if (typeof window === 'undefined') return

    const cart = this.getCart()
    const item = cart.items.find(item => item.id === productId)
    
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId)
      } else {
        item.quantity = quantity
        this.updateCart(cart)
      }
    }
  }

  clearCart(): void {
    if (typeof window === 'undefined') return
    localStorage.removeItem(this.CART_KEY)
  }

  getCartCount(): number {
    const cart = this.getCart()
    return cart.items.reduce((total, item) => total + item.quantity, 0)
  }

  private updateCart(cart: Cart): void {
    if (typeof window === 'undefined') return
    
    // Calcular total
    const total = cart.items.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''))
      return sum + (price * item.quantity)
    }, 0)
    
    cart.total = `$${total.toLocaleString('es-CO')}`
    
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart))
    
    // Disparar evento para actualizar UI
    window.dispatchEvent(new Event('cartUpdated'))
  }
}

export const cartService = new CartService()