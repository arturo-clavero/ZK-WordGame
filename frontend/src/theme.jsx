import {
  createTheme,
} from "@mui/material";

export default theme = createTheme({
  palette: {
    primary: { main: "#6a1b9a" },
    secondary: { main: "#fca24eff" }, 
    background: { default: "#f9fafb" },
    text: {
      primary: "#1f2937", 
      secondary: "#4b5563",
    },
  },
  typography: {
    fontFamily: `"Inter", "Nunito", sans-serif`, 
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.8rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.0,
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
          fontFamily: `"Montserrat", sans-serif`,
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
