import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Features } from "@/components/Features";
import { Reviews } from "@/components/Reviews";
import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Menu />
        <Features />
        <Reviews />
      </main>
      <Cart />
      <Footer />
    </>
  );
}
