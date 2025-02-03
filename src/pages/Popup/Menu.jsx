import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Box, Typography, Button, Checkbox, FormControlLabel, Link, Tooltip } from "@mui/material";
import { Coffee, Settings, Description, Star, AttachMoney } from "@mui/icons-material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';

const StyledSilverCoinIconButton = styled(IconButton)({
  background: 'linear-gradient(45deg, #F5F5F5, #C0C0C0, #808080)', // Enhanced silver gradient
  border: '2px solid #A9A9A9',
  borderRadius: '50%',
  padding: '12px',
  boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  position: 'relative',
  '&:hover': {
    background: 'linear-gradient(45deg, #C0C0C0, #F5F5F5, #C0C0C0)',
    transform: 'scale(1.05)',
    transition: 'transform 0.2s ease-in-out',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)',
    animation: 'shine 2s linear infinite',
  },
  animation: 'spin 6s linear infinite',
  '@keyframes spin': {
    '0%': { transform: 'rotateY(0deg)' },
    '50%': { transform: 'rotateY(180deg) scale(0.95)' },
    '100%': { transform: 'rotateY(360deg)' }
  },
});

const StyledHurtIconButton = styled(FavoriteIcon)({
  color: 'red',
  animation: 'pulse 1.5s ease-in-out infinite',
  '@keyframes pulse': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.2)' },
    '100%': { transform: 'scale(1)' }
  }
});



const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [autoStart, setAutoStart] = useState(false);

  useEffect(() => {
    // Load initial values from storage
    chrome.storage.local.get(
      {
        darkMode: false,
        notifications: false,
        autoStart: false
      },
      (result) => {
        setDarkMode(result.darkMode);
        setNotifications(result.notifications);
        setAutoStart(result.autoStart);
      }
    );
  }, []);

  const menuItems = [
    { label: "Donate", icon: <Coffee />, color: "#6F4E37" }, // Coffee brown color
    { label: "Configurations", icon: <Settings />, color: "#1976d2" }, // Blue color
    { label: "Documentation", icon: <Description />, color: "#705000" }, // Gray color
    { label: "Premium", icon: <Star />, color: "#FFD700" }, // Gold color
  ];

  const handleCheckboxChange = (setting, value) => {
    chrome.storage.local.set({ [setting]: value }, () => {
      switch (setting) {
        case 'darkMode':
          setDarkMode(value);
          break;
        case 'notifications':
          setNotifications(value);
          break;
        case 'autoStart':
          setAutoStart(value);
          break;
        default:
          break;
      }
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <Box p={3} sx={{ textAlign: 'center' }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mb: 3
            }}>
              <Typography variant="h6">Open your heart</Typography>
              <StyledHurtIconButton />
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Did you like my boilerplate?
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  mb: 1
                }}
              >
                Buy me a coffee! <Coffee />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your support helps maintain and improve this project.
              </Typography>
            </Box>

            <StyledSilverCoinIconButton
              onClick={() => chrome.tabs.create({ url: "https://www.paypal.com/paypalme/dmiles77" })}
            >
              <AttachMoney sx={{ fontSize: 40, color: '#fff' }} />
            </StyledSilverCoinIconButton>
          </Box>
        );
      case 1:
        return (
          <Box p={2}>
            <Typography mb={2} variant="subtitle1">Basic configurations</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={darkMode}
                  onChange={(e) => handleCheckboxChange('darkMode', e.target.checked)}
                />
              }
              label="Enable dark mode"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={notifications}
                  onChange={(e) => handleCheckboxChange('notifications', e.target.checked)}
                />
              }
              label="Enable notifications"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={autoStart}
                  onChange={(e) => handleCheckboxChange('autoStart', e.target.checked)}
                />
              }
              label="Auto-start"
            />
            <Tooltip title="Premium only">
              <FormControlLabel control={<Checkbox disabled />} label="Sync data" />
            </Tooltip>
            <Tooltip title="Premium only">
              <FormControlLabel control={<Checkbox disabled />} label="Debug mode" />
            </Tooltip>
          </Box>
        );
      case 2:
        return (
          <Box p={2}>
            <Typography variant="subtitle1">Documentation</Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2 }}>
              Chrome Extension boilerplate built with Manifest V3, React 18 + MUI, Webpack 5, and Webpack Dev Server 4.
            </Typography>
            <Typography pt={2} variant="subtitle2" color="text.secondary">
              <Link sx={{ cursor: 'pointer' }} onClick={() => chrome.tabs.create({ url: "https://github.com/dmiles77/chrome-extension-boilerplate-react" })}>Read more</Link>
            </Typography>
          </Box>
        );
      case 3:
        return (
          <Box p={2}>
            <Typography variant="subtitle1">Premium version</Typography>
            <Typography pt={2} variant="subtitle2" color="text.secondary">
              be the first to get the lates features and updates
            </Typography>

            <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2 }}>
              you will enjoy the best experience with the premium version
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3 }}
              color="primary"
              onClick={() => chrome.tabs.create({ url: "https://chrome.google.com/webstore/premium-extension" })}
            >
              Upgrade to Premium
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box height="100%">
      <AppBar position="static" sx={{ backgroundColor: "#f5f5f5", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          {menuItems.map((item, index) => (
            <IconButton
              key={item.label}
              onClick={() => setActiveTab(index)}
              sx={{
                color: activeTab === index ? item.color : '#757575',
                '&:hover': {
                  color: item.color
                }
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>
      <Box flex={1} p={2} sx={{ overflowY: "auto" }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Menu;