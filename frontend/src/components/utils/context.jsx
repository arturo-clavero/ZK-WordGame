import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function ContextProvider({ children }) {
  const [isDemo, setIsDemo] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletMenuAnchor, setWalletMenuAnchor] = useState(null);
  const [answer, setAnswer] = useState("");
  const [completed, setCompleted] = useState(false);
  const [revealNFT, setRevealNFT] = useState(null);
  const [stats] = useState({ attempts: 12, accuracy: 83, difficulty: 70 });
  const adminWalletAddress = "TODO";
  return (
    <AppContext.Provider value={{
      adminWalletAddress,
      isDemo, 
      setIsDemo,

      walletConnected, 
      setWalletConnected,
      walletAddress,
      setWalletAddress,
      walletMenuAnchor,
      setWalletMenuAnchor,

      answer,
      setAnswer,
      completed,
      setCompleted,
      revealNFT,
      setRevealNFT,

      stats

    }}>
    {children}
  </AppContext.Provider>
);
}

export function getContext() {
  return useContext(AppContext);
}
