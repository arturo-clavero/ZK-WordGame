import {getContext} from "../utils/context.jsx";
import useHandleSubmit from "./submitHook.jsx";
import {Element} from "react-scroll";
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
    revealNFT,
    setRevealNFT,
    sampleNFTs,
    state
  } = getContext();
  const randomLetters = "QWERTYXVEINKLQRT";
  const handleSubmit = useHandleSubmit();

    return (
      <Element name="quizSection">
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
            ) : state === "completed" ? (
              <Button variant="contained" color="primary" sx={{ mt: 2 }} disabled>
                Completed
              </Button>
            )
          : (
            <Button variant="contained" color="primary" sx={{ mt: 2 }} disabled>
                Loading ...
              </Button>
          )
          }
        </>
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
  </Element>
);
}