"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
  return (
    <section className="w-full bg-[#3d592b] pb-12 md:pb-16 px-6 md:px-12 text-[#2b2b2b] font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Главная карточка */}
        <div className="relative bg-white rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-lg min-h-[520px]">
          {/* Левая часть: Логотип, контакты и подвал */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-14 flex flex-col justify-between z-10 bg-white">
            {/* 1. Логотип строго в левом верхнем углу */}
            <div className="relative w-[160px] sm:w-[180px] md:w-[200px] h-[100px] sm:h-[110px] md:h-[120px]">
              <Image
                src="/footer-logo.png"
                alt="Доктор Тома — Ветеринарная клиника"
                fill
                priority
                className="object-contain object-left-top"
              />
            </div>

            {/* 2. Информация о клинике (прижата к низу перед полоской) */}
            <div className="space-y-3 mt-auto pt-8">
              <p
                className="font-normal text-[#1f1f1f] leading-snug"
                style={{ fontSize: "18px" }}
              >
                Подольск,ул. Чайковского, 48А
              </p>

              <div>
                <a
                  href="tel:+79566794366"
                  className="font-bold text-[#1f1f1f] hover:text-[#f26522] transition-colors block"
                  style={{ fontSize: "18px" }}
                >
                  +7 (956) 679 43 66
                </a>
                <span
                  className="text-gray-400 font-normal block mt-1"
                  style={{ fontSize: "10px" }}
                >
                  Круглосуточно
                </span>
              </div>
            </div>

            {/* 3. Разделительная полоса и юридические ссылки */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-gray-400 font-normal">
                <Link
                  href="/offert"
                  className="hover:text-gray-600 transition-colors"
                >
                  Договор оферты
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-gray-600 transition-colors"
                >
                  Политика конфиденциальности
                </Link>
                <span className="text-gray-400">Доктор Тома</span>
              </div>
            </div>
          </div>

          {/* Правая часть: Интерактивная карта OpenStreetMap (гарантированно БЕЗ рекламы) */}
          <div className="w-full md:w-1/2 min-h-[380px] md:min-h-full relative bg-gray-100 overflow-hidden">
            <iframe
              title="Интерактивная карта проезда"
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.535833%2C55.426111%2C37.555833%2C55.436111&layer=mapnik&marker=55.431111%2C37.545833"
              width="100%"
              height="100%"
              frameBorder="0"
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
