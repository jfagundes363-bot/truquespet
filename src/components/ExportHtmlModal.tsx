import React, { useState } from 'react';
import { X, Copy, Download, Check } from 'lucide-react';
import { ProductConfig } from '../config';
import { generateSingleFileHtml } from '../utils/generateSingleHtml';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ProductConfig;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htmlCode = generateSingleFileHtml(config);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pagina-de-vendas-truques.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
      <div className="w-full max-w-[700px] bg-white border-[5px] border-black rounded-[12px] shadow-[6px_6px_0_#000] overflow-hidden relative max-h-[90dvh] flex flex-col">
        {/* Header */}
        <div className="bg-black text-white px-5 py-3 flex items-center justify-between border-b-4 border-[#FFD400]">
          <div>
            <div className="font-heading text-sm sm:text-base">
              📄 Código HTML em Arquivo Único
            </div>
            <p className="text-[11px] text-zinc-300">
              Pronto para salvar como index.html ou hospedar em qualquer servidor
            </p>
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

        {/* Content */}
        <div className="p-4 flex-1 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-zinc-600">
              HTML + CSS + JS inline em um único arquivo (apenas Google Fonts)
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="brutal-btn bg-[#22C55E] text-black px-3.5 py-1.5 text-xs font-black flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado!' : 'Copiar Tudo'}</span>
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="brutal-btn bg-[#FFD400] text-black px-3.5 py-1.5 text-xs font-black flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar .html</span>
              </button>
            </div>
          </div>

          <textarea
            readOnly
            value={htmlCode}
            className="w-full flex-1 min-h-[300px] p-3 border-3 border-black rounded-lg bg-zinc-900 text-zinc-100 font-mono text-xs focus:outline-none resize-none"
          />
        </div>
      </div>
    </div>
  );
};
