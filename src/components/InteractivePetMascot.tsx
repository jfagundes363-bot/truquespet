import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { DOG_BARK_BASE64 } from '../utils/dogSoundBase64';

interface FloatingReaction {
  id: number;
  emoji: string;
  leftOffset: number;
}

export const InteractivePetMascot: React.FC = () => {
  // Estado de áudio: por padrão desativado devido a políticas de navegadores
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  // Estados de animação e expressão
  const [isBarking, setIsBarking] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHappy, setIsHappy] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Rastreamento das pupilas seguindo o cursor do mouse
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

  // Balão de fala e reações flutuantes
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);
  const [reactions, setReactions] = useState<FloatingReaction[]>([]);

  // Referência do elemento de áudio
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const speechTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Frases carinhosas e divertidas ao interagir
  const clickPhrases = [
    'Au au! Te amo! ❤️',
    'Bom garoto! 🦴',
    'Vamos aprender truques? 🐶',
    'Au! Sentei direitinho! 🐾',
    'Mais carinho, por favor! ✨',
    'Dá a pata! 🐾',
  ];

  // Inicializa o elemento de áudio
  useEffect(() => {
    const audio = new Audio(DOG_BARK_BASE64);
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Mostra um balão de fala temporário
  const showSpeech = useCallback((text: string, durationMs = 2600) => {
    if (speechTimeoutRef.current) {
      clearTimeout(speechTimeoutRef.current);
    }
    setSpeechBubble(text);
    speechTimeoutRef.current = setTimeout(() => {
      setSpeechBubble(null);
    }, durationMs);
  }, []);

  // Toca o som de latido realista com fallback via Web Audio
  const playBarkSound = useCallback(() => {
    if (!isAudioEnabled) return;
    if (isPlayingSound) return; // Evita sobreposição

    setIsPlayingSound(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => {
          setTimeout(() => {
            setIsPlayingSound(false);
          }, 1400);
        })
        .catch(() => {
          // Fallback sonoro sintético se o arquivo falhar
          try {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            if (AudioCtx) {
              const ctx = new AudioCtx();
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              osc.type = 'sawtooth';
              osc.frequency.setValueAtTime(320, ctx.currentTime);
              osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.18);
              gain.gain.setValueAtTime(0.3, ctx.currentTime);
              gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.start();
              osc.stop(ctx.currentTime + 0.22);
            }
          } catch {
            // Ignora silenciosamente
          }
          setIsPlayingSound(false);
        });
    } else {
      setIsPlayingSound(false);
    }
  }, [isAudioEnabled, isPlayingSound]);

  // Executa um ciclo de latido (animação visual da boca, orelhas, corpo + som se ativo)
  const triggerBarkCycle = useCallback(
    (customText?: string) => {
      setIsBarking(true);
      showSpeech(customText || 'Au! Au! 🐾', 2400);
      playBarkSound();

      setTimeout(() => {
        setIsBarking(false);
      }, 1500);
    },
    [playBarkSound, showSpeech]
  );

  // 1. Latido automático a cada 9 segundos
  useEffect(() => {
    const barkInterval = setInterval(() => {
      triggerBarkCycle('Au! Au! 🐾');
    }, 9000);

    return () => clearInterval(barkInterval);
  }, [triggerBarkCycle]);

  // 2. Piscar de olhos natural periódico (a cada 3.8 a 5s)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 4200);

    return () => clearInterval(blinkInterval);
  }, []);

  // 3. Olhar em direção ao cursor quando passar o mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    // Limita o deslocamento das pupilas entre -3.5px e +3.5px
    setPupilOffset({
      x: Math.max(-3.5, Math.min(3.5, deltaX * 3.5)),
      y: Math.max(-2.5, Math.min(2.5, deltaY * 2.5)),
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPupilOffset({ x: 0, y: 0 });
  };

  // 4. Interatividade ao clicar ou tocar no cachorrinho
  const handleDogClick = () => {
    // Se o áudio ainda não estiver ativado, ativa com o toque do usuário
    if (!isAudioEnabled) {
      setIsAudioEnabled(true);
    }

    setIsHappy(true);
    const randomPhrase = clickPhrases[Math.floor(Math.random() * clickPhrases.length)];
    triggerBarkCycle(randomPhrase);

    // Adiciona reações visuais subindo (corações e patinhas)
    const newReaction: FloatingReaction = {
      id: Date.now() + Math.random(),
      emoji: Math.random() > 0.4 ? '❤️' : Math.random() > 0.5 ? '🐾' : '🦴',
      leftOffset: Math.floor(Math.random() * 60) - 30,
    };

    setReactions((prev) => [...prev.slice(-4), newReaction]);

    // Limpa a reação após a animação
    setTimeout(() => {
      setReactions((prev) => prev.filter((r) => r.id !== newReaction.id));
    }, 1400);

    // Volta o estado de felicidade após 1.6s
    setTimeout(() => {
      setIsHappy(false);
    }, 1600);
  };

  // Alternar ativação de áudio
  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = !isAudioEnabled;
    setIsAudioEnabled(newState);

    if (newState) {
      // Se acabou de ativar, reproduz um latido de boas-vindas
      triggerBarkCycle('Au! Au! 🔊');
    } else {
      showSpeech('Modo silencioso 🤫', 2000);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`fixed z-[850] transition-all duration-300 select-none ${
        isMinimized
          ? 'bottom-24 md:bottom-6 right-3 md:right-6'
          : 'bottom-20 md:bottom-6 right-3 md:right-6'
      }`}
      style={{ touchAction: 'manipulation' }}
    >
      {/* MODO MINIMIZADO: botãozinho redondo sutil para reabrir */}
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-[#FFD400] text-black font-extrabold p-2.5 rounded-full border-3 border-black shadow-[3px_3px_0_#000] hover:scale-110 active:scale-95 transition-transform flex items-center gap-1.5 text-xs"
          title="Abrir mascote interativo"
        >
          <span className="text-base animate-bounce">🐶</span>
          <span className="hidden sm:inline">Mascote</span>
        </button>
      ) : (
        <div className="relative flex flex-col items-center">
          {/* ========================================================
              BOTÃO SUPERIOR DE CONTROLE DE ÁUDIO & LATIDO (9s)
              Permite ao visitante autorizar o som e controlar o áudio
              ======================================================== */}
          <div className="mb-1.5 flex items-center gap-1.5">
            <button
              onClick={toggleAudio}
              className={`px-2.5 py-1 rounded-full text-[11px] font-black border-2 border-black shadow-[2px_2px_0_#000] flex items-center gap-1 transition-all active:scale-95 ${
                isAudioEnabled
                  ? 'bg-[#22c55e] text-white hover:bg-[#16a34a]'
                  : 'bg-[#FFD400] text-black animate-pulse hover:bg-[#ffe040]'
              }`}
              title={isAudioEnabled ? 'Desativar latido' : 'Clique para ativar som do latido'}
            >
              {isAudioEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Latido ativo</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-black" />
                  <span>Ativar som 🔊</span>
                </>
              )}
            </button>

            {/* Botão sutil para minimizar */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(true);
              }}
              className="w-5 h-5 rounded-full bg-white text-gray-700 hover:text-black border border-black text-[10px] flex items-center justify-center font-bold shadow-[1px_1px_0_#000]"
              title="Minimizar mascote"
            >
              ✕
            </button>
          </div>

          {/* ========================================================
              BALÃO DE FALA DO CACHORRINHO
              ======================================================== */}
          {speechBubble && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black font-extrabold text-[12px] px-3 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0_#000] z-20 animate-fade-in pointer-events-none">
              {speechBubble}
              {/* Triângulo apontador do balão */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-r-2 border-b-2 border-black rotate-45" />
            </div>
          )}

          {/* ========================================================
              CORAÇÕES E PATINHAS FLUTUANTES (AO CLICAR)
              ======================================================== */}
          {reactions.map((r) => (
            <div
              key={r.id}
              className="absolute pointer-events-none text-xl font-bold animate-float-up z-30"
              style={{
                left: `calc(50% + ${r.leftOffset}px)`,
                bottom: '70px',
              }}
            >
              {r.emoji}
            </div>
          ))}

          {/* ========================================================
              CORPO DO CACHORRO EM SVG INTERATIVO & ANIMADO
              ======================================================== */}
          <div
            onClick={handleDogClick}
            className={`relative cursor-pointer transition-transform duration-300 ${
              isBarking ? 'animate-bark-jump' : isHappy ? 'animate-happy-jump' : ''
            } ${isHovered ? 'scale-105' : 'hover:scale-102'}`}
            style={{
              transform: isHovered && !isBarking ? 'rotate(5deg)' : undefined,
              transformOrigin: 'bottom center',
            }}
            title="Clique para brincar com o cachorrinho!"
          >
            <svg
              viewBox="0 0 160 160"
              className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
              style={{ overflow: 'visible' }}
            >
              <defs>
                {/* Gradiente caramelo para a pelagem */}
                <linearGradient id="pupFurGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5A842" />
                  <stop offset="100%" stopColor="#D9822B" />
                </linearGradient>

                {/* Gradiente para as orelhas */}
                <linearGradient id="pupEarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#BD681E" />
                  <stop offset="100%" stopColor="#964C0F" />
                </linearGradient>

                {/* Brilho da coleira */}
                <linearGradient id="pupCollarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF4757" />
                  <stop offset="100%" stopColor="#EE2F40" />
                </linearGradient>
              </defs>

              {/* ----------------------------------------------------
                  1. RABO QUE BALANÇA (ANIMADO)
                  ---------------------------------------------------- */}
              <g
                className={
                  isBarking || isHappy
                    ? 'animate-tail-fast'
                    : isHovered
                    ? 'animate-tail-medium'
                    : 'animate-tail-idle'
                }
                style={{ transformOrigin: '32px 125px' }}
              >
                <path
                  d="M 32,125 C 18,122 8,105 12,90 C 14,80 24,78 28,88 C 30,95 28,110 34,122 Z"
                  fill="url(#pupEarGrad)"
                  stroke="#1A1A1A"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                {/* Pontinha fofa do rabo branca */}
                <circle cx="16" cy="85" r="5" fill="#FFF9E6" />
              </g>

              {/* ----------------------------------------------------
                  2. CORPO DO CACHORRO (SENTADINHO)
                  ---------------------------------------------------- */}
              <ellipse
                cx="80"
                cy="116"
                rx="36"
                ry="32"
                fill="url(#pupFurGrad)"
                stroke="#1A1A1A"
                strokeWidth="3.5"
              />

              {/* Peito fofinho / Mancha clara no peitoral */}
              <path
                d="M 64,102 C 72,108 88,108 96,102 C 100,120 92,138 80,140 C 68,138 60,120 64,102 Z"
                fill="#FFF4D9"
              />

              {/* Patas traseiras dobradas nas laterais */}
              <ellipse
                cx="46"
                cy="134"
                rx="14"
                ry="10"
                fill="url(#pupFurGrad)"
                stroke="#1A1A1A"
                strokeWidth="3"
              />
              <ellipse
                cx="114"
                cy="134"
                rx="14"
                ry="10"
                fill="url(#pupFurGrad)"
                stroke="#1A1A1A"
                strokeWidth="3"
              />

              {/* Patas dianteiras com dedinhos */}
              <g>
                {/* Pata Esquerda */}
                <rect
                  x="60"
                  y="122"
                  width="15"
                  height="22"
                  rx="7.5"
                  fill="#FFF4D9"
                  stroke="#1A1A1A"
                  strokeWidth="3"
                />
                <line x1="65" y1="138" x2="65" y2="143" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                <line x1="70" y1="138" x2="70" y2="143" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />

                {/* Pata Direita */}
                <rect
                  x="85"
                  y="122"
                  width="15"
                  height="22"
                  rx="7.5"
                  fill="#FFF4D9"
                  stroke="#1A1A1A"
                  strokeWidth="3"
                />
                <line x1="90" y1="138" x2="90" y2="143" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                <line x1="95" y1="138" x2="95" y2="143" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
              </g>

              {/* Coleira Vermelha com Medalhinha Dourada */}
              <rect
                x="56"
                y="94"
                width="48"
                height="8"
                rx="4"
                fill="url(#pupCollarGrad)"
                stroke="#1A1A1A"
                strokeWidth="2.5"
              />
              {/* Medalhinha de ouro */}
              <circle
                cx="80"
                cy="104"
                r="5.5"
                fill="#FFD400"
                stroke="#1A1A1A"
                strokeWidth="2"
              />
              <circle cx="80" cy="104" r="2" fill="#FFF" />

              {/* ----------------------------------------------------
                  3. CABEÇA DO CACHORRO COM ORELHAS MÓVEIS
                  ---------------------------------------------------- */}
              <g
                style={{
                  transformOrigin: '80px 80px',
                  transform: isHovered ? 'rotate(4deg)' : undefined,
                  transition: 'transform 0.25s ease',
                }}
              >
                {/* Orelha Esquerda (Móvel / Articulada) */}
                <g
                  className={isBarking ? 'animate-ear-left-bark' : 'animate-ear-left-idle'}
                  style={{ transformOrigin: '48px 46px' }}
                >
                  <path
                    d="M 48,46 C 30,42 16,60 22,86 C 26,102 38,104 44,90 C 48,80 50,60 48,46 Z"
                    fill="url(#pupEarGrad)"
                    stroke="#1A1A1A"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                  {/* Detalhe interno da orelha */}
                  <path
                    d="M 38,62 C 30,70 30,86 36,92 C 38,84 40,74 38,62 Z"
                    fill="#DF7E7E"
                    opacity="0.6"
                  />
                </g>

                {/* Orelha Direita (Móvel / Articulada) */}
                <g
                  className={isBarking ? 'animate-ear-right-bark' : 'animate-ear-right-idle'}
                  style={{ transformOrigin: '112px 46px' }}
                >
                  <path
                    d="M 112,46 C 130,42 144,60 138,86 C 134,102 122,104 116,90 C 112,80 110,60 112,46 Z"
                    fill="url(#pupEarGrad)"
                    stroke="#1A1A1A"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                  {/* Detalhe interno da orelha */}
                  <path
                    d="M 122,62 C 130,70 130,86 124,92 C 122,84 120,74 122,62 Z"
                    fill="#DF7E7E"
                    opacity="0.6"
                  />
                </g>

                {/* Base da Cabeça */}
                <circle
                  cx="80"
                  cy="66"
                  r="35"
                  fill="url(#pupFurGrad)"
                  stroke="#1A1A1A"
                  strokeWidth="3.5"
                />

                {/* Focinho / Área Clara das Bochechas */}
                <ellipse
                  cx="80"
                  cy="75"
                  rx="24"
                  ry="18"
                  fill="#FFF4D9"
                  stroke="#1A1A1A"
                  strokeWidth="2.5"
                />

                {/* Bochechinhas rosadas de vergonha/alegria */}
                <ellipse cx="61" cy="73" rx="5" ry="3.5" fill="#FFB4B4" opacity="0.6" />
                <ellipse cx="99" cy="73" rx="5" ry="3.5" fill="#FFB4B4" opacity="0.6" />

                {/* --------------------------------------------------
                    4. OLHOS ANIMADOS: PISCAM, SEGUEM O CURSOR OU FICAM FELIZES
                    -------------------------------------------------- */}
                {isHappy ? (
                  // Olhos Felizes fechados em arco (^ ^)
                  <g>
                    <path
                      d="M 60,57 Q 67,50 74,57"
                      fill="none"
                      stroke="#1A1A1A"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 86,57 Q 93,50 100,57"
                      fill="none"
                      stroke="#1A1A1A"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </g>
                ) : isBlinking ? (
                  // Olhos Piscando
                  <g>
                    <line x1="60" y1="56" x2="74" y2="56" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />
                    <line x1="86" y1="56" x2="100" y2="56" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />
                  </g>
                ) : (
                  // Olhos Abertos com Rastreamento das Pupilhas
                  <g>
                    {/* Olho Esquerdo */}
                    <circle cx="67" cy="55" r="7.5" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
                    {/* Pupila com offset reativo ao cursor */}
                    <circle
                      cx={67 + pupilOffset.x}
                      cy={55 + pupilOffset.y}
                      r="4.5"
                      fill="#1A1A1A"
                    />
                    {/* Brilho do olhar (reflexo) */}
                    <circle cx={65 + pupilOffset.x * 0.5} cy={53 + pupilOffset.y * 0.5} r="1.6" fill="#FFFFFF" />

                    {/* Olho Direito */}
                    <circle cx="93" cy="55" r="7.5" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2.5" />
                    {/* Pupila com offset reativo ao cursor */}
                    <circle
                      cx={93 + pupilOffset.x}
                      cy={55 + pupilOffset.y}
                      r="4.5"
                      fill="#1A1A1A"
                    />
                    {/* Brilho do olhar (reflexo) */}
                    <circle cx={91 + pupilOffset.x * 0.5} cy={53 + pupilOffset.y * 0.5} r="1.6" fill="#FFFFFF" />
                  </g>
                )}

                {/* Sobrancelhas fofas */}
                <ellipse cx="67" cy="46" rx="3.5" ry="2" fill="#8B4513" opacity="0.8" />
                <ellipse cx="93" cy="46" rx="3.5" ry="2" fill="#8B4513" opacity="0.8" />

                {/* Narizinho de Cachorro preto e brilhante */}
                <path
                  d="M 74,68 C 74,64 86,64 86,68 C 86,73 80,75 80,75 C 80,75 74,73 74,68 Z"
                  fill="#1A1A1A"
                />
                <circle cx="78" cy="67" r="1.2" fill="#FFFFFF" />

                {/* --------------------------------------------------
                    5. BOCA ARTICULADA (SINCRONIZADA COM O LATIDO)
                    -------------------------------------------------- */}
                {isBarking ? (
                  // Boca Aberta no Latido "Au! Au!"
                  <g className="animate-bark-mouth">
                    {/* Interior escuro da boca aberta */}
                    <ellipse
                      cx="80"
                      cy="82"
                      rx="8"
                      ry="9"
                      fill="#6B1D1D"
                      stroke="#1A1A1A"
                      strokeWidth="2.5"
                    />
                    {/* Língua rosada articulada */}
                    <path
                      d="M 75,82 C 75,89 85,89 85,82 C 85,86 75,86 75,82 Z"
                      fill="#FF6B8B"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                    />
                    {/* Dente superior fofinho */}
                    <path d="M 78,75 L 80,77 L 82,75 Z" fill="#FFF" />
                  </g>
                ) : isHappy || isHovered ? (
                  // Boca Sorridente com Língua de fora
                  <g>
                    <path
                      d="M 72,76 Q 80,82 88,76"
                      fill="none"
                      stroke="#1A1A1A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Língua de fora balançando */}
                    <path
                      d="M 77,79 C 77,87 83,87 83,79 Z"
                      fill="#FF6B8B"
                      stroke="#1A1A1A"
                      strokeWidth="1.8"
                    />
                  </g>
                ) : (
                  // Boca em W normal descansando
                  <path
                    d="M 72,75 Q 76,78 80,75 Q 84,78 88,75"
                    fill="none"
                    stroke="#1A1A1A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                )}
              </g>
            </svg>

            {/* Dica visual suave sobre o pet */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-black text-[#FFD400] text-[9px] font-black px-1.5 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity">
              Toque em mim! 🐾
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
