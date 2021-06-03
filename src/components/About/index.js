import React from "react";
import { AboutMeDetailInfo } from "../InfoSection/Data";
import TitleNavbar from "../TitleNavbar";
import {
  AboutBodyWrapper, AboutContainer,
  AboutText, AboutTextWrapper
} from "./AboutElements";
import Pdf from "../../assets/Sonali-Variya_Front-End-Developer.pdf";

const About = () => {
  const onResumeClick = () => {
    window.open(Pdf);
  };
  return (
    <AboutContainer>
      <TitleNavbar title={AboutMeDetailInfo.title} />
      <AboutBodyWrapper>
        <AboutTextWrapper>
          {AboutMeDetailInfo.detailInfo.map(AboutMeDetailItem => (
            <AboutText style={{}}>
              {Object.values(AboutMeDetailItem)}
            </AboutText>
          ))}
           <AboutText>
            {" "}
            To know more about me you could take a look at my{" "}
            <span
              onClick={onResumeClick}
              style={{ cursor: "pointer", color: "rgb(1,191,113)" }}
            >
              Resume.
            </span>
          </AboutText>
        </AboutTextWrapper>
      </AboutBodyWrapper>
    </AboutContainer>
  );
};

export default About;
