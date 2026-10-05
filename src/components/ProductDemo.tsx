import { useState } from "react";
import {
  Bot,
  Check,
  Clock3,
  Inbox,
  MessageSquare,
  UserRound,
  Users,
} from "lucide-react";

const stages = ["A IA acolhe", "A equipe assume", "Você acompanha"];

const ProductDemo = () => {
  const [stage, setStage] = useState(0);

  return (
    <figure className="product-demo">
      <div className="demo-shell">
        <div className="demo-brand">
          <MessageSquare size={20} />
          <strong>Atenux</strong>
          <span>Uma conversa. Todo o contexto.</span>
        </div>
        <div className="demo-body">
          <aside className="demo-rail" aria-hidden="true">
            <Inbox />
            <MessageSquare className="rail-active" />
            <Users />
          </aside>
          <div
            className="demo-content"
            id="demo-panel"
            role="region"
            aria-label={stages[stage]}
            aria-live="polite"
          >
            <div className="demo-heading">
              <div className="demo-avatar">MC</div>
              <div>
                <strong>Marina Costa</strong>
                <span>WhatsApp · Exemplo ilustrativo</span>
              </div>
              <span className="demo-status">
                {stage === 0
                  ? "Com a IA"
                  : stage === 1
                    ? "Com a equipe"
                    : "Em atendimento"}
              </span>
            </div>
            {stage === 0 && (
              <div className="demo-conversation">
                <div className="chat-bubble customer">
                  Olá! Gostaria de um orçamento para minha empresa.
                </div>
                <div className="chat-author">
                  <Bot size={14} /> Atena · Assistente de IA
                </div>
                <div className="chat-bubble assistant">
                  Olá, Marina! Posso te ajudar. Me conta o que você precisa e
                  para quando?
                </div>
                <div className="chat-bubble customer">
                  Preciso de 20 unidades para a próxima semana.
                </div>
                <div className="demo-event">
                  <Check size={15} /> Informações reunidas para o próximo passo
                </div>
              </div>
            )}
            {stage === 1 && (
              <div className="demo-conversation">
                <div className="chat-author">
                  <Bot size={14} /> Atena · Assistente de IA
                </div>
                <div className="chat-bubble assistant">
                  Vou encaminhar seu pedido para a equipe comercial continuar
                  com você.
                </div>
                <div className="internal-note">
                  <strong>Resumo para a equipe · Nota privada</strong>
                  <p>
                    Marina solicita orçamento de 20 unidades para a próxima
                    semana. Precisa confirmar valores e disponibilidade.
                  </p>
                </div>
                <div className="chat-author">
                  <UserRound size={14} /> Rafael · Comercial
                </div>
                <div className="chat-bubble assistant">
                  Oi, Marina! Já vi seu pedido. Vou conferir a disponibilidade
                  para essa data.
                </div>
              </div>
            )}
            {stage === 2 && (
              <div className="demo-operation">
                <p className="operation-title">
                  Cada atendimento com um próximo passo
                </p>
                <dl>
                  <div>
                    <dt>Equipe</dt>
                    <dd>
                      <Users size={14} /> Comercial
                    </dd>
                  </div>
                  <div>
                    <dt>Responsável</dt>
                    <dd>Rafael</dd>
                  </div>
                  <div>
                    <dt>Inteligência artificial</dt>
                    <dd>IA pausada</dd>
                  </div>
                  <div>
                    <dt>Prazo de resposta</dt>
                    <dd className="deadline">
                      <Clock3 size={14} /> Dentro do prazo
                    </dd>
                  </div>
                </dl>
                <div className="internal-note">
                  <strong>Contexto disponível para a equipe</strong>
                  <p>
                    Histórico, notas internas e informações do contato na mesma
                    conversa.
                  </p>
                </div>
              </div>
            )}
            <div className="demo-footer">
              <span className="small-dot" />
              {stage === 0
                ? "IA preparada com as informações do seu negócio"
                : stage === 1
                  ? "A pessoa assume. A IA fica pausada."
                  : "A gestão enxerga o andamento da operação."}
            </div>
          </div>
        </div>
      </div>
      <div
        className="demo-steps"
        role="group"
        aria-label="Explore o fluxo de atendimento"
      >
        {stages.map((label, index) => (
          <button
            key={label}
            type="button"
            aria-pressed={stage === index}
            aria-controls="demo-panel"
            onClick={() => setStage(index)}
          >
            <span>{index + 1}</span>
            {label}
          </button>
        ))}
      </div>
      <figcaption>
        Explore as etapas. Simulação ilustrativa do fluxo de atendimento.
      </figcaption>
    </figure>
  );
};

export default ProductDemo;
