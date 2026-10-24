import React from 'react';
import { ProductConfig } from '../config';

interface SolutionSectionProps {
  config: ProductConfig;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ config }) => {
  return (
    <section id="solucao" className="py-12">
      <div className="brutal-card-highlight p-6 md:p-8 text-center">
        <h2 className="text-[clamp(24px,5vw,34px)] font-heading mb-4">
          Existe um jeito simples de ensinar
        </h2>
        
        <p className="text-[17px] md:text-[18px] text-zinc-900 leading-relaxed max-w-[620px] mx-auto mb-5 font-semibold">
          O segredo não é força, bronca nem passar horas cansando seu cão. Com o método em passos pequenos do{' '}
          <strong className="underline decoration-black decoration-2">
            [{config.nomeProduto || 'NOME DO PRODUTO'}]
          </strong>
          , você usa o <strong>reforço positivo</strong> (petiscos saborosos e elogios sinceros).
        </p>

        <p className="text-[16px] md:text-[17px] font-bold text-zinc-900 max-w-[580px] mx-auto mb-6 leading-snug">
          O cachorro entende o comando de primeira, ganha a recompensa e fica louco querendo fazer de novo. Tudo leve, natural e sem traumas!
        </p>

        <div className="inline-flex items-center gap-2 bg-white border-3 border-black px-4 py-2 rounded-lg shadow-[3px_3px_0_#000] text-sm md:text-base font-black">
          <span>✨</span>
          <span>Sem gritos, sem castigos e sem equipamentos caros!</span>
        </div>
      </div>
    </section>
  );
};
