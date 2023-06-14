import React from 'react';
import { useSpring, animated } from 'react-spring';
import Sun from './assets/images/VideoCarousel/sun.png';
import './assets/css/ZodiacComponent.css';
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

const ZodiacComponent = () => {
  const zodiacSigns = [
    { name: 'Aries', image: require('./assets/images/aries.jpg')},
    { name: 'Taurus', image: require('./assets/images/taurus.jpg')},
    { name: 'Cancer', image: require('./assets/images/cancer.jpg')},
    { name: 'Leo', image: require('./assets/images/leo.jpg')},
    { name: 'Libra', image: require('./assets/images/libra.jpg')},
    { name: 'Aquarius', image: require('./assets/images/aquarius.jpg')},
    { name: 'Capricorn', image: require('./assets/images/capricorn.jpg')},
    { name: 'Gemini', image: require('./assets/images/gemini.jpg')},
    { name: 'Sagittarius', image: require('./assets/images/sagittarius.jpg')},
    { name: 'Scorpio', image: require('./assets/images/scorpio.jpg')},
    { name: 'Virgo', image: require('./assets/images/virgo.jpg')},
    { name: 'Pisces', image: require('./assets/images/pisces.jpg')},
  ];

  const animation = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    config: { duration: 50000 },
    loop: true,
  });

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <img src={Sun} alt="Sun" style={{ position: 'absolute', top: '50%', left: '50%', width: '100px', height: '100px', transform: 'translate(-50%, -50%)' }} />
      
      <animated.div style={{ ...animation, position: 'relative', width: '100%', height: '100%' }}>
        {zodiacSigns.map((sign, index) => {
          const angle = (360 / zodiacSigns.length) * index;
          const radius = 150;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <img
              key={sign.name}
              src={sign.image}
              alt={sign.name}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                width: '70px', // Set the image width to 100px
                height: '70px', // Set the image height to 100px
                borderRadius: '100%',
              }}
            />
          );
        })}
      </animated.div>
    </div>
  );
};

export default ZodiacComponent;
