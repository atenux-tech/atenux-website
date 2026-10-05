import { BookOpen, MessagesSquare, UserRoundCheck } from "lucide-react";

const services = [
  {
    icon: MessagesSquare,
    title: "As conversas, juntas.",
    description:
      "Sua equipe atende os canais conectados em um só lugar, com histórico, contatos e notas internas. Mais contexto para continuar de onde o cliente parou.",
    detail: "Canais e equipe na mesma operação",
  },
  {
    icon: BookOpen,
    title: "A IA conhece seu negócio.",
    description:
      "A Atena responde com base nas informações que você disponibiliza, reúne os detalhes da solicitação e encaminha para a equipe quando é hora de uma pessoa assumir.",
    detail: "Conhecimento e orientações da sua empresa",
  },
  {
    icon: UserRoundCheck,
    title: "O humano segue no controle.",
    description:
      "Sua equipe pode assumir a conversa, pausar a IA e continuar o atendimento. Na transferência, o histórico e o resumo interno ajudam a entender o que o cliente precisa.",
    detail: "Continuidade entre IA e atendimento humano",
  },
];

const Services = () => (
  <section id="servicos" className="platform-section section-space">
    <div className="site-container">
      <div className="section-intro">
        <h2>
          Seu cliente não quer
          <br />
          começar tudo de novo.
        </h2>
        <p>
          Ele quer ser entendido e ter o problema resolvido. A Atenux conecta
          automação e atendimento humano para sua equipe dar o próximo passo com
          contexto.
        </p>
      </div>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, description, detail }) => (
          <article className="service-item" key={title}>
            <div className="service-icon">
              <Icon size={25} strokeWidth={1.6} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="service-detail">{detail}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
