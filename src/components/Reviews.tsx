"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Анна С.",
    text: "Лучшие хинкали в городе! Тесто тонкое, бульона много, мясо сочное. Доставили очень быстро, все было горячим. Теперь заказываем только здесь.",
    rating: 5,
  },
  {
    name: "Михаил В.",
    text: "Хачапури по-аджарски просто космос. Сыр тянется, корочка хрустит. Отдельное спасибо за упаковку — ничего не помялось и не остыло.",
    rating: 5,
  },
  {
    name: "Елена Р.",
    text: "Заказывали шашлык из баранины и пхали на праздник. Гости были в восторге! Мясо тает во рту, маринад отличный. Очень атмосферно и вкусно.",
    rating: 5,
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-wood-950 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">
            Отзывы гостей
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50">
            Что о нас говорят
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-wood-900 border border-wood-800 p-8 relative group hover:border-gold-500/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-wood-800 group-hover:text-gold-500/10 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-cream-200/80 italic mb-8 relative z-10 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-wood-800 rounded-full flex items-center justify-center font-serif font-bold text-gold-500">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-cream-50 font-serif">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
