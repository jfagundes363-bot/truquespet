import React from 'react';

interface CtaFinalSectionProps {
  onScrollToPlans: () => void;
}

export const CtaFinalSection: React.FC<CtaFinalSectionProps> = ({ onScrollToPlans }) => {
  return (
    <section id="fechamento" className="py-12 border-t-2 border-black/10 text-center">
      <h2 className="text-[clamp(28px,5vw,42px)] font-heading mb-4">
        Seu cachorro pode aprender hoje mesmo
      </h2>
      <p className="text-base md:text-lg font-semibold text-zinc-800 max-w-[540px] mx-auto mb-8 leading-relaxed">
        Não perca a chance de transformar passeios estressantes em momentos mágicos de conexão, orgulho e alegria com seu pet.
      </p>

      <button
        type="button"
        onClick={onScrollToPlans}
        className="brutal-btn w-full max-w-[480px] min-h-[56px] bg-[#22C55E] hover:bg-[#16a34a] text-black text-lg md:text-xl pulse-soft mx-auto"
      >
        QUERO COMEÇAR AGORA
      </button>
    </section>
  );
};
