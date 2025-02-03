import React from "react";
import { Grid2, Button } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import { styled } from "@mui/material/styles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const FooterStyled = styled("div")({
  marginTop: "20px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});


const Footer = ({ isPaused, togglePause }) => {

  return (
    <Grid2 container>
      <Grid2 width='100%'>
        <FooterStyled>
          <Button
            fullWidth
            variant="contained"
            startIcon={isPaused ? <PlayArrowIcon /> : <PauseIcon />}
            sx={{
              backgroundColor: isPaused ? '#4caf50' : '#f44336',
              '&:hover': {
                backgroundColor: isPaused ? '#45a049' : '#d32f2f'
              }
            }}
            onClick={togglePause}
          >
            {isPaused ? "Resume on this site" : "Pause on this site"}
          </Button>
        </FooterStyled>
      </Grid2>
    </Grid2>
  )
};

export default Footer;
