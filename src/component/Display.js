import React from 'react';
import { TextField, useTheme } from '@mui/material';

const Display = ({ value }) => {
  const theme = useTheme(); // ✅ Access current theme (light or dark)

  return (
    <TextField
      fullWidth
      value={value}
      type="text"
      variant="outlined"
      margin="normal"
      InputProps={{
        readOnly: true,
        sx: {
          fontSize: '1.5rem',
          textAlign: 'right',
          color: theme.palette.text.primary,
        },
      }}
      sx={{
        input: {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.paper,
        },
      }}
      placeholder="0"
    />
  );
};

export default Display;


