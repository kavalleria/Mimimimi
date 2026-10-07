import React from "react";

export default function HouseCall() {
  return (
    <section className="w-full bg-[#3d592b] px-6 md:px-12 py-8 md:py-12">

      <div
        className="relative w-full min-h-[922px] rounded-[20px] overflow-hidden p-8 sm:p-12 lg:p-[80px] flex flex-col justify-start"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, #68695d 0%, #515246 60%, #44453b 100%)",
        }}
      >

        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-left-bottom pointer-events-none z-0"
          style={{ backgroundImage: `url('/house-call-bg.png')` }}
        />

        <div className="relative z-10 w-full max-w-[480px] ml-auto flex flex-col text-white">

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.15] tracking-tight mb-4">
            Вызов врача на дом
          </h2>

          <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.3] text-white/90 mb-8 lg:mb-10">
            Вашему питомцу требуется неотложная помощь? Приедем в течение 40
            минут!
          </p>


          <div className="flex flex-col gap-4 w-full">

            <input
              type="text"
              placeholder="ВАШЕ ИМЯ"
              className="w-full h-[60px] bg-transparent border border-white/50 rounded-[12px] px-5 text-[14px] text-white placeholder-white/70 uppercase tracking-wider focus:outline-none focus:border-white transition-all"
            />


            <input
              type="tel"
              placeholder="ТЕЛЕФОН"
              className="w-full h-[60px] bg-transparent border border-white/50 rounded-[12px] px-5 text-[14px] text-white placeholder-white/70 uppercase tracking-wider focus:outline-none focus:border-white transition-all"
            />

            <button
              type="button"
              className="w-full h-[60px] bg-[#f15a24] hover:bg-[#e04d19] text-white font-medium rounded-[12px] uppercase tracking-wider text-[15px] transition-colors mt-1 cursor-pointer"
            >
              ОТПРАВИТЬ
            </button>

            <p className="text-[12px] text-white/70 mt-2 leading-tight">
              *Нажимая на кнопку, вы соглашаетесь с политикой
              конфиденциальности.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
