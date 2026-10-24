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
      <div className="flex justify-center mb-5 px-3">
        <img
          src="https://i.imgur.com/fcsUzp7.png"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/hero-top.png';
          }}
          alt="Truques para cachorro"
          className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] aspect-square object-contain rounded-2xl border-[3px] border-black shadow-[5px_5px_0_#000] animate-gentle-sway cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 select-none"
          loading="eager"
        />
      </div>

      {/* Título Principal (Headline) */}
      <h1 className="text-[clamp(20px,4.5vw,28px)] font-black leading-[1.3] tracking-tight mb-6 max-w-[680px] mx-auto px-2">
        Já pensou em ensinar seu parceiro a{' '}
        <mark className="bg-[#FFD400] text-black px-2.5 py-0.5 border-[2.5px] border-black rounded-lg inline-block -rotate-1 shadow-[3px_3px_0_#000] leading-tight my-1 align-baseline">
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

