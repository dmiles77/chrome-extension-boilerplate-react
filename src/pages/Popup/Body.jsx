import React from "react";
import { Stack } from "@mui/material";
import Menu from "./Menu";
import Home from "./Home";

const Body = ({ domain, activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <Home domain={domain} />
        );
      case 'menu':
        return <Menu />
      default:
        return null;
    }
  }

  return (
    <Stack height='100%' width='100%'>
      {renderSection()}
    </Stack>
  )
};

export default Body;
