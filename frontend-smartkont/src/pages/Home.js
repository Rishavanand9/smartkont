import React, { useState } from "react";
import { IconButton, TextField, Box, Tabs, Tab, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from '@mui/icons-material/Search';
import Loader from "../core/Loader";

function Home() {
  const [search, setSearch] = useState("");
  const [value, setValue] = React.useState("Containers");
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setSearch(val);
  };

  const handleSearch = () => {
    setIsLoading(true); // Set loading state to true

    // Simulate loading for 3 seconds
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 3 seconds
    }, 3000);
  };

  // const allDeviceList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 
  return (
    <>
      {/**
       * --------------------------------------------------------
       */}
      <Box
        sx={{
          marginTop: "75px",
          textAlign: "center",
          display: "flex",
          gap: 2,
          justifyContent: "center", // Center items horizontally
          alignItems: "center", // Center items vertically
        }}
      >
        <TextField
          value={search.text}
          onChange={handleChange}
          placeholder="Container/Device Id"
          endAdornment={<CloseIcon style={{ color: "#ccc" }} />}
          sx={{
            fontSize: 12,
            background: "#fff",
            minWidth: "70%",
          }}
        />
        <IconButton
          sx={{
            borderRadius: 10,
            background: "#df788d",
            color: "#fff",
          }}
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Box>
      {/**
       * --------------------------------------------------------
       */}
      <Tabs
        value={value}
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="transparent"
        aria-label="secondary tabs example"
        sx={{
          "& .MuiTab-root": {
            color: "#727272", // Default color for unselected tabs
            textTransform: 'none', // Disable default text transformation
          },
          "& .Mui-selected": {
            color: "primary.main", // Primary color for selected tab
            textTransform: 'none', // Disable default text transformation
            zoom: '1.4',
          },
        }}
      >
        <Tab value="Containers" label="Containers" />
        <Tab value="Devices" label="Devices"/>
      </Tabs>
      <Divider/>
      
      {isLoading && <Loader />}
    </>
  );
}

export default Home;
