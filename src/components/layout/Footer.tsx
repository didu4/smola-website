import { SiVk, SiTelegram } from "react-icons/si";
import "../../styles/components/footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Левый блок */}
        <div className="logo-block">
          <h3>СМОЛА</h3>
          <p>Современная архитектурная школа</p>
        </div>

        {/* Навигация */}
        <div className="nav-block">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#">О школе</a>
            </li>
            <li>
              <a href="#">Программы</a>
            </li>
            <li>
              <a href="#">Учителя</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>
            <li>
              <a href="#">Цены</a>
            </li>
          </ul>
        </div>

        {/* Контакты */}
        <div className="contacts-block">
          <h4>Связь с нами</h4>
          <ul>
            <li>
              <a href="mailto:smolarch@smolarch.ru">smolarch@smolarch.ru</a>
            </li>
            <li>+7 987 654 32 10</li>
          </ul>
          <div className="socials">
            <a href="#" aria-label="ВКонтакте">
              <SiVk />
            </a>
            <a href="#" aria-label="Telegram">
              <SiTelegram />
            </a>
          </div>
        </div>

        {/* Копирайт */}
        <div className="copyright">
          <p>© 2026 Все права защищены</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};
