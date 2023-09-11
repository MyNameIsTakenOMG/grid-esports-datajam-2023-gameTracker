'use client';

import { Box, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';
import { customTheme } from '@/utils/customTheme';

export default function Header() {
  const router = useRouter();

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          padding: '1.5rem',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          boxShadow: '0px 1px 2px orange',
          zIndex: 5,
          width: { sm: 'calc(100% - 64px)', md: 'calc(100% - 232px)' },
          left: { sm: '64px', md: '232px' },
        }}
        onClick={() => {
          router.push('/');
        }}
      >
        Header
      </Box>
    </ThemeProvider>
  );
}
