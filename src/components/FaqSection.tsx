import React, { useState } from 'react';
import { FAQ_LIST } from '../config';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-12 border-t-2 border-black/10">
      <h2 className="text-[clamp(28px,5vw,40px)] font-heading text-center mb-3">
        Perguntas Frequentes
      </h2>
      <p className="text-center text-zinc-700 text-base md:text-lg font-medium max-w-[540px] mx-auto mb-8">
        Respostas transparentes e sem rodeios para você tomar a melhor decisão.
      </p>

      <div className="flex flex-col gap-3.5 max-w-[620px] mx-auto">
        {FAQ_LIST.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="brutal-card bg-white overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                className="w-full min-h-[56px] p-4 md:p-5 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
              >
                <span className="font-heading text-base md:text-lg text-black leading-snug">
                  {item.pergunta}
                </span>
                <span
                  className={`w-8 h-8 rounded-md border-2 border-black flex items-center justify-center font-heading text-lg shrink-0 shadow-[2px_2px_0_#000] transition-colors ${
                    isOpen ? 'bg-black text-white' : 'bg-[#FFD400] text-black'
                  }`}
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-2 text-sm md:text-base font-semibold text-zinc-800 leading-relaxed border-t-2 border-dashed border-black/20">
                  {item.resposta}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
