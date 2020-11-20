import React, { useState } from "react";
import { Button } from "../ButtonElements/ButtonElements";
// import { ReactComponent as SvgSmiley } from "../../Images/education.svg";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
const InfoSection = ({
  onClickBtn,
  lightBg,
  dark,
  id,
  primary,
  imgStart,
  topLine,
  btnDarkText,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  routeForbtn,
  img,
  logo,
  alt,
}) => {
  const [clickToReveal, setClickToReveal] = useState(false);
  const [btnText, setBtnText] = useState(true);
  const onClickToReveal = () => {
    setClickToReveal(!clickToReveal);
    setBtnText(!btnText);
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {onClickBtn ? (
                    <Button
                      onClick={() => {
                        openInNewTab(
                          "https://github.com/variyasonali19?tab=repositories"
                        );
                      }}
                      // onClick={onClickToReveal}
                      primary={primary}
                      btnDarkText={btnDarkText}
                    >
                      {buttonLabel}
                      {/* {btnText ? "Click to reveal" : "Hide"} */}
                    </Button>
                  ) : (
                    <Button
                      to={routeForbtn}
                      primary={primary}
                      btnDarkText={btnDarkText}
                    >
                      {buttonLabel}
                    </Button>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={logo} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
