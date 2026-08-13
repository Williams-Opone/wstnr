"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: string;       // product ID
  skuId: string;    // unique SKU ID
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string, size: string) => void;
  clearCart: () => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "wstnr_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load cart from storage:", e);
    } finally {
      setLoaded(true);
    }
  }, []);

  // Save cart to localStorage whenever it changes (after initial load)
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, loaded]);

  const addToCart = (newItem: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      if (existingIdx > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIdx].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, { ...newItem, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string, size: string) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.size === size)));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, isCartOpen, setCartOpen, addToCart, removeFromCart, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}