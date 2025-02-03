import React, { useState, useEffect } from "react";
import { Grid2 } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { chromeStorage } from "../../../utils/storage";

const Popup = () => {
  const [domain, setDomain] = useState("Loading...");
  const [isPaused, setIsPaused] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // 'home', 'menu'

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        try {
          const url = new URL(tabs[0].url);

          setDomain(url.hostname);
          chromeStorage.get("pausedSites", (result) => {
            setIsPaused(result.pausedSites?.includes(url.hostname));
          });
        } catch (error) {
          setDomain("Unavailable");
        }
      }
    });
  }, []);

  const togglePause = () => {
    chromeStorage.get("pausedSites", (result) => {
      let pausedSites = result.pausedSites || [];
      if (isPaused) {
        pausedSites = pausedSites.filter((site) => site !== domain);
      } else {
        pausedSites.push(domain);
      }
      chromeStorage.set("pausedSites", pausedSites);
      setIsPaused(!isPaused);
    });
  };

  return (
    <Grid2 height='100%' container p={2} justifyContent='space-between'>
      <Grid2 item width='100%'>
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      </Grid2>
      <Grid2 item width='100%'>
        <Body domain={domain} activeSection={activeSection} />
      </Grid2>
      {activeSection === 'home' && <Grid2 alignSelf='flex-end' item width='100%'>
        <Footer isPaused={isPaused} togglePause={togglePause} />
      </Grid2>}
    </Grid2>

  );
};

export default Popup;
