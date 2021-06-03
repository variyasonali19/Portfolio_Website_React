import React from "react";
import { Button } from "../ButtonElements/ButtonElements";
// import { ReactComponent as SvgSmiley } from "../../Images/education.svg";
import {
  BtnWrap, Column1,
  Column2,


  Heading,



  Img, ImgWrap, InfoContainer,

  InfoRow, InfoWrapper,






  Subtitle, TextWrapper,
  TopLine
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
                      primary={primary}
                      btnDarkText={btnDarkText}
                    >
                      {buttonLabel}
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
