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

  const getPrimeiroNome = (nomeCompleto: string | undefined): string => {
    if (!nomeCompleto) return '';
    return nomeCompleto.split(' ')[0];
  };

  return (
    <nav className="font-sans sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo totalmente à esquerda */}
          <div className="flex-shrink-0 mr-8">
            <Link href="/" className="block">
              <img
                src="/img/cereja-doce-logo.png"
                alt="Cereja Doce Moda"
                className="h-12 md:h-16 object-contain"
                style={{ userSelect: 'none' }}
              />
            </Link>
          </div>

          {/* Categorias centralizadas, ocupando espaço flexível, sem scroll */}
          <div className="hidden md:flex flex-1 justify-center max-w-full mx-0">
            <div className="flex items-center justify-center space-x-4 w-full max-w-4xl">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className={`flex-1 text-center px-2 py-2 text-xs md:text-sm font-medium whitespace-nowrap transition-colors rounded-md ${location === `/${category.slug}`
                    ? 'text-clientPink bg-clientPink/10'
                    : 'text-gray-700 dark:text-gray-300 hover:text-clientPinkHover hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  aria-current={location === `/${category.slug}` ? 'page' : undefined}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Ações fixas totalmente à direita */}
          <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0 ml-8">
            <ThemeToggle />

            <Link href="/auth">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium whitespace-nowrap hidden sm:flex"
                aria-label={loggedInUser ? `Perfil de ${getPrimeiroNome(loggedInUser.nome)}` : 'Login'}
              >
                <User className="h-4 w-4 mr-2" />
                {loggedInUser ? getPrimeiroNome(loggedInUser.nome) : 'Login'}
              </Button>

              {/* Versão mobile só com ícone */}
              <Button
                variant="ghost"
                size="icon"
                className="sm:hidden h-9 w-9"
                aria-label="Login"
              >
                <User className="h-4 w-4" />
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              className="relative h-9 w-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Sacola de compras, ${totalItems} itens`}
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
