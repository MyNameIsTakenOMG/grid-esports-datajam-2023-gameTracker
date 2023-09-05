'use client';

import { Box, Chip, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Sery() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        px: '1rem',
        flexGrow: 1,
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Dota2 The International 2022
      </Typography>

      {/* scoreboard  */}
      <Box sx={{ display: 'flex', flexFlow: 'row nowrap', mb: 2 }}>
        <Paper
          sx={{
            width: '35%',
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            p: '0.5rem 1rem',
          }}
        >
          <Box sx={{ p: '1rem' }}>
            <Image
              width="50"
              height="50"
              alt="Secret"
              src="/team/Secret-logo.png"
            />
          </Box>
          <Typography variant="body1">Secret</Typography>
        </Paper>

        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body1">Best of 3</Typography>
          <Typography variant="h6">1:1</Typography>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            ongoing
          </Typography>
        </Box>

        <Paper
          sx={{
            width: '35%',
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            p: '0.5rem 1rem',
          }}
        >
          <Box sx={{ p: '1rem' }}>
            <Image
              width="50"
              height="50"
              alt="Secret"
              src="/team/tundra-esports-logo.png"
            />
          </Box>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Tundra Esports
          </Typography>
        </Paper>
      </Box>

      {/* statisticsPanel  */}
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
        {/* game tabs  */}
        <Box
          sx={{
            mb: 2,
            maxWidth: { xs: 320, sm: 480 },
            bgcolor: 'background.paper',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            <Tab label="Game1" />
            <Tab label="Game2" />
          </Tabs>
        </Box>

        {/* game result  */}
        <Box sx={{ display: 'flex', flexFlow: 'row nowrap', mb: 2 }}>
          <Box
            sx={{
              width: '35%',
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              width="25"
              height="25"
              alt="Secret"
              src="/team/Secret-logo.png"
            />
            <Typography variant="body2">Secret</Typography>
          </Box>
          <Box
            sx={{
              width: '30%',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" color="green">
              Win
            </Typography>
            <Typography variant="h6">:</Typography>
            <Typography variant="h6" color={'red'}>
              Lose
            </Typography>
          </Box>
          <Box
            sx={{
              width: '35%',
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              width="25"
              height="25"
              alt="Secret"
              src="/team/tundra-esports-logo.png"
            />
            <Typography variant="body2">Tundra</Typography>
          </Box>
        </Box>
        {/* ban / pick  */}
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          {/* team 1  */}
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
              width: '45%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '0.5rem',
              }}
            >
              <Typography>Bans</Typography>
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '0.5rem',
              }}
            >
              <Typography>Picks</Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={45}
                  height={30}
                  alt="lion"
                  src="/hero/lion.webp"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}
                >
                  <AccountCircleIcon
                    sx={{ width: '22px', height: '22px', alignSelf: 'center' }}
                  />
                  <Typography variant="body2">Puppey</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={45}
                  height={30}
                  alt="lion"
                  src="/hero/lion.webp"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}
                >
                  <AccountCircleIcon
                    sx={{ width: '22px', height: '22px', alignSelf: 'center' }}
                  />
                  <Typography variant="body2">Puppey</Typography>
                </Box>
              </Box>{' '}
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={45}
                  height={30}
                  alt="lion"
                  src="/hero/lion.webp"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}
                >
                  <AccountCircleIcon
                    sx={{ width: '22px', height: '22px', alignSelf: 'center' }}
                  />
                  <Typography variant="body2">Puppey</Typography>
                </Box>
              </Box>{' '}
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={45}
                  height={30}
                  alt="lion"
                  src="/hero/lion.webp"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}
                >
                  <AccountCircleIcon
                    sx={{ width: '22px', height: '22px', alignSelf: 'center' }}
                  />
                  <Typography variant="body2">Puppey</Typography>
                </Box>
              </Box>{' '}
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={45}
                  height={30}
                  alt="lion"
                  src="/hero/lion.webp"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}
                >
                  <AccountCircleIcon
                    sx={{ width: '22px', height: '22px', alignSelf: 'center' }}
                  />
                  <Typography variant="body2">Puppey</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* team 2  */}
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
              width: '45%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '0.5rem',
              }}
            >
              <Typography>Bans</Typography>
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
              <Image width={38} height={25} alt="lion" src="/hero/lion.webp" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '0.5rem',
              }}
            >
              <Typography>Picks</Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={45}
                  height={30}
                  alt="lion"
                  src="/hero/lion.webp"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}
                >
                  <AccountCircleIcon
                    sx={{ width: '22px', height: '22px', alignSelf: 'center' }}
                  />
                  <Typography variant="body2">Puppey</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={45}
                  height={30}
                  alt="lion"
                  src="/hero/lion.webp"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}
                >
                  <AccountCircleIcon
                    sx={{ width: '22px', height: '22px', alignSelf: 'center' }}
                  />
                  <Typography variant="body2">Puppey</Typography>
                </Box>
              </Box>{' '}
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={45}
                  height={30}
                  alt="lion"
                  src="/hero/lion.webp"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}
                >
                  <AccountCircleIcon
                    sx={{ width: '22px', height: '22px', alignSelf: 'center' }}
                  />
                  <Typography variant="body2">Puppey</Typography>
                </Box>
              </Box>{' '}
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={45}
                  height={30}
                  alt="lion"
                  src="/hero/lion.webp"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}
                >
                  <AccountCircleIcon
                    sx={{ width: '22px', height: '22px', alignSelf: 'center' }}
                  />
                  <Typography variant="body2">Puppey</Typography>
                </Box>
              </Box>{' '}
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Image
                  width={45}
                  height={30}
                  alt="lion"
                  src="/hero/lion.webp"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}
                >
                  <AccountCircleIcon
                    sx={{ width: '22px', height: '22px', alignSelf: 'center' }}
                  />
                  <Typography variant="body2">Puppey</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* game fileters  */}
        <Stack
          direction={'row'}
          sx={{
            justifyContent: 'center',
            width: '70%',
            alignSelf: 'center',
            mb: 2,
          }}
        >
          <Typography
            variant="body2"
            color="orange"
            sx={{
              outline: 'solid orange',
              width: '25%',
              textAlign: 'center',
              borderRadius: '50px 0 0 50px',
            }}
          >
            Golds
          </Typography>
          <Typography
            variant="body2"
            color="orange"
            sx={{ outline: 'solid orange', width: '25%', textAlign: 'center' }}
          >
            KDA
          </Typography>
          <Typography
            variant="body2"
            color="orange"
            sx={{ outline: 'solid orange', width: '25%', textAlign: 'center' }}
          >
            Builds
          </Typography>
          <Typography
            variant="body2"
            color="orange"
            sx={{
              outline: 'solid orange',
              width: '25%',
              textAlign: 'center',
              borderRadius: '0 50px 50px 0',
            }}
          >
            Replay
          </Typography>
        </Stack>
      </Box>

      <div style={{ height: '80px', width: '100%' }}></div>
    </Box>
  );
}
