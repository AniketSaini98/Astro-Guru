import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationPath, width, height }) => {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: animationPath,
    });

    return () => {
      // Cleanup on unmount
      animation.destroy();
    };
  }, [animationPath]);

  return <div ref={lottieContainerRef} style={{ width, height }}></div>;
};

export default LottieAnimation;
