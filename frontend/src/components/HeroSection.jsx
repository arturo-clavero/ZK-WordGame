import {
  Typography,
  Box,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import NFTCarousel from "./NFTCarousel.jsx";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        py: 6,
        bgcolor: "primary.main",
        color: "#fff",
      }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        Daily Puzzle & NFT Rewards!
      </Typography>

      <Typography variant="h3" sx={{ mb: 4 }}>
        Solve puzzles, earn exclusive NFTs every day.
      </Typography>

      {/* ✅ ZK Proof badges */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mb: 3 }}
      >
        <Chip
          icon={<SecurityIcon/>}
          label="ZK-Proofs Secure Your Answers"
          sx={{
            bgcolor: "rgba(255,255,255,0.15)",
            color: "#fff",
            fontWeight: 500,
            "& .MuiChip-icon": {
                color: "#ff9cfaff",
            },
          }}
        />
        <Chip
          icon={<SecurityIcon />}
          label="One Attempt Per Person (ZK Verified)"
          sx={{
            bgcolor: "rgba(255,255,255,0.15)",
            color: "#fff",
            fontWeight: 500,
            "& .MuiChip-icon": {
                color: "#ff9cfaff",
            },
          }}
        />
      </Stack>

      <Button variant="contained" color="secondary" sx={{ mb: 4 }}>
        Start Quiz
      </Button>

      <NFTCarousel />
    </Box>
  );
}
