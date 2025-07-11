import { Link, useLocation } from 'wouter';
import { ShoppingBag, Menu, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useCart } from '../context/CartContext';
import { categories } from '../data/categories';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const Navbar = () => {
  const [location] = useLocation();
  const { totalItems, toggleCart } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-1xl font-bold text-blue-500 hover:text-blue-600 transition-colors cursor-pointer">
              CEREJA DOCE CEREJA
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${location === `/${category.slug}`
                    ? 'text-blue-500 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                    }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <Button variant="ghost" size="sm" className="text-sm font-medium">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              className="relative h-9 w-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-blue-500 hover:bg-blue-600"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
