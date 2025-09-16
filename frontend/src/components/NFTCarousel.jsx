import {
  Typography,
  Box,
  Card,
  CardContent,
  Badge,
} from "@mui/material";

const sampleNFTs = [
  { name: "NFT Alpha", img: "https://via.placeholder.com/150", rarity: "Rare" },
  { name: "NFT Beta", img: "https://via.placeholder.com/150", rarity: "Epic" },
  { name: "NFT Gamma", img: "https://via.placeholder.com/150", rarity: "Legendary" },
];

export default function NFTCarousel() {
  return (
    <Box
      className="nft-carousel"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
        marginTop: 4,
      }}
    >
      {sampleNFTs.map((nft, i) => (
        <Badge
          key={i}
          badgeContent={nft.rarity}
          color="secondary"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Card className="nft-card">
            <img
              src={nft.img}
              alt={nft.name}
              style={{ width: "100%", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
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
          animation: floatNFTs 3s ease-in-out infinite alternate;
        }

        .nft-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 24px rgba(0,0,0,0.3);
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
