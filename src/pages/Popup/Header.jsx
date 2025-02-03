import React from "react";
import { styled } from "@mui/material/styles";
import { Grid2, IconButton, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExtensionIcon from "../../assets/img/icon-128.png";
import ArrowForward from "@mui/icons-material/ArrowForward";


const StyledBox = styled(Box)({
  height: 48,
  width: 48,
  cursor: 'pointer',
  '@keyframes swing': {
    '0%': { transform: 'rotate(0deg)' },
    '20%': { transform: 'rotate(-15deg)' },
    '40%': { transform: 'rotate(10deg)' },
    '60%': { transform: 'rotate(-5deg)' },
    '80%': { transform: 'rotate(5deg)' },
    '100%': { transform: 'rotate(0deg)' }
  }
});

const Header = ({ setActiveSection, activeSection }) => {
  return (
    <Grid2 height={75} container justifyContent='space-between'>
      <Grid2 item>
        <StyledBox
          component="img"
          onClick={() => {
            setActiveSection('home');
            const element = document.querySelector('img[alt="icon"]');
            element.style.animation = 'swing 2s ease';
            setTimeout(() => {
              element.style.animation = '';
            }, 2000);
          }}
          alt="icon"
          src={ExtensionIcon}
        />
      </Grid2>
      <Grid2 item>
        <IconButton onClick={() => chrome.runtime.openOptionsPage()}>
          <SettingsIcon />
        </IconButton>
        {activeSection === 'menu' ? <IconButton onClick={() => setActiveSection('home')}> <ArrowForward /> </IconButton> : <IconButton onClick={() => setActiveSection('menu')}> <MoreVertIcon /> </IconButton>}
      </Grid2>
    </Grid2>
  );
};

export default Header;
