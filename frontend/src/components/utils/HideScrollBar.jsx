import { GlobalStyles } from "@mui/material";

export default function HideScrollbarsGlobal(){
  return (
    <GlobalStyles
      styles={{
        "*": {
          scrollbarWidth: "none",    // Firefox
          msOverflowStyle: "none",   // IE/Edge
        },
        "*::-webkit-scrollbar": {
          width: 0,
          height: 0,
          background: "transparent",
        },
      }}
    />
  );
}
