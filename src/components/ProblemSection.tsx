import React from 'react';

export const ProblemSection: React.FC = () => {
  const problems = [
    'Seu cachorro ignora quando você chama',
    'Você vê vídeos de truques, tenta e não funciona',
    'Tem vergonha de mostrar o que seu cachorro NÃO sabe fazer',
    'Já pensou em pagar um adestrador caro, mas não cabe no bolso',
  ];

  return (
    <section id="problema" className="py-12 border-t-2 border-black/10">
      <h2 className="text-[clamp(28px,5vw,40px)] font-heading text-center mb-3">
        Você já passou por isso?
      </h2>
      <p className="text-center text-zinc-700 text-base md:text-lg font-medium max-w-[540px] mx-auto mb-8">
        Ter um cãozinho que parece não escutar dá uma sensação enorme de frustração, mas o problema não é você e nem ele.
      </p>

      <div className="flex flex-col gap-3.5">
        {problems.map((text, idx) => (
          <div
            key={idx}
            className="brutal-card flex items-center gap-4 p-4 md:p-5 hover:translate-x-1 transition-transform"
          >
            <div className="w-11 h-11 rounded-lg bg-red-100 border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0_#000] text-xl font-black text-[#E11D48]">
              ❌
            </div>
            <p className="text-[16px] md:text-[18px] font-bold text-zinc-950 leading-snug">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
