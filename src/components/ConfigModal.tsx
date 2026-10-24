import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { ProductConfig } from '../config';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ProductConfig;
  onSave: (newConfig: ProductConfig) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProductConfig>(config);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[1100] bg-black/80 flex items-center justify-center p-3 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-[560px] bg-white border-[5px] border-black rounded-[12px] shadow-[6px_6px_0_#000] overflow-hidden relative max-h-[90dvh] flex flex-col">
        {/* Header */}
        <div className="bg-black text-white px-5 py-3 flex items-center justify-between border-b-4 border-[#FFD400]">
          <div className="font-heading text-sm sm:text-base">
            ⚙️ Configurar Links de Checkout & Textos
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="w-8 h-8 rounded bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-sm font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm font-semibold">
          <div>
            <label className="block text-black font-heading text-xs uppercase mb-1">
              Nome do Produto:
            </label>
            <input
              type="text"
              value={formData.nomeProduto}
              onChange={(e) => setFormData({ ...formData, nomeProduto: e.target.value })}
              className="w-full border-3 border-black p-2.5 rounded-lg text-black bg-zinc-50 font-medium focus:bg-white focus:outline-none"
              placeholder="Ex: Manual dos Truques Caninos"
            />
          </div>

          <div>
            <label className="block text-black font-heading text-xs uppercase mb-1">
              Link de Checkout - Plano Básico (R$ {formData.precoBasico}):
            </label>
            <input
              type="text"
              value={formData.linkBasico}
              onChange={(e) => setFormData({ ...formData, linkBasico: e.target.value })}
              className="w-full border-3 border-black p-2.5 rounded-lg text-black bg-zinc-50 font-mono text-xs focus:bg-white focus:outline-none"
              placeholder="https://pay.kiwify.com.br/..."
            />
          </div>

          <div>
            <label className="block text-black font-heading text-xs uppercase mb-1">
              Link de Checkout - Pop-up Desconto (R$ {formData.precoPopup}):
            </label>
            <input
              type="text"
              value={formData.linkCompleto1490}
              onChange={(e) => setFormData({ ...formData, linkCompleto1490: e.target.value })}
              className="w-full border-3 border-black p-2.5 rounded-lg text-black bg-zinc-50 font-mono text-xs focus:bg-white focus:outline-none"
              placeholder="https://pay.kiwify.com.br/..."
            />
          </div>

          <div>
            <label className="block text-black font-heading text-xs uppercase mb-1">
              Link de Checkout - Plano Completo Principal (R$ {formData.precoCompleto}):
            </label>
            <input
              type="text"
              value={formData.linkCompleto1999}
              onChange={(e) => setFormData({ ...formData, linkCompleto1999: e.target.value })}
              className="w-full border-3 border-black p-2.5 rounded-lg text-black bg-zinc-50 font-mono text-xs focus:bg-white focus:outline-none"
              placeholder="https://pay.kiwify.com.br/..."
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-black font-heading text-xs uppercase mb-1">
                E-mail de Suporte:
              </label>
              <input
                type="email"
                value={formData.emailSuporte}
                onChange={(e) => setFormData({ ...formData, emailSuporte: e.target.value })}
                className="w-full border-3 border-black p-2 rounded-lg text-black bg-zinc-50 font-medium"
              />
            </div>
            <div>
              <label className="block text-black font-heading text-xs uppercase mb-1">
                Ano do Rodapé:
              </label>
              <input
                type="number"
                value={formData.anoRodape}
                onChange={(e) => setFormData({ ...formData, anoRodape: Number(e.target.value) })}
                className="w-full border-3 border-black p-2 rounded-lg text-black bg-zinc-50 font-medium"
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border-2 border-black rounded-lg font-bold bg-zinc-100 hover:bg-zinc-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="brutal-btn bg-[#22C55E] text-black px-5 py-2.5 text-sm font-black flex items-center gap-1.5"
            >
              {savedNotice ? <Check className="w-4 h-4" /> : null}
              <span>{savedNotice ? 'Salvo!' : 'Salvar Alterações'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
