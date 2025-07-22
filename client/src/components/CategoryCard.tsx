import { Link } from 'wouter';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  // Pega a primeira imagem do primeiro produto, se existir
  const coverImage =
    category.products[0]?.images?.[0] ||
    category.products[0]?.image || // fallback para imagem única antiga, se tiver
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400';

  return (
    <Link href={`/${category.slug}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 aspect-square mb-4 group-hover:scale-105 transition-transform duration-300">
          <img
            src={coverImage}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-semibold gradient-title">{category.name}</h3>
            <p className="text-sm opacity-90 gradient-title">{category.products.length} produtos</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
