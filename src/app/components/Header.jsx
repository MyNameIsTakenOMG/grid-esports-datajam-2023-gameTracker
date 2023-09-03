import { Box } from '@mui/material';
import React from 'react';

export default function Header() {
  return <Box sx={{
    padding: '1.5rem', position: 'sticky', top: 0,
    backgroundColor: 'white',
    boxShadow: '0px 1px 2px orange',
    zIndex: 10
  }}>Header</Box>;
}
