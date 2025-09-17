import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
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
            onClick={handleWalletClick}
            startIcon={<AccountBalanceWalletIcon sx={{ color: "#fff" }} />}
            sx={{
              color: "#fff", // force white text
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
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
          onClick={connectWallet}
          startIcon={<AccountBalanceWalletIcon sx={{ color: "#fff" }} />}
          sx={{
            color: "#fff", // force white text
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { backgroundColor: "rgba(126, 3, 156, 0.88)" },
          }}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
