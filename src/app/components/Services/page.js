import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Services() {
  return (
    <section className="w-full bg-[#4a6138] relative overflow-hidden py-12 md:py-16 text-white px-4 sm:px-8 lg:px-16 font-sans">

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

      <div className="max-w-[1400px] mx-auto relative z-10">

        <div className="relative flex flex-col md:flex-row items-start justify-between mb-8 md:mb-12 gap-6">

          <div className="pt-2">
            <span className="inline-block px-6 py-2 rounded-full border border-white/80 text-white font-normal text-sm md:text-base tracking-wide bg-transparent">
              Услуги
            </span>
          </div>

          <div className="text-center mx-auto max-w-2xl lg:max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold leading-[1.15] tracking-tight text-white">
              Мы предоставляем <br />
              <span
                className={`${caveat.className} font-normal text-4xl sm:text-5xl md:text-[58px] lg:text-[64px] leading-[0.85] lowercase block my-1 text-white`}
              >
                срочную качественную
              </span>
              медицинскую помощь <br />
              вашим питомцам
            </h2>
          </div>

          <div className="flex items-center gap-2 self-end md:self-center pt-2">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">

          <div className="bg-[#e66226] rounded-[22px] p-6 h-[340px] sm:h-[360px] flex flex-col justify-between relative overflow-hidden text-white group cursor-pointer shadow-sm">
            <div className="relative z-20 w-8 h-8 opacity-90">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M3 21l8-8M11 13l4-4M15 9l3-3M18 6l2 2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M3 21h5" strokeLinecap="round" />
              </svg>
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

          <div className="bg-[#567042] rounded-[22px] p-6 h-[340px] sm:h-[360px] flex flex-col justify-between relative overflow-hidden text-white group cursor-pointer shadow-sm">
            <div className="relative z-20 w-8 h-8 opacity-90">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M9 3h6M10 3v6l-4.5 8.25A2 2 0 007.24 20h9.52a2 2 0 001.74-2.75L14 9V3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M8.5 14h7" strokeLinecap="round" />
              </svg>
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

          <div className="bg-[#5d6057] rounded-[22px] p-6 h-[340px] sm:h-[360px] flex flex-col justify-between relative overflow-hidden text-white group cursor-pointer shadow-sm">
            <div className="relative z-20 w-8 h-8 opacity-90">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect
                  x="3"
                  y="7"
                  width="18"
                  height="10"
                  rx="3"
                  transform="rotate(-30 12 12)"
                />
                <path d="M10 12h4M12 10v4" strokeLinecap="round" />
              </svg>
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

          <div className="bg-[#9DAD98] rounded-[22px] p-6 h-[340px] sm:h-[360px] flex flex-col justify-between relative overflow-hidden text-white group cursor-pointer shadow-sm">
            <div className="relative z-10 w-8 h-8 opacity-90">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M6 3v5a6 6 0 0012 0V3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14v3a3 3 0 003 3h1a2 2 0 100-4h-1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="6" cy="3" r="1" fill="currentColor" />
                <circle cx="18" cy="3" r="1" fill="currentColor" />
              </svg>
            </div>

            <h3 className="relative z-10 text-xl font-medium leading-snug">
              Терапия
              <br />и профилактика
            </h3>
          </div>
        </div>

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
