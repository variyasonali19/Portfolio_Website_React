import React from "react";
import { FaBook } from "react-icons/fa";
import TitleNavbar from "../TitleNavbar";
import {
  CafeBarista, EduObjFour, EduObjOne,

  EduObjThree, EduObjTwo
} from "./Data.js";
import "./Education.scss";
import {
  InfoContainer,
  InfoWrapper,
  MainTitle,
  TitleIcon,
  TitleWrapper
} from "./EducationElements";
import InfoSection from "./InfoSection";



function Education(props) {

  return (
    <>
      <TitleNavbar title={"Education"} />
      <InfoContainer>
        {/* colum 1 */}
        <InfoWrapper>
          <TitleWrapper>
            <TitleIcon>
              <FaBook
                style={{ fill: "rgb(1, 191, 113)", marginRight: "5px" }}
              />
            </TitleIcon>
            <MainTitle> Education</MainTitle>
          </TitleWrapper>
          <InfoSection {...EduObjOne} />
          <InfoSection {...EduObjTwo} />
          {/* <TitleWrapper>
            <TitleIcon>
              <FaBook
                style={{ fill: "rgb(1, 191, 113)", marginRight: "5px" }}
              />
            </TitleIcon>
            <MainTitle> Professional Experience</MainTitle>
          </TitleWrapper>
          <InfoSection {...EduObjEight} />
          <InfoSection {...EduObjNine} /> */}
        </InfoWrapper>
        {/* colum 2 */}
        <InfoWrapper>
          <TitleWrapper>
            <TitleIcon>
              <FaBook
                style={{ fill: "rgb(1, 191, 113)", marginRight: "5px" }}
              />
            </TitleIcon>
            <MainTitle> Certification</MainTitle>
          </TitleWrapper>
          <InfoSection {...EduObjThree} />
          <InfoSection {...EduObjFour} />
          <InfoSection {...CafeBarista} />
          {/* <TitleWrapper>
            <TitleIcon>
              <FaBook
                style={{ fill: "rgb(1, 191, 113)", marginRight: "5px" }}
              />
            </TitleIcon>
            <MainTitle> Volunteering</MainTitle>
          </TitleWrapper>
          <InfoSection {...EduObjSeven} />
          <InfoSection {...EduObjSix} />
          <InfoSection {...EduObjFive} /> */}
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default Education;
