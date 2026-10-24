import React from 'react';
import { ProductConfig } from '../config';

interface PricingSectionProps {
  config: ProductConfig;
  onSelectBasic: () => void;
  onSelectComplete: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  config,
  onSelectBasic,
  onSelectComplete,
}) => {
  return (
    <section id="planos" className="py-12 border-t-2 border-black/10">
      <h2 className="text-[clamp(28px,5vw,42px)] font-heading text-center mb-8">
        O que você prefere receber?
      </h2>

      <div className="flex flex-col gap-8 max-w-[560px] mx-auto">
        {/* CARD 1: PLANO COMPLETO (PRIMEIRO E EM DESTAQUE COM IMAGEM WTs1wub) */}
        <div
          className="relative p-4 sm:p-6 md:p-8 bg-[#FFF7CC] rounded-xl text-center flex flex-col items-center !border-none"
          style={{ border: 'none', boxShadow: 'none' }}
        >
          {/* Selo rotacionado */}
          <div className="absolute -top-4 right-4 bg-[#FFD400] text-black border-[3px] border-black px-3.5 py-1 rounded-md font-heading text-xs md:text-sm tracking-wide shadow-[3px_3px_0_#000] rotate-2 z-30">
            ⭐ MAIS ESCOLHIDO
          </div>

          {/* ESTRUTURA DO CARD COM IMAGEM OFICIAL (SEM BORDA) */}
          <div
            onClick={onSelectComplete}
            className="relative w-full max-w-[480px] mx-auto rounded-xl overflow-hidden border-0 border-none shadow-none cursor-pointer group"
          >
            <img
              src="https://i.imgur.com/RtjD992.png"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/plano-completo.png';
              }}
              alt="Plano Completo 29,90 - Benefícios e Bônus"
              className="w-full h-auto block select-none group-hover:scale-[1.01] transition-transform duration-200"
              loading="lazy"
            />
          </div>

          {/* BOTÃO DO PLANO COMPLETO */}
          <button
            type="button"
            onClick={onSelectComplete}
            className="brutal-btn w-full max-w-[480px] min-h-[56px] bg-[#22C55E] hover:bg-[#16a34a] text-black text-lg md:text-xl pulse-soft mt-6"
          >
            QUERO O PLANO COMPLETO
          </button>
        </div>

        {/* CARD 2: PLANO BÁSICO COM IMAGEM (FORMATO 1 POR 1) */}
        <div className="relative p-4 sm:p-6 md:p-8 bg-white rounded-xl text-center flex flex-col items-center">
          <div
            onClick={onSelectBasic}
            className="relative w-full max-w-[480px] aspect-square mx-auto rounded-xl overflow-hidden border-[4px] border-black shadow-[6px_6px_0_#000] bg-white cursor-pointer"
          >
            <img
              src="https://i.imgur.com/S9HAAI2.png"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/plano-basico-square.png';
              }}
              alt="Plano Básico R$ 9,90"
              className="w-full h-full object-cover block select-none"
              loading="lazy"
            />
          </div>

          {/* Botão do Básico - abre o Pop-up de oferta */}
          <button
            type="button"
            onClick={onSelectBasic}
            className="brutal-btn w-full max-w-[480px] min-h-[56px] bg-white hover:bg-zinc-100 text-black text-lg md:text-xl mt-6"
          >
            QUERO SÓ O BÁSICO
          </button>
        </div>
      </div>
    </section>
  );
};
