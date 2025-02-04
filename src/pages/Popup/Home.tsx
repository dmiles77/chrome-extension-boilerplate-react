import React from "react";
import { Typography, Grid2, Box } from "@mui/material";

interface HomeProps {
  domain: string;
}

const Home = ({ domain }: HomeProps) => {
  return (
    <Box height={100} sx={{ backgroundColor: 'whitesmoke' }}>
      <Grid2 justifyContent='center' container alignItems="center" spacing={1}>
        <Grid2>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            noWrap
            sx={{ maxWidth: 200 }}
            title={domain}
          >
            {domain}
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );

};

export default Home;