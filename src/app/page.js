import React from "react";
import { Caveat } from "next/font/google";
import Header from "./components/Header/page";
import Promo from "./components/Promo/page";
import Promotions from "./components/Promotions/page";
import About from "./components/About/page";
import Features from "./components/Features/page";
import HouseCall from "./components/HouseCall/page";
import Services from "./components/Services/page";
import Specialists from "./components/Specialists/page";
import AppointmentForm from "./components/AppointmentForm/page";
import Contacts from "./components/Contacts/page";

const caveat = Caveat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative">
      <Header />
      <Promo />
      <Promotions />

      {/* Секция О клинике */}
      <section id="about">
        <About />
      </section>

      <Features />
      <HouseCall />

      {/* Секция Услуги */}
      <section id="services">
        <Services />
      </section>

      {/* Секция Врачи */}
      <section id="doctors">
        <Specialists />
      </section>

      {/* Форма записи */}
      <section id="appointment">
        <AppointmentForm />
      </section>

      {/* Секция Контакты */}
      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
}
