import React from 'react';
import { Instagram, MousePointerClick, ExternalLink } from 'lucide-react';

const BONUS_ITEMS = [
  {
    num: 'BÔNUS #1',
    titulo: 'Guia de Petiscos Caseiros',
    sub: 'Saudáveis, baratos e irresistíveis',
    cor: 'bg-amber-400',
  },
  {
    num: 'BÔNUS #2',
    titulo: 'Checklist da Rotina de Treino',
    sub: 'Disciplina diária em apenas 10 minutos',
    cor: 'bg-sky-400',
  },
  {
    num: 'BÔNUS #3',
    titulo: 'Como Parar o Cão de Pular em Visitas',
    sub: 'Técnica simples para visitas tranquilas',
    cor: 'bg-emerald-400',
  },
];

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="py-12 border-t-2 border-black/10">
      {/* LINK DO INSTAGRAM / AVALIAÇÃO OTIMIZADO PARA MOBILE */}
      <div className="max-w-[540px] mx-auto px-3 sm:px-4 mb-7">
        <a
          href="https://www.instagram.com/omanual_do_pet/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir perfil no Instagram @omanual_do_pet e enviar feedback"
          className="group block p-2.5 sm:p-3.5 bg-gradient-to-r from-amber-50 via-pink-50 to-purple-50 rounded-2xl border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[1px_1px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] active:scale-[0.99] transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* ÍCONE DO INSTAGRAM AJUSTADO */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow-[2px_2px_0_#000] border-2 border-black group-hover:scale-105 transition-transform">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.2} />
            </div>

            {/* TEXTOS RESUMIDOS E DIRETOS */}
            <div className="text-left flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-heading font-black text-xs sm:text-sm text-black group-hover:text-[#dc2743] transition-colors leading-tight">
                  @omanual_do_pet
                </span>
                <span className="bg-pink-100 text-[#c13584] border border-pink-300 text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded-full uppercase leading-none">
                  Feedback
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-700 font-medium leading-tight mt-0.5">
                Envie seu feedback no Insta e nos conte o que achou do material!
              </p>
            </div>

            {/* BOTÃO OTIMIZADO PARA MOBILE */}
            <div className="shrink-0 flex items-center gap-1 bg-[#E1306C] group-hover:bg-[#bc1888] text-white text-[11px] sm:text-xs font-black px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border-2 border-black shadow-[2px_2px_0_#000] group-hover:translate-x-0.5 transition-all">
              <span>CLIQUE AQUI</span>
              <span className="text-xs">👆</span>
            </div>
          </div>
        </a>
      </div>

      <h2 className="text-[clamp(28px,5vw,40px)] font-heading text-center mb-3">
        Bônus Exclusivos de Lançamento
      </h2>
      <p className="text-center text-zinc-700 text-base md:text-lg font-medium max-w-[540px] mx-auto mb-8 px-4">
        Garantindo sua vaga no <strong>Plano Completo</strong> hoje, você leva estes 3 presentes de graça:
      </p>

      <div className="max-w-[540px] mx-auto px-4">
        {/* TÍTULOS ORGANIZADOS EM CIMA DA IMAGEM */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6">
          {BONUS_ITEMS.map((item, index) => (
            <div
              key={index}
              className="flex sm:flex-col items-center sm:text-center gap-2.5 sm:gap-1.5 p-3 sm:py-3.5 sm:px-2.5 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_#000]"
            >
              <span
                className={`${item.cor} text-black font-heading font-black text-[11px] px-2 py-0.5 rounded border border-black uppercase tracking-wider shrink-0`}
              >
                {item.num}
              </span>
              <div className="min-w-0">
                <h3 className="font-heading text-xs sm:text-sm font-black text-black leading-snug">
                  {item.titulo}
                </h3>
                <p className="text-[11px] text-zinc-600 font-medium sm:mt-0.5">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGEM DOS BÔNUS COM QUALIDADE ORIGINAL */}
        <div className="relative w-full rounded-2xl overflow-hidden border-2 sm:border-3 border-black shadow-[6px_6px_0_#000] bg-white">
          <img
            src="https://i.imgur.com/QZVmSL8.png"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/bonus_user.png';
            }}
            alt="3 Bônus Incríveis Gratuitos - Guia de Petiscos, Checklist e Como Parar de Pular"
            width={540}
            height={360}
            className="w-full h-auto block select-none"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

