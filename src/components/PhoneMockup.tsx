import React, { useState, useRef } from 'react';

export interface PhoneMockupProps {
  videoUrl?: string;
  posterUrl?: string;
  imageSrc?: string;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  videoUrl = 'https://i.imgur.com/ZlTivfe.mp4',
  posterUrl = 'https://i.imgur.com/ZlTivfe.jpg',
  imageSrc,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration > 0) {
      setProgressPercent((currentTime / duration) * 100);
    }
  };

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

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
    setProgressPercent(100);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

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
    <div className={`w-full flex flex-col items-center select-none px-2 ${className}`}>
      {/* ========================================================
          MOLDURA DO CELULAR (PROPORÇÃO 9:16 PERFEITA)
          ======================================================== */}
      <div className="relative w-full max-w-[clamp(260px,80vw,340px)] aspect-[9/16] flex items-center justify-center mx-auto">
        {/* BOTÕES LATERAIS DE HARDWARE */}
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
            onClick={videoUrl ? togglePlay : undefined}
            onKeyDown={(e) => {
              if (videoUrl && (e.key === ' ' || e.key === 'Enter')) {
                e.preventDefault();
                togglePlay();
              }
            }}
            className="relative w-full h-full bg-black rounded-[30px] sm:rounded-[34px] overflow-hidden flex items-center justify-center focus:outline-none cursor-pointer group"
          >
            {/* Notch / Ilha Superior Central */}
            <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-5 bg-[#0a0a0c] rounded-full z-30 flex items-center justify-end pr-2 pointer-events-none shadow-xs">
              <div className="w-2 h-2 rounded-full bg-[#18181b] border border-[#27272a]" />
            </div>

            {videoUrl ? (
              <>
                {/* VÍDEO PRINCIPAL PERFEITAMENTE ENCAIXADO E ALINHADO */}
                <video
                  ref={videoRef}
                  src={videoUrl}
                  poster={posterUrl || undefined}
                  playsInline
                  preload="metadata"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleVideoEnded}
                  className="w-full h-full object-cover aspect-[9/16] block"
                />

                {/* BOTÃO PLAY QUANDO O VÍDEO ESTIVER PAUSADO */}
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

                {/* ÍCONE DE PAUSE AO PASSAR O MOUSE ENQUANTO TOCA */}
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

                {/* BARRA DE PROGRESSO DO VÍDEO */}
                <div
                  className="absolute bottom-3 left-3.5 right-3.5 z-25 py-1"
                  onClick={handleProgressClick}
                >
                  <div className="w-full h-1.5 sm:h-2 bg-white/30 backdrop-blur-xs rounded-full overflow-hidden shadow-xs cursor-pointer">
                    <div
                      className="h-full bg-[#FF0000] rounded-full transition-[width] duration-100 ease-linear"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </>
            ) : imageSrc ? (
              <img
                src={imageSrc}
                alt="Demonstração"
                className="w-full h-full object-cover aspect-[9/16] block"
              />
            ) : (
              <div className="w-full h-full bg-black" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
