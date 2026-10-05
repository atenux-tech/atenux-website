import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <header className="site-header">
      <nav
        className="site-container nav-inner"
        aria-label="Navegação principal"
      >
        <a href="/" className="site-logo" aria-label="Atenux — início">
          <img src="/atenux-conversa.png" alt="" width="38" height="38" />
          <span>
            atenux<span className="brand-period">.</span>
          </span>
        </a>
        <div className="desktop-nav">
          <a href="/#servicos">A plataforma</a>
          <a href="/#como-funciona">Como funciona</a>
          <a href="/#duvidas">Dúvidas</a>
        </div>
        <div className="desktop-nav nav-actions">
          <a href="https://chat.atenux.com">Entrar</a>
          <a href="/#contato" className="site-button button-small">
            Quero uma demonstração
          </a>
        </div>
        <button
          ref={menuButton}
          className="mobile-menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Navegação móvel"
        >
          <a href="/#servicos" onClick={() => setOpen(false)}>
            A plataforma
          </a>
          <a href="/#como-funciona" onClick={() => setOpen(false)}>
            Como funciona
          </a>
          <a href="/#duvidas" onClick={() => setOpen(false)}>
            Dúvidas
          </a>
          <a href="https://chat.atenux.com">Entrar na Atenux</a>
          <a
            href="/#contato"
            className="site-button"
            onClick={() => setOpen(false)}
          >
            Quero uma demonstração
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
