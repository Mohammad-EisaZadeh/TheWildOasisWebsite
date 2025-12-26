"use client";

import { Box, IconButton } from "@mui/material";
import { useState } from "react";

function SideNavigationDrawer() {
  const [state, setState] = useState(true);
  return (
    <Box
      sx={{
        width: "16rem",
        backgroundColor: "red",
        transform: state ? "translate(0 , 0)" : "translate(-100% , 0)",
        transition: "all 1s linear",
      }}
    >
      <IconButton
        className="absolute right-0 top-[50%] bg-blue-800"
        onClick={() => setState((state) => !state)}
      >
        asd
      </IconButton>
    </Box>
  );
}

export default SideNavigationDrawer;
