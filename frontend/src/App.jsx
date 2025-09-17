import {
  Box,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import NavBar from "./components/navbar/NavBar.jsx";
import HeroSection from "./components/hero/HeroSection.jsx";
import QuickStats from "./components/quiz/QuickStats.jsx";
import QuizCard from "./components/quiz/QuizCard.jsx";

import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <NavBar />
        <HeroSection />
        <QuickStats />
        <QuizCard />
      </Box>
    </ThemeProvider>
  );
}
