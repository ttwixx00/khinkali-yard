"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

type CheckoutStep = "cart" | "checkout" | "success";

export function Cart() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  const [step, setStep] = useState<CheckoutStep>("cart");

  // Form State
  const [formData, setFormData] = useState({
    street: "",
    house: "",
    floor: "",
    phone: "",
    time: "asap",
    payment: "card",
    comment: "",
  });

  const handleClose = () => {
    setIsCartOpen(false);
    setTimeout(() => setStep("cart"), 300); // reset after closing animation
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to the server here
    setStep("success");
    clearCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-wood-950/80 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-wood-900 border-l border-wood-800 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-wood-800">
              <div className="flex items-center gap-2 text-cream-50">
                {step === "checkout" && (
                  <button onClick={() => setStep("cart")} className="mr-2 hover:text-gold-500 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <ShoppingBag className="w-5 h-5" />
                <h2 className="font-serif text-xl font-bold">
                  {step === "cart" ? "Корзина" : step === "checkout" ? "Оформление заказа" : "Заказ принят"}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="text-cream-200 hover:text-gold-500 transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto flex flex-col">
              <AnimatePresence mode="wait">
                {step === "cart" && (
                  <motion.div
                    key="cart"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 flex flex-col gap-6 h-full"
                  >
                    {items.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-cream-200/50 gap-4">
                        <ShoppingBag className="w-16 h-16 opacity-20" />
                        <p>Ваша корзина пуста</p>
                        <button
                          onClick={handleClose}
                          className="mt-4 text-gold-500 hover:text-gold-400 border-b border-gold-500/30 pb-1"
                        >
                          Вернуться к меню
                        </button>
                      </div>
                    ) : (
                      items.map((item) => (
                        <motion.div
                          layout
                          key={item.id}
                          className="flex gap-4 bg-wood-950/50 p-3 rounded-lg border border-wood-800"
                        >
                          <div
                            className="w-20 h-20 bg-cover bg-center rounded-md"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-2">
                              <h3 className="font-serif text-cream-50 font-medium leading-tight text-sm">
                                {item.name}
                              </h3>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-wood-800 hover:text-burgundy-500 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <div className="flex items-center gap-3 bg-wood-900 border border-wood-800 rounded px-2 py-1">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="text-cream-200 hover:text-gold-500"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-sm font-medium text-cream-50 w-4 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="text-cream-200 hover:text-gold-500"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <span className="font-bold text-gold-500">
                                {item.price * item.quantity} ₽
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </motion.div>
                )}

                {step === "checkout" && (
                  <motion.div
                    key="checkout"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-6 h-full"
                  >
                    <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="flex flex-col gap-6">
                      
                      {/* Контакты */}
                      <div>
                        <h3 className="text-gold-500 text-sm uppercase tracking-wider mb-4 font-semibold">Контакты</h3>
                        <input
                          required
                          type="tel"
                          placeholder="Номер телефона *"
                          className="w-full bg-wood-950/50 border border-wood-800 text-cream-50 px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      {/* Адрес */}
                      <div>
                        <h3 className="text-gold-500 text-sm uppercase tracking-wider mb-4 font-semibold">Адрес доставки</h3>
                        <div className="flex flex-col gap-3">
                          <input
                            required
                            type="text"
                            placeholder="Улица *"
                            className="w-full bg-wood-950/50 border border-wood-800 text-cream-50 px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors"
                            value={formData.street}
                            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              required
                              type="text"
                              placeholder="Дом *"
                              className="w-full bg-wood-950/50 border border-wood-800 text-cream-50 px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors"
                              value={formData.house}
                              onChange={(e) => setFormData({ ...formData, house: e.target.value })}
                            />
                            <input
                              type="text"
                              placeholder="Этаж"
                              className="w-full bg-wood-950/50 border border-wood-800 text-cream-50 px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors"
                              value={formData.floor}
                              onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Детали */}
                      <div>
                        <h3 className="text-gold-500 text-sm uppercase tracking-wider mb-4 font-semibold">Детали заказа</h3>
                        <div className="flex flex-col gap-3">
                          <select
                            className="w-full bg-wood-950/50 border border-wood-800 text-cream-50 px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          >
                            <option value="asap">Как можно скорее</option>
                            <option value="time">Ко времени (укажите в комментарии)</option>
                          </select>

                          <select
                            className="w-full bg-wood-950/50 border border-wood-800 text-cream-50 px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                            value={formData.payment}
                            onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                          >
                            <option value="card">Картой курьеру / онлайн</option>
                            <option value="cash">Наличными при получении</option>
                          </select>

                          <textarea
                            placeholder="Комментарий к заказу"
                            rows={3}
                            className="w-full bg-wood-950/50 border border-wood-800 text-cream-50 px-4 py-3 rounded focus:outline-none focus:border-gold-500 transition-colors resize-none"
                            value={formData.comment}
                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                          />
                        </div>
                      </div>

                    </form>
                  </motion.div>
                )}

                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center p-6 gap-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-24 h-24 rounded-full bg-gold-500/20 flex items-center justify-center mb-4"
                    >
                      <CheckCircle2 className="w-12 h-12 text-gold-500" />
                    </motion.div>
                    <h2 className="font-serif text-3xl font-bold text-cream-50">Спасибо за заказ!</h2>
                    <p className="text-cream-200/70 text-lg">
                      Заявка принята, оператор наберет вам в ближайшее время для подтверждения.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-8 bg-wood-800 hover:bg-wood-700 text-cream-50 font-medium py-3 px-8 transition-colors rounded"
                    >
                      Закрыть корзину
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {step === "cart" && items.length > 0 && (
              <div className="p-6 border-t border-wood-800 bg-wood-950">
                <div className="flex justify-between items-center mb-6 text-lg">
                  <span className="text-cream-100 font-serif">Итого:</span>
                  <span className="text-gold-500 font-bold text-2xl">
                    {totalPrice} ₽
                  </span>
                </div>
                <button
                  onClick={() => setStep("checkout")}
                  className="w-full bg-gold-500 hover:bg-gold-400 text-wood-950 font-bold py-4 transition-colors"
                >
                  К оформлению
                </button>
              </div>
            )}

            {step === "checkout" && (
              <div className="p-6 border-t border-wood-800 bg-wood-950">
                <div className="flex justify-between items-center mb-6 text-lg">
                  <span className="text-cream-100 font-serif">К оплате:</span>
                  <span className="text-gold-500 font-bold text-2xl">
                    {totalPrice} ₽
                  </span>
                </div>
                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-wood-950 font-bold py-4 transition-colors"
                >
                  Оформить заказ
                </button>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
