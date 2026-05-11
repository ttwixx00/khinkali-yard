"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Leaf, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: <ChefHat className="w-10 h-10 text-gold-500" />,
    title: "Аутентичные рецепты",
    description: "Наш шеф-повар из Тбилиси готовит по старинным семейным рецептам, бережно сохраняя настоящий вкус."
  },
  {
    icon: <Leaf className="w-10 h-10 text-gold-500" />,
    title: "Свежие продукты",
    description: "Мы используем только фермерское мясо и свежайшие овощи. Специи привозим прямиком из Грузии."
  },
  {
    icon: <Clock className="w-10 h-10 text-gold-500" />,
    title: "Быстрая доставка",
    description: "Доставляем блюда горячими в специальных термосумках за 45-60 минут по всему городу."
  },
  {
    icon: <Heart className="w-10 h-10 text-gold-500" />,
    title: "Готовим с душой",
    description: "В каждое блюдо мы вкладываем частичку грузинского гостеприимства и любви к своему делу."
  }
];

export function Features() {
  return (
    <section id="about" className="py-24 bg-wood-900 border-t border-wood-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600 rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-burgundy-900 rounded-full blur-[150px] opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">
            Почему мы
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50">
            Секрет нашего вкуса
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-wood-800 border border-wood-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold-500 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-cream-50 mb-4">{feature.title}</h3>
              <p className="text-cream-200/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
