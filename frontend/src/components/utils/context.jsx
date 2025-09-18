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
  const sampleNFTs = [


{ name: "NFT Boss", img: "/nfts/1boss.png", rarity: "Elite" },
{ name: "NFT Runner", img: "/nfts/1game.png", rarity: "Myth" },
{ name: "NFT Alpha", img: "/nfts/1eye.png", rarity: "Epic" },
{ name: "NFT Gamma", img: "/nfts/1pipe.png", rarity: "Rare" },
{ name: "NFT Beta", img: "/nfts/1tongue.png", rarity: "Basic" },
{ name: "NFT Fierce", img: "/nfts/1fire.png", rarity: "Hero" },


  ];
  //  { name: "NFT Gamma", img: "/nfts/alpha.png", rarity: "Mini" },
  //   { name: "NFT Beta", img: "/nfts/rain.png", rarity: "Epic" },
  //   { name: "NFT Alpha", img: "/nfts/beta.png", rarity: "Rare" },
  //     { name: "NFT Gamma", img: "/nfts/try5.png", rarity: "Mini" },
  //     { name: "NFT Gamma", img: "/nfts/try3.png", rarity: "Mini" },
  //   { name: "NFT Alpha", img: "/nfts/try1.png", rarity: "Rare" },

  const [state, setState] = useState("");
  const [proofStatus, setProofStatus] = useState({
      poh: "idle",
      answer: "idle",
      signature: "idle",
      verified: "idle",
  });
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

      stats,
      sampleNFTs,

      state,
      setState,

      proofStatus,
      setProofStatus,

    }}>
    {children}
  </AppContext.Provider>
);
}

export function getContext() {
  return useContext(AppContext);
}
