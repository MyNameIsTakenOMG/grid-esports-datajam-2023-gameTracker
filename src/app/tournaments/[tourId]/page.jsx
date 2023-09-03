import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';

export default function Tournament() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      <Typography variant="h6" sx={{ my: 3 }}>
        Dota2 The International 2022
      </Typography>
      <Card sx={{ width: 345, alignSelf: 'center', mb: 4 }}>
        <CardActionArea>
          <CardMedia
            height="160"
            component="img"
            alt="The International 2022"
            image="/dota2-TI-2022.jpeg"
          />
          <CardContent>
            <Typography variant="h6">About</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              fuga et voluptates, quis dolores architecto a consectetur. Iusto,
              voluptate deleniti?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* series section  */}
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 4 }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', m: '1rem' }}
        >
          <Typography variant="h6">Matches</Typography>
        </Box>
        <Card sx={{ width: 345, alignSelf: 'center', mb: 4 }}>
          <CardActionArea>
            <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
              <Typography
                variant="body1"
                sx={{
                  padding: '1rem',
                  backgroundColor: 'orange',
                  color: 'white',
                }}
              >
                The International 2022
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'center',
                  columnGap: 4,
                  py: '1rem',
                }}
              >
                <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Image
                    width={48}
                    height={48}
                    alt="secret"
                    src="/Secret-logo.png"
                  />
                  <Typography variant="body2" sx={{ mt: '4px' }}>
                    Secret
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Typography>Best of 3</Typography>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    1:1
                  </Typography>
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
                <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Image
                    width={48}
                    height={48}
                    alt="secret"
                    src="/tundra-esports-logo.png"
                  />
                  <Typography variant="body2" sx={{ mt: '4px' }}>
                    Tundra
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 345, alignSelf: 'center', mb: 4 }}>
          <CardActionArea>
            <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
              <Typography
                variant="body1"
                sx={{
                  padding: '1rem',
                  backgroundColor: 'orange',
                  color: 'white',
                }}
              >
                The International 2022
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'center',
                  columnGap: 4,
                  py: '1rem',
                }}
              >
                <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Image
                    width={48}
                    height={48}
                    alt="secret"
                    src="/Secret-logo.png"
                  />
                  <Typography variant="body2" sx={{ mt: '4px' }}>
                    Secret
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Typography>Best of 3</Typography>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    1:1
                  </Typography>
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
                <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Image
                    width={48}
                    height={48}
                    alt="secret"
                    src="/tundra-esports-logo.png"
                  />
                  <Typography variant="body2" sx={{ mt: '4px' }}>
                    Tundra
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>

        <Card sx={{ width: 345, alignSelf: 'center', mb: 4 }}>
          <CardActionArea>
            <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
              <Typography
                variant="body1"
                sx={{
                  padding: '1rem',
                  backgroundColor: 'orange',
                  color: 'white',
                }}
              >
                The International 2022
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'center',
                  columnGap: 4,
                  py: '1rem',
                }}
              >
                <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Image
                    width={48}
                    height={48}
                    alt="secret"
                    src="/Secret-logo.png"
                  />
                  <Typography variant="body2" sx={{ mt: '4px' }}>
                    Secret
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Typography>Best of 3</Typography>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    1:1
                  </Typography>
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
                <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Image
                    width={48}
                    height={48}
                    alt="secret"
                    src="/tundra-esports-logo.png"
                  />
                  <Typography variant="body2" sx={{ mt: '4px' }}>
                    Tundra
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      </Box>

      <div style={{ height: '80px', width: '100%' }}></div>
    </Box>
  );
}
