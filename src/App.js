import React, { useState, useMemo } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
} from '@mui/material';
import Calculator from './component/Calculator';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
          bgcolor: 'background.default',
        }}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginRight: '16px',
            padding: '8px 12px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Dark Mode
        </button>
      </Box>

      <Calculator />
    </ThemeProvider>
  );
}

export default App;


