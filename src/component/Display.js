import React from 'react';
import { TextField } from '@mui/material';

const Display = ({ value }) => {
  return (
    <TextField
      fullWidth
      value={value}
      variant="outlined"
      margin="normal"
      InputProps={{ readOnly: true }}
    />
  );
};

export default Display;
