import React, { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { ProductConfig } from '../config';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ProductConfig;
}

export const OfferModal: React.FC<OfferModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const acceptBtnRef = useRef<HTMLAnchorElement>(null);

  // Bloqueio do scroll do body e suporte a tecla ESC
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

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

  const checkoutUrl =
    config.linkPopUp1490 ||
    'https://checkout.wiven.com.br/checkout/cmvo3vzm73uto01pxpf89nc6k?offer=DMW913B';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Oferta Especial R$ 14,90"
      className="fixed inset-0 z-[1100] bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 min-h-[100dvh]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-[460px] bg-white border-[4px] border-black rounded-[18px] shadow-[8px_8px_0_#000] overflow-hidden relative max-h-[95dvh] flex flex-col p-3.5 sm:p-5 animate-fade-in text-center"
      >
        {/* BOTÃO X DE FECHAR */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar pop-up"
          className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-10 h-10 bg-white hover:bg-zinc-100 text-black border-[3px] border-black rounded-xl flex items-center justify-center font-heading text-lg shadow-[2px_2px_0_#000] cursor-pointer z-30 active:scale-95 transition-all"
        >
          <X className="w-5 h-5 stroke-[3]" />
        </button>

        {/* IMAGEM DA OFERTA (R$ 14,90) */}
        <div className="w-full rounded-xl overflow-hidden border-[3px] border-black shadow-[4px_4px_0_#000] bg-white mt-1 mb-3.5 sm:mb-4">
          <img
            src="https://i.imgur.com/1rcFHEj.png"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = '/images/popup_oferta_1490.png';
            }}
            alt="Oferta Especial - Tudo por R$ 14,90"
            className="w-full h-auto object-contain block select-none"
            loading="eager"
          />
        </div>

        {/* APENAS O BOTÃO DE ADQUIRIR E IR PARA O CHECKOUT */}
        <a
          ref={acceptBtnRef}
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-btn w-full min-h-[54px] bg-[#22C55E] hover:bg-[#16a34a] text-black text-base sm:text-lg pulse-soft flex items-center justify-center gap-2 font-black shadow-[4px_4px_0_#000]"
        >
          <span>ADQUIRIR E IR PARA O CHECKOUT</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
};

