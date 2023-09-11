import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* tournaments section  */}
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 4 }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', m: '1rem' }}
        >
          <Typography variant="h6">Tournaments</Typography>
          <Typography
            variant="body1"
            color="orange"
            sx={{ cursor: 'pointer', '&:hover': { color: 'orangered' } }}
          >
            More...
          </Typography>
        </Box>
        <Card sx={{ width: 345, alignSelf: 'center' }}>
          <CardActionArea>
            <CardMedia
              height="140"
              component="img"
              alt="The International 2022"
              image="/dota2-TI-2022.jpeg"
            />
            <CardContent>
              <Typography variant="h6">The International 2022</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      {/* matches section  */}
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 4 }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', m: '1rem' }}
        >
          <Typography variant="h6">Matches</Typography>
          <Typography
            variant="body1"
            color="orange"
            sx={{ cursor: 'pointer', '&:hover': { color: 'orangered' } }}
          >
            More...
          </Typography>
        </Box>
        <Card sx={{ width: 345, alignSelf: 'center' }}>
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
                    src="/team/Secret-logo.png"
                  />
                  <Typography variant="body2" sx={{ mt: '4px' }}>
                    Secret
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Typography variant="h6" sx={{ alignSelf: 'center' }}>
                    1:1
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '5px',
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
                    src="/team/tundra-esports-logo.png"
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

      {/* rankings section  */}
      <Box sx={{ display: 'flex', flexFlow: 'column nowrap', mb: 4 }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', m: '1rem' }}
        >
          <Typography variant="h6">Rankings</Typography>
          <Typography
            variant="body1"
            color="orange"
            sx={{ cursor: 'pointer', '&:hover': { color: 'orangered' } }}
          >
            More...
          </Typography>
        </Box>
        <Skeleton
          variant="rounded"
          width="345px"
          height="50px"
          sx={{ mb: '0.5rem', alignSelf: 'center' }}
        />
        <Skeleton
          variant="rounded"
          width="345px"
          height="50px"
          sx={{ mb: '0.5rem', alignSelf: 'center' }}
        />
        <Skeleton
          variant="rounded"
          width="345px"
          height="50px"
          sx={{ mb: '0.5rem', alignSelf: 'center' }}
        />
      </Box>
    </>
  );
}
