import React from 'react';
import styled from 'styled-components';
import logo1 from './assets/images/HeroSection/logo1.png';
import logo2 from './assets/images/HeroSection/logo2.png';
import logo3 from './assets/images/HeroSection/logo3.png';
import logo4 from './assets/images/HeroSection/logo4.png';
import logo5 from './assets/images/HeroSection/logo5.png';
// import BV from './assets/videos/bv.mp4';
import BV from './assets/videos/footer1.mp4';

const HeroSectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
`;

const MainHeading = styled.h1`
  color: Orange;
  font-size: 48px;
  font-family: System-ui;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
`;

const ConsultNowButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
`;

const LogoLinkContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  position: relative;
  bottom: -100px;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 60px;
  text-decoration: none;
  color: #ffffff;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <BackgroundVideo autoPlay muted loop>
        <source src={BV} type="video/mp4" />
      </BackgroundVideo>
      <ContentContainer>
        <MainHeading>Welcome to Astrology World</MainHeading>
        <SubHeading>Explore the mysteries of the stars and discover your true destiny.</SubHeading>
        <ConsultNowButton>Consult Now</ConsultNowButton>
        <LogoLinkContainer>
          <LogoLink href="#">
            <img src={logo1} alt="Logo 1" />
            24 X 7 Customer Support
          </LogoLink>
          <LogoLink href="#">
            <img src={logo2} alt="Logo 2" />
            100% Refund if Unsatisfied
          </LogoLink>
          <LogoLink href="#">
            <img src={logo3} alt="Logo 3" />
            Private & Confidential
          </LogoLink>
          <LogoLink href="#">
            <img src={logo4} alt="Logo 4" />
            Verified Astrologer
          </LogoLink>
          <LogoLink href="#">
            <img src={logo5} alt="Logo 5" />
            Secure Payment
          </LogoLink>
        </LogoLinkContainer>
      </ContentContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
