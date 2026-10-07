import React from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Promo() {
  return (
    <main className="relative flex-1 bg-[#f8981d] flex items-center justify-center overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/dog.jpg')",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pt-28 md:pt-36 pb-16 flex flex-col items-center">

        <h1 className="text-3xl sm:text-5xl md:text-[56px] font-bold leading-[1.15] tracking-tight mb-4 drop-shadow-sm">
          Доктор Тома — ветеринарная <br />
          клиника{" "}
          <span
            className={`${caveat.className} font-normal text-4xl sm:text-6xl md:text-[68px] leading-none lowercase tracking-wide inline-block -rotate-1`}
          >
            безусловной любви
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-[17px] text-white/95 max-w-2xl font-normal leading-relaxed mb-8 drop-shadow-sm">
          Полный спектр услуг: от диагностики{" "}
          <br className="hidden sm:inline" />и лечения, до медицинского
          сопровождения <br className="hidden sm:inline" />
          питомцев разного вида и возраста
        </p>

        <button className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-[#3d7042] hover:bg-[#325d36] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:scale-[1.01] cursor-pointer">
          <img
            src="/paw-icon.png"
            alt=""
            aria-hidden="true"
            className="w-5 h-5 object-contain"
          />
          <span>Записаться на прием</span>
        </button>
      </div>
    </main>
  );
}
