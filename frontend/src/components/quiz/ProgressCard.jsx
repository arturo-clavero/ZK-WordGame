import { useState, useEffect } from "react";
import { getContext } from "../utils/context.jsx";
import {Element, scroller} from "react-scroll";
import {
  Typography,
  Box,
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export default function ProgressCard() {
    const { 
        state, 
        proofStatus, 
        setProofStatus ,
        setState,
        setRevealNFT,
        sampleNFTs
    } = getContext(); 

  useEffect(() => {
    if (state === "generatingProofs") {
      // Step 1: Generating PoH
setTimeout(() => {
        setProofStatus((prev) => ({ ...prev, poh: "success", answer: "loading" }));
      }, 1500);      setTimeout(() => {
        setProofStatus((prev) => ({ ...prev, poh: "success", answer: "loading" }));
      }, 2500);

      // Step 2: Generating Answer Proof
      setTimeout(() => {
        setProofStatus((prev) => ({ ...prev, answer: "success", signature: "loading" }));
      }, 4000);

      // Step 3: Generating Signature Proof
      setTimeout(() => {
        setProofStatus((prev) => ({ ...prev, signature: "success" }));
      }, 5500);

      // Step 4: Verifying Proofs
      setTimeout(() => {
        setProofStatus((prev) => ({ ...prev, verified: "loading" }));
      }, 6000);

      setTimeout(() => {
        setProofStatus((prev) => ({ ...prev, verified: "success" }));
      }, 7500);

      setTimeout(() => {
        setState("completed");
        setRevealNFT(sampleNFTs[Math.floor(Math.random() * sampleNFTs.length)]);
                scroller.scrollTo("revealNFTSection", {
                    duration: 1000,
                    delay: 0,
                    smooth: "easeIn",
                    offset: -50,
                });
      }, 8000);
    }
  }, [state]);


  const renderIcon = (status) => {
    if (status === "loading") return <CircularProgress size={20} />;
    if (status === "success") return <CheckIcon color="success" />;
    if (status === "error") return <CloseIcon color="error" />;
    return null;
  };

  return (
    <Element name="progressSection">
        {state === "" ? (<></>) : (
            <Grid container justifyContent="center" sx={{ mt: 6, mb: 6 }}>
                <Card
                    sx={{
                    width: 600,
                    minHeight: 300,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "center",
                    }}
                >
                    <Typography variant="h5" sx={{  }}>
                    Proof Progress
                    </Typography>

                    <List sx={{ width: "100%" }}>
                    <ListItem>
                        <ListItemIcon>{renderIcon(proofStatus.poh)}</ListItemIcon>
                        <ListItemText primary="Proof of Humanity" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>{renderIcon(proofStatus.answer)}</ListItemIcon>
                        <ListItemText primary="Proof of Answer" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>{renderIcon(proofStatus.signature)}</ListItemIcon>
                        <ListItemText primary="Proof of Signature" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>{renderIcon(proofStatus.verified)}</ListItemIcon>
                        <ListItemText primary="Validating Proofs on-chain" />
                    </ListItem>
                    </List>

                    {proofStatus.verified === "success" && (
                    <Typography variant="body2" sx={{ mt: 2, color: "success.main" }}>
                        ✅ All proofs verified. NFT will be minted!
                    </Typography>
                    )}
                </Card>
            </Grid>
        )}
    </Element>
  );
}
