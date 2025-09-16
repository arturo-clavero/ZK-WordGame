import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light', // 'dark' is also supported
    primary: {
      main: '#1976d2', // MUI default blue
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  </StrictMode>,
)
