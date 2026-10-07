import React from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
});

export default function Features() {
  return (
    <section className="w-full bg-[#3d592b] pt-8 pb-4 px-6 md:px-12 relative">

      <div className="w-full">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] w-full">

          <div className="bg-[#2d2f28] md:col-span-1 rounded-[20px] pt-[30px] pb-[30px] px-[20px] flex flex-col justify-between text-white relative overflow-hidden h-[450px]">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('/feature-equipment.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

            <div className="relative z-20 w-16 h-16">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-white"
              >
                <rect
                  x="6"
                  y="10"
                  width="52"
                  height="36"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path
                  d="M32 46V54M22 54H42"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="32"
                  cy="30"
                  r="4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="25" cy="24" r="1.8" fill="currentColor" />
                <circle cx="29.5" cy="21" r="1.8" fill="currentColor" />
                <circle cx="34.5" cy="21" r="1.8" fill="currentColor" />
                <circle cx="39" cy="24" r="1.8" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-20 flex flex-col gap-3">
              <h3 className="text-2xl font-semibold leading-snug">
                Современное
                <br />
                оборудование
              </h3>
              <p className="text-base text-white/90 font-normal leading-normal">
                Проводим диагностику и лечение пациентов на самом современном
                оборудовании
              </p>
            </div>
          </div>

          <div className="md:col-span-2 bg-[#2d2f28] rounded-[20px] pt-[30px] pb-[30px] px-[20px] text-white relative overflow-hidden h-[450px] flex flex-col justify-between">
            <div
              className="absolute inset-0 bg-cover bg-right sm:bg-center z-0"
              style={{ backgroundImage: `url('/feature-surgery.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />

            <div className="relative z-20 flex justify-between items-start">
              <h3 className="text-2xl font-semibold">Хирургия 24/7</h3>
              <span className="bg-white text-black text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
                Только у нас
              </span>
            </div>

            <p className="relative z-20 text-base text-white/90 max-w-sm font-normal leading-normal">
              Выполняем плановые, срочные и экстренные операции любой сложности
              круглосуточно
            </p>
          </div>

          <div className="bg-[#2d2f28] md:col-span-1 rounded-[20px] pt-[30px] pb-[30px] px-[20px] flex flex-col justify-between text-white relative overflow-hidden h-[450px]">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('/feature-emergency.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

            <div className="relative z-20 w-16 h-16">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-white"
              >
                <circle
                  cx="28"
                  cy="36"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path
                  d="M22 18L16 12M38 14L44 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="28" cy="38" r="3.5" fill="currentColor" />
                <circle cx="21" cy="32" r="1.5" fill="currentColor" />
                <circle cx="24.5" cy="29" r="1.5" fill="currentColor" />
                <circle cx="31.5" cy="29" r="1.5" fill="currentColor" />
                <circle cx="35" cy="32" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-20 flex flex-col gap-3">
              <h3 className="text-2xl font-semibold leading-snug">
                Экстренная
                <br />
                помощь
              </h3>
              <p className="text-base text-white/90 font-normal leading-normal">
                Оперативно принимаем, оперируем и лечим экстренного больного вне
                очереди
              </p>
            </div>
          </div>

          <div className="bg-[#e85527] md:col-span-1 rounded-[20px] pt-[30px] pb-[30px] px-[20px] flex flex-col justify-between text-white relative overflow-hidden h-[450px]">
            <div className="relative z-10 flex flex-col">
              <h3 className="text-2xl font-semibold leading-tight">
                Биохимический
                <br />
                анализ крови
              </h3>
              <div
                className={`${caveat.className} text-4xl font-normal mt-1.5 text-white`}
              >
                за 15 минут!
              </div>
            </div>

            <p className="relative z-10 text-base text-white/95 font-normal leading-normal">
              Результаты анализов в кратчайшие сроки. Количество показателей
              можно выбрать
            </p>
          </div>

          <div className="bg-[#2d2f28] md:col-span-1 rounded-[20px] pt-[30px] pb-[30px] px-[20px] flex flex-col justify-between text-white relative overflow-hidden h-[450px]">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('/feature-donors.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

            <div className="relative z-20 w-16 h-16">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-white"
              >
                <rect
                  x="18"
                  y="10"
                  width="28"
                  height="42"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path
                  d="M26 10V6H38V10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path
                  d="M26 30H38M32 24V36"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="23"
                  cy="21"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="18" cy="17" r="1.2" fill="currentColor" />
                <circle cx="21" cy="14" r="1.2" fill="currentColor" />
                <circle cx="25" cy="14" r="1.2" fill="currentColor" />
                <circle cx="28" cy="17" r="1.2" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-20 flex flex-col gap-3">
              <h3 className="text-2xl font-semibold leading-snug">
                Собственная
                <br />
                база доноров
              </h3>
              <p className="text-base text-white/90 font-normal leading-normal">
                Всегда в наличии цельная кровь, эритроцитарная масса, плазма
                крови кошек и собак
              </p>
            </div>
          </div>

          <div className="md:col-span-2 bg-[#2d2f28] rounded-[20px] pt-[30px] pb-[30px] px-[20px] text-white relative overflow-hidden h-[450px] flex flex-col justify-between">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('/feature-catheter.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />

            <div className="relative z-20 flex justify-between items-start">
              <h3 className="text-2xl font-semibold max-w-xs leading-snug">
                Постановка катетера
                <br />в яремную вену
              </h3>
              <span className="bg-white text-black text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
                Только у нас
              </span>
            </div>

            <p className="relative z-20 text-base text-white/90 max-w-md font-normal leading-normal">
              Поставим катетер в яремную вену вашему питомцу с максимальной
              осторожностью
            </p>
          </div>

          <div className="bg-[#617f4b] md:col-span-1 rounded-[20px] pt-[30px] pb-[30px] px-[20px] flex flex-col justify-between text-white relative overflow-hidden h-[450px]">
            <div className="relative z-10 w-16 h-16">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-white"
              >
                <path
                  d="M22 20C18 12, 10 14, 10 20C16 22, 20 26, 22 30"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M42 20C46 12, 54 14, 54 20C48 22, 44 26, 42 30"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 30 C20 44, 44 44, 44 30 C44 24, 20 24, 20 30 Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle cx="27" cy="32" r="2" fill="currentColor" />
                <circle cx="37" cy="32" r="2" fill="currentColor" />
                <path
                  d="M29 38 Q32 41, 35 38"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="text-2xl font-semibold leading-snug">
                Лечение, хирургия
                <br />
                мелкого рогатого
                <br />
                скота
              </h3>
              <p className="text-base text-white/90 font-normal leading-normal">
                Успешно лечим, оперируем лошадей и остальных
                сельскохозяйственных животных
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center pt-6 pb-2 pointer-events-none select-none">
        <img
          src="/scribble-divider.svg"
          alt=""
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>
    </section>
  );
}
