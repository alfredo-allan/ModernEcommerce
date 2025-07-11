import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartContextType, CartItem, Product } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Carrega do localStorage ao montar
  useEffect(() => {
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Salva no localStorage sempre que items mudam
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, size: string) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.size === size
      );

      if (existingItem) {
        // Incrementa quantidade
        return prevItems.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Novo item: usa a primeira imagem de product.images ou fallback product.image
      const image = product.images?.[0] || product.image || '';

      return [...prevItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        size,
        quantity: 1,
        image,
      }];
    });
  };

  const removeItem = (productId: string, size: string) => {
    setItems(prevItems =>
      prevItems.filter(item => !(item.id === productId && item.size === size))
    );
  };

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, size);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
