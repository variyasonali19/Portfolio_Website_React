import React, { useState } from "react";
// //import for styling
import { BsFillCaretDownFill } from "react-icons/bs";
import "./Education.scss";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

// import screens
import Button from "../Button/Button";
import Typing from "../Animation/Typing";
import TitleNavbar from "../TitleNavbar";
import {
  EduObjOne,
  EduObjTwo,
  EduObjThree,
  EduObjFour,
  EduObjSeven,
  EduObjSix,
  EduObjFive,
  EduObjNine,
  EduObjEight,
} from "./Data.js";
// import packages
import { Link, animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux"; //connect app to redux
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import InfoSection from "./InfoSection";
import { FaBook } from "react-icons/fa";

import {
  InfoSectionWrapper,
  InfoContainer,
  InfoWrapper,
  InfoTitle,
  InfoText,
  MainTitle,
  TitleIcon,
  TitleWrapper,
} from "./EducationElements";

function Education(props) {
  const [displayLi, setDisplayLi] = useState(false);
  const toggleLink = () => {
    setDisplayLi(!displayLi);
  };
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
          <TitleWrapper>
            <TitleIcon>
              <FaBook
                style={{ fill: "rgb(1, 191, 113)", marginRight: "5px" }}
              />
            </TitleIcon>
            <MainTitle> Professional Experience</MainTitle>
          </TitleWrapper>
          <InfoSection {...EduObjEight} />
          <InfoSection {...EduObjNine} />
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
          <TitleWrapper>
            <TitleIcon>
              <FaBook
                style={{ fill: "rgb(1, 191, 113)", marginRight: "5px" }}
              />
            </TitleIcon>
            <MainTitle> Volunteering</MainTitle>
          </TitleWrapper>
          <InfoSection {...EduObjSeven} />
          <InfoSection {...EduObjSix} />
          <InfoSection {...EduObjFive} />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default Education;
