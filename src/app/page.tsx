// src/app/MainApp.tsx
"use client";

import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStyles from "./globalStyles";
import HomeScreen from "./screens/HomeScreen";
import ThemeRevealScreen from "./screens/ThemeRevealScreen";


const MainApp = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onNext={() => setCurrentScreen("theme")} />;
      case "theme":
        return <ThemeRevealScreen onNext={() => setCurrentScreen("home")}/>;
      default:
        return null;
    }
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: #fff5f8;
`;

export default MainApp;
