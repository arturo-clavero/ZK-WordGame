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
    <>
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        py: 15,
        bgcolor: "primary.main",
        color: "#fff",
      }}
    >
          <Box sx ={{ py:4 }}></Box>

      <Typography variant="h1" sx={{ mb: 2 }}>
        Daily Puzzle & NFT Rewards!
      </Typography>

      <Typography variant="h3" sx={{ mb: 4 }}>
        Solve puzzles, earn exclusive NFTs every day.
      </Typography>

      <Stack
        direction="row"
        spacing={3}
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

      <Button variant="contained" sx={{
      mt: 2,
    mb: 8,
    backgroundColor: "#bd46b7ff",  // 👈 your custom color
    color: "#fff",
    "&:hover": {
      backgroundColor: "#e288e0", // 👈 slightly darker for hover
    },}}>
        Start Quiz
      </Button>

      <NFTCarousel />

    </Box>

  </>
    );

}
