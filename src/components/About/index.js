import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import TitleNavbar from "../TitleNavbar";
import {
  AboutContainer,
  AboutTextWrapper,
  AboutBodyWrapper,
  AboutText,
} from "./AboutElements";
const About = () => {
  return (
    <AboutContainer>
      <TitleNavbar title={"About Me"} />
      <AboutBodyWrapper>
        <AboutTextWrapper>
          <AboutText>
            I am a confident and self motivated full stack developer having
            hands-on experience in ReactJS, React Native and
            AngularJS.Accom1plished project works under minimal observations.I
            have understanding of modern UI and UX trends, and ability to build
            maintainable, scalable, and clean web solutions.
          </AboutText>
          <AboutText>
            About my education, I have a bachelor degree in electronics and
            communication engineering and have a diploma in software testing. I
            have worked as a manual tester for more than 1 year.
          </AboutText>
          <AboutText>
            I love to do creative work, I also make youtube videos in my free
            time. Learning new things never exhausts my mind. I believe that one
            should never be afraid to try something new because life gets boring
            when you stay within the limits of what you already know. I always
            learn from my mistake and believe in hard work because there really
            is no substitute for working hard. Willing to go an extra mile to
            reach goals and learn along the way. I possess a combination of
            skills and experiences that make me stand out from the crowd.
          </AboutText>
        </AboutTextWrapper>
      </AboutBodyWrapper>
    </AboutContainer>
  );
};

export default About;
