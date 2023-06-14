import React from "react";
import styled from "styled-components";

import Guru from "./assets/images/HeroSection/guru.png";
import Facebook from "./assets/images/SocialIcons/facebook.png";
import Instagram from "./assets/images/SocialIcons/instagram.png";
import Twitter from "./assets/images/SocialIcons/twitter.png";
import YouTube from "./assets/images/SocialIcons/youtube.png";
import PayPal from "./assets/images/SocialIcons/paypal.png";
import GooglePay from "./assets/images/SocialIcons/google-pay.png";
import Paytm from "./assets/images/SocialIcons/paytm.png";
import RazorPay from "./assets/images/SocialIcons/razorpay.png";
import FooterBG from './assets/videos/footer2.mp4';

const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #f9f9f9;
  padding: 40px;
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

const LeftSection = styled.div`
  text-align: justify;
  display: flex;
  flex-direction: column;
  max-width: 320px;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Logo = styled.h2`
  align-items: center;
  display: flex;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  text-align: justify;
  color: orange;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const TrustedSeals = styled.h4`
  margin: 35px 0px 15px 0px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const PaymentButton = styled.img`
  padding: 10px;
  border: 1px solid black;
  border-radius: 0.6rem;
  width: 135px;
  height: 50px;
  background: transparent;
  // opacity: 0.8;
  &:hover {
    background-color: #888;
    cursor: pointer;
  }
`;

const GridMiddle = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  text-align: start;
  margin-left: 50px;
`;

const GridHeading = styled.h3`
  color: #fff;
  margin-bottom: 10px;
`;

const GridList = styled.ul`
  color: cyan;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const GridListItem = styled.li`
  font-size: 14px;
  margin-bottom: 10px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  height: 30px;
  margin-bottom: 10px;
  padding: 5px;
  background: transparent;
  border: none;
  color: #fff;

  &::placeholder {
    color: yellow;
    opacity: 0.8;
  }
`;

const FormTextarea = styled.textarea`
  height: 100px;
  margin-bottom: 10px;
  padding: 5px;
  background: transparent;
  border: none;
  color: #fff;
  
  &::placeholder {
    color: yellow;
    opacity: 0.8;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  // background-color: #333;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 0.6rem;

  &:hover {
    background-color: #888;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>

      <BackgroundVideo autoPlay muted loop>
        <source src={FooterBG} type="video/mp4" />
      </BackgroundVideo>

      <LeftSection>

        <Logo href="#">
          <LogoImg src={Guru} alt="Company Logo" />
          Astro Guru
        </Logo>

        <Description>
          About Astro Guru s2 to 3 lines what Astro Guru do and how it works
          About Astro Guru s2 to 3 lines what Astro Guru do and how it works.
        </Description>

        <SocialLinks>
          <a href="https://www.facebook.com">
            <LogoImg src={Facebook} alt="Company Logo" />
          </a>
          <a href="https://www.twitter.com">
            <LogoImg src={Twitter} alt="Company Logo" />
          </a>
          <a href="https://www.instagram.com">
            <LogoImg src={Instagram} alt="Company Logo" />
          </a>
          <a href="https://www.youtube.com">
            <LogoImg src={YouTube} alt="Company Logo" />
          </a>
        </SocialLinks>

        <TrustedSeals>Trusted & Seals</TrustedSeals>

        <ButtonGrid>
          <PaymentButton src={PayPal} alt="PayPal" />
          <PaymentButton src={GooglePay} alt="Google Pay" />
          <PaymentButton src={Paytm} alt="Paytm" />
          <PaymentButton src={RazorPay} alt="RazorPay" />
        </ButtonGrid>
      </LeftSection>

      <GridMiddle>
        <div>
          <GridHeading>Company</GridHeading>
          <GridList>
            <GridListItem>About Us</GridListItem>
            <GridListItem>Our Team</GridListItem>
            <GridListItem>Careers</GridListItem>
            <GridListItem>Partners</GridListItem>
          </GridList>
        </div>

        <div>
          <GridHeading>Support</GridHeading>
          <GridList>
            <GridListItem>Contact Us</GridListItem>
            <GridListItem>FAQ</GridListItem>
            <GridListItem>Terms of Service</GridListItem>
            <GridListItem>Privacy Policy</GridListItem>
          </GridList>
        </div>

        <div>
          <GridHeading>Collaborate</GridHeading>
          <GridList>
            <GridListItem>Advertising</GridListItem>
            <GridListItem>Sponsorship</GridListItem>
            <GridListItem>Events</GridListItem>
            <GridListItem>Media Kit</GridListItem>
            <GridListItem>Affiliate Program</GridListItem>
            <GridListItem>Write for Us</GridListItem>
          </GridList>
        </div>

        <div>
          <GridHeading>Important Links</GridHeading>
          <GridList>
            <GridListItem>Download Mobile App</GridListItem>
            <GridListItem>Customer Reviews</GridListItem>
            <GridListItem>Blog</GridListItem>
            <GridListItem>Site Map</GridListItem>
            <GridListItem>Newsletter</GridListItem>
            <GridListItem>Subscribe</GridListItem>
          </GridList>
        </div>

      </GridMiddle>

      <RightSection>
        <Form>
          <FormInput type="text" placeholder="Name" />
          <FormInput type="email" placeholder="Email" />
          <FormTextarea placeholder="Message"></FormTextarea>
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;
