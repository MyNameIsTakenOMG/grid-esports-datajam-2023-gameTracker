import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

export default function Tournaments() {
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
      <Typography variant="h5" sx={{ my: 2 }}>
        Dota2 Tournaments
      </Typography>

      {/* dota2 TI 2022  */}
      <Card sx={{ width: 345, alignSelf: 'center', mb: 4 }}>
        <CardActionArea>
          <CardMedia
            height="160"
            component="img"
            alt="The International 2022"
            image="/dota2-TI-2022.jpeg"
          />
          <CardContent>
            <Typography variant="h6">The International 2022</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              fuga et voluptates, quis dolores architecto a consectetur. Iusto,
              voluptate deleniti?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* PGL Arlington Major 2022  */}
      <Card sx={{ width: 345, alignSelf: 'center', mb: 4 }}>
        <CardActionArea>
          <CardMedia
            height="160"
            component="img"
            alt="PGL Arlington Major"
            image="/PGL-Arlington-Major-2022.jpg"
          />
          <CardContent>
            <Typography variant="h6">PGL Arlington Major-2022</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              fuga et voluptates, quis dolores architecto a consectetur. Iusto,
              voluptate deleniti?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <div style={{ height: '80px', width: '100%' }}></div>
    </Box>
  );
}
