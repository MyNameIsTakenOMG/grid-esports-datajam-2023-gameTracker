'use client';

import {
  Badge,
  Box,
  Grid,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTeamInfo,
  liveGameData,
  liveGameError,
  liveGameLoading,
  messageReceived,
} from '@/store/liveGameDataSlice';

export default function Game() {
  const params = useParams(); // grap seriesId and game id, used to connect to
  // websocket server and receive events

  const dispatch = useDispatch();

  const liveData = useSelector(liveGameData);
  const liveLoading = useSelector(liveGameLoading);
  const liveError = useSelector(liveGameError);

  // fetch teams information
  useEffect(() => {
    dispatch(fetchTeamInfo(params.sId));
  }, []);

  useEffect(() => {
    let wsClient = new WebSocket(`ws://localhost:8080/${params.sId}`);
    if (!liveLoading && !liveError) {
      wsClient.addEventListener('open', (e) => {
        wsClient.send(
          JSON.stringify({ sequenceNumber: parseInt(params.gameId) })
        );
      });
      wsClient.addEventListener('message', (e) => {
        console.log('message received from server: ', e.data);
        dispatch(messageReceived(JSON.parse(e.data)));
      });
    }

    return () => {
      // wsClient.close();
    };
  }, [liveLoading, liveError]);

  if (liveLoading)
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

  if (liveError)
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
      <Typography variant="body1" sx={{ my: 2 }}>
        TI2022 - {liveData.teams[0].name} vs {liveData.teams[1].name}
      </Typography>

      {/* result-board  */}
      <Box
        sx={{
          width: '80%',
          maxWidth: '600px',
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
              alt={liveData.teams[0].name}
              src={`/team/${liveData.teams[0].name
                .toLowerCase()
                .replaceAll(' ', '-')}-logo.png`}
            />
          </Box>
          <Typography variant="body1">{liveData.teams[0].name}</Typography>
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
          <Typography variant="body2">Game {params.gameId}</Typography>
          <Stack direction={'row'}>
            <Typography variant="h6" color={'red'}>
              VS
            </Typography>
          </Stack>
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
              alt={liveData.teams[1].name}
              src={`/team/${liveData.teams[1].name
                .toLowerCase()
                .replaceAll(' ', '-')}-logo.png`}
            />
          </Box>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            {liveData.teams[1].name}
          </Typography>
        </Paper>
      </Box>

      {/* replay & live events-board  */}
      <Stack
        direction="column-reverse"
        sx={{
          outline: '1px solid orange',
          borderRadius: '5px',
          alignSelf: 'center',
          width: '80%',
          maxWidth: '600px',
          height: '300px',
          my: 2,
          p: 1,
          overflowY: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', flexFlow: 'column' }}>
          {liveData.eventsLogs.map((log, index) => {
            return (
              <Typography
                key={index}
                variant="body2"
                sx={{ p: 1, borderBottom: '1px solid orange' }}
              >
                {log}
              </Typography>
            );
          })}
        </Box>
      </Stack>

      <Box
        sx={{
          width: '80%',
          maxWidth: '600px',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
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
              {liveData.draftActions.map((draft, index) => {
                let t1 = liveData.teams[0].id;
                if (t1 === draft.drafter.id && draft.type === 'banned') {
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
              {liveData.draftActions.map((draft, index) => {
                let t1 = liveData.teams[0].id;
                if (t1 === draft.drafter.id && draft.type === 'picked') {
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
              {liveData.draftActions.map((draft, index) => {
                let t1 = liveData.teams[1].id;
                if (t1 === draft.drafter.id && draft.type === 'banned') {
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
              {liveData.draftActions.map((draft, index) => {
                let t1 = liveData.teams[1].id;
                if (t1 === draft.drafter.id && draft.type === 'picked') {
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
            {liveData.teams[0].players.map((player, index) => {
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
                      badgeContent={
                        player.objectives
                          ? player.objectives[0].completionCount + 1
                          : 1
                      }
                      color="warning"
                    >
                      <AccountCircleIcon
                        sx={{ width: '45px', height: '45px' }}
                      />
                    </Badge>
                    <Typography>{player.name}</Typography>
                    <Typography>
                      {player.kills ? player.kills : 0}/
                      {player.deaths ? player.deaths : 0}/
                      {player.killAssistsGiven ? player.killAssistsGiven : 0}
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
                      alt={player.character}
                      src={`/hero/${player.character}.webp`}
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
                      {player.items &&
                        player.items.map((item, index) => {
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
            {liveData.teams[1].players.map((player, index) => {
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
                      badgeContent={
                        player.objectives
                          ? player.objectives[0].completionCount + 1
                          : 1
                      }
                      color="warning"
                    >
                      <AccountCircleIcon
                        sx={{ width: '45px', height: '45px' }}
                      />
                    </Badge>
                    <Typography>{player.name}</Typography>
                    <Typography>
                      {player.kills ? player.kills : 0}/
                      {player.deaths ? player.deaths : 0}/
                      {player.killAssistsGiven ? player.killAssistsGiven : 0}
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
                      alt={player.character}
                      src={`/hero/${player.character}.webp`}
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
                      {player.items &&
                        player.items.map((item, index) => {
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
