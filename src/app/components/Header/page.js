"use client";

import React, { useState, useEffect } from "react";
import Burger from "../Burger/page";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Блокируем скролл страницы при открытом бургер-меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Список пунктов меню с привязкой к id разделов на странице
  const navLinks = [
    { name: "О клинике", targetId: "about" },
    { name: "Врачи", targetId: "doctors" },
    { name: "Услуги", targetId: "services" },
    { name: "База знаний", targetId: "appointment" }, // Переход к форме или нужной секции
    { name: "Контакты", targetId: "contacts" },
  ];

  // Функция для плавного скролла к объекту без ошибок
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Закрываем меню

    const element = document.getElementById(targetId);
    if (element) {
      // Смещение с учетом высоты вашей фиксированной шапки
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Стандартная шапка сайта */}
      <header className="w-full fixed top-0 left-0 right-0 bg-white rounded-b-4xl py-3 px-6 md:px-12 flex items-center justify-between z-50 shadow-sm">
        <div className="flex items-center">
          <a href="#">
            <img
              src="/logo.png"
              alt="Доктор Тома"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
        </div>

        <div className="hidden lg:flex flex-col text-xs text-gray-500 text-left">
          <span className="text-gray-400">Работаем круглосуточно</span>
          <span className="font-semibold text-gray-800 text-sm">
            Подольск, ул. Чайковского, 48А
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="tel:+795667964366"
            className="font-bold text-gray-800 text-sm md:text-base hover:text-[#3d7042] transition-colors"
          >
            +7 (956) 6796 43 66
          </a>

          {/* Иконка бургера */}
          <div onClick={() => setIsMenuOpen(true)} className="cursor-pointer">
            <Burger />
          </div>
        </div>
      </header>

      {/* Полноэкранное оверлей бургер-меню */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#496434] text-white z-[100] flex flex-col justify-between p-8 sm:p-12 md:p-16 overflow-y-auto font-sans animate-fadeIn">
          {/* Кнопка закрытия (крестик) */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Закрыть меню"
              className="text-white hover:opacity-80 transition-opacity p-2 text-3xl font-light leading-none cursor-pointer"
            >
              &#10005;
            </button>
          </div>

          {/* Контент меню */}
          <div className="max-w-[600px] w-full mx-auto my-auto flex flex-col items-start gap-10 py-6">
            {/* Навигационные ссылки */}
            <nav className="flex flex-col gap-4 sm:gap-6 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.targetId}`}
                  onClick={(e) => handleScroll(e, link.targetId)}
                  className="text-[28px] sm:text-[34px] md:text-[40px] font-medium leading-tight hover:opacity-80 transition-opacity cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Блок контактов */}
            <div className="flex flex-col items-start gap-4 mt-2">
              <span className="px-5 py-1.5 border border-white/60 rounded-full text-xs sm:text-sm tracking-wider text-white/90">
                мы на связи
              </span>

              <div className="flex flex-col gap-1 text-left">
                <a
                  href="tel:+74956783222"
                  className="text-[24px] sm:text-[28px] md:text-[32px] font-bold hover:opacity-80 transition-opacity tracking-wide"
                >
                  +7 495 678 32 22
                </a>

                <p className="text-[20px] sm:text-[24px] md:text-[26px] font-medium text-white/95">
                  Подольск, ул.Чайковского, 48А
                </p>

                <span className="text-xs sm:text-sm text-white/70 font-normal mt-1">
                  Круглосуточно
                </span>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      )}
    </>
  );
}
