import {
  Box,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import {ContextProvider} from "./components/utils/context.jsx";
import theme from "./components/utils/theme.jsx";
import HideScrollBar from "./components/utils/HideScrollBar.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import HeroSection from "./components/hero/HeroSection.jsx";
import QuickStats from "./components/quiz/QuickStats.jsx";
import QuizCard from "./components/quiz/QuizCard.jsx";
import ProgressCard from "./components/quiz/ProgressCard.jsx";
import RevealNFTCard from "./components/quiz/RevealNFTCard.jsx";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideScrollBar/>
      <ContextProvider>
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
          <NavBar />
          <HeroSection />
          <QuickStats />
          <QuizCard />
          <ProgressCard />
          <RevealNFTCard />
        </Box>
      </ContextProvider>
    </ThemeProvider>
  );
}
