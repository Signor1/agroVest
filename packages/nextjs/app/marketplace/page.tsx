import type { NextPage } from "next";
import React from 'react'
import HeroSection from "../../components/marketPlace/HeroSection";
import Categories from "../../components/marketPlace/Categories";
import Products from "../../components/marketPlace/Products";
import OurProcess from "../../components/marketPlace/OurProcess";

const MarketPlace: NextPage = () => {

    return (
        <main className="w-full flex flex-col overflow-x-hidden bg-lightgreen/[40%]">
            <HeroSection />
            <Categories />
            <Products />
            <OurProcess />
        </main>
    );
};

export default MarketPlace;
