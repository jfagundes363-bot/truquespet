interface MacBookMockupProps {
  imageSrc?: string;
}

export const MacBookMockup: React.FC<MacBookMockupProps> = ({
  imageSrc,
}) => {
  return (
    <div className="w-full max-w-[700px] mx-auto select-none px-2 sm:px-4 overflow-hidden">
      {/* CORPO PRINCIPAL DO MACBOOK (TAMPA / TELA SUPERIOR) */}
      <div className="relative mx-auto rounded-t-[18px] sm:rounded-t-[22px] bg-[#1C1E22] border-[3px] border-[#373B41] p-2 sm:p-2.5 pb-4 sm:pb-5 shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
        {/* CÂMERA FACETIME HD CENTRALIZADA */}
        <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#050505] border border-[#484D55] relative flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-[#10B981]/80" />
          </div>
        </div>

        {/* ÁREA DA TELA COM PROPORÇÃO 16:10 DO MACBOOK (MOLDE LIMPO COM FUNDO PRETO) */}
        <div className="w-full aspect-[16/10] bg-black rounded-lg sm:rounded-xl overflow-hidden relative border border-[#272B30]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Área de membros no MacBook"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-black" />
          )}
        </div>
      </div>

      {/* BASE INFERIOR DO MACBOOK (CHASSI METÁLICO FINO COM ENCAIXE DE ABERTURA) */}
      <div className="relative w-[104%] -left-[2%]">
        {/* Tampa do teclado com detalhe de abertura central */}
        <div className="h-3 sm:h-4.5 bg-gradient-to-b from-[#373B41] via-[#2A2D33] to-[#1C1E22] rounded-b-[14px] sm:rounded-b-[18px] border-t border-[#4D535C] shadow-[0_12px_24px_rgba(0,0,0,0.35)] relative flex justify-center">
          {/* Entalhe central clássico do MacBook para abrir a tela com o polegar */}
          <div className="w-14 sm:w-20 h-1 sm:h-1.5 bg-[#141619] rounded-b-md" />
        </div>
        {/* Sombra de apoio na mesa */}
        <div className="w-[85%] h-2.5 bg-black/30 blur-md mx-auto -mt-0.5 rounded-full" />
      </div>
    </div>
  );
};
