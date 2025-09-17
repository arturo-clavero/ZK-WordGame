import {
  Chip,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";

export default function ChipNote({text}) {
    return (
    <Chip
          icon={<SecurityIcon/>}
          label={text}
          sx={{
            bgcolor: "rgba(255,255,255,0.15)",
            color: "#fff",
            fontWeight: 500,
            "& .MuiChip-icon": {
                color: "#ff9cfaff",
            },
          }}
        />
    )
}