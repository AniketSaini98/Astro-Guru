import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

import sun from './assets/images/VideoCarousel/sun.png';
import star from './assets/images/VideoCarousel/star.png';

// Styled components for customizing the Video Carousel Section
const VideoCarouselSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const SunLogo = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
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

const CarouselContainer = styled.div`
  position: relative;
  width: 80%;
  height: 400px;
`;

const PrevButton = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const NextButton = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const VideoCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const VideoThumbnail = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const VideoTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const VideoDescription = styled.p`
  font-size: 14px;
`;

const VideoCarousel = () => {
  // Video data for the carousel
  const videos = [
    {
      id: 1,
      title: 'Video 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      thumbnail: 'video1-thumbnail.jpg',
      videoId: '8LSt8_11wbQ',
    },
    {
      id: 2,
      title: 'Video 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      thumbnail: 'video2-thumbnail.jpg',
      videoId: '6pi25ozkBw8',
    },
    {
      id: 3,
      title: 'Video 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      thumbnail: 'video3-thumbnail.jpg',
      videoId: 'cIRxRM5M8Ds',
    },
    {
      id: 4,
      title: 'Video 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      thumbnail: 'video4-thumbnail.jpg',
      videoId: 'wMs295PNzBk',
    },
    {
      id: 5,
      title: 'Video 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      thumbnail: 'video5-thumbnail.jpg',
      videoId: 'zPSC9yvnNLE',
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <VideoCarouselSectionContainer>
      <SunLogo src={sun} alt="Sun Logo" />
      <MainHeading>
        <span>
          <StarLogo src={star} alt="Star Logo" />
        </span>
        User Testimonial
        <span>
          <StarLogo src={star} alt="Star Logo" />
        </span>
      </MainHeading>
      <CarouselContainer>
        {videos.map((video, index) => (
          <VideoCard key={video.id} active={index === activeIndex}>
            <VideoThumbnail src={video.thumbnail} alt={video.title} />
            <VideoTitle>{video.title}</VideoTitle>
            <VideoDescription>{video.description}</VideoDescription>
          </VideoCard>
        ))}
        <Carousel showThumbs={false} selectedItem={activeIndex}>
          {videos.map((video) => (
            <div key={video.id}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Carousel>
        <PrevButton onClick={handlePrevClick}>{'<'}</PrevButton>
        <NextButton onClick={handleNextClick}>{'>'}</NextButton>
      </CarouselContainer>
    </VideoCarouselSectionContainer>
  );
};

export default VideoCarousel;
