import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import educationBg from "../../Images/educationBg.jpg";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin-top: -80px;
  height: 880px;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const ImageBg = styled.image`
  background-repeat: no-repeat;
  background-image: url(${educationBg});
  background-size: 300px 100px;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  top: 250px;
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  color: #fff;
  margin-top: 24px;

  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  // color:#fff;
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const InfoSectionWrapper = styled.div`
  // color:#fff;
  // margin-top: 32px;
  display: flex;
  flex-direction: row;
  // text-align: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding:25px 30px;
  
  @media screen and (max-width: 600px) {
  flex-direction: column;
  } 
  }
`;

export const InfoWrapper = styled.div`
  
  display: flex;
  flex-direction: column;

  }


`;
export const InfoTitle = styled.h2`
  font-size:18px;
  font-weight:500;

  }
`;
export const InfoText = styled.p`
   {
    font-size: 16px;
    color: gray;
    padding: 0;
  }
`;
export const MainTitle = styled.h1`
   {
    font-size: 20px;
    font-weight: 700;
    padding: 0;
  }
`;
export const TitleWrapper = styled.div`
   {
    margin-bottom: 12px;
    border-bottom: 2px solid rgb(1, 191, 113);
    display: flex;
  }
`;
export const TitleIcon = styled.div`
   {
    position: relative;
    /* Adjust these values accordingly */
    top: 0.2px;
    // left: 5px;
  }
`;
