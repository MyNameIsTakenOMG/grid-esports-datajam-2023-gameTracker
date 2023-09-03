'use client';

import { Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarsIcon from '@mui/icons-material/Stars';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();

  return (
    <Box
      sx={{
        // padding: '1rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        boxShadow: '0px -1px 2px orange',
      }}
    >
      <Box
        sx={{
          width: '25%',
          // flexGrow: 1,
          py: '1rem',
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
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
        <Typography variant="body2">Tournaments</Typography>
      </Box>
      <Box
        sx={{
          width: '25%',
          // flexGrow: 1,
          py: '1rem',
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
          color: 'orange',
          '&:hover': {
            backgroundColor: 'orange',
            color: 'white',
          },
        }}
        onClick={() => {
          router.push('/matches');
        }}
      >
        <SportsMmaIcon />
        <Typography variant="body2">Matches</Typography>
      </Box>
      <Box
        sx={{
          width: '25%',
          // flexGrow: 1,
          py: '1rem',
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
          color: 'orange',
          '&:hover': {
            backgroundColor: 'orange',
            color: 'white',
          },
        }}
        onClick={() => {
          router.push('/rankings');
        }}
      >
        <StarsIcon />
        <Typography variant="body2">Rankings</Typography>
      </Box>
      <Box
        sx={{
          width: '25%',
          // flexGrow: 1,
          py: '1rem',
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
          color: 'orange',
          '&:hover': {
            backgroundColor: 'orange',
            color: 'white',
          },
        }}
        onClick={() => {
          router.push('/account');
        }}
      >
        <AccountCircleIcon />
        <Typography variant="body2">Account</Typography>
      </Box>
    </Box>
  );
}
