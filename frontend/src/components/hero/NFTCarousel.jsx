import { useState, useEffect, useRef } from "react";
import { Typography, Box, Card, CardContent, Badge } from "@mui/material";

const sampleNFTs = [
  { name: "NFT Alpha", img: "/nfts/alpha.png", rarity: "Rare" },
  { name: "NFT Beta", img: "/nfts/beta.png", rarity: "Epic" },
  { name: "NFT Gamma", img: "/nfts/gamma.png", rarity: "Legendary" },
  { name: "NFT Alpha", img: "/nfts/alpha.png", rarity: "Rare" },
  { name: "NFT Beta", img: "/nfts/beta.png", rarity: "Epic" },
  { name: "NFT Gamma", img: "/nfts/gamma.png", rarity: "Legendary" },
];

export default function NFTCarousel() {
  const containerRef = useRef(null);
  const [visibleNFTs, setVisibleNFTs] = useState(sampleNFTs);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 160; // same as .nft-card width
      const gap = 24; // gap between cards in px (6 * 4)
      const maxCards = Math.floor((containerWidth + gap) / (cardWidth + gap));
      setVisibleNFTs(sampleNFTs.slice(0, maxCards));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      ref={containerRef}
      className="nft-carousel"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        marginTop: 4,
        mx: "auto",
        overflow: "hidden",
        maxWidth: 1200,
            pt: "20px", // add padding-top to accommodate float

      }}
    >
      {visibleNFTs.map((nft, i) => (
        <Badge
          className="float"
          key={i}
          badgeContent={nft.rarity}
          color="secondary"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Card className="nft-card">
            <img
              src={nft.img}
              alt={nft.name}
              style={{
                width: "100%",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            />
            <CardContent>
              <Typography variant="body2" align="center">
                {nft.name}
              </Typography>
            </CardContent>
          </Card>
        </Badge>
      ))}

      <style>{`
        .nft-card {
          width: 160px;
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0px 6px 16px rgba(0,0,0,0.15);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .float {
          animation: floatNFTs 3s ease-in-out infinite alternate;
        }
        .nft-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 24px rgba(0,0,0,0.4);
        }
        @keyframes floatNFTs {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </Box>
  );
}
