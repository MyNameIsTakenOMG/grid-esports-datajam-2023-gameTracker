'use client';

import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarsIcon from '@mui/icons-material/Stars';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import React from 'react';
import { useRouter } from 'next/navigation';
import { customTheme } from '@/utils/customTheme';

export default function Nav() {
  const router = useRouter();

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          // padding: '1rem',
          display: 'flex',
          flexFlow: { xs: 'row nowrap', sm: 'column nowrap' },
          width: { xs: '100%', sm: '64px', md: '232px' },
          position: 'fixed',
          bottom: { xs: 0, sm: 'unset' },
          left: 0,
          top: { sm: 0 },
          backgroundColor: 'white',
          boxShadow: '0px -1px 2px orange',
          height: { sm: '100%' },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            cursor: 'pointer',
            width: { xs: '25%', sm: '100%' }, //'25%',
            // flexGrow: 1,
            py: { xs: '0.5rem', sm: '1rem' },
            display: 'flex',
            flexFlow: { xs: 'column nowrap', sm: 'row nowrap' },
            alignItems: 'center',
            justifyContent: 'center',
            color: 'orange',
            '&:hover': {
              backgroundColor: 'orange',
              color: 'white',
            },
          }}
          onClick={() => {
            router.push('/tournaments');
          }}
        >
          <EmojiEventsIcon />
          <Typography
            sx={{
              display: { xs: 'inline-block', sm: 'none', md: 'inline-block' },
              typography: { xs: 'body2', md: 'h6' },
            }}
          >
            Tournaments
          </Typography>
        </Box>
        <Box
          sx={{
            cursort: 'pointer',
            width: { xs: '25%', sm: '100%' }, //'25%',
            // flexGrow: 1,
            py: { xs: '0.5rem', sm: '1rem' },
            display: 'flex',
            flexFlow: { xs: 'column nowrap', sm: 'row nowrap' },
            alignItems: 'center',
            justifyContent: 'center',
            color: 'orange',
            '&:hover': {
              backgroundColor: 'orange',
              color: 'white',
            },
          }}
          onClick={() => {
            // router.push('/matches');
          }}
        >
          <SportsMmaIcon />
          <Typography
            sx={{
              display: { xs: 'inline-block', sm: 'none', md: 'inline-block' },
              typography: { xs: 'body2', md: 'h6' },
            }}
          >
            Matches
          </Typography>
        </Box>
        <Box
          sx={{
            cursor: 'pointer',
            width: { xs: '25%', sm: '100%' }, //'25%',
            // flexGrow: 1,
            py: { xs: '0.5rem', sm: '1rem' },
            display: 'flex',
            flexFlow: { xs: 'column nowrap', sm: 'row nowrap' },
            alignItems: 'center',
            justifyContent: 'center',
            color: 'orange',
            '&:hover': {
              backgroundColor: 'orange',
              color: 'white',
            },
          }}
          onClick={() => {
            // router.push('/rankings');
          }}
        >
          <StarsIcon />
          <Typography
            sx={{
              display: { xs: 'inline-block', sm: 'none', md: 'inline-block' },
              typography: { xs: 'body2', md: 'h6' },
            }}
          >
            Rankings
          </Typography>
        </Box>
        <Box
          sx={{
            cursor: 'pointer',
            width: { xs: '25%', sm: '100%' }, //'25%',
            // flexGrow: 1,
            py: { xs: '0.5rem', sm: '1rem' },
            display: 'flex',
            flexFlow: { xs: 'column nowrap', sm: 'row nowrap' },
            alignItems: 'center',
            justifyContent: 'center',
            color: 'orange',
            '&:hover': {
              backgroundColor: 'orange',
              color: 'white',
            },
          }}
          onClick={() => {
            // router.push('/account');
          }}
        >
          <AccountCircleIcon />
          <Typography
            sx={{
              display: { xs: 'inline-block', sm: 'none', md: 'inline-block' },
              typography: { xs: 'body2', md: 'h6' },
            }}
          >
            Account
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
