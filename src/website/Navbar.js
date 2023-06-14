// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { AiOutlineHome, AiOutlinePhone, AiOutlineClockCircle } from 'react-icons/ai';

// import { AppBar, Toolbar, Typography, Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';
// import { MoreVert as MoreVertIcon } from '@mui/icons-material';

// import Guru from './assets/images/HeroSection/guru.png';

// const Logo = styled.img`
//   border: 1px solid red;
//   padding: 5px;
//   width: 40px;
//   height: 40px;
//   border: 1px solid crimson;
//   border-radius: 100%;
// `;

// const LogoText = styled.p`
//   margin-left: 10px;
//   font-weight: bold;
//   color: #ffffff;
// `;

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [activeLink, setActiveLink] = useState('Home');

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleNavLinkClick = (linkName) => {
//     setActiveLink(linkName);
//   };

//   const getIconByLink = (linkName) => {
//     switch (linkName) {
//       case 'Home':
//         return <AiOutlineHome />;
//       case 'Call with Astrologer':
//         return <AiOutlinePhone />;
//       case 'Live (Coming Soon)':
//         return <AiOutlineClockCircle />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'black', opacity: '0.8', justifyContent: 'space-between' }}>
//       <Toolbar>
//         <Logo src={Guru} alt="Company Logo" />
//         <LogoText>
//           <p>Astro Guru</p>
//         </LogoText>

//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           <Button
//             color="inherit"
//             onClick={() => handleNavLinkClick('Home')}
//             style={activeLink === 'Home' ? { borderBottom: '1px solid red' } : null}
//           >
//             {getIconByLink('Home')} Home
//           </Button>
//           <Button
//             color="inherit"
//             onClick={() => handleNavLinkClick('Call with Astrologer')}
//             style={activeLink === 'Call with Astrologer' ? { borderBottom: '1px solid red' } : null}
//           >
//             {getIconByLink('Call with Astrologer')} Call with Astrologer
//           </Button>
//           <Button
//             color="inherit"
//             onClick={() => handleNavLinkClick('Live (Coming Soon)')}
//             style={activeLink === 'Live (Coming Soon)' ? { borderBottom: '1px solid red' } : null}
//           >
//             {getIconByLink('Live (Coming Soon)')} Live (Coming Soon)
//           </Button>
//         </Typography>

//         {/* Avatar with menu */}
//          <IconButton
//           size="large"
//           aria-label="more"
//           aria-controls="menu"
//           aria-haspopup="true"
//           onClick={handleMenuOpen}
//           color="inherit"
//         >
//           <Avatar src="dummy-avatar.png" alt="User Avatar" />

//           </IconButton>
//          <Menu
//           id="menu"
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleMenuClose}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//         >
//           <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//           <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
//           <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//         </Menu>
        
//           {/* More Button */}
//         <IconButton
//           size="large"
//           aria-label="more options"
//           aria-controls="more-options"
//           aria-haspopup="true"
//           onClick={handleMenuOpen}
//           color="inherit"
//         >
//           <MoreVertIcon />
//         </IconButton>
//           <Menu
//             id="more-options"
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//           >
//             <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
//             <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
//             <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
//           </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import Guru from './assets/images/HeroSection/guru.png';
import { Logo, LogoText, StyledButton } from './assets/styles/NavbarStyles';
import Lottie from 'react-lottie';
import homeIcon from './assets/home.json';
import callIcon from './assets/call.json';
import liveIcon from './assets/live.json';

// import { FiHome } from 'react-icons/fi';

// import LottieAnimation from './LottieAnimation';

// const MyComponent = () => {
//   return (
//     <div>
//       <h1>Welcome to My Component</h1>
//       <LottieAnimation animationPath="https://assets3.lottiefiles.com/packages/lf20_qievcjy1.json" width="100px" height="100px" />
//     </div>
//   );
// };

// export default MyComponent;



const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeLink, setActiveLink] = useState('Home');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const handleNavLinkClicks = (linkName) => {
    setActiveLink(linkName);
    setIsAnimationPlaying(!isAnimationPlaying);
  };
  
  const lottieOptions1 = {
    loop: true,
    autoplay: true,
    animationData: homeIcon, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const lottieOptions2 = {
    loop: true,
    autoplay: true,
    animationData: callIcon, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const lottieOptions3 = {
    loop: true,
    autoplay: true,
    animationData: liveIcon, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  
  

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', opacity: '0.8', justifyContent: 'space-between' }}>
      <Toolbar>
        <Logo src={Guru} alt="Company Logo" />
        <LogoText>
          <p>Astro Guru</p>
        </LogoText>

        <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexGrow: 1 }}>
          <StyledButton
            color="inherit"
            onClick={() => handleNavLinkClick('Home')}
            onTouchMoveCapture={() => handleNavLinkClicks('homeIcon')}
            isActive={activeLink === 'Home'}
          >
          <Lottie
            options={lottieOptions1}
            height={40}
            width={40}
            isPaused={!isAnimationPlaying}
          />
          <p>Home</p>
            
          </StyledButton>

          <StyledButton
            color="inherit"
            onClick={() => handleNavLinkClick('Home')}
            onTouchMoveCapture={() => handleNavLinkClicks('callIcon')}
            isActive={activeLink === 'Home'}
          >
          <Lottie
            options={lottieOptions2}
            height={40}
            width={40}
            isPaused={!isAnimationPlaying}
          />
          <p>Call with Astrologer</p>
          </StyledButton>

          <StyledButton
          color="inherit"
          onClick={() => handleNavLinkClick('Home')}
          onTouchMoveCapture={() => handleNavLinkClicks('liveIcon')}
          isActive={activeLink === 'Home'}
        >
        <Lottie
          options={lottieOptions3}
          height={40}
          width={40}
          isPaused={!isAnimationPlaying}
        />
        <p>Live (Coming Soon)</p>
          </StyledButton>

        </Typography>

        {/* Avatar with menu */}
          <IconButton
          size="large"
          aria-label="more"
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
        >
          <Avatar src="dummy-avatar.png" alt="User Avatar" />

          </IconButton>
         <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
        
           {/* More Button */}
        <IconButton
          size="large"
          aria-label="more options"
          aria-controls="more-options"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          color="inherit"
        >
          <MoreVertIcon />
        </IconButton>
          <Menu
            id="more-options"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
          </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

