import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, RotateCcw, ArrowDown } from 'lucide-react';

export interface PhoneMockupVideoProps {
  videoUrl?: string; // Link direto .mp4
  embedUrl?: string; // Link de embed
  posterUrl?: string; // Imagem de capa
  autoplayMuted?: boolean;
  buttonDelaySeconds?: number;
  onScrollToPlans: () => void;
}

export const PhoneMockupVideo: React.FC<PhoneMockupVideoProps> = ({
  videoUrl = 'https://i.imgur.com/L5uhYXn.mp4',
  embedUrl = '',
  posterUrl = 'https://i.imgur.com/L5uhYXn.jpg',
  buttonDelaySeconds = 0,
  onScrollToPlans,
}) => {
  // Estados do reprodutor
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(buttonDelaySeconds === 0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const phoneContainerRef = useRef<HTMLDivElement>(null);

  // Atualização de tempo do vídeo
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration > 0) {
      setProgressPercent((currentTime / duration) * 100);
    }
    if (buttonDelaySeconds > 0 && currentTime >= buttonDelaySeconds && !isButtonVisible) {
      setIsButtonVisible(true);
    }
  };

  // Play / Pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused || hasEnded) {
      if (hasEnded) {
        videoRef.current.currentTime = 0;
        setHasEnded(false);
      }
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Fim do vídeo
  const handleVideoEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
    setProgressPercent(100);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Clique na barra de progresso para avançar ou retroceder
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercent = Math.max(0, Math.min(1, clickX / rect.width));
    if (videoRef.current.duration) {
      videoRef.current.currentTime = newPercent * videoRef.current.duration;
      setProgressPercent(newPercent * 100);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-1 mb-5 sm:mt-2 sm:mb-7 select-none px-2">
      {/* TEXTO DE APOIO ACIMA DO CELULAR */}
      <div className="text-center mb-2.5 sm:mb-3 px-2 max-w-[360px]">
        <h3 className="font-heading text-base sm:text-lg md:text-xl text-black leading-snug mb-0 flex items-center justify-center gap-1.5 flex-wrap">
          <span>Assista o vídeo e veja como</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-black animate-bounce inline-block shrink-0" strokeWidth={3} />
        </h3>
      </div>

      {/* ========================================================
          MOLDURA DO CELULAR (PROPORÇÃO 9:16 PERFEITA)
          ======================================================== */}
      <div
        ref={phoneContainerRef}
        className="relative w-full max-w-[clamp(260px,80vw,340px)] aspect-[9/16] flex items-center justify-center mx-auto"
      >
        {/* BOTÕES LATERAIS DE HARDWARE EM CSS */}
        <div className="absolute -left-[3.5px] top-[18%] w-[4px] h-[26px] bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-l-[2px] shadow-xs" />
        <div className="absolute -left-[3.5px] top-[26%] w-[4px] h-[46px] bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-l-[2px] shadow-xs" />
        <div className="absolute -left-[3.5px] top-[35%] w-[4px] h-[46px] bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-l-[2px] shadow-xs" />
        <div className="absolute -right-[3.5px] top-[28%] w-[4px] h-[64px] bg-gradient-to-l from-zinc-700 to-zinc-900 rounded-r-[2px] shadow-xs" />

        {/* CORPO DO APARELHO (Moldura Grafite com Brilho Metálico e Cantos 38px-42px) */}
        <div className="relative w-full h-full bg-[#1b1b1e] rounded-[38px] sm:rounded-[42px] p-[8px] sm:p-[10px] shadow-[0_22px_45px_-12px_rgba(0,0,0,0.6),0_10px_20px_-8px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.12),0_0_0_4px_#09090b] flex flex-col justify-between overflow-hidden">
          {/* Reflexo metálico suave */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-white/15 to-transparent rounded-full pointer-events-none blur-sm" />

          {/* TELA INTERNA */}
          <div
            tabIndex={0}
            role="button"
            aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
            onClick={togglePlay}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                togglePlay();
              }
            }}
            className="relative w-full h-full bg-black rounded-[30px] sm:rounded-[34px] overflow-hidden flex items-center justify-center focus:outline-none cursor-pointer group"
          >
            {/* VÍDEO PRINCIPAL PERFEITAMENTE AJUSTADO 9:16 COM CAPA INICIAL */}
            <video
              ref={videoRef}
              src={videoUrl}
              poster={posterUrl || undefined}
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover aspect-[9/16]"
            />

            {/* BOTÃO PLAY NO FORMATO YOUTUBE (QUANDO O VÍDEO NÃO ESTIVER RODANDO) */}
            {!isPlaying && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/25 transition-opacity">
                <button
                  type="button"
                  aria-label="Reproduzir vídeo"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="w-[70px] sm:w-[78px] h-[48px] sm:h-[54px] rounded-[16px] sm:rounded-[18px] bg-[#FF0000] hover:bg-[#CC0000] active:scale-90 transition-all flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.6)] cursor-pointer"
                >
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <polygon points="6,4 20,12 6,20" fill="white" />
                  </svg>
                </button>
              </div>
            )}

            {/* BOTÃO PAUSE VISÍVEL AO HOVER/TOQUE QUANDO ESTIVER RODANDO */}
            {isPlaying && (
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white border border-white/20 shadow-lg">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="6" y="4" width="4" height="16" fill="white" rx="1" />
                    <rect x="14" y="4" width="4" height="16" fill="white" rx="1" />
                  </svg>
                </div>
              </div>
            )}

            {/* BARRA QUE CARREGA DE ACORDO COM O ANDAMENTO DO VÍDEO */}
            <div
              className="absolute bottom-3 left-3.5 right-3.5 z-30 py-1"
              onClick={handleProgressClick}
            >
              <div className="w-full h-1.5 sm:h-2 bg-white/30 backdrop-blur-xs rounded-full overflow-hidden shadow-xs cursor-pointer">
                <div
                  className="h-full bg-[#FF0000] rounded-full transition-[width] duration-100 ease-linear"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
