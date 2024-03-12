//Colors:
/**
 * White: '#ffffff' --------------> Text Color2 / Card/Modal Bg
 * Grey Dark: '#727272 -----> Text Color
 * Red: '#cd0d32  -------> Primary
 * Grey Light: '#e1dfe4' -----> App BG
 * Pink: '#df788d' -------> Secondary
 * 
 */


import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#cd0d32', // Red
    },
    secondary: {
      main: '#df788d', // Pink
    },
    text: {
      primary: '#727272', // Grey Dark
      secondary: '#ffffff', // White
    },
    background: {
      default: '#e1dfe4', // Grey Light
      paper: '#ffffff', // White
    },
  },
  typography: {
    fontFamily: 'monospace',
    fontSize: 16,
  },
});