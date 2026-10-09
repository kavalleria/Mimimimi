"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function BurgerMenu({ isOpen, onClose }) {
  // Блокируем скролл страницы, когда меню открыто
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { name: "О клинике", href: "/about" },
    { name: "Врачи", href: "/doctors" },
    { name: "Услуги", href: "/services" },
    { name: "База знаний", href: "/blog" },
    { name: "Контакты", href: "/contacts" },
  ];

  return (
    <div className="fixed inset-0 bg-[#496434] text-white z-50 flex flex-col justify-between p-8 sm:p-12 md:p-16 overflow-y-auto font-sans">
      {/* Кнопка закрытия (крестик в правом верхнем углу) */}
      <div className="flex justify-end">
        <button
          onClick={onClose}
          aria-label="Закрыть меню"
          className="text-white hover:opacity-80 transition-opacity p-2 text-3xl font-light leading-none cursor-pointer"
        >
          &#10005;
        </button>
      </div>

      {/* Контент меню как на фото */}
      <div className="max-w-[600px] w-full mx-auto my-auto flex flex-col items-start gap-10 py-6">
        {/* Навигация */}
        <nav className="flex flex-col gap-4 sm:gap-6 text-left">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="text-[28px] sm:text-[34px] md:text-[40px] font-medium leading-tight hover:opacity-80 transition-opacity"
            >
              {link.name}
            </Link>
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
  );
}
