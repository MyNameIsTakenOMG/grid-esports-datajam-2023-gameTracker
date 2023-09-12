'use client';

import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';
import { customTheme } from '@/utils/customTheme';

const fontFamilyTheme = createTheme({
  typography: {
    fontFamily: ['"Kalam"', 'cursive'].join(','),
  },
});

export default function Header() {
  const router = useRouter();

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          padding: '1rem',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          boxShadow: '0px 1px 2px orange',
          zIndex: 5,
          width: { sm: 'calc(100% - 64px)', md: 'calc(100% - 232px)' },
          left: { sm: '64px', md: '232px' },
        }}
      >
        <ThemeProvider theme={fontFamilyTheme}>
          <Typography
            variant="h6"
            sx={{
              display: 'inline-block',
              cursor: 'pointer',
              color: 'orange',
              borderRadius: '5px',
            }}
            onClick={() => {
              router.push('/');
            }}
          >
            Game Tracker
          </Typography>
        </ThemeProvider>
      </Box>
    </ThemeProvider>
  );
}
