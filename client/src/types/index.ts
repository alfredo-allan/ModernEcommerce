export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
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
