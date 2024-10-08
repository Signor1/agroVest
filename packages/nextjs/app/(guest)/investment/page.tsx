import type { NextPage } from "next";
import React from 'react'
import HeroSection from "../../../components/investment/HeroSection";
import InvestmentOffers from "../../../components/investment/InvestmentOffers";
import Opportunities from "../../../components/investment/Opportunities";
import OurProcess from "../../../components/investment/OurProcess";


const Investment: NextPage = () => {

    return (
        <main className="w-full flex flex-col overflow-x-hidden bg-lightgreen/[40%]">
            <HeroSection />
            <InvestmentOffers />
            <Opportunities />
            <OurProcess />
        </main>
    );
};

export default Investment;
