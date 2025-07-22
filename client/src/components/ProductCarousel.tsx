import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { categories } from '../categories';
import type { Product } from '../types';

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const ProductCarousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const allProducts = categories.flatMap(cat => cat.products);
    setProducts(shuffleArray(allProducts));

    // Detecta largura da tela para ativar/desativar animação
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // checa na montagem
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="mb-16">
      <h2 className="font-sans text-2xl font-bold mb-8 text-gray-900 dark:text-white">Produtos em Destaque</h2>
      <div className="relative overflow-hidden">
        <div
          className={`flex space-x-6 scrollbar-hide ${isDesktop ? 'animate-slide' : 'overflow-x-auto'}`}
          style={{ scrollBehavior: isDesktop ? 'auto' : 'smooth' }}
        >
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
