import type { NextPage } from "next";
import React from 'react'
import HeroSection from "../../components/investment/HeroSection";
import InvestmentOffers from "../../components/investment/InvestmentOffers";
import Opportunities from "../../components/investment/Opportunities";


const Investment: NextPage = () => {

    return (
        <main className="w-full flex flex-col overflow-x-hidden bg-lightgreen/[40%]">
            <HeroSection />
            <InvestmentOffers />
            <Opportunities />
        </main>
    );
};

export default Investment;
