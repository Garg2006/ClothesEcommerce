import React from "react";
import HeroSection from "../../components/HomePageComponent/HeroSection";
import LatestCollection from "../../components/HomePageComponent/LatestCollection";
import BestSeller from "../../components/HomePageComponent/BestSeller";
import Facilities from "../../components/HomePageComponent/Facilities";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div>
        <HeroSection />
        <LatestCollection />
        <BestSeller />
        <Facilities />
        <Subscribe />
        <Footer />
    </div>
  );
};

export default Home;
