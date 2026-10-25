import React from 'react';
import { ProductConfig } from '../config';
import { PhoneMockupVideo } from './PhoneMockupVideo';
import { DecoratedPetTextBlock } from './DecoratedPetTextBlock';


interface HeroSectionProps {
  config: ProductConfig;
  onScrollToPlans: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onScrollToPlans }) => {
  return (
    <section id="hero" className="pt-8 pb-12 text-center">
      {/* Imagem em destaque acima da Headline */}
      <div className="flex justify-center mb-3 sm:mb-4 px-3">
        <img
          src="https://i.imgur.com/fcsUzp7.png"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/hero-top.png';
          }}
          alt="Truques para cachorro"
          width={310}
          height={310}
          className="w-full max-w-[220px] sm:max-w-[270px] md:max-w-[310px] aspect-square object-contain rounded-2xl border-[3px] border-black shadow-[4px_4px_0_#000] animate-gentle-sway cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 select-none"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Título Principal (Headline) */}
      <h1 className="text-[clamp(20px,4.5vw,28px)] font-black leading-[1.25] tracking-tight mt-1 mb-4 sm:mb-5 max-w-[640px] mx-auto px-3 sm:px-4 text-balance">
        Já pensou em ensinar seu parceiro a{' '}
        <mark className="bg-[#FFD400] text-black px-2.5 py-0.5 border-[2px] border-black rounded-lg inline-block -rotate-1 shadow-[2.5px_2.5px_0_#000] leading-tight my-0.5 align-baseline">
          sentar, dar a pata e rolar
        </mark>{' '}
        de maneira divertida?
      </h1>

      {/* MOLDURA DE CELULAR 9:16 COM VÍDEO / PLACEHOLDER */}
      <PhoneMockupVideo
        videoUrl="https://i.imgur.com/L5uhYXn.mp4"
        embedUrl=""
        posterUrl="https://i.imgur.com/L5uhYXn.jpg"
        autoplayMuted={false}
        buttonDelaySeconds={0}
        onScrollToPlans={onScrollToPlans}
      />

      {/* BLOCO DE TEXTO DECORADO COM TEMA PET E CACHORRO (SUB-HEADLINE) */}
      <DecoratedPetTextBlock />
    </section>
  );
};

