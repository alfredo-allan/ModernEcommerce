import { Category, Product } from './types';

export const categories: Category[] = [
  {
    slug: "Macaquinho",
    name: "Macaquinho",
    seoTitle: "Macaquinhos",
    description: "Macaquinho",
    products: [
      {
        id: "p1",
        name: "Macaquinho Rosa",
        price: 78.00,
        weight: 0.25, // em kg = 250g
        images: [
          "/img/littlemonkey_category.jpeg",
          "/img/littlemonkey_1.jpeg",
        ],
        videos: [
          "/videos/monkeyvideo.mp4" // caminho do seu vídeo
        ],
        description: "ATENÇÃO: Bojo removível e alça regata. Disponível nos tamanhos P/ M(36 - 38) e G / GG(40 - 42). Nosso Macaquinho em Poliamida oferece durabilidade e conforto com tecido macio que modela o corpo, sem transparência para total segurança. Feito com material resistente que evita bolinhas e desbotamento, mantendo a peça sempre nova.Costuras reforçadas para maior resistência e liberdade de movimento. Importante: A tonalidade pode variar conforme o monitor, mas isso não afeta a qualidade do produto."
      },
      {
        id: "p2",
        name: "Macaquinho Azul",
        price: 78.00,
        weight: 0.25, // em kg = 250g
        images: [
          "/img/littlebluemonkey.jpeg",
          "/img/littlebluemonkey_1.jpeg",
        ],
        videos: [
          "/videos/monkeyvideo.mp4" // caminho do seu vídeo
        ],
        description: "ATENÇÃO: Bojo removível e alça regata. Disponível nos tamanhos P/ M(36 - 38) e G / GG(40 - 42). Nosso Macaquinho em Poliamida oferece durabilidade e conforto com tecido macio que modela o corpo, sem transparência para total segurança. Feito com material resistente que evita bolinhas e desbotamento, mantendo a peça sempre nova.Costuras reforçadas para maior resistência e liberdade de movimento. Importante: A tonalidade pode variar conforme o monitor, mas isso não afeta a qualidade do produto."
      },
      {
        id: "p3",
        name: "Macaquinho Verde",
        price: 78.00,
        weight: 0.25, // em kg = 250g
        images: [
          "/img/littlegreenmonkey.jpeg",
          "/img/littlegreenmonkey_1.jpeg",
        ],
        videos: [
          "/videos/monkeyvideo.mp4" // caminho do seu vídeo
        ],
        description: "ATENÇÃO: Bojo removível e alça regata. Disponível nos tamanhos P/ M(36 - 38) e G / GG(40 - 42). Nosso Macaquinho em Poliamida oferece durabilidade e conforto com tecido macio que modela o corpo, sem transparência para total segurança. Feito com material resistente que evita bolinhas e desbotamento, mantendo a peça sempre nova.Costuras reforçadas para maior resistência e liberdade de movimento. Importante: A tonalidade pode variar conforme o monitor, mas isso não afeta a qualidade do produto."
      },
      {
        id: "p4",
        name: "Macaquinho Rosa",
        price: 78.00,
        weight: 0.25, // em kg = 250g
        images: [
          "/img/littlemonkey_1.jpeg",
          "/img/littlemonkey_category.jpeg",
        ],
        videos: [
          "/videos/monkeyvideo.mp4" // caminho do seu vídeo
        ],
        description: "ATENÇÃO: Bojo removível e alça regata. Disponível nos tamanhos P/ M(36 - 38) e G / GG(40 - 42). Nosso Macaquinho em Poliamida oferece durabilidade e conforto com tecido macio que modela o corpo, sem transparência para total segurança. Feito com material resistente que evita bolinhas e desbotamento, mantendo a peça sempre nova.Costuras reforçadas para maior resistência e liberdade de movimento. Importante: A tonalidade pode variar conforme o monitor, mas isso não afeta a qualidade do produto."
      },

    ]
  },
  {
    slug: "short",
    name: "Short Academia",
    seoTitle: "Short Academia",
    description: "CINTURA ALTA | MODELA & LEVANTA BUMBUM",
    products: [
      {
        id: "p5",
        name: "Short Academia fitness Feminino Roxo",
        price: 19.99,
        weight: 0.15, // em kg = 150g
        images: [
          "/img/blueshorts.jpeg",
          "/img/blueshorts_1.jpeg",
        ],
        description: "Short Academia Feminino – Cintura Alta | Modela & Levanta Bumbum\nConforto, estilo e performance para treinos intensos ou look fitness casual. Tecido leve e com elastano, ajusta-se ao corpo sem apertar, com cintura alta que modela a silhueta e ajuda na postura.\n\nDestaques:\nTecido com elastano para elasticidade e conforto\nCintura alta que sustenta o abdômen\nEfeito levanta bumbum\nTamanho único (36 ao 42)\nDesign moderno e versátil\nIdeal para academia, caminhada e uso casual\n\nPor que escolher?\nLiberdade e conforto para qualquer treino\nModelagem que valoriza o corpo\nDiversas cores para seu estilo\nEncaixe perfeito sem desconforto\nEnvio rápido e seguro"
      },
      {
        id: "p6",
        name: "Short Academia fitness Feminino Cinza",
        price: 19.99,
        weight: 0.15, // em kg = 150g
        images: [
          "/img/grayshorts.jpeg",
          "/img/grayshorts_1.jpeg",


        ],
        description: "Short Academia Feminino – Cintura Alta | Modela & Levanta Bumbum\nConforto, estilo e performance para treinos intensos ou look fitness casual. Tecido leve e com elastano, ajusta-se ao corpo sem apertar, com cintura alta que modela a silhueta e ajuda na postura.\n\nDestaques:\nTecido com elastano para elasticidade e conforto\nCintura alta que sustenta o abdômen\nEfeito levanta bumbum\nTamanho único (36 ao 42)\nDesign moderno e versátil\nIdeal para academia, caminhada e uso casual\n\nPor que escolher?\nLiberdade e conforto para qualquer treino\nModelagem que valoriza o corpo\nDiversas cores para seu estilo\nEncaixe perfeito sem desconforto\nEnvio rápido e seguro"
      },
      {
        id: "p7",
        name: "Short Academia fitness Feminino Verde",
        price: 19.99,
        weight: 0.15, // em kg = 150g
        images: [
          "/img/greenshorts_1.jpeg",
          "/img/greenshorts.jpeg",

        ],
        description: "Short Academia Feminino – Cintura Alta | Modela & Levanta Bumbum\nConforto, estilo e performance para treinos intensos ou look fitness casual. Tecido leve e com elastano, ajusta-se ao corpo sem apertar, com cintura alta que modela a silhueta e ajuda na postura.\n\nDestaques:\nTecido com elastano para elasticidade e conforto\nCintura alta que sustenta o abdômen\nEfeito levanta bumbum\nTamanho único (36 ao 42)\nDesign moderno e versátil\nIdeal para academia, caminhada e uso casual\n\nPor que escolher?\nLiberdade e conforto para qualquer treino\nModelagem que valoriza o corpo\nDiversas cores para seu estilo\nEncaixe perfeito sem desconforto\nEnvio rápido e seguro"
      },
      {
        id: "p8",
        name: "Short Academia fitness Feminino Cinza Claro",
        price: 19.99,
        weight: 0.15, // em kg = 150g
        images: [
          "/img/lightgrayshorts.jpeg",
          "/img/lightgrayshorts_1.jpeg"

        ],
        description: "Short Academia Feminino – Cintura Alta | Modela & Levanta Bumbum\nConforto, estilo e performance para treinos intensos ou look fitness casual. Tecido leve e com elastano, ajusta-se ao corpo sem apertar, com cintura alta que modela a silhueta e ajuda na postura.\n\nDestaques:\nTecido com elastano para elasticidade e conforto\nCintura alta que sustenta o abdômen\nEfeito levanta bumbum\nTamanho único (36 ao 42)\nDesign moderno e versátil\nIdeal para academia, caminhada e uso casual\n\nPor que escolher?\nLiberdade e conforto para qualquer treino\nModelagem que valoriza o corpo\nDiversas cores para seu estilo\nEncaixe perfeito sem desconforto\nEnvio rápido e seguro"
      }, {
        id: "p9",
        name: "Short Academia fitness Feminino Vermelho",
        price: 19.99,
        weight: 0.15, // em kg = 150g
        images: [
          "/img/redshorts.jpeg",
          "/img/redshorts_1.jpeg"

        ],
        description: "Short Academia Feminino – Cintura Alta | Modela & Levanta Bumbum\nConforto, estilo e performance para treinos intensos ou look fitness casual. Tecido leve e com elastano, ajusta-se ao corpo sem apertar, com cintura alta que modela a silhueta e ajuda na postura.\n\nDestaques:\nTecido com elastano para elasticidade e conforto\nCintura alta que sustenta o abdômen\nEfeito levanta bumbum\nTamanho único (36 ao 42)\nDesign moderno e versátil\nIdeal para academia, caminhada e uso casual\n\nPor que escolher?\nLiberdade e conforto para qualquer treino\nModelagem que valoriza o corpo\nDiversas cores para seu estilo\nEncaixe perfeito sem desconforto\nEnvio rápido e seguro"
      },
      {
        id: "p35", //aqui
        name: "Short Academia fitness Feminino Beje",
        price: 19.99,
        weight: 0.15, // em kg = 150g
        images: [
          "/img/nudeshorts.jpeg",
          "/img/nudeshorts_1.jpeg",

        ],
        description: "Short Academia Feminino – Cintura Alta | Modela & Levanta Bumbum\nConforto, estilo e performance para treinos intensos ou look fitness casual. Tecido leve e com elastano, ajusta-se ao corpo sem apertar, com cintura alta que modela a silhueta e ajuda na postura.\n\nDestaques:\nTecido com elastano para elasticidade e conforto\nCintura alta que sustenta o abdômen\nEfeito levanta bumbum\nTamanho único (36 ao 42)\nDesign moderno e versátil\nIdeal para academia, caminhada e uso casual\n\nPor que escolher?\nLiberdade e conforto para qualquer treino\nModelagem que valoriza o corpo\nDiversas cores para seu estilo\nEncaixe perfeito sem desconforto\nEnvio rápido e seguro"
      }
    ]
  },
  {
    slug: "conjunto legging",
    name: "Kit Legging + Top",
    seoTitle: "Kit Legging",
    description: "Acessórios para completar seu look",
    products: [
      {
        id: "p10",
        name: "Kit Legging + Top Verde",
        price: 55.00,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/kitlegginggreen.jpeg",
          "/img/kitlegginggreen_1.jpeg",

        ],
        description: "KIT CONJUNTO LEGGING + TOP Para um look atraente e versátil.E lindoooo Calça Legging + Top, Você terá toda a liberdade dos movimentos. conta com cós alto para melhor conforto e ajusta perfeitamente ao corpo assim como segunda pele. Ótimo para academia. Conforto e Estilo: Conjunto fitness composto por legging e top com design moderno e confortável. Efeito Levanta Bumbum: A legging possui modelagem especial que realça as curvas. Material Não Transparente: Fabricado com tecidos de alta qualidade que garantem segurança e conforto durante os treinos. Ideal para Academia e Lazer: Perfeito para práticas esportivas ou momentos casuais. Ajuste Perfeito: Cintura alta e elástica que proporciona melhor sustentação."
      },
      {
        id: "p11",
        name: "Kit Legging + Top Vermelho",
        price: 55.00,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/kitleggingred.jpeg",
          "/img/kitleggingred_1.jpeg",
        ],
        description: "KIT CONJUNTO LEGGING + TOP Para um look atraente e versátil.E lindoooo Calça Legging + Top, Você terá toda a liberdade dos movimentos. conta com cós alto para melhor conforto e ajusta perfeitamente ao corpo assim como segunda pele. Ótimo para academia. Conforto e Estilo: Conjunto fitness composto por legging e top com design moderno e confortável. Efeito Levanta Bumbum: A legging possui modelagem especial que realça as curvas. Material Não Transparente: Fabricado com tecidos de alta qualidade que garantem segurança e conforto durante os treinos. Ideal para Academia e Lazer: Perfeito para práticas esportivas ou momentos casuais. Ajuste Perfeito: Cintura alta e elástica que proporciona melhor sustentação."
      },
      {
        id: "p12",
        name: "Kit Legging + Top Cinza Claro",
        price: 55.00,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/kitleggingray.jpeg",
          "/img/kitleggingray_1.jpeg",
        ],
        description: "KIT CONJUNTO LEGGING + TOP Para um look atraente e versátil.E lindoooo Calça Legging + Top, Você terá toda a liberdade dos movimentos. conta com cós alto para melhor conforto e ajusta perfeitamente ao corpo assim como segunda pele. Ótimo para academia. Conforto e Estilo: Conjunto fitness composto por legging e top com design moderno e confortável. Efeito Levanta Bumbum: A legging possui modelagem especial que realça as curvas. Material Não Transparente: Fabricado com tecidos de alta qualidade que garantem segurança e conforto durante os treinos. Ideal para Academia e Lazer: Perfeito para práticas esportivas ou momentos casuais. Ajuste Perfeito: Cintura alta e elástica que proporciona melhor sustentação."
      },
      {
        id: "p13",
        name: "Kit Legging + Top Roxo",
        price: 55.00,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/kitlegginpurple.jpeg",
          "/img/kitlegginpurple_1.jpeg",
        ],
        description: "KIT CONJUNTO LEGGING + TOP Para um look atraente e versátil.E lindoooo Calça Legging + Top, Você terá toda a liberdade dos movimentos. conta com cós alto para melhor conforto e ajusta perfeitamente ao corpo assim como segunda pele. Ótimo para academia. Conforto e Estilo: Conjunto fitness composto por legging e top com design moderno e confortável. Efeito Levanta Bumbum: A legging possui modelagem especial que realça as curvas. Material Não Transparente: Fabricado com tecidos de alta qualidade que garantem segurança e conforto durante os treinos. Ideal para Academia e Lazer: Perfeito para práticas esportivas ou momentos casuais. Ajuste Perfeito: Cintura alta e elástica que proporciona melhor sustentação."
      },
      {
        id: "p14",
        name: "Kit Legging + Top Cinza Escuro",
        price: 55.00,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/kitleggingray_2.jpeg",
          "/img/kitleggingray_3.jpeg",
        ],
        description: "KIT CONJUNTO LEGGING + TOP Para um look atraente e versátil.E lindoooo Calça Legging + Top, Você terá toda a liberdade dos movimentos. conta com cós alto para melhor conforto e ajusta perfeitamente ao corpo assim como segunda pele. Ótimo para academia. Conforto e Estilo: Conjunto fitness composto por legging e top com design moderno e confortável. Efeito Levanta Bumbum: A legging possui modelagem especial que realça as curvas. Material Não Transparente: Fabricado com tecidos de alta qualidade que garantem segurança e conforto durante os treinos. Ideal para Academia e Lazer: Perfeito para práticas esportivas ou momentos casuais. Ajuste Perfeito: Cintura alta e elástica que proporciona melhor sustentação."
      },
      {
        id: "p15",
        name: "Kit Legging + Top Rosa",
        weight: 0.38, // em kg = 380g
        price: 55.00,
        images: [
          "/img/kitlegginpink.jpeg",
          "/img/kitlegginpink_1.jpeg",
        ],
        description: "KIT CONJUNTO LEGGING + TOP Para um look atraente e versátil.E lindoooo Calça Legging + Top, Você terá toda a liberdade dos movimentos. conta com cós alto para melhor conforto e ajusta perfeitamente ao corpo assim como segunda pele. Ótimo para academia. Conforto e Estilo: Conjunto fitness composto por legging e top com design moderno e confortável. Efeito Levanta Bumbum: A legging possui modelagem especial que realça as curvas. Material Não Transparente: Fabricado com tecidos de alta qualidade que garantem segurança e conforto durante os treinos. Ideal para Academia e Lazer: Perfeito para práticas esportivas ou momentos casuais. Ajuste Perfeito: Cintura alta e elástica que proporciona melhor sustentação."
      },

    ]
  },
  {
    slug: "Calça Pantalona",
    name: "Calça Pantalona",
    seoTitle: "Calça Pantalona",
    description: "Calça Pantalona Feminino Cintura Alta Com Elástico Em Tecido Duna",
    products: [
      {
        id: "p16",
        name: "Calça Pantalona Preta",
        price: 39.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/calça_pantalona_1.jpeg",
          "/img/calça_pantalona_2.jpeg",
          "/img/calça_pantalona_3.jpeg",

        ],
        videos: [
          "/videos/calça_pantalona_preta.mp4" // caminho do seu vídeo
        ],
        description: "Calça pantalona feminino cintura alta com elástico em tecido Duna. A calça duna pantalona é conhecida por ser uma ótima opção para o seu dia a dia, sendo uma peça coringa para complementar seu guada roupa. -ENVIO IMEDIATO -PRODUTO EXCLUSIVO Descrição do produto - Gênero: Feminino - Modelo: Calça Pantalona - Material Principal: Duna - Bolsos: NAO POSSUI - Fechamento: Cintura elástica com cordão",
      },
      {
        id: "p17",
        name: "Calça Pantalona Amarela",
        price: 39.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/calça_pantalona_4.jpeg",
          "/img/calça_pantalona_8.jpeg",
          "/img/calça_pantalona_9.jpeg",
        ],
        videos: [
          "/videos/calça_pantalona_amarela.mp4" // caminho do seu vídeo
        ],
        description: "Calça pantalona feminino cintura alta com elástico em tecido Duna. A calça duna pantalona é conhecida por ser uma ótima opção para o seu dia a dia, sendo uma peça coringa para complementar seu guada roupa. -ENVIO IMEDIATO -PRODUTO EXCLUSIVO Descrição do produto - Gênero: Feminino - Modelo: Calça Pantalona - Material Principal: Duna - Bolsos: NAO POSSUI - Fechamento: Cintura elástica com cordão",
      },
      {
        id: "p18",
        name: "Calça Pantalona Verde",
        price: 39.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/calça_pantalona_7.jpeg",
          "/img/calça_pantalona_5.jpeg",
          "/img/calça_pantalona_6.jpeg",

        ],
        videos: [
          "/videos/calça_pantalona_verde.mp4" // caminho do seu vídeo
        ],
        description: "Calça pantalona feminino cintura alta com elástico em tecido Duna. A calça duna pantalona é conhecida por ser uma ótima opção para o seu dia a dia, sendo uma peça coringa para complementar seu guada roupa. -ENVIO IMEDIATO -PRODUTO EXCLUSIVO Descrição do produto - Gênero: Feminino - Modelo: Calça Pantalona - Material Principal: Duna - Bolsos: NAO POSSUI - Fechamento: Cintura elástica com cordão",
      },

    ]
  },

  {
    slug: "Legging 3D A Melhor Qualidade",
    name: "Legging 3D",
    seoTitle: "Legging 3D",
    description: "320º De Gramatura Não Tem Transparência",
    products: [
      {
        id: "p19",
        name: "Legging 3D Beje",
        price: 39.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/LEGGING_3D_marron.webp",

        ],
        videos: [
          "/videos/LEGGING_3D.mp4" // caminho do seu vídeo
        ],
        description: "Tem 320º de gramatura é por isso NÃO tem transparência nenhuma. Os produtos são novos? Sim todos os produtos a venda são novos. Tem a pronta entrega? Sim todos os produtos anunciados estão na nossa loja, disponíveis para pronta entrega. Tamanhos / Tabela de Medidas M 36/38 G 40/4 GG 44 Temos as cores: - BEGE      - PRETO MARSALA PINK ROXO Você pode escolher os tamanhos a vontade, no campo de mensagens da sua compra. Fique tranquila SEMPRE enviamos as leggings diferentes com cores bem vivas e alegres que vão te deixar com muito estilo. Pode comprar as suas leggings tranquila, tenho certeza que você vai gostar. Fique à vontade para utilizar o campo de mensagens será um prazer atender você. Informações Importantes: - NÃO DA BOLINHA, PODE LAVAR NA MAQUINA. - MUITO CONFORTÁVEL E QUENTINHA - VESTE SUPER BEM - CÓS DE 8 CM.DE ALTURA - PRODUTO DE QUALIDADE - TECIDO COM ÓTIMO TOQUE - SUPLEX POR DENTRO E POR FORA."
      },
      {
        id: "p20",
        name: "Legging 3D Preta",
        price: 39.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/LEGGING_3D_preta.jpeg",
          "/img/LEGGING_3D_preta_1.jpeg",

        ],
        videos: [
          "/videos/LEGGING_3D.mp4" // caminho do seu vídeo
        ],
        description: "Tem 320º de gramatura é por isso NÃO tem transparência nenhuma. Os produtos são novos? Sim todos os produtos a venda são novos. Tem a pronta entrega? Sim todos os produtos anunciados estão na nossa loja, disponíveis para pronta entrega. Tamanhos / Tabela de Medidas M 36/38 G 40/4 GG 44 Temos as cores: - BEGE      - PRETO MARSALA PINK ROXO Você pode escolher os tamanhos a vontade, no campo de mensagens da sua compra. Fique tranquila SEMPRE enviamos as leggings diferentes com cores bem vivas e alegres que vão te deixar com muito estilo. Pode comprar as suas leggings tranquila, tenho certeza que você vai gostar. Fique à vontade para utilizar o campo de mensagens será um prazer atender você. Informações Importantes: - NÃO DA BOLINHA, PODE LAVAR NA MAQUINA. - MUITO CONFORTÁVEL E QUENTINHA - VESTE SUPER BEM - CÓS DE 8 CM.DE ALTURA - PRODUTO DE QUALIDADE - TECIDO COM ÓTIMO TOQUE - SUPLEX POR DENTRO E POR FORA."
      },
      {
        id: "p21",
        name: "Legging 3D Vermelha",
        price: 39.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/LEGGING_3D_vermelha.jpeg",

        ],
        videos: [
          "/videos/LEGGING_3D.mp4" // caminho do seu vídeo
        ],
        description: "Tem 320º de gramatura é por isso NÃO tem transparência nenhuma. Os produtos são novos? Sim todos os produtos a venda são novos. Tem a pronta entrega? Sim todos os produtos anunciados estão na nossa loja, disponíveis para pronta entrega. Tamanhos / Tabela de Medidas M 36/38 G 40/4 GG 44 Temos as cores: - BEGE      - PRETO MARSALA PINK ROXO Você pode escolher os tamanhos a vontade, no campo de mensagens da sua compra. Fique tranquila SEMPRE enviamos as leggings diferentes com cores bem vivas e alegres que vão te deixar com muito estilo. Pode comprar as suas leggings tranquila, tenho certeza que você vai gostar. Fique à vontade para utilizar o campo de mensagens será um prazer atender você. Informações Importantes: - NÃO DA BOLINHA, PODE LAVAR NA MAQUINA. - MUITO CONFORTÁVEL E QUENTINHA - VESTE SUPER BEM - CÓS DE 8 CM.DE ALTURA - PRODUTO DE QUALIDADE - TECIDO COM ÓTIMO TOQUE - SUPLEX POR DENTRO E POR FORA."
      },
      {
        id: "p22",
        name: "Legging 3D Roxa",
        price: 39.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/LEGGING_3D_ROXO.jpeg",

        ],
        videos: [
          "/videos/LEGGING_3D.mp4" // caminho do seu vídeo
        ],
        description: "Tem 320º de gramatura é por isso NÃO tem transparência nenhuma. Os produtos são novos? Sim todos os produtos a venda são novos. Tem a pronta entrega? Sim todos os produtos anunciados estão na nossa loja, disponíveis para pronta entrega. Tamanhos / Tabela de Medidas M 36/38 G 40/4 GG 44 Temos as cores: - BEGE      - PRETO MARSALA PINK ROXO Você pode escolher os tamanhos a vontade, no campo de mensagens da sua compra. Fique tranquila SEMPRE enviamos as leggings diferentes com cores bem vivas e alegres que vão te deixar com muito estilo. Pode comprar as suas leggings tranquila, tenho certeza que você vai gostar. Fique à vontade para utilizar o campo de mensagens será um prazer atender você. Informações Importantes: - NÃO DA BOLINHA, PODE LAVAR NA MAQUINA. - MUITO CONFORTÁVEL E QUENTINHA - VESTE SUPER BEM - CÓS DE 8 CM.DE ALTURA - PRODUTO DE QUALIDADE - TECIDO COM ÓTIMO TOQUE - SUPLEX POR DENTRO E POR FORA."
      },
      {
        id: "p23",
        name: "Legging 3D Pink",
        price: 39.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/LEGGING_3D_PINK.jpeg",

        ],
        videos: [
          "/videos/LEGGING_3D.mp4" // caminho do seu vídeo
        ],
        description: "Tem 320º de gramatura é por isso NÃO tem transparência nenhuma. Os produtos são novos? Sim todos os produtos a venda são novos. Tem a pronta entrega? Sim todos os produtos anunciados estão na nossa loja, disponíveis para pronta entrega. Tamanhos / Tabela de Medidas M 36/38 G 40/4 GG 44 Temos as cores: - BEGE      - PRETO MARSALA PINK ROXO Você pode escolher os tamanhos a vontade, no campo de mensagens da sua compra. Fique tranquila SEMPRE enviamos as leggings diferentes com cores bem vivas e alegres que vão te deixar com muito estilo. Pode comprar as suas leggings tranquila, tenho certeza que você vai gostar. Fique à vontade para utilizar o campo de mensagens será um prazer atender você. Informações Importantes: - NÃO DA BOLINHA, PODE LAVAR NA MAQUINA. - MUITO CONFORTÁVEL E QUENTINHA - VESTE SUPER BEM - CÓS DE 8 CM.DE ALTURA - PRODUTO DE QUALIDADE - TECIDO COM ÓTIMO TOQUE - SUPLEX POR DENTRO E POR FORA."
      },

    ]
  },


  {
    slug: "Empina Bumbum",
    name: "Empina Bumbum",
    seoTitle: "Empina Bumbum Tamanho Unico Veste Ate O 40",
    description: "Empina Bumbum Tamanho Unico Veste Ate O 40",
    products: [
      {
        id: "p24",
        name: "Empina Bumbum",
        price: 35.00,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/EMPINABUMBUM_1.jpeg",

        ],
        videos: [
          "/videos/EMPINABUMBUM.mp4" // caminho do seu vídeo
        ],
        description: "EMPINA BUMBUM TAMANHO UNICO VESTE ATE O 40 Aumente seu desempenho e estilo durante os treinos com a nossa calça de ginástica Levanta Bumbum, projetada especialmente para mulheres ativas que valorizam conforto e estética. Confeccionada com uma mistura de elastano e poliéster, essa calça oferece a combinação perfeita de elasticidade e resistência, garantindo liberdade total de movimento em qualquer atividade física, do yoga à musculação. Principais Características: - Modelo Levanta Bumbum: Realça suas curvas de forma natural e proporciona um contorno perfeito, valorizando o seu corpo. - Cintura Alta: A cintura elevada proporciona suporte adicional e modela a silhueta, oferecendo segurança e conforto durante os exercícios. Desenvolvida com tecnologia de alta qualidade, você pode se movimentar à vontade sem preocupações, garantindo total privacidade e estilo - Tecido de Alta Performance: O tecido respirável e de secagem rápida mantém você fresca e confortável, mesmo nos treinos mais intensos. Além de unir funcionalidade e moda, nossa calça foi pensada para a mulher moderna que não abre mão de se sentir bonita enquanto cuida da saúde. O design oferece um ajuste perfeito, acompanhando cada movimento do seu corpo, enquanto os detalhes pensados fazem toda a diferença no visual. Tamanhos disponíveis: UNICO Transforme seu guarda-roupa de treino e eleve sua experiência fitness com essa calça. Sinta-se confiante, confortável e pronta para conquistar seus objetivos! Adquira já a sua e comece a brilhar nos seus exercícios! COR: CINZA, PRETO, ROSA E ROXO"
      },
      {
        id: "p25",
        name: "Empina Bumbum",
        price: 35.00,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/EMPINABUMBUM_2.jpeg",

        ],
        videos: [
          "/videos/EMPINABUMBUM.mp4" // caminho do seu vídeo
        ],
        description: "EMPINA BUMBUM TAMANHO UNICO VESTE ATE O 40 Aumente seu desempenho e estilo durante os treinos com a nossa calça de ginástica Levanta Bumbum, projetada especialmente para mulheres ativas que valorizam conforto e estética. Confeccionada com uma mistura de elastano e poliéster, essa calça oferece a combinação perfeita de elasticidade e resistência, garantindo liberdade total de movimento em qualquer atividade física, do yoga à musculação. Principais Características: - Modelo Levanta Bumbum: Realça suas curvas de forma natural e proporciona um contorno perfeito, valorizando o seu corpo. - Cintura Alta: A cintura elevada proporciona suporte adicional e modela a silhueta, oferecendo segurança e conforto durante os exercícios. Desenvolvida com tecnologia de alta qualidade, você pode se movimentar à vontade sem preocupações, garantindo total privacidade e estilo - Tecido de Alta Performance: O tecido respirável e de secagem rápida mantém você fresca e confortável, mesmo nos treinos mais intensos. Além de unir funcionalidade e moda, nossa calça foi pensada para a mulher moderna que não abre mão de se sentir bonita enquanto cuida da saúde. O design oferece um ajuste perfeito, acompanhando cada movimento do seu corpo, enquanto os detalhes pensados fazem toda a diferença no visual. Tamanhos disponíveis: UNICO Transforme seu guarda-roupa de treino e eleve sua experiência fitness com essa calça. Sinta-se confiante, confortável e pronta para conquistar seus objetivos! Adquira já a sua e comece a brilhar nos seus exercícios! COR: CINZA, PRETO, ROSA E ROXO"
      },
      {
        id: "p26",
        name: "Empina Bumbum",
        price: 35.00,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/EMPINABUMBUM_3.jpeg",

        ],
        videos: [
          "/videos/EMPINABUMBUM.mp4" // caminho do seu vídeo
        ],
        description: "EMPINA BUMBUM TAMANHO UNICO VESTE ATE O 40 Aumente seu desempenho e estilo durante os treinos com a nossa calça de ginástica Levanta Bumbum, projetada especialmente para mulheres ativas que valorizam conforto e estética. Confeccionada com uma mistura de elastano e poliéster, essa calça oferece a combinação perfeita de elasticidade e resistência, garantindo liberdade total de movimento em qualquer atividade física, do yoga à musculação. Principais Características: - Modelo Levanta Bumbum: Realça suas curvas de forma natural e proporciona um contorno perfeito, valorizando o seu corpo. - Cintura Alta: A cintura elevada proporciona suporte adicional e modela a silhueta, oferecendo segurança e conforto durante os exercícios. Desenvolvida com tecnologia de alta qualidade, você pode se movimentar à vontade sem preocupações, garantindo total privacidade e estilo - Tecido de Alta Performance: O tecido respirável e de secagem rápida mantém você fresca e confortável, mesmo nos treinos mais intensos. Além de unir funcionalidade e moda, nossa calça foi pensada para a mulher moderna que não abre mão de se sentir bonita enquanto cuida da saúde. O design oferece um ajuste perfeito, acompanhando cada movimento do seu corpo, enquanto os detalhes pensados fazem toda a diferença no visual. Tamanhos disponíveis: UNICO Transforme seu guarda-roupa de treino e eleve sua experiência fitness com essa calça. Sinta-se confiante, confortável e pronta para conquistar seus objetivos! Adquira já a sua e comece a brilhar nos seus exercícios! COR: CINZA, PRETO, ROSA E ROXO"
      },
      {
        id: "p27",
        name: "Empina Bumbum",
        price: 35.00,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/EMPINABUMBUM_4.jpeg",

        ],
        videos: [
          "/videos/EMPINABUMBUM.mp4" // caminho do seu vídeo
        ],
        description: "EMPINA BUMBUM TAMANHO UNICO VESTE ATE O 40 Aumente seu desempenho e estilo durante os treinos com a nossa calça de ginástica Levanta Bumbum, projetada especialmente para mulheres ativas que valorizam conforto e estética. Confeccionada com uma mistura de elastano e poliéster, essa calça oferece a combinação perfeita de elasticidade e resistência, garantindo liberdade total de movimento em qualquer atividade física, do yoga à musculação. Principais Características: - Modelo Levanta Bumbum: Realça suas curvas de forma natural e proporciona um contorno perfeito, valorizando o seu corpo. - Cintura Alta: A cintura elevada proporciona suporte adicional e modela a silhueta, oferecendo segurança e conforto durante os exercícios. Desenvolvida com tecnologia de alta qualidade, você pode se movimentar à vontade sem preocupações, garantindo total privacidade e estilo - Tecido de Alta Performance: O tecido respirável e de secagem rápida mantém você fresca e confortável, mesmo nos treinos mais intensos. Além de unir funcionalidade e moda, nossa calça foi pensada para a mulher moderna que não abre mão de se sentir bonita enquanto cuida da saúde. O design oferece um ajuste perfeito, acompanhando cada movimento do seu corpo, enquanto os detalhes pensados fazem toda a diferença no visual. Tamanhos disponíveis: UNICO Transforme seu guarda-roupa de treino e eleve sua experiência fitness com essa calça. Sinta-se confiante, confortável e pronta para conquistar seus objetivos! Adquira já a sua e comece a brilhar nos seus exercícios! COR: CINZA, PRETO, ROSA E ROXO"
      },

    ]
  },

  {
    slug: "Macaquinho Tyedye",
    name: "Macaquinho Tyedye",
    seoTitle: "Macaquinho Tyedye",
    description: "Estampa Tie Dye digital vibrante que combina estilo e autenticidade.",
    products: [
      {
        id: "p29",
        name: "Macaquinho Tyedye Verde",
        price: 79.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/MACAQUINHOTYEDYE_1.jpeg",
          "/img/MACAQUINHOTYEDYE_2.jpeg",
          "/img/MACAQUINHOTYEDYE_3.jpeg",


        ],
        videos: [
          "/videos/MACAQUINHOTYEDYE.mp4" // caminho do seu vídeo
        ],
        description: "Material: 100% Poliamida - Composição: 100% Poliamida - Detalhes: Macaquinho Tie Dye - Tipo de Manga: Alça - Gênero: FemininO - Com bojo - Tamanho P/M G/GG DIFERENCIAIS DO PRODUTO: - Design inovador: Estampa Tie Dye digital vibrante que combina estilo e autenticidade. - Conforto superior: Fabricado em 100% poliamida, oferece suavidade e respirabilidade. - Versatilidade esportiva: Ideal para academia, natação e atividades ao ar livre. - Modelagem favorecedora: Design para uma silhueta mais definida. - Durabilidade assegurada: Material de alta qualidade que mantém a forma e a cor após várias lavagens. SOBRE O PRODUTO: Descubra o conforto e estilo com nosso Macaquinho Tie Dye Sport. Este design exclusivo, perfeccionista em detalhes com as costas estilo regata, valoriza sua silhueta enquanto realiza atividades físicas. É a escolha perfeita para mulheres que buscam conforto, suporte e estilo em uma única peça. PERGUNTAS FREQUENTES: Possui bojo? SIM P: Com qual material é feito o macaquinho? R: É feito 100% em poliamida. P: Este macaquinho é adequado para quais atividades? R: Perfeito para academia, natação e até mesmo para passeios casuais. P: Possui alguma transparência? R: Não, o tecido de poliamida garante zero transparência.P: Qual é o destaque deste design? R: Seu desing modelador. Estampa Tie Dye que são super tendência. POSSUI BOJO"
      },
      {
        id: "p30",
        name: "Macaquinho Tyedye Rosa",
        price: 79.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/MACAQUINHOTYEDYE_4.jpeg",
          "/img/MACAQUINHOTYEDYE_5.jpeg",
          "/img/MACAQUINHOTYEDYE_6.jpeg",


        ],
        videos: [
          "/videos/MACAQUINHOTYEDYE.mp4" // caminho do seu vídeo
        ],
        description: "Material: 100% Poliamida - Composição: 100% Poliamida - Detalhes: Macaquinho Tie Dye - Tipo de Manga: Alça - Gênero: FemininO - Com bojo - Tamanho P/M G/GG DIFERENCIAIS DO PRODUTO: - Design inovador: Estampa Tie Dye digital vibrante que combina estilo e autenticidade. - Conforto superior: Fabricado em 100% poliamida, oferece suavidade e respirabilidade. - Versatilidade esportiva: Ideal para academia, natação e atividades ao ar livre. - Modelagem favorecedora: Design para uma silhueta mais definida. - Durabilidade assegurada: Material de alta qualidade que mantém a forma e a cor após várias lavagens. SOBRE O PRODUTO: Descubra o conforto e estilo com nosso Macaquinho Tie Dye Sport. Este design exclusivo, perfeccionista em detalhes com as costas estilo regata, valoriza sua silhueta enquanto realiza atividades físicas. É a escolha perfeita para mulheres que buscam conforto, suporte e estilo em uma única peça. PERGUNTAS FREQUENTES: Possui bojo? SIM P: Com qual material é feito o macaquinho? R: É feito 100% em poliamida. P: Este macaquinho é adequado para quais atividades? R: Perfeito para academia, natação e até mesmo para passeios casuais. P: Possui alguma transparência? R: Não, o tecido de poliamida garante zero transparência.P: Qual é o destaque deste design? R: Seu desing modelador. Estampa Tie Dye que são super tendência. POSSUI BOJO"
      },
      {
        id: "p31",
        name: "Macaquinho Tyedye Preto",
        price: 79.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/MACAQUINHOTYEDYE_7.jpeg",
          "/img/MACAQUINHOTYEDYE_8.jpeg",


        ],
        videos: [
          "/videos/MACAQUINHOTYEDYE.mp4" // caminho do seu vídeo
        ],
        description: "Material: 100% Poliamida - Composição: 100% Poliamida - Detalhes: Macaquinho Tie Dye - Tipo de Manga: Alça - Gênero: FemininO - Com bojo - Tamanho P/M G/GG DIFERENCIAIS DO PRODUTO: - Design inovador: Estampa Tie Dye digital vibrante que combina estilo e autenticidade. - Conforto superior: Fabricado em 100% poliamida, oferece suavidade e respirabilidade. - Versatilidade esportiva: Ideal para academia, natação e atividades ao ar livre. - Modelagem favorecedora: Design para uma silhueta mais definida. - Durabilidade assegurada: Material de alta qualidade que mantém a forma e a cor após várias lavagens. SOBRE O PRODUTO: Descubra o conforto e estilo com nosso Macaquinho Tie Dye Sport. Este design exclusivo, perfeccionista em detalhes com as costas estilo regata, valoriza sua silhueta enquanto realiza atividades físicas. É a escolha perfeita para mulheres que buscam conforto, suporte e estilo em uma única peça. PERGUNTAS FREQUENTES: Possui bojo? SIM P: Com qual material é feito o macaquinho? R: É feito 100% em poliamida. P: Este macaquinho é adequado para quais atividades? R: Perfeito para academia, natação e até mesmo para passeios casuais. P: Possui alguma transparência? R: Não, o tecido de poliamida garante zero transparência.P: Qual é o destaque deste design? R: Seu desing modelador. Estampa Tie Dye que são super tendência. POSSUI BOJO"
      },
      {
        id: "p32",
        name: "Macaquinho Tyedye Cinza",
        price: 79.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/MACAQUINHOTYEDYE_10.jpeg",
          "/img/MACAQUINHOTYEDYE_11.jpeg",


        ],
        videos: [
          "/videos/MACAQUINHOTYEDYE.mp4" // caminho do seu vídeo
        ],
        description: "Material: 100% Poliamida - Composição: 100% Poliamida - Detalhes: Macaquinho Tie Dye - Tipo de Manga: Alça - Gênero: FemininO - Com bojo - Tamanho P/M G/GG DIFERENCIAIS DO PRODUTO: - Design inovador: Estampa Tie Dye digital vibrante que combina estilo e autenticidade. - Conforto superior: Fabricado em 100% poliamida, oferece suavidade e respirabilidade. - Versatilidade esportiva: Ideal para academia, natação e atividades ao ar livre. - Modelagem favorecedora: Design para uma silhueta mais definida. - Durabilidade assegurada: Material de alta qualidade que mantém a forma e a cor após várias lavagens. SOBRE O PRODUTO: Descubra o conforto e estilo com nosso Macaquinho Tie Dye Sport. Este design exclusivo, perfeccionista em detalhes com as costas estilo regata, valoriza sua silhueta enquanto realiza atividades físicas. É a escolha perfeita para mulheres que buscam conforto, suporte e estilo em uma única peça. PERGUNTAS FREQUENTES: Possui bojo? SIM P: Com qual material é feito o macaquinho? R: É feito 100% em poliamida. P: Este macaquinho é adequado para quais atividades? R: Perfeito para academia, natação e até mesmo para passeios casuais. P: Possui alguma transparência? R: Não, o tecido de poliamida garante zero transparência.P: Qual é o destaque deste design? R: Seu desing modelador. Estampa Tie Dye que são super tendência. POSSUI BOJO"
      },


    ]

  },
  /* Conjunto Empina Bumbum Yoga */
  {
    slug: "Conjunto Empina Bumbum Yoga",
    name: "Top + Shorts",
    seoTitle: "Conjunto Empina Bumbum Yoga",
    description: "Conjunto fitness empina bumbum  yoga importado de alta qualidade",
    products: [
      {
        id: "p40",
        name: "Conjunto Empina Bumbum Yoga Roxo",
        price: 49.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/empinabumbumyoga_azul-1.jpeg",
          "/img/empinabumbumyoga_azul.jpeg",


        ],
        videos: [
        ],
        description: "Conjunto fitness empina bumbum  yoga importado de alta qualidade, com uma tecnologia inovadora respiravel deixando seus treinos muito mais confortaveis TAMANHO UNICO DO 36 AO 42 Pessoas aplicáveis: Feminino Cenários aplicáveis: Corrida, Yoga, Fitness, musculação Função de respirável, absorção de umidade, secagem rápida Tipo de gola redonda: Pescoço redondo Material da linha: Material: algodão e poliester Comprimento da manga/comprimento da manga: estilo curto/manga curta Comprimento da Calça: Shorts Top com bojo Tamanho: Unico serve para todos ate 42 Efeito empina bumbum que modela o corpo.",
      },
      {
        id: "p36",
        name: "Conjunto Empina Bumbum Yoga Azul Bebe",
        price: 49.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/empinabumbumyoga_azul-bebe-1.jpeg",
          "/img/empinabumbumyoga_azul-bebe.jpeg",


        ],
        videos: [
        ],
        description: "Conjunto fitness empina bumbum  yoga importado de alta qualidade, com uma tecnologia inovadora respiravel deixando seus treinos muito mais confortaveis TAMANHO UNICO DO 36 AO 42 Pessoas aplicáveis: Feminino Cenários aplicáveis: Corrida, Yoga, Fitness, musculação Função de respirável, absorção de umidade, secagem rápida Tipo de gola redonda: Pescoço redondo Material da linha: Material: algodão e poliester Comprimento da manga/comprimento da manga: estilo curto/manga curta Comprimento da Calça: Shorts Top com bojo Tamanho: Unico serve para todos ate 42 Efeito empina bumbum que modela o corpo.",
      },
      {
        id: "p37",
        name: "Conjunto Empina Bumbum Yoga Cinza",
        price: 49.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/empinabumbumyoga_cinza-1.jpeg",
          "/img/empinabumbumyoga_cinza.jpeg",


        ],
        videos: [
        ],
        description: "Conjunto fitness empina bumbum  yoga importado de alta qualidade, com uma tecnologia inovadora respiravel deixando seus treinos muito mais confortaveis TAMANHO UNICO DO 36 AO 42 Pessoas aplicáveis: Feminino Cenários aplicáveis: Corrida, Yoga, Fitness, musculação Função de respirável, absorção de umidade, secagem rápida Tipo de gola redonda: Pescoço redondo Material da linha: Material: algodão e poliester Comprimento da manga/comprimento da manga: estilo curto/manga curta Comprimento da Calça: Shorts Top com bojo Tamanho: Unico serve para todos ate 42 Efeito empina bumbum que modela o corpo.",
      },
      {
        id: "p38",
        name: "Conjunto Empina Bumbum Yoga Cinza",
        price: 49.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/empinabumbumyoga_rosa-1.jpeg",
          "/img/empinabumbumyoga_rosa.jpeg",


        ],
        videos: [
        ],
        description: "Conjunto fitness empina bumbum  yoga importado de alta qualidade, com uma tecnologia inovadora respiravel deixando seus treinos muito mais confortaveis TAMANHO UNICO DO 36 AO 42 Pessoas aplicáveis: Feminino Cenários aplicáveis: Corrida, Yoga, Fitness, musculação Função de respirável, absorção de umidade, secagem rápida Tipo de gola redonda: Pescoço redondo Material da linha: Material: algodão e poliester Comprimento da manga/comprimento da manga: estilo curto/manga curta Comprimento da Calça: Shorts Top com bojo Tamanho: Unico serve para todos ate 42 Efeito empina bumbum que modela o corpo.",
      },
      {
        id: "p39",
        name: "Conjunto Empina Bumbum Yoga Cinza",
        price: 49.99,
        weight: 0.38, // em kg = 380g
        images: [
          "/img/empinabumbumyoga_vermelho-2.jpeg",
          "/img/empinabumbumyoga_vermelho-1.jpeg",
          "/img/empinabumbumyoga_vermelho.jpeg",




        ],
        videos: [
        ],
        description: "Conjunto fitness empina bumbum  yoga importado de alta qualidade, com uma tecnologia inovadora respiravel deixando seus treinos muito mais confortaveis TAMANHO UNICO DO 36 AO 42 Pessoas aplicáveis: Feminino Cenários aplicáveis: Corrida, Yoga, Fitness, musculação Função de respirável, absorção de umidade, secagem rápida Tipo de gola redonda: Pescoço redondo Material da linha: Material: algodão e poliester Comprimento da manga/comprimento da manga: estilo curto/manga curta Comprimento da Calça: Shorts Top com bojo Tamanho: Unico serve para todos ate 42 Efeito empina bumbum que modela o corpo.",
      },


    ]

  },

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
