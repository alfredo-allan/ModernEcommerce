import { useEffect, useState } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { ProductCarousel } from "../components/ProductCarousel";
import { categories } from "../categories";
import { GreetingModal } from "../components/GreetingModal";
import { useAuth } from "../context/AuthContext";

export const HomePage = () => {
  const { loggedInUser } = useAuth();
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    if (loggedInUser) {
      // Mostra só uma vez para usuários logados
      const alreadyGreeted = localStorage.getItem("greetingShown");
      if (!alreadyGreeted) {
        setShowGreeting(true);
        localStorage.setItem("greetingShown", "true");
      }
    } else {
      // Usuário não logado → modal persiste até ele logar
      setShowGreeting(true);
    }
  }, [loggedInUser]);

  const handleCloseModal = () => {
    if (loggedInUser) {
      setShowGreeting(false);
    }
    // Se não estiver logado, não fecha (mantém usabilidade forçada)
  };

  return (
    <main className="font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Modal de saudação */}
      <GreetingModal
        isOpen={showGreeting}
        onClose={() => setShowGreeting(false)}
        persistWhenNotLogged={true} // para manter aberto até o usuário agir
      />

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="font-sans text-4xl md:text-6xl font-bold mb-6 gradient-text leading-[1.6] md:leading-[1.8]">
          Cereja Doce Moda
        </h1>
        <p className="font-sans text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Descubra nossa coleção de roupas 🍒
        </p>
      </section>

      {/* Categories Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Categorias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products Carousel */}
      <ProductCarousel />
    </main>
  );
};
