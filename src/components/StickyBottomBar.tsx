import React, { useEffect, useState } from 'react';
import { ProductConfig } from '../config';

interface StickyBottomBarProps {
  config: ProductConfig;
  onScrollToPlans: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ config, onScrollToPlans }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isPlanosInView = false;

    // Observer para verificar se a seção #planos está visível
    const planosEl = document.getElementById('planos');
    let observer: IntersectionObserver | null = null;

    if (planosEl && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isPlanosInView = entry.isIntersecting;
            checkVisibility();
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(planosEl);
    }

    const checkVisibility = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 600 && !isPlanosInView) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      if (observer && planosEl) {
        observer.unobserve(planosEl);
      }
    };
  }, []);

  return (
    <aside
      aria-label="Barra de compra rápida"
      className={`fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black px-4 py-3 z-[700] shadow-[0_-4px_12px_rgba(0,0,0,0.15)] transition-transform duration-200 pb-[calc(12px+env(safe-area-inset-bottom,0px))] flex items-center justify-between gap-3 max-w-[720px] mx-auto ${
        isVisible ? 'translate-y-0' : 'translate-y-[150%]'
      }`}
    >
      <div className="flex flex-col">
        <span className="text-[11px] font-black uppercase text-zinc-500 tracking-wider">
          Oferta de Lançamento
        </span>
        <span className="font-heading text-lg md:text-xl text-black leading-tight">
          A partir de R$ {config.precoBasico}
        </span>
      </div>

      <button
        type="button"
        onClick={onScrollToPlans}
        className="brutal-btn bg-[#22C55E] hover:bg-[#16a34a] text-black text-sm md:text-base px-5 py-2.5 min-h-[46px] shrink-0"
      >
        VER OFERTAS
      </button>
    </aside>
  );
};
