import React from "react";
import Burger from "../Burger/page";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-white rounded-b-4xl py-3 px-6 md:px-12 flex items-center justify-between z-50 shadow-sm">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Доктор Тома"
          className="h-10 md:h-12 w-auto object-contain"
        />
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

        <Burger />
      </div>
    </header>
  );
}
