import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import VideoCarousel from "./VideoCarousel";
import AstrologerCardSection from "./AstrologerCard";
import Horoscope from "./Horoscope";
// import ZodiacComponent from './ZodiacComponent';
// import UserReview from "./UserReview";
import Footer from "./Footer";


export default function Website() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <VideoCarousel />
            <AstrologerCardSection />
            <Horoscope />
            {/* <ZodiacComponent /> */}
            {/* <UserReview /> */}
            <Footer />
        </>
    );
}