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
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WalletConnect from "./utils/WalletConnect.jsx";

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                ZK Word Game
            </Typography>
            <WalletConnect/>
            
            </Toolbar>
        </AppBar>
    )
}