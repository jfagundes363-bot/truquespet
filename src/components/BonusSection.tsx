import React from 'react';
import { BONUSES_LIST } from '../config';

const BONUS_TITLES = [
  'Guia de Petiscos',
  'Checklist da Rotina',
  'Mini Guia de Como Fazer Ele Parar de Pular nas Visitas',
];

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="py-12 border-t-2 border-black/10">
      <h2 className="text-[clamp(28px,5vw,40px)] font-heading text-center mb-3">
        Bônus Exclusivos de Lançamento
      </h2>
      <p className="text-center text-zinc-700 text-base md:text-lg font-medium max-w-[540px] mx-auto mb-8">
        Garantindo sua vaga no <strong>Plano Completo</strong> hoje, você leva estes 3 presentes de graça:
      </p>

      <div className="flex flex-col gap-6 sm:gap-7 max-w-[360px] sm:max-w-[390px] mx-auto px-2">
        {BONUSES_LIST.map((bonus, index) => (
          <div key={bonus.id} className="flex flex-col items-center w-full">
            {/* TÍTULO EM CIMA DO CARD DE IMAGEM DO BÔNUS */}
            <div className="w-full text-center mb-2 px-1">
              <h3 className="font-heading text-base sm:text-lg font-black text-black leading-snug">
                {BONUS_TITLES[index] || bonus.titulo}
              </h3>
            </div>

            {/* CARD DE IMAGEM DO BÔNUS */}
            <div className="relative w-full rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0_#000] bg-white">
              <img
                src={bonus.imagem}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = bonus.imagemFallback;
                }}
                alt={BONUS_TITLES[index] || bonus.titulo}
                className="w-full h-auto block select-none"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
