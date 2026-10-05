
const Footer = () => (
  <footer className="site-footer">
    <div className="site-container">
      <div className="footer-top">
        <div>
          <a href="/" className="site-logo" aria-label="Atenux — início">
            <img src="/atenux-conversa.png" alt="" width="34" height="34" />
            <span>
              atenux<span className="brand-period">.</span>
            </span>
          </a>
          <p>
            IA, pessoas e processos.
            <br />
            Juntos, em cada conversa.
          </p>
        </div>
        <nav aria-label="Links do rodapé">
          <a href="/#servicos">A plataforma</a>
          <a href="/#como-funciona">Como funciona</a>
          <a href="/#contato">Contato</a>
          <a href="https://chat.atenux.com">Entrar na Atenux</a>
        </nav>
        <div className="footer-contact">
          <a href="mailto:contato@atenux.com">contato@atenux.com</a>
          <a href="tel:+5592993531716">(92) 99353-1716</a>
        </div>
      </div>
      <div className="footer-legal">
        <p>© {new Date().getFullYear()} Atenux</p>
        <nav aria-label="Informações legais">
          <a href="/privacy.html">Privacidade</a>
          <a href="/terms.html">Termos de uso</a>
          <a href="/data-deletion.html">Exclusão de dados</a>
        </nav>
        <a
          className="tribe-credit"
          href="https://tribesolutions.com.br"
          target="_blank"
          rel="noopener"
        >
          Powered by <strong>TribeSolutions</strong>
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
