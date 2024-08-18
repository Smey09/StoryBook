import React from "react";
import { BackgroundGradientAnimation } from "./components/Atomic/Bg-animations";
import HomePage from "./Pages/home/HomePage"; // Adjust path if necessary

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            <HomePage />
          </p>
        </div>
      </BackgroundGradientAnimation>
    </main>
  );
}
