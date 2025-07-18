import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { useLocation } from 'wouter'; // importar hook
import { Separator } from './ui/separator';

export const BagSideMenu = () => {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, toggleCart } = useCart();
  const [, navigate] = useLocation(); // hook de navegação

  if (!isOpen) return null;

  const handleCheckoutNavigate = () => {
    toggleCart(); // fecha o menu antes de navegar
    navigate('/checkout'); // vai para a página de checkout
  };

  return (
    <div className="font-sans fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={toggleCart}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-xl animate-fade-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="font-sans flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-sans text-lg font-semibold text-gray-900 dark:text-white">Sua Sacola</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              className="h-8 w-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Items */}
          <div className="font-sans flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">Sua sacola está vazia</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Tamanho: {item.size}</p>
                    <p className="text-sm font-semibold text-blue-500">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      className="h-6 w-6"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center text-gray-900 dark:text-white">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className="h-6 w-6"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id, item.size)}
                    className="text-red-500 hover:text-red-600 h-8 w-8"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="font-sans border-t border-gray-200 dark:border-gray-700 p-6 space-y-4">
              <div className="font-sans flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                <span>Total:</span>
                <span className="text-blue-500">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
              <Button
                className="font-sans w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3"
                onClick={handleCheckoutNavigate} // navegação adicionada aqui
              >
                Finalizar Compra
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
