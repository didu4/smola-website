import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/components/header.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCoursesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false); // закрываем мобильное меню

    if (location.pathname === "/") {
      // Уже на главной — просто скроллим
      const element = document.getElementById("courses");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // На другой странице — переходим на главную и скроллим
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("courses");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100); // небольшая задержка, чтобы главная успела отрендериться
    }
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          СМОЛА
        </Link>

        <div className="header-button-mobile">
          <Button variant="primary" rounded>
            Записаться
          </Button>
        </div>

        <nav className="nav">
          <a href="#courses" onClick={handleCoursesClick}>
            Курсы
          </a>
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
              <a href="#courses" onClick={handleCoursesClick}>
                Курсы
              </a>
              <a href="#">Статьи</a>
              <a href="#">О нас</a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
