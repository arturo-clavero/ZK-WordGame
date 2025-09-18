import {getContext} from "../utils/context.jsx";
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

export default function ProgressCard() {
  const {
    answer,
    setAnswer,
    completed,
    setCompleted,
    revealNFT,
    setRevealNFT,
    sampleNFTs,
    state
  } = getContext();
    return (
        <Element name="progressSection">
            {state === "" ? (<></>) : (
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
                            <Typography variant="h5">Progress</Typography>
                            </>
                    </Card>
                </Grid>
            )}
        </Element>
    );
}