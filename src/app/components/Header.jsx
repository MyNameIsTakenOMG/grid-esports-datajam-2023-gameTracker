'use client'

import { Box } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation'

export default function Header() {

  const router = useRouter()

  return <Box sx={{
    padding: '1.5rem', position: 'sticky', top: 0,
    backgroundColor: 'white',
    boxShadow: '0px 1px 2px orange',
    zIndex: 10
  }}
    onClick={() => { router.push('/') }}
  >Header</Box>;
}
