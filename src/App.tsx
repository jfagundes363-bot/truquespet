/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DEFAULT_CONFIG, ProductConfig } from './config';
import { HeroSection } from './components/HeroSection';
import { PainSolutionSection } from './components/PainSolutionSection';
import { TricksGridSection } from './components/TricksGridSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { VideoPlaceholderSection } from './components/VideoPlaceholderSection';
import { ForWhomSection } from './components/ForWhomSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { OfferModal } from './components/OfferModal';

export default function App() {
  const [config] = useState<ProductConfig>(DEFAULT_CONFIG);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  // Rolagem suave até a seção de planos
  const handleScrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Checkout direto Plano Completo (R$ 19,99)
  const handleSelectComplete = () => {
    if (config.linkCompleto1999 && config.linkCompleto1999 !== '#') {
      window.open(config.linkCompleto1999, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Redirecionando para o checkout do Plano Completo (R$ ${config.precoCompleto}).`);
    }
  };

  // Plano Básico clicado: NÃO vai direto para o checkout, abre o pop-up de oferta
  const handleSelectBasic = () => {
    setIsOfferModalOpen(true);
  };

  // Aceitar desconto no pop-up (R$ 14,90)
  const handleAcceptDiscount = () => {
    setIsOfferModalOpen(false);
    if (config.linkCompleto1490 && config.linkCompleto1490 !== '#') {
      window.open(config.linkCompleto1490, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Redirecionando para o checkout com desconto especial (R$ ${config.precoPopup}).`);
    }
  };

  // Recusar desconto e seguir para o checkout do Básico (R$ 10,00)
  const handleDeclineToBasic = () => {
    setIsOfferModalOpen(false);
    if (config.linkBasico && config.linkBasico !== '#') {
      window.open(config.linkBasico, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Redirecionando para o checkout do Plano Básico (R$ ${config.precoBasico}).`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center font-sans selection:bg-[#FFD400] selection:text-black">
      {/* Container Principal da Landing Page (Mobile First, Max-width 720px no Desktop) */}
      <div className="w-full max-w-[720px] min-h-screen bg-white flex flex-col relative">
        {/* CONTEÚDO PRINCIPAL DA LANDING PAGE */}
        <main className="px-4 sm:px-6 md:px-8 pb-20">
            {/* 1. HERO SECTION */}
            <HeroSection
              config={config}
              onScrollToPlans={handleScrollToPlans}
            />

            {/* 2. DOR E SOLUÇÃO */}
            <PainSolutionSection onScrollToPlans={handleScrollToPlans} />

            {/* 3. O QUE VOCÊ VAI APRENDER */}
            <TricksGridSection />

            {/* 5. COMO FUNCIONA */}
            <HowItWorksSection />

            {/* 6. VÍDEO PLACEHOLDER */}
            <VideoPlaceholderSection />

            {/* 7. PARA QUEM É / NÃO É */}
            <ForWhomSection />

            {/* 8. PROVA SOCIAL */}
            <TestimonialsSection />

            {/* 9. BÔNUS EXCLUSIVOS */}
            <BonusSection />

            {/* 10. SEÇÃO DE PLANOS */}
            <PricingSection
              config={config}
              onSelectBasic={handleSelectBasic}
              onSelectComplete={handleSelectComplete}
            />

            {/* 11. GARANTIA */}
            <GuaranteeSection config={config} />

            {/* 12. FAQ ACORDEÃO */}
            <FaqSection />

            {/* 13. RODAPÉ */}
            <FooterSection config={config} />
          </main>
        </div>

        {/* POP-UP MODAL DE OFERTA (DOWNSELL R$ 14,90) */}
        <OfferModal
          isOpen={isOfferModalOpen}
          onClose={() => setIsOfferModalOpen(false)}
          config={config}
          onAcceptDiscount={handleAcceptDiscount}
          onDeclineToBasic={handleDeclineToBasic}
        />
      </div>
    );
  }
