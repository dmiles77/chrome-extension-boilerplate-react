import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

const Container = styled("div")({
  padding: "20px",
});

const Options = () => {
  const [setting, setSetting] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    chrome.storage.local.get(
      {
        customSetting: "",
        notifications: false,
        darkMode: false
      },
      (result) => {
        setSetting(result.customSetting || "");
        setNotifications(result.notifications || false);
        setDarkMode(result.darkMode || false);
      }
    );
  }, []);

  const saveSettings = () => {
    chrome.storage.local.set({
      customSetting: setting,
      notifications: notifications,
      darkMode: darkMode
    }, () => {
      // Callback after settings are saved
    });
  };

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        <img src="icon-34.png" alt="Extension Icon" style={{ marginRight: '12px', width: '34px', height: '34px' }} />
        <h1>Settings</h1>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        saveSettings();
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
          <TextField
            fullWidth
            label="Custom Setting"
            value={setting}
            onChange={(e) => setSetting(e.target.value)}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              id="notifications"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              style={{ cursor: 'pointer' }}
            />
            <label htmlFor="notifications" style={{ cursor: 'pointer' }}>
              Enable Notifications
            </label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              id="darkMode"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              style={{ cursor: 'pointer' }}
            />
            <label htmlFor="darkMode" style={{ cursor: 'pointer' }}>
              Dark Mode
            </label>
          </div>

          <Button
            type="submit"
            variant="contained"
            style={{ alignSelf: 'flex-start', marginTop: '12px' }}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Options;
