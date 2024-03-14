import React from "react";
import AppBar from "@mui/material/AppBar";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function BottomAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 'auto',
        bottom: "0",
        boxShadow: "none",
        textAlign:'center',
        display: 'flex',
        alignItems: 'center', // Center items vertically
        height: 90, // Dynamic height based on theme spacing
        background: 'transparent'
      }}
    >
      <IconButton
        sx={{
          borderRadius: 10,
          background: "#82ad61",
          color: "#fff",
          height: 80,
          width: 80,
        }}
      >
        <AddIcon />
      </IconButton>
    </AppBar>
  );
}
