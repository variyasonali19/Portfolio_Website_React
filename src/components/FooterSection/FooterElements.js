import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterContainer = styled.div`
  background-color: #101522;
  over-flow: hidden;
`;
export const FooterWrap = styled.div`
  // background-color: yellow;
  display: flex;
  padding: 48px 24px;
  flex-direction: column;
  // align-items: space-between;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLinkContainer = styled.div`
  // background-color: yellow;
  display: flex;
  // align-items: space-around;
  justify-content: space-around;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const FooterLinksWrapper = styled.div`
  // background-color: red;
  justify-content: center;
  display: flex;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  // width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  flex-direction: row;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    text-decoration: none;
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    font-size: 40px;
    justify-content: center;
    flex-direction: column;
  }
`;
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  &:hover {
    text-decoration: none;
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
export const WebSiteRights = styled.small`
  color: #fff;
  font-size: small;
  //   margin-bottom: 5px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
