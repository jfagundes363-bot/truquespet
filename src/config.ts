/**
 * CONFIGURAÇÕES GERAIS DA PÁGINA DE VENDAS
 * Edite aqui o nome do produto, links de checkout e informações de contato.
 */

export interface ProductConfig {
  nomeProduto: string;
  subtitulo: string;
  linkBasico: string;          // checkout do plano básico, R$ 9,90 (52PZV5S)
  linkCompleto: string;        // checkout do plano completo, R$ 19,90 (JV1NI9B)
  linkCompleto1999: string;    // compatibilidade
  linkPopUp1990: string;       // checkout R$ 19,90 (JV1NI9B)
  linkPopUp1490: string;       // checkout R$ 14,90 pop-up
  linkCompleto1490: string;    // compatibilidade
  emailSuporte: string;
  anoRodape: number;
  precoOriginal: string;       // Preço de ancoragem (ex: "47,90")
  precoBasico: string;         // "9,90"
  precoCompleto: string;       // "19,90"
  precoPopup: string;          // "14,90"
}

export const DEFAULT_CONFIG: ProductConfig = {
  nomeProduto: "Manual dos Truques Caninos",
  subtitulo: "Um tutorial leve e simples para fortalecer a conexão com seu pet, com treinos para que ela aprenda truques divertidos",
  // LINKS REAIS DE CHECKOUT WIVEN
  linkBasico: "https://checkout.wiven.com.br/checkout/cmvo3vzm73uto01pxpf89nc6k?offer=52PZV5S",
  linkCompleto: "https://checkout.wiven.com.br/checkout/cmvo3vzm73uto01pxpf89nc6k?offer=JV1NI9B",
  linkCompleto1999: "https://checkout.wiven.com.br/checkout/cmvo3vzm73uto01pxpf89nc6k?offer=JV1NI9B",
  linkPopUp1990: "https://checkout.wiven.com.br/checkout/cmvo3vzm73uto01pxpf89nc6k?offer=JV1NI9B",
  linkPopUp1490: "https://checkout.wiven.com.br/checkout/cmvo3vzm73uto01pxpf89nc6k?offer=DMW913B",
  linkCompleto1490: "https://checkout.wiven.com.br/checkout/cmvo3vzm73uto01pxpf89nc6k?offer=DMW913B",
  emailSuporte: "adsfagundiz@gmail.com",
  anoRodape: 2026,
  precoOriginal: "47,90",
  precoBasico: "9,90",
  precoCompleto: "19,90",
  precoPopup: "14,90",
};

export interface TrickItem {
  id: string;
  title: string;
  desc: string;
  emoji: string;
  tag: string;
  image?: string;
}

export const TRICKS_LIST: TrickItem[] = [
  {
    id: "sentar",
    title: "Sentar",
    desc: "O comando mestre para ter calma e atenção imediata em qualquer lugar.",
    emoji: "🐶",
    tag: "Básico Essencial",
    image: "https://i.imgur.com/T7F0SjA.png"
  },
  {
    id: "nao",
    title: "Não!",
    desc: "Comando de interrupção e autocontrole para evitar travessuras e perigos.",
    emoji: "✋",
    tag: "Obediência",
    image: "https://i.imgur.com/p4SiSjq.png"
  },
  {
    id: "dar-a-pata",
    title: "Dar a pata",
    desc: "O clássico favorito de visitas e crianças, super fácil de ensinar.",
    emoji: "🐾",
    tag: "Favorito da Galera",
    image: "https://i.imgur.com/P2ZiP0a.png"
  },
  {
    id: "deitar",
    title: "Deitar",
    desc: "Ensine ele a relaxar e esperar confortavelmente sob comando.",
    emoji: "🛋️",
    tag: "Básico Essencial",
    image: "https://i.imgur.com/PKK9cB7.png"
  },
  {
    id: "girar",
    title: "Girar",
    desc: "Um truque dinâmico e alegre que diverte o cão e quem está assistindo.",
    emoji: "🔄",
    tag: "Divertido",
    image: "https://i.imgur.com/jRUX7Ph.png"
  },
  {
    id: "fingir-de-morto",
    title: "Fingir de morto",
    desc: "O famoso truque teatral que arranca risadas e aplausos de todos.",
    emoji: "💥",
    tag: "Avançado Criativo"
  },
  {
    id: "vem",
    title: "Vem!",
    desc: "Chamado infalível para ele vir correndo até você com alegria e segurança.",
    emoji: "⚡",
    tag: "Segurança Máxima"
  },
  {
    id: "ficar",
    title: "Ficar",
    desc: "Segurança total: evita que ele fuja ou saia correndo para a rua.",
    emoji: "🛑",
    tag: "Segurança"
  },
  {
    id: "rastejar",
    title: "Rastejar",
    desc: "Movimento militar super engraçado e estimulante para o corpo do pet.",
    emoji: "🪖",
    tag: "Agilidade"
  },
  {
    id: "rolar",
    title: "Rolar",
    desc: "O truque acrobático e fofo que parece mágica e fortalece a conexão.",
    emoji: "💫",
    tag: "Acrobático"
  },
  {
    id: "pegar-brinquedo",
    title: "Pegar um brinquedo (ou outro objeto)",
    desc: "Ensine a identificar e trazer objetos pelo nome de forma inteligente.",
    emoji: "🎾",
    tag: "Inteligência"
  },
  {
    id: "sentar-bonitinho",
    title: "Sentar bonitinho",
    desc: "A pose clássica de 'ficar em pé' nas patas traseiras que derrete corações.",
    emoji: "🥺",
    tag: "Super Fofo"
  },
  {
    id: "toca-aqui",
    title: "Toca aqui",
    desc: "O 'high-five' canino perfeito para comemorar cada acerto com seu amigo.",
    emoji: "✋",
    tag: "Interação"
  },
  {
    id: "dar-lambeijo",
    title: "Dar um lambeijo",
    desc: "Comando de carinho suave na bochecha sob pedido, puro amor.",
    emoji: "❤️",
    tag: "Afeto"
  },
  {
    id: "ir-ate-um-lugar",
    title: "Ir até um lugar",
    desc: "Ensine ele a ir para a caminha ou local determinado e aguardar tranquilo.",
    emoji: "🎯",
    tag: "Controle & Paz"
  }
];

export interface FaqItem {
  id: string;
  pergunta: string;
  resposta: string;
}

export const FAQ_LIST: FaqItem[] = [
  {
    id: "faq-1",
    pergunta: "Preciso de algum equipamento caro?",
    resposta: "Não! Você só precisa do seu cachorro, da comida/ração habitual dele ou petiscos que você já tem em casa (como pedacinhos de frango ou cenoura) e 10 minutinhos do seu dia."
  },
  {
    id: "faq-2",
    pergunta: "Serve para filhotes e cães idosos?",
    resposta: "Sim! O método respeita o ritmo de cada animal. Filhotes a partir de 2 meses já aprendem brincando, e cães idosos mantêm a mente ativa e evitam o tédio."
  },
  {
    id: "faq-3",
    pergunta: "Como e quando recebo o material?",
    resposta: "Imediatamente após a aprovação da compra (no Pix ou Cartão, a liberação é instantânea). Você recebe o acesso no seu e-mail e pode ler ou assistir direto no celular, tablet ou computador."
  },
  {
    id: "faq-4",
    pergunta: "E se o meu cachorro for muito agitado ou teimoso?",
    resposta: "Cães 'teimosos' normalmente só estão sem motivação correta ou confusos. O tutorial ensina a falar a linguagem deles com passos pequenininhos para que eles acertem de primeira e sintam prazer em cooperar."
  },
  {
    id: "faq-5",
    pergunta: "Quanto tempo por dia preciso treinar?",
    resposta: "Apenas 10 a 15 minutos por dia! Sessões curtas são muito mais eficientes do que treinos longos e cansativos. É rápido e cabe na rotina de qualquer pessoa."
  },
  {
    id: "faq-6",
    pergunta: "Como funciona a garantia de 7 dias?",
    resposta: "É risco zero para você. Se dentro de 7 dias você achar que o tutorial não serviu para o seu cachorro, basta enviar um e-mail para o suporte e você receberá 100% do seu dinheiro de volta, sem perguntas chatas."
  }
];

export interface BonusItem {
  id: string;
  titulo: string;
  descricao: string;
  valorOriginal: string;
  icone: string;
  imagem: string;
  imagemFallback: string;
}

export const BONUSES_LIST: BonusItem[] = [
  {
    id: "bonus-1",
    titulo: "BÔNUS #1: Guia de Petiscos Caseiros, Saudáveis e Baratos",
    descricao: "Receitas simples de 3 ingredientes que custam centavos para fazer em casa e deixam qualquer cachorro doido para treinar.",
    valorOriginal: "R$ 27,00",
    icone: "🍖",
    imagem: "https://i.imgur.com/Vasvgzb.png",
    imagemFallback: "/images/bonus-1.png"
  },
  {
    id: "bonus-2",
    titulo: "BÔNUS #2: Checklist da Rotina de Treino de 10 Minutos",
    descricao: "Um cronograma visual pronto para imprimir ou ver no celular, para você acompanhar a evolução diária sem esquecer nada.",
    valorOriginal: "R$ 19,00",
    icone: "📋",
    imagem: "https://i.imgur.com/a8zMKNU.png",
    imagemFallback: "/images/bonus-2.png"
  },
  {
    id: "bonus-3",
    titulo: "BÔNUS #3: Mini-Guia: Como Parar Cão de Pular em Visitas",
    descricao: "Técnica simples de redirecionamento para o cão cumprimentar visitas com as 4 patas no chão, sem arranhar ninguém.",
    valorOriginal: "R$ 24,00",
    icone: "🚪",
    imagem: "https://i.imgur.com/OvS9T9F.png",
    imagemFallback: "/images/bonus-3.png"
  }
];
