import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Badge,
  LinearProgress,
  Menu,
  MenuItem,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";

export default function QuizCard() {
      const [answer, setAnswer] = useState("");
      const [completed, setCompleted] = useState(false);
      const [revealNFT, setRevealNFT] = useState(null);

  const randomLetters = "QWERTY";
      const handleSubmit = () => {
        if (answer.toUpperCase() === randomLetters) {
          setCompleted(true);
          setRevealNFT(sampleNFTs[Math.floor(Math.random() * sampleNFTs.length)]);
        }
        setAnswer("");
      };
    return (
    <Grid container justifyContent="center" sx={{ mt: 6, mb: 6 }}>
          <Card sx={{ width: 600, height: 600, p: 3, textAlign: "center" }}>
            {!completed ? (
              <>
                <Typography variant="h5">Arrange the letters:</Typography>
                <Box className="letters">
                  {randomLetters.split("").map((letter, i) => (
                    <span key={i} className="letter">
                      {letter}
                    </span>
                  ))}
                </Box>
                <TextField
                  fullWidth
                  placeholder="Type your answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
                  Submit
                </Button>
              </>
            ) : (
              <Box>
                <Typography variant="h4" sx={{ my: 2, color: "success.main" }}>
                  Completed ✅
                </Typography>
                {revealNFT && (
                  <Card sx={{ mt: 2 }}>
                    <img src={revealNFT.img} alt={revealNFT.name} style={{ width: "100%" }} />
                    <CardContent>
                      <Typography variant="body1">{revealNFT.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {revealNFT.rarity}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Box>
            )}
          </Card>
        </Grid>
    )
}