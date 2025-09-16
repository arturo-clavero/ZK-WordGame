import React from "react";
import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import QuickStats from "./components/QuickStats.jsx";
import QuizCard from "./components/QuizCard.jsx";

import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

const theme = createTheme({
  palette: {
    primary: { main: "#6a1b9a" }, // deep purple
    secondary: { main: "#ff9800" }, // orange
    background: { default: "#f9fafb" },
    text: {
      primary: "#1f2937", // dark neutral gray
      secondary: "#4b5563", // softer gray
    },
  },
  typography: {
    fontFamily: `"Inter", "Nunito", sans-serif`, // default for body + headings
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.7,
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #6a1b9a, #8e24aa, #ab47bc)",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          fontFamily: `"Montserrat", sans-serif`, // <- special NavBar font
          fontWeight: 600,
          fontSize: "1.15rem",
          letterSpacing: "-0.01em",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `"Inter", "Nunito", sans-serif`,
        },
      },
    },
  },
});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <NavBar />
        <HeroSection />
        <QuickStats />
        <QuizCard />

        <style>{`
          /* Gradient NavBar (subtle) */
          .MuiAppBar-root {
            background: linear-gradient(90deg, #6a1b9a, #7b1fa2, #8e24aa);
            box-shadow: 0px 6px 18px rgba(0,0,0,0.15);
          }

          .MuiToolbar-root {
            font-family: "Inter", sans-serif;
            font-size: 1.1rem;
            font-weight: 500;
            letter-spacing: 0.5px;
          }

        
          /* letters animation (cleaner) */
          .letters {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin: 20px 0;
          }

          .letter {
            font-size: 2.8rem;
            font-weight: 600;
            font-family: "Nunito", sans-serif;
            display: inline-block;
            animation: wave 1.8s ease-in-out infinite;
          }

          @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </Box>
    </ThemeProvider>
  );
}
