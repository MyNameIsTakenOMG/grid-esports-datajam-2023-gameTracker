import { Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarsIcon from '@mui/icons-material/Stars';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import React from 'react';

export default function Nav() {
  return (
    <Box
      sx={{
        padding: '1rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
        }}
      >
        <EmojiEventsIcon />
        <Typography variant="body2">Tournaments</Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
        }}
      >
        <SportsMmaIcon />
        <Typography>Matches</Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
        }}
      >
        <StarsIcon />
        <Typography>Rankings</Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
        }}
      >
        <AccountCircleIcon />
        <Typography>Account</Typography>
      </Box>
    </Box>
  );
}
