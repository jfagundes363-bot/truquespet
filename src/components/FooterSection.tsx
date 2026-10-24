import React, { useState } from 'react';
import { ProductConfig } from '../config';

interface FooterSectionProps {
  config: ProductConfig;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ config }) => {
  const [legalModal, setLegalModal] = useState<'termos' | 'privacidade' | null>(null);

  return (
    <footer className="border-t-4 border-black pt-10 pb-8 text-center text-zinc-700">
      <div className="font-black text-black text-sm md:text-base mb-3">
        © {config.anoRodape || 2026} {config.nomeProduto || '[NOME DO PRODUTO]'}. Todos os direitos reservados.
      </div>

      <div className="flex items-center justify-center gap-3 text-xs md:text-sm font-bold text-black mb-3">
        <button
          type="button"
          onClick={() => setLegalModal('termos')}
          className="hover:underline underline-offset-2 cursor-pointer"
        >
          Termos de Uso
        </button>
        <span>•</span>
        <button
          type="button"
          onClick={() => setLegalModal('privacidade')}
          className="hover:underline underline-offset-2 cursor-pointer"
        >
          Política de Privacidade
        </button>
      </div>

      <div className="text-xs md:text-sm font-semibold text-zinc-600">
        Dúvidas ou suporte ao cliente:{' '}
        <strong className="text-black font-extrabold">{config.emailSuporte}</strong>
      </div>

      <p className="text-[11px] text-zinc-500 mt-4 max-w-[480px] mx-auto leading-normal">
        Este produto não substitui atendimento veterinário para casos patológicos de agressividade. Todas as técnicas são baseadas em condicionamento operante e reforço positivo sem aversivos.
      </p>

      {/* Modal simples de termos/privacidade */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1200] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="brutal-card bg-white max-w-md w-full p-6 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-heading text-lg mb-2">
              {legalModal === 'termos' ? 'Termos de Uso' : 'Política de Privacidade'}
            </h4>
            <p className="text-xs md:text-sm text-zinc-700 leading-relaxed mb-4">
              {legalModal === 'termos'
                ? 'Ao adquirir este tutorial digital, você tem direito ao acesso pessoal e intransferível do material. É proibida a redistribuição ou revenda não autorizada.'
                : 'Seus dados de contato e pagamento são processados através de gateways criptografados de alta segurança. Seus dados nunca são compartilhados ou comercializados.'}
            </p>
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="brutal-btn w-full bg-[#FFD400] text-black text-sm py-2"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
