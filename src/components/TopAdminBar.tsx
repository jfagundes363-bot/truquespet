import React from 'react';
import { Smartphone, Monitor, Download, Copy, Settings, Check } from 'lucide-react';

interface TopAdminBarProps {
  viewMode: 'mobile' | 'desktop';
  setViewMode: (mode: 'mobile' | 'desktop') => void;
  onOpenConfig: () => void;
  onOpenExport: () => void;
  onQuickDownload: () => void;
  isCopied: boolean;
  onQuickCopy: () => void;
}

export const TopAdminBar: React.FC<TopAdminBarProps> = ({
  viewMode,
  setViewMode,
  onOpenConfig,
  onOpenExport,
  onQuickDownload,
  isCopied,
  onQuickCopy,
}) => {
  return (
    <aside aria-label="Painel de Ferramentas" className="sticky top-0 z-[800] bg-black text-white border-b-4 border-[#FFD400] px-3 py-2 text-xs md:text-sm font-bold flex flex-wrap items-center justify-between gap-2 shadow-md">
      <div className="flex items-center gap-2">
        <span className="bg-[#FFD400] text-black px-2 py-0.5 rounded text-xs font-black uppercase tracking-wider">
          Painel do Produtor
        </span>
        <span className="hidden sm:inline text-zinc-300 font-medium">
          Landing Page Mobile-First Pronta para Vendas
        </span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {/* Device Switcher */}
        <div className="flex items-center bg-zinc-800 rounded-lg p-0.5 border border-zinc-700">
          <button
            type="button"
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold transition-all ${
              viewMode === 'mobile'
                ? 'bg-[#FFD400] text-black'
                : 'text-zinc-300 hover:text-white'
            }`}
            title="Visualizar em tamanho celular (390px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Celular</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('desktop')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold transition-all ${
              viewMode === 'desktop'
                ? 'bg-[#FFD400] text-black'
                : 'text-zinc-300 hover:text-white'
            }`}
            title="Visualizar em largura total desktop (720px)"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
        </div>

        {/* Quick Actions */}
        <button
          type="button"
          onClick={onOpenConfig}
          className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-white px-2.5 py-1 rounded text-xs font-bold transition-colors border border-zinc-700"
          title="Editar links de checkout e nome do produto"
        >
          <Settings className="w-3.5 h-3.5 text-[#FFD400]" />
          <span>Configurar Links</span>
        </button>

        <button
          type="button"
          onClick={onQuickCopy}
          className="flex items-center gap-1 bg-[#22C55E] hover:bg-emerald-600 text-black px-2.5 py-1 rounded text-xs font-black transition-transform active:scale-95"
          title="Copiar código HTML único pronto para usar"
        >
          {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{isCopied ? 'Copiado!' : 'Copiar HTML Único'}</span>
        </button>

        <button
          type="button"
          onClick={onQuickDownload}
          className="flex items-center gap-1 bg-[#FFD400] hover:bg-yellow-400 text-black px-2.5 py-1 rounded text-xs font-black transition-transform active:scale-95"
          title="Baixar arquivo index.html pronto"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Baixar .html</span>
        </button>
      </div>
    </aside>
  );
};
