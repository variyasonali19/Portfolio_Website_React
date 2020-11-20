import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

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
              <FooterLinkTitle> CONTACT ME </FooterLinkTitle>
              <FooterLink>
                <AiOutlineMail style={{ marginRight: "15px" }} />
                <p style={{ display: "inline-block" }}>
                  variya.sonali19@gmail.com
                </p>
              </FooterLink>
              <FooterLink>
                <FiPhone style={{ marginRight: "15px" }} />
                <p style={{ display: "inline-block" }}>0469874433</p>
              </FooterLink>
              <FooterLink>
                <AiOutlineHome style={{ marginRight: "15px" }} />
                <p style={{ display: "inline-block" }}>
                  Broadview-5083,Adelaide
                </p>
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          {/* colum-2 */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> QUICK LINKS </FooterLinkTitle>
              <FooterLink to="/about">About Me</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/education">Education</FooterLink>
            </FooterLinkItems>
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
              <SocialIconLink
                href="https://www.facebook.com/profile.php?id=100006445681529"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCKM84xsQck3vetilaBI1QZA?view_as=subscriber"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/sonali-variya-07415786/"
                target="_blank"
                aria-label="Instagram"
              >
                <AiFillLinkedin />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
