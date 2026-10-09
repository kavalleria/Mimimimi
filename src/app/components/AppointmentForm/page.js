"use client";

import React, { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";

// Подключение локального шрифта Gogol для рукописного текста "прямо сейчас!"
const gogol = localFont({
  src: "../../../../public/fonts/gogol_regular.otf",
  display: "swap",
});

export default function AppointmentForm() {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log("Данные формы:", formData);
  };

  return (
    <section className="w-full bg-[#3d592b] py-12 md:py-16 px-6 md:px-12 text-white font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Главная карточка */}
        <div className="relative bg-[#7d8677] rounded-[32px] overflow-hidden min-h-[500px] md:min-h-[560px] flex flex-col md:flex-row items-center justify-between">
          {/* Белый пружинистый росчерк в правом верхнем углу */}
          <div className="absolute top-4 right-6 w-12 h-12 md:w-16 md:h-16 pointer-events-none opacity-90 z-20">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 80 C 10 50, 30 20, 50 40 C 70 60, 50 90, 80 30" />
            </svg>
          </div>

          {/* Левая часть: Картинка собаки прижата СТРОГО к нижнему левому краю (bottom-0 left-0) */}
          <div className="relative md:absolute bottom-0 left-0 w-full md:w-[50%] h-[320px] sm:h-[400px] md:h-[90%] pointer-events-none z-10 flex items-end">
            <div className="relative w-full h-full">
              <Image
                src="/dog-appointment.png"
                alt="Собака в красном ошейнике"
                fill
                priority
                className="object-contain object-bottom md:object-left-bottom"
              />
            </div>
          </div>

          {/* Правая часть: Заголовок и Форма */}
          <div className="w-full md:w-1/2 max-w-[540px] z-20 p-8 md:p-12 lg:py-16 lg:pr-16 ml-auto mt-auto md:mt-0">
            {/* Заголовок с рукописным акцентом */}
            <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-bold text-white leading-tight mb-4">
              Запишитесь на прием <br />
              <span
                className={`${gogol.className} block text-white lowercase -mt-2 md:-mt-3`}
                style={{
                  fontSize: "46px",
                  fontWeight: 400,
                  lineHeight: "1.1",
                }}
              >
                прямо сейчас!
              </span>
            </h2>

            {/* Подзаголовок */}
            <p className="text-white/90 text-base md:text-lg leading-snug mb-8 font-normal max-w-[480px]">
              Не откладывайте профилактику и лечение заболеваний питомца,
              оставьте заявку и наш менеджер свяжется с вами
            </p>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Инпут Имя */}
              <div>
                <input
                  type="text"
                  placeholder="ВАШЕ ИМЯ"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border border-white/60 rounded-xl px-5 py-3.5 text-white placeholder-white/80 uppercase text-xs sm:text-sm tracking-wider outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Инпут Телефон */}
              <div>
                <input
                  type="tel"
                  placeholder="ТЕЛЕФОН"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-transparent border border-white/60 rounded-xl px-5 py-3.5 text-white placeholder-white/80 uppercase text-xs sm:text-sm tracking-wider outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                className="w-full bg-[#f26522] hover:bg-[#e05512] text-white font-bold py-4 rounded-xl text-sm md:text-base uppercase tracking-wider transition-colors duration-200 mt-1 cursor-pointer shadow-md"
              >
                ОТПРАВИТЬ
              </button>

              {/* Мелкая подпись */}
              <p className="text-[10px] sm:text-[11px] text-white/70 text-left mt-1">
                *Нажимая на кнопку, вы соглашаетесь с политикой конфициальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
