import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Хинкальный дворик | Премиум доставка грузинской кухни",
  description: "Настоящая грузинская кухня с доставкой прямо к вашему столу. Заказывайте хинкали, хачапури, шашлык и другие блюда.",
  openGraph: {
    title: "Хинкальный дворик | Премиум доставка",
    description: "Настоящая грузинская кухня с доставкой прямо к вашему столу.",
    images: ["/images/hero_georgian_restaurant.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-wood-950 text-cream-50">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
