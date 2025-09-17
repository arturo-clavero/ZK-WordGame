import { useState } from "react";
import { Typography, Card, Box, LinearProgress } from "@mui/material";

export default function QuizStats() {
  const [stats] = useState({ attempts: 12, accuracy: 83, difficulty: 70 });

  return (
    <Card
      sx={{
        mt: 4,
        p: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Box textAlign="center" flex={1}>
        <Typography variant="subtitle2" color="text.secondary">
          Attempts Today
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          {stats.attempts}
        </Typography>
      </Box>

      <Box textAlign="center" flex={1}>
        <Typography variant="subtitle2" color="text.secondary">
          Accuracy
        </Typography>
        <Typography variant="h6" fontWeight={600} color="primary">
          {stats.accuracy}%
        </Typography>
      </Box>

      <Box textAlign="center" flex={1}>
        <Typography variant="subtitle2" color="text.secondary">
          Difficulty
        </Typography>
        <LinearProgress
          variant="determinate"
          value={stats.difficulty}
          sx={{
            mt: 1,
            height: 10,
            borderRadius: 5,
            backgroundColor: "grey.200",
          }}
        />
      </Box>
    </Card>
  );
}
