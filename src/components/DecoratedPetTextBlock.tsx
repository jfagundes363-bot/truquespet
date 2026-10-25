import React, { useEffect, useRef } from 'react';

export const DecoratedPetTextBlock: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Animação de entrada suave com IntersectionObserver
  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('subhead-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(cardEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex justify-center mt-3 mb-6 sm:mt-5 sm:mb-8 px-2 sm:px-4 select-none">
      {/* CARD PRINCIPAL ORGANIZADO E SEM BORDA */}
      <div
        ref={cardRef}
        id="mini-subheadline-card"
        className="subhead-card w-full max-w-[720px] bg-white border-0 border-none rounded-[14px] shadow-none py-3 sm:py-5 md:py-6 px-3 sm:px-6 text-center transition-all duration-300"
        style={{ boxSizing: 'border-box', border: 'none', boxShadow: 'none' }}
      >
        {/* LINHA 1 (POPPINS 700) */}
        <p
          className="subhead-line-1 font-bold text-black leading-[1.3] text-center tracking-tight mb-2 sm:mb-2.5"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(16px, 3.8vw, 22px)',
            fontWeight: 700,
          }}
        >
          Um jeito simples de fortalecer a{' '}
          <mark className="bg-[#FFD400] text-black px-2 py-0.5 border-2 border-black rounded-md inline-block -rotate-1 shadow-[2px_2px_0_#000] align-baseline mx-0.5">
            conexão
          </mark>{' '}
          com seu pet
        </p>

        {/* LINHA 2 (ARCHIVO BLACK - DESTAQUE MAIOR) */}
        <p
          className="subhead-line-2 font-black text-black leading-[1.2] text-center tracking-tight"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: 'clamp(21px, 5.5vw, 36px)',
            fontWeight: 900,
          }}
        >
          Ensine ele{' '}
          <mark className="bg-[#FFD400] text-black px-2.5 py-0.5 border-[2px] border-black rounded-lg inline-block rotate-1 shadow-[2.5px_2.5px_0_#000] align-baseline mx-0.5">
            truques divertidos
          </mark>
          !
        </p>
      </div>

      {/* ESTILOS EMBUTIDOS */}
      <style>{`
        .subhead-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .subhead-card.subhead-revealed {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .subhead-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};
