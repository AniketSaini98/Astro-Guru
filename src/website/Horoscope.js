import React from "react";
// import "./assets/css/HoroscopeStyle.css";
import Sun from './assets/images/VideoCarousel/sun.png';
import Logo1 from './assets/images/Zodiac/aquarius.png';
import Logo2 from './assets/images/Zodiac/aries.png';
import Logo3 from './assets/images/Zodiac/capricorn.png';
import Logo4 from './assets/images/Zodiac/gemini.png';
import Logo5 from './assets/images/Zodiac/leo.png';
import Logo6 from './assets/images/Zodiac/libra.png';
import Logo7 from './assets/images/Zodiac/pisces.png';
import Logo8 from './assets/images/Zodiac/sagittarius.png';
import Logo9 from './assets/images/Zodiac/scorpio.png';
import Logo10 from './assets/images/Zodiac/taurus.png';
import Logo11 from './assets/images/Zodiac/virgo.png';
import Logo12 from './assets/images/Zodiac/aquarius.png';

import Horo from './assets/images/Zodiac/horo.png';


const Horoscope = () => {
  return (
    <div className="main-container">
      <ul className="links-list links-left">
        <li className="link-item">
          <i className="link-icon fa fa-home"></i>
          <a href="#">Home</a>
        </li>
        <li className="link-item">
          <i className="link-icon fa fa-search"></i>
          <a href="#">Search</a>
        </li>
        <li className="link-item">
          <i className="link-icon fa fa-user"></i>
          <a href="#">Profile</a>
        </li>
      </ul>

      <div className="orbit">
        <img src={Horo} alt="" />
      </div>

      <ul className="links-list links-right">
        <li className="link-item">
          <a href="#">About</a>
          <i className="link-icon fa fa-info-circle"></i>
        </li>
        <li className="link-item">
          <a href="#">Contact</a>
          <i className="link-icon fa fa-envelope"></i>
        </li>
        <li className="link-item">
          <a href="#">Settings</a>
          <i className="link-icon fa fa-cog"></i>
        </li>
      </ul>
    </div>
  );
};

export default Horoscope;


// import React from "react";
// import "./assets/css/HoroscopeStyle.css";
// import Sun from './assets/images/VideoCarousel/sun.png';
// import Logo1 from './assets/images/Zodiac/aquarius.png';
// import Logo2 from './assets/images/Zodiac/aries.png';
// import Logo3 from './assets/images/Zodiac/capricorn.png';
// import Logo4 from './assets/images/Zodiac/gemini.png';
// import Logo5 from './assets/images/Zodiac/leo.png';
// import Logo6 from './assets/images/Zodiac/libra.png';
// import Logo7 from './assets/images/Zodiac/pisces.png';
// import Logo8 from './assets/images/Zodiac/sagittarius.png';
// import Logo9 from './assets/images/Zodiac/scorpio.png';
// import Logo10 from './assets/images/Zodiac/taurus.png';
// import Logo11 from './assets/images/Zodiac/virgo.png';
// import Logo12 from './assets/images/Zodiac/aquarius.png';


// const Horoscope = () => {
//   return (
//     <div className="main-container">
//         <ul className="links-list links-left">
//           <li className="link-item">
//             <i className="link-icon fa fa-home"></i>
//             <a href="#">Home</a>
//           </li>
//           <li className="link-item">
//             <i className="link-icon fa fa-search"></i>
//             <a href="#">Search</a>
//           </li>
//           <li className="link-item">
//             <i className="link-icon fa fa-user"></i>
//             <a href="#">Profile</a>
//           </li>
//           <li className="link-item">
//             <i className="link-icon fa fa-home"></i>
//             <a href="#">Home</a>
//           </li>
//           <li className="link-item">
//             <i className="link-icon fa fa-search"></i>
//             <a href="#">Search</a>
//           </li>
//           <li className="link-item">
//             <i className="link-icon fa fa-user"></i>
//             <a href="#">Profile</a>
//           </li>
//         </ul>

//       <div className="orbit">
//         <ul className="orbit-wrap">
//           <li className="orbit-center">
//               <img 
//               src={Sun} 
//               alt="Sun Logo" 
//               style={{ width: '200px',
//                 height: '200px',
//                 position: 'relative',
//                 top: '-44px',
//                 right: '42px'}}
//                 />
//           </li>

//           <li>
//             <ul className="ring-0">
//               <li>
//                 {/* <i className="orbit-icon fa fa-git"></i> */}
//                 <img src={Logo1} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>
//               <li>
//                 {/* <i className="orbit-icon fa fa-free-code-camp"></i> */}
//                 <img src={Logo2} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>
//               <li>
//                 {/* <i className="orbit-icon fa fa-meetup"></i> */}
//                 <img src={Logo3} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <ul className="ring-1">
//               <li>
//                 {/* <i className="orbit-icon fa fa-codepen"></i> */}
//                 <img src={Logo4} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>
//               <li>
//                 {/* <i className="orbit-icon fa fa-podcast"></i> */}
//                 <img src={Logo5} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>
//               <li>
//                 {/* <i className="orbit-icon fa fa-css3"></i> */}
//                 <img src={Logo6} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <ul className="ring-2">
//               <li>
//                 <img src={Logo8} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>

//               {/* <li>
//                 <i className="orbit-icon fa fa-android"></i>
//               </li>
//               <li>
//                 <i className="orbit-icon fa fa-firefox"></i>
//               </li> */}

//               <li>
//                 <i className="orbit-icon fa fa-safari"></i>}
//                 <img src={Logo9} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>

//               {/* <li>
//                 <i className="orbit-icon fa fa-linux"></i>
//               </li> */}

//               {/* <li>
//                 <i className="orbit-icon fa fa-apple"></i>
//             </li> */}

//               <li>
//                 <img src={Logo7} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>
//               {/* <li>
//                 <i className="orbit-icon fa fa-chrome"></i>
//               </li> */}
              
//             </ul>
//           </li>
//           <li>
//             <ul className="ring-3">
//               <li>
//                 {/* <i className="orbit-icon fa fa-coffee"></i> */}
//                 <img src={Logo10} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>
//               <li>
//                 {/* <i className="orbit-icon fa fa-terminal"></i> */}
//                 <img src={Logo11} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>
//               <li>
//                 {/* <i className="orbit-icon fa fa-heart-o"></i> */}
//                 <img src={Logo12} alt="Logo1" style={{ width: '80px', height: '80px' }}/>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       <ul className="links-list links-right">
//         <li className="link-item">
//           <a href="#">About</a>
//           <i className="link-icon fa fa-info-circle"></i>
//         </li>
//         <li className="link-item">
//           <a href="#">Contact</a>
//           <i className="link-icon fa fa-envelope"></i>
//         </li>
//         <li className="link-item">
//           <a href="#">Settings</a>
//           <i className="link-icon fa fa-cog"></i>
//         </li>
//         <li className="link-item">
//             <i className="link-icon fa fa-home"></i>
//             <a href="#">Home</a>
//           </li>
//           <li className="link-item">
//             <i className="link-icon fa fa-search"></i>
//             <a href="#">Search</a>
//           </li>
//           <li className="link-item">
//             <i className="link-icon fa fa-user"></i>
//             <a href="#">Profile</a>
//           </li>
//       </ul>
//     </div>
//   );
// };

// export default Horoscope;

// import React, { useEffect } from "react";
// import styled from "styled-components";

// import "./assets/css/OrbitingAnimation.css";
// import Sun from "./assets/images/VideoCarousel/sun.png";
// import Star from "./assets/images/VideoCarousel/star.png";
// import Logo1 from "./assets/images/aries.jpg";
// import Logo2 from "./assets/images/aquarius.jpg";
// import Logo3 from "./assets/images/cancer.jpg";
// import Logo4 from "./assets/images/capricorn.jpg";
// import Logo5 from "./assets/images/gemini.jpg";
// import Logo6 from "./assets/images/leo.jpg";
// import Logo7 from "./assets/images/libra.jpg";
// import Logo8 from "./assets/images/pisces.jpg";
// import Logo9 from "./assets/images/scorpio.jpg";
// import Logo10 from "./assets/images/taurus.jpg";
// import Logo11 from "./assets/images/virgo.jpg";
// import Logo12 from "./assets/images/sagittarius.jpg";

// const MainHeadingContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const StarLogo = styled.img`
//   width: 30px;
//   height: 30px;
// `;

// const MainHeading = styled.h2`
//   margin: auto;
//   display: flex;
//   justify-content: center;
//   -webkit-box-align: center;
//   align-items: center;
//   font-size: 28px;
//   font-weight: bold;

//   span {
//     margin: 0 10px;
//     width: 30px;
//     height: 30px;
//   }
// `;

// const ZodiacLogo = styled.img`
//   width: 100px;
//   height: 100px;
// `

// const Horoscope = () => {
//   useEffect(() => {
//     const orbitElements = document.querySelectorAll(".orbit-icon");
//     const orbitCenter = document.querySelector(".orbit-center");
//     const totalIcons = orbitElements.length;
//     const radius = 150;
//     const speed = 0.01; // Adjust this value to change the rotation speed

//     let angle = 0;

//     const animateOrbit = () => {
//       angle += speed;

//       orbitElements.forEach((element, index) => {
//         const orbitAngle = (Math.PI * 2 * index) / totalIcons;
//         const x = Math.cos(angle + orbitAngle) * radius;
//         const y = Math.sin(angle + orbitAngle) * radius;

//         element.style.transform = `translate(${x}px, ${y}px)`;
//       });

//       requestAnimationFrame(animateOrbit);
//     };

//     animateOrbit();
//   }, []);

//   return (
//     <>
//       <MainHeadingContainer>
//         <MainHeading>
//           <span>
//             <StarLogo src={Star} alt="Star Logo" />
//           </span>
//           Premium Astrologers
//           <span>
//             <StarLogo src={Star} alt="Star Logo" />
//           </span>
//         </MainHeading>
//       </MainHeadingContainer>

//       <div className="orbit">
//         <ul className="orbit-wrap">
//           <li className="orbit-center">
//             <img src={Sun} alt="Sun Logo" />
//           </li>

//           <li>
//             <ul className="orbit-ring">
//               <li>
//                 <ZodiacLogo>
//                   <img src={Logo1} alt="Logo1" />
//                 </ZodiacLogo>
//               </li>

//               <li>
//               <ZodiacLogo>
//                 <img src={Logo2} alt="Logo1" />
//               </ZodiacLogo>
//               </li>

//               <li>
//                 <ZodiacLogo>
//                 <img src={Logo3} alt="Logo1" />
//                 </ZodiacLogo>
//               </li>

//               <li>
//               <ZodiacLogo>
//                 <img src={Logo4} alt="Logo1" />
//               </ZodiacLogo>
//               </li>

//               <li>
//               <ZodiacLogo>
//                 <img src={Logo5} alt="Logo1" />
//               </ZodiacLogo>
//               </li>

//               <li>
//               <ZodiacLogo>
//                 <img src={Logo6} alt="Logo1" />
//               </ZodiacLogo>
//               </li>

//               <li>
//               <ZodiacLogo>
//                 <img src={Logo7} alt="Logo1" />
//               </ZodiacLogo>
//               </li>

//               <li>
//               <ZodiacLogo>
//                 <img src={Logo8} alt="Logo1" />
//               </ZodiacLogo>
//               </li>

//               <li>
//               <ZodiacLogo>
//                 <img src={Logo9} alt="Logo1" />
//               </ZodiacLogo>
//               </li>

//               <li>
//               <ZodiacLogo>
//                 <img src={Logo10} alt="Logo1" />
//               </ZodiacLogo>
//               </li>

//               <li>
//               <ZodiacLogo>
//                 <img src={Logo11} alt="Logo1" />
//               </ZodiacLogo>
//               </li>

//               <li>
//               <ZodiacLogo>
//                 <img src={Logo12} alt="Logo1" />
//               </ZodiacLogo>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Horoscope;
