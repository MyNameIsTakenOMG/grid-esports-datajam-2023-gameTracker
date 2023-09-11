'use client';

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
import { useRouter, usePathname } from 'next/navigation';

const series = [
  {
    sId: '2364966',
    format: 'best-of-3',
    scores: '1-1',
    finished: false,
    team: ['secret', 'tundra esports'],
  },
  {
    sId: '2432302',
    format: 'best-of-3',
    scores: '1-1',
    finished: false,
    team: ['secret', 'team liquid'],
  },
  {
    sId: '2432453',
    format: 'best-of-5',
    scores: '2-0',
    finished: false,
    team: ['secret', 'tundra esports'],
  },
];

export default function Tournament() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Typography variant="h6" sx={{ my: 3 }}>
        Dota2 The International 2022
      </Typography>
      <Card sx={{ width: 345, alignSelf: 'center', mb: 4 }}>
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
      </Card>

      {/* series section  */}
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 4 }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', m: '1rem' }}
        >
          <Typography variant="h6">Matches</Typography>
        </Box>

        {series.map((s) => {
          return (
            <Card sx={{ width: 345, alignSelf: 'center', mb: 4 }}>
              <CardActionArea
                onClick={() => {
                  router.push(`${pathname}/series/${s.sId}`);
                }}
              >
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
                    {/* team #1  */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        width={48}
                        height={48}
                        alt={s.team[0]}
                        src={`/team/${s.team[0].replaceAll(' ', '-')}-logo.png`}
                      />
                      <Typography variant="body2" sx={{ mt: '4px' }}>
                        {s.team[0]}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                      <Typography>{s.format.replaceAll('-', ' ')}</Typography>
                      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                        {s.scores}
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
                        {s.finished ? 'Ended' : 'Ongoing'}
                      </Typography>
                    </Box>

                    {/* team #2  */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        width={48}
                        height={48}
                        alt={s.team[1]}
                        src={`/team/${s.team[1].replaceAll(' ', '-')}-logo.png`}
                      />
                      <Typography variant="body2" sx={{ mt: '4px' }}>
                        {s.team[1]}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
