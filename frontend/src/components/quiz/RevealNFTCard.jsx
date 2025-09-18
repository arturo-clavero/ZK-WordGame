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

export default function RevealNFTCard() {
  const {
    answer,
    setAnswer,
    revealNFT,
    setRevealNFT,
    sampleNFTs,
    setState,
    state,
    isDemo
  } = getContext();

const retry = ()=>{
    setState("");
    //todo new quiz!
}
    return (
        <Element name="revealNFTSection">
            {state === "completed" ? (
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
                        <Typography variant="h3" sx={{ my: 1, color: "success.main" }}>
                            Congratulations!
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4 }}>
                            Your answer was correct, you won this <strong>{revealNFT.rarity.toLowerCase()}</strong> NFT!
                        </Typography>

                        {revealNFT && (
                            <Card className="nft-card-reveal" sx={{mb: 4}}>
                                <img
                                src={revealNFT.img}
                                alt={revealNFT.name}
                                style={{
                                    width: "100%",
                                    borderTopLeftRadius: "12px",
                                    borderTopRightRadius: "12px",
                                }}
                                />
                                <CardContent>
                                <Typography variant="h6" align="center">
                                    {revealNFT.name}
                                </Typography>
                                </CardContent>
                            </Card>
                        )}
                    {isDemo === true ? (
                        <Button variant="contained" color="primary" sx={{ 
                            mt:2, 
                            mb:1,
                        }} onClick={(retry)}>
                        New Puzzle
                        </Button>
                    ) : (<></>)
                    }
                    </Card>
                    <style>
                    {`
                        .nft-card-reveal {
                            width: 350px;
                            height: 430px;
                            border-radius: 12px;
                            overflow: hidden;
                            cursor: pointer;
                            box-shadow: 0px 6px 16px rgba(0,0,0,0.15);
                            transition: transform 0.3s, box-shadow 0.3s;
                        }
                        // TODO : card does a pop up 
                    `}
                    
                    </style>
                </Grid>
            ) : <></>}
        </Element>
    );
}