import React from 'react';
import { ProductConfig } from '../config';

interface GuaranteeSectionProps {
  config: ProductConfig;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = () => {
  return (
    <section id="garantia" className="py-8 md:py-12 border-t-2 border-black/10 flex justify-center">
      <div className="w-full max-w-[460px] px-4 flex justify-center items-center">
        <img
          src="https://i.imgur.com/xVCneOY.png"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/garantia.png';
          }}
          alt="Garantia Incondicional de 7 Dias"
          className="w-full max-w-[360px] sm:max-w-[420px] aspect-square object-contain select-none transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
    </section>
  );
};
