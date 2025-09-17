import { Button, Menu, MenuItem, IconButton, Tooltip, Box } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { getContext } from "../utils/context.jsx";
import { ethers } from "ethers";
import { useState, useRef } from "react";

export default function WalletConnect() {
  const {
    adminWalletAddress,
    setIsDemo,
    walletConnected,
    setWalletConnected,
    walletAddress,
    setWalletAddress,
  } = getContext();

  const [tooltipText, setTooltipText] = useState("Copy Address");
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleWalletClick = () => setMenuOpen(true);
  const handleWalletClose = () => setMenuOpen(false);

  const shortAddress = (addr) => {
    if (!addr) return "";
    if (addr === adminWalletAddress) return "DEMO";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const copyAddress = async () => {
    if (walletAddress) {
      await navigator.clipboard.writeText(walletAddress);
      setTooltipText("Copied");
      setTimeout(() => setTooltipText("Copy Address"), 1500);
    }
  };

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

  /** Reusable wallet button (same style always) */
  const WalletButton = ({ label, showCopy, onClick }) => (
    <Button
      ref={buttonRef}
      onClick={onClick}
      disableRipple
      startIcon={<AccountBalanceWalletIcon sx={{ color: "#fff", fontSize: 20 }} />}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        color: "#fff",
        textTransform: "none",
        fontWeight: 600,
        fontSize: 14,
        px: 1.5,
        py: 0.5,
        background: "transparent",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
      }}
    >
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
    </Button>
  );

  return (
    <>
      {walletConnected ? (
        <>
          <WalletButton
            label={shortAddress(walletAddress)}
            showCopy
            onClick={handleWalletClick}
          />
          <Menu
            anchorEl={buttonRef.current}
            open={menuOpen}
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
        <WalletButton label="Connect Wallet" showCopy={false} onClick={connectWallet} />
      )}
    </>
  );
}
