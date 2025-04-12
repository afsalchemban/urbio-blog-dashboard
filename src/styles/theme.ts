import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'hsl(0, 0%, 99%)', // Set background color to your desired light mode background
    },
    text: {
      primary: '#333333', // Primary text color
      secondary: '#555555', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h5: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    body2: {
      fontSize: '1rem',
      fontStyle: 'italic',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
});

export default theme;
