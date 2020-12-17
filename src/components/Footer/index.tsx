import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
//
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>그냥 궁금할 땐</FooterLinkTitle>
              <FooterLink to='/About'>문의하기</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>정책이 궁금할 땐</FooterLinkTitle>
              <FooterLink to='/'>이용 약관</FooterLink>
              <FooterLink to='/'>개인정보 처리 방침</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>도움이 필요할 땐</FooterLinkTitle>
              <FooterLink to='/'>고객 센터</FooterLink>
              <FooterLink to='/'>자주 하는 질문</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>소셜 미디어</FooterLinkTitle>
              <FooterLink to='/'>인스타그램</FooterLink>
              <FooterLink to='/'>페이스북</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              fama's
            </SocialLogo>
            <WebsiteRights>fama's © 2020 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
