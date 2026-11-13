import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  CartContext,
  type CartContextValue,
  type CartItem,
} from './cart-context'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const add = useCallback((item: Omit<CartItem, 'qty'>, qty: number) => {
    setItems((prev) => {
      const index = prev.findIndex(
        (entry) =>
          entry.slug === item.slug &&
          entry.size === item.size &&
          entry.color === item.color,
      )
      if (index === -1) return [...prev, { ...item, qty }]
      const next = [...prev]
      next[index] = { ...next[index], qty: next[index].qty + qty }
      return next
    })
  }, [])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0)
    const total = items.reduce((sum, item) => sum + item.qty * item.price, 0)
    return { items, count, total, add }
  }, [items, add])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
