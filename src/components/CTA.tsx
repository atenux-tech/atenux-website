import { MessageCircle, Check } from "lucide-react";

const CTA = () => (
  <section id="contato" className="contact-section">
    <div className="site-container contact-grid">
      <div>
        <p className="section-kicker">Vamos olhar para o seu atendimento?</p>
        <h2>
          Mostre seu desafio.
          <br />
          Conheça a Atenux
          <br />
          na prática.
        </h2>
        <p>
          Conte como sua equipe atende hoje. Vamos mostrar como conectar seus
          canais, preparar a IA e organizar a operação.
        </p>
      </div>
      <div className="contact-panel">
        <h3>Uma demonstração com o seu cenário em mente.</h3>
        <ul>
          <li>
            <Check size={18} /> Conheça o fluxo da IA até o atendimento humano
          </li>
          <li>
            <Check size={18} /> Veja como acompanhar sua operação
          </li>
          <li>
            <Check size={18} /> Converse sobre implantação e proposta
          </li>
        </ul>
        <a
          className="site-button contact-button"
          href="https://wa.me/5592993531716?text=Ol%C3%A1!%20Quero%20conhecer%20a%20Atenux%20e%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={18} /> Solicitar demonstração pelo WhatsApp
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
        <p className="contact-hint">
          Ou fale por e-mail: <a href="mailto:contato@atenux.com" className="underline underline-offset-4">contato@atenux.com</a>
        </p>
      </div>
    </div>
  </section>
);

export default CTA;
