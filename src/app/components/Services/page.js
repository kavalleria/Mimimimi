import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

// Подключение локального шрифта Gogol
const gogol = localFont({
  src: "../../../../public/fonts/gogol_regular.otf",
  display: "swap",
});

export default function Services() {
  // Стили из Figma для основного текста заголовка
  const mainTitleStyle = {
    fontSize: "57px",
    lineHeight: "64px",
    letterSpacing: "-0.25px",
  };

  return (
    <section className="w-full bg-[#3d592b] relative overflow-hidden py-8 md:py-12 px-6 md:px-12 text-white font-sans">
      {/* Оранжевая закорючка слева */}
      <div className="absolute left-[-20px] top-[26%] sm:top-[28%] md:top-[30%] w-[380px] sm:w-[500px] md:w-[650px] lg:w-[720px] pointer-events-none select-none z-0 opacity-90">
        <Image
          src="/orange-scribble.svg"
          alt=""
          width={720}
          height={300}
          priority
          className="w-full h-auto object-contain object-left"
        />
      </div>

      {/* Контейнер растягивается на ровно 1400px, как и шапка */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Верхний блок: Плашка слева, заголовок по центру */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-6 md:mb-8">
          {/* Плашка "Услуги" выровнена по левому краю (по логотипу шапки) */}
          <div className="mb-4 md:mb-0 pt-2">
            <span className="inline-block px-6 py-2 rounded-full border border-white/80 text-white font-normal text-sm md:text-base tracking-wide bg-transparent">
              Услуги
            </span>
          </div>

          {/* Заголовок по центру */}
          <div className="text-center max-w-2xl lg:max-w-3xl mx-auto">
            <h2 className="font-bold text-white" style={mainTitleStyle}>
              Мы предоставляем <br />
              <span
                className={`${gogol.className} block text-white lowercase`}
                style={{
                  fontSize: "50px",
                  fontWeight: 400,
                  fontStyle: "normal",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  marginBottom: "-8px",
                }}
              >
                срочную качественную
              </span>
              <span
                className="block"
                style={{
                  marginTop: "-16px",
                  lineHeight: "110%",
                }}
              >
                медицинскую помощь <br />
                вашим питомцам
              </span>
            </h2>
          </div>

          {/* Пустой блок для баланса ширины при флексе */}
          <div className="hidden md:block w-[100px]" />
        </div>

        {/* Блок со стрелочками: выровнены по правому краю (по бургеру/кнопке) */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Назад"
              className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Вперед"
              className="w-11 h-11 rounded-full bg-white/30 hover:bg-white/40 transition-colors flex items-center justify-center text-white backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Сетка из 4-х карточек — растянута на всю ширину 1400px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 w-full">
          {/* 1. Инструментальная диагностика */}
          <div className="bg-[#e66226] rounded-[22px] p-6 h-[340px] sm:h-[360px] flex flex-col justify-between relative overflow-hidden text-white group cursor-pointer shadow-sm">
            <div className="relative z-20 w-12 h-12">
              <Image
                src="/icon-scalpel.svg"
                alt="Инструментальная диагностика"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <div
              className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url('/service-diagnostic.jpg')` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

            <h3 className="relative z-20 text-xl font-medium leading-snug">
              Инструментальная
              <br />
              диагностика
            </h3>
          </div>

          {/* 2. Лабораторные исследования */}
          <div className="bg-[#567042] rounded-[22px] p-6 h-[340px] sm:h-[360px] flex flex-col justify-between relative overflow-hidden text-white group cursor-pointer shadow-sm">
            <div className="relative z-20 w-12 h-12">
              <Image
                src="/icon-flask.svg"
                alt="Лабораторные исследования"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <div
              className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url('/service-lab.jpg')` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

            <h3 className="relative z-20 text-xl font-medium leading-snug">
              Лабораторные
              <br />
              исследования
            </h3>
          </div>

          {/* 3. Хирургия */}
          <div className="bg-[#5d6057] rounded-[22px] p-6 h-[340px] sm:h-[360px] flex flex-col justify-between relative overflow-hidden text-white group cursor-pointer shadow-sm">
            <div className="relative z-20 w-12 h-12">
              <Image
                src="/icon-plaster.svg"
                alt="Хирургия"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <div
              className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url('/service-surgery.jpg')` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

            <h3 className="relative z-20 text-xl font-medium leading-snug">
              Хирургия
            </h3>
          </div>

          {/* 4. Терапия и профилактика */}
          <div className="bg-[#567042] rounded-[22px] p-6 h-[340px] sm:h-[360px] flex flex-col justify-between relative overflow-hidden text-white group cursor-pointer shadow-sm">
            <div className="relative z-10 w-12 h-12">
              <Image
                src="/icon-stethoscope.svg"
                alt="Терапия и профилактика"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="relative z-10 text-xl font-medium leading-snug">
              Терапия
              <br />и профилактика
            </h3>
          </div>
        </div>

        {/* Кнопка "ВСЕ УСЛУГИ" */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            className="bg-[#e66226] hover:bg-[#d55318] text-white font-medium px-10 py-3.5 rounded-full transition-colors uppercase tracking-wider text-sm shadow-sm"
          >
            Все услуги
          </button>
        </div>
      </div>
    </section>
  );
}
