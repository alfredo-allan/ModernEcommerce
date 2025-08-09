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

  // 🔥 FUNÇÃO PARA DETERMINAR O TAMANHO PADRÃO
  const getDefaultSize = (product: Product): string => {
    if (!product.hasSingleSize) {
      // Para produtos que não têm tamanho único, retorna vazio
      // O componente deve exigir seleção manual
      return '';
    }

    // Para produtos com tamanho único, define padrão baseado na categoria/produto
    const productName = product.name.toLowerCase();

    // Macaquinhos - têm P/M e G/GG
    if (productName.includes('macaquinho')) {
      return 'P/M'; // padrão menor
    }

    // Shorts - tamanho único (36-42)
    if (productName.includes('short')) {
      return 'Único (36-42)';
    }

    // Kits Legging + Top
    if (productName.includes('kit')) {
      return 'Único';
    }

    // Empina Bumbum
    if (productName.includes('empina bumbum') || productName.includes('yoga')) {
      return 'Único (36-42)';
    }

    // Fallback genérico
    return 'Único';
  };

  // 🔥 ADDITEM REFATORADO
  const addItem = (product: Product, size?: string) => {
    let finalSize = size;

    // Se não foi fornecido size, tenta determinar automaticamente
    if (!size) {
      if (product.hasSingleSize) {
        finalSize = getDefaultSize(product);
      } else {
        // Para produtos sem tamanho único, o size é obrigatório
        console.error('Size is required for products without single size:', product.name);
        return; // Não adiciona se não tiver tamanho
      }
    }

    // Valida se ainda temos um size válido
    if (!finalSize) {
      console.error('Could not determine size for product:', product.name);
      return;
    }

    setItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.size === finalSize
      );

      if (existingItem) {
        // Incrementa quantidade do item existente
        return prevItems.map(item =>
          item.id === product.id && item.size === finalSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // 🔥 NOVO ITEM - INCLUI TODAS AS PROPRIEDADES NECESSÁRIAS
      const newCartItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        size: finalSize,
        quantity: 1,
        image: product.images?.[0] || product.image || '',
        // Inclui propriedades adicionais que podem ser necessárias
        images: product.images,
        videos: product.videos,
        description: product.description,
        weight: product.weight,
        height: product.height,
        width: product.width,
        length: product.length,
        hasSingleSize: product.hasSingleSize,
      };

      return [...prevItems, newCartItem];
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