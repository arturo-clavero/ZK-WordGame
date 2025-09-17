import { useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
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
          <style>{`
          .letters {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin: 20px 0;
          }

          .letter {
            font-size: 3.8rem;
            font-weight: 600;
            font-family: "Nunito", sans-serif;
            display: inline-block;
            animation: wave 1.8s ease-in-out infinite;
          }

          @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
        </Grid>
        
    )
}