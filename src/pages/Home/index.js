import React, { useEffect, useState } from "react";
import Footer from "../../components/FooterSection";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import {
  aboutMeInformation, educationInformation, projectInformation,professionalExperience
} from "../../components/InfoSection/Data";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import svg3 from "../../Images/svg-3.svg";
import svg4 from "../../Images/svg-4.svg";
import svg5 from "../../Images/svg-5.svg";
import experience from "../../Images/experience.svg";

require("../../Images/svg-1.svg")
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // toggle drawer
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/*drawer for screen width less than 769px  */}
      <Sidebar isOpen={isOpen} toggleNavbar={toggleNavbar} />
      {/*nav bar for screen width grater than 768px  */}
      <Navbar toggleNavbar={toggleNavbar} />
      <HeroSection />
      <InfoSection {...professionalExperience} logo={experience} />
      <InfoSection {...projectInformation} logo={svg4} />
      <InfoSection {...educationInformation} logo={svg3} />
      <InfoSection {...aboutMeInformation} logo={svg5} />
      <Footer />
    </>
  );
};

export default Home;
