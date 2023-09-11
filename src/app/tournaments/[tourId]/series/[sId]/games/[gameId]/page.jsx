import { Badge, Box, Grid, Paper, Stack, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import Image from 'next/image';

export default function Game() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        px: '0.5rem',
        flexGrow: 1,
      }}
    >
      <Typography variant="body1" sx={{ my: 2 }}>
        TI2022 - Secret vs Tundra Esports
      </Typography>

      {/* result-board  */}
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
          <Typography variant="body2">Game 1</Typography>
          <Stack direction={'row'}>
            <Typography variant="h6" color={'green'}>
              Win
            </Typography>
            <Typography variant="h6">:</Typography>
            <Typography variant="h6" color={'red'}>
              Lose
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: 'grey',
              color: 'white',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            Ended
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

      {/* replay & live events-board  */}
      <Stack
        direction="column-reverse"
        sx={{
          border: '1px solid black',
          borderRadius: '5px',
          alignSelf: 'center',
          width: '90%',
          height: '300px',
          my: 2,
          p: 1,
          overflowY: 'auto',
        }}
      >
        <Typography
          variant="body2"
          sx={{ p: 1, borderBottom: '1px solid grey' }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
          optio.
        </Typography>
        <Typography
          variant="body2"
          sx={{ p: 1, borderBottom: '1px solid grey' }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
          optio.
        </Typography>
      </Stack>

      {/* ban / pick  */}
      <Stack direction={'row'} sx={{ my: 2 }}>
        <Typography sx={{ width: '50%', textAlign: 'center' }}>
          Secret
        </Typography>
        <Typography sx={{ width: '50%', textAlign: 'center' }}>
          Tundra Esports
        </Typography>
      </Stack>
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
            {/* <Typography>Bans</Typography> */}
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
            {/* <Typography>Picks</Typography> */}
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
              }}
            >
              <Image width={45} height={30} alt="lion" src="/hero/lion.webp" />
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
              <Image width={45} height={30} alt="lion" src="/hero/lion.webp" />
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
              <Image width={45} height={30} alt="lion" src="/hero/lion.webp" />
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
              <Image width={45} height={30} alt="lion" src="/hero/lion.webp" />
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
              <Image width={45} height={30} alt="lion" src="/hero/lion.webp" />
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
            {/* <Typography>Bans</Typography> */}
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
            {/* <Typography>Picks</Typography> */}
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
              }}
            >
              <Image width={45} height={30} alt="lion" src="/hero/lion.webp" />
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
              <Image width={45} height={30} alt="lion" src="/hero/lion.webp" />
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
              <Image width={45} height={30} alt="lion" src="/hero/lion.webp" />
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
              <Image width={45} height={30} alt="lion" src="/hero/lion.webp" />
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
              <Image width={45} height={30} alt="lion" src="/hero/lion.webp" />
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

      {/* stats board  */}
      <Box sx={{ display: 'flex', flexFlow: 'row nowrap' }}>
        {/* left  */}
        <Box sx={{ width: '50%', display: 'flex', flexFlow: 'column nowrap' }}>
          {/* player & hero & builds */}
          <Box sx={{ display: 'flex', flexFlow: 'row nowrap' }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                flexFlow: 'column nowrap',
                alignItems: 'center',
                mr: '0.5rem',
              }}
            >
              <Badge badgeContent={12} color="warning">
                <AccountCircleIcon sx={{ width: '45px', height: '45px' }} />
              </Badge>
              <Typography>Puppey</Typography>
              <Image
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 0,
                  borderRadius: '50%',
                }}
                width={25}
                height={25}
                alt="lion"
                src="/hero/lion.webp"
              />
            </Box>
            {/* items  */}
            <Box
              sx={{
                // flexGrow: 1,
                display: 'flex',
                flexFlow: 'row nowrap',
                border: '1px solid black',
                justifyContent: 'center',
              }}
            >
              <Grid container>
                <Grid xs={4}>
                  <Image
                    width={38}
                    height={25}
                    alt="item_butterfly"
                    src="/item/item_butterfly.webp"
                  />
                </Grid>
                <Grid xs={4}>
                  <Image
                    width={38}
                    height={25}
                    alt="item_butterfly"
                    src="/item/item_butterfly.webp"
                  />
                </Grid>
                <Grid xs={4}>
                  <Image
                    width={38}
                    height={25}
                    alt="item_butterfly"
                    src="/item/item_butterfly.webp"
                  />
                </Grid>
                <Grid xs={4}>
                  <Image
                    width={38}
                    height={25}
                    alt="item_butterfly"
                    src="/item/item_butterfly.webp"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        {/* right  */}
      </Box>

      <div style={{ height: '80px', width: '100%' }}></div>
    </Box>
  );
}
