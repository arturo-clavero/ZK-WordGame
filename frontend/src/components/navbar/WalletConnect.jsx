import { Button, Menu, MenuItem } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {getContext} from "../utils/context.jsx";
import { ethers } from "ethers";

export default function WalletConnect() {
    const { 
      adminWalletAddress, 
      setIsDemo,
      walletConnected, 
      setWalletConnected,
      walletAddress,
      setWalletAddress,
      walletMenuAnchor,
      setWalletMenuAnchor 
    } = getContext();

  const handleWalletClick = (event) => setWalletMenuAnchor(event.currentTarget);
  const handleWalletClose = () => setWalletMenuAnchor(null);

const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      alert("MetaMask not detected!");
      return;
    }
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const address = await signer.getAddress();
    setWalletConnected(true);
    setWalletAddress(address);
    handleWalletClose();

    if (address !== adminWalletAddress) {
      setIsDemo(false);
    }

    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setWalletConnected(true);
      } else {
        disconnectWallet();
      }
    });

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
  } catch (error) {
    console.error("Wallet connection failed:", error);
  }
};

const disconnectWallet = () => {
  setWalletConnected(false);
  setWalletAddress("");
  handleWalletClose();

  if (walletAddress !== adminWalletAddress) {
    setIsDemo(false);
  }
};

const switchWallet = async () => {
  try {
    if (!window.ethereum) return;

    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    if (accounts.length > 0) {
      setWalletAddress(accounts[0]);
      handleWalletClose();

      if (accounts[0] !== adminWalletAddress) {
        setIsDemo(false);
      }
    }
  } catch (err) {
    console.error("Switch wallet failed:", err);
  }
};

const switchToDemo = () => {
  setWalletAddress(adminWalletAddress);
  setIsDemo(true);
};

  return (
    <>
      {walletConnected ? (
        <>
          <Button
            onClick={handleWalletClick}
            startIcon={<AccountBalanceWalletIcon sx={{ color: "#fff" }} />}
            sx={{
              color: "#fff",
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
            <MenuItem onClick={switchToDemo}>Demo Admin</MenuItem>

          </Menu>
        </>
      ) : (
        <Button
          onClick={connectWallet}
          startIcon={<AccountBalanceWalletIcon sx={{ color: "#fff" }} />}
          sx={{
            color: "#fff",
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
