import {getContext} from "../utils/context.jsx";
import {useState} from "react";
import ChipNote from "../hero/ChipNote.jsx";

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
  const {
    answer,
    setAnswer,
    completed,
    setCompleted,
    revealNFT,
    setRevealNFT,
    sampleNFTs
  } = getContext();
  const [state, setState] = useState("");
  const randomLetters = "QWERTYXVEINKLQRT";
  const handleSubmit = () => {
    console.log("submited: ", answer);
    if (answer.toUpperCase() === "A") {
      let time1 = 5000;
      let time2 = 3000;
      let time3 = 1500;
      time2 += time1;
      time3 += time2;
      setState("generatingProofs");
      setTimeout(()=>setState("proovingProofs"), time1);
      // setKYCproved();
      // setSignatureProved();
      // setAnswerProved();
      console.log("answer correct...");
      setTimeout(()=>setCompleted(true), time2);
      setTimeout(()=>setRevealNFT(sampleNFTs[Math.floor(Math.random() * sampleNFTs.length)]), time2);

      // setCompleted(true);
      // setRevealNFT(sampleNFTs[Math.floor(Math.random() * sampleNFTs.length)]);
    }
    setAnswer("");
  };

    return (
  <Grid container justifyContent="center" sx={{ mt: 6, mb: 6 }}>
    <Card
      sx={{
        width: 600,
        minHeight: 400,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {!completed ? (
        <>
          <Typography variant="h5">Find the word to win an NFT!</Typography>

          <Box className="letters">
            {randomLetters.split("").map((letter, i) => (
              <span key={i} className="letter">
                {letter}
              </span>
            ))}
          </Box>

          <TextField
            sx={{ width: 300 }}
            placeholder="Type your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          {state === "" ? (
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} disabled>
                Loading ...
              </Button>

              <Box
                sx={{
                  mt: 2,
                  minHeight: 100,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  textAlign: "left",
                }}
              >
                {state === "generatingProofs" && (
                  <>
                    <ChipNote text="Generating Proof of Humanity" />
                    <ChipNote text="Generating Proof of Correct Solution" />
                  </>
                )}

                {state === "proovingProofs" && (
                  <>
                    <ChipNote text="Prooving Proof of Humanity" />
                    <ChipNote text="Prooving Proof of Correct Solution" />
                  </>
                )}
              </Box>
            </>
          )}
        </>
      ) : (
        <Box>
          <Typography variant="h3" sx={{ my: 2, color: "success.main" }}>
            You won an NFT!
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
        align-items: center;
        gap: 8px;
        margin: 20px auto;
        flex-wrap: wrap;
        max-width: 450px;
      }

      .letter {
        font-size: 3.8rem;
        font-weight: 600;
        font-family: "Nunito", sans-serif;
        display: inline-block;
        animation: wave 3.8s ease-in-out infinite;
      }

      @keyframes wave {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `}</style>
  </Grid>
);
}