import { Check, Clock3, MessageSquare, SlidersHorizontal } from "lucide-react";

const Features = () => (
  <section id="diferenciais" className="operations-section section-space">
    <div className="site-container operations-grid">
      <div
        className="operations-preview"
        aria-label="Exemplo ilustrativo de organização da operação"
      >
        <div className="operations-preview-heading">
          <div>
            <p>Visão da operação</p>
            <h3>O que precisa de atenção?</h3>
          </div>
          <SlidersHorizontal size={20} />
        </div>
        <div className="queue-item">
          <span className="queue-icon priority">
            <Clock3 size={19} />
          </span>
          <div>
            <strong>Priorizar quem está esperando</strong>
            <p>Prazo de resposta e tempo na fila</p>
          </div>
          <span className="queue-label priority">Prioridade</span>
        </div>
        <div className="queue-item">
          <span className="queue-icon">
            <MessageSquare size={19} />
          </span>
          <div>
            <strong>Continuar uma transferência</strong>
            <p>Resumo e histórico à mão</p>
          </div>
          <span className="queue-label">Com a equipe</span>
        </div>
        <div className="queue-item">
          <span className="queue-icon resolved">
            <Check size={19} />
          </span>
          <div>
            <strong>Concluir e ouvir o cliente</strong>
            <p>Resolução e pesquisa de satisfação</p>
          </div>
          <span className="queue-label resolved">Concluído</span>
        </div>
        <p className="preview-caption">
          Exemplo ilustrativo. Recursos conforme a configuração.
        </p>
      </div>
      <div className="operations-copy">
        <p className="section-kicker">Clareza para quem gerencia</p>
        <h2>
          Mais do que responder.
          <br />
          Saber o que falta resolver.
        </h2>
        <p>
          Veja onde a operação precisa de atenção e ajude sua equipe a agir
          antes que uma pendência vire um cliente esquecido.
        </p>
        <ul className="feature-list">
          <li>
            <Check />
            <span>
              <strong>Fila com prioridade.</strong> Acompanhe tempos de espera e
              prazos de atendimento (SLA).
            </span>
          </li>
          <li>
            <Check />
            <span>
              <strong>Próximo passo definido.</strong> Organize responsáveis,
              marcadores e retornos agendados.
            </span>
          </li>
          <li>
            <Check />
            <span>
              <strong>Qualidade visível.</strong> Acompanhe indicadores de
              atendimento e satisfação dos clientes (CSAT).
            </span>
          </li>
          <li>
            <Check />
            <span>
              <strong>Automação sob controle.</strong> Gerencie a IA por canal e
              por conversa.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Features;
