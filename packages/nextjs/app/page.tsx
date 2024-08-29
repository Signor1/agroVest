"use client";

import type { NextPage } from "next";
import HeroSection from "~~/components/home/HeroSection";

const Home: NextPage = () => {

  return (
    <main className="w-full flex min-h-screen flex-col overflow-x-hidden">
      <HeroSection />
    </main>
  );
};

export default Home;
