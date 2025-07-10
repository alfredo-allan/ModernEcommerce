import { Category } from '../types';

export const categories: Category[] = [
  {
    slug: "camisetas",
    name: "Camisetas",
    seoTitle: "Camisetas estilosas",
    description: "Camisetas para o dia a dia",
    products: [
      { 
        id: "p1", 
        name: "Camiseta Básica Premium", 
        price: 49.90, 
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Camiseta confeccionada em 100% algodão premium, com corte moderno e caimento perfeito. Ideal para o uso diário, oferece conforto e estilo em qualquer ocasião."
      },
      { 
        id: "p2", 
        name: "Camiseta Estampada Arte", 
        price: 69.90, 
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Design exclusivo com estampa artística única. Feita com tecido de alta qualidade que mantém as cores vibrantes mesmo após várias lavagens."
      },
      { 
        id: "p5", 
        name: "Camiseta Oversized", 
        price: 59.90, 
        image: "https://images.unsplash.com/photo-1583743814966-8936f37f7ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Corte oversized moderno e confortável. Perfeita para um visual casual e despojado."
      },
      { 
        id: "p6", 
        name: "Camiseta Listrada", 
        price: 54.90, 
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Clássica camiseta listrada que nunca sai de moda. Versatilidade para compor diversos looks."
      }
    ]
  },
  {
    slug: "calcas",
    name: "Calças",
    seoTitle: "Calças modernas",
    description: "Calças confortáveis e estilosas",
    products: [
      { 
        id: "p3", 
        name: "Calça Jeans Moderna", 
        price: 129.90, 
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Jeans slim fit com tecnologia stretch para maior conforto e mobilidade. Corte moderno que valoriza o corpo."
      },
      { 
        id: "p7", 
        name: "Calça Chino Premium", 
        price: 109.90, 
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Calça chino de sarja premium, ideal para looks casuais e sociais. Versatilidade em uma única peça."
      },
      { 
        id: "p8", 
        name: "Calça Jogger", 
        price: 89.90, 
        image: "https://images.unsplash.com/photo-1506629905607-d53d7a7c84c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Conforto máximo com estilo urbano. Perfeita para atividades casuais e momentos de relaxamento."
      }
    ]
  },
  {
    slug: "acessorios",
    name: "Acessórios",
    seoTitle: "Acessórios únicos",
    description: "Acessórios para completar seu look",
    products: [
      { 
        id: "p9", 
        name: "Boné Snapback", 
        price: 39.90, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Boné snapback com design moderno e ajuste personalizado. Proteção solar com muito estilo."
      },
      { 
        id: "p10", 
        name: "Relógio Minimalista", 
        price: 199.90, 
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Design minimalista e elegante. Pulseira de couro premium e movimento de qualidade suíça."
      },
      { 
        id: "p11", 
        name: "Óculos de Sol", 
        price: 149.90, 
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Proteção UV400 com lentes polarizadas. Armação resistente e design atemporal."
      }
    ]
  },
  {
    slug: "sapatos",
    name: "Sapatos",
    seoTitle: "Calçados modernos",
    description: "Sapatos confortáveis para todas as ocasiões",
    products: [
      { 
        id: "p4", 
        name: "Tênis Casual Branco", 
        price: 189.90, 
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Tênis versátil para uso diário. Solado confortável e design clean que combina com qualquer look."
      },
      { 
        id: "p12", 
        name: "Bota Coturno", 
        price: 249.90, 
        image: "https://images.unsplash.com/photo-1608256246200-53e8b47889cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Bota robusta com design urbano. Durabilidade e estilo para enfrentar qualquer terreno."
      },
      { 
        id: "p13", 
        name: "Sapatênis Couro", 
        price: 179.90, 
        image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        description: "Elegância casual em couro legítimo. Perfeito para ocasiões que exigem sofisticação sem formalidade."
      }
    ]
  }
];

export const getFeaturedProducts = (): Product[] => {
  return categories.flatMap(cat => cat.products).slice(0, 6);
};

export const getProductById = (id: string): Product | undefined => {
  return categories.flatMap(cat => cat.products).find(product => product.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};
