import React from 'react';
import { Grid, Button } from '@mui/material';

const ButtonPanel = ({ onClick }) => {
 const buttons = [
  '(', ')', '⌫', 'C',
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '+/-', '0', '%', '+',
  '='
];

  return (
    <Grid container spacing={1}>
      {buttons.map((btn, i) => (
        <Grid item xs={btn === '=' ? 12 : 3} key={i}>
          <Button
            variant="contained"
            color={btn === 'C' ? 'error' : 'primary'}
            fullWidth
            onClick={() => onClick(btn)}
          >
            {btn}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ButtonPanel;
