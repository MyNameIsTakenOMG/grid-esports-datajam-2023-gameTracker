'use client';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

const tournaments = ['The International 2022', 'PGL Arlington Major 2022'];

export default function Tournaments() {
  const router = useRouter();

  return (
    <>
      <Typography variant="h5" sx={{ my: 2 }}>
        Dota2 Tournaments
      </Typography>

      {/* display tournaments  */}
      {tournaments.map((t) => {
        let imgPath =
          t.match('PGL') !== null
            ? '/PGL-Arlington-Major-2022.jpg'
            : '/dota2-TI-2022.jpeg';
        return (
          <Card sx={{ width: 345, alignSelf: 'center', mb: 4 }}>
            <CardActionArea
              onClick={() => {
                router.push(`/tournaments/${t}`);
              }}
            >
              <CardMedia height="160" component="img" alt={t} image={imgPath} />
              <CardContent>
                <Typography variant="h6">{t}</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas fuga et voluptates, quis dolores architecto a
                  consectetur. Iusto, voluptate deleniti?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
