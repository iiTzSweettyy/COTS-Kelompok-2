import { createContext, useContext } from 'react'

export type CartItem = {
  slug: string
  name: string
  price: number
  size: string
  color: string
  qty: number
}

export type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  add: (item: Omit<CartItem, 'qty'>, qty: number) => void
}

export const CartContext = createContext<CartContextValue | null>(null)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
