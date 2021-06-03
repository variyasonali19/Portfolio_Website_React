import React from "react";
import { AboutMeDetailInfo } from "../InfoSection/Data";
import TitleNavbar from "../TitleNavbar";
import {
  AboutBodyWrapper, AboutContainer,


  AboutText, AboutTextWrapper
} from "./AboutElements";
const About = () => {
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
        </AboutTextWrapper>
      </AboutBodyWrapper>
    </AboutContainer>
  );
};

export default About;
