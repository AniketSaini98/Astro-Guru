import React from "react";
import styled from "styled-components";

// import Masonry from 'react-masonry-css';
import ChatIcon from "@mui/icons-material/Chat";
import TvIcon from "@mui/icons-material/Tv";
import PhoneIcon from "@mui/icons-material/Phone";
import star from "./assets/images/VideoCarousel/star.png";

// Styled components for the AstrologerCard Section

// const MasonryGrid = styled.div`
//   display: flex;
//   margin-left: -15px;
//   width: auto;
// `;

// const MasonryGridColumn = styled.div`
//   padding-left: 15px;
//   background-clip: padding-box;
// `;

const MainHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const StarLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const MainHeading = styled.h2`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;

  span {
    margin: 0 10px;
    width: 30px;
    height: 30px;
  }
`;

const AstrologerCardSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const AstrologerCard = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const AstrologerImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

const AstrologerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const AstrologerInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
  padding: 20px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
`;

const YearsOfExperience = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: bold;
`;

const Status = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ online }) => (online ? "#00cc00" : "#ff0000")};
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
`;

const Name = styled.div`
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SpecialtiesHeading = styled.div`
  text-align: left;
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

const Specialties = styled.div`
  text-align: left;
  margin-bottom: 5px;
`;

const SkillsHeading = styled.div`
  text-align: left;
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

const Skills = styled.div`
  text-align: left;
  margin-bottom: 20px;
  text-wrap: wrap;
`;

const PriceHeading = styled.div`
  color: green;
  position: absolute;
  text-align: right;
  top: 220px;
  right: 25px;
  font-weight: bold;
`;

const Price = styled.div`
  color: green;
  position: absolute;
  text-align: right;
  top: 240px;
  right: 10px;
  font-weight: bold;
  //   margin-top: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

const ChatButton = styled(Button)`
  margin-right: 5px;
`;

const LiveButton = styled(Button)`
  margin: 0 5px;
`;

const CallButton = styled(Button)`
  margin-left: 5px;
`;

const AstrologerCardSection = () => {
  // const breakpointColumnsObj = {
  //   default: 3,
  //   1100: 2,
  //   700: 1,
  // };

  // Dummy data for the astrologers
  const astrologers = [
    {
      id: 1,
      image: require("./assets/images/AstrologerCard/profile1.jpg"),
      yearsOfExperience: 10,
      online: true,
      name: "Astrologer 1",
      specialties: "Love, Business, Life",
      skills: "Vedic Astrology, Kundali",
      price: "19.99",
    },
    {
      id: 2,
      image: require("./assets/images/AstrologerCard/profile2.jpg"),
      yearsOfExperience: 5,
      online: false,
      name: "Astrologer 2",
      specialties: "Career, Finance, Relationships",
      skills: "Western Astrology, Tarot Reading",
      price: "14.99",
    },
    {
      id: 3,
      image: require("./assets/images/AstrologerCard/profile3.jpg"),
      yearsOfExperience: 10,
      online: true,
      name: "Astrologer 1",
      specialties: "Love, Business, Life",
      skills: "Vedic Astrology, Kundali",
      price: "19.99",
    },
    {
      id: 4,
      image: require("./assets/images/AstrologerCard/profile4.jpg"),
      yearsOfExperience: 5,
      online: false,
      name: "Astrologer 2",
      specialties: "Career, Finance, Relationships",
      skills: "Western Astrology, Tarot Reading",
      price: "14.99",
    },
    {
      id: 5,
      image: require("./assets/images/AstrologerCard/profile5.jpg"),
      yearsOfExperience: 10,
      online: true,
      name: "Astrologer 1",
      specialties: "Love, Business, Life",
      skills: "Vedic Astrology, Kundali",
      price: "19.99",
    },
    {
      id: 6,
      image: require("./assets/images/AstrologerCard/profile6.jpg"),
      yearsOfExperience: 5,
      online: false,
      name: "Astrologer 2",
      specialties: "Career, Finance, Relationships",
      skills: "Western Astrology, Tarot Reading",
      price: "14.99",
    },
    // Add more astrologers as needed
  ];

  return (
    <>
      <MainHeadingContainer>
        <MainHeading>
          <span>
            <StarLogo src={star} alt="Star Logo" />
          </span>
          Premium Astrologers
          <span>
            <StarLogo src={star} alt="Star Logo" />
          </span>
        </MainHeading>
      </MainHeadingContainer>

      <AstrologerCardSectionContainer>
        {/* <Masonry
          breakpointCols={breakpointColumnsObj}
          className={MasonryGrid}
          columnClassName={MasonryGridColumn}
        > */}
          {astrologers.map((astrologer) => (
            <AstrologerCard key={astrologer.id}>
              <AstrologerImageContainer>
                <AstrologerImage src={astrologer.image} alt="Astrologer" />
                <AstrologerInfo>
                  <YearsOfExperience>
                    {astrologer.yearsOfExperience}+ Years
                  </YearsOfExperience>
                  <Status online={astrologer.online}>
                    {astrologer.online ? "Online" : "Offline"}
                  </Status>
                  <Name>{astrologer.name}</Name>
                  <SpecialtiesHeading>Specialties</SpecialtiesHeading>
                  <Specialties>{astrologer.specialties}</Specialties>
                  <SkillsHeading>Skills</SkillsHeading>
                  <Skills>{astrologer.skills}</Skills>
                  <PriceHeading>Price:</PriceHeading>
                  <Price>₹{astrologer.price}/min</Price>
                  <ButtonsContainer>
                    <ChatButton>
                      <ChatIcon />
                      Chat
                    </ChatButton>
                    <LiveButton>
                      <TvIcon />
                      Live
                    </LiveButton>
                    <CallButton>
                      <PhoneIcon />
                      Call
                    </CallButton>
                  </ButtonsContainer>
                </AstrologerInfo>
              </AstrologerImageContainer>
            </AstrologerCard>
          ))}
        {/* </Masonry> */}
      </AstrologerCardSectionContainer>
    </>
  );
};

export default AstrologerCardSection;
