const steps = [
  {
    title: "Entendemos sua operação",
    text: "Mapeamos os canais, as dúvidas frequentes e os pontos em que sua equipe precisa participar.",
  },
  {
    title: "Preparamos a Atenux com você",
    text: "Configuramos os canais contratados, o conhecimento da IA e as regras de transferência para sua equipe.",
  },
  {
    title: "Sua equipe começa com direção",
    text: "Orientamos o uso da plataforma e a rotina de atendimento: priorizar, assumir, acompanhar e concluir.",
  },
];

const HowItWorks = () => (
  <section id="como-funciona" className="section-space implementation-section">
    <div className="site-container">
      <div className="section-intro">
        <div>
          <p className="section-kicker">Da ferramenta à rotina</p>
          <h2>
            A tecnologia entra.
            <br />O processo acompanha.
          </h2>
        </div>
        <p>
          Um bom atendimento precisa de mais do que um login. A implantação
          conecta a plataforma ao jeito que sua empresa trabalha.
        </p>
      </div>
      <ol className="implementation-steps">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="step-number">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
