import React from "react";
import { Stack } from "@mui/material";
import Menu from './Menu';
import Home from './Home';

interface BodyProps {
  domain: string;
  activeSection: string;
}

const Body = ({ domain, activeSection }: BodyProps) => {
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
