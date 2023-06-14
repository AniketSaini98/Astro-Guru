import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StarIcon = styled.span`
  margin: 0 5px;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? '2px solid #000' : 'none')};
  transition: border 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const CarouselButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Button = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  margin: 0 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const ReviewDetails = styled.div`
  margin-top: 20px;
`;

const ReviewImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ReviewName = styled.h2`
  margin-top: 10px;
`;

const ReviewText = styled.p`
  margin-top: 10px;
`;

// Sample data for user reviews
const userReviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require("./images/AstrologerCard/profile1.jpg"),
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Nulla dapibus tristique lorem vitae hendrerit.',
    image: require("./images/AstrologerCard/profile2.jpg"),
  },
  // Add more user reviews as needed
];

const UserReview = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const handleReviewClick = (review) => {
    setSelectedReview(review);
  };

  const handlePrevious = () => {
    const currentIndex = userReviews.findIndex(
      (review) => review.id === selectedReview.id
    );
    const previousIndex = (currentIndex - 1 + userReviews.length) % userReviews.length;
    setSelectedReview(userReviews[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = userReviews.findIndex(
      (review) => review.id === selectedReview.id
    );
    const nextIndex = (currentIndex + 1) % userReviews.length;
    setSelectedReview(userReviews[nextIndex]);
  };

  return (
    <Container>
      <Heading>
        <StarIcon>★</StarIcon>
        User Reviews
        <StarIcon>★</StarIcon>
      </Heading>
      <CarouselContainer>
        {userReviews.map((review) => (
          <Image
            key={review.id}
            src={review.image}
            alt={review.name}
            onClick={() => handleReviewClick(review)}
            isSelected={selectedReview && selectedReview.id === review.id}
          />
        ))}
        <CarouselButtons>
          <Button onClick={handlePrevious}>&lt;</Button>
          <Button onClick={handleNext}>&gt;</Button>
        </CarouselButtons>
      </CarouselContainer>
      {selectedReview && (
        <ReviewDetails>
          <ReviewImage src={selectedReview.image} alt={selectedReview.name} />
          <ReviewName>{selectedReview.name}</ReviewName>
          <ReviewText>{selectedReview.review}</ReviewText>
        </ReviewDetails>
      )}
    </Container>
  );
};

export default UserReview;
