import { ProductConfig, TRICKS_LIST } from '../config';

const ROW1_REVIEWS = [
  { name: 'Mariana Silveira', rating: 5, text: 'Superou totalmente as minhas expectativas! O atendimento foi muito ágil e o produto chegou antes do prazo previsto. Com certeza comprarei novamente.' },
  { name: 'Lucas Andrade', rating: 4, text: 'Muito bom serviço, cumpriu com tudo o que prometeu. O suporte tirou todas as minhas dúvidas com clareza. Recomendo a todos!' },
  { name: 'Camila Ferreira', rating: 5, text: 'Experiência maravilhosa do início ao fim. A qualidade é visível em cada detalhe e fez toda a diferença para o que eu precisava.' },
  { name: 'Rodrigo Mendes', rating: 4, text: 'Gostei bastante! Foi uma ótima aquisição e facilitou muito a minha rotina. O processo de compra também foi bastante simples.' },
  { name: 'Beatriz Costa', rating: 5, text: 'Estou simplesmente apaixonada pelo resultado. Já recomendei para vários amigos e familiares. Nota dez pelo profissionalismo!' },
  { name: 'Thiago Nascimento', rating: 5, text: 'Excelente custo-benefício. O cuidado na apresentação e a eficiência no envio foram pontos que me surpreenderam bastante.' },
  { name: 'Juliana Ramos', rating: 4, text: 'Muito satisfeita com a minha compra. Chegou tudo certinho e bem embalado. Excelente experiência no geral.' },
  { name: 'Gabriel Santos', rating: 5, text: 'Sensacional! Estava com um pouco de receio no começo, mas a entrega foi impecável e super rápida. Ganhou um cliente fiel.' },
  { name: 'Fernanda Lima', rating: 5, text: 'O suporte foi extremamente atencioso quando precisei de ajuda para finalizar o pedido. A qualidade é indiscutível.' },
  { name: 'Renato Barbosa', rating: 4, text: 'Produto de qualidade e funcionamento perfeito. A entrega demorou apenas um pouquinho além do que eu imaginava, mas o atendimento resolveu tudo rapidamente.' },
];

const ROW2_REVIEWS = [
  { name: 'Larissa Rocha', rating: 5, text: 'Prático, eficiente e muito bonito. Dá para perceber o capricho em cada detalhe. Valeu muito o investimento!' },
  { name: 'Bruno Martins', rating: 5, text: 'Top demais! Processo muito transparente e direto ao ponto. Com certeza voltarei a fazer negócio no futuro.' },
  { name: 'Aline Moreira', rating: 4, text: 'Adorei a facilidade de navegação e a rapidez para fechar a compra. Atendeu muito bem ao que eu estava buscando.' },
  { name: 'Felipe Duarte', rating: 5, text: 'Profissionalismo exemplar! Fiquei impressionado com o nível de detalhe e com o suporte pós-venda. Parabéns pelo trabalho.' },
  { name: 'Patrícia Neves', rating: 5, text: 'Uma das melhores experiências de compra online que já tive recentemente. Tudo perfeito e sem complicação.' },
  { name: 'Leonardo Gomes', rating: 4, text: 'Muito bom, funcional e confiável. Cumpre exatamente o que está anunciado no site. Recomendo com segurança.' },
  { name: 'Vanessa Carvalho', rating: 5, text: 'Simplesmente impecável! A atenção prestada ao cliente fez toda a diferença para mim. Parabéns a toda a equipe envolvida.' },
  { name: 'Diego Pires', rating: 5, text: 'Qualidade acima da média e entrega rápida. Resolveu perfeitamente a minha necessidade, muito satisfeito.' },
  { name: 'Natália Ribeiro', rating: 4, text: 'Gostei bastante da experiência e da clareza de todas as etapas. O produto é muito bom e bem feito.' },
  { name: 'Eduardo Vasconcelos', rating: 5, text: 'Excelente em todos os sentidos: agilidade, suporte e qualidade final. Podem comprar sem medo!' },
];

export function generateSingleFileHtml(config: ProductConfig): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#FFD400">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="format-detection" content="telephone=no">
  <title>${config.nomeProduto} | Como Ensinar Truques Para Seu Cachorro</title>
  <meta name="description" content="Aprenda a ensinar truques incríveis para seu cachorro em poucos minutos por dia com reforço positivo, sem enrolação e sem equipamento caro.">
  <meta property="og:title" content="${config.nomeProduto} | Tutorial Passo a Passo">
  <meta property="og:description" content="O método simples de reforço positivo para ensinar qualquer cachorro sem estresse.">
  <meta property="og:image" content="https://i.imgur.com/wOZEwRI.png">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${config.nomeProduto} | Tutorial Passo a Passo">
  <meta name="twitter:description" content="O método simples de reforço positivo para ensinar qualquer cachorro sem estresse.">
  <meta name="twitter:image" content="https://i.imgur.com/wOZEwRI.png">

  <!-- Meta Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1134795859236597');
    fbq('track', 'PageView');
  </script>
  <!-- End Meta Pixel Code -->

  <!-- DNS PREFETCH & PRECONNECT (Alta Velocidade) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://i.imgur.com" crossorigin>
  <link rel="dns-prefetch" href="https://i.imgur.com">
  <link rel="preconnect" href="https://checkout.wiven.com.br" crossorigin>
  <link rel="dns-prefetch" href="https://checkout.wiven.com.br">
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Poppins:wght@600;700;800;900&display=swap" rel="stylesheet">

  <style>
    /* ========================================================
       ESTILOS NEO-BRUTALISTAS (PURO CSS, ZERO DEPENDÊNCIAS)
       ======================================================== */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      background-color: #ffffff;
      color: #000000;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      overflow-x: hidden;
    }

    body {
      background-color: #ffffff;
      color: #000000;
      line-height: 1.5;
      font-size: clamp(17px, 2.5vw, 19px);
      overflow-wrap: anywhere;
      word-break: break-word;
      padding-bottom: 90px; /* espaço para barra fixa mobile */
    }

    h1, h2, h3, .font-heading {
      font-family: 'Archivo Black', 'Poppins', sans-serif;
      font-weight: 900;
      letter-spacing: -0.03em;
      line-height: 1.15;
      text-wrap: balance;
    }

    /* Container centralizado estilo mobile-first com max 720px */
    .container {
      width: 100%;
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 20px;
      padding-right: 20px;
    }

    /* Cores do Design System Neo-brutalista */
    :root {
      --amarelo: #FFD400;
      --amarelo-claro: #FFF7CC;
      --verde-cta: #22C55E;
      --vermelho: #E11D48;
      --borda: 4px solid #000000;
      --borda-grossa: 5px solid #000000;
      --sombra: 5px 5px 0 #000000;
      --sombra-grande: 7px 7px 0 #000000;
      --sombra-ativa: 2px 2px 0 #000000;
      --radius: 12px;
    }

    /* Cards Brutalistas */
    .card {
      background: #ffffff;
      border: var(--borda);
      box-shadow: var(--sombra);
      border-radius: var(--radius);
      padding: 24px;
      margin-bottom: 20px;
    }

    .card-highlight {
      background: var(--amarelo-claro);
      border: var(--borda-grossa);
      box-shadow: var(--sombra-grande);
      border-radius: var(--radius);
      padding: 28px 24px;
      position: relative;
    }

    /* Marca-texto amarelo no título */
    mark.highlight {
      background-color: var(--amarelo);
      color: #000000;
      padding: 2px 8px;
      border: 3px solid #000000;
      display: inline-block;
      transform: rotate(-1deg);
      box-shadow: 3px 3px 0 #000;
      line-height: 1.1;
      margin-top: 4px;
      margin-bottom: 4px;
    }

    /* Botões Neo-brutalistas */
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      min-height: 56px;
      padding: 16px 24px;
      font-family: 'Archivo Black', sans-serif;
      font-size: clamp(18px, 2.5vw, 20px);
      font-weight: 900;
      text-decoration: none;
      color: #000000;
      border: var(--borda);
      box-shadow: var(--sombra);
      border-radius: var(--radius);
      cursor: pointer;
      transition: transform 0.12s ease, box-shadow 0.12s ease;
      touch-action: manipulation;
      user-select: none;
    }

    .btn:hover {
      transform: translate(-2px, -2px);
      box-shadow: 7px 7px 0 #000000;
    }

    .btn:active {
      transform: translate(3px, 3px);
      box-shadow: var(--sombra-ativa);
    }

    .btn-green {
      background-color: var(--verde-cta);
    }

    .btn-white {
      background-color: #ffffff;
    }

    .btn-yellow {
      background-color: var(--amarelo);
    }

    .pulse {
      animation: pulse-btn 2.8s infinite ease-in-out;
    }

    @keyframes pulse-btn {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.025); }
    }

    /* Placeholders de imagem e vídeo com borda preta grossa */
    .placeholder-box {
      width: 100%;
      background: #fafafa;
      border: var(--borda);
      box-shadow: var(--sombra);
      border-radius: var(--radius);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 30px 20px;
      position: relative;
      overflow: hidden;
    }

    .placeholder-box.hero-image {
      aspect-ratio: 16 / 9;
      background: repeating-linear-gradient(45deg, #fff, #fff 15px, #f5f5f5 15px, #f5f5f5 30px);
    }

    .placeholder-label {
      font-family: 'Archivo Black', sans-serif;
      font-size: 15px;
      background: #000000;
      color: #ffffff;
      padding: 6px 14px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 10px;
      border: 2px solid #000;
    }

    .placeholder-desc {
      font-size: 15px;
      font-weight: 700;
      color: #333333;
      margin-top: 8px;
    }

    /* Espaçamento vertical entre seções: 48px a 72px */
    section {
      padding-top: clamp(48px, 7vw, 72px);
      padding-bottom: clamp(48px, 7vw, 72px);
    }

    /* Títulos de seção */
    .section-title {
      font-size: clamp(28px, 5vw, 42px);
      margin-bottom: 16px;
      text-align: center;
    }

    .section-sub {
      text-align: center;
      font-size: 17px;
      margin-bottom: 32px;
      color: #222222;
      max-width: 580px;
      margin-left: auto;
      margin-right: auto;
    }

    /* Faixa de Topo */
    .top-banner {
      background-color: #000000;
      color: #ffffff;
      text-align: center;
      padding: 12px 16px;
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 0.02em;
      border-bottom: 3px solid var(--amarelo);
    }

    /* Grid de Truques */
    .tricks-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    @media (min-width: 540px) {
      .tricks-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .trick-card {
      background: #ffffff;
      border: var(--borda);
      box-shadow: 4px 4px 0 #000;
      border-radius: 10px;
      padding: 16px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .trick-icon {
      font-size: 26px;
      line-height: 1;
      background: var(--amarelo-claro);
      border: 2px solid #000;
      border-radius: 8px;
      padding: 6px;
      flex-shrink: 0;
    }

    .trick-title {
      font-size: 18px;
      font-family: 'Archivo Black', sans-serif;
      margin-bottom: 4px;
    }

    .trick-desc {
      font-size: 14px;
      line-height: 1.35;
      color: #333333;
    }

    /* 3 Passos Numerados */
    .steps-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .step-item {
      display: flex;
      align-items: center;
      gap: 20px;
      background: #ffffff;
      border: var(--borda);
      box-shadow: var(--sombra);
      border-radius: var(--radius);
      padding: 20px;
    }

    .step-number {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--amarelo);
      border: 4px solid #000;
      font-family: 'Archivo Black', sans-serif;
      font-size: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 3px 3px 0 #000;
    }

    .step-text {
      font-size: 18px;
      font-weight: 800;
    }

    /* Comparação Para Quem É / Não É */
    .compare-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    @media (min-width: 640px) {
      .compare-container {
        grid-template-columns: 1fr 1fr;
      }
    }

    .compare-box {
      border: var(--borda);
      box-shadow: var(--sombra);
      border-radius: var(--radius);
      padding: 24px;
    }

    .compare-is {
      background: #F0FDF4; /* Verde suave */
    }

    .compare-not {
      background: #FEF2F2; /* Vermelho suave */
    }

    .compare-title {
      font-size: 20px;
      font-family: 'Archivo Black', sans-serif;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .compare-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .compare-list li {
      font-size: 16px;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      line-height: 1.35;
    }

    /* Preço e Oferta */
    .price-strike {
      color: var(--vermelho);
      text-decoration: line-through;
      font-size: 20px;
      font-weight: 800;
    }

    .price-big {
      font-family: 'Archivo Black', sans-serif;
      font-size: clamp(48px, 9vw, 68px);
      line-height: 1;
      margin: 8px 0 16px 0;
    }

    .badge-rotative {
      position: absolute;
      top: -16px;
      right: 16px;
      background: var(--amarelo);
      color: #000000;
      border: 3px solid #000000;
      border-radius: 8px;
      padding: 6px 14px;
      font-family: 'Archivo Black', sans-serif;
      font-size: 14px;
      box-shadow: 3px 3px 0 #000000;
      transform: rotate(3deg);
    }

    /* Dor e Solução */
    .dor-solucao-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      align-items: stretch;
    }
    @media (max-width: 640px) {
      .dor-solucao-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }

    /* Accordion FAQ */
    .faq-item {
      background: #ffffff;
      border: var(--borda);
      box-shadow: var(--sombra);
      border-radius: var(--radius);
      margin-bottom: 14px;
      overflow: hidden;
    }

    .faq-btn {
      width: 100%;
      min-height: 56px;
      padding: 16px 20px;
      background: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;
      font-size: 17px;
      font-weight: 800;
      text-align: left;
      color: #000000;
    }

    .faq-icon {
      width: 32px;
      height: 32px;
      border: 2px solid #000000;
      background: var(--amarelo);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Archivo Black', sans-serif;
      font-size: 20px;
      flex-shrink: 0;
      box-shadow: 2px 2px 0 #000;
      transition: transform 0.2s ease;
    }

    .faq-content {
      display: none;
      padding: 0 20px 20px 20px;
      font-size: 16px;
      line-height: 1.5;
      color: #333333;
      border-top: 2px dashed #000000;
      margin-top: 4px;
      padding-top: 14px;
    }

    .faq-item.active .faq-content {
      display: block;
    }

    .faq-item.active .faq-icon {
      background: #000000;
      color: #ffffff;
    }

    /* Barra Fixa Mobile */
    .sticky-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #ffffff;
      border-top: 4px solid #000000;
      padding: 12px 16px;
      padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px));
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      z-index: 900;
      box-shadow: 0 -4px 10px rgba(0,0,0,0.15);
      transform: translateY(150%);
      transition: transform 0.25s ease-in-out;
    }

    .sticky-bar.visible {
      transform: translateY(0);
    }

    .sticky-info {
      display: flex;
      flex-direction: column;
    }

    .sticky-label {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      color: #555;
    }

    .sticky-price {
      font-family: 'Archivo Black', sans-serif;
      font-size: 18px;
    }

    .sticky-btn {
      width: auto;
      min-height: 48px;
      padding: 10px 20px;
      font-size: 16px;
      flex-shrink: 0;
    }

    /* POP-UP MODAL (DOWNSELL/UPSELL) */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100dvh;
      background: rgba(0, 0, 0, 0.85);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 16px;
    }

    .modal-overlay.active {
      display: flex;
    }

    .modal-box {
      background: #ffffff;
      border: var(--borda-grossa);
      box-shadow: var(--sombra-grande);
      border-radius: var(--radius);
      width: 100%;
      max-width: 520px;
      max-height: 90dvh;
      overflow-y: auto;
      position: relative;
    }

    .modal-banner {
      background: var(--amarelo);
      border-bottom: 4px solid #000000;
      padding: 12px 16px;
      font-family: 'Archivo Black', sans-serif;
      font-size: 15px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .modal-close-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 48px;
      height: 48px;
      background: #ffffff;
      border: 3px solid #000000;
      border-radius: 8px;
      font-family: 'Archivo Black', sans-serif;
      font-size: 22px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 2px 2px 0 #000;
      z-index: 10;
    }

    .modal-body {
      padding: 24px;
      text-align: center;
    }

    .modal-title {
      font-size: clamp(22px, 4.5vw, 28px);
      margin-bottom: 12px;
    }

    .modal-sub {
      font-size: 16px;
      line-height: 1.4;
      color: #333333;
      margin-bottom: 16px;
    }

    .modal-checks {
      text-align: left;
      background: var(--amarelo-claro);
      border: 3px solid #000000;
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 15px;
      font-weight: 700;
    }

    .modal-secondary-link {
      display: inline-block;
      margin-top: 16px;
      font-size: 15px;
      font-weight: 800;
      color: #333333;
      text-decoration: underline;
      cursor: pointer;
      padding: 8px;
    }

    /* Animações Pet & Cachorrinho */
    @keyframes wag-tail {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(20deg); }
    }
    @keyframes ear-left {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(-6deg); }
    }
    @keyframes ear-right {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(6deg); }
    }
    @keyframes dog-blink {
      0%, 92%, 100% { transform: scaleY(1); }
      95% { transform: scaleY(0.1); }
    }
    @keyframes tongue {
      0%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(1.22); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(10px) rotate(6deg); }
    }
    @keyframes float-medium {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-9px) rotate(-8deg); }
    }
    .animate-wag-tail { animation: wag-tail 0.8s infinite ease-in-out; }
    .animate-ear-left { animation: ear-left 2.6s infinite ease-in-out; }
    .animate-ear-right { animation: ear-right 2.6s infinite ease-in-out 0.25s; }
    .animate-dog-blink { animation: dog-blink 3.8s infinite; transform-origin: center; }
    .animate-tongue { animation: tongue 1.6s infinite ease-in-out; transform-origin: top center; }
    .animate-float-slow { animation: float-slow 4.2s infinite ease-in-out; }
    @keyframes gentle-sway {
      0%, 100% {
        transform: translateY(0px) rotate(-2.5deg);
      }
      50% {
        transform: translateY(-8px) rotate(2.5deg);
      }
    }
    .animate-gentle-sway {
      animation: gentle-sway 4s ease-in-out infinite;
      transform-origin: center bottom;
      will-change: transform;
    }

    /* ========================================================
       MINI SEÇÃO DE SUBHEADLINE — ESTILOS & ANIMAÇÕES
       ======================================================== */
    .subhead-section {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: clamp(24px, 6vw, 56px) auto;
      padding: 0 16px;
      box-sizing: border-box;
      user-select: none;
    }
    .subhead-card {
      width: 100%;
      background: #ffffff;
      border: 4px solid #000000;
      border-radius: 14px;
      box-shadow: 5px 5px 0 #000000;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
    }
    .subhead-card.subhead-revealed {
      opacity: 1;
      transform: translateY(0);
    }
    @media (hover: hover) and (min-width: 1024px) {
      .subhead-card:hover {
        transform: translateY(-4px);
        box-shadow: 5px 9px 0 #000000;
      }
    }
    /* PONTOS DE QUEBRA: CELULAR (até 599px) */
    @media (max-width: 599px) {
      .subhead-card {
        max-width: 100%;
        padding: 28px 20px;
      }
      .subhead-line-1 {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(18px, 5vw, 22px);
        font-weight: 700;
        line-height: 1.25;
        margin-bottom: 12px;
      }
      .subhead-line-2 {
        font-family: 'Archivo Black', sans-serif;
        font-size: clamp(26px, 8vw, 34px);
        font-weight: 900;
        line-height: 1.2;
      }
      .subhead-badge {
        width: 48px;
        height: 48px;
      }
      .subhead-badge-hide-mobile {
        display: none !important;
      }
    }
    /* PONTOS DE QUEBRA: TABLET (600px a 1023px) */
    @media (min-width: 600px) and (max-width: 1023px) {
      .subhead-card {
        max-width: 640px;
        padding: 36px 32px;
      }
      .subhead-line-1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 1.25;
        margin-bottom: 14px;
      }
      .subhead-line-2 {
        font-family: 'Archivo Black', sans-serif;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.2;
      }
      .subhead-badge {
        width: 60px;
        height: 60px;
      }
    }
    /* PONTOS DE QUEBRA: COMPUTADOR (1024px ou mais) */
    @media (min-width: 1024px) {
      .subhead-card {
        max-width: 800px;
        padding: 44px 48px;
      }
      .subhead-line-1 {
        font-family: 'Poppins', sans-serif;
        font-size: 28px;
        font-weight: 700;
        line-height: 1.25;
        margin-bottom: 16px;
      }
      .subhead-line-2 {
        font-family: 'Archivo Black', sans-serif;
        font-size: 48px;
        font-weight: 900;
        line-height: 1.2;
      }
      .subhead-badge {
        width: 72px;
        height: 72px;
      }
    }
    /* Ícones dentro dos badges amarelos */
    .subhead-badge {
      position: absolute;
      background: var(--amarelo);
      border: 3px solid #000;
      box-shadow: 2px 2px 0 #000;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 20;
      pointer-events: none;
    }
    .subhead-badge.round { border-radius: 50%; }
    .subhead-badge.square { border-radius: 12px; }

    /* Posições dos badges */
    .subhead-pos-tl { top: 12px; left: 12px; transform: rotate(-12deg); }
    .subhead-pos-tr { top: 12px; right: 12px; transform: rotate(12deg); }
    .subhead-pos-bl { bottom: 18px; left: 12px; transform: rotate(-6deg); }
    .subhead-pos-br { bottom: 18px; right: 12px; transform: rotate(12deg); }
    .subhead-pos-ml { top: 50%; left: 14px; transform: translateY(-50%) rotate(8deg); }
    .subhead-pos-mr { top: 50%; right: 14px; transform: translateY(-50%) rotate(-8deg); }

    /* Animações de entrada escalonada dos badges */
    .subhead-card.subhead-revealed .subhead-badge {
      animation: subhead-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    }
    .subhead-card.subhead-revealed .b-1 { animation-delay: 0.1s; }
    .subhead-card.subhead-revealed .b-2 { animation-delay: 0.2s; }
    .subhead-card.subhead-revealed .b-3 { animation-delay: 0.3s; }
    .subhead-card.subhead-revealed .b-4 { animation-delay: 0.4s; }
    .subhead-card.subhead-revealed .b-5 { animation-delay: 0.5s; }
    .subhead-card.subhead-revealed .b-6 { animation-delay: 0.6s; }

    @keyframes subhead-pop {
      0% { opacity: 0; transform: scale(0.3); }
      100% { opacity: 1; }
    }
    .subhead-tracks {
      position: absolute;
      bottom: 6px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      gap: 16px;
      opacity: 0.2;
      pointer-events: none;
      z-index: 1;
    /* Animações de carrossel infinito de relatos */
    @keyframes marquee-left {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }
    @keyframes marquee-right {
      0% { transform: translate3d(-50%, 0, 0); }
      100% { transform: translate3d(0, 0, 0); }
    }
    .animate-marquee-left {
      display: flex;
      width: max-content;
      animation: marquee-left 42s linear infinite;
      will-change: transform;
    }
    .animate-marquee-right {
      display: flex;
      width: max-content;
      animation: marquee-right 42s linear infinite;
      will-change: transform;
    }
    .animate-marquee-left,
    .animate-marquee-right {
      pointer-events: none;
      user-select: none;
      -webkit-user-select: none;
    }

    /* Acessibilidade e animações reduzidas */
    @media (prefers-reduced-motion: reduce) {
      .pulse, .btn, .sticky-bar, .animate-wag-tail, .animate-ear-left, .animate-ear-right, .animate-dog-blink, .animate-tongue, .animate-float-slow, .animate-float-medium, .animate-gentle-sway, .subhead-card, .subhead-badge {
        animation: none !important;
        transition: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
      html {
        scroll-behavior: auto;
      }
    }
  </style>
</head>
<body>
  <!-- Meta Pixel noscript fallback -->
  <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=1134795859236597&ev=PageView&noscript=1"
    alt=""
  /></noscript>

  <main class="container">

    <!-- ========================================================
         1. HERO SECTION (CAPTURA DE ATENÇÃO)
         ======================================================== -->
    <section id="hero" style="padding-top: 36px; padding-bottom: 40px; text-align: center;">
      <!-- IMAGEM EM DESTAQUE ACIMA DA HEADLINE -->
      <div style="display: flex; justify-content: center; margin-bottom: 20px; padding: 0 12px;">
        <img
          src="https://i.imgur.com/fcsUzp7.png"
          alt="Truques para cachorro"
          class="animate-gentle-sway"
          style="width: 100%; max-width: 300px; aspect-ratio: 1/1; object-fit: contain; height: auto; border: 3px solid #000; border-radius: 16px; box-shadow: 5px 5px 0 #000; display: block; cursor: pointer; transition: transform 0.3s ease; user-select: none;"
          loading="eager"
        />
      </div>

      <h1 style="font-size: clamp(20px, 4.5vw, 28px); margin-top: 4px; margin-bottom: 14px; line-height: 1.25; max-width: 640px; margin-left: auto; margin-right: auto; padding: 0 8px; text-wrap: balance;">
        Já pensou em ensinar seu parceiro a 
        <mark class="highlight" style="display: inline-block; padding: 2px 8px; border-radius: 8px; vertical-align: baseline; margin: 2px 0;">
          sentar, dar a pata e rolar
        </mark> 
        de maneira divertida?
      </h1>

      <!-- TEXTO DE APOIO ACIMA DO CELULAR -->
      <div style="text-align: center; margin-top: 4px; margin-bottom: 12px; padding: 0 12px;">
        <h3 style="font-family: 'Archivo Black', sans-serif; font-size: clamp(16px, 4vw, 19px); color: #000; margin-bottom: 0; display: flex; align-items: center; justify-content: center; gap: 6px; flex-wrap: wrap; line-height: 1.25;">
          <span>Assista o vídeo e veja como</span>
          <svg style="width: 18px; height: 18px; display: inline-block; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </h3>
      </div>

      <!-- ========================================================
           MOLDURA DO CELULAR (PROPORÇÃO 9:16 PERFEITA)
           ======================================================== -->
      <div style="width: 100%; display: flex; justify-content: center; margin-bottom: 16px; padding: 0 10px;">
        <div style="position: relative; width: 100%; max-width: clamp(260px, 80vw, 340px); aspect-ratio: 9/16; user-select: none;">
          <!-- Botões Laterais Físicos -->
          <div style="position: absolute; left: -3.5px; top: 18%; width: 4px; height: 26px; background: #2c2c2e; border-radius: 2px 0 0 2px;"></div>
          <div style="position: absolute; left: -3.5px; top: 26%; width: 4px; height: 46px; background: #2c2c2e; border-radius: 2px 0 0 2px;"></div>
          <div style="position: absolute; left: -3.5px; top: 35%; width: 4px; height: 46px; background: #2c2c2e; border-radius: 2px 0 0 2px;"></div>
          <div style="position: absolute; right: -3.5px; top: 28%; width: 4px; height: 64px; background: #2c2c2e; border-radius: 0 2px 2px 0;"></div>

          <!-- Chassi Grafite com Brilho Metálico e Cantos 38px -->
          <div style="position: relative; width: 100%; height: 100%; background: #1b1b1e; border-radius: 38px; padding: 8px; box-shadow: 0 22px 45px -12px rgba(0,0,0,0.6), 0 10px 20px -8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.12), 0 0 0 4px #09090b; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden;">
            
            <!-- Tela Interna com Vídeo Real 9:16, Capa Inicial e Botão YouTube -->
            <div id="phone-screen" style="position: relative; width: 100%; height: 100%; background: #000000; border-radius: 30px; overflow: hidden; display: flex; align-items: center; justify-content: center; cursor: pointer;">
              <video
                id="hero-main-video"
                src="https://i.imgur.com/L5uhYXn.mp4"
                poster="https://i.imgur.com/L5uhYXn.jpg"
                playsinline
                preload="metadata"
                style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 9/16; display: block;"
              ></video>

              <!-- Botão YouTube Play -->
              <div id="youtube-play-btn" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.25); z-index: 20;">
                <button type="button" aria-label="Reproduzir vídeo" style="width: 70px; height: 48px; border-radius: 14px; background: #FF0000; border: none; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(0,0,0,0.6); cursor: pointer;">
                  <svg style="width: 24px; height: 24px; fill: #ffffff; transform: translateX(2px);" viewBox="0 0 24 24">
                    <polygon points="6,4 20,12 6,20" fill="#ffffff" />
                  </svg>
                </button>
              </div>

              <!-- Barra de Progresso do Vídeo -->
              <div style="position: absolute; bottom: 12px; left: 14px; right: 14px; z-index: 30;">
                <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.3); border-radius: 9999px; overflow: hidden;">
                  <div id="video-progress-fill" style="width: 0%; height: 100%; background: #FF0000; border-radius: 9999px; transition: width 0.1s linear;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ====================================================================
           MINI SEÇÃO DE SUBHEADLINE (ORGANIZADA E COMPACTA)
           ==================================================================== -->
      <div class="subhead-section" style="margin: 12px auto 24px auto;">
        <div id="subhead-card-el" class="subhead-card" style="padding: 16px 14px; text-align: center; border: none; box-shadow: none;">
          <!-- LINHA 1 (POPPINS 700) -->
          <p class="subhead-line-1" style="color: #000; letter-spacing: -0.01em; margin-bottom: 8px; line-height: 1.3; font-size: clamp(16px, 3.8vw, 22px);">
            Um jeito simples de fortalecer a 
            <span style="background: var(--amarelo); color: #000; padding: 2px 8px; border: 2px solid #000; border-radius: 6px; display: inline-block; box-shadow: 2px 2px 0 #000; transform: rotate(-1deg); vertical-align: baseline;">
              conexão
            </span> 
            com seu pet
          </p>

          <!-- LINHA 2 (ARCHIVO BLACK) -->
          <p class="subhead-line-2" style="color: #000; letter-spacing: -0.02em; margin: 0; line-height: 1.2; font-size: clamp(21px, 5.5vw, 36px);">
            Ensine ele 
            <span style="background: var(--amarelo); color: #000; padding: 2px 10px; border: 2px solid #000; border-radius: 8px; display: inline-block; box-shadow: 2.5px 2.5px 0 #000; transform: rotate(1deg); vertical-align: baseline;">
              truques divertidos
            </span>!
          </p>
        </div>
      </div>
    </section>



    <!-- ========================================================
         2. DIFICULDADE E SOLUÇÃO
         ======================================================== -->
    <section id="dor-solucao" style="padding-top: 24px; padding-bottom: 48px; max-width: 700px; margin: 0 auto;">
      <!-- TÍTULO -->
      <div style="text-align: center; margin-bottom: 32px; padding: 0 12px;">
        <h2 style="font-size: clamp(26px, 5.5vw, 36px); font-family: 'Archivo Black', sans-serif; line-height: 1.25; color: #000; margin: 0;">
          Dificuldade e Solução
        </h2>
      </div>

      <!-- GRID COM OS DOIS CARDS DO MESMO TAMANHO E SEM BORDAS -->
      <div class="dor-solucao-grid">
        <!-- CARD DA ESQUERDA: A SUA DIFICULDADE -->
        <div style="background: #FFF5F5; border: none; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; text-align: center; min-height: 180px;">
          <h3 style="font-family: 'Archivo Black', sans-serif; font-size: 22px; color: #9F1239; margin: 0 0 10px 0; line-height: 1.25; text-align: center;">
            A sua dificuldade
          </h3>
          <p style="font-size: 15.5px; color: #1f2937; line-height: 1.6; font-weight: 500; margin: 0; text-align: center; max-width: 320px;">
            Frustração e culpa por não conseguir ensinar o seu parceiro a fazer os truques.
          </p>
        </div>

        <!-- CARD DA DIREITA: A NOSSA SOLUÇÃO -->
        <div style="background: #F0FDF4; border: none; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; text-align: center; min-height: 180px;">
          <h3 style="font-family: 'Archivo Black', sans-serif; font-size: 22px; color: #14532D; margin: 0 0 10px 0; line-height: 1.25; text-align: center;">
            A nossa solução
          </h3>
          <p style="font-size: 15.5px; color: #1f2937; line-height: 1.6; font-weight: 500; margin: 0; text-align: center; max-width: 320px;">
            Um material prático, com passo a passo e aulas em vídeo, para o seu pet aprender de forma fácil e divertida, e você se divertir junto com ele em cada aprendizado.
          </p>
        </div>
      </div>
    </section>

    <!-- ========================================================
         3. O QUE VOCÊ VAI APRENDER (CARROSSEL DE VÍDEOS 9:16)
         ======================================================== -->
    <section id="aprendizado">
      <div style="text-align: center; max-width: 620px; margin: 0 auto 24px auto; padding: 0 16px;">
        <span style="display: inline-block; background: var(--amarelo); color: #000; font-family: 'Archivo Black', sans-serif; font-size: 15px; padding: 6px 16px; border: 2px solid #000; border-radius: 9999px; box-shadow: 2px 2px 0 #000; transform: rotate(-1deg); margin-bottom: 12px;">
          VÍDEOS PASSO A PASSO
        </span>
        <h2 class="section-title" style="margin-bottom: 10px;">O que você vai aprender</h2>
        <p class="section-sub" style="margin-bottom: 6px; font-weight: 700; color: #1f2937;">Você vai conseguir ensinar seu pet</p>
        <div style="display: flex; justify-content: center; margin-top: 6px; margin-bottom: 8px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px; color: #000;">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <!-- CARROSSEL CONTAINER -->
      <div style="position: relative; width: 100%; max-width: 760px; margin: 0 auto;">
        <!-- Botão Anterior (Seta Preta) -->
        <button type="button" id="btn-carousel-prev" aria-label="Vídeo anterior" style="position: absolute; left: 6px; top: 50%; transform: translateY(-50%); z-index: 40; width: 48px; height: 48px; border-radius: 50%; background: var(--amarelo); border: 2.5px solid #000; color: #000; display: flex; align-items: center; justify-content: center; box-shadow: 3px 3px 0 #000; cursor: pointer; touch-action: manipulation;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px; color: #000;" aria-hidden="true">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Botão Próximo (Seta Preta) -->
        <button type="button" id="btn-carousel-next" aria-label="Próximo vídeo" style="position: absolute; right: 6px; top: 50%; transform: translateY(-50%); z-index: 40; width: 48px; height: 48px; border-radius: 50%; background: var(--amarelo); border: 2.5px solid #000; color: #000; display: flex; align-items: center; justify-content: center; box-shadow: 3px 3px 0 #000; cursor: pointer; touch-action: manipulation;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px; color: #000;" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Pista do Carrossel (Navegação exclusivamente por setas, sem touch lateral) -->
        <div id="tricks-carousel-track" style="display: flex; gap: 20px; overflow-x: hidden; touch-action: pan-y; scroll-behavior: smooth; padding: 12px 56px 24px 56px; scrollbar-width: none;">
          ${TRICKS_LIST.slice(0, 5).map((trick) => `
            <div style="flex-shrink: 0; width: clamp(230px, 75vw, 280px); display: flex; flex-direction: column; align-items: center; scroll-snap-align: center;">
              <!-- TÍTULO ACIMA DA ABA -->
              <div style="width: 100%; text-align: center; margin-bottom: 10px; padding: 0 8px;">
                <span style="font-family: 'Archivo Black', sans-serif; font-size: 18px; color: #000; line-height: 1.25; min-height: 44px; display: flex; align-items: center; justify-content: center;">
                  ${trick.title}
                </span>
              </div>

              <!-- ABA / LAYOUT DE VÍDEO 9:16 (COM IMAGEM OU PRETO) -->
              <div style="width: 100%; aspect-ratio: 9/16; background: #000000; border-radius: 16px; overflow: hidden; position: relative;">
                ${trick.image ? `
                  <img src="${trick.image}" alt="${trick.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy" />
                ` : ''}
              </div>
            </div>
          `).join('')}

          <!-- CARD FINAL AO LADO DO 5º TRUQUE: DIVERSOS TRUQUES -->
          <div style="flex-shrink: 0; width: clamp(230px, 75vw, 280px); display: flex; flex-direction: column; align-items: center; scroll-snap-align: center;">
            <div style="width: 100%; text-align: center; margin-bottom: 10px; padding: 0 8px;">
              <span style="font-family: 'Archivo Black', sans-serif; font-size: 18px; color: #000; line-height: 1.25; min-height: 44px; display: flex; align-items: center; justify-content: center;">
                Diversos truques
              </span>
            </div>
            <div style="width: 100%; aspect-ratio: 9/16; background: #000000; border-radius: 16px; overflow: hidden; position: relative;">
              <img src="https://i.imgur.com/0jDuTfR.png" alt="Diversos truques" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================
         5. COMO FUNCIONA (3 PASSOS NUMERADOS)
         ======================================================== -->
    <section id="como-funciona">
      <h2 class="section-title">Como funciona na prática?</h2>
      <p class="section-sub">Sem complicação teórica. Tudo direto para você aplicar hoje mesmo.</p>

      <div style="max-width: 620px; margin: 0 auto; background: #F9FAFB; border-radius: 16px; padding: 24px; border: none; box-shadow: none;">
        <div style="display: flex; flex-direction: column;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--amarelo); color: #000; font-family: 'Archivo Black', sans-serif; font-size: 20px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
              1
            </div>
            <p style="font-size: 17px; font-weight: 700; color: #000; margin: 0; line-height: 1.35;">
              Acesso imediato no seu email
            </p>
          </div>

          <div style="width: 2px; height: 24px; background: rgba(0,0,0,0.15); margin-left: 21px; margin-top: 4px; margin-bottom: 4px;"></div>

          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--amarelo); color: #000; font-family: 'Archivo Black', sans-serif; font-size: 20px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
              2
            </div>
            <p style="font-size: 17px; font-weight: 700; color: #000; margin: 0; line-height: 1.35;">
              Siga o passo a passo de cada truque
            </p>
          </div>

          <div style="width: 2px; height: 24px; background: rgba(0,0,0,0.15); margin-left: 21px; margin-top: 4px; margin-bottom: 4px;"></div>

          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--amarelo); color: #000; font-family: 'Archivo Black', sans-serif; font-size: 20px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
              3
            </div>
            <p style="font-size: 17px; font-weight: 700; color: #000; margin: 0; line-height: 1.35;">
              Treine pelo menos 10 minutos por dia e veja ele aprendendo truques fantásticos
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================
         6. DEMONSTRAÇÃO / ÁREA DE MEMBROS (MOLDURA CELULAR 9:16)
         ======================================================== -->
    <section id="demonstracao" style="text-align: center;">
      <h2 class="section-title">Veja como é fácil na prática</h2>
      <p class="section-sub">Conheça a nossa área de membros por dentro: organizada, prática e feita para você aprender no seu ritmo.</p>

      <!-- MOLDURA DO CELULAR (PROPORÇÃO 9:16 COM VÍDEO PERFEITAMENTE ALINHADO) -->
      <div style="width: 100%; display: flex; justify-content: center; margin: 0 auto; padding: 0 10px;">
        <div style="position: relative; width: 100%; max-width: clamp(260px, 80vw, 340px); aspect-ratio: 9/16; user-select: none;">
          <!-- Botões Laterais Físicos -->
          <div style="position: absolute; left: -3.5px; top: 18%; width: 4px; height: 26px; background: #2c2c2e; border-radius: 2px 0 0 2px;"></div>
          <div style="position: absolute; left: -3.5px; top: 26%; width: 4px; height: 46px; background: #2c2c2e; border-radius: 2px 0 0 2px;"></div>
          <div style="position: absolute; left: -3.5px; top: 35%; width: 4px; height: 46px; background: #2c2c2e; border-radius: 2px 0 0 2px;"></div>
          <div style="position: absolute; right: -3.5px; top: 28%; width: 4px; height: 64px; background: #2c2c2e; border-radius: 0 2px 2px 0;"></div>

          <!-- Chassi Grafite com Brilho Metálico e Cantos 38px -->
          <div style="position: relative; width: 100%; height: 100%; background: #1b1b1e; border-radius: 38px; padding: 8px; box-shadow: 0 22px 45px -12px rgba(0,0,0,0.6), 0 10px 20px -8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.12), 0 0 0 4px #09090b; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden;">
            <!-- Notch / Ilha Superior Central -->
            <div style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%); width: 88px; height: 18px; background: #0a0a0c; border-radius: 9999px; z-index: 30; display: flex; align-items: center; justify-content: flex-end; padding-right: 8px; pointer-events: none;">
              <div style="width: 7px; height: 7px; border-radius: 50%; background: #18181b; border: 1px solid #27272a;"></div>
            </div>

            <!-- Tela Interna com Vídeo Real 9:16 Perfeitamente Alinhado -->
            <div id="demo-phone-screen" style="position: relative; width: 100%; height: 100%; background: #000000; border-radius: 30px; overflow: hidden; display: flex; align-items: center; justify-content: center; cursor: pointer;">
              <video
                id="demo-main-video"
                src="https://i.imgur.com/ZlTivfe.mp4"
                poster="https://i.imgur.com/ZlTivfe.jpg"
                playsinline
                preload="metadata"
                style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 9/16; display: block;"
              ></video>

              <!-- Botão YouTube Play -->
              <div id="demo-play-btn" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.25); z-index: 20;">
                <button type="button" aria-label="Reproduzir vídeo" style="width: 70px; height: 48px; border-radius: 14px; background: #FF0000; border: none; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(0,0,0,0.6); cursor: pointer;">
                  <svg style="width: 24px; height: 24px; fill: #ffffff; transform: translateX(2px);" viewBox="0 0 24 24">
                    <polygon points="6,4 20,12 6,20" fill="#ffffff" />
                  </svg>
                </button>
              </div>

              <!-- Barra de Progresso do Vídeo -->
              <div style="position: absolute; bottom: 12px; left: 14px; right: 14px; z-index: 25;">
                <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.3); border-radius: 9999px; overflow: hidden;">
                  <div id="demo-progress-fill" style="width: 0%; height: 100%; background: #FF0000; border-radius: 9999px; transition: width 0.1s linear;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================
         7. PARA QUEM É
         ======================================================== -->
    <section id="para-quem">
      <h2 class="section-title">Este material é para você?</h2>

      <div style="max-width: 580px; margin: 0 auto;">
        <!-- PARA QUEM É -->
        <div class="compare-box compare-is" style="width: 100%;">
          <div class="compare-title" style="color: #166534;">
            <span>✅</span> PARA QUEM É:
          </div>
          <ul class="compare-list">
            <li>✅ <strong>Donos iniciantes:</strong> quem nunca adestrou nenhum animal na vida.</li>
            <li>✅ <strong>Filhotes e cães adultos:</strong> qualquer idade ou raça pode aprender.</li>
            <li>✅ <strong>Quem tem pouco tempo:</strong> 10 minutinhos diários são suficientes.</li>
            <li>✅ <strong>Quem ama seu pet:</strong> quer criar um laço afetivo forte sem violência.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ========================================================
         8. PROVA SOCIAL (CARROSSEL DE RELATOS EM 2:3)
         ======================================================== -->
    <section id="depoimentos" style="text-align: center;">
      <h2 class="section-title">O que dizem os donos</h2>
      <p class="section-sub">Relatos de quem aplicou o passo a passo com seus cães na vida real.</p>

      <div style="position: relative; width: 100%; max-width: 820px; margin: 0 auto;">
        <!-- Botão Anterior (Seta Preta) -->
        <button type="button" id="btn-testimonials-prev" aria-label="Relato anterior" style="position: absolute; left: 2px; top: 50%; transform: translateY(-50%); z-index: 40; width: 44px; height: 44px; border-radius: 50%; background: var(--amarelo); border: 2.5px solid #000; color: #000; display: flex; align-items: center; justify-content: center; box-shadow: 2.5px 2.5px 0 #000; cursor: pointer; touch-action: manipulation;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; color: #000;" aria-hidden="true">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Botão Próximo (Seta Preta) -->
        <button type="button" id="btn-testimonials-next" aria-label="Próximo relato" style="position: absolute; right: 2px; top: 50%; transform: translateY(-50%); z-index: 40; width: 44px; height: 44px; border-radius: 50%; background: var(--amarelo); border: 2.5px solid #000; color: #000; display: flex; align-items: center; justify-content: center; box-shadow: 2.5px 2.5px 0 #000; cursor: pointer; touch-action: manipulation;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; color: #000;" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Pista do Carrossel de Relatos (Proporção nativa de cada imagem: 1024x1536 e 941x1672) -->
        <div id="testimonials-carousel-track" style="display: flex; gap: 14px; overflow-x: hidden; touch-action: pan-y; scroll-behavior: smooth; padding: 10px 24px 20px 24px; scrollbar-width: none; height: clamp(380px, 60vh, 520px); align-items: center;">
          ${[
            { url: 'https://i.imgur.com/qMhpn5r.png', ratio: '1024 / 1536' },
            { url: 'https://i.imgur.com/z7pYJ0J.png', ratio: '1024 / 1536' },
            { url: 'https://i.imgur.com/ZXKwmDn.png', ratio: '1024 / 1536' },
            { url: 'https://i.imgur.com/4w5psQy.png', ratio: '941 / 1672' },
            { url: 'https://i.imgur.com/6bVpdzY.png', ratio: '941 / 1672' },
            { url: 'https://i.imgur.com/qMISRaR.png', ratio: '941 / 1672' },
          ].map((item, idx) => `
            <div style="flex-shrink: 0; height: 100%; aspect-ratio: ${item.ratio}; border-radius: 16px; overflow: hidden; border: 2px solid #000; box-shadow: 4px 4px 0 #000; background: #ffffff;">
              <img src="${item.url}" alt="Relato ${idx + 1}" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="eager" />
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 2. DOIS CARROSSEIS INFINITOS DE RELATOS EM TEXTO GIRANDO EM DIREÇÕES OPOSTAS -->
      <div style="width: 100%; padding: 20px 0; display: flex; flex-direction: column; gap: 16px; overflow: hidden;">
        <!-- FAIXA 1: GIRANDO DA DIREITA PARA A ESQUERDA -->
        <div style="position: relative; width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent); mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);">
          <div class="animate-marquee-left" style="display: flex; gap: 16px; padding: 6px 0;">
            ${[...ROW1_REVIEWS, ...ROW1_REVIEWS].map(item => `
              <div style="width: clamp(270px, 80vw, 320px); flex-shrink: 0; background: #ffffff; border: 2px solid #000; border-radius: 12px; padding: 16px; box-shadow: 3px 3px 0 #000; display: flex; flex-direction: column; text-align: left;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--amarelo); border: 1.5px solid #000; color: #000; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      ${item.name.charAt(0)}
                    </div>
                    <div>
                      <div style="font-weight: 800; font-size: 13px; color: #000; line-height: 1.2;">${item.name}</div>
                      <div style="font-size: 10px; color: #059669; font-weight: 800; display: flex; align-items: center; gap: 2px;">
                        <span>✓</span> Compra Verificada
                      </div>
                    </div>
                  </div>
                  <div style="color: #FFB800; font-size: 13px;">
                    ${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}
                  </div>
                </div>
                <p style="color: #222; font-size: 13px; font-weight: 500; line-height: 1.45; margin: 0;">
                  "${item.text}"
                </p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- FAIXA 2: GIRANDO DA ESQUERDA PARA A DIREITA (SENTIDO OPOSTO) -->
        <div style="position: relative; width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent); mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);">
          <div class="animate-marquee-right" style="display: flex; gap: 16px; padding: 6px 0;">
            ${[...ROW2_REVIEWS, ...ROW2_REVIEWS].map(item => `
              <div style="width: clamp(270px, 80vw, 320px); flex-shrink: 0; background: #ffffff; border: 2px solid #000; border-radius: 12px; padding: 16px; box-shadow: 3px 3px 0 #000; display: flex; flex-direction: column; text-align: left;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: #34d399; border: 1.5px solid #000; color: #000; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      ${item.name.charAt(0)}
                    </div>
                    <div>
                      <div style="font-weight: 800; font-size: 13px; color: #000; line-height: 1.2;">${item.name}</div>
                      <div style="font-size: 10px; color: #059669; font-weight: 800; display: flex; align-items: center; gap: 2px;">
                        <span>✓</span> Compra Verificada
                      </div>
                    </div>
                  </div>
                  <div style="color: #FFB800; font-size: 13px;">
                    ${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}
                  </div>
                </div>
                <p style="color: #222; font-size: 13px; font-weight: 500; line-height: 1.45; margin: 0;">
                  "${item.text}"
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================
         9. BÔNUS ESPECIAIS (PLANO COMPLETO)
         ======================================================== -->
    <section id="bonus">
      <!-- LINK DO INSTAGRAM / AVALIAÇÃO ACIMA DO TÍTULO DE BÔNUS -->
      <div style="max-width: 540px; margin: 0 auto 32px auto; padding: 0 16px;">
        <a
          href="https://www.instagram.com/omanual_do_pet/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir perfil no Instagram @omanual_do_pet e enviar feedback"
          style="display: block; padding: 10px 14px; background: linear-gradient(to right, #fffbeb, #fdf2f8, #faf5ff); border-radius: 16px; border: 2px solid #000; box-shadow: 3px 3px 0 #000; text-decoration: none; color: inherit; cursor: pointer;"
        >
          <div style="display: flex; align-items: center; gap: 10px;">
            <!-- ÍCONE DO INSTAGRAM AJUSTADO -->
            <div style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(45deg, #f09433, #dc2743, #bc1888); display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 2px 2px 0 #000; border: 2px solid #000;">
              <svg style="width: 20px; height: 20px; color: #fff;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>
            <!-- TEXTOS RESUMIDOS E DIRETOS -->
            <div style="text-align: left; flex: 1; min-width: 0;">
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                <span style="font-family: 'Archivo Black', sans-serif; font-size: 13px; color: #000; line-height: 1.2;">
                  @omanual_do_pet
                </span>
                <span style="background: #fce7f3; color: #be185d; border: 1px solid #f472b6; font-size: 9px; font-weight: 800; padding: 1px 6px; border-radius: 9999px; text-transform: uppercase;">
                  Feedback
                </span>
              </div>
              <p style="font-size: 11px; color: #3f3f46; font-weight: 500; line-height: 1.25; margin: 2px 0 0 0;">
                Envie seu feedback no Insta e nos conte o que achou do material!
              </p>
            </div>
            <!-- BOTÃO OTIMIZADO PARA MOBILE -->
            <div style="flex-shrink: 0; display: flex; align-items: center; gap: 4px; background: #e1306c; color: #fff; font-family: 'Archivo Black', sans-serif; font-size: 11px; padding: 6px 10px; border-radius: 10px; border: 2px solid #000; box-shadow: 2px 2px 0 #000;">
              <span>CLIQUE AQUI</span>
              <span style="font-size: 12px;">👆</span>
            </div>
          </div>
        </a>
      </div>

      <h2 class="section-title">Bônus Exclusivos de Lançamento</h2>
      <p class="section-sub">Garantindo sua vaga no <strong>Plano Completo</strong> hoje, você leva estes 3 presentes de graça:</p>

      <div style="max-width: 540px; margin: 0 auto; padding: 0 16px;">
        <!-- TÍTULOS ORGANIZADOS EM CIMA DA IMAGEM -->
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #fff; border: 2px solid #000; border-radius: 12px; box-shadow: 3px 3px 0 #000;">
            <span style="background: #fbbf24; color: #000; font-family: 'Archivo Black', sans-serif; font-size: 11px; padding: 3px 8px; border-radius: 4px; border: 1px solid #000; text-transform: uppercase; letter-spacing: 0.05em; flex-shrink: 0;">BÔNUS #1</span>
            <div>
              <h3 style="font-family: 'Archivo Black', sans-serif; font-size: 14px; color: #000; margin: 0; line-height: 1.2;">Guia de Petiscos Caseiros</h3>
              <p style="font-size: 11px; color: #52525b; margin: 2px 0 0 0; font-weight: 500;">Saudáveis, baratos e irresistíveis</p>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #fff; border: 2px solid #000; border-radius: 12px; box-shadow: 3px 3px 0 #000;">
            <span style="background: #38bdf8; color: #000; font-family: 'Archivo Black', sans-serif; font-size: 11px; padding: 3px 8px; border-radius: 4px; border: 1px solid #000; text-transform: uppercase; letter-spacing: 0.05em; flex-shrink: 0;">BÔNUS #2</span>
            <div>
              <h3 style="font-family: 'Archivo Black', sans-serif; font-size: 14px; color: #000; margin: 0; line-height: 1.2;">Checklist da Rotina de Treino</h3>
              <p style="font-size: 11px; color: #52525b; margin: 2px 0 0 0; font-weight: 500;">Disciplina diária em apenas 10 minutos</p>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #fff; border: 2px solid #000; border-radius: 12px; box-shadow: 3px 3px 0 #000;">
            <span style="background: #34d399; color: #000; font-family: 'Archivo Black', sans-serif; font-size: 11px; padding: 3px 8px; border-radius: 4px; border: 1px solid #000; text-transform: uppercase; letter-spacing: 0.05em; flex-shrink: 0;">BÔNUS #3</span>
            <div>
              <h3 style="font-family: 'Archivo Black', sans-serif; font-size: 14px; color: #000; margin: 0; line-height: 1.2;">Como Parar o Cão de Pular em Visitas</h3>
              <p style="font-size: 11px; color: #52525b; margin: 2px 0 0 0; font-weight: 500;">Técnica simples para visitas tranquilas</p>
            </div>
          </div>
        </div>

        <!-- IMAGEM DOS BÔNUS COM QUALIDADE ORIGINAL -->
        <div style="position: relative; width: 100%; border-radius: 16px; overflow: hidden; border: 2px solid #000; box-shadow: 6px 6px 0 #000; background: #fff;">
          <img
            src="https://i.imgur.com/QZVmSL8.png"
            alt="3 Bônus Incríveis Gratuitos - Guia de Petiscos, Checklist e Como Parar de Pular"
            style="width: 100%; height: auto; display: block;"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- ========================================================
         10. SEÇÃO DE PLANOS (id="planos")
         ======================================================== -->
    <section id="planos">
      <h2 class="section-title" style="margin-bottom: 24px;">O que você prefere receber?</h2>

      <div style="display: flex; flex-direction: column; gap: 32px; max-width: 520px; margin: 0 auto; padding: 0 12px;">
        <!-- CARD 1: ACESSO COMPLETO + BÔNUS (MAIS ESCOLHIDO) -->
        <div style="position: relative; padding: 24px 20px; background: #FFF7CC; border-radius: 16px; border: 3px solid #000; box-shadow: 6px 6px 0 #000; text-align: left;">
          <!-- Selo rotacionado -->
          <div style="position: absolute; top: -14px; right: 16px; background: #FFD400; color: #000; border: 2px solid #000; padding: 4px 12px; border-radius: 6px; font-family: 'Archivo Black', sans-serif; font-size: 12px; letter-spacing: 0.05em; box-shadow: 3px 3px 0 #000; transform: rotate(2deg); z-index: 20;">
            ⭐ MAIS ESCOLHIDO
          </div>

          <div style="margin-bottom: 16px;">
            <span style="display: inline-block; background: #22C55E; color: #000; border: 2px solid #000; font-size: 11px; font-weight: 900; padding: 2px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
              Recomendado
            </span>
            <h3 style="font-family: 'Archivo Black', sans-serif; font-size: 24px; color: #000; line-height: 1.2; text-transform: uppercase; margin: 0 0 6px 0;">
              ACESSO COMPLETO + BÔNUS
            </h3>
            <p style="color: #3f3f46; font-size: 14px; font-weight: 500; margin: 0;">
              Tudo o que você precisa para o seu cão se tornar o orgulho de toda a família.
            </p>
          </div>

          <!-- IMAGEM DO PLANO COMPLETO: BANNER OFICIAL COM TODOS OS 15 TRUQUES + BÔNUS -->
          <div style="position: relative; width: 100%; aspect-ratio: 1 / 1; border-radius: 12px; overflow: hidden; border: 2px solid #000; box-shadow: 4px 4px 0 #000; margin-bottom: 20px; background: #fff;">
            <img
              src="https://i.imgur.com/wOZEwRI.png"
              alt="Plano Completo - Acesso Completo + Bônus por R$ 19,90"
              style="width: 100%; height: 100%; object-fit: cover; display: block; user-select: none;"
              loading="lazy"
            />
          </div>
          <!-- O QUE ESTÁ INCLUSO -->
          <div style="margin-bottom: 24px;">
            <h4 style="font-family: 'Archivo Black', sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #000; margin: 0 0 12px 0;">
              O que está incluso:
            </h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px;">
                <span style="font-size: 16px; line-height: 1;">✅</span>
                <div>
                  <strong style="color: #000; display: block;">Todos os truques básicos</strong>
                  <span style="font-size: 12px; color: #52525b;">(Sentar, Deitar, Dar a Pata, Ficar)</span>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px;">
                <span style="font-size: 16px; line-height: 1;">✅</span>
                <div>
                  <strong style="color: #000; display: block;">Truques avançados</strong>
                  <span style="font-size: 12px; color: #52525b;">(Rolar, Fingir de Morto, Buscar e outros)</span>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px;">
                <span style="font-size: 16px; line-height: 1;">✅</span>
                <div>
                  <strong style="color: #000; display: block;">Todos os 3 Super Bônus</strong>
                  <span style="font-size: 12px; color: #047857; font-weight: 700;">Inclusos gratuitamente</span>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px;">
                <span style="font-size: 16px; line-height: 1;">✅</span>
                <div>
                  <strong style="color: #000; display: block;">Acesso vitalício</strong>
                  <span style="font-size: 12px; color: #52525b;">Para sempre</span>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px;">
                <span style="font-size: 16px; line-height: 1;">✅</span>
                <div>
                  <strong style="color: #000; display: block;">Atualizações e novos truques futuros</strong>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px;">
                <span style="font-size: 16px; line-height: 1;">✅</span>
                <div>
                  <strong style="color: #000; display: block;">Suporte por e-mail</strong>
                  <span style="font-size: 12px; color: #52525b;">Para tirar dúvidas</span>
                </div>
              </div>
            </div>
          </div>

          <button type="button" class="btn btn-green pulse" id="btn-comprar-completo" style="width: 100%; font-size: 18px; padding: 16px 20px;">
            QUERO O PLANO COMPLETO
          </button>
        </div>

        <!-- CARD 2: PLANO BÁSICO -->
        <div style="position: relative; padding: 24px 20px; background: #FFFFFF; border-radius: 16px; border: 3px solid #000; box-shadow: 6px 6px 0 #000; text-align: left;">
          <!-- IMAGEM DO PLANO BÁSICO ACIMA DO TEXTO -->
          <div style="position: relative; width: 100%; aspect-ratio: 1 / 1; border-radius: 12px; overflow: hidden; border: 2px solid #000; box-shadow: 4px 4px 0 #000; margin-bottom: 20px; background: #fff;">
            <img
              src="https://i.imgur.com/Ru5fh6G.png"
              alt="Plano Básico R$ 9,90"
              style="width: 100%; height: 100%; object-fit: cover; display: block; user-select: none;"
              loading="lazy"
            />
          </div>

          <div style="margin-bottom: 16px;">
            <h3 style="font-family: 'Archivo Black', sans-serif; font-size: 24px; color: #000; line-height: 1.2; text-transform: uppercase; margin: 0 0 6px 0;">
              PLANO BÁSICO
            </h3>
            <p style="color: #3f3f46; font-size: 14px; font-weight: 500; margin: 0;">
              Apenas para quem quer ensinar comandos bem simples do dia a dia.
            </p>
          </div>

          <!-- O QUE ESTÁ INCLUSO -->
          <div style="margin-bottom: 20px;">
            <h4 style="font-family: 'Archivo Black', sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #000; margin: 0 0 12px 0;">
              O que está incluso:
            </h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px;">
                <span style="font-size: 16px; line-height: 1;">✅</span>
                <div>
                  <strong style="color: #000;">Truques básicos:</strong>
                  <span style="color: #52525b;"> (Sentar, Deitar, Ficar)</span>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: #71717a;">
                <span style="font-size: 16px; line-height: 1;">❌</span>
                <div>
                  Truques avançados: <span style="color: #a1a1aa;">(Rolar, Fingir de Morto)</span>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: #71717a;">
                <span style="font-size: 16px; line-height: 1;">❌</span>
                <div>
                  Bônus exclusivos: <span style="color: #a1a1aa;">(Petiscos e rotinas)</span>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: #71717a;">
                <span style="font-size: 16px; line-height: 1;">❌</span>
                <div>
                  Atualizações futuras
                </div>
              </div>
            </div>
          </div>

          <!-- PREÇO -->
          <div style="background: #f4f4f5; border: 2px solid #000; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center; box-shadow: 3px 3px 0 #000;">
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; color: #71717a; display: block; margin-bottom: 2px;">
              Preço
            </span>
            <div style="display: flex; align-items: center; justify-content: center;">
              <span style="font-family: 'Archivo Black', sans-serif; font-size: 32px; color: #000; line-height: 1;">
                R$ 9,90
              </span>
            </div>
            <p style="font-size: 11px; color: #52525b; font-weight: 600; margin: 6px 0 0 0;">
              Pagamento único • Sem mensalidades
            </p>
          </div>

          <!-- BOTÃO BÁSICO: ACIONA O POP-UP DE DOWNSELL -->
          <button type="button" class="btn btn-white" id="btn-comprar-basico" style="width: 100%; font-size: 18px; padding: 16px 20px;">
            QUERO SÓ O BÁSICO
          </button>
        </div>
      </div>
    </section>

    <!-- ========================================================
         11. GARANTIA BLINDADA DE 7 DIAS (APENAS IMAGEM)
         ======================================================== -->
    <section id="garantia" style="padding: 32px 16px; display: flex; justify-content: center; align-items: center;">
      <div style="width: 100%; max-width: 440px; display: flex; justify-content: center; align-items: center;">
        <img
          src="https://i.imgur.com/xVCneOY.png"
          alt="Garantia Incondicional de 7 Dias"
          style="width: 100%; max-width: 380px; aspect-ratio: 1/1; object-fit: contain; display: block; user-select: none;"
          loading="lazy"
        />
      </div>
    </section>

    <!-- ========================================================
         12. FAQ (PERGUNTAS FREQUENTES EM ACORDEÃO)
         ======================================================== -->
    <section id="faq">
      <h2 class="section-title">Perguntas Frequentes</h2>
      <p class="section-sub">Tire suas dúvidas antes de começar.</p>

      <div class="faq-item">
        <button class="faq-btn" type="button" aria-expanded="false">
          <span>Preciso de algum equipamento caro?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-content">
          Não! Você só precisa do seu cachorro, da comida/ração habitual dele ou petiscos simples que você tem em casa (como pedacinhos de frango cozido ou cenoura) e 10 minutinhos do seu dia.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-btn" type="button" aria-expanded="false">
          <span>Serve para filhote e para cachorro adulto?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-content">
          Sim! O método respeita o ritmo biológico de cada cão. Filhotes a partir de 2 meses já aprendem brincando, e cães adultos adoram os treinos porque quebram o tédio.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-btn" type="button" aria-expanded="false">
          <span>Como recebo o material?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-content">
          Acesso imediato! Assim que o seu pagamento for aprovado (Pix é na mesma hora), você recebe os dados de acesso diretamente no seu e-mail para abrir no celular, tablet ou computador.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-btn" type="button" aria-expanded="false">
          <span>E se meu cachorro for muito teimoso?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-content">
          Cães 'teimosos' na verdade só não entenderam o que você espera deles. O método divide cada truque em micropassos fáceis para que ele acerte de primeira e fique animado para continuar.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-btn" type="button" aria-expanded="false">
          <span>Quanto tempo por dia preciso treinar?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-content">
          Apenas 10 minutos por dia! Sessões curtas com reforço positivo são muito mais eficientes do que treinos longos e exaustivos.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-btn" type="button" aria-expanded="false">
          <span>Como funciona a garantia de devolução?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-content">
          Você tem 7 dias corridos para experimentar. Se por qualquer motivo não gostar, basta mandar uma mensagem para o nosso e-mail de suporte e reembolsamos todo o valor.
        </div>
      </div>
    </section>

    <!-- ========================================================
         13. RODAPÉ INSTITUCIONAL
         ======================================================== -->
    <footer style="border-top: 3px solid #000; padding: 32px 0 20px 0; text-align: center; font-size: 14px; color: #444;">
      <p style="font-weight: 800; color: #000; margin-bottom: 10px;">
        © ${config.anoRodape} ${config.nomeProduto}. Todos os direitos reservados.
      </p>
      <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 12px; font-weight: 700;">
        <a href="#termos" onclick="alert('Página de Termos de Uso em conformidade com as diretrizes do consumidor.'); return false;" style="color: #000; text-decoration: underline;">Termos de Uso</a>
        <span>•</span>
        <a href="#privacidade" onclick="alert('Página de Política de Privacidade em conformidade com a LGPD.'); return false;" style="color: #000; text-decoration: underline;">Política de Privacidade</a>
      </div>
      <p style="font-size: 13px; color: #666;">
        Dúvidas ou suporte: <strong>${config.emailSuporte}</strong>
      </p>
    </footer>

  </main>

  <!-- ========================================================
       1. MINI CARD MODAL: PLANO BÁSICO (R$ 9,90 + UPGRADE R$ 19,90)
       ======================================================== -->
  <div class="modal-overlay" id="modal-mini-basico" role="dialog" aria-modal="true" aria-labelledby="modal-basico-title" tabindex="-1">
    <div class="modal-box" style="max-width: 480px;">
      <button class="modal-close-btn" id="close-mini-basico" aria-label="Fechar pop-up">&times;</button>
      
      <div class="modal-banner" style="background: #FFD400; color: #000; text-align: center; padding: 12px 18px;">
        <span style="font-size: 11px; font-weight: 900; background: #000; color: #FFD400; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; margin: 0 auto 4px auto; display: inline-block;">Você Selecionou</span>
        <h3 id="modal-basico-title" style="font-family: 'Archivo Black', sans-serif; font-size: 20px; color: #000; margin: 0; line-height: 1.2; text-align: center;">
          PLANO BÁSICO • R$ 9,90
        </h3>
      </div>

      <div class="modal-body" style="padding: 20px; text-align: center;">
        <!-- BOTÃO DE PAGAMENTO DO BÁSICO -->
        <a href="${config.linkBasico}" target="_blank" rel="noopener noreferrer" class="btn" style="width: 100%; background: #18181b; color: #fff; font-size: 17px; margin-bottom: 20px; text-align: center; justify-content: center;">
          FAZER PAGAMENTO (R$ 9,90) &rarr;
        </a>

        <!-- CARD DE APROVEITAR O PLANO COMPLETO (ABA SELECIONADA: IMAGEM DO PLANO COMPLETO + BOTÃO ABAIXO) -->
        <div style="background: #FFF7CC; border: 3px solid #000; border-radius: 12px; padding: 14px; box-shadow: 4px 4px 0 #000; text-align: center;">
          <div style="display: inline-block; background: #22C55E; color: #000; border: 2px solid #000; font-size: 11px; font-weight: 900; padding: 2px 10px; border-radius: 9999px; text-transform: uppercase; margin: 0 auto 10px auto;">
            ✨ OPORTUNIDADE: PLANO COMPLETO POR R$ 19,90
          </div>

          <!-- IMAGEM DO PLANO COMPLETO -->
          <div style="width: 100%; border-radius: 10px; overflow: hidden; border: 2px solid #000; box-shadow: 3px 3px 0 #000; background: #fff; margin-bottom: 12px;">
            <img
              src="https://i.imgur.com/wOZEwRI.png"
              onerror="this.onerror=null;this.src='images/popup_oferta_1990.png';"
              alt="Plano Completo por R$ 19,90"
              style="width: 100%; height: auto; display: block;"
            />
          </div>

          <!-- BOTÃO ABAIXO DA IMAGEM -->
          <a href="${config.linkCompleto}" target="_blank" rel="noopener noreferrer" class="btn btn-green pulse" style="width: 100%; font-size: 16px; padding: 14px 16px; text-align: center; justify-content: center;">
            QUERO O PLANO COMPLETO (R$ 19,90) &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- ========================================================
       2. MINI CARD MODAL: PLANO COMPLETO (R$ 19,90)
       ======================================================== -->
  <div class="modal-overlay" id="modal-mini-completo" role="dialog" aria-modal="true" aria-labelledby="modal-completo-title" tabindex="-1">
    <div class="modal-box" style="max-width: 480px;">
      <button class="modal-close-btn" id="close-mini-completo" aria-label="Fechar pop-up">&times;</button>
      
      <div class="modal-banner" style="background: #22C55E; color: #000; text-align: center; padding: 12px 18px;">
        <span style="font-size: 11px; font-weight: 900; background: #000; color: #22C55E; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; margin: 0 auto 4px auto; display: inline-block;">⭐ Mais Escolhido</span>
        <h3 id="modal-completo-title" style="font-family: 'Archivo Black', sans-serif; font-size: 20px; color: #000; margin: 0; line-height: 1.2; text-align: center;">
          ACESSO COMPLETO + BÔNUS
        </h3>
      </div>

      <div class="modal-body" style="padding: 20px; text-align: center;">
        <div style="background: #FFF7CC; border: 2px solid #000; border-radius: 12px; padding: 14px; margin-bottom: 16px; box-shadow: 3px 3px 0 #000; text-align: center;">
          <p style="font-size: 11px; font-weight: 700; color: #52525b; text-transform: uppercase; margin: 0 0 2px 0; text-align: center;">Valor Promocional</p>
          <div style="display: flex; align-items: baseline; justify-content: center; gap: 8px;">
            <span style="font-size: 14px; color: #a1a1aa; text-decoration: line-through; font-weight: 700;">De R$ 47,90</span>
            <span style="font-family: 'Archivo Black', sans-serif; font-size: 30px; color: #15803d; line-height: 1;">R$ 19,90</span>
            <span style="font-size: 12px; color: #52525b; font-weight: 600;">(Pagamento único)</span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; font-weight: 700; color: #18181b; margin-bottom: 20px; text-align: center; align-items: center;">
          <div>✅ Todos os Truques Básicos e Avançados</div>
          <div>✅ Os 3 Super Bônus Exclusivos de Lançamento</div>
          <div>✅ Acesso Vitalício Para Sempre</div>
          <div>✅ Suporte por e-mail e atualizações futuras</div>
        </div>

        <a href="${config.linkCompleto}" target="_blank" rel="noopener noreferrer" class="btn btn-green pulse" style="width: 100%; font-size: 18px; padding: 16px 20px; text-align: center; justify-content: center;">
          FAZER PAGAMENTO (R$ 19,90) &rarr;
        </a>
      </div>
    </div>
  </div>

  <!-- ========================================================
       3. POP-UP DE LEVAR TUDO POR 14,90 (AO CLICAR NO 'X')
       ======================================================== -->
  <div class="modal-overlay" id="modal-downsell-1990" role="dialog" aria-modal="true" aria-label="Oferta Especial R$ 14,90" tabindex="-1">
    <div class="modal-box" style="max-width: 460px; padding: 18px 16px; text-align: center;">
      <button class="modal-close-btn" id="close-downsell-1990" aria-label="Fechar pop-up">&times;</button>

      <!-- IMAGEM DA OFERTA (R$ 14,90) -->
      <div style="width: 100%; border-radius: 12px; overflow: hidden; border: 3px solid #000; box-shadow: 4px 4px 0 #000; background: #fff; margin: 4px 0 16px 0;">
        <img
          src="https://i.imgur.com/1rcFHEj.png"
          onerror="this.onerror=null;this.src='images/popup_oferta_1490.png';"
          alt="Oferta Especial - Tudo por R$ 14,90"
          style="width: 100%; height: auto; display: block;"
        />
      </div>

      <!-- APENAS O BOTÃO DE ADQUIRIR E IR PARA O CHECKOUT -->
      <a href="${config.linkPopUp1490 || config.linkPopUp1990}" target="_blank" rel="noopener noreferrer" class="btn btn-green pulse" style="width: 100%; font-size: 17px; padding: 16px 18px; text-align: center; justify-content: center;">
        ADQUIRIR E IR PARA O CHECKOUT &rarr;
      </a>
    </div>
  </div>

  <!-- ========================================================
       JAVASCRIPT PURO (ZERO LIBS EXTERNAS)
       ======================================================== -->
  <script>
    // ========================================================
    // CONFIGURAÇÕES DO VÍDEO DE VENDAS (VSL) NA MOLDURA DO CELULAR
    // ========================================================
    const VIDEO_URL = "";         // link de arquivo .mp4 (opcional)
    const EMBED_URL = "";         // link de embed (YouTube, Vimeo, Panda, etc.) (opcional)
    const POSTER_URL = "";        // imagem de capa do vídeo (opcional)
    const AUTOPLAY_MUDO = false;  // se true, o vídeo começa mudo com botão "🔊 TOQUE PARA OUVIR"
    const BOTAO_APARECE_APOS_SEGUNDOS = 0; // se > 0, o botão só aparece após esse tempo de vídeo assistido

    // ========================================================
    // LINKS DE CHECKOUT - EDITE COM SEUS LINKS DE AFILIADO/PRODUTOR
    // ========================================================
    const LINK_BASICO = "${config.linkBasico}";               // checkout do plano básico, R$ 10,00
    const LINK_COMPLETO_14_90 = "${config.linkCompleto1490}"; // checkout do completo com desconto, R$ 14,90 (pop-up)
    const LINK_COMPLETO_19_99 = "${config.linkCompleto1999}"; // checkout do completo, R$ 19,99 (card principal)

    // Elementos DOM
    const phoneClock = document.getElementById('phone-clock');
    const phoneScreen = document.getElementById('phone-screen');
    const videoContainer = document.getElementById('video-container');
    const playOverlay = document.getElementById('play-overlay');
    const endScreen = document.getElementById('end-screen');
    const unmuteBanner = document.getElementById('unmute-banner');
    const btnUnmute = document.getElementById('btn-unmute');
    const containerCtaVideo = document.getElementById('container-cta-video');
    const videoProgressBar = document.getElementById('video-progress-bar');
    const videoProgressFill = document.getElementById('video-progress-fill');

    // 0. RELÓGIO REAL DO VISITANTE (ATUALIZA A CADA MINUTO)
    function updatePhoneClock() {
      if (!phoneClock) return;
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      phoneClock.textContent = h + ':' + m;
    }
    updatePhoneClock();
    setInterval(updatePhoneClock, 30000);

    // INICIALIZAÇÃO DO VÍDEO (VIDEO, EMBED OU PLACEHOLDER)
    let videoEl = null;
    let isVideoPlaying = false;

    if (BOTAO_APARECE_APOS_SEGUNDOS > 0 && containerCtaVideo) {
      containerCtaVideo.style.display = 'none';
    }

    if (VIDEO_URL) {
      const ph = document.getElementById('video-placeholder');
      if (ph) ph.style.display = 'none';

      videoEl = document.createElement('video');
      videoEl.src = VIDEO_URL;
      if (POSTER_URL) videoEl.poster = POSTER_URL;
      videoEl.playsInline = true;
      videoEl.preload = 'metadata';
      videoEl.style.width = '100%';
      videoEl.style.height = '100%';
      videoEl.style.objectFit = 'cover';
      videoContainer.appendChild(videoEl);

      if (videoProgressBar) videoProgressBar.style.display = 'block';

      videoEl.addEventListener('timeupdate', () => {
        if (videoEl.duration > 0 && videoProgressFill) {
          const pct = (videoEl.currentTime / videoEl.duration) * 100;
          videoProgressFill.style.width = pct + '%';
        }
        if (BOTAO_APARECE_APOS_SEGUNDOS > 0 && videoEl.currentTime >= BOTAO_APARECE_APOS_SEGUNDOS) {
          if (containerCtaVideo) containerCtaVideo.style.display = 'block';
        }
      });

      videoEl.addEventListener('ended', () => {
        isVideoPlaying = false;
        if (endScreen) endScreen.style.display = 'flex';
        if (containerCtaVideo) containerCtaVideo.style.display = 'block';
      });

      if (AUTOPLAY_MUDO) {
        videoEl.muted = true;
        videoEl.play().then(() => {
          isVideoPlaying = true;
          if (playOverlay) playOverlay.style.display = 'none';
          if (unmuteBanner) unmuteBanner.style.display = 'flex';
        }).catch(() => {});
      }
    } else if (EMBED_URL) {
      const ph = document.getElementById('video-placeholder');
      if (ph) ph.style.display = 'none';
      if (playOverlay) playOverlay.style.display = 'none';

      const iframe = document.createElement('iframe');
      iframe.src = EMBED_URL;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      videoContainer.appendChild(iframe);

      if (containerCtaVideo) containerCtaVideo.style.display = 'block';
    }

    function toggleVideoPlay() {
      if (videoEl) {
        if (videoEl.paused) {
          videoEl.play();
          isVideoPlaying = true;
          if (playOverlay) playOverlay.style.display = 'none';
          if (endScreen) endScreen.style.display = 'none';
        } else {
          videoEl.pause();
          isVideoPlaying = false;
          if (playOverlay) playOverlay.style.display = 'flex';
        }
      } else if (!EMBED_URL) {
        // Modo placeholder: simula interação
        isVideoPlaying = !isVideoPlaying;
        if (playOverlay) playOverlay.style.display = isVideoPlaying ? 'none' : 'flex';
      }
    }

    if (phoneScreen) {
      phoneScreen.addEventListener('click', (e) => {
        if (e.target.closest('#btn-unmute') || e.target.closest('#end-screen a')) return;
        toggleVideoPlay();
      });
    }

    if (btnUnmute && videoEl) {
      btnUnmute.addEventListener('click', (e) => {
        e.stopPropagation();
        videoEl.currentTime = 0;
        videoEl.muted = false;
        videoEl.play();
        if (unmuteBanner) unmuteBanner.style.display = 'none';
      });
    }

    // Tecla espaço para play/pause
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && document.activeElement === phoneScreen) {
        e.preventDefault();
        toggleVideoPlay();
      }
    });

    // 0.1 VÍDEO DE DEMONSTRAÇÃO (#demonstracao)
    const demoPhoneScreen = document.getElementById('demo-phone-screen');
    const demoMainVideo = document.getElementById('demo-main-video');
    const demoPlayBtn = document.getElementById('demo-play-btn');
    const demoProgressFill = document.getElementById('demo-progress-fill');

    if (demoPhoneScreen && demoMainVideo) {
      demoPhoneScreen.addEventListener('click', () => {
        if (demoMainVideo.paused) {
          demoMainVideo.play();
          if (demoPlayBtn) demoPlayBtn.style.display = 'none';
        } else {
          demoMainVideo.pause();
          if (demoPlayBtn) demoPlayBtn.style.display = 'flex';
        }
      });

      demoMainVideo.addEventListener('timeupdate', () => {
        if (demoMainVideo.duration > 0 && demoProgressFill) {
          const pct = (demoMainVideo.currentTime / demoMainVideo.duration) * 100;
          demoProgressFill.style.width = pct + '%';
        }
      });

      demoMainVideo.addEventListener('ended', () => {
        if (demoPlayBtn) demoPlayBtn.style.display = 'flex';
        if (demoProgressFill) demoProgressFill.style.width = '100%';
      });
    }

    const btnBasico = document.getElementById('btn-comprar-basico');
    const btnCompleto = document.getElementById('btn-comprar-completo');

    const modalMiniBasico = document.getElementById('modal-mini-basico');
    const closeMiniBasico = document.getElementById('close-mini-basico');

    const modalMiniCompleto = document.getElementById('modal-mini-completo');
    const closeMiniCompleto = document.getElementById('close-mini-completo');

    const modalDownsell1990 = document.getElementById('modal-downsell-1990');
    const closeDownsell1990 = document.getElementById('close-downsell-1990');
    const btnRecusarDownsell = document.getElementById('btn-recusar-downsell');

    const stickyBar = document.getElementById('sticky-bar');
    const sectionPlanos = document.getElementById('planos');

    // 1. FAQ ACCORDION INTERATIVO (Toque confortável >= 56px)
    document.querySelectorAll('.faq-btn').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        
        // Fecha todos os outros itens
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-btn');
            if (otherBtn) {
              otherBtn.setAttribute('aria-expanded', 'false');
              otherItem.querySelector('.faq-icon').textContent = '+';
            }
          }
        });

        // Alterna o item clicado
        if (isActive) {
          item.classList.remove('active');
          button.setAttribute('aria-expanded', 'false');
          item.querySelector('.faq-icon').textContent = '+';
        } else {
          item.classList.add('active');
          button.setAttribute('aria-expanded', 'true');
          item.querySelector('.faq-icon').textContent = '−';
        }
      });
    });

    // 2. CONTROLE DOS MINI CARDS E POP-UP DE R$ 19,90
    function openMiniBasico() {
      modalMiniBasico.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function openMiniCompleto() {
      modalMiniCompleto.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function openDownsell1990() {
      if (modalMiniBasico) modalMiniBasico.classList.remove('active');
      if (modalMiniCompleto) modalMiniCompleto.classList.remove('active');
      modalDownsell1990.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeAllModals() {
      if (modalMiniBasico) modalMiniBasico.classList.remove('active');
      if (modalMiniCompleto) modalMiniCompleto.classList.remove('active');
      if (modalDownsell1990) modalDownsell1990.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Clique em "QUERO SÓ O BÁSICO" -> Abre Mini Card Básico
    if (btnBasico) {
      btnBasico.addEventListener('click', (e) => {
        e.preventDefault();
        openMiniBasico();
      });
    }

    // Clique em "QUERO O PLANO COMPLETO" -> Abre Mini Card Completo
    if (btnCompleto) {
      btnCompleto.addEventListener('click', (e) => {
        e.preventDefault();
        openMiniCompleto();
      });
    }

    // Se clicar no 'X' do Mini Card BÁSICO -> Abre Pop-up de 19,90
    if (closeMiniBasico) {
      closeMiniBasico.addEventListener('click', (e) => {
        e.preventDefault();
        openDownsell1990();
      });
    }

    // Se clicar no 'X' do Mini Card COMPLETO -> Abre Pop-up de 19,90
    if (closeMiniCompleto) {
      closeMiniCompleto.addEventListener('click', (e) => {
        e.preventDefault();
        openDownsell1990();
      });
    }

    // Fechar pop-up de 19,90 pelo 'X' ou link recusar
    if (closeDownsell1990) {
      closeDownsell1990.addEventListener('click', closeAllModals);
    }
    if (btnRecusarDownsell) {
      btnRecusarDownsell.addEventListener('click', closeAllModals);
    }

    // Fechar ao clicar fora (backdrop)
    [modalMiniBasico, modalMiniCompleto, modalDownsell1990].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            if (modal === modalMiniBasico || modal === modalMiniCompleto) {
              openDownsell1990();
            } else {
              closeAllModals();
            }
          }
        });
      }
    });

    // Fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modalMiniBasico?.classList.contains('active') || modalMiniCompleto?.classList.contains('active')) {
          openDownsell1990();
        } else if (modalDownsell1990?.classList.contains('active')) {
          closeAllModals();
        }
      }
    });

    // 3. BARRA FIXA DE COMPRA MOBILE (Scroll > 600px e esconde na seção de planos)
    let isPlanosVisible = false;

    // IntersectionObserver para detectar se a seção #planos está visível
    if ('IntersectionObserver' in window && sectionPlanos) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isPlanosVisible = entry.isIntersecting;
          updateStickyBar();
        });
      }, { threshold: 0.1 });
      observer.observe(sectionPlanos);
    }

    function updateStickyBar() {
      if (!stickyBar) return;
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 600 && !isPlanosVisible) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', updateStickyBar, { passive: true });
    window.addEventListener('resize', updateStickyBar, { passive: true });

    // 4. ANIMAÇÃO DE ENTRADA DO CARD DE SUBHEADLINE
    const subheadCard = document.getElementById('subhead-card-el');
    if (subheadCard && 'IntersectionObserver' in window) {
      const subheadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('subhead-revealed');
            subheadObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      subheadObserver.observe(subheadCard);
    }

    // 5. CARROSSEL DE TRUQUES 9:16 (Navegação estritamente pelas setas)
    const carouselTrack = document.getElementById('tricks-carousel-track');
    const btnCarouselPrev = document.getElementById('btn-carousel-prev');
    const btnCarouselNext = document.getElementById('btn-carousel-next');

    if (carouselTrack && btnCarouselPrev && btnCarouselNext) {
      btnCarouselPrev.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: -280, behavior: 'smooth' });
      });
      btnCarouselNext.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: 280, behavior: 'smooth' });
      });
    }

    // 6. CARROSSEL DE RELATOS 9:16 (Navegação estritamente pelas setas)
    const testimonialsTrack = document.getElementById('testimonials-carousel-track');
    const btnTestimonialsPrev = document.getElementById('btn-testimonials-prev');
    const btnTestimonialsNext = document.getElementById('btn-testimonials-next');

    if (testimonialsTrack && btnTestimonialsPrev && btnTestimonialsNext) {
      btnTestimonialsPrev.addEventListener('click', () => {
        testimonialsTrack.scrollBy({ left: -280, behavior: 'smooth' });
      });
      btnTestimonialsNext.addEventListener('click', () => {
        testimonialsTrack.scrollBy({ left: 280, behavior: 'smooth' });
      });
    }

    // 7. VÍDEO PRINCIPAL DO HERO COM BOTÃO YOUTUBE E BARRA DE PROGRESSO
    const heroVideo = document.getElementById('hero-main-video');
    const ytPlayBtn = document.getElementById('youtube-play-btn');
    const videoProgress = document.getElementById('video-progress-fill');
    const phoneScreen = document.getElementById('phone-screen');

    if (heroVideo && phoneScreen && ytPlayBtn && videoProgress) {
      function toggleHeroVideo() {
        if (heroVideo.paused) {
          heroVideo.play().then(() => {
            ytPlayBtn.style.display = 'none';
          }).catch(() => {});
        } else {
          heroVideo.pause();
          ytPlayBtn.style.display = 'flex';
        }
      }

      phoneScreen.addEventListener('click', toggleHeroVideo);

      heroVideo.addEventListener('timeupdate', () => {
        if (heroVideo.duration > 0) {
          const pct = (heroVideo.currentTime / heroVideo.duration) * 100;
          videoProgress.style.width = pct + '%';
        }
      });

      heroVideo.addEventListener('ended', () => {
        ytPlayBtn.style.display = 'flex';
        heroVideo.currentTime = 0;
        videoProgress.style.width = '0%';
      });
    }

  </script>
</body>
</html>`;
}
