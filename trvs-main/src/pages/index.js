import React, { useState } from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import HeroSection from "components/HeroSection";
import InfoSection from "components/InfoSection";
import { homeObjOne, homeObjTwo } from "components/InfoSection/Data";
import Services from "components/Services";
import Footer from "components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} showNavMenu={showNavMenu} />
      <Navbar toggle={toggle} showNavMenu={showNavMenu} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;


