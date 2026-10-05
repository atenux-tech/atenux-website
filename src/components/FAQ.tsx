import { Plus } from "lucide-react";

const questions = [
  {
    question: "A Atenux serve para a minha empresa?",
    answer:
      "Se sua empresa recebe pedidos, dúvidas ou solicitações de suporte por mensagens e precisa dividir esse trabalho entre pessoas, a Atenux pode ajudar. Na demonstração, avaliamos os canais, o volume e a rotina para indicar uma configuração adequada.",
  },
  {
    question: "A IA substitui minha equipe?",
    answer:
      "A Atena ajuda nas dúvidas recorrentes e na coleta das informações iniciais. Sua equipe continua responsável pelos casos que exigem análise, negociação ou uma decisão. Uma pessoa pode assumir a conversa e pausar a IA quando necessário.",
  },
  {
    question: "Como a IA aprende sobre meu negócio?",
    answer:
      "A assistente utiliza uma base de conhecimento e orientações configuradas para sua empresa. Na implantação, organizamos as informações que ela deve consultar e os critérios de encaminhamento. Esse conteúdo pode ser atualizado conforme a operação evolui.",
  },
  {
    question: "Posso conectar meu WhatsApp e outros canais?",
    answer:
      "A Atenux permite centralizar WhatsApp, chat no site e outros canais compatíveis, como Instagram e Telegram. A conexão depende das contas, permissões e requisitos de cada canal. Avaliamos seu cenário antes de definir a implantação.",
  },
  {
    question: "O que acontece quando o cliente pede uma pessoa?",
    answer:
      "O atendimento pode ser encaminhado para a equipe, com a IA pausada e o histórico preservado. Quando habilitado, um resumo privado ajuda o atendente a continuar a conversa. A equipe organiza quem assume e dá sequência ao pedido.",
  },
  {
    question: "Quanto custa e como começo?",
    answer:
      "A proposta considera os canais, a equipe, o uso de IA e a implantação de que sua operação precisa. Conte seu cenário na conversa de demonstração para receber uma proposta adequada ao seu negócio.",
  },
];

const FAQ = () => (
  <section id="duvidas" className="faq-section section-space">
    <div className="site-container faq-grid">
      <div>
        <p className="section-kicker">Antes de começar</p>
        <h2>
          Vamos tirar
          <br />
          suas dúvidas.
        </h2>
        <p>Quer conversar sobre um cenário específico?</p>
        <a href="#contato" className="text-link">
          Conte para a gente
        </a>
      </div>
      <div className="faq-items">
        {questions.map(({ question, answer }) => (
          <details key={question}>
            <summary>
              {question}
              <Plus size={19} aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
