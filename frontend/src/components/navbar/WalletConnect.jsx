import { Button, Menu, MenuItem, IconButton, Tooltip, Box } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { getContext } from "../utils/context.jsx";
import { ethers } from "ethers";
import {useState} from "react";

export default function WalletConnect() {
  const {
    adminWalletAddress,
    setIsDemo,
    walletConnected,
    setWalletConnected,
    walletAddress,
    setWalletAddress,
    walletMenuAnchor,
    setWalletMenuAnchor,
  } = getContext();
  const [tooltipText, setTooltipText] = useState("Copy Address");


  const handleWalletClick = (event) => setWalletMenuAnchor(event.currentTarget);
  const handleWalletClose = () => setWalletMenuAnchor(null);

  const shortAddress = (addr) => {
    if (!addr) return "";
    if (addr === adminWalletAddress) return "DEMO";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };


  const copyAddress = async () => {
    if (walletAddress)
      await navigator.clipboard.writeText(walletAddress);
    setTooltipText("Copied");
    let time = 1500;
    setTimeout(() => setTooltipText(""), time);
    setTimeout(() => setTooltipText("Copy Address"), time + 200);
  }

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask not detected!");
        return;
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setWalletConnected(true);
      setWalletAddress(address);
      handleWalletClose();
      if (address !== adminWalletAddress) setIsDemo(false);

      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setWalletConnected(true);
        } else {
          disconnectWallet();
        }
      });

      window.ethereum.on("chainChanged", () => window.location.reload());
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setWalletAddress("");
    handleWalletClose();
    if (walletAddress !== adminWalletAddress) setIsDemo(false);
  };

  const switchWallet = async () => {
    try {
      if (!window.ethereum) return;
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (accounts.length > 1) {
        let i;
        for (i = 0; i < accounts.length; i++) {
          if (accounts[i] === walletAddress) {
            i = i + 1 < accounts.length ? i + 1 : 0;
            break;
          }
        }
        setWalletAddress(accounts[i]);
        handleWalletClose();
        if (accounts[i] !== adminWalletAddress) setIsDemo(false);
      }
    } catch (err) {
      console.error("Switch wallet failed:", err);
    }
  };

  const switchToDemo = () => {
    setWalletAddress(adminWalletAddress);
    setIsDemo(true);
  };

  const WalletButton = ({ onClick, label, showCopy }) => (
    <Box
      onClick={onClick}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        color: "#fff",
        textTransform: "none",
        fontWeight: 600,
        fontSize: 14,
        px: 1.5,
        py: 0.5,
        cursor: "pointer",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
      }}
    >
      <AccountBalanceWalletIcon sx={{ color: "#fff", mr: 1.5, fontSize: 20 }} />
      <Box>{label}</Box>
      {showCopy && (
        <Tooltip title={tooltipText}>
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              copyAddress();
            }}
            sx={{ ml: 0.5, p: 0.3, color: "#fff" }}
          >
            <ContentCopyIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );

  return (
    <>
      {walletConnected ? (
        <>
          <WalletButton
            onClick={handleWalletClick}
            label={shortAddress(walletAddress)}
            showCopy={true}
          />

          <Menu
            anchorEl={walletMenuAnchor}
            open={Boolean(walletMenuAnchor)}
            onClose={handleWalletClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={disconnectWallet}>Disconnect</MenuItem>
            <MenuItem onClick={switchWallet}>Switch Account</MenuItem>
            <MenuItem onClick={switchToDemo}>Demo Admin</MenuItem>
          </Menu>
        </>
      ) : (
        <WalletButton onClick={connectWallet} label="Connect Wallet" showCopy={false} />
      )}
    </>
  );
}
