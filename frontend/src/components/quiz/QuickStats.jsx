import { Typography, Card, Box, LinearProgress } from "@mui/material";
import {getContext} from "../utils/context.jsx";


export default function QuizStats() {
  const {stats} = getContext();

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
