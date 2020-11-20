import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebSiteRights,
} from "./FooterElements";
const toggleHome = () => {
  scroll.scrollToTop();
};
const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinkContainer>
          {/* column 1 */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us </FooterLinkTitle>
              <FooterLink>
                <AiOutlineMail />
                <h4 style={{ display: "inline-block" }}>
                  variya.sonali19@gmail.com
                </h4>
              </FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testinomials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            {/* <FooterLinkItems>
              <FooterLinkTitle> Contatc </FooterLinkTitle>
              <FooterLink to="/signin">dghs</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testinomials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems> */}
          </FooterLinksWrapper>
          {/* colum-2 */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Aboutus </FooterLinkTitle>
              <FooterLink to="/signin">jhdsb</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testinomials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            {/* <FooterLinkItems>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems> */}
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome}>SV</SocialLogo>
            <WebSiteRights>
              SV&#xA9; {new Date().getFullYear()}
              All rights reserved
            </WebSiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
