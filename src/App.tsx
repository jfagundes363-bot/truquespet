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
import { PlanSelectionModal } from './components/PlanSelectionModal';

export default function App() {
  const [config] = useState<ProductConfig>(DEFAULT_CONFIG);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete' | null>(null);
  const [isDownsellOpen, setIsDownsellOpen] = useState(false);

  // Rolagem suave até a seção de planos
  const handleScrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Selecionar Plano Completo: abre o mini card do Plano Completo
  const handleSelectComplete = () => {
    setSelectedPlan('complete');
  };

  // Selecionar Plano Básico: abre o mini card do Plano Básico
  const handleSelectBasic = () => {
    setSelectedPlan('basic');
  };

  // Fechar o mini card em QUALQUER um dos dois planos -> Abre imediatamente o pop-up de levar tudo por 19,90
  const handleClosePlanModal = () => {
    setSelectedPlan(null);
    setIsDownsellOpen(true);
  };

  // Fechar o pop-up de 19,90
  const handleCloseDownsell = () => {
    setIsDownsellOpen(false);
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

        {/* 1. MINI CARD MODAL AO SELECIONAR UM DOS PLANOS */}
        <PlanSelectionModal
          isOpen={selectedPlan !== null}
          planType={selectedPlan}
          onClose={handleClosePlanModal}
          linkBasico={config.linkBasico}
          linkCompleto={config.linkCompleto}
        />

        {/* 2. POP-UP DE LEVAR TUDO POR 19,90 (AO CLICAR NO 'X' DO MINI CARD DE QUALQUER PLANO) */}
        <OfferModal
          isOpen={isDownsellOpen}
          onClose={handleCloseDownsell}
          config={config}
        />
      </div>
    );
  }
