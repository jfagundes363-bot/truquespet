import React from 'react';
import { PhoneMockup } from './PhoneMockup';

export const VideoPlaceholderSection: React.FC = () => {
  return (
    <section id="demonstracao" className="py-12 border-t-2 border-black/10 text-center">
      <h2 className="text-[clamp(28px,5vw,40px)] font-heading mb-3">
        Veja como é fácil na prática
      </h2>
      <p className="text-zinc-700 text-base md:text-lg font-medium max-w-[560px] mx-auto mb-8">
        Conheça a nossa área de membros por dentro: organizada, prática e feita para você aprender no seu ritmo.
      </p>

      {/* MOLDURA DO CELULAR COM O VÍDEO 9:16 PERFEITAMENTE ALINHADO */}
      <PhoneMockup
        videoUrl="https://i.imgur.com/ZlTivfe.mp4"
        posterUrl="https://i.imgur.com/ZlTivfe.jpg"
      />
    </section>
  );
};
