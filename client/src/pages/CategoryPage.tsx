import { useRoute } from 'wouter';
import { ProductCard } from '../components/ProductCard';
import { getCategoryBySlug } from '../../public/videos/categories';

export const CategoryPage = () => {
  const [, params] = useRoute('/:category');
  const category = getCategoryBySlug(params?.category || '');

  if (!category) {
    return (
      <div className="font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Categoria não encontrada
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            A categoria que você está procurando não existe.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {category.name}
        </h1>
        {category.description && (
          <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
            {category.description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
