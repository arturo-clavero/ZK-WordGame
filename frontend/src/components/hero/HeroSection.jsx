import {
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import NFTCarousel from "./NFTCarousel.jsx";
import ChipNote from "./ChipNote.jsx";

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
        <ChipNote text="ZK-Proofs Secure Your Answers" />
        <ChipNote text="One Attempt Per Person (ZK Verified)" />

      </Stack>

      <Button variant="contained" sx={{
            mt: 2,
            mb: 8,
            backgroundColor: "#bd46b7ff",
            color: "#fff",
            "&:hover": {
            backgroundColor: "#e288e0",
            },}}>
        Start Quiz
      </Button>

      <NFTCarousel />

    </Box>

  </>
    );

}
