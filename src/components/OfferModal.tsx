import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ProductConfig } from '../config';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ProductConfig;
  onAcceptDiscount: () => void;
  onDeclineToBasic: () => void;
}

export const OfferModal: React.FC<OfferModalProps> = ({
  isOpen,
  onClose,
  config,
  onAcceptDiscount,
  onDeclineToBasic,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const acceptBtnRef = useRef<HTMLButtonElement>(null);

  // Bloqueio do scroll do body e suporte a tecla ESC
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Foco inicial no botão principal
    const timer = setTimeout(() => {
      acceptBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-modal-title"
      className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 min-h-[100dvh]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-[500px] bg-white border-[5px] border-black rounded-[12px] shadow-[7px_7px_0_#000] overflow-hidden relative max-h-[92dvh] flex flex-col"
      >
        {/* BOTÃO X DE FECHAR COM ALVO DE 48px */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela de oferta"
          className="absolute top-2 right-2 w-12 h-12 bg-white hover:bg-zinc-100 text-black border-[3px] border-black rounded-lg flex items-center justify-center font-heading text-xl shadow-[2px_2px_0_#000] cursor-pointer z-20 active:translate-x-0.5 active:translate-y-0.5 transition-all"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>

        {/* FAIXA AMARELA NO TOPO */}
        <div className="bg-[#FFD400] text-black border-b-[4px] border-black py-2.5 px-4 font-heading text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 select-none shrink-0 pr-14">
          <span>⚠️</span>
          <span>ESPERA! ANTES DE SAIR...</span>
        </div>

        {/* CONTEÚDO PRINCIPAL DO MODAL COM ROLAGEM CASO A TELA SEJA MUITO PEQUENA */}
        <div className="p-5 sm:p-7 overflow-y-auto text-center">
          <h2
            id="offer-modal-title"
            className="text-[clamp(21px,4.5vw,27px)] font-heading leading-tight mb-2.5 text-black"
          >
            Leve o PLANO COMPLETO por apenas R$ {config.precoPopup}
          </h2>

          <p className="text-[15px] sm:text-[16px] text-zinc-800 leading-snug font-semibold mb-4">
            Você escolheu o básico por R$ {config.precoBasico}. Por apenas{' '}
            <span className="bg-[#FFD400] px-1 border border-black font-extrabold">
              R$ 5,00 a mais
            </span>
            , você leva os truques avançados, todos os bônus e o acesso vitalício!
          </p>

          {/* ÁREA DE PREÇO */}
          <div className="mb-4">
            <span className="text-sm sm:text-base font-extrabold text-[#E11D48] line-through">
              De R$ {config.precoCompleto}
            </span>
            <div className="text-[clamp(42px,8vw,56px)] font-heading leading-none text-black mt-1 flex items-baseline justify-center gap-1">
              <span className="text-xl font-bold">R$</span>
              <span>{config.precoPopup}</span>
            </div>
          </div>

          {/* LISTA DO QUE VEM A MAIS */}
          <div className="text-left bg-[#FFF7CC] border-[3px] border-black rounded-lg p-3.5 mb-5 flex flex-col gap-2 text-xs sm:text-sm font-bold text-black shadow-[2px_2px_0_#000]">
            <div className="flex items-center gap-2">
              <span className="text-emerald-700 font-black">✅</span>
              <span>Todos os Truques Avançados (Rolar, Fingir de Morto, Buscar)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-700 font-black">✅</span>
              <span>Os 3 Super Bônus Exclusivos inclusos grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-700 font-black">✅</span>
              <span>Acesso Vitalício para sempre sem mensalidades</span>
            </div>
          </div>

          {/* BOTÃO PRINCIPAL VERDE */}
          <button
            ref={acceptBtnRef}
            type="button"
            onClick={onAcceptDiscount}
            className="brutal-btn w-full min-h-[54px] bg-[#22C55E] hover:bg-[#16a34a] text-black text-base sm:text-lg pulse-soft mb-3"
          >
            SIM, QUERO O COMPLETO POR R$ {config.precoPopup}
          </button>

          {/* LINK DE RECUSA / CONTINUAR BÁSICO */}
          <div>
            <button
              type="button"
              onClick={onDeclineToBasic}
              className="text-xs sm:text-sm font-extrabold text-zinc-700 hover:text-black underline underline-offset-4 p-2 cursor-pointer transition-colors"
            >
              Não, obrigado, quero só o básico por R$ {config.precoBasico}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
