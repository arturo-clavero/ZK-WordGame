import React from "react";
import { Box, Typography, Button } from "@mui/material";
import WalletConnect from "./utils/WalletConnect.jsx";

export default function NavBar() {
  return (
    <Box

      sx={{
       position: "fixed", // always on top
        top: 0,
        left: 0,
        zIndex: 1300, // higher than other elements
        width: "100%",
        px: { xs: 2, sm: 6 },
        py: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(90deg, #4d0063ff, #ab47bc, #4d0063ff)",
        boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
                    bgcolor: "primary.main",

      }}
    >
      {/* Logo / Title */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: `"Montserrat", sans-serif`,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#fff",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.85,
            transform: "scale(1.02)",
            transition: "all 0.2s ease-in-out",
          },
        }}
      >
        ZK Word Game
      </Typography>

      {/* Wallet Connect */}
      <Box>
        <WalletConnect />
      </Box>
          </Box>

  );
}
