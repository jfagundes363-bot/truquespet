import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-12 border-t-2 border-black/10 select-none">
      <h2 className="text-[clamp(28px,5vw,40px)] font-heading text-center mb-3">
        Como funciona na prática?
      </h2>
      <p className="text-center text-zinc-700 text-base md:text-lg font-medium max-w-[560px] mx-auto mb-8">
        Sem complicação teórica. Tudo direto para você aplicar hoje mesmo.
      </p>

      {/* CARD ÚNICO SEM BORDA COM OS PASSOS GUIADOS */}
      <div className="w-full max-w-[620px] mx-auto bg-[#F9FAFB] rounded-2xl p-6 sm:p-8 border-0 border-none shadow-none">
        <div className="flex flex-col">
          {/* Passo 1 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFD400] text-black font-heading font-black text-xl sm:text-2xl flex items-center justify-center shrink-0 border-2 border-black shadow-[2px_2px_0_#000]">
              1
            </div>
            <p className="text-base sm:text-lg md:text-xl font-bold text-black leading-snug">
              Acesso imediato no seu email
            </p>
          </div>

          {/* Linha conectora vertical */}
          <div className="w-0.5 h-6 sm:h-7 bg-black/20 ml-5 sm:ml-6 my-1" />

          {/* Passo 2 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFD400] text-black font-heading font-black text-xl sm:text-2xl flex items-center justify-center shrink-0 border-2 border-black shadow-[2px_2px_0_#000]">
              2
            </div>
            <p className="text-base sm:text-lg md:text-xl font-bold text-black leading-snug">
              Siga o passo a passo de cada truque
            </p>
          </div>

          {/* Linha conectora vertical */}
          <div className="w-0.5 h-6 sm:h-7 bg-black/20 ml-5 sm:ml-6 my-1" />

          {/* Passo 3 */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFD400] text-black font-heading font-black text-xl sm:text-2xl flex items-center justify-center shrink-0 border-2 border-black shadow-[2px_2px_0_#000]">
              3
            </div>
            <p className="text-base sm:text-lg md:text-xl font-bold text-black leading-snug">
              Treine pelo menos 10 minutos por dia e veja ele aprendendo truques fantásticos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
