import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

// Подключение локального шрифта Gogol
const gogol = localFont({
  src: "../../../../public/fonts/gogol_regular.otf",
  display: "swap",
});

// Данные врачей
const specialists = [
  {
    id: 1,
    name: "Ласточкина Татьяна\nЕвгеньевна",
    specialty: "Терапевт, хирург, стоматолог",
    image: "/doctor-lastochkina.jpg",
  },
  {
    id: 2,
    name: "Журавлев Игорь\nНиколаевич",
    specialty: "Терапевт, хирург, стоматолог",
    image: "/doctor-zhuravlev.jpg",
  },
  {
    id: 3,
    name: "Рябова Ирина\nВладимировна",
    specialty: "Терапевт, хирург, стоматолог",
    image: "/doctor-ryabova.jpg",
  },
];

export default function Specialists() {
  const mainTitleStyle = {
    fontSize: "52px",
    lineHeight: "58px",
    letterSpacing: "-0.25px",
  };

  return (
    <section className="w-full bg-[#3d592b] relative overflow-hidden py-8 md:py-12 px-6 md:px-12 text-white font-sans">
      {/* Декоративные росчерки/линии */}
      <div className="absolute left-[-10px] top-[15%] w-[280px] sm:w-[350px] md:w-[420px] pointer-events-none select-none z-0 opacity-40">
        <svg
          viewBox="0 0 400 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M 10 100 C 120 10, 280 180, 390 80"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <path
            d="M 30 140 C 150 50, 250 160, 370 110"
            stroke="white"
            strokeWidth="1"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Основной оберточный блок на 100% ширины хедера */}
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        {/* Верхний блок: Плашка слева, Заголовок строго по центру */}
        <div className="relative flex flex-col md:flex-row items-start justify-center mb-8 md:mb-12 w-full">
          {/* Плашка "Специалисты" прижата к левому краю */}
          <div className="md:absolute md:left-0 md:top-2 mb-6 md:mb-0">
            <span className="inline-block px-6 py-2 rounded-full border border-white/80 text-white font-normal text-sm md:text-base tracking-wide bg-transparent">
              Специалисты
            </span>
          </div>

          {/* Заголовок строго по центру блока */}
          <div className="text-left w-full max-w-2xl lg:max-w-3xl">
            <h2
              className="font-bold text-white text-left"
              style={mainTitleStyle}
            >
              Каждый из наших врачей <br />
              <span
                className={`${gogol.className} block text-white lowercase text-left`}
                style={{
                  fontSize: "48px",
                  fontWeight: 400,
                  lineHeight: "100%",
                  marginTop: "-4px",
                  marginBottom: "-4px",
                }}
              >
                имеет опыт работы
              </span>
              <span className="block text-left">не менее 7 лет</span>
            </h2>
          </div>
        </div>

        {/* Сетка карточек — максимальное растяжение w-full */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {specialists.map((doc) => (
            <div
              key={doc.id}
              className="w-full relative rounded-[26px] overflow-hidden h-[460px] sm:h-[500px] md:h-[480px] lg:h-[520px] flex flex-col justify-end p-6 group cursor-pointer shadow-md bg-neutral-800"
            >
              {/* Фотография */}
              <Image
                src={doc.image}
                alt={doc.name.replace("\n", " ")}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 z-0"
              />

              {/* Тёмный градиент снизу */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

              {/* Текст */}
              <div className="relative z-20 text-white w-full">
                <h3
                  className="font-bold leading-tight mb-2 whitespace-pre-line tracking-tight"
                  style={{ fontSize: "32px", lineHeight: "1.15" }}
                >
                  {doc.name}
                </h3>
                <p
                  className="text-white/80 font-normal"
                  style={{ fontSize: "18px", lineHeight: "1.3" }}
                >
                  {doc.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
