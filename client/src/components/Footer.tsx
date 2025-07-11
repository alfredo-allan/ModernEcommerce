import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Watsapp from "../../public/img/social.png";
export const Footer = () => {
  return (
    <footer className="font-sans bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Store Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Store</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Rua das Flores, 123 - Centro
              </p>
              <p className="flex items-center">
                <span className="w-4 mr-2"></span>
                São Paulo, SP - 01234-567
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (11) 9999-9999
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contato@store.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Sobre Nós
              </a>
              <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Políticas de Troca
              </a>
              <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Frete e Entrega
              </a>
              <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300"
              >
                <Facebook className="h-25 w-25" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Instagram className="h-25 w-25" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300"
              >
                <img src={Watsapp} className="h-23 w-23" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 Desenvolvido por Leap In technology. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
