import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function WalletConnect() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletMenuAnchor, setWalletMenuAnchor] = useState(null);

  const handleWalletClick = (event) => setWalletMenuAnchor(event.currentTarget);
  const handleWalletClose = () => setWalletMenuAnchor(null);

  const connectWallet = () => {
    setWalletConnected(true);
    setWalletAddress("0xAbC...123");
    handleWalletClose();
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setWalletAddress("");
    handleWalletClose();
  };

  const switchWallet = () => {
    setWalletAddress("0xDeF...456");
    handleWalletClose();
  };

  return (
    <>
      {walletConnected ? (
        <>
          <Button
            color="inherit"
            onClick={handleWalletClick}
            startIcon={<AccountBalanceWalletIcon />}
          >
            {walletAddress}
          </Button>
          <Menu
            anchorEl={walletMenuAnchor}
            open={Boolean(walletMenuAnchor)}
            onClose={handleWalletClose}
          >
            <MenuItem onClick={disconnectWallet}>Disconnect</MenuItem>
            <MenuItem onClick={switchWallet}>Switch Account</MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          color="inherit"
          onClick={connectWallet}
          startIcon={<AccountBalanceWalletIcon />}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
