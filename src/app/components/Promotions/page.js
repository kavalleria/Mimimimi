import React from "react";

export default function Promotions() {
  const promotionsList = [
    {
      id: 1,
      title: (
        <>
          <span className="font-semibold text-lg sm:text-xl block mb-1">
            -15%
          </span>
          На первый прием
        </>
      ),
      image: "/promo-1.jpg",
    },
    {
      id: 2,
      title: "Скидка волонтерам на услуги клиники 15% на бездомных животных",
      bgColor: "bg-[#d86d27]",
      image: "/promo-2.jpg",
    },
    {
      id: 3,
      title: "Каждую пятницу стерилизация кошки от 2250₽, вместо 3500₽",
      image: "/promo-3.jpg",
    },
  ];

  return (

    <div className="w-full relative z-20 bg-[#FDB200]">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#3d592b] pointer-events-none" />

      <section className="relative z-10 w-full">
        <div className="w-full bg-white rounded-[32px] md:rounded-[44px] px-6 md:px-12 py-8 sm:py-10 shadow-lg">

          <div className="w-full">
            <div className="flex items-center justify-between mb-8 w-full">
              <div className="px-5 py-2 rounded-full border border-[#3d7042] text-[#3d7042] font-medium text-xs sm:text-sm">
                Акции декабря
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Предыдущая акция"
                  className="w-10 h-10 rounded-full bg-[#3d7042]/30 hover:bg-[#3d7042] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 stroke-current fill-none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Следующая акция"
                  className="w-10 h-10 rounded-full bg-[#3d7042] hover:bg-[#325d36] text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm"
                >
                  <svg
                    className="w-5 h-5 stroke-current fill-none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full">
              {promotionsList.map((promo) => (
                <div
                  key={promo.id}
                  className={`relative rounded-2xl md:rounded-3xl overflow-hidden h-[360px] sm:h-[400px] flex flex-col justify-end p-6 text-white shadow-sm w-full ${
                    promo.bgColor || "bg-[#5f6358]"
                  }`}
                >
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${promo.image}')` }}
                  />

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="relative z-20 text-sm sm:text-base font-normal leading-snug w-full">
                    {promo.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
