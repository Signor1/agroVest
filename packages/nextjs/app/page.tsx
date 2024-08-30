"use client";

import type { NextPage } from "next";
import HeroSection from "~~/components/home/HeroSection";
import AboutSection from "~~/components/home/AboutSection";

const Home: NextPage = () => {

  return (
    <main className="w-full flex flex-col overflow-x-hidden">
      <HeroSection />
      <AboutSection />
    </main>
  );
};

export default Home;
