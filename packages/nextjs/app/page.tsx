"use client";

import type { NextPage } from "next";
import HeroSection from "~~/components/home/HeroSection";
import AboutSection from "~~/components/home/AboutSection";
import OurOffers from "~~/components/home/OurOffers";
import OurProcess from "~~/components/home/OurProcess";

const Home: NextPage = () => {

  return (
    <main className="w-full flex flex-col overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <OurOffers />
      <OurProcess />
    </main>
  );
};

export default Home;
