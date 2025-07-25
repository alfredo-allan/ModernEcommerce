import { Link, useLocation } from 'wouter';
import { ShoppingBag, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { categories } from '../categories';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { NavBarMobileMenu } from './NavbarMobileMenu';

export const Navbar = () => {
  const [location] = useLocation();
  const { totalItems, toggleCart } = useCart();
  const { loggedInUser } = useAuth();

  return (
    <nav className="font-sans sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 w-full">
      <div className="relative flex items-center justify-between h-20 w-full overflow-hidden">

        {/* Logo 100% colado no canto esquerdo da tela */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-2">
          <Link href="/" className="flex-shrink-0">
            <img
              src="/img/cereja-doce-logo.png"
              alt="Cereja Doce Moda"
              className="h-12 md:h-16 object-contain"
            />
          </Link>
        </div>

        {/* Conteúdo principal centralizado */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">

          {/* Espaço vazio para compensar logo colado */}
          <div className="w-[120px] hidden md:block" />

          {/* Menu central (desktop) */}
          <div className="hidden md:flex flex-1 justify-center space-x-4 min-w-0 overflow-hidden">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className={`px-2 py-1 text-sm font-medium whitespace-nowrap truncate transition-colors ${location === `/${category.slug}`
                  ? 'text-clientPink'
                  : 'text-gray-700 dark:text-gray-300 hover:text-clientPinkHover'
                  }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Ações à direita */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            <ThemeToggle />

            <Link href="/auth">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium whitespace-nowrap"
              >
                <User className="h-4 w-4 mr-2" />
                {loggedInUser ? (
                  <>
                    <span className="md:hidden">
                      {loggedInUser.nome?.split(' ')[0] ?? ''}
                    </span>
                    <span className="hidden md:inline">
                      {loggedInUser.nome}
                    </span>
                  </>
                ) : (
                  'Login'
                )}
              </Button>
            </Link>

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
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-clientPink hover:bg-clientPinkHover"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* Menu lateral mobile */}
            <div className="md:hidden">
              <NavBarMobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
