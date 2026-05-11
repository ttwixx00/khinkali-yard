"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const categories = [
  "Хинкали",
  "Хачапури",
  "Шашлык",
  "Супы",
  "Закуски",
  "Десерты",
  "Напитки",
];

const menuItems = [
  // Хинкали
  {
    id: "khinkali-1",
    name: "Хинкали классические",
    category: "Хинкали",
    description: "Традиционные грузинские хинкали с рубленой говядиной, свининой, свежей зеленью и специями. Подаются горячими.",
    price: 350,
    image: "/khinkali-yard/images/food_khinkali.png",
  },
  {
    id: "khinkali-2",
    name: "Хинкали с бараниной",
    category: "Хинкали",
    description: "Сочные хинкали с начинкой из рубленой баранины с добавлением грузинских специй и кинзы.",
    price: 390,
    image: "/khinkali-yard/images/food_khinkali.png",
  },
  {
    id: "khinkali-3",
    name: "Хинкали с сыром сулугуни",
    category: "Хинкали",
    description: "Нежные хинкали с тягучим грузинским сыром сулугуни. Идеально подходят для вегетарианцев.",
    price: 330,
    image: "/khinkali-yard/images/food_khinkali.png",
  },

  // Хачапури
  {
    id: "khachapuri-1",
    name: "Хачапури по-аджарски",
    category: "Хачапури",
    description: "Знаменитая лодочка из воздушного теста с начинкой из тягучего сыра сулугуни, фермерским маслом и желтком.",
    price: 550,
    image: "/khinkali-yard/images/food_khachapuri.png",
  },
  {
    id: "khachapuri-2",
    name: "Хачапури по-мегрельски",
    category: "Хачапури",
    description: "Круглый пирог с двойной порцией сыра: внутри и снаружи. Запекается до золотистой корочки.",
    price: 580,
    image: "/khinkali-yard/images/food_khachapuri.png",
  },
  {
    id: "khachapuri-3",
    name: "Хачапури на шампуре",
    category: "Хачапури",
    description: "Сыр сулугуни, обернутый в нежное слоеное тесто, запеченный на углях до хрустящей корочки.",
    price: 450,
    image: "/khinkali-yard/images/food_khachapuri.png",
  },

  // Шашлык
  {
    id: "shashlik-1",
    name: "Шашлык из баранины",
    category: "Шашлык",
    description: "Сочные кусочки маринованной баранины, обжаренные на углях. Подаются с маринованным луком и соусом сацебели.",
    price: 850,
    image: "/khinkali-yard/images/food_shashlik.png",
  },
  {
    id: "shashlik-2",
    name: "Шашлык из свиной шеи",
    category: "Шашлык",
    description: "Нежнейшая свинина, маринованная по секретному рецепту нашего шефа. Готовится на открытом огне.",
    price: 650,
    image: "/khinkali-yard/images/food_shashlik.png",
  },
  {
    id: "shashlik-3",
    name: "Куриный шашлык на кости",
    category: "Шашлык",
    description: "Сочные кусочки куриного бедра, запеченные до золотистой корочки. Подаются со свежей зеленью.",
    price: 550,
    image: "/khinkali-yard/images/food_shashlik.png",
  },

  // Супы
  {
    id: "soup-1",
    name: "Суп Харчо",
    category: "Супы",
    description: "Наваристый острый суп с говядиной, рисом, грецкими орехами и ароматными кавказскими специями.",
    price: 450,
    image: "/khinkali-yard/images/food_soup_kharcho.png",
  },
  {
    id: "soup-2",
    name: "Чихиртма",
    category: "Супы",
    description: "Традиционный грузинский куриный суп с легкой кислинкой, свежей зеленью и яичной заправкой.",
    price: 390,
    image: "/khinkali-yard/images/food_soup_kharcho.png",
  },
  {
    id: "soup-3",
    name: "Хаш",
    category: "Супы",
    description: "Наваристый бульон из говяжьих ножек, который томится всю ночь. Подается с чесноком.",
    price: 550,
    image: "/khinkali-yard/images/food_soup_kharcho.png",
  },

  // Закуски
  {
    id: "snack-1",
    name: "Пхали из шпината",
    category: "Закуски",
    description: "Традиционная закуска из шпината, перетертого с грецкими орехами, чесноком и зернами граната.",
    price: 380,
    image: "/khinkali-yard/images/food_snack_pkhali.png",
  },
  {
    id: "snack-2",
    name: "Рулетики из баклажанов",
    category: "Закуски",
    description: "Обжаренные ломтики баклажана с начинкой из грецкого ореха, чеснока и грузинских специй.",
    price: 420,
    image: "/khinkali-yard/images/food_snack_pkhali.png",
  },
  {
    id: "snack-3",
    name: "Сациви с курицей",
    category: "Закуски",
    description: "Нежное куриное филе под густым соусом из перетертых грецких орехов, чеснока и специй.",
    price: 480,
    image: "/khinkali-yard/images/food_snack_pkhali.png",
  },

  // Десерты
  {
    id: "dessert-1",
    name: "Чурчхела с грецким орехом",
    category: "Десерты",
    description: "Домашняя чурчхела из натурального виноградного сока с отборными грецкими орехами.",
    price: 250,
    image: "/khinkali-yard/images/food_dessert_churchkhela.png",
  },
  {
    id: "dessert-2",
    name: "Пахлава по-тбилисски",
    category: "Десерты",
    description: "Многослойный десерт из тончайшего теста с медом и обилием дробленых орехов.",
    price: 350,
    image: "/khinkali-yard/images/food_dessert_churchkhela.png",
  },
  {
    id: "dessert-3",
    name: "Пеламуши",
    category: "Десерты",
    description: "Традиционный десерт из загущенного виноградного сока, украшенный грецкими орехами.",
    price: 280,
    image: "/khinkali-yard/images/food_dessert_churchkhela.png",
  },

  // Напитки
  {
    id: "drink-1",
    name: "Вино Киндзмараули",
    category: "Напитки",
    description: "Красное полусладкое вино с ярким фруктовым ароматом и бархатистым вкусом. Бокал 150мл.",
    price: 400,
    image: "/khinkali-yard/images/drink_wine_glass.png",
  },
  {
    id: "drink-2",
    name: "Домашний лимонад Тархун",
    category: "Напитки",
    description: "Освежающий грузинский лимонад, приготовленный из свежего эстрагона с лимоном.",
    price: 250,
    image: "/khinkali-yard/images/drink_wine_glass.png",
  },
  {
    id: "drink-3",
    name: "Грузинский чай",
    category: "Напитки",
    description: "Ароматный черный чай из Гурии. Подается в чайнике 500мл с чабрецом и лимоном.",
    price: 300,
    image: "/khinkali-yard/images/drink_wine_glass.png",
  },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 bg-wood-950 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-burgundy-900 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gold-600 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">
            Наше меню
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50">
            Вкус Грузии
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 text-sm md:text-base transition-all duration-300 border-b-2",
                  activeCategory === category
                    ? "border-gold-500 text-gold-500 font-medium"
                    : "border-transparent text-cream-100 hover:text-cream-50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-wood-900 border border-wood-800 hover:border-gold-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-900 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-xl font-bold text-cream-50 pr-4">
                      {item.name}
                    </h3>
                    <span className="text-gold-500 font-bold text-lg whitespace-nowrap">
                      {item.price} ₽
                    </span>
                  </div>
                  <p className="text-cream-200/70 text-sm mb-6 flex-grow line-clamp-3">
                    {item.description}
                  </p>
                  <button
                    onClick={() => addToCart({ ...item })}
                    className="w-full flex items-center justify-center gap-2 bg-wood-800 hover:bg-gold-500 text-cream-50 hover:text-wood-950 py-3 transition-colors duration-300 group/btn"
                  >
                    <span>В корзину</span>
                    <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
