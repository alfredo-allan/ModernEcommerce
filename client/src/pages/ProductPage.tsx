import { useState } from 'react';
import { useRoute } from 'wouter';
import { getProductById } from '../data/categories';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';


const sizes = ['P', 'M', 'G'];

export const ProductPage = () => {
  const [, params] = useRoute('/produto/:id');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const product = getProductById(params?.id || '');
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Produto não encontrado
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            O produto que você está procurando não existe.
          </p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;

    setIsAdding(true);
    addItem(product, selectedSize);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image Carousel */}
        <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]} // <- ESSENCIAL!
            className="rounded-xl aspect-square overflow-hidden"
          >
            {/* Imagens */}
            {product.images?.map((src, index) => (
              <SwiperSlide key={`img-${index}`}>
                <img
                  src={src}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}

            {/* Vídeos */}
            {product.videos?.map((videoSrc, index) => (
              <SwiperSlide key={`vid-${index}`}>
                <video
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>


        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-blue-500">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
          </div>

          {product.description && (
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Escolha o tamanho:
            </h3>
            <div className="flex space-x-3">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 ${selectedSize === size
                    ? 'bg-blue-500 hover:bg-blue-600 border-blue-500'
                    : 'border-gray-300 dark:border-gray-600 hover:border-blue-500'
                    }`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!selectedSize || isAdding}
            className={`w-full py-4 font-semibold transition-colors ${isAdding
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-blue-500 hover:bg-blue-600'
              } ${!selectedSize ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {isAdding ? 'Adicionado à Sacola!' : 'Adicionar à Sacola'}
          </Button>
        </div>
      </div>
    </main>
  );
};
