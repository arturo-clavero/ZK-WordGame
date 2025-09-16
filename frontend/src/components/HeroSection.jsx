import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Badge,
  LinearProgress,
  Menu,
  MenuItem,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import NFTCarousel from "./NFTCarousel.jsx";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function HeroSection() {
    return (
       <Box sx={{ position: "relative", textAlign: "center", py: 6, bgcolor: "primary.main", color: "#fff" }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
            Daily Puzzle & NFT Rewards!
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
            Solve puzzles, earn exclusive NFTs every day.
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mb: 4 }}>
            Start Quiz
            </Button>
            <NFTCarousel/>
        </Box>
    )
}