import React, { useState } from "react";
import video from "../../videos/video-1.mp4";
import { Button } from "../ButtonElements/ButtonElements";
import Typing from "../Animation/Typing";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const arrayText = ["Full stack developer", "singer", "youtuber", "dancer"];
  const onHover = () => {
    setHover(!hover);
    // alert("onhoverCalled" + hover);
  };
  return (
    <HeroContainer id="hero">
      <HeroBg>
        {/*to download video: https://www.pexels.com/search/videos/abstract/ */}
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        {/* for youtube video as background */}
        {/* <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/HpDvU32syKc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        {/* </VideoBg> */}
      </HeroBg>
      <HeroContent>
        <HeroP>Hi, I am</HeroP>
        <HeroH1>Sonali Variya</HeroH1>
        <Typing arrayText={arrayText} />
        <HeroBtnWrapper>
          <Button
            to="about"
            primary="true"
            dark="true"
            btnDarkText="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={-80}
          >
            About Me
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
