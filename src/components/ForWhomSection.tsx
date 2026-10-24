import React from 'react';

export const ForWhomSection: React.FC = () => {
  return (
    <section id="publico" className="py-12 border-t-2 border-black/10">
      <h2 className="text-[clamp(28px,5vw,40px)] font-heading text-center mb-3">
        Este tutorial é para você?
      </h2>
      <p className="text-center text-zinc-700 text-base md:text-lg font-medium max-w-[540px] mx-auto mb-8">
        Transparência total para você saber se este material realmente vai te ajudar.
      </p>

      <div className="max-w-[580px] mx-auto">
        {/* PARA QUEM É */}
        <div className="brutal-card bg-[#F0FDF4] p-6 sm:p-8 border-black">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-2xl">✅</span>
            <h3 className="font-heading text-xl sm:text-2xl text-emerald-900">
              PARA QUEM É:
            </h3>
          </div>

          <ul className="flex flex-col gap-3.5 font-semibold text-zinc-900 text-sm md:text-base">
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-black text-lg leading-tight">✓</span>
              <span><strong>Donos iniciantes:</strong> quem nunca ensinou nada além do nome do cachorro.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-black text-lg leading-tight">✓</span>
              <span><strong>Filhotes e cães adultos:</strong> qualquer idade ou raça pode aprender truques novos.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-black text-lg leading-tight">✓</span>
              <span><strong>Quem tem pouco tempo:</strong> apenas 10 minutos por dia já trazem resultados visíveis.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-black text-lg leading-tight">✓</span>
              <span><strong>Quem ama seu pet:</strong> quer se divertir e fortalecer o vínculo com respeito e carinho.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
