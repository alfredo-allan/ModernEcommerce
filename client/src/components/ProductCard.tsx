import { Link } from 'wouter';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

export const ProductCard = ({ product, showAddToCart = false }: ProductCardProps) => {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product, 'M'); // Default size for quick add
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/produto/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {showAddToCart && (
            <Button
              size="icon"
              onClick={handleAddToCart}
              className={`absolute top-4 right-4 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isAdding 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900'
              }`}
            >
              <ShoppingBag className={`h-4 w-4 ${
                isAdding ? 'text-white' : 'text-gray-700 dark:text-gray-300'
              }`} />
            </Button>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{product.name}</h3>
          {product.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-500">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {showAddToCart && (
              <Button
                onClick={handleAddToCart}
                size="sm"
                className={`transition-colors ${
                  isAdding 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {isAdding ? 'Adicionado!' : 'Adicionar'}
              </Button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
