import React, { useRef, useState, useEffect } from 'react';
import { TRICKS_LIST } from '../config';

export const TricksGridSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayedTricks = TRICKS_LIST.slice(0, 5);
  const TOTAL_SLIDES = displayedTricks.length + 1; // 5 truques + 1 card com diversos truques

  // Rolagem suave e precisa para o card do índice indicado
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

  // Navegação ultra-responsiva pelas setas (loop infinito para nunca travar)
  const handleScroll = (direction: 'left' | 'right') => {
    const nextIdx = direction === 'left'
      ? (currentIndex === 0 ? TOTAL_SLIDES - 1 : currentIndex - 1)
      : (currentIndex === TOTAL_SLIDES - 1 ? 0 : currentIndex + 1);
    scrollToIndex(nextIdx);
  };

  // Centraliza o primeiro card ao carregar ou redimensionar a tela
  useEffect(() => {
    const handleResize = () => {
      scrollToIndex(currentIndex);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    // Pequeno delay para garantir que os elementos estejam medidos
    const timer = setTimeout(() => {
      scrollToIndex(0);
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="aprendizado" className="py-12 border-t-2 border-black/10 select-none">
      {/* CABEÇALHO DA SEÇÃO */}
      <div className="text-center max-w-[620px] mx-auto mb-6 px-4">
        <div className="inline-flex items-center bg-[#FFD400] text-black text-sm sm:text-base font-black px-4 py-1.5 border-2 border-black rounded-full shadow-[2px_2px_0_#000] -rotate-1 mb-3">
          <span>VÍDEOS PASSO A PASSO</span>
        </div>
        <h2 className="text-[clamp(26px,5.2vw,38px)] font-black text-black leading-tight tracking-tight mb-2.5">
          O que você vai aprender
        </h2>
        <p className="text-zinc-800 text-base sm:text-lg font-bold text-center">
          Você vai conseguir ensinar seu pet
        </p>
        <div className="flex justify-center mt-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-black animate-bounce"
            aria-hidden="true"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ÁREA DO CARROSSEL COM CONTROLES */}
      <div className="relative w-full max-w-[760px] mx-auto px-1 sm:px-4">
        {/* BOTÃO NAVEGAR ESQUERDA (ALTA RESPONSIVIDADE, ÁREA AMPLA E TOUCH OTIMIZADO) */}
        <button
          type="button"
          onClick={() => handleScroll('left')}
          aria-label="Vídeo anterior"
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFD400] border-[2.5px] border-black text-black flex items-center justify-center shadow-[3px_3px_0_#000] hover:scale-105 active:scale-90 active:shadow-[1px_1px_0_#000] transition-all cursor-pointer select-none touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-black"
            aria-hidden="true"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* BOTÃO NAVEGAR DIREITA (ALTA RESPONSIVIDADE, ÁREA AMPLA E TOUCH OTIMIZADO) */}
        <button
          type="button"
          onClick={() => handleScroll('right')}
          aria-label="Próximo vídeo"
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFD400] border-[2.5px] border-black text-black flex items-center justify-center shadow-[3px_3px_0_#000] hover:scale-105 active:scale-90 active:shadow-[1px_1px_0_#000] transition-all cursor-pointer select-none touch-manipulation"
          style={{ touchAction: 'manipulation' }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-black"
            aria-hidden="true"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* CONTAINER DO CARROSSEL:
            - overflow-x-hidden: desativa qualquer arraste ou rolagem manual/touch para os lados
            - touch-action: pan-y: o usuário só rola a página na vertical caso toque na área
            - Navegação exclusiva pelas setas laterais
        */}
        <div
          ref={carouselRef}
          role="region"
          aria-label="Carrossel de vídeos de truques"
          className="flex gap-4 sm:gap-6 overflow-x-hidden pb-4 pt-2 px-14 sm:px-16 scroll-smooth select-none"
          style={{
            touchAction: 'pan-y',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* PRIMEIROS 5 TRUQUES COM SEUS RESPECTIVOS LAYOUTS */}
          {displayedTricks.map((trick) => (
            <div
              key={trick.id}
              className="flex flex-col items-center shrink-0 w-[240px] sm:w-[270px] md:w-[290px] select-none"
            >
              {/* TÍTULO ACIMA DA ABA */}
              <div className="w-full text-center mb-2.5 px-2">
                <span className="font-heading text-base sm:text-lg font-black text-black leading-tight line-clamp-2 min-h-[44px] flex items-center justify-center">
                  {trick.title}
                </span>
              </div>

              {/* ABA / LAYOUT DE VÍDEO 9:16 (COM IMAGEM OU PRETO) */}
              <div className="w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden relative shadow-sm pointer-events-none">
                {trick.image ? (
                  <img
                    src={trick.image}
                    alt={trick.title}
                    width={290}
                    height={516}
                    className="w-full h-full object-cover select-none"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-black" />
                )}
              </div>
            </div>
          ))}

          {/* CARD FINAL AO LADO DO 5º TRUQUE: DIVERSOS TRUQUES */}
          <div className="flex flex-col items-center shrink-0 w-[240px] sm:w-[270px] md:w-[290px] select-none">
            {/* TÍTULO ACIMA DA ABA (ELEMENTO SELECIONADO) */}
            <div className="w-full text-center mb-2.5 px-2 min-h-[44px] flex items-center justify-center">
              <span className="font-heading text-base sm:text-lg font-black text-black leading-tight line-clamp-2">
                Diversos truques
              </span>
            </div>

            {/* ABA / LAYOUT 9:16 COM A IMAGEM SOLICITADA */}
            <div className="w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden relative shadow-sm pointer-events-none">
              <img
                src="https://i.imgur.com/0jDuTfR.png"
                alt="Diversos truques"
                width={290}
                height={516}
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
