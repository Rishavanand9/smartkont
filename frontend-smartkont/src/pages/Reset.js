import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { theme } from "../utils/theme";
import { useMediaQuery } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: ${(props) => props.isMobile ? '70%' :  "50%"};
  height: 25px;
  font-size: 14px;

  &:focus {
    border-color: ${(props) => props.theme.palette.primary.main};
    outline: none; /* Optional: Remove the default outline */
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  color: white;
  cursor: pointer;
  width: ${(props) => props.width};
  height: 50px;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

const Reset = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleReset = () => {
    // Add your API call for login here

    // Navigate to home page after successful login
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography>Reset Password</Typography>
        <Input type="text" placeholder="Current Password" isMobile/>
        <Input type="password" placeholder="New Password" isMobile/>
        <Input type="text" placeholder="Confirm Password" isMobile/>
        <Button
          onClick={handleReset}
          color={theme.palette.primary.main}
          width={isMobile? '50%' :"35%"}
        >
          Reset Password
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default Reset;
