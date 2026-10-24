import React, { useRef, useState, useEffect } from 'react';

interface TestimonialImage {
  url: string;
  width: number;
  height: number;
  aspectRatio: string;
}

const TESTIMONIALS_IMAGES: TestimonialImage[] = [
  {
    url: 'https://i.imgur.com/qMhpn5r.png',
    width: 1024,
    height: 1536,
    aspectRatio: '1024 / 1536',
  },
  {
    url: 'https://i.imgur.com/z7pYJ0J.png',
    width: 1024,
    height: 1536,
    aspectRatio: '1024 / 1536',
  },
  {
    url: 'https://i.imgur.com/ZXKwmDn.png',
    width: 1024,
    height: 1536,
    aspectRatio: '1024 / 1536',
  },
  {
    url: 'https://i.imgur.com/4w5psQy.png',
    width: 941,
    height: 1672,
    aspectRatio: '941 / 1672',
  },
  {
    url: 'https://i.imgur.com/6bVpdzY.png',
    width: 941,
    height: 1672,
    aspectRatio: '941 / 1672',
  },
  {
    url: 'https://i.imgur.com/qMISRaR.png',
    width: 941,
    height: 1672,
    aspectRatio: '941 / 1672',
  },
];

interface TextReview {
  name: string;
  rating: number;
  text: string;
}

// Metade 1 (10 relatos)
const ROW1_REVIEWS: TextReview[] = [
  {
    name: 'Mariana Silveira',
    rating: 5,
    text: 'Superou totalmente as minhas expectativas! O atendimento foi muito ágil e o produto chegou antes do prazo previsto. Com certeza comprarei novamente.',
  },
  {
    name: 'Lucas Andrade',
    rating: 4,
    text: 'Muito bom serviço, cumpriu com tudo o que prometeu. O suporte tirou todas as minhas dúvidas com clareza. Recomendo a todos!',
  },
  {
    name: 'Camila Ferreira',
    rating: 5,
    text: 'Experiência maravilhosa do início ao fim. A qualidade é visível em cada detalhe e fez toda a diferença para o que eu precisava.',
  },
  {
    name: 'Rodrigo Mendes',
    rating: 4,
    text: 'Gostei bastante! Foi uma ótima aquisição e facilitou muito a minha rotina. O processo de compra também foi bastante simples.',
  },
  {
    name: 'Beatriz Costa',
    rating: 5,
    text: 'Estou simplesmente apaixonada pelo resultado. Já recomendei para vários amigos e familiares. Nota dez pelo profissionalismo!',
  },
  {
    name: 'Thiago Nascimento',
    rating: 5,
    text: 'Excelente custo-benefício. O cuidado na apresentação e a eficiência no envio foram pontos que me surpreenderam bastante.',
  },
  {
    name: 'Juliana Ramos',
    rating: 4,
    text: 'Muito satisfeita com a minha compra. Chegou tudo certinho e bem embalado. Excelente experiência no geral.',
  },
  {
    name: 'Gabriel Santos',
    rating: 5,
    text: 'Sensacional! Estava com um pouco de receio no começo, mas a entrega foi impecável e super rápida. Ganhou um cliente fiel.',
  },
  {
    name: 'Fernanda Lima',
    rating: 5,
    text: 'O suporte foi extremamente atencioso quando precisei de ajuda para finalizar o pedido. A qualidade é indiscutível.',
  },
  {
    name: 'Renato Barbosa',
    rating: 4,
    text: 'Produto de qualidade e funcionamento perfeito. A entrega demorou apenas um pouquinho além do que eu imaginava, mas o atendimento resolveu tudo rapidamente.',
  },
];

// Metade 2 (10 relatos)
const ROW2_REVIEWS: TextReview[] = [
  {
    name: 'Larissa Rocha',
    rating: 5,
    text: 'Prático, eficiente e muito bonito. Dá para perceber o capricho em cada detalhe. Valeu muito o investimento!',
  },
  {
    name: 'Bruno Martins',
    rating: 5,
    text: 'Top demais! Processo muito transparente e direto ao ponto. Com certeza voltarei a fazer negócio no futuro.',
  },
  {
    name: 'Aline Moreira',
    rating: 4,
    text: 'Adorei a facilidade de navegação e a rapidez para fechar a compra. Atendeu muito bem ao que eu estava buscando.',
  },
  {
    name: 'Felipe Duarte',
    rating: 5,
    text: 'Profissionalismo exemplar! Fiquei impressionado com o nível de detalhe e com o suporte pós-venda. Parabéns pelo trabalho.',
  },
  {
    name: 'Patrícia Neves',
    rating: 5,
    text: 'Uma das melhores experiências de compra online que já tive recentemente. Tudo perfeito e sem complicação.',
  },
  {
    name: 'Leonardo Gomes',
    rating: 4,
    text: 'Muito bom, funcional e confiável. Cumpre exatamente o que está anunciado no site. Recomendo com segurança.',
  },
  {
    name: 'Vanessa Carvalho',
    rating: 5,
    text: 'Simplesmente impecável! A atenção prestada ao cliente fez toda a diferença para mim. Parabéns a toda a equipe envolvida.',
  },
  {
    name: 'Diego Pires',
    rating: 5,
    text: 'Qualidade acima da média e entrega rápida. Resolveu perfeitamente a minha necessidade, muito satisfeito.',
  },
  {
    name: 'Natália Ribeiro',
    rating: 4,
    text: 'Gostei bastante da experiência e da clareza de todas as etapas. O produto é muito bom e bem feito.',
  },
  {
    name: 'Eduardo Vasconcelos',
    rating: 5,
    text: 'Excelente em todos os sentidos: agilidade, suporte e qualidade final. Podem comprar sem medo!',
  },
];

export const TestimonialsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const TOTAL_IMAGES = TESTIMONIALS_IMAGES.length;

  const scrollToIndex = (idx: number) => {
    if (!carouselRef.current) return;
    const children = Array.from(carouselRef.current.children) as HTMLElement[];
    const targetEl = children[idx];
    if (!targetEl) return;
    const container = carouselRef.current;
    const targetLeft = targetEl.offsetLeft - (container.clientWidth - targetEl.offsetWidth) / 2;
    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: 'smooth',
    });
    setCurrentIndex(idx);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const nextIdx = direction === 'left'
      ? (currentIndex === 0 ? TOTAL_IMAGES - 1 : currentIndex - 1)
      : (currentIndex === TOTAL_IMAGES - 1 ? 0 : currentIndex + 1);
    scrollToIndex(nextIdx);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToIndex(0);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="depoimentos" className="py-12 border-t-2 border-black/10 select-none overflow-hidden">
      {/* CABEÇALHO DA SEÇÃO */}
      <div className="text-center max-w-[660px] mx-auto mb-6 px-4">
        <h2 className="text-[clamp(28px,5vw,40px)] font-heading text-center mb-2.5">
          O que dizem os donos
        </h2>
        <p className="text-center text-zinc-700 text-base md:text-lg font-medium max-w-[540px] mx-auto">
          Relatos de quem aplicou o passo a passo com seus cães na vida real.
        </p>
      </div>

      {/* 1. CARROSSEL DE IMAGENS COM CONTROLES */}
      <div className="relative w-full max-w-[860px] mx-auto px-1 sm:px-4 mb-10">
        {/* BOTÃO NAVEGAR ESQUERDA */}
        <button
          type="button"
          onClick={() => handleScroll('left')}
          aria-label="Relato anterior"
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFD400] border-[2.5px] border-black text-black flex items-center justify-center shadow-[3px_3px_0_#000] hover:scale-105 active:scale-90 active:shadow-[1px_1px_0_#000] transition-all cursor-pointer select-none touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black" aria-hidden="true">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* BOTÃO NAVEGAR DIREITA */}
        <button
          type="button"
          onClick={() => handleScroll('right')}
          aria-label="Próximo relato"
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFD400] border-[2.5px] border-black text-black flex items-center justify-center shadow-[3px_3px_0_#000] hover:scale-105 active:scale-90 active:shadow-[1px_1px_0_#000] transition-all cursor-pointer select-none touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* PISTA DO CARROSSEL DE IMAGENS AJUSTADA À PROPORÇÃO EXATA DE CADA ARQUIVO */}
        <div
          ref={carouselRef}
          role="region"
          aria-label="Carrossel de imagens de relatos"
          className="flex gap-4 sm:gap-6 overflow-x-hidden pb-4 pt-2 px-12 sm:px-16 scroll-smooth select-none items-center h-[460px] sm:h-[520px] md:h-[560px]"
          style={{
            touchAction: 'pan-y',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {TESTIMONIALS_IMAGES.map((item, index) => (
            <div
              key={index}
              className="h-full shrink-0 select-none flex items-center justify-center"
            >
              {/* CARD MOLDURA COM ASPECT RATIO NATIVO DA IMAGEM (SEM CORTE E SEM BARRAS PRETAS) */}
              <div
                className="h-full rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0_#000] bg-white flex items-center justify-center relative"
                style={{ aspectRatio: item.aspectRatio }}
              >
                <img
                  src={item.url}
                  alt={`Relato de dono ${index + 1}`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover block select-none"
                  style={{
                    imageRendering: 'auto',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. DOIS CARROSSEIS INFINITOS DE RELATOS EM TEXTO GIRANDO EM DIREÇÕES OPOSTAS (FLUXO PERPÉTUO SEM PARAR) */}
      <div className="w-full py-4 space-y-4 pointer-events-none select-none">
        {/* FAIXA 1: GIRANDO DA DIREITA PARA A ESQUERDA */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] pointer-events-none select-none">
          <div className="animate-marquee-left flex gap-4 py-2 pointer-events-none select-none">
            {[...ROW1_REVIEWS, ...ROW1_REVIEWS].map((item, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0_#000] flex flex-col justify-between pointer-events-none select-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#FFD400] border-1.5 border-black text-black font-extrabold text-xs flex items-center justify-center shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-black leading-tight">{item.name}</div>
                        <div className="text-[10px] text-emerald-700 font-bold flex items-center gap-0.5">
                          <span>✓</span> Compra Verificada
                        </div>
                      </div>
                    </div>
                    <div className="text-[#FFB800] text-sm tracking-tighter">
                      {'★'.repeat(item.rating)}
                      {'☆'.repeat(5 - item.rating)}
                    </div>
                  </div>
                  <p className="text-zinc-800 text-xs sm:text-sm font-medium leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAIXA 2: GIRANDO DA ESQUERDA PARA A DIREITA (SENTIDO OPOSTO) */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] pointer-events-none select-none">
          <div className="animate-marquee-right flex gap-4 py-2 pointer-events-none select-none">
            {[...ROW2_REVIEWS, ...ROW2_REVIEWS].map((item, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0_#000] flex flex-col justify-between pointer-events-none select-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-400 border-1.5 border-black text-black font-extrabold text-xs flex items-center justify-center shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-black leading-tight">{item.name}</div>
                        <div className="text-[10px] text-emerald-700 font-bold flex items-center gap-0.5">
                          <span>✓</span> Compra Verificada
                        </div>
                      </div>
                    </div>
                    <div className="text-[#FFB800] text-sm tracking-tighter">
                      {'★'.repeat(item.rating)}
                      {'☆'.repeat(5 - item.rating)}
                    </div>
                  </div>
                  <p className="text-zinc-800 text-xs sm:text-sm font-medium leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
