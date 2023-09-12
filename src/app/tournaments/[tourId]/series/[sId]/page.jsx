'use client';

import {
  Badge,
  Box,
  Button,
  Chip,
  Paper,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';
import { ApolloClient, ApolloProvider, gql, useQuery } from '@apollo/client';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { client, fetchSeriesStatesQuery } from '@/apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStates,
  seriesStatesData,
  seriesStatesError,
  seriesStatesLoading,
} from '@/store/seriesStatesSlice';

export default function Sery() {
  const [value, setValue] = useState(0);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const seriesData = useSelector(seriesStatesData);
  const seriesLoading = useSelector(seriesStatesLoading);
  const seriesError = useSelector(seriesStatesError);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(fetchStates(params.sId));

    return () => {};
  }, []);

  if (seriesLoading)
    return (
      <>
        <Skeleton
          variant="rounded"
          height={120}
          width="80%"
          sx={{ maxWidth: '450px', mb: 3 }}
        />
        <Skeleton
          variant="rounded"
          height={120}
          width="80%"
          sx={{ maxWidth: '450px', mb: 3 }}
        />
        <Skeleton
          variant="rounded"
          height={120}
          width="80%"
          sx={{ maxWidth: '450px', mb: 3 }}
        />
      </>
    );

  if (seriesError)
    return (
      <Typography
        variant="h6"
        sx={{
          p: '1rem',
          color: 'white',
          background: 'red',
          borderRadius: '5px',
        }}
      >
        Error...
      </Typography>
    );

  return (
    <>
      <Typography variant="h6" sx={{ my: 2 }}>
        Dota2 The International 2022
      </Typography>

      {/* scoreboard  */}
      <Box
        sx={{
          width: '80%',
          maxWidth: '620px',
          display: 'flex',
          flexFlow: 'row nowrap',
          mb: 2,
        }}
      >
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
              alt={seriesData.teams[0].name}
              src={`/team/${seriesData.teams[0].name
                .toLowerCase()
                .replaceAll(' ', '-')}-logo.png`}
            />
          </Box>
          <Typography variant="body1">{seriesData.teams[0].name}</Typography>
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
          <Typography variant="body1">
            {seriesData.format.replaceAll('-', ' ')}
          </Typography>
          <Typography variant="h6">
            {seriesData.teams[0].score}:{seriesData.teams[1].score}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: seriesData.finished ? 'grey' : 'red',
              color: 'white',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            {seriesData.finished ? 'ended' : 'ongoing'}
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
              alt={seriesData.teams[1].name}
              src={`/team/${seriesData.teams[1].name
                .toLowerCase()
                .replaceAll(' ', '-')}-logo.png`}
            />
          </Box>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            {seriesData.teams[1].name}
          </Typography>
        </Paper>
      </Box>

      {/* statisticsPanel  */}
      <Box
        sx={{
          width: '80%',
          maxWidth: '620px',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
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
            aria-label="games tabs"
          >
            {seriesData.games.map((game, index) => {
              return <Tab key={index} label={`Game${game.sequenceNumber}`} />;
            })}
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
              alt={seriesData.teams[0].name}
              src={`/team/${seriesData.teams[0].name
                .toLowerCase()
                .replaceAll(' ', '-')}-logo.png`}
            />
            <Typography variant="body2">{seriesData.teams[0].name}</Typography>
          </Box>
          <Box
            sx={{
              width: '30%',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h6"
              color={seriesData.games[value].teams[0].won ? 'green' : 'red'}
            >
              {seriesData.games[value].teams[0].won ? 'win' : 'lose'}
            </Typography>
            <Typography variant="h6">:</Typography>
            <Typography
              variant="h6"
              color={seriesData.games[value].teams[1].won ? 'green' : 'red'}
            >
              {seriesData.games[value].teams[1].won ? 'win' : 'lose'}
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
              alt={seriesData.teams[1].name}
              src={`/team/${seriesData.teams[1].name
                .toLowerCase()
                .replaceAll(' ', '-')}-logo.png`}
            />
            <Typography variant="body2">{seriesData.teams[1].name}</Typography>
          </Box>
        </Box>

        {/* game replay/ watch */}
        <Stack
          direction={'row'}
          sx={{
            justifyContent: 'center',
            width: '70%',
            alignSelf: 'center',
            mb: 2,
          }}
        >
          <Button
            color="warning"
            variant="contained"
            size="small"
            sx={{ borderRadius: '50px' }}
            onClick={() => {
              let sequenceNumber = seriesData.games[value].sequenceNumber;
              router.push(`${pathname}/games/${sequenceNumber}`);
            }}
          >
            {seriesData.games[value].finished ? 'Replay' : 'Watch'}
          </Button>
        </Stack>

        {/* ban / pick  */}
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          {/* team 1  */}
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-around',
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
              {seriesData.games[value].draftActions.map((draft, index) => {
                let t1 = seriesData.games[value].teams[0].id;
                if (t1 === draft.drafter.id && draft.type === 'ban') {
                  return (
                    <Image
                      key={index}
                      width={38}
                      height={25}
                      alt={draft.draftable.id}
                      src={`/hero/${draft.draftable.id}.webp`}
                    />
                  );
                }
              })}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '0.5rem',
              }}
            >
              <Typography>Picks</Typography>
              {seriesData.games[value].draftActions.map((draft, index) => {
                let t1 = seriesData.games[value].teams[0].id;
                if (t1 === draft.drafter.id && draft.type === 'pick') {
                  return (
                    <Image
                      key={index}
                      width={45}
                      height={30}
                      alt={draft.draftable.id}
                      src={`/hero/${draft.draftable.id}.webp`}
                    />
                  );
                }
              })}
            </Box>
          </Box>
          {/* team 2  */}
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-around',
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
              {seriesData.games[value].draftActions.map((draft, index) => {
                let t1 = seriesData.games[value].teams[1].id;
                if (t1 === draft.drafter.id && draft.type === 'ban') {
                  return (
                    <Image
                      key={index}
                      width={38}
                      height={25}
                      alt={draft.draftable.id}
                      src={`/hero/${draft.draftable.id}.webp`}
                    />
                  );
                }
              })}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '0.5rem',
              }}
            >
              <Typography>Picks</Typography>
              {seriesData.games[value].draftActions.map((draft, index) => {
                let t1 = seriesData.games[value].teams[1].id;
                if (t1 === draft.drafter.id && draft.type === 'pick') {
                  return (
                    <Image
                      key={index}
                      width={45}
                      height={30}
                      alt={draft.draftable.id}
                      src={`/hero/${draft.draftable.id}.webp`}
                    />
                  );
                }
              })}
            </Box>
          </Box>
        </Box>

        {/* players stats  */}
        <Box sx={{ display: 'flex', flexFlow: 'row nowrap', mb: 1 }}>
          {/* left - team1  */}
          <Box
            sx={{
              width: '50%',
              display: 'flex',
              flexFlow: 'column nowrap',
              rowGap: '1rem',
            }}
          >
            {/* player & hero & builds */}
            {seriesData.games[value].teams[0].players.map((player, index) => {
              return (
                <Stack
                  key={index}
                  direction={'row'}
                  sx={{ justifyContent: 'space-between' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      flexFlow: 'column nowrap',
                      alignItems: 'center',
                      mr: '1rem',
                      width: '30%',
                    }}
                  >
                    <Badge
                      badgeContent={player.objectives[0].completionCount + 1}
                      color="warning"
                    >
                      <AccountCircleIcon
                        sx={{ width: '45px', height: '45px' }}
                      />
                    </Badge>
                    <Typography>{player.name}</Typography>
                    <Typography>
                      {player.kills}/{player.deaths}/{player.killAssistsGiven}
                    </Typography>
                    <Image
                      style={{
                        position: 'absolute',
                        top: 20,
                        right: 0,
                        borderRadius: '50%',
                      }}
                      width={25}
                      height={25}
                      alt={player.character.id}
                      src={`/hero/${player.character.id}.webp`}
                    />
                  </Box>
                  {/* items  */}
                  <Box
                    sx={{
                      // flexGrow: 1,
                      width: '70%',
                      display: 'flex',
                      flexFlow: 'row nowrap',
                      justifyContent: 'center',
                    }}
                  >
                    <Grid container>
                      {player.items.map((item, index) => {
                        if (item.equipped)
                          return (
                            <Grid xs={4} key={index}>
                              <Image
                                width={38}
                                height={25}
                                alt={item.id}
                                src={`/item/${item.id}.webp`}
                              />
                            </Grid>
                          );
                      })}
                    </Grid>
                  </Box>
                </Stack>
              );
            })}
          </Box>
          {/* right- team2  */}

          <Box
            sx={{
              width: '50%',
              display: 'flex',
              flexFlow: 'column nowrap',
              rowGap: '1rem',
            }}
          >
            {/* player & hero & builds */}
            {seriesData.games[value].teams[1].players.map((player, index) => {
              return (
                <Stack
                  key={index}
                  direction={'row-reverse'}
                  sx={{ justifyContent: 'space-between' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      flexFlow: 'column nowrap',
                      alignItems: 'center',
                      mr: '1rem',
                      width: '30%',
                    }}
                  >
                    <Badge
                      badgeContent={player.objectives[0].completionCount + 1}
                      color="warning"
                    >
                      <AccountCircleIcon
                        sx={{ width: '45px', height: '45px' }}
                      />
                    </Badge>
                    <Typography>{player.name}</Typography>
                    <Typography>
                      {player.kills}/{player.deaths}/{player.killAssistsGiven}
                    </Typography>
                    <Image
                      style={{
                        position: 'absolute',
                        top: 20,
                        right: 0,
                        borderRadius: '50%',
                      }}
                      width={25}
                      height={25}
                      alt={player.character.id}
                      src={`/hero/${player.character.id}.webp`}
                    />
                  </Box>
                  {/* items  */}
                  <Box
                    sx={{
                      // flexGrow: 1,
                      width: '70%',
                      display: 'flex',
                      flexFlow: 'row nowrap',
                      justifyContent: 'center',
                    }}
                  >
                    <Grid container>
                      {player.items.map((item, index) => {
                        if (item.equipped)
                          return (
                            <Grid xs={4} key={index}>
                              <Image
                                width={38}
                                height={25}
                                alt={item.id}
                                src={`/item/${item.id}.webp`}
                              />
                            </Grid>
                          );
                      })}
                    </Grid>
                  </Box>
                </Stack>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
