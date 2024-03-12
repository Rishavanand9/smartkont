import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Typography, useMediaQuery } from "@mui/material";
import { theme } from "../utils/theme";

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
  width: ${(props) => (props.isMobile ? "70%" : "50%")};
  height: 30px;
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

const Login = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogin = () => {
    // Add your API call for login here

    // Navigate to home page after successful login
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography>Login</Typography>
        <Input type="text" placeholder="Username" isMobile={isMobile} />
        <Input type="password" placeholder="Password" isMobile={isMobile}/>
        <Button
          onClick={handleLogin}
          color={theme.palette.primary.main}
          width={isMobile? '50%' :"35%"}
        >
          Login
        </Button>
        <Button
          onClick={() => navigate("/register")}
          color={theme.palette.secondary.main}
          width={isMobile? '50%' :"35%"}
        >
          Register New User
        </Button>
        <Button
          onClick={() => navigate("/reset")}
          color={theme.palette.secondary.main}
          width={isMobile? '50%' :"35%"}
        >
          Forgot Password
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
