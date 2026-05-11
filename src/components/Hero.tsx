"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax/Scale effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero_georgian_restaurant.png')",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-wood-950/80 via-wood-950/50 to-wood-950/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gold-500 uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6 block">
            Доставка еды премиум-класса
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream-50 mb-6 drop-shadow-xl">
            Хинкальный дворик
          </h1>
          <p className="text-cream-100 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
            Настоящая грузинская кухня с доставкой прямо к вашему столу. Вкус, атмосфера и традиции в каждом блюде.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#menu"
            className="group flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-wood-950 px-8 py-4 rounded-none font-medium transition-all duration-300 w-full sm:w-auto"
          >
            Смотреть меню
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#menu"
            className="group flex items-center justify-center gap-2 bg-wood-950/50 hover:bg-wood-900 border border-gold-500/30 hover:border-gold-500 text-cream-50 px-8 py-4 rounded-none font-medium transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            Заказать доставку
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-100/50 hover:text-cream-50 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Вниз</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
