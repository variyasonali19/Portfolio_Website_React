import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import Projects from "../../components/Projects";
import Footer from "../../components/FooterSection";
import svg1 from "../../Images/svg-1.svg";
import svg2 from "../../Images/svg-2.svg";
import svg3 from "../../Images/svg-3.svg";
import svg4 from "../../Images/svg-4.svg";
import svg5 from "../../Images/svg-5.svg";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../../components/InfoSection/Data";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toggle = () => {
    // alert(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjTwo} logo={svg3} />
      <InfoSection {...homeObjOne} logo={svg4} />
      <InfoSection {...homeObjFour} logo={svg5} />
      {/* <InfoSection {...homeObjThree} logo={svg1} /> */}
      <Footer />
    </>
  );
};

export default Home;
