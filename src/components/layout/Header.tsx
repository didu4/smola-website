import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import "../../styles/components/header.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">СМОЛА</div>

        <div className="header-button-mobile">
          <Button variant="primary" rounded>
            Записаться
          </Button>
        </div>

        <nav className="nav">
          <a href="#">Курсы</a>
          <a href="#">Статьи</a>
          <a href="#">О нас</a>
          <Button variant="primary" rounded>
            Записаться на занятие
          </Button>
        </nav>

        <button className="burger" onClick={() => setIsOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      {isOpen && (
        <>
          <div className="overlay" onClick={() => setIsOpen(false)} />
          <div className="mobile-menu">
            <button
              className="mobile-menu-close"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
            <nav>
              <a href="#">Курсы</a>
              <a href="#">Статьи</a>
              <a href="#">О нас</a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
