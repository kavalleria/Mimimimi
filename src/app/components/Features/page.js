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
          {/* Карточка: Современное оборудование */}
          <div className="bg-[#2d2f28] md:col-span-1 rounded-[20px] pt-[30px] pb-[30px] px-[20px] flex flex-col justify-between text-white relative overflow-hidden h-[450px]">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('/feature-equipment.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

            {/* Иконка оборудование */}
            <div className="relative z-20 w-16 h-16">
              <img
                src="/icon-equipment.svg"
                alt="Иконка оборудование"
                className="w-full h-full object-contain"
              />
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

          {/* Карточка: Хирургия 24/7 */}
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

          {/* Карточка: Экстренная помощь */}
          <div className="bg-[#2d2f28] md:col-span-1 rounded-[20px] pt-[30px] pb-[30px] px-[20px] flex flex-col justify-between text-white relative overflow-hidden h-[450px]">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('/feature-emergency.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

            {/* Иконка экстренная помощь */}
            <div className="relative z-20 w-16 h-16">
              <img
                src="/icon-emergency.svg"
                alt="Иконка экстренная помощь"
                className="w-full h-full object-contain"
              />
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

          {/* Карточка: Биохимический анализ */}
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

          {/* Карточка: Собственная база доноров */}
          <div className="bg-[#2d2f28] md:col-span-1 rounded-[20px] pt-[30px] pb-[30px] px-[20px] flex flex-col justify-between text-white relative overflow-hidden h-[450px]">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('/feature-donors.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

            {/* Иконка база доноров */}
            <div className="relative z-20 w-16 h-16">
              <img
                src="/icon-donors.svg"
                alt="Иконка база доноров"
                className="w-full h-full object-contain"
              />
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

          {/* Карточка: Постановка катетера */}
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

          {/* Карточка: Скот */}
          <div className="bg-[#617f4b] md:col-span-1 rounded-[20px] pt-[30px] pb-[30px] px-[20px] flex flex-col justify-between text-white relative overflow-hidden h-[450px]">
            {/* Иконка лечения скота */}
            <div className="relative z-10 w-16 h-16">
              <img
                src="/icon-livestock.svg"
                alt="Иконка лечения рогатого скота"
                className="w-full h-full object-contain"
              />
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
