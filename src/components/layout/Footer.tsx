import { SiVk, SiTelegram } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Левый блок */}
          <div>
            <h3 className="text-xl font-bold mb-4">СМОЛА</h3>
            <p className="text-sm opacity-80">
              Современная архитектурная школа
            </p>
          </div>

          {/* Ссылки */}
          <div className="text-center">
            <h4 className="font-semibold mb-3">Навигация</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  О школе
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Программы
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Учителя
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Цены
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="text-center">
            <h4 className="font-semibold mb-3">Связь с нами</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="mailto:smolarch@smolarch.ru"
                  className="hover:opacity-100 transition-opacity"
                >
                  smolarch@smolarch.ru
                </a>
              </li>
              <li>+7 987 654 32 10</li>
            </ul>

            <div className="flex justify-center gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="ВКонтакте"
              >
                <SiVk className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Telegram"
              >
                <SiTelegram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-xs text-center opacity-60">
          <p>© 2026 Все права защищены</p>
          <p className="mt-1">Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};
