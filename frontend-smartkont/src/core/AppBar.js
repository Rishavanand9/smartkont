import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, Box, Typography } from "@mui/material";

export default function BottomAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ top: 0, bottom: "auto", boxShadow: "none", marginBotton: 50 }}
    >
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer">
          <Avatar />
          <Typography sx={{ margin: "0px 10px" }}>Username</Typography>
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" onClick={handleMenuClick}>
          <MoreIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          getContentAnchorEl={null}
        >
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem> */}
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
