import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(evaluate(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === '⌫') {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === '+/-') {
      if (input) {
        setInput((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      const allowed = '0123456789/*-+%.()';
      if (allowed.includes(e.key)) {
        setInput((prev) => prev + e.key);
      } else if (e.key === 'Enter') {
        try {
          setInput(evaluate(input).toString());
        } catch {
          setInput('Error');
        }
      } else if (e.key === 'Backspace') {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key === 'Escape') {
        setInput('');
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [input]);

  return (
    <Box
      sx={{
        maxWidth: 400,
        width: '90%',
        margin: '20px auto',
      }}
    >
      <Paper elevation={4} sx={{ padding: { xs: 2, sm: 3 } }}>
        <Typography variant="h5" align="center" gutterBottom>
          Calculator
        </Typography>
        <Display value={input} />
        <ButtonPanel onClick={handleButtonClick} />
      </Paper>
    </Box>
  );
};

export default Calculator;


