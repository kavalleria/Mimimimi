import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
});

export default function About() {
  return (
    <section className="w-full bg-[#3d592b] relative overflow-hidden py-16 md:py-24 text-white min-h-[500px] flex items-center px-6 md:px-12">

      <div className="absolute bottom-0 left-0 w-[450px] sm:w-[600px] md:w-[750px] h-auto pointer-events-none opacity-80 select-none z-0">
        <Image
          src="/pattern-left.png"
          alt=""
          width={750}
          height={400}
          unoptimized
          className="w-full h-auto object-contain object-left-bottom"
        />
      </div>

      <div className="absolute top-0 right-0 w-[120px] sm:w-[160px] md:w-[200px] h-auto pointer-events-none opacity-80 select-none z-0">
        <Image
          src="/pattern-right.png"
          alt=""
          width={200}
          height={200}
          unoptimized
          className="w-full h-auto object-contain object-right-top"
        />
      </div>

      <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-start">

        <div className="md:col-span-3 lg:col-span-3 pt-1">
          <div className="inline-block px-5 py-1.5 rounded-full border border-white/70 text-white font-normal text-sm md:text-base tracking-wide">
            О клинике
          </div>
        </div>

        <div className="md:col-span-9 lg:col-span-8 flex flex-col items-start text-left mx-auto max-w-2xl">

          <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] font-bold leading-[1.12] tracking-tight mb-8">
            Страсть к профессии <br />
            <span
              className={`${caveat.className} font-normal text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] leading-[0.85] lowercase block my-1`}
            >
              и забота о животных —
            </span>
            основные принципы <br />
            нашей работы
          </h2>

          <p className="text-[20px] sm:text-[22px] md:text-[23px] text-white/90 font-normal leading-relaxed">
            Наша клиника открылась в 2023 году. <br />
            Специалисты клиники уделяют особое <br />
            внимание профилактике хронических <br />
            заболеваний и вакцинации
          </p>
        </div>
      </div>
    </section>
  );
}
