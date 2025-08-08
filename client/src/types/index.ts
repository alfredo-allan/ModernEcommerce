export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  images?: string[];
  videos?: string[];
  description?: string;

  // Novos campos para frete
  weight: number; // em kg
  height?: number; // em cm (opcional, pode usar valor padrão caso não tenha)
  width?: number;
  length?: number;
  hasSingleSize?: boolean;
}



export interface Category {
  slug: string;
  name: string;
  seoTitle?: string;
  description?: string;
  products: Product[];
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  toggleCart: () => void;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
