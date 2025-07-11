import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { getFeaturedProducts } from '../data/categories';

export const ProductCarousel = () => {
  const [products] = useState(getFeaturedProducts());

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Produtos em Destaque</h2>
      <div className="relative overflow-hidden">
        <div className="flex space-x-6 animate-slide">
          {/* Duplicate products for seamless infinite scroll */}
          {[...products, ...products].map((product, index) => (
            <div key={`${product.id}-${index}`} className="flex-shrink-0 w-72 h-[460px]">
              <ProductCard product={product} showAddToCart />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
