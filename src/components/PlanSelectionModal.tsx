import React, { useEffect, useRef } from 'react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';

interface PlanSelectionModalProps {
  isOpen: boolean;
  planType: 'basic' | 'complete' | null;
  onClose: () => void;
  linkBasico: string;
  linkCompleto: string;
}

export const PlanSelectionModal: React.FC<PlanSelectionModalProps> = ({
  isOpen,
  planType,
  onClose,
  linkBasico,
  linkCompleto,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Trava scroll da página e escuta ESC
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !planType) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="plan-modal-title"
      className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 min-h-[100dvh]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-[480px] bg-white border-[4px] border-black rounded-2xl shadow-[8px_8px_0_#000] overflow-hidden relative max-h-[92dvh] flex flex-col animate-fade-in"
      >
        {/* BOTÃO X PARA FECHAR (ACIONA O POP-UP DE 19,90) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar e ver condições"
          className="absolute top-2.5 right-2.5 w-11 h-11 bg-white hover:bg-zinc-100 text-black border-[3px] border-black rounded-xl flex items-center justify-center font-heading text-lg shadow-[2px_2px_0_#000] cursor-pointer z-30 active:scale-95 transition-all"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>

        {/* ========================================================
            MODAL DO PLANO BÁSICO
            ======================================================== */}
        {planType === 'basic' && (
          <div>
            <div className="bg-[#FFD400] text-black border-b-[3px] border-black py-3 px-5 text-center">
              <span className="text-[11px] font-black uppercase tracking-wider bg-black text-[#FFD400] px-2.5 py-0.5 rounded border border-black inline-block mb-1 mx-auto">
                Você selecionou
              </span>
              <h2 id="plan-modal-title" className="font-heading text-xl sm:text-2xl font-black text-black leading-tight text-center">
                PLANO BÁSICO • R$ 9,90
              </h2>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto text-center flex flex-col items-center">
              {/* BOTÃO DE FAZER PAGAMENTO DO BÁSICO */}
              <a
                href={linkBasico}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn w-full min-h-[52px] bg-zinc-900 hover:bg-black text-white text-base sm:text-lg flex items-center justify-center gap-2 mb-6"
              >
                <span>FAZER PAGAMENTO (R$ 9,90)</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* CARD DE APROVEITAR O PLANO COMPLETO (ABA SELECIONADA: IMAGEM DO PLANO COMPLETO + BOTÃO ABAIXO) */}
              <div className="w-full bg-[#FFF7CC] border-[3px] border-black rounded-xl p-3.5 sm:p-4 shadow-[4px_4px_0_#000] text-center relative overflow-hidden flex flex-col items-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-black bg-[#22C55E] text-black border-2 border-black px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-flex mb-2.5 mx-auto">
                  <Sparkles className="w-3.5 h-3.5 fill-black" />
                  <span>OPORTUNIDADE: PLANO COMPLETO POR R$ 19,90</span>
                </div>

                {/* IMAGEM DO PLANO COMPLETO */}
                <div className="w-full rounded-xl overflow-hidden border-2 border-black shadow-[3px_3px_0_#000] bg-white mb-3">
                  <img
                    src="https://i.imgur.com/wOZEwRI.png"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/popup_oferta_1990.png';
                    }}
                    alt="Plano Completo por R$ 19,90"
                    className="w-full h-auto object-contain block select-none"
                    loading="eager"
                  />
                </div>

                {/* BOTÃO ABAIXO DA IMAGEM */}
                <a
                  href={linkCompleto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn w-full min-h-[52px] bg-[#22C55E] hover:bg-[#16a34a] text-black text-base sm:text-lg pulse-soft flex items-center justify-center gap-2 font-black shadow-[3px_3px_0_#000]"
                >
                  <span>QUERO O PLANO COMPLETO (R$ 19,90)</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            MODAL DO PLANO COMPLETO
            ======================================================== */}
        {planType === 'complete' && (
          <div>
            <div className="bg-[#22C55E] text-black border-b-[3px] border-black py-3 px-5 text-center">
              <span className="text-[11px] font-black uppercase tracking-wider bg-black text-[#22C55E] px-2.5 py-0.5 rounded border border-black inline-block mb-1 mx-auto">
                ⭐ Mais Escolhido
              </span>
              <h2 id="plan-modal-title" className="font-heading text-xl sm:text-2xl font-black text-black leading-tight text-center">
                ACESSO COMPLETO + BÔNUS
              </h2>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto text-center flex flex-col items-center">
              <div className="w-full bg-[#FFF7CC] border-2 border-black rounded-xl p-3.5 mb-5 shadow-[3px_3px_0_#000] text-center">
                <p className="text-xs text-zinc-600 font-bold uppercase tracking-wider mb-0.5 text-center">
                  Valor Promocional
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-sm text-zinc-400 line-through font-bold">De R$ 47,90</span>
                  <span className="font-heading text-3xl font-black text-[#15803d]">R$ 19,90</span>
                  <span className="text-xs text-zinc-600 font-medium">(Pagamento único)</span>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-xs sm:text-sm text-zinc-800 font-semibold text-center flex flex-col items-center">
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span>Todos os Truques Básicos e Avançados</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span>Os 3 Super Bônus Exclusivos de Lançamento</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span>Acesso Vitalício Para Sempre</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0" />
                  <span>Suporte por e-mail e atualizações futuras</span>
                </div>
              </div>

              {/* BOTÃO DE FAZER PAGAMENTO DO COMPLETO */}
              <a
                href={linkCompleto}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn w-full min-h-[56px] bg-[#22C55E] hover:bg-[#16a34a] text-black text-lg md:text-xl pulse-soft flex items-center justify-center gap-2"
              >
                <span>FAZER PAGAMENTO (R$ 19,90)</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
