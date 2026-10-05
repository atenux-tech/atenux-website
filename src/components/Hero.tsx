import { ArrowDown, Check } from "lucide-react";
import ProductDemo from "@/components/ProductDemo";

const Hero = () => (
  <section className="landing-hero" aria-labelledby="hero-title">
    <div className="site-container hero-grid">
      <div className="hero-copy">
        <p className="product-label">
          <span /> Atendimento com IA e gente de verdade
        </p>
        <h1 id="hero-title">
          Atenda melhor.
          <br />
          Dê continuidade a cada conversa.
        </h1>
        <p className="hero-description">
          A Atenux reúne seus canais, uma assistente de IA e sua equipe em uma
          operação organizada. Do primeiro “olá” até a solução.
        </p>
        <div className="hero-actions">
          <a className="site-button" href="#contato">
            Quero uma demonstração
          </a>
          <a className="text-link" href="#como-funciona">
            Veja como funciona <ArrowDown size={16} />
          </a>
        </div>
        <ul className="hero-benefits" aria-label="Benefícios">
          <li>
            <Check size={16} /> IA com o conhecimento da sua empresa
          </li>
          <li>
            <Check size={16} /> Sua equipe no controle
          </li>
        </ul>
      </div>
      <ProductDemo />
    </div>
    <div className="site-container hero-bottom">
      <p>
        Uma conversa começa no canal.
        <br />
        <strong>O atendimento acontece na Atenux.</strong>
      </p>
      <div className="channel-list" aria-label="Canais de atendimento">
        <span>WhatsApp</span>
        <span>Chat no site</span>
        <span>Instagram</span>
        <span>Telegram</span>
      </div>
      <p className="channel-note">
        Canais conectados conforme
        <br />a configuração da sua operação.
      </p>
    </div>
  </section>
);

export default Hero;
