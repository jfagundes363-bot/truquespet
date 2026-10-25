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

      <div className="flex flex-col gap-8 max-w-[520px] mx-auto px-3">
        {/* ========================================================
            CARD 1: ACESSO COMPLETO + BÔNUS (MAIS ESCOLHIDO)
            ======================================================== */}
        <div className="relative p-5 sm:p-7 bg-[#FFF7CC] rounded-2xl border-[3px] border-black shadow-[6px_6px_0_#000] flex flex-col text-left">
          {/* Selo rotacionado */}
          <div className="absolute -top-3.5 right-4 bg-[#FFD400] text-black border-2 border-black px-3 py-1 rounded-md font-heading text-xs sm:text-sm tracking-wide shadow-[3px_3px_0_#000] rotate-2 z-20">
            ⭐ MAIS ESCOLHIDO
          </div>

          <div className="mb-4">
            <span className="inline-block bg-[#22C55E] text-black border-2 border-black text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
              Recomendado
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-black leading-tight uppercase">
              ACESSO COMPLETO + BÔNUS
            </h3>
            <p className="text-zinc-700 text-sm sm:text-base font-medium mt-1">
              Tudo o que você precisa para o seu cão se tornar o orgulho de toda a família.
            </p>
          </div>

          {/* IMAGEM DO PLANO COMPLETO: BANNER OFICIAL COM TODOS OS 15 TRUQUES + BÔNUS */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0_#000] mb-5 bg-white">
            <img
              src="https://i.imgur.com/wOZEwRI.png"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/popup_oferta_1990.png';
              }}
              alt="Plano Completo - Acesso Completo + Bônus por R$ 19,90"
              width={500}
              height={500}
              className="w-full h-full object-cover block select-none"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* O QUE ESTÁ INCLUSO */}
          <div className="mb-6">
            <h4 className="font-heading text-sm uppercase tracking-wider font-black text-black mb-3">
              O que está incluso:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-zinc-900 text-sm sm:text-base">
                <span className="text-emerald-600 shrink-0 text-base leading-none mt-0.5">✅</span>
                <div>
                  <strong className="font-bold text-black block">Todos os truques básicos</strong>
                  <span className="text-xs text-zinc-600">(Sentar, Deitar, Dar a Pata, Ficar)</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 text-zinc-900 text-sm sm:text-base">
                <span className="text-emerald-600 shrink-0 text-base leading-none mt-0.5">✅</span>
                <div>
                  <strong className="font-bold text-black block">Truques avançados</strong>
                  <span className="text-xs text-zinc-600">(Rolar, Fingir de Morto, Buscar e outros)</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 text-zinc-900 text-sm sm:text-base">
                <span className="text-emerald-600 shrink-0 text-base leading-none mt-0.5">✅</span>
                <div>
                  <strong className="font-bold text-black block">Todos os 3 Super Bônus</strong>
                  <span className="text-xs text-emerald-700 font-bold">Inclusos gratuitamente</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 text-zinc-900 text-sm sm:text-base">
                <span className="text-emerald-600 shrink-0 text-base leading-none mt-0.5">✅</span>
                <div>
                  <strong className="font-bold text-black block">Acesso vitalício</strong>
                  <span className="text-xs text-zinc-600">Para sempre</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 text-zinc-900 text-sm sm:text-base">
                <span className="text-emerald-600 shrink-0 text-base leading-none mt-0.5">✅</span>
                <div>
                  <strong className="font-bold text-black block">Atualizações e novos truques futuros</strong>
                </div>
              </li>

              <li className="flex items-start gap-2.5 text-zinc-900 text-sm sm:text-base">
                <span className="text-emerald-600 shrink-0 text-base leading-none mt-0.5">✅</span>
                <div>
                  <strong className="font-bold text-black block">Suporte por e-mail</strong>
                  <span className="text-xs text-zinc-600">Para tirar dúvidas</span>
                </div>
              </li>
            </ul>
          </div>

          {/* BOTÃO DO PLANO COMPLETO */}
          <button
            type="button"
            onClick={onSelectComplete}
            className="brutal-btn w-full min-h-[56px] bg-[#22C55E] hover:bg-[#16a34a] text-black text-lg md:text-xl pulse-soft mt-auto"
          >
            QUERO O PLANO COMPLETO
          </button>
        </div>

        {/* ========================================================
            CARD 2: PLANO BÁSICO
            ======================================================== */}
        <div className="relative p-5 sm:p-7 bg-white rounded-2xl border-[3px] border-black shadow-[6px_6px_0_#000] flex flex-col text-left">
          {/* IMAGEM DO PLANO BÁSICO ACIMA DO TEXTO */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0_#000] mb-5 bg-white">
            <img
              src="https://i.imgur.com/Ru5fh6G.png"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/plano_basico_novo.png';
              }}
              alt="Plano Básico R$ 9,90"
              width={500}
              height={500}
              className="w-full h-full object-cover block select-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mb-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-black leading-tight uppercase">
              PLANO BÁSICO
            </h3>
            <p className="text-zinc-700 text-sm sm:text-base font-medium mt-1">
              Apenas para quem quer ensinar comandos bem simples do dia a dia.
            </p>
          </div>

          {/* O QUE ESTÁ INCLUSO */}
          <div className="mb-5">
            <h4 className="font-heading text-sm uppercase tracking-wider font-black text-black mb-3">
              O que está incluso:
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-zinc-900 text-sm sm:text-base">
                <span className="text-emerald-600 shrink-0 text-base leading-none mt-0.5">✅</span>
                <span>
                  <strong className="font-bold text-black">Truques básicos:</strong>{' '}
                  <span className="text-zinc-600">(Sentar, Deitar, Ficar)</span>
                </span>
              </li>

              <li className="flex items-start gap-2 text-zinc-500 text-sm sm:text-base">
                <span className="text-red-500 shrink-0 text-base leading-none mt-0.5">❌</span>
                <span>
                  Truques avançados: <span className="text-zinc-400">(Rolar, Fingir de Morto)</span>
                </span>
              </li>

              <li className="flex items-start gap-2 text-zinc-500 text-sm sm:text-base">
                <span className="text-red-500 shrink-0 text-base leading-none mt-0.5">❌</span>
                <span>
                  Bônus exclusivos: <span className="text-zinc-400">(Petiscos e rotinas)</span>
                </span>
              </li>

              <li className="flex items-start gap-2 text-zinc-500 text-sm sm:text-base">
                <span className="text-red-500 shrink-0 text-base leading-none mt-0.5">❌</span>
                <span>Atualizações futuras</span>
              </li>
            </ul>
          </div>

          {/* PREÇO */}
          <div className="bg-zinc-50 border-2 border-black rounded-xl p-4 mb-5 text-center shadow-[3px_3px_0_#000]">
            <span className="text-xs uppercase tracking-wider font-bold text-zinc-500 block mb-0.5">
              Preço
            </span>
            <div className="flex items-center justify-center">
              <span className="text-3xl sm:text-4xl font-heading font-black text-black">
                R$ 9,90
              </span>
            </div>
            <p className="text-xs text-zinc-600 font-semibold mt-1">
              Pagamento único • Sem mensalidades
            </p>
          </div>

          {/* BOTÃO DO BÁSICO */}
          <button
            type="button"
            onClick={onSelectBasic}
            className="brutal-btn w-full min-h-[56px] bg-white hover:bg-zinc-100 text-black text-lg md:text-xl mt-auto"
          >
            QUERO SÓ O BÁSICO
          </button>
        </div>
      </div>
    </section>
  );
};
