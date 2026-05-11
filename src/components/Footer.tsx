"use client";

import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-wood-950 border-t border-wood-800 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold text-cream-50 mb-6">
              Хинкальный <span className="text-gold-500">дворик</span>
            </span>
            <p className="text-cream-200/70 text-sm leading-relaxed mb-8">
              Премиальная доставка настоящей грузинской кухни. Мы бережно храним традиции и готовим с любовью, чтобы каждый кусочек переносил вас в солнечную Грузию.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold text-cream-50 mb-6">Контакты</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-cream-200/70">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>г. Москва, ул. Грузинский Вал, д. 11</span>
              </li>
              <li className="flex items-center gap-3 text-cream-200/70">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="tel:+74951234567" className="hover:text-gold-500 transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-start gap-3 text-cream-200/70">
                <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Ежедневно:</span>
                  <span className="text-cream-50 font-medium">10:00 – 23:00</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="font-serif text-xl font-bold text-cream-50 mb-6">Меню</h4>
            <ul className="flex flex-col gap-3">
              {['Хинкали', 'Хачапури', 'Шашлык', 'Супы', 'Десерты'].map((item) => (
                <li key={item}>
                  <a href="#menu" className="text-cream-200/70 hover:text-gold-500 transition-colors relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-wood-800 hover:before:bg-gold-500 before:transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-bold text-cream-50 mb-6">Рассылка</h4>
            <p className="text-cream-200/70 text-sm mb-4">
              Подпишитесь, чтобы первыми узнавать о новых блюдах и секретных акциях.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Ваш E-mail"
                className="bg-wood-900 border border-wood-800 text-cream-50 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button className="bg-gold-500 hover:bg-gold-400 text-wood-950 font-medium py-3 transition-colors">
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-wood-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream-200/50">
          <p>© {new Date().getFullYear()} Хинкальный дворик. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream-200 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-cream-200 transition-colors">Условия доставки</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
