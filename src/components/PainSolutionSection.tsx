import React from 'react';

interface PainSolutionSectionProps {
  onScrollToPlans?: () => void;
}

export const PainSolutionSection: React.FC<PainSolutionSectionProps> = () => {
  return (
    <section
      id="dor-solucao"
      className="pt-6 pb-12 w-full max-w-[700px] mx-auto"
    >
      {/* Título da Seção */}
      <div className="text-center mb-8 px-2">
        <h2 className="text-[clamp(26px,5.5vw,36px)] font-heading leading-tight text-black text-center">
          Dificuldade e Solução
        </h2>
      </div>

      {/* Grid com os dois cards do mesmo tamanho e sem bordas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
        {/* CARD DA ESQUERDA: A SUA DIFICULDADE */}
        <div className="bg-[#FFF5F5] border-0 border-none rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-start h-full min-h-[175px] sm:min-h-[190px] md:min-h-[210px]">
          <h3 className="font-heading text-xl sm:text-2xl text-[#9F1239] leading-tight mb-2.5 text-center">
            A sua dificuldade
          </h3>
          <p className="text-gray-800 text-[15px] sm:text-base leading-relaxed font-medium text-center max-w-[290px] sm:max-w-[320px]">
            Frustração e culpa por não conseguir ensinar o seu parceiro a fazer os truques.
          </p>
        </div>

        {/* CARD DA DIREITA: A NOSSA SOLUÇÃO */}
        <div className="bg-[#F0FDF4] border-0 border-none rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-start h-full min-h-[175px] sm:min-h-[190px] md:min-h-[210px]">
          <h3 className="font-heading text-xl sm:text-2xl text-[#14532D] leading-tight mb-2.5 text-center">
            A nossa solução
          </h3>
          <p className="text-gray-800 text-[15px] sm:text-base leading-relaxed font-medium text-center max-w-[290px] sm:max-w-[320px]">
            Um material prático, com passo a passo e aulas em vídeo, para o seu pet aprender de forma fácil e divertida, e você se divertir junto com ele em cada aprendizado.
          </p>
        </div>
      </div>
    </section>
  );
};
