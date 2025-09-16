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

export default function quizCard(){
    const [stats] = useState({ attempts: 12, accuracy: 83, difficulty: 70 });
    return (
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item>
            <Card sx={{ p: 2, minWidth: 120, textAlign: "center" }}>
              <Typography variant="subtitle2">Attempts Today</Typography>
              <Typography variant="h6">{stats.attempts}</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ p: 2, minWidth: 120, textAlign: "center" }}>
              <Typography variant="subtitle2">Accuracy</Typography>
              <Typography variant="h6">{stats.accuracy}%</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ p: 2, minWidth: 120, textAlign: "center" }}>
              <Typography variant="subtitle2">Difficulty</Typography>
              <LinearProgress variant="determinate" value={stats.difficulty} sx={{ mt: 1, height: 10, borderRadius: 5 }} />
            </Card>
          </Grid>
        </Grid>
    )
}