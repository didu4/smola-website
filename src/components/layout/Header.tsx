import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-secondary text-secondary-foreground border-b border-secondary/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип */}
        <div className="text-3xl font-bold text-logo font-pelowlava">СМОЛА</div>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex items-center gap-8 text-[32px] text-white">
          <a href="#" className="hover:opacity-80 transition-opacity">
            Курсы
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            Статьи
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            О нас
          </a>
          <Button variant="primary" className="rounded-xl">
            Записаться на занятие
          </Button>
        </nav>

        {/* Бургер-меню (мобилка) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-64 bg-secondary z-50 p-6 shadow-xl">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="ml-auto block text-white"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-6 mt-8 text-2xl text-white">
              <a href="#" className="hover:opacity-80 transition-opacity">
                Курсы
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Статьи
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                О нас
              </a>
              <Button variant="primary" className="w-full text-center">
                Записаться
              </Button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
